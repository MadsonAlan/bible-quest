import { Biblebook, BiblebookNoChapters } from "@/types/wordStructure"
import { prisma } from "../../../prisma/prismaClient"

export async function buscaPorLivro(livro: string){
  return await prisma.biblebook.findMany({
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
  }) as Biblebook[]
}
export async function buscaPorLivroECapitulo(livro: string, capitulo: number){
  return await prisma.biblebook.findMany({
    where:{
      abbrev: livro as string
    },
    include:{
      chapters:{
        where:{
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
export async function buscaPorLivroEVersiculo(livro: string, versiculos: number[]){
  return await prisma.biblebook.findMany({
    where:{
      abbrev: livro as string
    },
    include:{
      chapters:{
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
export async function buscaSomenteLivro(){
  return await prisma.biblebook.findMany() as BiblebookNoChapters[]
  
}