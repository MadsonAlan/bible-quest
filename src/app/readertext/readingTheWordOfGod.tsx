import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export function ReadingTheWordOfGod(){
  return(
    <div className="flex min-h-screen bg-slate-50 items-center justify-center">
      <Card className="w-[440px] h-[700px] grid grid-rows-[min-content_1fr_min-content]">
        <CardHeader>
          <CardTitle>Neemias</CardTitle>
          <CardDescription>9:6</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Só tu és Yahweh, o SENHOR! Criaste os céus e o universo, com todos os seus elementos, a terra e tudo quanto nela existe, os mares e tudo quanto neles há, e tu concedes o dom da vida a todos os seres, e os exércitos dos céus te adoram continuamente!</p>
        </CardContent>
        <CardFooter className="space-x-2">
          <Input placeholder="Informe um versículo"/>
          <Button type="submit">Buscar</Button>
        </CardFooter>
      </Card>
    </div>
  )
}