"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Bot, Send, Sparkles, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import type { Product } from "@/types/product";

interface Message {
	id: number;
	text: string;
	isBot: boolean;
	products?: Product[];
}

export function ChatBot() {
	const [isOpen, setIsOpen] = useState(false);
	const [messages, setMessages] = useState<Message[]>([]);
	const [input, setInput] = useState("");
	const [products, setProducts] = useState<Product[]>([]);
	const [isTyping, setIsTyping] = useState(false);
	const messagesEndRef = useRef<HTMLDivElement>(null);
	const router = useRouter();

	useEffect(() => {
		async function fetchProducts() {
			try {
				const response = await fetch("/api/products");
				const data = await response.json();
				setProducts(data);
			} catch (error) {
				console.error("Erro ao buscar produtos:", error);
			}
		}
		fetchProducts();
	}, []);

	useEffect(() => {
		messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
	}, [messages]);

	useEffect(() => {
		if (isOpen && messages.length === 0) {
			addBotMessage(
				"Olá! 👋 Sou seu assistente virtual. Como posso te ajudar hoje?\n\nVocê pode me perguntar sobre:\n• Produtos de uma categoria\n• Sugestões de presentes\n• Produtos em promoção\n• Recomendações personalizadas",
			);
		}
	}, [isOpen]);

	const addBotMessage = (text: string, productList?: Product[]) => {
		setIsTyping(true);
		setTimeout(() => {
			setMessages((prev) => [
				...prev,
				{
					id: Date.now(),
					text,
					isBot: true,
					products: productList,
				},
			]);
			setIsTyping(false);
		}, 1000);
	};

	const addUserMessage = (text: string) => {
		setMessages((prev) => [
			...prev,
			{
				id: Date.now(),
				text,
				isBot: false,
			},
		]);
	};

	const getRecommendations = (userMessage: string) => {
		const lowerMessage = userMessage.toLowerCase();

		if (
			lowerMessage.includes("eletrônico") ||
			lowerMessage.includes("eletronico") ||
			lowerMessage.includes("tecnologia") ||
			lowerMessage.includes("tech")
		) {
			const electronics = products.filter((p) =>
				["Eletrônicos", "Periféricos", "Games"].includes(p.category),
			);
			return {
				text: "Aqui estão nossos melhores produtos de eletrônicos! 📱",
				products: electronics.slice(0, 3),
			};
		}

		if (
			lowerMessage.includes("áudio") ||
			lowerMessage.includes("audio") ||
			lowerMessage.includes("som") ||
			lowerMessage.includes("fone")
		) {
			const audio = products.filter((p) => p.category === "Áudio");
			return {
				text: "Confira nossas opções de áudio! 🎧",
				products: audio.slice(0, 3),
			};
		}

		if (
			lowerMessage.includes("presente") ||
			lowerMessage.includes("gift") ||
			lowerMessage.includes("aniversário")
		) {
			const gifts = products.filter((p) => p.price > 100 && p.price < 1000);
			return {
				text: "Perfeito! Aqui estão algumas sugestões de presentes especiais 🎁",
				products: gifts.slice(0, 3),
			};
		}

		if (
			lowerMessage.includes("promoção") ||
			lowerMessage.includes("promocao") ||
			lowerMessage.includes("desconto") ||
			lowerMessage.includes("barato")
		) {
			const onSale = products.filter((p) => p.stock < 10);
			return {
				text: "Confira nossos produtos com estoque limitado - últimas unidades! 🔥",
				products: onSale.slice(0, 3),
			};
		}

		if (
			lowerMessage.includes("popular") ||
			lowerMessage.includes("vendido") ||
			lowerMessage.includes("melhor")
		) {
			return {
				text: "Nossos produtos mais populares do momento! ⭐",
				products: products.slice(0, 3),
			};
		}

		const searchResults = products.filter(
			(p) =>
				p.name.toLowerCase().includes(lowerMessage) ||
				p.category.toLowerCase().includes(lowerMessage),
		);

		if (searchResults.length > 0) {
			return {
				text: "Encontrei esses produtos relacionados à sua busca! 🔍",
				products: searchResults.slice(0, 3),
			};
		}

		return {
			text: "Hmm, não tenho certeza sobre isso. Que tal dar uma olhada em nossos produtos mais vendidos?",
			products: products.slice(0, 3),
		};
	};

	const handleSend = () => {
		if (!input.trim()) return;

		addUserMessage(input);
		const recommendation = getRecommendations(input);
		addBotMessage(recommendation.text, recommendation.products);
		setInput("");
	};

	const handleKeyPress = (e: React.KeyboardEvent) => {
		if (e.key === "Enter") {
			handleSend();
		}
	};

	return (
		<>
			<motion.div
				className="fixed bottom-6 right-6 z-50"
				initial={{ scale: 0 }}
				animate={{ scale: 1 }}
				transition={{ duration: 0.3 }}
			>
				{!isOpen && (
					<Button
						size="lg"
						className="h-14 w-14 rounded-full shadow-2xl bg-gradient-to-br from-purple-600 to-pink-600 hover:scale-110 transition-transform"
						onClick={() => setIsOpen(true)}
					>
						<Bot size={24} />
					</Button>
				)}
			</motion.div>

			<AnimatePresence>
			{isOpen && (
				<motion.div
					initial={{ opacity: 0, y: 100, scale: 0.8 }}
					animate={{ opacity: 1, y: 0, scale: 1 }}
					exit={{ opacity: 0, y: 100, scale: 0.8 }}
					transition={{ duration: 0.3 }}
					className="fixed bottom-0 right-0 sm:bottom-6 sm:right-6 z-50 w-full sm:w-[380px] h-[100vh] sm:h-[600px] sm:max-h-[80vh]"
				>
					<Card className="h-full flex flex-col shadow-2xl border-purple-200 sm:rounded-lg rounded-none">
						<div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-4 sm:rounded-t-lg flex items-center justify-between">
								<div className="flex items-center gap-3">
									<div className="bg-white/20 p-2 rounded-full">
										<Bot size={20} />
									</div>
									<div>
										<h3 className="font-semibold">Assistente Virtual</h3>
										<p className="text-xs text-white/80 flex items-center gap-1">
											<span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
											Online
										</p>
									</div>
								</div>
								<Button
									variant="ghost"
									size="icon"
									className="text-white hover:bg-white/20"
									onClick={() => setIsOpen(false)}
								>
									<X size={20} />
								</Button>
							</div>

							<div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-purple-50/30 to-white">
								{messages.map((message) => (
									<motion.div
										key={message.id}
										initial={{ opacity: 0, y: 10 }}
										animate={{ opacity: 1, y: 0 }}
										className={`flex ${message.isBot ? "justify-start" : "justify-end"}`}
									>
										<div
											className={`max-w-[80%] rounded-2xl px-4 py-2 ${
												message.isBot
													? "bg-white shadow-md text-gray-800"
													: "bg-gradient-to-r from-purple-600 to-pink-600 text-white"
											}`}
										>
											<p className="text-sm whitespace-pre-line">
												{message.text}
											</p>

											{message.products && message.products.length > 0 && (
												<div className="mt-3 space-y-2">
													{message.products.map((product) => (
														<div
															key={product.id}
															className="bg-gray-50 rounded-lg p-3 cursor-pointer hover:bg-gray-100 transition-colors"
															onClick={() => {
																router.push(`/products/${product.id}`);
																setIsOpen(false);
															}}
														>
															<div className="flex justify-between items-start gap-2">
																<div className="flex-1">
																	<p className="font-medium text-xs text-gray-900 line-clamp-2">
																		{product.name}
																	</p>
																	<Badge
																		variant="outline"
																		className="text-xs mt-1"
																	>
																		{product.category}
																	</Badge>
																</div>
																<p className="text-sm font-bold text-purple-600 whitespace-nowrap">
																	R$ {product.price.toFixed(2)}
																</p>
															</div>
														</div>
													))}
												</div>
											)}
										</div>
									</motion.div>
								))}

								{isTyping && (
									<motion.div
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										className="flex justify-start"
									>
										<div className="bg-white shadow-md rounded-2xl px-4 py-3">
											<div className="flex gap-1">
												<span className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" />
												<span
													className="w-2 h-2 bg-purple-400 rounded-full animate-bounce"
													style={{ animationDelay: "0.2s" }}
												/>
												<span
													className="w-2 h-2 bg-purple-400 rounded-full animate-bounce"
													style={{ animationDelay: "0.4s" }}
												/>
											</div>
										</div>
									</motion.div>
								)}

							<div ref={messagesEndRef} />
						</div>

						<div className="p-4 border-t bg-white sm:rounded-b-lg">
							<div className="flex gap-2">
								<Input
									placeholder="Digite sua mensagem..."
									value={input}
										onChange={(e) => setInput(e.target.value)}
										onKeyPress={handleKeyPress}
										className="flex-1"
									/>
									<Button
										size="icon"
										onClick={handleSend}
										disabled={!input.trim()}
										className="bg-gradient-to-r from-purple-600 to-pink-600 hover:scale-105 transition-transform"
									>
										<Send size={18} />
									</Button>
								</div>
							</div>
						</Card>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
}
