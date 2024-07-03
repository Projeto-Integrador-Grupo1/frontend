import { useNavigate } from 'react-router-dom';

function Erros() {
  const navigate = useNavigate();

  return (
    <>
      <div className='flex justify-center mx-auto my-10'>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSeNmHptCC22FedmZT_oYGMhYrnRaLRHCMlK5-Sf7Bc6PLWI3w/viewform?embedded=true"
          width="900"
          height="750"
        >
          Carregando…
        </iframe>


      </div>

    </>
  )
}

export default Erros;