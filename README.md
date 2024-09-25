<div align="center">
<a href="https://svgl.app">
<img src="public/imgs/readme.png">
</a>
<p></p>
</div>

## 🛠️ Stack

- [**NextJS**](https://nextjs.org/) - React framework for building full-stack web applications.
- [**Typescript**](https://www.typescriptlang.org/) - JavaScript with syntax for types.
- [**Tailwindcss**](https://tailwindcss.com/) - CSS framework for building custom designs.
- [**Express**](https://expressjs.com/) - Framework that provides a robust set of features for web and mobile applications..
- [**Prisma**](https://www.prisma.io/orm) - Next-generation Node.js and TypeScript ORM.
- [**PostgreSQL**](https://www.postgresql.org/) - Open source object-relational database system.
- [**Azure Blob Storage**](https://azure.microsoft.com/en-us/products/storage/blobs) - Massively scalable and secure object storage for cloud-native workloads, archives, data lakes, high-performance computing, and machine learning.
- [**Azure Load Balancer**](https://azure.microsoft.com/es-es/products/load-balancer/) - Load balances Internet and private network traffic with high performance and low latency.


## 🚀 Getting Started (Frontend)

> [!IMPORTANT]
> You will need an Azure Account to run this project. You can create a free account [here](https://azure.microsoft.com/en-us/free/).

You will need:

- [Node.js 18+](https://nodejs.org/en/).
- [Git](https://git-scm.com/).
- [PostgreSQL](https://www.postgresql.org/).
- [Azure Account](https://azure.microsoft.com/en-us/free/).


```bash
git clone git@github.com:your_username/op-project.git
```

2. Install dependencies:

```bash
cd op-project

npm install
```

3. Create a `.env` file in the root of the project with the following content:

```bash

POSTGRES_URL=""
POSTGRES_PRISMA_URL=""
POSTGRES_URL_NO_SSL=""
POSTGRES_URL_NON_POOLING=""
POSTGRES_USER=""
POSTGRES_HOST=""
POSTGRES_PASSWORD=""
POSTGRES_DATABASE=""
AUTH_SECRET="" 
AUTH_GITHUB_ID=""
AUTH_GITHUB_SECRET=""
```

4. Run the project:

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## 🚀 Setup Backend








