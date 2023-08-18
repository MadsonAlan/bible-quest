import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";

import { ChevronsUp, ChevronsDown } from "lucide-react";

export function CardFeedSkeleton() {
  return (
    <Card className="max-w-[440px] sm:w-5/6 m-5">
      <CardHeader>
        <Skeleton className="h-12 w-12 rounded-full" />
        <CardDescription className="flex-col items-center">
        <Skeleton className="h-3 w-5/6 mb-2 mt-2" />
        <Skeleton className="h-3 w-5/12 mb-2" />
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Skeleton className="h-3 w-5/6 mb-2 mt-2" />
        <Skeleton className="h-3 w-full mb-2 mt-2" />
        <Skeleton className="h-3 w-full mb-2 mt-2" />
        <Skeleton className="h-3 w-4/5 mb-2 mt-2" />
        <Skeleton className="h-3 w-5/12 mb-2" />
        
      </CardContent>
      <Separator />
      <CardFooter className="flex-1 justify-between p-4">
        <Button disabled className="flex-1 rounded-none"><p className="flex"><span><ChevronsUp /></span> Up</p></Button>
        <Button disabled className="flex-1 rounded-none"><p className="flex"><span><ChevronsDown /></span>Down</p></Button>
      </CardFooter>
    </Card>
  )
}