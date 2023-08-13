import { Biblebook } from "@/types/wordStructure";
import { prisma } from "../../../prisma/prismaClient";

export async function buscaCompleta(){
  return await prisma.biblebook.findMany({
    include:{
     chapters:{
       include:{
         verses:{}
       }
     }
    }
 }) as Biblebook[];
}