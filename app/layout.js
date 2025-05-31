import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Spendora",
  description: "Created by Abhinav",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={`${inter.className}`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Toaster richColors/>
        <footer className="bg-blue-50 py-2">
          <div className="container mx-auto px-1 text-center text-gray-600">
            
            <p>Made with 💗 by Abhinav</p>
          </div>
        </footer>
      </body>
    </html>
    </ClerkProvider>
  );
}
