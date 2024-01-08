export const config = () => ({
  auth: {
      host: process.env.AUTH_HOST || 'localhost',
      httpPort: parseInt(process.env.AUTH_HTTP_PORT),
      rpcPort: parseInt(process.env.AUTH_RPC_PORT)
  },
  users: {
    host: process.env.USERS_HOST || 'localhost',
    rpcPort: parseInt(process.env.USERS_RPC_PORT)
  },
  database: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT),
  }
});
