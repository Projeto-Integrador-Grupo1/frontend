import { useEffect, useState } from "react";
import { ListGroup, Pagination } from "flowbite-react";
import { DNA } from "react-loader-spinner";

import { buscar } from "../../services/Services";
import { Toast, ToastAlert } from "../../utils/ToastAlert";

import CardProjeto from "../../components/projetos/cardProjeto/CardProjeto";
import Categoria from "../../models/Categoria";
import Projeto from "../../models/Projeto";
import SearchBar from "./searchBar/SearchBar";

function Projetos() {

  const [projetos, setProjetos] = useState<Projeto[]>([]);
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [categoriaSelecionada, setCategoriaSelecionada] = useState<string | null>(null);

  const [currentPage, setCurrentPage] = useState(1);

  const onPageChange = (page: number) => setCurrentPage(page);

  const projetosPorPagina = 12;

  const categoriasEmOrdem = categorias.sort((a, b) => a.nomeCategoria.localeCompare(b.nomeCategoria));

  const ultimoProjetoIndex = currentPage * projetosPorPagina;
  const primeiroProjetoIndex = ultimoProjetoIndex - projetosPorPagina;

  const projetosFiltrados = projetos.filter((projetos) => projetos.categoria?.nomeCategoria === categoriaSelecionada);

  const projetosOrdenados = projetosFiltrados.sort((a, b) => a.titulo.localeCompare(b.titulo));

  const projetosAtuais = projetosOrdenados.slice(primeiroProjetoIndex, ultimoProjetoIndex);
  const totalPages = Math.ceil(projetos.length / projetosPorPagina);

  const projetosSemFiltro = projetos.slice(primeiroProjetoIndex, ultimoProjetoIndex);

  const totalPagesComFiltro = Math.ceil(projetosOrdenados.length / projetosPorPagina);

  const projetosParaExibir = categoriaSelecionada === null ? projetosSemFiltro : projetosAtuais;

  const handleSearch = (projetos: Projeto[]) => {
    setProjetos(projetos);
  } 
  
  async function buscarProjetos() {
    try {
      await buscar("/projetos/all", setProjetos);
    } catch (error: any) {
      ToastAlert("Erro ao buscar os projetos", Toast.Warning);
    }
  }

  async function buscarCategorias() {
    try {
      await buscar("/categorias/all", setCategorias);
    } catch (error: any) {
      ToastAlert("Não há categorias", Toast.Info);
    }
  }

  function handleCategoriaClick(categoriaNome: string) {
    if (categoriaNome === categoriaSelecionada) {
      setCategoriaSelecionada(null);
    } else {
      setCategoriaSelecionada(categoriaNome);
    }
  }

  useEffect(() => {
    buscarProjetos();
    buscarCategorias();
  }, []);

  useEffect(() => {
    if (categoriaSelecionada) {
      setProjetos(projetosFiltrados);
    } else {
      setProjetos(projetos);
    }
  }, [categoriaSelecionada, projetos]);



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
        <div className="flex gap-5 lg:gap-12 p-3 lg:p-10 w-full">
          <div>

            <h2 className="font-bold dark:text-cinza-100 mb-4">Selecione uma categoria</h2>
            <ListGroup className=" w-36 sm:w-40 lg:w-60 h-min">
              {categoriasEmOrdem.map((categoria) => (
                <ListGroup.Item
                  key={categoria.id}
                  onClick={() => handleCategoriaClick(categoria.nomeCategoria)}
                  className={`${categoria.nomeCategoria === categoriaSelecionada && "font-bold"}`}
                >
                  <p className=" text-left lg:truncate" title={categoria.nomeCategoria}>
                    {categoria.nomeCategoria}
                  </p>
                </ListGroup.Item>
              ))}



            </ListGroup>

            <SearchBar onSearch={handleSearch} onClear={buscarProjetos}/>

          </div>

          <div >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto">
              {projetosParaExibir.length > 0 ? (
                projetosParaExibir.map((projeto) => (
                  <CardProjeto key={projeto.id} projeto={projeto} />
                ))

              ) : (
                <p className="text-center col-span-full text-xl pt-10 dark:text-cinza-200">
                  Não há projetos desta categoria para exibir atualmente!
                </p>
              )}
            </div>


            <div className="flex overflow-x-auto text-sm justify-center mt-10">

              {projetosParaExibir.length > 0 ?
                (
                  categoriaSelecionada === null ?
                    totalPages > 1 ?
                      <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={onPageChange}
                      />
                      :
                      <Pagination
                        className="hidden"
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={onPageChange}
                      />
                    :
                    totalPagesComFiltro > 1 ?
                      <Pagination
                        currentPage={currentPage}
                        totalPages={totalPagesComFiltro}
                        onPageChange={onPageChange}
                      /> :
                      <Pagination
                        className="hidden"
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={onPageChange}
                      />
                ) :
                (
                  <Pagination
                    className="hidden"
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={onPageChange}
                  />
                )
              }
            </div>

          </div>
        </div>
      )}

    </>
  )
}

export default Projetos;
