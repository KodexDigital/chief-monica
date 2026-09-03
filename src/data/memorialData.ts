import memorialData from './memorial.json'
import familyData from './family.json'
import type { FamilyMember, MemorialProfile } from '../types/memorial'

export const memorialProfile = memorialData as MemorialProfile
export const familyMembers = familyData as FamilyMember[]

export const navigation = [
  { label: 'Home', href: '#home' },
  { label: 'Legacy', href: '#legacy' },
  { label: 'Tributes', href: '#tribute' },
]
