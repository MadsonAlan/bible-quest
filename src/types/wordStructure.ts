export interface Biblebook {
  abbrev: String,
  chapters: Chapter[],
  name: String
}
export interface BiblebookNoChapters extends Omit<Biblebook, 'chapters'> {
}

export interface Chapter {
  id: String,
  chapterNumber: number,
  verses: Verse[]
}

export interface ChapterNoVerses extends Omit<Chapter, 'verses'> {
}

export interface Verse {
  id: String,
  verseNumber: number,
  wordTipe: "AA" | "ACF" | "NVI",
  word: String,
}