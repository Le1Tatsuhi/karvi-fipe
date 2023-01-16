# WEBSCRAPING
    - Garimpar os dados de qualquer site, mas nesse caso, eu o construi no site Karvi (https://www.karvi.com.br/tabela-fipe/), é necessário term um bom conhecimento em código JS, HTML e CSS para fazer com que o robô consiga realmente trabalhar em qualquer website.

    - Procurei deixar o código o mais intuitivo possível,  ou seja, comentei moderadamente cada passo do mesmo, junto com logs para excluir a necessidade de "ver" o robô trabalhando.

# Conhecimentos necessários
    - JavaScript
    - NPM
    - HTML + CSS

# Bibliotecas utilizadas
    - Puppeteer ( npm install puppeteer ) - Base para o programa
    - FS ( npm install fs ) - Salva os arquivos em JSON
    - stringify ( npm isntall stringify) - Salva os arquivos em CSV
    - json2csv ( npm install json2csv ) - Escreve o Json em xlsx
    - retry-as-promised ( npm install retry-as-promised) - Faz o código ter mais tentativas de carregar os dados evitando erros

# Casos de usos
    - Você poderá utilizar essa ferramenta para fazer o crawler de uma maneira mais fácil o possível utilizando o node.js e o puppeteer
    - É útil para quem precisa criar dados em massa, ou até mesmo criar diversos tipos de banco de dados

# O que o meu arquivo base faz?
    - O intuito é conseguir uma base para banco de dados de carros, passando por marcas, carros (ou modelos), anos e versões, salvando todos esses dados, em dois arquivos diferentes: .JSON e .CSV.

# Desafios ou Passos
    - [ x ] Criar o backend que irá se conectar ao site alvo
    - [ x ] Garimpar os dados
        - [ x ] Marcas
        - [ x ] Carros (modelos)
        - [ x ] Anos
        - [ x ] Versões
        - [ x ] Dados os carros, tabelas de valores, logo da marca
    - [ x ] Preparar os dados
    - [ x ] Salvar os dados em um arquivo local json

# Próximos passos
    - [ ] Salvar automáticamente os arquivos na nuvem ou em servidores