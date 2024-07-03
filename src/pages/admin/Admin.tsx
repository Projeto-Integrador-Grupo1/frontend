import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Projeto from "../../models/Projeto";
import { buscar } from "../../services/Services";
import { Toast, ToastAlert } from "../../utils/ToastAlert";
import { Accordion, Button, Modal } from "flowbite-react";
import Categoria from "../../models/Categoria";
import { ArrowSquareOut } from "@phosphor-icons/react";
import { FcCheckmark } from "react-icons/fc";


function Admin() {

  const [projetos, setProjetos] = useState<Projeto[]>([]);
  const [categorias, setCategorias] = useState<Categoria[]>([]);

  const [openModal, setOpenModal] = useState(false);


  const valorTotal = projetos.reduce((total, projeto) => total + projeto.valorAtual, 0);
  const valorArrecadado = valorTotal * 0.3;


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



  useEffect(() => {
    buscarProjetos();
  }, [projetos.length])



  useEffect(() => {
    buscarCategorias();
    buscarProjetos();
  }, [categorias.length])

  return (
    <>
      <div className='container mx-auto rounded-b-2xl pb-24'>
        <div className=" w-full flex flex-col justify-center px-6">
          <div className="container">
            <div className='flex flex-col font-bold text-3xl mt-14 border-b-2 py-5'>
              <div className='flex items-center justify-between '>
                <h2 className="font-bold text-xl lg:text-4xl dark:text-cinza-100">
                  Painel Administrativo
                </h2>
                <button
                  onClick={() => setOpenModal(true)}
                  className=" text-center text-xl lg:text-2xl font-semibold text-white bg-rosa-200 rounded p-2 w-100"
                >
                  <Link to="/admin" className="flex items-center gap-2">
                    <ArrowSquareOut size={30} />
                    Retirar valores
                  </Link>
                </button>

                <Modal show={openModal} size="md" onClose={() => setOpenModal(false)} popup>
                  <Modal.Header />
                  <Modal.Body>
                    <div className="text-center">
                      <FcCheckmark className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
                      <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                        Transferência de R$ {valorArrecadado.toFixed(2).replace('.',',')} realizada com sucesso para a Conta Empresarial
                      </h3>
                      <div className="flex justify-center gap-4">
                        <Button color="success" onClick={() => setOpenModal(false)}>
                          {"Voltar"}
                        </Button>

                      </div>
                    </div>
                  </Modal.Body>
                </Modal>

              </div>
            </div>
          </div>

          <div className="my-12">
            <Accordion collapseAll>
              <Accordion.Panel>
                <Accordion.Title>Total de arrecadações em projetos na plataforma: </Accordion.Title>
                <Accordion.Content>
                  <p className="mb-2 text-gray-500 dark:text-gray-400">R$ {valorTotal.toFixed(2).replace('.', ',')}</p>
                </Accordion.Content>
              </Accordion.Panel>
              <Accordion.Panel>
                <Accordion.Title>Total de arrecadações para a Zerone:</Accordion.Title>
                <Accordion.Content>
                  <p className="mb-2 text-gray-500 dark:text-gray-400">R$ {valorArrecadado.toFixed(2).replace('.', ',')}</p>
                </Accordion.Content>
              </Accordion.Panel>
            </Accordion>
          </div>
        </div>
      </div >


    </>
  )
}

export default Admin;