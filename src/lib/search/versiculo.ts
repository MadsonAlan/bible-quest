import { Biblebook } from "@/types/wordStructure"
import { prisma } from "../../../prisma/prismaClient"

export async function buscaVersiculoEspecifico(
  livro: string,
  capitulo: number,
  versiculos: number[]){

    return await prisma.biblebook.findMany({
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
              where: {
                verseNumber:{
                  in: versiculos
                },
              }
            }
          }
        }
      }
    }) as Biblebook[]

}


export async function BuscaVersiculosNoTodo(versiculo:number[]) {
  return await prisma.biblebook.findMany({
    include:{
      chapters:{
        include:{
          verses:{
            where:{
              verseNumber: {
                in: versiculo
              }
            }
          }
        }
      }
    }
  }) as Biblebook[]
  
}