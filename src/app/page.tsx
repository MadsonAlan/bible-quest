"use client"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Metadata } from "next"
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Key, useState } from "react";
import { Data } from "@/pages/api/search/livro";
import { ScrollArea } from "@/components/ui/scroll-area";



export const metadata: Metadata = {
  title: "Busca de versiculos",
  description: "Busca de versiculos biblicos usando Next js.",
}

export interface Book {
  abbrev: string;
  chapters: string[][];
  name: string;
}

export default function Home() {
  const [ livro, setLivro ] = useState('');
  const [ capitulo, setCapitulo ] = useState('');
  const [ versiculo, setVersiculo ] = useState('');
  const [ palavra_encontrada, setPalavra_encontrada ] = useState<Data>({} as Data);

  const handleInputChange = (e: any) => {
    setLivro(e.target.value.split(" ")[ 0 ])
    setCapitulo(e.target.value.split(" ")[ 1 ])
    setVersiculo(e.target.value.split(" ")[ 2 ])
  };

  const buscarPalavra = async () => {
    let palavraEncontrada: Data
    if (!capitulo && !versiculo) {
      const res = await fetch(`${process.env.NEXT_PUBLIC_URL_BASE}/api/search/livro?livro=${livro}`)
      palavraEncontrada = await res.json()
    } else if (!versiculo) {
      const res = await fetch(`${process.env.NEXT_PUBLIC_URL_BASE}/api/search/livro/capitulo?livro=${livro}&capitulo=${capitulo}`)
      palavraEncontrada = await res.json()
    } else {
      if (versiculo.split('-').length == 2) {
        const res = await fetch(`${process.env.NEXT_PUBLIC_URL_BASE}/api/search/livro/capitulo/versiculo/consecutivo?livro=${livro}&capitulo=${capitulo}&versiculo=${versiculo}`)
        palavraEncontrada = await res.json()
      } else {
        const res = await fetch(`${process.env.NEXT_PUBLIC_URL_BASE}/api/search/livro/capitulo/versiculo/especifico?livro=${livro}&capitulo=${capitulo}&versiculo=${versiculo}`)
        palavraEncontrada = await res.json()
      }
    }
    console.log(palavraEncontrada);

    setPalavra_encontrada(palavraEncontrada)
  }


  return (
    <div className="flex min-h-screen bg-slate-50 items-center justify-center">
      <Card className="w-[440px]">
        <CardHeader>
          <CardTitle>{livro || 'livro'}</CardTitle>
          <CardDescription>{capitulo || 'capitulo'}:{versiculo || 'versiculo'}</CardDescription>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[640px] w-full">
            <>
              {
                palavra_encontrada?.palavraEncontrada?.chapters.map(
                  chapter => chapter.verses.map(
                    verse => (
                      <p key={verse.id as Key | null | undefined}
                      className="hover:text-sky-700 hover:bg-neutral-200"
                      ><b>{verse.verseNumber}</b> {verse.word}</p>
                    )
                  )
                )
              }
            </>
          </ScrollArea>
        </CardContent>
        <CardFooter className="space-x-2">
          <Input placeholder="Informe um versículo" onChange={handleInputChange} />
          <Button type="submit" onClick={buscarPalavra}>Buscar</Button>
        </CardFooter>
      </Card>
    </div>
  )
}
