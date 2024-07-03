import { Accordion, AccordionContent, AccordionPanel, AccordionTitle, Avatar } from 'flowbite-react';

function Tutoriais() {

  return (
    <>
      <div className='container mx-auto rounded-b-2xl pb-24'>
        <div className=" w-full flex flex-col px-6">
          <div className="container">
            <div className='flex flex-col font-bold text-3xl mt-14 border-b-2 py-5'>
              <div className='flex items-center justify-between '>
                <h2 className="font-bold text-xl lg:text-4xl dark:text-cinza-100">
                  Perguntas Frequentes e Tutoriais
                </h2>

              </div>
            </div>
          </div>
        </div>

        <div className=''>
          <div className='my-10 mx-16 '>
            <Accordion collapseAll>
              <AccordionPanel>
                <AccordionTitle>Como criar um usuário?</AccordionTitle>
                <AccordionContent>
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                    Sessão em manutenção
                  </p>

                </AccordionContent>
              </AccordionPanel>
              <AccordionPanel>
                <AccordionTitle>Como fazer login?</AccordionTitle>
                <AccordionContent>
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                    Sessão em manutenção
                  </p>
                </AccordionContent>
              </AccordionPanel>
              <AccordionPanel>
                <AccordionTitle>Como publicar um novo projeto?</AccordionTitle>
                <AccordionContent>
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                    Sessão em manutenção
                  </p>

                </AccordionContent>
              </AccordionPanel>
              <AccordionPanel>
                <AccordionTitle>Como corrigir uma informação em um projeto?</AccordionTitle>
                <AccordionContent>
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                    Sessão em manutenção
                  </p>

                </AccordionContent>
              </AccordionPanel>
              <AccordionPanel>
                <AccordionTitle>Como filtrar projetos por nome de projeto?</AccordionTitle>
                <AccordionContent>
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                    Sessão em manutenção
                  </p>

                </AccordionContent>
              </AccordionPanel>
              <AccordionPanel>
                <AccordionTitle>Como vizualizar todos os projetos que já publiquei?</AccordionTitle>
                <AccordionContent>
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                    Sessão em manutenção
                  </p>

                </AccordionContent>
              </AccordionPanel>
              <AccordionPanel>
                <AccordionTitle>Quem está autorizado a publicar projetos?</AccordionTitle>
                <AccordionContent>
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                    Sessão em manutenção
                  </p>

                </AccordionContent>
              </AccordionPanel>
              <AccordionPanel>
                <AccordionTitle>Onde consigo acompanhar a porcentagem de arrecadação do projeto?</AccordionTitle>
                <AccordionContent>
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                    Sessão em manutenção
                  </p>

                </AccordionContent>
              </AccordionPanel>
              <AccordionPanel>
                <AccordionTitle>Posso doar mais de um projeto por vez?</AccordionTitle>
                <AccordionContent>
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                    Sessão em manutenção
                  </p>

                </AccordionContent>
              </AccordionPanel>
              <AccordionPanel>
                <AccordionTitle>Sou estrangeiro, posso doar também?</AccordionTitle>
                <AccordionContent>
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                    Sessão em manutenção
                  </p>

                </AccordionContent>
              </AccordionPanel>
              <AccordionPanel>
                <AccordionTitle>Quero desistir do meu projeto, o que fazer?</AccordionTitle>
                <AccordionContent>
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                    Sessão em manutenção
                  </p>

                </AccordionContent>
              </AccordionPanel>
              <AccordionPanel>
                <AccordionTitle>Sou empresa, também posso publicar um projeto no site?</AccordionTitle>
                <AccordionContent>
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                    Sessão em manutenção
                  </p>

                </AccordionContent>
              </AccordionPanel>
            </Accordion>
          </div>
        </div>
      </div >
    </>
  )
}

export default Tutoriais;