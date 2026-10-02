import image01 from '../assets/memories/IMG-20220104-WA0039.jpg'
import image02 from '../assets/memories/DSC_0084.JPG'
import image03 from '../assets/memories/20211230_124936.jpg'
import image04 from '../assets/memories/DSC_0511.JPG'
import image05 from '../assets/memories/DSC_0203.JPG'
import image06 from '../assets/memories/DSC_0128.JPG'
import image07 from '../assets/memories/DSC_0123.JPG'
import image08 from '../assets/memories/DSC_0122.JPG'
import image09 from '../assets/memories/20211230_124857.jpg'
import image10 from '../assets/memories/DSC_0073.JPG'
import image11 from '../assets/memories/DSC_0081.JPG'
import type { GalleryItem } from '../types/memorial'

const originalMemories: GalleryItem[] = [
  {
    title: 'A cherished gathering',
    caption: 'A joyful family moment surrounded by colour, tradition, and togetherness.',
    image: image01,
  },
  {
    title: 'Together in remembrance',
    caption: 'A treasured gathering shared in warmth and good company.',
    image: image02,
  },
  {
    title: 'Family and community',
    caption: 'Loved ones gathered outdoors in a spirit of celebration and connection.',
    image: image03,
  },
  {
    title: 'A life of dignity',
    caption: 'A quiet portrait of a memorable day, held close by the family.',
    image: image04,
  },
  {
    title: 'The joy of togetherness',
    caption: 'Family members sharing a meaningful moment in one another\'s company.',
    image: image05,
  },
  {
    title: 'In celebration',
    caption: 'A beautiful gathering marked by ceremony, colour, and family pride.',
    image: image06,
  },
  {
    title: 'A treasured family moment',
    caption: 'A gathering preserved as part of the family\'s story.',
    image: image07,
  },
  {
    title: 'Grace and tradition',
    caption: 'A memorable occasion surrounded by loved ones and familiar traditions.',
    image: image08,
  },
  {
    title: 'A day to remember',
    caption: 'A family occasion filled with colour, fellowship, and lasting memories.',
    image: image09,
  },
  {
    title: 'Family portraits',
    caption: 'A portrait gathering that keeps the faces and bonds of family close.',
    image: image10,
  },
  {
    title: 'Love held close',
    caption: 'A cherished portrait from the family archive.',
    image: image11,
  },
]

