"use client";

import { useEffect, useState } from "react";
import { ProductCard } from "@/components/ProductCard/ProductCard";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import type { Product } from "@/types/product";

export function ProductGrid() {
	const [products, setProducts] = useState<Product[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		async function fetchProducts() {
			try {
				const response = await fetch("/api/products");
				if (!response.ok) throw new Error("Erro ao carregar produtos");
				const data = await response.json();
				setProducts(data);
			} catch (err) {
				setError("Não foi possível carregar os produtos");
				console.error(err);
			} finally {
				setLoading(false);
			}
		}

		fetchProducts();
	}, []);

	if (loading) {
		return (
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
				{[...Array(8)].map((_, i) => (
					<Card key={i}>
						<CardContent className="p-0">
							<Skeleton className="aspect-square w-full" />
						</CardContent>
						<CardFooter className="flex flex-col items-start gap-3 p-4">
							<Skeleton className="h-4 w-20" />
							<Skeleton className="h-6 w-full" />
							<div className="flex w-full items-center justify-between">
								<Skeleton className="h-8 w-24" />
								<Skeleton className="h-10 w-10 rounded-md" />
							</div>
						</CardFooter>
					</Card>
				))}
			</div>
		);
	}

	if (error) {
		return (
			<div className="text-center py-12">
				<p className="text-red-500 text-lg">{error}</p>
			</div>
		);
	}

	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
			{products.map((product) => (
				<ProductCard key={product.id} product={product} />
			))}
		</div>
	);
}
