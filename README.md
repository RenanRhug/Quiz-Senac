para buildar o app e rodar na máquina:

1º opção:

- usar o comando "ng serve" caso tenha a aplicação backend rodando na máquina. 

2º opção:

- usar o comando "ng serve --configuration=production" quando quiser usar a api que tá publicada no render

3º opção:

- na pasta src/enviroments tem o "enviroment.ts". Nele, tem uma apiUrl comentada e a outra não comentada. Descomentar a que for usar e comentar a que não vai. Nesse caso, utilizar o comando que já usava antes, como o npm start.


