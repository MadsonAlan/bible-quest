import { Biblebook } from "@/types/wordStructure"
import { BuscaCapitulo, BuscaCapituloEVersiculo } from "./capitulo"
import { buscaPorLivro, buscaPorLivroECapitulo, buscaPorLivroEVersiculo } from "./livro"
import { buscaVersiculoEspecifico, BuscaVersiculosNoTodo } from "./versiculo"
import { buscaCompleta } from "./all"

export async function ValidacaoDeBusca(livro: string, capitulo: number, versiculos: number[]){
  let retornoDeBusca: Biblebook[] = []

  if (capitulo != 0 && livro != 'all' && versiculos[0] != 0) {
    retornoDeBusca = await buscaVersiculoEspecifico(livro, capitulo, versiculos)

  } else if (capitulo != 0 && livro == 'all' && versiculos[0] == 0) {
    retornoDeBusca = await BuscaCapitulo(capitulo)

  } else if (capitulo == 0 && livro != 'all' && versiculos[0] == 0) {
    retornoDeBusca = await buscaPorLivro(livro)

  } else if (capitulo == 0 && livro == 'all' && versiculos[0] != 0) {
    retornoDeBusca = await BuscaVersiculosNoTodo(versiculos)

  } else if (capitulo != 0 && livro == 'all' && versiculos[0] != 0) {
    retornoDeBusca = await BuscaCapituloEVersiculo(capitulo, versiculos)

  } else if (capitulo != 0 && livro != 'all' && versiculos[0] == 0) {
    retornoDeBusca = await buscaPorLivroECapitulo(livro, capitulo)

  } else if (capitulo == 0 && livro != 'all' && versiculos[0] != 0) {
    retornoDeBusca = await buscaPorLivroEVersiculo(livro, versiculos)

  } else if (capitulo == 0 && livro == 'all' && versiculos[0] == 0) {
      retornoDeBusca = await buscaCompleta()

  }

  return retornoDeBusca;
}