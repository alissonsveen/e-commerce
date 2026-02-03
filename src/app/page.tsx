import { Sparkles } from "lucide-react";
import { ProductGrid } from "@/components/ProductGrid/ProductGrid";
import { PromoBanner } from "@/components/PromoBanner/PromoBanner";

export default function Home() {
	return (
		<div className="container mx-auto px-4 py-8 space-y-12 animate-fade-in-up">
			<PromoBanner />

			<section className="space-y-8">
				<div className="text-center md:text-left space-y-3">
					<div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full mb-2">
						<Sparkles size={18} className="text-purple-600" />
						<span className="text-sm font-medium text-purple-700">
							Novidades
						</span>
					</div>
					<h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-purple-900 to-pink-900 bg-clip-text text-transparent">
						Produtos em Destaque
					</h1>
					<p className="text-lg text-gray-600 max-w-2xl">
						Confira nossa seleção especial com os melhores produtos e preços
						imbatíveis
					</p>
				</div>

				<ProductGrid />
			</section>
		</div>
	);
}
