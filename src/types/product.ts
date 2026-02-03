export interface Product {
	id: number;
	name: string;
	price: number;
	description: string;
	image: string;
	category: string;
	stock: number;
}

export interface CartItem extends Product {
	quantity: number;
}

export interface CartStore {
	items: CartItem[];
	isOpen: boolean;
	addItem: (product: Product) => void;
	removeItem: (productId: number) => void;
	updateQuantity: (productId: number, quantity: number) => void;
	clearCart: () => void;
	toggleCart: () => void;
	getTotalItems: () => number;
	getTotalPrice: () => number;
}
