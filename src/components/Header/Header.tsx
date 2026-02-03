"use client";

import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import { SearchBar } from "@/components/SearchBar/SearchBar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/store/cartStore";

export function Header() {
	const { getTotalItems, toggleCart } = useCartStore();
	const totalItems = getTotalItems();

	return (
		<header className="bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-purple-100">
			<div className="container mx-auto px-4 py-4">
				<nav className="flex items-center justify-between gap-4" aria-label="Navegação principal">
					<Link
						href="/"
						className="flex items-center gap-3 group flex-shrink-0"
						aria-label="Voltar para página inicial"
					>
						<div className="bg-gradient-to-br from-purple-600 to-pink-600 text-white rounded-xl p-2.5 shadow-lg group-hover:scale-110 transition-transform" aria-hidden="true">
							<ShoppingCart size={24} />
						</div>
						<span className="hidden sm:block text-xl md:text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
							E-Shop
						</span>
					</Link>

					<div className="hidden md:flex flex-1 max-w-md">
						<SearchBar />
					</div>

					<Button
						onClick={toggleCart}
						className="relative gap-2 shadow-md hover:shadow-lg hover:scale-105 transition-all flex-shrink-0"
						aria-label={`Abrir carrinho de compras${totalItems > 0 ? ` - ${totalItems} ${totalItems === 1 ? 'item' : 'itens'}` : ''}`}
					>
						<ShoppingCart size={20} aria-hidden="true" />
						<span className="hidden lg:inline">Carrinho</span>
						{totalItems > 0 && (
							<Badge
								variant="destructive"
								className="absolute -top-2 -right-2 h-6 w-6 rounded-full p-0 flex items-center justify-center animate-pulse shadow-lg bg-gradient-to-r from-red-500 to-pink-500"
								aria-label={`${totalItems} ${totalItems === 1 ? 'item' : 'itens'} no carrinho`}
							>
								{totalItems}
							</Badge>
						)}
					</Button>
				</nav>

				<div className="md:hidden mt-3">
					<SearchBar />
				</div>
			</div>
		</header>
	);
}
