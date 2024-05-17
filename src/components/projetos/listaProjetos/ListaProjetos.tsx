import { useEffect, useState } from "react"
import { DNA } from "react-loader-spinner"
import Projeto from "../../../models/Projeto"
import { buscar } from "../../../services/Services"
import CardProjetos from "../cardProjetos/CardProjetos"
import { Toast, ToastAlert } from "../../../utils/ToastAlert"
import Categoria from "../../../models/Categoria"
import { ListGroup } from "flowbite-react"

function ListaProjetos() {
  const [projetos, setProjetos] = useState<Projeto[]>([])
  const [categorias, setCategorias] = useState<Categoria[]>([])
  const [categoriaSelecionada, setCategoriaSelecionada] = useState<
    string | null
  >(null)

  const projetosFiltrados = projetos.filter(
    (projetos) => projetos.categoria?.nomeCategoria === categoriaSelecionada
  )
  const projetosOrdenados = projetosFiltrados.sort((a, b) =>
    a.titulo.localeCompare(b.titulo)
  )

  async function buscarProjetos() {
    try {
      await buscar("/projetos/all", setProjetos)
    } catch (error: any) {
      ToastAlert("Erro ao buscar as categorias", Toast.Warning)
    }
  }

  useEffect(() => {
    buscarProjetos()
  }, [projetos.length])

  async function buscarCategorias() {
    try {
      await buscar("/categorias/all", setCategorias)
    } catch (error: any) {
      ToastAlert("Não há categorias", Toast.Info)
    }
  }

  function handleCategoriaClick(categoriaNome: string) {
    if (categoriaNome === categoriaSelecionada) {
      setCategoriaSelecionada(null)
    } else {
      setCategoriaSelecionada(categoriaNome)
    }
  }

  useEffect(() => {
    buscarCategorias()
    buscarProjetos()
  }, [categoriaSelecionada, categorias.length])

  //   useEffect(() => {
  //     if (categorias.length > 0 && categoriaSelecionada === null) {
  //       setCategoriaSelecionada(categorias[0].nomeCategoria)
  //     }
  //   }, [categorias, categoriaSelecionada])

  return (
    <>
      {projetos.length === 0 ? (
        <DNA
          visible={true}
          height="200"
          width="200"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper mx-auto"
        />
      ) : (
        <div className="flex gap-12 p-10 w-full">
          <div>
            <h2 className="font-bold dark:text-cinza-100 mb-4">Selecione uma categoria</h2>
            <ListGroup className="w-60 h-min">
              {categorias.map((categoria) => (
                <ListGroup.Item
                  key={categoria.id}
                  onClick={() => handleCategoriaClick(categoria.nomeCategoria)}
                  className={`${
                    categoria.nomeCategoria === categoriaSelecionada &&
                    "font-bold"
                  }`}
                >
                  <p className="truncate" title={categoria.nomeCategoria}>
                    {categoria.nomeCategoria}
                  </p>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto">
            {categoriaSelecionada === null
              ? projetos.map((projeto) => (
                  <CardProjetos key={projeto.id} projeto={projeto} />
                ))
              : projetosOrdenados.map((projeto) => (
                  <CardProjetos key={projeto.id} projeto={projeto} />
                ))}
          </div>
        </div>
      )}
    </>
  )
}

export default ListaProjetos
