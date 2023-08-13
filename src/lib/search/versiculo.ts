import { Biblebook } from "@/types/wordStructure"
import { prisma } from "../../../prisma/prismaClient"

export async function buscaVersiculoConsecutivo(
  livro: string,
  capitulo: number,
  versiculos: number[]) {
  const palavra_encontrada: Biblebook = await prisma.biblebook.findUnique({
    where: {
      abbrev: livro as string
    },
    include: {
      chapters: {
        where: {
          chapterNumber: capitulo
        },
        include: {
          verses: {
            where: {
              verseNumber: {
                gte: versiculos[0]
              },
              AND: {
                verseNumber: {
                  lte: versiculos[1]
                }
              }
            }
          }
        }
      }
    }
  }) as Biblebook
  return palavra_encontrada
}


export async function buscaVersiculoEspecifico(
  livro: string,
  capitulo: number,
  versiculos: number[]){

    const palavra_encontrada: Biblebook = await prisma.biblebook.findUnique({
      where:{
        abbrev: livro as string
      },
      include:{
        chapters:{
          where: {
            chapterNumber: Number(capitulo)
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
    }) as Biblebook
    return palavra_encontrada

}