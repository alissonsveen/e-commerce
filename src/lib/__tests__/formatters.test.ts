import { formatPrice } from "@/lib/formatters";

describe("formatPrice", () => {
	it("should format price correctly", () => {
		expect(formatPrice(100)).toContain("100,00");
		expect(formatPrice(99.99)).toContain("99,99");
		expect(formatPrice(1000)).toContain("1.000,00");
	});

	it("should handle zero", () => {
		expect(formatPrice(0)).toContain("0,00");
	});

	it("should handle decimal places", () => {
		expect(formatPrice(10.5)).toContain("10,50");
		expect(formatPrice(10.99)).toContain("10,99");
	});

	it("should include currency symbol", () => {
		expect(formatPrice(100)).toContain("R$");
	});
});
