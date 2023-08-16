import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from "../ui/card";
import { Separator } from "../ui/separator";
import { ChevronsUp, ChevronsDown } from "lucide-react";
import { Button } from "../ui/button";

export function CardFeed() {
  return (     
    <Card className="max-w-[440px] sm:w-5/6 m-5">
      <CardHeader>
      <Link href={""}>
        <Avatar>
          {/* <AvatarImage src="https://github.com/shadcn.png" /> */}
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </Link>
        <CardDescription className="flex items-center">
        <p className="line-clamp-3">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</p>
        </CardDescription>
      </CardHeader>
      <Link href={""}>
        <CardContent>
          <p className="line-clamp-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </CardContent>
      </Link>
      <Separator />
      <CardFooter className="flex-1 justify-between p-4">
        <Button className="flex-1 rounded-none"><p className="flex"><span><ChevronsUp /></span> Up</p></Button>
        <Button className="flex-1 rounded-none"><p className="flex"><span><ChevronsDown /></span>Down</p></Button>
      </CardFooter>
    </Card>
  )
}