const addedPhotoDetails = [
  { filename: 'dada_ma.jpg', title: 'Together in blue', caption: 'A seated portrait of two loved ones sharing a quiet moment in coordinated blue attire.' },
  { filename: 'IMG-20260905-WA0008.jpg', title: 'A loving embrace', caption: 'A younger family member leans in to embrace Monica as they sit together at home.' },
  { filename: 'IMG-20260905-WA0009.jpg', title: 'Close by her side', caption: 'A child sits beside Monica, sharing a gentle moment captured at home.' },
  { filename: 'IMG-20260905-WA0010.jpg', title: 'A portrait in colour', caption: 'Monica sits for a portrait in a vivid patterned dress and matching headwrap.' },
  { filename: 'IMG-20260905-WA0011.jpg', title: 'Gathered around her', caption: 'Family members gather close for a relaxed group portrait.' },
  { filename: 'IMG-20260905-WA0014.jpg', title: 'A portrait together', caption: 'Monica and a loved one sit side by side in formal, colourful clothing.' },
  { filename: 'IMG-20260905-WA0015.jpg', title: 'A family gathering', caption: 'Adults and children come together outside for a family photograph.' },
  { filename: 'IMG-20260905-WA0016.jpg', title: 'Side by side', caption: 'Monica and a family member stand together for a portrait outdoors.' },
  { filename: 'IMG-20260905-WA0021.jpg', title: 'Among her loved ones', caption: 'A group portrait brings several generations together in a lively outdoor setting.' },
  { filename: 'IMG-20260905-WA0023.jpg', title: 'A moment with family', caption: 'Monica is pictured with relatives during an outdoor family gathering.' },
  { filename: 'IMG-20260905-WA0025.jpg', title: 'A joyful gathering', caption: 'Relatives gather around Monica, with a young child bringing a playful moment to the photograph.' },
  { filename: 'IMG-20260905-WA0027.jpg', title: 'Together outdoors', caption: 'A family group pauses for a photograph, with Monica at the centre.' },
  { filename: 'IMG-20260905-WA0028.jpg', title: 'A family portrait', caption: 'Loved ones stand together for another portrait during the outdoor gathering.' },
  { filename: 'IMG-20260905-WA0029.jpg', title: 'Smiles in good company', caption: 'A candid group portrait captures a warm moment with family.' },
  { filename: 'IMG_0092.jpg', title: 'A seated portrait', caption: 'Monica and a companion sit together in ceremonial dress among gathered guests.' },
  { filename: 'IMG_0093.jpg', title: 'Guests gathered', caption: 'Friends and family share a gathering beneath an open-sided shelter.' },
  { filename: 'IMG_0115.jpg', title: 'A moment side by side', caption: 'Two women stand together for a portrait in colourful patterned clothing.' },
  { filename: 'IMG_0123.jpg', title: 'A day among family', caption: 'Monica appears among relatives and guests during a family gathering.' },
  { filename: 'IMG_0152.jpg', title: 'In the company of loved ones', caption: 'A gathering surrounds Monica as family and guests share the occasion.' },
  { filename: 'IMG_0154.jpg', title: 'A gathering in celebration', caption: 'Monica is pictured with loved ones at a gathering filled with guests.' },
  { filename: 'IMG_0169.jpg', title: 'A lively celebration', caption: 'Guests gather close as the celebration unfolds around Monica.' },
  { filename: 'IMG_0171.jpg', title: 'Among family and friends', caption: 'Monica and a companion are pictured with a large gathering of guests.' },
  { filename: 'IMG_0172.jpg', title: 'A moment in the crowd', caption: 'A candid view of Monica among family and friends at a busy gathering.' },
  { filename: 'IMG_0180.jpg', title: 'A walk through the gathering', caption: 'Monica moves through the gathering as family and guests look on.' },
  { filename: 'IMG_3812.jpeg', title: 'An archival portrait', caption: 'A preserved photograph shows Monica and a companion together outdoors.' },
  { filename: 'IMG_3813.jpeg', title: 'A portrait in traditional dress', caption: 'Monica is pictured in traditional attire beside a loved one.' },
  { filename: 'IMG_3815.jpeg', title: 'A composed portrait', caption: 'A formal portrait preserves Monica in patterned traditional clothing.' },
  { filename: 'IMG_3817.jpeg', title: 'A moment with a companion', caption: 'Monica and a companion pose together in a family photograph.' },
  { filename: 'IMG_3820.jpeg', title: 'A portrait remembered', caption: 'A preserved portrait captures Monica in a white blouse and blue wrapper.' },
  { filename: 'IMG_3823_1.jpeg', title: 'Together in a family portrait', caption: 'Monica is pictured beside a loved one in a carefully preserved photograph.' },
  { filename: 'IMG_3824.jpeg', title: 'A portrait from the archive', caption: 'A family photograph preserves Monica with a companion in traditional attire.' },
  { filename: 'memory1.jpg', title: 'Three generations together', caption: 'Monica stands between two younger family members for a studio portrait.' },
  { filename: 'memory2.jpg', title: 'A formal family gathering', caption: 'Monica is pictured with relatives dressed for a special family occasion.' },
]

const memoryPhotoUrls = import.meta.glob<string>('../assets/memories/*.{jpg,JPG,jpeg}', {
  eager: true,
  query: '?url',
  import: 'default',
})

const addedMemories: GalleryItem[] = addedPhotoDetails.map(({ filename, ...details }) => {
  const image = memoryPhotoUrls[`../assets/memories/${filename}`]

  if (!image) {
    throw new Error(`Memory photo not found: ${filename}`)
  }

  return { ...details, image }
})

export const memoryGallery: GalleryItem[] = [...originalMemories, ...addedMemories]