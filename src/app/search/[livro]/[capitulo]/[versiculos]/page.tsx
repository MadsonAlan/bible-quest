import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ValidacaoDeBusca } from "@/lib/search/validaBusca";
import { Biblebook } from "@/types/wordStructure";
import { Metadata } from "next";
import Link from "next/link";
import { Key } from "react";
import { ArrowLeft } from "lucide-react"
export const metadata: Metadata = {
  title: 'palavra encontrada',
  description: 'texto encontrado a partir da busca',
}
export default async function BuscaVersiculos({ params }: { params: { livro: string, capitulo: number, versiculos: string } }) {

  let palavra_encontrada: Biblebook[] = await ValidacaoDeBusca(
    params.livro,
    Number(params.capitulo),
    params.versiculos.split('-').map(verso => Number(verso)))

  return (
    <Card className="w-[440px]">
      <CardHeader>
        <CardTitle>{params.livro != 'all' ? params.livro : 'todos os livros'}</CardTitle>
        <CardDescription>
          {
            params.capitulo > 0 ? 'capitulo ' + params.capitulo : 'todos os capitulos'
          }:{
            params.versiculos != '0' ? 'versículo ' + params.versiculos.split('-') : 'todos os versiculos'
          }
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[640px] w-full">
          {
            palavra_encontrada?.map(
              livro => livro.chapters.map(
                chapter => chapter?.verses?.map(
                  verse => (
                    <div className="p-2 flex text-sm rounded-lg hover:border-2 hover:border-neutral-200"
                      key={verse.id as Key | null | undefined}
                    >
                      <p
                      >
                        <span className="block font-bold">{`${livro.abbrev} ${chapter.chapterNumber}:${verse.verseNumber}`}</span>
                        <b>{verse.verseNumber}</b> {verse.word}</p>
                    </div>
                  )
                )
              ))
          }
        </ScrollArea>
      </CardContent>
      <CardFooter>
        <Link href='/' className="flex"><ArrowLeft />Voltar</Link>
      </CardFooter>
    </Card>
  )
}