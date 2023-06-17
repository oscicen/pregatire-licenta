'use client'
import { Container } from '@chakra-ui/react'

import { Providers } from "./providers";

import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Pregatire Licenta',
  description: 'Pregatire Licenta 2023 Contabilitate si Informatica de Gestiune',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Container maxW='3xl'>
           {children}
          </Container>
        </Providers>
      </body>
    </html>
  )
}
