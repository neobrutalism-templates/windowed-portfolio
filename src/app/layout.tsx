import type { Metadata } from 'next'
import { Archivo } from 'next/font/google'
import './globals.css'
import Nav from '@/components/nav'
import { ThemeProvider } from '@/components/theme-provider'

const archivo = Archivo({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'John Doe',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <body className={archivo.className}>
        <ThemeProvider attribute="class" disableTransitionOnChange>
          <div className="outline-border rounded-base w600:grid-cols-[70px_auto] w500:grid-cols-1 grid h-[800px] max-h-[100dvh] w-[1000px] max-w-[1000px] grid-cols-[100px_auto] shadow-[10px_10px_0_0_#000] outline-4 portrait:h-[100dvh]">
            <header className="border-r-border rounded-l-base bg-main w500:hidden relative flex items-center justify-center border-r-4 portrait:rounded-none">
              <h1 className="smallHeight:text-[30px] smallHeight:tracking-[2px] w600:text-[30px] w600:tracking-[2px] -rotate-90 text-[40px] font-bold tracking-[4px] whitespace-nowrap">
                <span className="text-main-foreground inline-block">
                  JOHN DOE
                </span>
              </h1>
            </header>
            <main className="rounded-br-base rounded-tr-base bg-background relative flex h-[800px] max-h-[100dvh] flex-col font-semibold portrait:h-[100dvh] portrait:max-h-[100dvh] portrait:rounded-none">
              <Nav />
              <div className="main h-full max-h-[750px] overflow-y-auto portrait:max-h-[calc(100dvh-50px)]">
                {children}
              </div>
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
