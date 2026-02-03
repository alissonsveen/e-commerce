"use client";

import { ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
	Sheet,
	SheetContent,
	SheetFooter,
	SheetHeader,
	SheetTitle,
} from "@/components/ui/sheet";
import { formatPrice } from "@/lib/formatters";
import { useCartStore } from "@/store/cartStore";
import { CartItem } from "./CartItem";

export function CartDrawer() {
	const { items, isOpen, toggleCart, getTotalPrice, clearCart } =
		useCartStore();

	return (
		<Sheet open={isOpen} onOpenChange={toggleCart}>
			<SheetContent side="right" className="flex w-full flex-col sm:max-w-lg">
				<SheetHeader>
					<SheetTitle className="flex items-center gap-2">
						<ShoppingBag size={20} />
						Seu Carrinho ({items.length} {items.length === 1 ? "item" : "itens"}
						)
					</SheetTitle>
				</SheetHeader>

				{items.length === 0 ? (
					<div className="flex flex-1 flex-col items-center justify-center gap-4 text-center">
						<ShoppingBag size={64} className="text-muted-foreground" />
						<div>
							<h3 className="text-lg font-semibold">Carrinho vazio</h3>
							<p className="text-sm text-muted-foreground">
								Adicione produtos para começar suas compras
							</p>
						</div>
						<Button onClick={toggleCart} variant="outline">
							Continuar Comprando
						</Button>
					</div>
				) : (
					<>
						<div className="flex-1 overflow-y-auto">
							<div className="divide-y">
								{items.map((item) => (
									<CartItem key={item.id} item={item} />
								))}
							</div>
						</div>

						<Separator />

						<SheetFooter className="flex-col gap-4">
							<div className="space-y-2">
								<div className="flex justify-between text-sm">
									<span className="text-muted-foreground">Subtotal</span>
									<span>{formatPrice(getTotalPrice())}</span>
								</div>
								<div className="flex justify-between text-sm">
									<span className="text-muted-foreground">Frete</span>
									<span className="text-green-600 font-medium">Grátis</span>
								</div>
								<Separator />
								<div className="flex justify-between text-lg font-bold gap-2">
									<span>Total</span>
									<span className="text-primary">
										{formatPrice(getTotalPrice())}
									</span>
								</div>
							</div>

							<div className="flex gap-2">
								<Button
									variant="outline"
									className="flex-1"
									onClick={() => {
										if (confirm("Tem certeza que deseja limpar o carrinho?")) {
											clearCart();
										}
									}}
								>
									Limpar
								</Button>
								<Button className="flex-1" size="lg">
									Finalizar Compra
								</Button>
							</div>
						</SheetFooter>
					</>
				)}
			</SheetContent>
		</Sheet>
	);
}
