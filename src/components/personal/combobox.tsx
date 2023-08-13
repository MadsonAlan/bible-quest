"use client"
import { Check, ChevronsUpDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { BiblebookNoChapters } from "@/types/wordStructure"
import { useState } from "react"
import { ScrollArea } from "../ui/scroll-area"

export function Combobox({ livros, livroSelecionado }: { livros: BiblebookNoChapters[], livroSelecionado: (livro: string) => void }) {
  const [ open, setOpen ] = useState(false)
  const [ value, setValue ] = useState("")

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value
            ? livros.find((livro) => livro.abbrev === value)?.name
            : "Selecione..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Selecione..." />
          <CommandEmpty>Nenhuma seleção</CommandEmpty>
          <ScrollArea className="h-[200px] w-full">
            <CommandGroup>
              {livros.map((livro) => (
                <CommandItem
                  key={livro.abbrev as React.Key}
                  onSelect={(currentValue) => {
                    livroSelecionado(currentValue.split(' - ')[0] === value ? "" : currentValue.split(' - ')[0])
                    setValue(currentValue.split(' - ')[0] === value ? "" : currentValue.split(' - ')[0])
                    setOpen(false)
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === livro.abbrev ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {livro.abbrev} - {livro.name}
                </CommandItem>
              ))}
            </CommandGroup>
          </ScrollArea>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
