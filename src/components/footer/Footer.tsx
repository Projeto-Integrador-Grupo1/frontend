import {
  GithubLogo
  
} from "@phosphor-icons/react"

function Footer() {
  return (
    <>
      <div className="flex justify-center bg-azul-200 dark:bg-preto-400 text-white dark:text-cinza-100">
        <div className="container flex justify-around  items-center py-4">
          <p className="text-xl font-bold">© 2024 Zerone | Todos os direitos reservados.</p>
          <div className="flex items-center space-x-4">
            <p className="text-lg">Veja nosso projeto no Github:
            </p>
            <a href="https://github.com/Projeto-Integrador-Grupo1/frontend" target="_blank" rel="">
              <GithubLogo size={48} weight="bold" />
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
