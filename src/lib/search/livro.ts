import { Biblebook } from "@/types/wordStructure"
import { prisma } from "../../../prisma/prismaClient"

export async function buscaPorLivro(livro: string){
  const palavra_encontrada: Biblebook = await prisma.biblebook.findUnique({
    where:{
      abbrev: livro as string
    },
    include:{
      chapters:{
        include:{
          verses:{
          }
        }
      }
    }
  }) as Biblebook
  return palavra_encontrada
}