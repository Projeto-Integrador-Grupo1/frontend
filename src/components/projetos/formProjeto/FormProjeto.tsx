import { ChangeEvent, useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';
import Projeto from '../../../models/Projeto';
import Categoria from '../../../models/Categoria';
import { buscar, atualizar, cadastrar } from '../../../services/Services';
import { RotatingLines } from 'react-loader-spinner';
import { Button, Checkbox, Label, Select, TextInput } from 'flowbite-react';
import { Toast, ToastAlert } from '../../../utils/ToastAlert';


function FormularioProjeto() {

  const [isLoading, setIsLoading] = useState<boolean>(false)

  const navigate = useNavigate();

  const { id } = useParams<{ id: string }>();

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  const [categorias, setCategorias] = useState<Categoria[]>([]);

  const [categoria, setCategoria] = useState<Categoria>({
    id: 0,
    nomeCategoria: '',
    descricao: '',
  });

  const [projeto, setProjeto] = useState<Projeto>({
    id: 0,
    titulo: '',
    descricao: '',
    qtdDoacoes: 0,
    valorAtual: 0,
    valorMeta: 0,
    tipoMidia: '',
    linkMidia: '',
    dataLimite: '',
    data: '',
    categoria: null,
    usuario: null,
  });

  async function buscarProjetoPorId(id: string) {
    await buscar(`/projetos/${id}`, setProjeto, {
      headers: {
        Authorization: token,
      },
    });
  }

  async function buscarCategoriaPorId(id: string) {
    await buscar(`/categorias/${id}`, setCategoria, {
      headers: {
        Authorization: token,
      },
    });
  }

  async function buscarCategorias() {
    await buscar('/categorias/all', setCategorias, {
      headers: {
        Authorization: token,
      },
    });
  }

  useEffect(() => {
    if (token === '') {
      ToastAlert('Você precisa estar logado', Toast.Warning);
      navigate('/');
    }
  }, [token]);

  useEffect(() => {

    buscarCategorias()

    if (id !== undefined) {
      buscarProjetoPorId(id)
    }

  }, [id])

  useEffect(() => {
    setProjeto({
      ...projeto,
      categoria: categoria,
    })
  }, [categoria])

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setProjeto({
      ...projeto,
      [e.target.name]: e.target.value,
      categoria: categoria,
      usuario: usuario,
    });
  }

  function retornar() {
    navigate('/perfil');
  }

  async function cadastrarNovoProjeto(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsLoading(true)

    if (id != undefined) {
      try {

        await atualizar(`/projetos`, projeto, setProjeto, {
          headers: {
            Authorization: token,
          },
        })

        ToastAlert('Projeto atualizado com sucesso', Toast.Sucess);
        retornar()

      } catch (error: any) {

        if (error.toString().includes('403')) {
          ToastAlert('O token expirou, favor logar novamente', Toast.Error)
          handleLogout()

        } else {

          ToastAlert('Erro ao atualizar o Projeto', Toast.Error);
        }
      }
    } else {

      try {

        await cadastrar(`/projetos`, projeto, setProjeto, {
          headers: {
            Authorization: token,
          },
        });

        ToastAlert('Projeto cadastrado com sucesso', Toast.Sucess);
        retornar();

      } catch (error: any) {

        if (error.toString().includes('403')) {
          ToastAlert('O token expirou, favor logar novamente', Toast.Error)
          handleLogout()

        } else {

          ToastAlert('Erro ao cadastrar o Projeto', Toast.Error);
        }

      }
    }

    setIsLoading(false)
  }

  const carregandoCategoria = categoria.nomeCategoria === '';

  return (

      <div className="flex justify-center mx-[30vw] shadow-xl dark:shadow-lg shadow-cinza-300 dark:shadow-preto-600 bg-cinza-100 dark:bg-preto-300 py-[10vh] rounded-2xl font-bold">

        <form onSubmit={cadastrarNovoProjeto} className="flex max-w-md flex-col gap-4 w-[80%]">
          <h2 className="text-slate-900 dark:text-cinza-100 my-4 text-center text-5xl">
            {id !== undefined ? `Editar Projeto` : 'Cadastrar Projeto'}
          </h2>
          <div>
            <div className="mb-2 block">
              <Label
                htmlFor="titulo"
                value="Titulo do projeto"
              />
            </div>
            <TextInput
              id="titulo"
              type="text"
              placeholder="Titulo"
              name="titulo"
              value={projeto.titulo}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
              required
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label
                htmlFor="descricao"
                value="Descrição do projeto"
              />
            </div>
            <TextInput
              id="descricao"
              type="text"
              placeholder="Descrição"
              name="descricao"
              
              value={projeto.descricao}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
              required
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label
                htmlFor="linkMidia"
                value="Link da Mídia"
              />
            </div>
            <TextInput
              id="linkMidia"
              type="text"
              placeholder="Link da Mídia"
              name="linkMidia"
              value={projeto.linkMidia}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
              required
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label
                htmlFor="valorMeta"
                value="Valor da Meta"
              />
            </div>
            <TextInput
              id="valorMeta"
              type="text"
              placeholder="Valor da Meta"
              name="valorMeta"
              value={projeto.valorMeta}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
              required
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label
                htmlFor="dataLimite"
                value="Data Limite de Investimentos"
              />
            </div>
            <TextInput
              id="dataLimite"
              type="date"
              placeholder="Data Limite"
              name="dataLimite"
              value={projeto.dataLimite}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
              required
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label
                htmlFor="categoria"
                value="Categoria do projeto"
              />
            </div>
            <Select
              id="categoria"
              name="categoria"
              onChange={(e) => buscarCategoriaPorId(e.currentTarget.value)} required
            >
              <option value="" selected disabled>Selecione uma categoria</option>
              {categorias.map((categoria) => (
                <>
                  <option value={categoria.id} >{categoria.nomeCategoria}</option>
                </>
              ))}
            </Select>
          </div>


          <Button type="submit" disabled={carregandoCategoria} className='bg-rosa-200'>
            {carregandoCategoria || isLoading ?

              <RotatingLines
                strokeColor="white"
                strokeWidth="5"
                animationDuration="0.75"
                width="24"
                visible={true}
              />

              : id !== undefined ? 'Editar' : 'Cadastrar'}
          </Button>
        </form>
      </div>
  );

}

export default FormularioProjeto