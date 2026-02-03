import { render, screen } from "@testing-library/react";
import type { Product } from "@/types/product";
import { ProductCard } from "../ProductCard";

const mockProduct: Product = {
	id: 1,
	name: "Produto Teste",
	price: 99.99,
	description: "Descrição do produto teste",
	image: "/test-image.jpg",
	category: "Eletrônicos",
	stock: 10,
};

describe("ProductCard", () => {
	it("should render product information", () => {
		render(<ProductCard product={mockProduct} />);

		expect(screen.getByText("Produto Teste")).toBeInTheDocument();
		expect(screen.getByText(/99,99/)).toBeInTheDocument();
		expect(screen.getByText("Eletrônicos")).toBeInTheDocument();
	});

	it("should render product image with correct alt text", () => {
		render(<ProductCard product={mockProduct} />);

		const image = screen.getByAltText(/imagem do produto produto teste/i);
		expect(image).toBeInTheDocument();
	});

	it("should render add to cart button", () => {
		render(<ProductCard product={mockProduct} />);

		const button = screen.getByLabelText(
			/adicionar produto teste ao carrinho/i,
		);
		expect(button).toBeInTheDocument();
		expect(button).not.toBeDisabled();
	});

	it("should show low stock badge when stock is less than 5", () => {
		const lowStockProduct = { ...mockProduct, stock: 3 };
		render(<ProductCard product={lowStockProduct} />);

		expect(screen.getByText(/últimas unidades/i)).toBeInTheDocument();
	});

	it("should show out of stock badge and disable button", () => {
		const outOfStockProduct = { ...mockProduct, stock: 0 };
		render(<ProductCard product={outOfStockProduct} />);

		expect(screen.getByText(/esgotado/i)).toBeInTheDocument();
		const button = screen.getByLabelText(/adicionar produto teste ao carrinho/i);
		expect(button).toBeDisabled();
	});

	it("should not show stock badges when stock is 5 or more", () => {
		render(<ProductCard product={mockProduct} />);

		expect(screen.queryByText(/últimas unidades/i)).not.toBeInTheDocument();
		expect(screen.queryByText(/esgotado/i)).not.toBeInTheDocument();
	});
});
