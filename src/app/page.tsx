import { Metadata } from "next"
import { BiblebookNoChapters } from "@/types/wordStructure"
import { buscaSomenteLivro } from "@/lib/search/livro"
import { SeachWord } from "@/components/personal/searchWord"
import { Card, CardFooter } from "@/components/ui/card"


export const metadata: Metadata = {
  title: 'busca de versiculos',
  description: 'buscando versiculos dentro da bíblia',
}


export default async function Home() {
  const livros: BiblebookNoChapters[] = await buscaSomenteLivro()

  return (
    <Card className="max-w-[440px] sm:w-5/6">
      <CardFooter className="space-x-2">
        <SeachWord livros={livros}/>
      </CardFooter>
    </Card>
  )
}
