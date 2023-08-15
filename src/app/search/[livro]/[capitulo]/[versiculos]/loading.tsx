import { Card, CardHeader, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Skeleton } from "@/components/ui/skeleton";
import { Link, ArrowLeft } from "lucide-react";

export default function Loading() {
  return (
    <Card className="max-w-[440px] sm:w-5/6">
        <CardHeader>
          <Skeleton className="h-4 w-8" />
          <CardDescription className="flex items-center">

            <Skeleton className="h-3 w-1/6" /> : <Skeleton className="h-3 w-1/6" />
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-80 w-full">
            <Skeleton className="h-3 w-8 mb-2" />
            <Skeleton className="h-3 w-5/6 mb-2" />
            <Skeleton className="h-3 w-1/5 mb-2" />
            <Skeleton className="h-3 w-8 mb-2" />
            <Skeleton className="h-3 w-5/6 mb-2" />
            <Skeleton className="h-3 w-5/12 mb-2" />
            <Skeleton className="h-3 w-1/5 mb-2" />
            <Skeleton className="h-3 w-8 mb-2" />
            <Skeleton className="h-3 w-5/6 mb-2" />
            <Skeleton className="h-3 w-5/6 mb-2" />
            <Skeleton className="h-3 w-1/5 mb-2" />
          </ScrollArea>
        </CardContent>
        <CardFooter>
          <Link href='/' className="flex"><ArrowLeft />Voltar</Link>
        </CardFooter>
      </Card>
  )
}