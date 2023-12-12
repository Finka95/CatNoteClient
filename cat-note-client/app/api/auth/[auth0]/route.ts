import { handleAuth, handleLogin  } from '@auth0/nextjs-auth0';

export const GET = handleAuth({
    login: handleLogin({
      authorizationParams: {
        audience: 'https://localhost:7165/api',
        scope: ''
      }
    })
})
