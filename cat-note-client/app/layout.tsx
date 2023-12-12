import type { Metadata } from 'next'
import './globals.css'
import { UserProvider } from '@auth0/nextjs-auth0/client';
import Header from "@/app/components/widgets/headerWithMenu/header";

export const metadata: Metadata = {
  title: 'CatNote',
  description: 'CatNote here!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <UserProvider>
        <body>
            <Header/>
            {children}
        </body>
      </UserProvider>
    </html>
  )
}
