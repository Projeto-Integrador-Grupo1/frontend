import Categoria from "./Categoria";
import Usuario from "./Usuario";

export default interface Projeto {
  id: number;
  titulo: string;
  descricao: string;
  qtdDoacoes: number;
  valorAtual: number;
  valorMeta: number;
  tipoMidia: string;
  linkMidia: string;
  dataLimite: string;
  data: string;
  categoria: Categoria | null;
  usuario: Usuario | null;
}