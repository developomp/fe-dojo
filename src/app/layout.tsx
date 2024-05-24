import type { Metadata } from "next"
import { Noto_Sans } from "next/font/google"
import "./globals.css"
import Head from "next/head"

const notoSans = Noto_Sans({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: "pomp's FE dojo",
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <Head>
                {/* https://nextjs.org/docs/app/api-reference/file-conventions/metadata/app-icons */}
                <link
                    rel="icon"
                    href="/favicon?<generated>"
                    type="image/<generated>"
                    sizes="<generated>"
                />
                <link
                    rel="apple-touch-icon"
                    href="/apple-icon?<generated>"
                    type="image/<generated>"
                    sizes="<generated>"
                />
            </Head>
            <body className={notoSans.className}>{children}</body>
        </html>
    )
}
