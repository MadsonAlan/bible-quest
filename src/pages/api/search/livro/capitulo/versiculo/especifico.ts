// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient({})
type Data = {
  palavraEncontrada: Biblebook
}
interface ParamsBusca{
   livro: string, 
   capitulo: string, 
   versiculo: string 
}

interface Biblebook {
  abbrev: String,
  chapters: Chapter[],
  name: String
}

interface Chapter {
  id: String,
  chapterNumber: number,
  verses: Verse[]
}

interface Verse {
  id: String,
  verseNumber: number,
  wordTipe: "AA" | "ACF" | "NVI",
  word: String,
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  
  const busca = req.query;
  if (!busca.livro || !busca.capitulo || !busca.versiculo) {
    res.status(400).json({palavraEncontrada: {} as Biblebook})
  }

  const versiculos = busca.versiculo?.toString().split(",").map(item=>Number(item))  
  
  const palavra_encontrada: Biblebook = await prisma.biblebook.findUnique({
    where:{
      abbrev: busca.livro as string
    },
    include:{
      chapters:{
        where: {
          chapterNumber: Number(busca.capitulo)
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
  res.status(200).json({palavraEncontrada: palavra_encontrada})
}