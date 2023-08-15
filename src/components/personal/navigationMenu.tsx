'use client'
import Link from "next/link";
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger
} from "../ui/menubar";


export function MenuNavigation() {
  return (
      <Menubar className="justify-center">
        <MenubarMenu>
          <MenubarTrigger><Link href={'/'} replace>Ler a biblia</Link></MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger><Link href={'/feed'} replace>Feed de estudos</Link></MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Meus estudos</MenubarTrigger>
        </MenubarMenu>
      </Menubar>
  )
}