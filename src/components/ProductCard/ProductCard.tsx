"use client";

import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { toast } from "sonner";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { formatPrice } from "@/lib/formatters";
import { useCartStore } from "@/store/cartStore";
import type { Product } from "@/types/product";

interface ProductCardProps {
	product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
	const { addItem, toggleCart } = useCartStore();

	const handleAddToCart = (e: React.MouseEvent) => {
		e.preventDefault();
		addItem(product);
		toggleCart();
		toast.success(`${product.name} adicionado ao carrinho!`, {
			duration: 3000,
			className: "toast-success",
			position: "top-center",
		});
	};

	return (
		<Link href={`/products/${product.id}`} className="group">
			<Card className="overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 border-gray-100">
				<CardContent className="p-0">
					<div className="relative aspect-square overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
						<Image
							src={product.image}
							alt={product.name}
							fill
							className="object-cover transition-transform duration-500 group-hover:scale-110"
							sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
						/>
						<div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
						
						{product.stock < 5 && product.stock > 0 && (
							<Badge
								variant="secondary"
								className="absolute top-3 right-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white hover:from-yellow-500 hover:to-orange-600 shadow-lg animate-pulse"
							>
								🔥 Últimas unidades
							</Badge>
						)}
						{product.stock === 0 && (
							<Badge 
								variant="destructive" 
								className="absolute top-3 right-3 shadow-lg"
							>
								Esgotado
							</Badge>
						)}
					</div>
				</CardContent>

				<CardFooter className="flex flex-col items-start gap-3 p-5 bg-white">
					<Badge 
						variant="outline" 
						className="text-xs font-medium bg-purple-50 text-purple-700 border-purple-200 hover:bg-purple-100"
					>
						{product.category}
					</Badge>
					<h3 className="line-clamp-2 font-semibold text-gray-900 group-hover:text-purple-600 transition-colors min-h-[3rem]">
						{product.name}
					</h3>

					<div className="flex w-full items-center justify-between mt-auto">
						<span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
							{formatPrice(product.price)}
						</span>

						<Button
							onClick={handleAddToCart}
							disabled={product.stock === 0}
							size="icon"
							className="group-hover:scale-110 transition-transform shadow-md hover:shadow-lg"
							aria-label="Adicionar ao carrinho"
						>
							<ShoppingCart size={20} />
						</Button>
					</div>
				</CardFooter>
			</Card>
		</Link>
	);
}
