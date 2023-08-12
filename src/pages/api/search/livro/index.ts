// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient({})
export type Data = {
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
  console.log(req.query);
  
  const busca = req.query;
  !busca.livro??res.status(400).json({palavraEncontrada: {} as Biblebook})


  const palavra_encontrada: Biblebook = await prisma.biblebook.findUnique({
    where:{
      abbrev: busca?.livro as string
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
  res.status(200).json({palavraEncontrada: palavra_encontrada})
}