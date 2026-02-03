"use client";

import { ArrowLeft, Package, Shield, ShoppingCart, Truck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { formatPrice } from "@/lib/formatters";
import { useCartStore } from "@/store/cartStore";
import type { Product } from "@/types/product";

interface ProductDetailProps {
	product: Product;
}

export function ProductDetail({ product }: ProductDetailProps) {
	const { addItem, toggleCart } = useCartStore();

	const handleAddToCart = () => {
		addItem(product);
		toggleCart();
	};

	return (
		<div className="container mx-auto px-4 py-8">
			<Link
				href="/"
				className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8"
			>
				<ArrowLeft size={16} />
				Voltar para produtos
			</Link>

			<div className="grid md:grid-cols-2 gap-8 lg:gap-12">
				<div className="space-y-4">
					<Card className="overflow-hidden">
						<CardContent className="p-0">
							<div className="relative aspect-square bg-gray-100">
								<Image
									src={product.image}
									alt={product.name}
									fill
									className="object-cover"
									sizes="(max-width: 768px) 100vw, 50vw"
									priority
								/>
							</div>
						</CardContent>
					</Card>
				</div>

				<div className="space-y-6">
					<div className="space-y-3">
						<Badge variant="outline" className="border-purple-400 text-purple-300">
							{product.category}
						</Badge>
						<h1 className="text-3xl md:text-4xl font-bold text-white">
							{product.name}
						</h1>
						<div className="flex items-baseline gap-2">
							<span className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
								{formatPrice(product.price)}
							</span>
						</div>
					</div>

					<Separator className="bg-purple-500/20" />

					<div className="space-y-2">
						<h2 className="font-semibold text-lg text-white">Descrição</h2>
						<p className="text-gray-300 leading-relaxed">
							{product.description}
						</p>
					</div>

					<Separator className="bg-purple-500/20" />

					<div className="space-y-2">
						<div className="flex items-center gap-2">
							<Package size={18} className="text-purple-300" />
							<span className="text-sm text-gray-200">
								{product.stock > 0 ? (
									<>
										<span className="font-medium text-green-400">
											Em estoque
										</span>
										{product.stock < 5 && (
											<span className="text-yellow-400 ml-2">
												(Apenas {product.stock} unidades restantes)
											</span>
										)}
									</>
								) : (
									<span className="font-medium text-red-400">
										Fora de estoque
									</span>
								)}
							</span>
						</div>
					</div>

					<Button
						onClick={handleAddToCart}
						disabled={product.stock === 0}
						size="lg"
						className="w-full"
					>
						<ShoppingCart size={20} className="mr-2" />
						Adicionar ao Carrinho
					</Button>

					<Card className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 border-purple-500/30">
						<CardContent className="p-6">
							<div className="space-y-4">
								<div className="flex items-start gap-3">
									<Truck size={20} className="text-purple-400 mt-0.5" />
									<div>
										<p className="font-medium text-white">Frete Grátis</p>
										<p className="text-sm text-gray-300">
											Para todo o Brasil
										</p>
									</div>
								</div>
								<Separator className="bg-purple-500/20" />
								<div className="flex items-start gap-3">
									<Shield size={20} className="text-purple-400 mt-0.5" />
									<div>
										<p className="font-medium text-white">Garantia</p>
										<p className="text-sm text-gray-300">
											1 ano de garantia do fabricante
										</p>
									</div>
								</div>
								<Separator className="bg-purple-500/20" />
								<div className="flex items-start gap-3">
									<Package size={20} className="text-purple-400 mt-0.5" />
									<div>
										<p className="font-medium text-white">Entrega Rápida</p>
										<p className="text-sm text-gray-300">
											Receba em até 7 dias úteis
										</p>
									</div>
								</div>
							</div>
						</CardContent>
					</Card>
				</div>
			</div>
		</div>
	);
}
