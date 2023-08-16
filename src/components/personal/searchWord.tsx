'use client'
import { BiblebookNoChapters } from "@/types/wordStructure"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Combobox } from "./combobox"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Label } from "../ui/label"
import { TogleTheme } from "./theme-togle"

interface PropsBuscarPalavra {
  livros: BiblebookNoChapters[]
}

export function SeachWord({ livros }: PropsBuscarPalavra) {
  const [ livrosList, setLivrosList ] = useState<BiblebookNoChapters[]>(livros);
  const [ livro, setLivro ] = useState('all');
  const [ capitulo, setCapitulo ] = useState(0);
  const [ listaDeVersiculos, setListaDeVersiculos ] = useState<number[]>([]);
  const router = useRouter()

  const handleInputChange = (e: any) => {
      tratamentoDosVersiculos(e.target.value)
  };
  const handleInputChangeCapitulo = (e: any) => {
    setCapitulo(e.target.value)
    if (e.target.value.split(" ")[ 2 ]) {
      tratamentoDosVersiculos(e.target.value.split(" ")[ 2 ])
    }
  };


  const tratamentoDosVersiculos = (versiculo: string) => {
    let versiculosSeguidos: number[] = versiculo.split("-").filter(verso => Number(verso) > 0).map(verso => Number(verso))
    let versiculosEspecificos: number[] = versiculo.split(",").filter(verso => Number(verso) > 0).map(verso => Number(verso))
    let listaDeVersiculosEncontrados: number[] = []
    if (versiculosSeguidos.length == 2) {
      let contador = versiculosSeguidos[ 0 ];
      do {
        listaDeVersiculosEncontrados.push(contador)
        contador++
      } while (contador != versiculosSeguidos[ 1 ] + 1);
      setListaDeVersiculos(listaDeVersiculosEncontrados)

    } else if (versiculosEspecificos.length > 0) {
      setListaDeVersiculos(versiculosEspecificos)
    }
  }
  const montarRota = () => {
    let rotaBase = `/search/${livro}/${capitulo}/`
    if (listaDeVersiculos.length > 0) {
      listaDeVersiculos.map(
        (versiculo, index) => rotaBase += index != 0 ? '-' + versiculo : versiculo
      )
    } else {
      rotaBase += 0
    }    
    router.push(rotaBase)
  }
  const atualizarLivro = (livrorecebido: string) =>{        
    if (livrorecebido.length>1) {
      setLivro(livrorecebido)
    }
  }
  return (
    <div className="flex-1 gap-4 grid grid-flow-row auto-rows-max p-4 items-center justify-center">
      <div>
        <Label className="block font-bold text-slate-800 mb-2">Livro</Label>
        <Combobox livros={livrosList} livroSelecionado={atualizarLivro}/>
      </div>
      <div>
        <Label className="block font-bold text-slate-800 mb-2">Capitulo</Label>
        <Input placeholder="Ex.: 1" type='number' maxLength={3} onChange={handleInputChangeCapitulo} />
      </div>
      <div className="col-span-2">
        <Label className="block font-bold text-slate-800 mb-2">Versiculo</Label>
        <Input pattern="/[1-9|,|-]/" placeholder="Ex.: seguidos: 1-7 ou especificos: 1,7 ou 1" onChange={handleInputChange} />
      </div>
      <div className="flex-1 col-span-2">
      <Button type="submit" className="w-full" onClick={montarRota}>Buscar</Button>
      </div>
    </div>
  )
}