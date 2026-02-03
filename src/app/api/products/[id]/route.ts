import { NextResponse } from "next/server";
import products from "@/../data/products.json";

export async function GET(
	request: Request,
	{ params }: { params: Promise<{ id: string }> },
) {
	try {
		const { id } = await params;
		const product = products.find((p) => p.id === parseInt(id));

		if (!product) {
			return NextResponse.json(
				{ error: "Produto não encontrado" },
				{ status: 404 },
			);
		}

		return NextResponse.json(product);
	} catch (error) {
		return NextResponse.json(
			{ error: "Erro ao buscar produto" },
			{ status: 500 },
		);
	}
}
