import { useContext, useState } from "react";
import Projeto from "../../../models/Projeto";
import { buscar } from "../../../services/Services";
import { AuthContext } from "../../../contexts/AuthContext";
import { Label, TextInput } from "flowbite-react";

interface SearchBarProps {
  onSearch: (projetos: Projeto[]) => void;
  onClear: () => void;
}

function SearchBar({ onSearch, onClear }: SearchBarProps) {

  const { usuario } = useContext(AuthContext);
  const token = usuario.token;

  const [titulo, setTitulo] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitulo(event.target.value);
  };

  async function handleSearch() {
    try {
      const projetos: Projeto[] = [];
      const setProjetos = (data: Projeto[]) => projetos.push(...data);
      await buscar(`/projetos/titulo/${titulo}`, setProjetos, {
        headers: {
          Authorization: token,
        },
      });
      onSearch(projetos);
    } catch (error) {
      console.error('Erro ao buscar projetos:', error);
    }
  };

  function handleClear() {
    setTitulo('');
    onClear();
  };

  return (
    <>
      <div className="mt-5 items-center border dark:border-gray-600 rounded-md ">
        <div className="m-2">
          <div className="mb-2 block dark:text-cinza-100">
            <Label htmlFor="pesquisa" color="gray" value="Pesquise pelo nome do projeto:" />
          </div>
          <TextInput id="pesquisa" placeholder="Nome" color="gray" onChange={handleInputChange} />
        </div>

        <div className=" text-center  lg:flex gap-4 my-5 px-5">

          <button onClick={handleSearch} className="my-2 p-2 bg-azul-200 text-white rounded">
            Pesquisar
          </button>
          <button onClick={handleClear} className="my-2 p-2 bg-gray-500 text-white rounded">
            Limpar Filtro
          </button>
        </div>
      </div>
    </>
  );
}

export default SearchBar;