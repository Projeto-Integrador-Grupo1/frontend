function ImgProjeto({ link, titulo }) {
  return (
    <img src={link} alt={titulo} className="object-cover h-64 rounded-t-lg" />
  )
}

export default ImgProjeto
