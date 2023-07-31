import { Metadata } from "next"
import { LoginPage } from "./login/loginPage"
import { ReadingTheWordOfGod } from "./readertext/readingTheWordOfGod"

export const metadata: Metadata = {
  title: "Authentication",
  description: "Authentication forms built using the components.",
}
export default function Home() {
  return (
    <ReadingTheWordOfGod/>
  )
}
