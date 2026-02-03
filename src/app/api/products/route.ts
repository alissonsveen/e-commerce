import { NextResponse } from "next/server";
import products from "@/../data/products.json";

export async function GET() {
	try {
		return NextResponse.json(products);
	} catch (error) {
		return NextResponse.json(
			{ error: "Erro ao buscar produtos" },
			{ status: 500 },
		);
	}
}
