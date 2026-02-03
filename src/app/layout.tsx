import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { CartDrawer } from "@/components/Cart/CartDrawer";
import { ChatBot } from "@/components/ChatBot/ChatBot";
import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
	title: "E-Commerce | Sua Loja Online",
	description: "Os melhores produtos com os melhores preços",
	keywords: ["e-commerce", "loja online", "produtos", "compras"],
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pt-BR">
			<body className={`${inter.variable} font-sans antialiased`}>
				<div className="flex flex-col min-h-screen">
					<Header />
					<main className="flex-grow">{children}</main>
					<Footer />
				</div>
				<Toaster />
				<CartDrawer />
				<ChatBot />
			</body>
		</html>
	);
}
