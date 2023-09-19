export const config = () => ({
  auth: {
      host: process.env.AUTH_HOST || 'localhost',
      httpPort: parseInt(process.env.AUTH_HTTP_PORT),
      rpcPort: parseInt(process.env.AUTH_RPC_PORT)
  }
});
