export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-purple-50 via-pink-50 to-purple-50 border-t border-purple-100 mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Sobre Nós
            </h3>
            <p className="text-gray-700 text-sm">
              Sua loja online com os melhores produtos e preços do mercado.
              Qualidade e confiança garantidas.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Contato
            </h3>
            <ul className="text-gray-700 text-sm space-y-2">
              <li>Email: contato@eshop.com.br</li>
              <li>Telefone: (11) 1234-5678</li>
              <li>WhatsApp: (11) 98765-4321</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Links Úteis
            </h3>
            <ul className="text-gray-700 text-sm space-y-2">
              <li>
                <a href="#" className="hover:text-purple-600 transition-colors">
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-600 transition-colors">
                  Termos de Uso
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-600 transition-colors">
                  Trocas e Devoluções
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-purple-200 mt-8 pt-6 text-center">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} E-Shop. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
