import { act, renderHook } from "@testing-library/react";
import type { Product } from "@/types/product";
import { useCartStore } from "../cartStore";

const mockProduct: Product = {
	id: 1,
	name: "Produto Teste",
	price: 99.99,
	description: "Descrição do produto teste",
	image: "/test-image.jpg",
	category: "Eletrônicos",
	stock: 10,
};

describe("useCartStore", () => {
	beforeEach(() => {
		const { result } = renderHook(() => useCartStore());
		act(() => {
			result.current.clearCart();
		});
	});

	it("should add item to cart", () => {
		const { result } = renderHook(() => useCartStore());

		act(() => {
			result.current.addItem(mockProduct);
		});

		expect(result.current.items).toHaveLength(1);
		expect(result.current.items[0].name).toBe("Produto Teste");
		expect(result.current.items[0].quantity).toBe(1);
	});

	it("should increase quantity when adding same item", () => {
		const { result } = renderHook(() => useCartStore());

		act(() => {
			result.current.addItem(mockProduct);
			result.current.addItem(mockProduct);
		});

		expect(result.current.items).toHaveLength(1);
		expect(result.current.items[0].quantity).toBe(2);
	});

	it("should remove item from cart", () => {
		const { result } = renderHook(() => useCartStore());

		act(() => {
			result.current.addItem(mockProduct);
			result.current.removeItem(mockProduct.id);
		});

		expect(result.current.items).toHaveLength(0);
	});

	it("should update item quantity", () => {
		const { result } = renderHook(() => useCartStore());

		act(() => {
			result.current.addItem(mockProduct);
			result.current.updateQuantity(mockProduct.id, 5);
		});

		expect(result.current.items[0].quantity).toBe(5);
	});

	it("should calculate total correctly", () => {
		const { result } = renderHook(() => useCartStore());

		act(() => {
			result.current.addItem(mockProduct);
			result.current.addItem(mockProduct);
		});

		const total = result.current.items.reduce(
			(sum, item) => sum + item.price * item.quantity,
			0,
		);
		expect(total).toBe(199.98);
	});

	it("should toggle cart drawer", () => {
		const { result } = renderHook(() => useCartStore());

		expect(result.current.isOpen).toBe(false);

		act(() => {
			result.current.toggleCart();
		});

		expect(result.current.isOpen).toBe(true);

		act(() => {
			result.current.toggleCart();
		});

		expect(result.current.isOpen).toBe(false);
	});

	it("should clear cart", () => {
		const { result } = renderHook(() => useCartStore());

		act(() => {
			result.current.addItem(mockProduct);
			result.current.addItem(mockProduct);
			result.current.clearCart();
		});

		expect(result.current.items).toHaveLength(0);
	});
});
