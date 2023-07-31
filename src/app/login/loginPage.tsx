import Link from "next/link"
import { UserAuthForm } from "./user-auth-form";

export function LoginPage(){
  return(
    
    <>
    <div className="flex min-h-screen bg-slate-50 items-center justify-center">
          
      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Crie uma conta
            </h1>
            <p className="text-sm text-muted-foreground">
              Nos informe seu email para criarmos uma conta
            </p>
          </div>
          <UserAuthForm />
          <p className="px-8 text-center text-sm text-muted-foreground">
            Clicando em continuar, você aceita nossos{" "}
            <Link
              href="/terms"
              className="underline underline-offset-4 hover:text-primary"
            >
              Termos e condições
            </Link>{" "}
            e{" "}
            <Link
              href="/privacy"
              className="underline underline-offset-4 hover:text-primary"
            >
              Politica de privacidade
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  </>
  );
}