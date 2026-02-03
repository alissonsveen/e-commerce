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
		};
	}

	return {
		title: `${product.name} | E-Shop`,
		description: product.description,
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
