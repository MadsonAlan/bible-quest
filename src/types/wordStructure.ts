export interface Biblebook {
  abbrev: String,
  chapters: Chapter[],
  name: String
}

export interface Chapter {
  id: String,
  chapterNumber: number,
  verses: Verse[]
}

export interface Verse {
  id: String,
  verseNumber: number,
  wordTipe: "AA" | "ACF" | "NVI",
  word: String,
}