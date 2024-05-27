SEVN News API

Uma API RESTful que fornece dados mockados para artigos de notícias, organizados em três endpoints principais.

## Endpoints

A API possui três endpoints principais:

1. **Obter os artigos principais da Home**

   - **Endpoint:** `GET /news`
   - **Descrição:** Retorna uma lista de artigos principais

2. **Obter os artigos secundários da Home**

   - **Endpoint:** `GET /news/secondary`
   - **Descrição:**

3. **Obter os detalhes de uma notícia**
   - **Endpoint:** `GET /news/:id`
   - **Descrição:** Retorna os detalhes de um artigo específico com base no ID fornecido.

## Instalação e Execução

1. **Clone o repositório:**

   ```sh
   git clone https://github.com/AndersonGama31/sevn-backend.git
   cd sevn-backend
   ```

2. **Instale as dependências:**

   ```sh
   pnpm install
   ```

3. **Execute a aplicação:**

   ```sh
    pnpm run start:dev
   ```

4. **Acesse a API:**

   Acesse a API em `http://localhost:3333`

## Estrutura dos Dados

Os artigos possuem a seguinte estrutura:

```json
{
  "id": "1",
  "title": "Quem não tiver valores a receber poderá ter nas próximas fases, diz BC",
  "subtitle": "Nesta primeira fase do serviço são cerca de R$ 4 bilhões a serem devolvidos. Banco Central estima que os clientes tenham a receber cerca de R$ 8 bilhões.",
  "date": "2021-08-30T00:00:00.000Z",
  "topic": "ECONOMY",
  "image": null,
  "content": "Empty content"
}
```
