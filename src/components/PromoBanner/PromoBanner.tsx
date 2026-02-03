"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function PromoBanner() {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.6 }}
		>
			<Card className="overflow-hidden border-none shadow-2xl bg-gradient-to-br from-purple-600 via-pink-500 to-rose-500">
				<CardContent className="p-0">
					<div className="grid md:grid-cols-2 gap-0 items-center">
						<motion.div
							className="p-8 md:p-12 space-y-6 text-white order-2 md:order-1"
							initial={{ opacity: 0, x: -50 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.7, delay: 0.2 }}
						>
							<Badge
								variant="secondary"
								className="bg-white/25 backdrop-blur-sm text-white hover:bg-white/35 border-white/40 shadow-lg"
							>
								<Sparkles size={14} className="mr-1" />
								Oferta Especial
							</Badge>

							<div className="space-y-4">
								<h2 className="text-4xl md:text-5xl font-bold leading-tight drop-shadow-lg">
									Desconto Imperdível!
								</h2>
								<p className="text-xl md:text-2xl font-medium drop-shadow-md">
									Até{" "}
									<motion.span
										className="inline-block px-4 py-2 bg-white text-purple-600 rounded-xl font-black text-3xl md:text-4xl shadow-xl"
										animate={{ scale: [1, 1.05, 1] }}
										transition={{ duration: 2, repeat: Infinity }}
									>
										30% OFF
									</motion.span>
								</p>
								<p className="text-base md:text-lg text-white leading-relaxed drop-shadow-md">
									Aproveite nossos melhores preços em produtos selecionados.
									Promoção válida enquanto durarem os estoques!
								</p>
							</div>

							<div className="flex flex-col sm:flex-row gap-3 pt-2">
								<Button
									size="lg"
									className="group bg-white text-purple-600 hover:bg-white/90 hover:scale-105 transition-all shadow-lg hover:shadow-xl"
								>
									Ver Ofertas
									<ArrowRight
										size={18}
										className="ml-2 transition-transform group-hover:translate-x-1"
									/>
								</Button>
								<Button
									size="lg"
									variant="default"
									className="border-2 border-white/60 text-white hover:bg-white/15 hover:scale-105 transition-all backdrop-blur-sm"
								>
									Saiba Mais
								</Button>
							</div>
						</motion.div>

						<motion.div
							className="relative h-[400px] md:h-[520px] order-1 md:order-2 overflow-hidden"
							initial={{ opacity: 0, scale: 0.9 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.7, delay: 0.3 }}
						>
							<Image
								src="/woman-test.png"
								alt="Mulher feliz com desconto"
								fill
								className="object-cover object-center"
								sizes="(max-width: 768px) 100vw, 50vw"
								quality={100}
								priority
								unoptimized={false}
							/>
							<div className="absolute inset-0 bg-gradient-to-l from-transparent via-purple-500/5 to-purple-600/10" />

							<motion.div
								className="absolute top-6 right-6 bg-white rounded-full p-5 shadow-2xl"
								animate={{
									y: [0, -10, 0],
									rotate: [0, 5, 0, -5, 0],
								}}
								transition={{
									duration: 3,
									repeat: Infinity,
									ease: "easeInOut",
								}}
							>
								<div className="text-center">
									<p className="text-4xl font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
										30%
									</p>
									<p className="text-xs font-bold text-gray-600 uppercase">
										OFF
									</p>
								</div>
							</motion.div>
						</motion.div>
					</div>
				</CardContent>
			</Card>
		</motion.div>
	);
}
