
# PokeAPI - SimbioX

Projeto com a finalidade de consumir a api e demonstrar na tela uma lista de pokemons com informações como id, nome, tipo, peso e altura.


Link para acesso online:  https://pokedex-viniciusfonsecapr.netlify.app/
## Fotos do Projeto
- Pagina Principal do Site. - Campo de Busca deve ser buscado apenas com letras minusculas.
![TelaPrincipalPokeDex](https://user-images.githubusercontent.com/87347314/180499734-3ea06f9a-1e17-4e88-a828-4b3cf232c5df.png) <br>

- Favoritar Pokemon - Ao favoritar seu pokemon ficava salvo no localStorage e contado junta numeração de pokebolas no parte superior
![FavoritarPokemon](https://user-images.githubusercontent.com/87347314/180500162-0cbc9386-b2a3-4f2e-ad0a-93bb625e5eda.png) <br>

- Versão Mobile do Site <br>
![Tela Mobile](https://user-images.githubusercontent.com/87347314/180500596-ff1f8005-323c-4a18-b3a6-cd965f781dd9.png)


## Passo 1  - Instalação Geral 

Baixe o projeto em Code -> Download zip 

Extraia a pasta que está no zip em local de sua preferencia.

Após isso os arquivos do projeto  já estárão disponiveis. 

Siga o passo a passo abaixo para instalação do backend e front end.


## Instalação do Backend

Acesse o arquivo BackendAPi.zip que está na pasta raiz junto com os arquivos ex.:package.json.

Desconpactue e Extraia em pasta proxima a pasta raiz do frotend.
Para facilitar o acesso após.

Inicie o projeto em uma bash(powershell) secundaria a parte frontend,
ou em alguma Plataforma a parte.(Ex:Vs CODE)

Instale com npm e logo apos instale o yarn.

Observação: A api back está retornando apenas a lista de pokemon, nao sendo possivel utilizando ela para fazer filtros ou busca.
Na aplicação normal está sendo usada as rotas diretas RESTful da API, fazendo conexão direta com ela para rodar com as funções completas.

```bash
  npm install
  yarn install
  yarn dev
```

## Instalação do Front End 
Após descompactar os arquivos já vão estar disponiveis para uso. ( Passo 1 - Instalaçaõ Geral)

Após instalar o arquivos......

Instale pokeapi com npm/yarn no terminal seja no vscode ou pelo proprio terminal. 
Verifique se a pasta que o terminal localizou é a parte(master) do projeto se não de um,
cd PokeAPI-SimbioX.

```bash
  npm install 
  cd PokeAPI-SimbioX
  npm start ou yarn start
```
    
