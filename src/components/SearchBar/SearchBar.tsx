"use client";

import { Search, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import type { Product } from "@/types/product";

export function SearchBar() {
	const [search, setSearch] = useState("");
	const [products, setProducts] = useState<Product[]>([]);
	const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
	const [isOpen, setIsOpen] = useState(false);
	const [showNoResults, setShowNoResults] = useState(false);
	const router = useRouter();
	const wrapperRef = useRef<HTMLDivElement>(null);
	const debounceTimer = useRef<NodeJS.Timeout | null>(null);

	useEffect(() => {
		async function fetchProducts() {
			try {
				const response = await fetch("/api/products");
				const data = await response.json();
				setProducts(data);
			} catch (error) {
				console.error("Erro ao buscar produtos:", error);
			}
		}
		fetchProducts();
	}, []);

	useEffect(() => {
		if (debounceTimer.current) {
			clearTimeout(debounceTimer.current);
		}

		if (search.trim().length > 0) {
			debounceTimer.current = setTimeout(() => {
				const searchTerm = search.toLowerCase().trim();
				const filtered = products.filter((product) => {
					const nameMatch = product.name.toLowerCase().includes(searchTerm);
					const categoryMatch = product.category.toLowerCase().includes(searchTerm);
					const descMatch = product.description.toLowerCase().includes(searchTerm);
					return nameMatch || categoryMatch || descMatch;
				});
				setFilteredProducts(filtered);
				setIsOpen(true);
				setShowNoResults(filtered.length === 0);
			}, 500);
		} else {
			setFilteredProducts([]);
			setIsOpen(false);
			setShowNoResults(false);
		}

		return () => {
			if (debounceTimer.current) {
				clearTimeout(debounceTimer.current);
			}
		};
	}, [search, products]);

	useEffect(() => {
		function handleClickOutside(event: MouseEvent) {
			if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
				setIsOpen(false);
				setShowNoResults(false);
			}
		}
		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, []);

	const handleSelect = (productId: number) => {
		router.push(`/products/${productId}`);
		setSearch("");
		setIsOpen(false);
		setShowNoResults(false);
	};

	const handleClear = () => {
		setSearch("");
		setIsOpen(false);
		setShowNoResults(false);
	};

	return (
		<div ref={wrapperRef} className="relative w-full max-w-sm" role="search">
			<div className="relative">
				<div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none z-10">
					<Search className="h-4 w-4 text-purple-600" aria-hidden="true" />
				</div>
				<Input
					type="text"
					placeholder="Buscar produtos..."
					value={search}
					onChange={(e) => setSearch(e.target.value)}
					onFocus={() => {
						if (search.trim().length > 0) {
							setIsOpen(true);
						}
					}}
					className="pl-9 pr-9 bg-white border-purple-200 focus:border-purple-400 transition-colors"
					aria-label="Buscar produtos"
					aria-autocomplete="list"
					aria-controls="search-results"
					aria-expanded={isOpen}
				/>
				{search && (
					<Button
						variant="ghost"
						size="icon"
						className="absolute right-1 top-1/2 -translate-y-1/2 h-7 w-7 z-10"
						onClick={handleClear}
						type="button"
					>
						<X className="h-4 w-4" />
					</Button>
				)}
			</div>

			{isOpen && (
				<Card className="absolute z-50 w-full mt-2 shadow-lg max-h-[400px] overflow-auto" id="search-results" role="listbox">
					<CardContent className="p-2">
						{filteredProducts.length > 0 ? (
							<div className="space-y-1">
								{filteredProducts.slice(0, 5).map((product) => (
									<button
										key={product.id}
										onClick={() => handleSelect(product.id)}
										className="w-full text-left px-3 py-2 rounded-md hover:bg-purple-50 transition-colors cursor-pointer"
										type="button"
										role="option"
										aria-selected="false"
									>
										<div className="flex items-center gap-3">
											<div className="flex-1">
												<p className="font-medium text-gray-900">{product.name}</p>
												<p className="text-xs text-gray-500">{product.category}</p>
											</div>
											<p className="text-sm font-bold text-purple-600">
												R$ {product.price.toFixed(2)}
											</p>
										</div>
									</button>
								))}
								{filteredProducts.length > 5 && (
									<p className="text-xs text-center text-gray-500 py-2">
										+{filteredProducts.length - 5} produtos encontrados
									</p>
								)}
							</div>
						) : showNoResults ? (
							<div className="py-8 text-center">
								<Search className="h-12 w-12 text-gray-300 mx-auto mb-2" />
								<p className="text-sm font-medium text-gray-900">
									Nenhum produto encontrado
								</p>
								<p className="text-xs text-gray-500 mt-1">
									Tente buscar por outro termo
								</p>
							</div>
						) : null}
					</CardContent>
				</Card>
			)}
		</div>
	);
}
