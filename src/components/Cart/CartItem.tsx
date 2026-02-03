"use client";

import { Minus, Plus, Trash2 } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { formatPrice } from "@/lib/formatters";
import { useCartStore } from "@/store/cartStore";
import type { CartItem as CartItemType } from "@/types/product";

interface CartItemProps {
	item: CartItemType;
}

export function CartItem({ item }: CartItemProps) {
	const { updateQuantity, removeItem } = useCartStore();

	return (
		<div className="flex gap-4 py-4">
			<div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border">
				<Image
					src={item.image}
					alt={item.name}
					fill
					className="object-cover"
					sizes="80px"
				/>
			</div>

			<div className="flex flex-1 flex-col gap-2">
				<div className="flex justify-between">
					<div>
						<h4 className="font-medium text-sm line-clamp-1">{item.name}</h4>
						<p className="text-xs text-muted-foreground">{item.category}</p>
					</div>
					<Button
						variant="ghost"
						size="icon"
						className="h-8 w-8 text-destructive"
						onClick={() => removeItem(item.id)}
						aria-label="Remover item"
					>
						<Trash2 size={16} />
					</Button>
				</div>

				<div className="flex items-center justify-between">
					<div className="flex items-center gap-2">
						<Button
							variant="outline"
							size="icon"
							className="h-8 w-8"
							onClick={() => updateQuantity(item.id, item.quantity - 1)}
							disabled={item.quantity <= 1}
							aria-label="Diminuir quantidade"
						>
							<Minus size={14} />
						</Button>
						<span className="w-8 text-center text-sm font-medium">
							{item.quantity}
						</span>
						<Button
							variant="outline"
							size="icon"
							className="h-8 w-8"
							onClick={() => updateQuantity(item.id, item.quantity + 1)}
							disabled={item.quantity >= item.stock}
							aria-label="Aumentar quantidade"
						>
							<Plus size={14} />
						</Button>
					</div>

					<span className="font-bold text-primary">
						{formatPrice(item.price * item.quantity)}
					</span>
				</div>
			</div>
		</div>
	);
}
