import { Biblebook } from "@/types/wordStructure"
import { prisma } from "../../../prisma/prismaClient"

export async function BuscaCapitulo(capitulo:number){
  return await prisma.biblebook.findMany({
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
  }) as Biblebook[]
}
export async function BuscaCapituloEVersiculo(capitulo:number, versiculos: number[]){
  return await prisma.biblebook.findMany({
    include:{
      chapters:{
        where: {
          chapterNumber: capitulo
        },
        include:{
          verses:{
            where:{
              verseNumber:{
                in: versiculos
              }
            }
          }
        }
      }
    }
  }) as Biblebook[]
}