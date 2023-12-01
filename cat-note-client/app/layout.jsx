import { UserProvider } from '@auth0/nextjs-auth0/client';

export default function layout({ children }) {
  return (
    <html lang="en">
      <UserProvider>
        <body>
          {children}
        </body>
      </UserProvider>
    </html>
  );
}
