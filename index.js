const puppeteer = require ("puppeteer");
const fs = require ("fs");
const stringify = require ("csv-stringify");
const url = "https://www.karvi.com.br/tabela-fipe/"; // URL alvo, alterar para a desejada

let dados = [];

(async () => {
    // Iniciando o navegador e acessando a url alvo
    const browser = await puppeteer.launch({
        headless: true
    });
    const page = await browser.newPage();
    console.log ("Navegador configurado e iniciado");

    await page.goto(url);
    console.log ("Acessei a url");

        // Identificando e coletando os links das marcas
        console.log ("Coletando os links das marcas");
        const linksdasMarcas = await page.$$eval('article > ul > li > a', el => el.map(link => link.href));
        console.log (linksdasMarcas);

        // Identificando e coletando os links dos carros
        for (const link of linksdasMarcas){
            console.log ("Acessando os links das marcas");
            await page.goto(link);

            console.log ("Coletando os links das marcas");
            const linksdosCarros = await page.$$eval('main > a', el => el.map(link => link.href.replace(/[()]/g, "-").replace(/ /g, "-")));
            console.log (linksdosCarros);

                // Identificando e coletando os links dos anos
                for (const link of linksdosCarros){
                    console.log ("Acessando os links dos carros");
                    await page.goto(link);

                    console.log ("Coletando os links dos anos");
                    const linksdosAnos = await page.$$eval('section > div > main > a', el => el.map(link => link.href));
                    console.log (linksdosAnos);

                        // Identificando e coletando os links das versões
                        for (const link of linksdosAnos){
                        console.log ("Acessando os links dos anos");
                        await page.goto(link);

                        console.log ("Coletando os links das versões");
                        const linksdasVersoes = await page.$$eval('section > div > main > a', el => el.map(link => link.href));
                        console.log (linksdasVersoes);

                            // Identificando e coletando os dados das versões
                            for (const link of linksdasVersoes){
                                console.log ("Acessando os links das versões");
                                await page.goto(link);
                                
                                await page.waitForSelector('nav > ol');
                                const marca = link.split('/')[4];
                                const carro = link.split('/')[5];
                                const ano = link.split('/')[6];

                                const versao = await page.$eval('article > div.mb-3.space-y-4 > h1', element => element.innerText.replace("Tabela Fipe ", ""));

                                await page.waitForSelector('section.mx-auto.sm\\:max-w-2xl > div.px-5 > div');
                                const logoMarca = await page.$eval('article > div.mb-3.space-y-4 > div > span > img', element => "https://www.karvi.com.br/" + element.getAttribute('src'));
                                const tabelaFipe = await page.$eval('div.px-5 > div > div > div:nth-child(1) > p', element => element.innerText.replace (" ",""));

                                console.log (marca, carro, ano, versao);

                                    // Tratando e salvando os dados
                                    const data = {
                                        marca: marca,
                                        carro: carro,
                                        ano: ano,
                                        versao: versao,
                                        logoMarca: logoMarca,
                                        tabelaFipe: tabelaFipe
                                    };
                                    dados.push(data);
                                    
                                    fs.writeFileSync('dados.json', JSON.stringify(dados, null, 2), 'utf-8', err => {
                                        if (err) throw new Error ("Erro ao gerar o JSON")
                                    });
                                    console.log('Dados salvos com sucesso');
                                    
                            }
                        }
                }   
        }

    await browser.close();
    console.log ("Tudo pronto, já fechei o navegador... Até a próxima!");
})();