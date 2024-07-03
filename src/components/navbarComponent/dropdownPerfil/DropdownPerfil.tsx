import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Avatar, Dropdown } from "flowbite-react";

import { AuthContext } from '../../../contexts/AuthContext';
import { ToastAlert, Toast } from '../../../utils/ToastAlert';

function DropdownPerfil() {
  const navigate = useNavigate();
  const { usuario, handleLogout } = useContext(AuthContext);

  function logout() {
    handleLogout();
    ToastAlert('Usuário deslogado com sucesso', Toast.Sucess);
    navigate('/login');
  }

  function iniciaisNome(): JSX.Element {
    const nomes = usuario.nome.split(' ');
    const inicialPrimeiroNome = nomes[0][0];
    const inicialUltimoNome = nomes.length > 1 ? nomes[nomes.length - 1][0] : '';
    const iniciais = `${inicialPrimeiroNome}${inicialUltimoNome}`.toUpperCase();

    if (usuario.foto && usuario.foto.trim() !== '') {
      return <Avatar img={usuario.foto} rounded />
    }

    return <Avatar placeholderInitials={iniciais} rounded />
  }

  return (
    <>
      <Dropdown
        arrowIcon={false}
        inline
        label={iniciaisNome()}
      >
        <Dropdown.Header>
          <span className="block text-sm">{usuario.nome}</span>
          <span className="block truncate text-sm font-medium">{usuario.email}</span>
          {usuario.email !== 'root@root.com' ?
            ''
            :
            <span className="block truncate text-sm font-medium">
              <Link to='admin'>Administração</Link>
            </span>
          }
        </Dropdown.Header>

        <Link to={`/perfil`} className="hover:underline">
          <Dropdown.Item>
            Meu Perfil
          </Dropdown.Item>
        </Link>

        <Link to="/meusProjetos" className="hover:underline">
          <Dropdown.Item>
            Meus projetos
          </Dropdown.Item>
        </Link>

        <Link to="/categorias" className="hover:underline">
          <Dropdown.Item>
            Categorias
          </Dropdown.Item>
        </Link>

        <Dropdown.Divider />

        <Link to="/home" onClick={logout} className="hover:underline">
          <Dropdown.Item>
            Sair
          </Dropdown.Item>
        </Link>
      </Dropdown>
    </>
  )
}

export default DropdownPerfil;