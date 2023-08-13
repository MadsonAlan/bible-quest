import { Biblebook } from "@/types/wordStructure"
import { prisma } from "../../../prisma/prismaClient"

export async function BuscaCapitulo(livro:string, capitulo:number){
  const palavra_encontrada: Biblebook = await prisma.biblebook.findUnique({
    where:{
      abbrev: livro as string
    },
    include:{
      chapters:{
        where: {
          chapterNumber: capitulo
        },
        include:{
          verses:{
          }
        }
      }
    }
  }) as Biblebook
  return palavra_encontrada
}