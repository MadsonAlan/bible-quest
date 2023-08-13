import { buscaCompleta } from "@/lib/search/all"
import { Metadata } from "next"
import { BuscaVersiculos } from "./buscaVersiculos"
import { Biblebook } from "@/types/wordStructure"

export const metadata: Metadata = {
  title: 'busca de versiculos',
  description: 'buscando versiculos dentro da bíblia',
}
 

export default async function Home() {
  // const palavra_completa:Biblebook[] = []
  const palavra_completa:Biblebook[] = await buscaCompleta()
  // let palavra_encontrada: Biblebook = {} as Biblebook;
  // let livro: string = '';
  // let capitulo: string = '';
  // let versiculo: string = '';


  // const buscarPalavra = async (livro: string, capitulo: string, versiculo: string) => {
  //   if (livro && capitulo && versiculo) {
  //     let versiculoConsecutivo = versiculo.split('-').map(verso => Number(verso))
  //     let versiculoEspecifico = versiculo.split(',').map(verso => Number(verso))
  //     if (versiculoConsecutivo.length == 2) {
  //       palavra_encontrada = await buscaVersiculoConsecutivo(
  //         livro,
  //         Number(capitulo),
  //         versiculoConsecutivo)
  //     } else if (versiculoEspecifico) {
  //       palavra_encontrada = await buscaVersiculoEspecifico(
  //         livro,
  //         Number(capitulo),
  //         versiculoEspecifico
  //       )
  //     }
  //   }
  //   if (livro && capitulo && !versiculo) {
  //     palavra_encontrada = await BuscaCapitulo(livro, Number(capitulo))
  //   }
  //   if (livro && !capitulo && !versiculo) {
  //     palavra_encontrada = await buscaPorLivro(livro)

  //   }

  // }


  return (
    <div className="flex min-h-screen bg-slate-50 items-center justify-center">
      <BuscaVersiculos palavra_completa={palavra_completa}/>
    </div>
  )
}
