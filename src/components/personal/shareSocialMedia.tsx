import { FaShareAlt, FaFacebookSquare, FaLinkedin, FaTelegram, FaTwitterSquare, FaWhatsappSquare } from "react-icons/fa";
import { Button } from "../ui/button";
import { 
  SheetTrigger, 
  SheetContent, 
  SheetHeader, 
  SheetTitle, 
  SheetDescription, 
  Sheet
} from "../ui/sheet";
import Link from "next/link";
interface PropsShareSocialMedia{
  path: string,
  titleShare: string,
  textComment: string
}
export function ShareSocialMedia({path, titleShare, textComment}:PropsShareSocialMedia) {
  
  return (
    <Sheet>
      <SheetTrigger className="flex items-center">
        <FaShareAlt className="mr-2" />
        Compartilhar
      </SheetTrigger>
      <SheetContent side={"bottom"} className="w-full flex justify-center">
        <SheetHeader>
          <SheetTitle>Compartilhe em suas redes sociais</SheetTitle>
          <SheetDescription>
            <div className=" flex flex-1 justify-between">
              <Link href={`https://www.facebook.com/sharer/sharer.php?u=${process.env.URL_BASE +"search/"+ path}&quote=${titleShare}`} target='_blank'>
                <Button variant={'outline'} >
                  <FaFacebookSquare className="text-2xl" />
                </Button>
              </Link>
              <Link href={`http://www.linkedin.com/shareArticle?mini=true&url=${process.env.URL_BASE +"search/"+ path}&title=${titleShare}&summary=Resumo&sourse=Pingback`} target='_blank'>
                <Button variant={'outline'}>
                  <FaLinkedin className="text-2xl" />
                </Button>
              </Link>
              <Link href={`https://t.me/share/url?url=${process.env.URL_BASE +"search/"+ path}&text=${textComment}%0a${titleShare}`} target='_blank'>
                <Button variant={'outline'}>
                  <FaTelegram className="text-2xl" />
                </Button>
              </Link>
              <Link href={`https://twitter.com/intent/tweet?text=${textComment}%0a${titleShare}%0a${process.env.URL_BASE +"search/"+ path}`} target='_blank'>
                <Button variant={'outline'}>
                  <FaTwitterSquare className="text-2xl" />
                </Button>
              </Link>
              <Link href={`whatsapp://send?text=_${textComment}_%0a*${titleShare}*%0a${process.env.URL_BASE +"search/"+ path}`} target='_blank'>
                <Button variant={'outline'}>
                  <FaWhatsappSquare className="text-2xl" />
                </Button>
              </Link>
            </div>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  )
}