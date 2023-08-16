import { CardFeed } from "@/components/personal/CardFeed"
import { CardFeedSkeleton } from "@/components/personal/skeletons/CardFeedSkeleton"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Seu Feed',
  description: 'Feed de estudos biblicos',
}

export default function Feed(){
  return(
  <div>
    <ScrollArea className="h-[100vh] w-full flex-1 flex-col justify-center items-center pl-8">
    <CardFeed/>
    <CardFeed/>
    <CardFeed/>
    <CardFeed/>
    <CardFeed/>
  </ScrollArea>
  </div>)
} 