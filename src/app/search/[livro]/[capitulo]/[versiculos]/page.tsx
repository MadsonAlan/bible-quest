import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ValidacaoDeBusca } from "@/lib/search/validaBusca";
import { Biblebook } from "@/types/wordStructure";
import { Metadata } from "next";
import Link from "next/link";
import { Key } from "react";
import { ArrowLeft } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import { ShareSocialMedia } from "@/components/personal/shareSocialMedia";


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
    <Card className="max-w-[440px] sm:w-5/6">
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
        <ScrollArea className="h-80 w-full">
          {
            palavra_encontrada?.map(
              livro => livro.chapters.map(
                chapter => chapter?.verses?.map(
                  verse => (
                    <Accordion type="single" collapsible key={verse.id as Key | null | undefined}>
                      <AccordionItem value="item-1">
                        <AccordionTrigger>
                          <div className="flex text-sm text-left">
                            <p
                            >
                              <span className="block font-bold">{`${livro.abbrev} ${chapter.chapterNumber}:${verse.verseNumber}`}</span>
                              <b>{verse.verseNumber}</b> {verse.word}</p>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent>
                          <Separator className="mb-4" />
                          <ShareSocialMedia path={`${livro.abbrev}/${chapter.chapterNumber}/${verse.verseNumber}`} textComment={verse.word as string} titleShare={`${livro.abbrev} ${chapter.chapterNumber}:${verse.verseNumber}`} />
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  )
                )
              ))
          }
        </ScrollArea>
      </CardContent>
      <CardFooter>
        <div className="flex flex-1 justify-between">
          <Link href='/' className="flex"><ArrowLeft />Voltar</Link>
          <span className="text-sm">
            <ShareSocialMedia
              path={`${params.livro}/${params.capitulo}/${params.versiculos}`}
              textComment={'Que texto incrível'}
              titleShare={`${params.livro != 'all' ? params.livro : 'todos os livros'} ${params.capitulo > 0 ? 'capitulo ' + params.capitulo : 'todos os capitulos'
                }:${params.versiculos != '0' ? 'versículo ' + params.versiculos.split('-') : 'todos os versiculos'
                }`}
            /></span>
        </div>
      </CardFooter>
    </Card>
  )
}