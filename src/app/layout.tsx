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
	title: {
		default: "E-Shop | Sua Loja Online de Eletrônicos e Acessórios",
		template: "%s | E-Shop",
	},
	description:
		"E-commerce moderno com os melhores produtos em eletrônicos, áudio, periféricos e acessórios. Compre com segurança, frete grátis e entrega rápida.",
	keywords: [
		"e-commerce",
		"loja online",
		"eletrônicos",
		"áudio",
		"periféricos",
		"fones de ouvido",
		"compras online",
		"produtos com desconto",
	],
	authors: [{ name: "E-Shop" }],
	creator: "E-Shop",
	publisher: "E-Shop",
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
		},
	},
	openGraph: {
		type: "website",
		locale: "pt_BR",
		url: "https://e-commerce-peach-theta-17.vercel.app/",
		title: "E-Shop | Sua Loja Online de Eletrônicos",
		description: "Os melhores produtos em eletrônicos e acessórios com preços imperdíveis",
		siteName: "E-Shop",
	},
	twitter: {
		card: "summary_large_image",
		title: "E-Shop | Sua Loja Online",
		description: "Os melhores produtos com os melhores preços",
	},
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
