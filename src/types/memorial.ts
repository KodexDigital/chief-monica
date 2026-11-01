export interface StorySection {
  heading: string
  body: string
  details?: string[]
}

export interface TimelineItem {
  year: string
  title: string
  description: string
}

export interface GalleryItem {
  title: string
  caption: string
  image: string
}

export interface MemorialNote {
  author: string
  text: string
}

export interface LifeHighlight {
  title: string
  body: string
}

export interface FamilyHighlight {
  label: string
  value: string
}

export interface FuneralDetail {
  title: string
  details: string
}

export interface BurialProgrammeEvent {
  location: string
  date: string
}

export interface FamilyMember {
  id: string
  name: string
  relationship: string
  generation: number
  parentId: string | null
  photo?: string
  note?: string
  deceased?: boolean
}

export interface MemorialProfile {
  title: string
  fullName: string
  biographyTitle?: string
  shortName: string
  chieftaincyTitle: string
  quote: string
  heroDescription: string
  intro: string
  compiledBy?: string
  storySections: StorySection[]
  milestones: Array<{ label: string; value: string }>
  timeline: TimelineItem[]
  values: string[]
  lifeHighlights: LifeHighlight[]
  burialProgram: BurialProgrammeEvent[]
  musicAlbumId?: string
  funeralInfo: FuneralDetail[]
  gallery: GalleryItem[]
  notes: MemorialNote[]
  familyHighlights: FamilyHighlight[]
}
