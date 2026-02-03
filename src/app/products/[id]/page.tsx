import type { Metadata } from "next";
import { notFound } from "next/navigation";
import products from "@/../data/products.json";
import { ProductDetail } from "@/components/ProductDetail/ProductDetail";

interface ProductPageProps {
	params: Promise<{ id: string }>;
}

export async function generateMetadata({
	params,
}: ProductPageProps): Promise<Metadata> {
	const { id } = await params;
	const product = products.find((p) => p.id === parseInt(id));

	if (!product) {
		return {
			title: "Produto não encontrado",
			description: "O produto que você está procurando não foi encontrado",
		};
	}

	return {
		title: product.name,
		description: `${product.description} - Apenas R$ ${product.price.toFixed(2)} na E-Shop. ${product.stock > 0 ? 'Disponível em estoque' : 'Produto esgotado'}`,
		keywords: [product.name, product.category, "e-commerce", "comprar online"],
		openGraph: {
			title: product.name,
			description: product.description,
			type: "website",
			images: [
				{
					url: product.image,
					width: 800,
					height: 800,
					alt: product.name,
				},
			],
		},
	};
}

export async function generateStaticParams() {
	return products.map((product) => ({
		id: product.id.toString(),
	}));
}

export default async function ProductPage({ params }: ProductPageProps) {
	const { id } = await params;
	const product = products.find((p) => p.id === parseInt(id));

	if (!product) {
		notFound();
	}

	return <ProductDetail product={product} />;
}
