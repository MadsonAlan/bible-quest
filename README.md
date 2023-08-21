# BibleQuest - Espalhando Conhecimento Bíblico Através de Gamificação

Bem-vindo ao repositório do projeto **BibleQuest**! Este é um software desenvolvido com o objetivo de promover o conhecimento bíblico de forma interativa e envolvente, utilizando gamificação, compartilhamento de estudos bíblicos públicos e uma interface amigável fornecida pelo Shadcn UI.

## Visão Geral do Projeto

O BibleQuest é um aplicativo da web desenvolvido com o framework Next.js, utilizando o Tailwind CSS para a estilização dos componentes e o Prisma como ORM para interagir com o banco de dados. O banco de dados utilizado é o MongoDB, fornecendo flexibilidade e escalabilidade para o armazenamento de dados.

## Funcionalidades Principais (Em desenvolvimento)

- [ ] **Gamificação da Leitura Bíblica:** Os usuários podem acompanhar seu progresso na leitura da Bíblia, ganhando pontos e conquistas à medida que avançam.

- [ ] **Compartilhamento de Estudos Bíblicos:** Os usuários podem criar e compartilhar seus estudos bíblicos com a comunidade, incentivando a troca de conhecimento.

- [ ] **Interface Amigável com Shadcn UI:** O projeto utiliza o Shadcn UI para criar componentes de interface atraentes e responsivos, proporcionando uma experiência de usuário agradável.

## Instruções de Instalação

1. Clone este repositório para sua máquina local:
   ```bash
   git clone https://github.com/your-username/biblequest.git
   cd biblequest
   ```

2. Instale as dependências do projeto:
   ```bash
   npm install
   ```

3. Crie um arquivo `.env.local` na raiz do projeto e configure as variáveis de ambiente necessárias:
   ```env
   DATABASE_URL=mongodb://USERNAME:PASSWORD@HOST/DATABASE
   ```

4. Execute as migrações do banco de dados utilizando o Prisma:
   ```bash
   npx prisma migrate dev
   ```

5. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

6. Acesse `http://localhost:3000` no seu navegador para visualizar o projeto.

## Contribuição

Se você encontrar pontos a serem melhorados ou tiver sugestões para o projeto, fique à vontade para abrir uma issue no GitHub. Sua contribuição é muito bem-vinda!

## Links Importantes

- [Projeto no GitHub](https://github.com/MadsonAlan/bible-quest)
- [Visualização do Projeto](https://biblequest.vercel.app/)

## Tecnologias Utilizadas

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Prisma](https://www.prisma.io/)
- [MongoDB](https://www.mongodb.com/)
- [Shadcn UI](https://ui.shadcn.com/)

---

Este é um projeto em constante evolução, e estamos ansiosos para receber suas contribuições e feedback! Junte-se a nós na jornada de espalhar conhecimento bíblico de maneira inovadora e envolvente.
