import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Rupaya Rakshak",
  description: "Your Own Expense Tracker Site",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>

    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* header */}
        
        <Header/>

        <main className="min-h-screen"> {children} </main>
        <Toaster richColors /> 
        {/*footer*/}
        <footer className="bg-blue-50 py-6">
          <div className="container mx-auto px-4 text-center">
            <p>&lt;&gt; Expense Tracker &lt;/&gt;</p>
          </div>
        </footer>
      </body>
    </html>
    </ClerkProvider>
  );
}
