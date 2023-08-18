import { CardFeedSkeleton } from "@/components/personal/skeletons/CardFeedSkeleton";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function Loading() {
  return (
    <div>
    <ScrollArea className="h-[100vh] w-full flex-1 flex-col justify-center items-center pl-8">
    <CardFeedSkeleton/>
    <CardFeedSkeleton/>
    <CardFeedSkeleton/>
    <CardFeedSkeleton/>
    <CardFeedSkeleton/>
  </ScrollArea>
  </div>
  )
}