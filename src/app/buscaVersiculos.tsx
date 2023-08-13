"use client"
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Biblebook } from "@/types/wordStructure";
import { Key, useState } from "react";
interface PropsBuscarPalavra {
  palavra_completa: Biblebook[]
}
export function BuscaVersiculos({ palavra_completa }: PropsBuscarPalavra) {
  const [ livro, setLivro ] = useState('');
  const [ capitulo, setCapitulo ] = useState('');
  const [ versiculo, setVersiculo ] = useState('');
  const [ palavra_encontrada, setPalava_encontrada ] = useState<Biblebook[]>(palavra_completa);

  const handleInputChange = (e: any) => {
    setLivro(e.target.value.split(" ")[ 0 ])
    setCapitulo(e.target.value.split(" ")[ 1 ])
    setVersiculo(e.target.value.split(" ")[ 2 ])
  };

  const buscarVersiculos = () => {
    const textoCompleto = palavra_completa;
    let filtrada: Biblebook[] = textoCompleto;
    if (livro) {
      filtrada = textoCompleto.filter(palavra => palavra.abbrev == livro)
      
    }
    if (Number(capitulo) > 0) {

      for (let index = 0; index < filtrada.length; index++) {
        let livro = filtrada[ index ];

        livro = {
          ...livro,
          chapters: [livro.chapters[Number(capitulo)-1]]
        }
        filtrada[ index ] = livro;
      }
      
      
    }
    if (versiculo && filtrada) {
      let versiculosSeguidos: number[] = versiculo.split("-").filter(verso => Number(verso) > 0).map(verso => Number(verso))
      let versiculosEspecificos: number[] = versiculo.split(",").filter(verso => Number(verso) > 0).map(verso => Number(verso))
      let listaDeVersiculos: number[] = []
      if (versiculosSeguidos.length == 2) {
        let contador = versiculosSeguidos[ 0 ];
        do {
          listaDeVersiculos.push(contador)
          contador++
        } while (contador != versiculosSeguidos[ 1 ] + 1);

      } else if (versiculosEspecificos.length > 0) {
        listaDeVersiculos = versiculosEspecificos
      }
      for (let indexExtern = 0; indexExtern < filtrada.length; indexExtern++) {
        let livro = filtrada[ indexExtern ];
        for (let index = 0; index < livro.chapters.length; index++) {
          let capitulo = livro.chapters[ index ];
          capitulo = {
            ...capitulo, verses: capitulo?.verses.filter(
              versiculo => {
                if (listaDeVersiculos.includes(versiculo.verseNumber)) {
                  return versiculo
                }
              }
            )
          }
          filtrada[ indexExtern ].chapters[ index ] = capitulo
        }
      }
      
    }
    setPalava_encontrada(filtrada)

  }
  return (
    <Card className="w-[440px]">
      <CardHeader>
        <CardTitle>{livro || 'livro'}</CardTitle>
        <CardDescription>{capitulo || 'capitulo'}:{versiculo || 'versiculo'}</CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[640px] w-full">
          {
            palavra_encontrada?.map(
              livro => livro.chapters.map(
                chapter => chapter?.verses?.map(
                  verse => (
                    <div className="p-2 flex text-slate-600 text-sm rounded-lg hover:bg-neutral-200"
                      key={verse.id as Key | null | undefined}
                    >
                      <p
                        className="hover:text-sky-700"
                      >
                        <span className="block font-bold text-slate-800">{`${livro.abbrev} ${chapter.chapterNumber}:${verse.verseNumber}`}</span>
                        <b>{verse.verseNumber}</b> {verse.word}</p>
                    </div>
                  )
                )
              ))
          }
        </ScrollArea>
      </CardContent>
      <CardFooter className="space-x-2">
        <Input placeholder="Ex.: gn 1 1 ou gn 1 1-7 ou gn 1 1,7" onChange={handleInputChange} />
        <Button type="submit" onClick={buscarVersiculos}>Buscar</Button>
      </CardFooter>
    </Card>
  )
}