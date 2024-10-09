### pg 
gerencia banco de dados postgle

### express
gerencia coneções http

### ts config 
faz com que a pasta src seja gerenciada pelo js

### npx ts-node src/migrations/migrations.ts
para criação do banco de dados automatico


### npx ts-node src/server/server.ts
executar o servidor com o comando a cima

Testar a Rota GET /users:
### curl -X GET http://localhost:3000/users

 Testar a Rota POST /users:
### curl -X POST http://localhost:3000/users -H "Content-Type: application/json" -d '{"name": "  joãooo ", "email": "Leticiaminhasl2334@example.com"}'

***

testando o projeto:

### curl -X POST http://localhost:3000/register -H "Content-Type: application/json" -d '{"name": "João", "email": "joao@example.com", "password": "senhaSegura"}'

***

Fazer login:

### curl -X POST http://localhost:3000/login -H "Content-Type: application/json" -d '{"email": "joao@example.com", "password": "senhaSegura"}'

migrations , rotas, serves ,controllers,  models, repositorys