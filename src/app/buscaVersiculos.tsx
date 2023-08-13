"use client"
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Biblebook } from "@/types/wordStructure";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { Key, useState } from "react";
interface PropsBuscarPalavra {
  palavra_completa: Biblebook[]
}
export function BuscaVersiculos({ palavra_completa }: PropsBuscarPalavra) {
  const [ livro, setLivro ] = useState('');
  const [ capitulo, setCapitulo ] = useState('');
  const [ versiculo, setVersiculo ] = useState('');
  const [ palavra_encontrada, setPalava_encontrada ] = useState<Biblebook[]>([]);

  const handleInputChange = (e: any) => {
    setLivro(e.target.value.split(" ")[ 0 ])
    setCapitulo(e.target.value.split(" ")[ 1 ])
    setVersiculo(e.target.value.split(" ")[ 2 ])
  };

  const buscarVersiculos = () => {
    const textoCompleto = palavra_completa;
    let filtrada: Biblebook | undefined;
    if (livro) {
      filtrada = textoCompleto.find(palavra => palavra.abbrev == livro)
      
    }
    if (Number(capitulo) > 0 && filtrada) {
      
      filtrada = {...filtrada, 
          chapters: [filtrada.chapters[Number(capitulo)-1]]
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
        } while (contador != versiculosSeguidos[ 1 ]+1);

      } else if (versiculosEspecificos.length > 0) {
        listaDeVersiculos = versiculosEspecificos
      }
      for (let index = 0; index < filtrada.chapters.length; index++) {
        let capitulo = filtrada.chapters[index];
        capitulo = {...capitulo, verses: capitulo.verses.filter(
          versiculo => {
            if (listaDeVersiculos.includes(versiculo.verseNumber)) {
              return versiculo
            }
          }
        )}
        filtrada.chapters[index] = capitulo
      }
    }
    if (filtrada) {
      setPalava_encontrada([filtrada])
    }
  }
  return (
    <Card className="w-[440px]">
      <CardHeader>
        <CardTitle>{livro || 'livro'}</CardTitle>
        <CardDescription>{capitulo || 'capitulo'}:{versiculo || 'versiculo'}</CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[640px] w-full">
          <>
            {
              palavra_encontrada?.map(
                livro => livro.chapters.map(
                  chapter => chapter.verses.map(
                    verse => (
                      <p key={verse.id as Key | null | undefined}
                        className="hover:text-sky-700 hover:bg-neutral-200"
                      ><b>{verse.verseNumber}</b> {verse.word}</p>
                    )
                  )
                ))
            }
          </>
        </ScrollArea>
      </CardContent>
      <CardFooter className="space-x-2">
        <Input placeholder="Informe um versículo" onChange={handleInputChange} />
        <Button type="submit" onClick={buscarVersiculos}>Buscar</Button>
      </CardFooter>
    </Card>
  )
}