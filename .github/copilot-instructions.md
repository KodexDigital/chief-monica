# GRANDMOTHER MEMORIAL WEBSITE — COPILOT INSTRUCTIONS

## 1. PROJECT IDENTITY

This project is a beautiful, respectful and timeless static memorial website dedicated to my grandmother.

The website exists to preserve and present her:

* Life story
* Biography
* Family history
* Life journey
* Memories
* Photographs
* Videos
* Audio recordings
* Important places
* Quotes
* Values
* Tributes
* Legacy
* Funeral/memorial information where appropriate

This is a personal family memorial and digital heritage website.

It is NOT:

* A SaaS application
* A social network
* A funeral management platform
* A CMS
* An enterprise application
* A web application requiring a backend
* A database-driven application
* An authentication system

The emotional experience and storytelling are more important than technical complexity.

# MEMORIAL SUBJECT

The memorial website is dedicated to:

**Chief Mrs. Monica Mary Otoro**

**Born: 1941**
**Passed: 2026**

These dates are confirmed and must be treated as authoritative memorial information.

The website should consistently present her life span as:

**1941 — 2026**

Do not change, infer, or fabricate more specific birth or death dates unless they are explicitly provided and confirmed.

Where appropriate, use variations such as:

* 1941–2026
* 1941 — 2026
* Born 1941 • Passed 2026
* 1941 – 2026
* "In Loving Memory of Chief Mrs. Monica Mary Otoro"

The year information should appear appropriately throughout the memorial experience, particularly:

* Homepage hero
* Page title
* Memorial introduction
* Biography
* Timeline
* Digital memorial book
* SEO metadata
* Open Graph metadata
* Footer or closing remembrance

Do not repeatedly display the dates in a way that feels excessive. Use them naturally and elegantly.

---

# 2. CORE ARCHITECTURE — IMPORTANT

This is a COMPLETELY STATIC WEBSITE.

There is NO backend.

There is NO API.

There is NO database server.

There is NO authentication.

There are NO user accounts.

There are NO server-side operations.

There is NO PostgreSQL.

There is NO SQL Server.

There is NO MongoDB.

There is NO SQLite runtime database.

There are NO microservices.

There is NO cloud infrastructure requirement.

Do not introduce any of these technologies unless I explicitly request them.

---

# 3. TECHNOLOGY STACK

Use:

* React
* TypeScript
* Vite
* Tailwind CSS

Use standard React patterns.

Keep dependencies minimal.

Do not introduce unnecessary libraries.

If a feature can be implemented cleanly using React and browser APIs, prefer that over adding another dependency.

---

# 4. CONTENT STORAGE

Because this is a static website, all structured memorial content must be stored locally in the project.

Use JSON files as the primary content repository.

Recommended location:

src/data/

Example:

src/data/
memorial.json
biography.json
timeline.json
family.json
memories.json
gallery.json
tributes.json
legacy.json
places.json
funeral.json

React imports these files and renders the content.

Do NOT create an API to retrieve them.

Do NOT create a database layer.

Do NOT create repository classes.

Do NOT create services merely to read local JSON.

Keep content management simple.

---

# 5. MEDIA STORAGE

All memorial media should live inside the project.

Recommended structure:

public/
images/
portrait/
family/
childhood/
timeline/
gallery/
places/
funeral/

```
videos/

audio/

documents/
```

Media should be referenced from the JSON content.

Example:

"/images/portrait/grandmother.jpg"

Do not store large media files inside JSON.

Do not convert images to Base64.

Do not embed large binary data into source files.

---

# 6. CONTENT-FIRST ARCHITECTURE

The website must be content-driven.

Do not hard-code memorial information inside React components when the information can reasonably exist in a data file.

Bad:

```tsx
<h1>Chief Mrs. Monica Mary Otoro</h1>
<p>She was born...</p>
```

Preferred:

```tsx
<h1>{memorial.name}</h1>
<p>{biography.introduction}</p>
```

This allows the website content to be updated without rewriting components.

---

# 7. CONTENT FILE DESIGN

Keep JSON files readable and human-editable.

Use clear property names.

Prefer:

```json
{
  "title": "Early Life",
  "year": 1941,
  "description": "..."
}
```

over obscure structures.

Do not unnecessarily normalize content like a relational database.

The JSON repository should be understandable by a family member or developer.

---

# 8. NO SQLITE

Do NOT use SQLite.

SQLite is unnecessary for this project because the website has no backend.

If persistent browser-side interaction is ever required, first consider:

* localStorage
* IndexedDB
* downloadable JSON
* browser APIs

Only introduce another storage technology if explicitly requested.

---

# 9. MEMORIAL HOMEPAGE

The homepage must immediately establish an emotional connection.

Recommended structure:

1. Hero portrait
2. "In Loving Memory of"
3. Full name
4. Birth year/date
5. Passing year/date
6. Short memorial statement
7. Meaningful quote
8. Introduction to her story
9. Highlights from her life
10. Family/memory preview
11. Gallery preview
12. Legacy
13. Closing remembrance

The homepage should feel like entering a beautifully preserved family memory.

---

# 10. WEBSITE SECTIONS

The website should include appropriate sections such as:

## Home

The emotional introduction.

## Her Story

A complete biography and life story.

## Life Journey

A chronological timeline of important events.

## Family

Children, grandchildren and other important relatives.

## Memories

Personal memories and stories from family and friends.

## Gallery

Photographs organized into meaningful albums.

## Tributes

Messages written in her memory.

## Legacy

Her values, teachings, influence and impact.

## Places

Important places connected to her life.

## Memorial

Funeral or remembrance information where appropriate.

Do not create a page merely because it sounds impressive.

Every section must contribute to telling her story.

---

# 11. DESIGN PHILOSOPHY

The visual design is one of the most important parts of this project.

The website should feel:

* Elegant
* Warm
* Peaceful
* Personal
* Emotional
* Sophisticated
* Timeless
* Respectful
* Authentic

It should feel closer to:

* A premium family photo album
* A beautifully designed biography
* A museum-style personal archive
* A memorial book

It should NOT feel like:

* A dashboard
* A SaaS product
* A generic template
* A social media website
* A corporate website
* A technology demo

---

# 12. VISUAL PRIORITY

The grandmother's photograph and story must remain the primary focus.

Do not allow:

* Navigation
* Animations
* Cards
* Decorative elements
* Buttons
* Background effects

to overpower the content.

The interface should support the story rather than compete with it.

---

# 13. COLOR DIRECTION

Prefer an elegant, warm memorial palette.

Possible colors include:

* Ivory
* Cream
* Warm white
* Charcoal
* Soft brown
* Muted gold
* Warm beige
* Earth tones

Avoid:

* Neon colors
* Very saturated colors
* Gaming colors
* Excessive gradients
* Excessive black backgrounds
* Excessive gold

Use color sparingly.

---

# 14. TYPOGRAPHY

Use typography that feels timeless and editorial.

Prefer:

* Elegant serif typography for major headings
* Clean sans-serif typography for body text

Headings may be expressive.

Body text must remain extremely readable.

Use appropriate:

* Font sizes
* Line height
* Letter spacing
* Content width

Long-form biography text must not stretch across excessively wide screens.

---

# 15. PHOTOGRAPHY

Photography is central to the memorial experience.

Use photographs prominently but respectfully.

Support:

* Hero portrait
* Featured photographs
* Gallery
* Albums
* Full-screen lightbox
* Captions
* Dates
* Locations
* People shown in photographs where known

Images should maintain their emotional impact.

Do not excessively crop important photographs.

Do not apply distracting filters.

---

# 16. GALLERY

The gallery should feel like a curated family album.

Possible albums:

* Early Life
* Family
* Children
* Grandchildren
* Celebrations
* Community
* Special Moments
* Later Years
* Final Memories

Album names should reflect actual content.

Do not invent album categories unnecessarily.

Use lazy loading for large galleries.

Use optimized image dimensions where possible.

---

# 17. TIMELINE

Create a visually elegant chronological timeline.

Each event may contain:

* Date
* Year
* Title
* Description
* Location
* Photograph
* Related people

Timeline should be easy to scan.

It should work beautifully on mobile.

Do not turn the timeline into a complicated genealogy system.

---

# 18. FAMILY SECTION

The family section should communicate relationships clearly and respectfully.

Potential structure:

Grandmother
↓
Children
↓
Grandchildren
↓
Great-grandchildren

Use actual family information provided by the family.

Do not infer relationships.

Do not invent relatives.

Do not create a complicated genealogy engine.

The purpose is storytelling, not genealogical research software.

---

# 19. MEMORIES

Memories should feel personal.

Each memory may contain:

* Author
* Relationship
* Story
* Photograph
* Date
* Location

Preserve the author's voice.

Do not automatically rewrite family memories into corporate or artificial language.

If editing is requested, preserve the emotional meaning.

---

# 20. TRIBUTES

Tributes should resemble a beautifully designed memorial guestbook.

Each tribute may contain:

* Name
* Relationship
* Message
* Date

Use typography and spacing to make each tribute feel personal.

Do not make tributes look like social-media comments.

---

# 21. LEGACY SECTION

The Legacy section should communicate:

* What she believed
* What she valued
* What she taught
* What she stood for
* How she influenced others
* What her family remembers most
* What future generations should know

This should be one of the most meaningful sections of the website.

---

# 22. QUOTES

Quotes must be authentic.

Only use quotes supplied or confirmed by the family.

Never generate a quote and present it as something she actually said.

If a quote is uncertain, mark it clearly.

---

# 23. HISTORICAL ACCURACY

NEVER invent information about the grandmother.

Do not guess:

* Birth dates
* Death dates
* Names
* Family relationships
* Locations
* Occupations
* Achievements
* Events
* Quotes
* Religious statements
* Cultural details
* Personal stories

If information is unavailable, use:

[To be added]

or:

[To be confirmed]

Never fill missing information with plausible fictional content.

---

# 24. FAMILY HISTORY

Actual family information should be maintained in:

docs/03-CONTENT.md

and/or the appropriate JSON data files.

Separate:

* Verified information
* Information still being confirmed
* Placeholder information

Never confuse example data with real family history.

---

# 25. CONTENT DATA STRUCTURE

Use TypeScript interfaces/types for JSON data.

Example:

```ts
export interface TimelineEvent {
  id: string;
  year?: number;
  date?: string;
  title: string;
  description: string;
  image?: string;
  location?: string;
}
```

Types should describe the actual data.

Do not create excessively complicated type hierarchies.

---

# 26. REACT STRUCTURE

Use a clean feature-oriented structure.

Recommended:

src/
components/
data/
features/
memorial/
biography/
timeline/
family/
memories/
gallery/
tributes/
legacy/
layouts/
pages/
types/
hooks/
utils/
styles/
App.tsx
main.tsx

Do not create unnecessary architectural layers.

---

# 27. COMPONENTS

Create reusable components where they provide genuine value.

Examples:

* MemorialHero
* SectionHeading
* Timeline
* TimelineEvent
* PhotoGallery
* PhotoLightbox
* MemoryCard
* TributeCard
* FamilyMember
* QuoteBlock
* LegacySection
* Footer

Do not turn every HTML element into a component.

---

# 28. PAGE STRUCTURE

Use React Router only if multiple routes genuinely improve the experience.

Possible routes:

/
/story
/timeline
/family
/memories
/gallery
/tributes
/legacy
/places
/memorial

A single-page experience is also acceptable if it produces a better memorial experience.

Choose the approach that best supports storytelling.

Do not create routes just for architectural appearance.

---

# 29. NAVIGATION

Navigation should be simple.

Potential navigation:

Home
Her Story
Life Journey
Family
Memories
Gallery
Tributes
Legacy

On mobile, use a simple accessible navigation.

Do not overcrowd the navigation bar.

---

# 30. RESPONSIVE DESIGN

The website must look excellent on:

* Small mobile phones
* Large mobile phones
* Tablets
* Laptops
* Desktop monitors
* Large desktop screens

Design mobile-first.

Pay particular attention to:

* Typography
* Image cropping
* Navigation
* Timeline layout
* Gallery grids
* Long biography content
* Touch targets

---

# 31. ACCESSIBILITY

Follow strong accessibility practices.

Use:

* Semantic HTML
* Correct heading hierarchy
* Alt text
* Accessible buttons
* Keyboard navigation
* Visible focus states
* Sufficient color contrast
* Proper labels
* Accessible dialogs/lightboxes

Images containing important information must have meaningful alt text.

Decorative images should not create unnecessary screen-reader noise.

---

# 32. AUDIO

If audio memories are included, provide:

* Accessible audio player
* Title
* Speaker
* Description
* Date where known
* Transcript where available

Do not autoplay audio.

Respect the visitor's environment.

---

# 33. VIDEO

If videos are included:

* Do not autoplay with sound.
* Provide controls.
* Provide meaningful titles.
* Provide captions where available.
* Provide poster images.
* Optimize loading.

---

# 34. DOCUMENTS

Documents may include:

* Funeral programme
* Letters
* Certificates
* Historical records
* Newspaper clippings
* Family documents

Display them respectfully.

Use appropriate links or document viewers.

Do not expose documents that the family has not intended to publish.

---

# 35. PERFORMANCE

The website should load quickly.

Optimize:

* Images
* Videos
* Fonts
* JavaScript
* CSS

Use:

* Lazy loading
* Responsive images
* Appropriate image formats
* Code splitting where useful

Do not optimize prematurely.

Focus first on the biggest performance bottlenecks.

---

# 36. SEO

Because this is a public memorial website, implement appropriate SEO.

Include:

* Meaningful page titles
* Meta descriptions
* Semantic HTML
* Open Graph metadata
* Structured metadata where appropriate
* Sitemap
* robots.txt

Do not expose private information through metadata.

---

# 37. SHARING

The memorial should be easy to share.

Support appropriate:

* Open Graph image
* Open Graph title
* Open Graph description
* Social sharing preview

The preview should be tasteful and respectful.

---

# 38. PRINT EXPERIENCE

Where appropriate, support printing important sections.

The biography, timeline and memorial information should have a clean print layout.

Do not allow navigation and decorative UI to dominate printed output.

---

# 39. OFFLINE / ARCHIVAL THINKING

Because this is a static website, the project should remain portable.

The entire memorial should be capable of being copied and preserved as a project folder.

Avoid unnecessary dependencies on external services.

The family should be able to keep:

* Source code
* Images
* Videos
* Audio
* Documents
* Content

together.

---

# 40. NO EXTERNAL CMS

Do not introduce:

* WordPress
* Contentful
* Sanity
* Strapi
* Firebase
* Supabase
* Headless CMS

unless explicitly requested.

The local project files are the content management mechanism.

---

# 41. NO AUTHENTICATION

Do not create:

* Login
* Registration
* Passwords
* User accounts
* JWT
* Sessions
* Roles
* Permissions

This is a public static memorial website.

---

# 42. NO BACKEND

Do not create:

* ASP.NET Core API
* Express server
* Node backend
* API routes
* Database API
* Server-side rendering infrastructure

The website must remain static.

---

# 43. NO DATABASE

Do not create:

* SQLite
* PostgreSQL
* SQL Server
* MongoDB
* Redis

JSON and static files are the content repository.

---

# 44. LOCAL CONTENT MANAGEMENT

Content should be easy to update manually.

A family member or developer should be able to:

1. Open a JSON file.
2. Edit the content.
3. Save the file.
4. Run/build the website.
5. See the updated memorial.

No backend administration system is required.

---

# 45. DATA VALIDATION

Where appropriate, validate JSON/content during development.

Invalid content should produce a clear developer error.

Do not silently fail.

Do not display undefined values such as:

"undefined"

or:

"null"

to visitors.

---

# 46. EMPTY CONTENT

If a section does not yet have content, do not invent content.

Use an appropriate empty state during development.

For the final public website, sections with no meaningful content may be hidden.

---

# 47. DEVELOPMENT DATA

If demo data is required during development, clearly mark it as:

DEMO DATA

Never allow demo data to be mistaken for real family history.

---

# 48. ANIMATIONS

Animations should be subtle.

Appropriate examples:

* Gentle fade-in
* Slow image reveal
* Subtle hover effects
* Soft section transitions

Avoid:

* Excessive parallax
* Constant movement
* Bouncing elements
* Distracting animations
* Large transition delays

Respect:

prefers-reduced-motion

---

# 49. INTERACTION DESIGN

Interactions should feel intentional.

Examples:

* Photo lightbox
* Timeline exploration
* Gallery filtering
* Smooth navigation
* Expandable stories
* Audio controls

Avoid adding interaction merely because it is technically possible.

---

# 50. ERROR HANDLING

Because this is a static website:

* Handle missing images gracefully.
* Handle missing optional content gracefully.
* Prevent broken layouts.
* Do not expose raw technical errors to visitors.

During development, errors should be obvious to the developer.

---

# 51. CODE QUALITY

Write:

* Clean TypeScript
* Strong typing
* Small focused components
* Readable functions
* Meaningful variable names
* Minimal duplication

Avoid:

* `any` unless genuinely necessary
* Giant components
* Giant JSON files when separation improves maintainability
* Magic strings
* Unused imports
* Dead code
* Unnecessary abstractions

---

# 52. DEPENDENCY RULE

Before adding a package, ask:

"Can this be solved cleanly without another dependency?"

If yes, prefer the simpler solution.

Do not install libraries simply because they are popular.

---

# 53. FILE LOCATION RULE

Whenever implementing a feature, clearly identify:

Created:

* exact file paths

Modified:

* exact file paths

Deleted:

* exact file paths

Do not hide important project changes.

---

# 54. COPILOT WORKFLOW

Before implementing a new feature:

1. Inspect the existing project.
2. Read the relevant documentation.
3. Understand the current component structure.
4. Reuse existing patterns.
5. Identify the exact files that need modification.
6. Explain the implementation briefly.
7. Implement the feature.
8. Check for TypeScript errors.
9. Check for layout issues.
10. Check responsive behavior.
11. Check accessibility.
12. Check that existing functionality still works.

Do not rewrite large portions of the application unnecessarily.

---

# 55. DESIGN CONSISTENCY

Once a design pattern is established, reuse it.

Maintain consistency for:

* Section headings
* Buttons
* Typography
* Spacing
* Cards
* Gallery items
* Timeline events
* Navigation
* Footer

Do not introduce a different visual language for every page.

---

# 56. EMOTIONAL CONSISTENCY

Every page should feel like part of the same memorial.

Ask:

"Does this design help someone remember her?"

If not, simplify it.

The website should feel like one continuous story rather than a collection of unrelated pages.

---

# 57. PRIVACY

Even though there is no authentication, privacy still matters.

Do not publish information that has not been approved for public display.

Be especially careful with:

* Phone numbers
* Email addresses
* Home addresses
* Identification documents
* Sensitive family information
* Private photographs

If information is marked private or not approved, do not place it in public content files.

Remember that anything included in a static website can potentially be downloaded by visitors.

---

# 58. SECURITY

Because the website is static, security requirements are minimal but still important.

Do not:

* Commit secrets
* Commit API keys
* Include passwords
* Include private credentials

Do not embed sensitive information into public JavaScript or JSON.

Remember:

Anything shipped to the browser is public.

---

# 59. GIT

Do not commit:

* node_modules/
* build output unless explicitly required
* .env files
* secrets
* temporary files
* editor files
* operating-system files

Use an appropriate `.gitignore`.

---

# 60. BUILD REQUIREMENT

The project must build successfully with the standard project commands.

Before declaring a feature complete:

* Run TypeScript checks.
* Run the production build.
* Fix compilation errors.
* Check for broken imports.
* Check asset paths.

---

# 61. DEPLOYMENT

The website must be deployable as static files.

Suitable hosting options may include:

* GitHub Pages
* Netlify
* Vercel static hosting
* Cloudflare Pages
* Any standard static web host

Do not require a server.

Do not require a database.

Do not require a backend runtime.

---

# 62. DOCUMENTATION

Keep project documentation simple.

The README should explain:

* What the project is
* Technology used
* How to install
* How to run locally
* How to edit memorial content
* Where images are stored
* Where videos/audio are stored
* How to build
* How to deploy

---

# 63. PROJECT DOCUMENTATION

The `/docs` directory should contain only useful project information.

Recommended:

docs/
01-PRODUCT.md
02-DESIGN.md
03-CONTENT.md
04-ROADMAP.md

Do not create documentation for technologies that are not used.

---

# 64. ACTUAL FAMILY INFORMATION

The real family information will be provided separately.

When actual information is supplied:

* Preserve it accurately.
* Do not embellish facts.
* Do not invent missing details.
* Do not alter names unnecessarily.
* Do not change relationships.
* Do not fabricate quotes.
* Do not fabricate dates.

If the original family writing is emotional or culturally specific, preserve its meaning and character.

# FAMILY TREE

The memorial website should include an elegant interactive family tree showing the family legacy of Chief Mrs. Monica Mary Otoro.

The family tree is a core memorial feature.

Its purpose is to visually communicate:

* Who she was
* Her children
* Her grandchildren
* Her great-grandchildren where applicable
* Important family relationships
* The generations that came from her

The family tree should feel warm, personal and memorial-focused.

It must NOT feel like genealogy software.

---

## FAMILY TREE STRUCTURE

The primary structure should begin with:

**Chief Mrs. Monica Mary Otoro**
**1941 — 2026**

Then show her immediate descendants.

Example:

```text
                 Chief Mrs. Monica Mary Otoro
                         1941 — 2026
                              │
             ┌────────────────┼────────────────┐
             │                │                │
          Child 1          Child 2          Child 3
             │                │                │
          ┌──┴──┐          ┌──┴──┐          ┌──┴──┐
          │     │          │     │          │     │
       Grand  Grand      Grand  Grand     Grand  Grand
       Child  Child      Child  Child     Child  Child
```

The actual structure must be generated from verified family information.

Never invent relationships.

---

## FAMILY TREE LEVELS

Support generations such as:

### Generation 1

Chief Mrs. Monica Mary Otoro

### Generation 2

Her children

### Generation 3

Her grandchildren

### Generation 4

Her great-grandchildren

Additional generations may be supported if the actual family information requires them.

Do not display generations that do not exist.

---

## FAMILY MEMBER INFORMATION

Each family member may contain:

* Full name
* Preferred name
* Relationship to grandmother
* Photograph
* Short biography
* Birth year where appropriate
* Family branch
* Optional memory
* Optional quote

Only display information that has been provided and approved.

---

## FAMILY TREE INTERACTION

The family tree should be interactive but simple.

Possible interactions:

* Click/tap a person
* Expand a family branch
* Collapse a family branch
* View person's photograph
* View relationship
* View short biography
* Highlight a family branch

On desktop, the family tree may use a horizontal or vertical visual hierarchy.

On mobile, the family tree should transform into a clean vertically stacked experience.

Do not force a large desktop genealogy diagram onto a small mobile screen.

---

## FAMILY BRANCHES

Where appropriate, organize descendants into family branches.

For example:

**Family of [Child's Name]**

Then:

* Grandchildren
* Great-grandchildren

Each branch should retain a visual connection to Chief Mrs. Monica Mary Otoro.

---

## FAMILY TREE DESIGN

Use:

* Elegant lines
* Soft spacing
* Tasteful typography
* Circular or portrait photographs
* Subtle animations
* Clear generation hierarchy

Avoid:

* Excessive borders
* Dense node diagrams
* Technical-looking flowcharts
* Bright colors
* Complicated controls

The family tree should look like part of a memorial book.

---

## FAMILY TREE DATA

Store family-tree information in:

```text
src/data/family.json
```

Use structured data.

Example:

```json
[
  {
    "id": "person-001",
    "name": "Chief Mrs. Monica Mary Otoro",
    "relationship": "Grandmother",
    "generation": 1,
    "parentId": null,
    "photo": "/images/portrait/monica-mary-otoro.jpg"
  },
  {
    "id": "person-002",
    "name": "[Child Name]",
    "relationship": "Son",
    "generation": 2,
    "parentId": "person-001",
    "photo": "/images/family/child-name.jpg"
  }
]
```

The exact structure may be improved when the real family information is available.

---

## FAMILY TREE ACCURACY

Family relationships are sensitive and must be accurate.

Never assume that:

* A person is a child
* A person is a grandchild
* Two people are siblings
* Someone is married to another person
* Someone belongs to a particular family branch

Use only verified information supplied by the family.

If a relationship is uncertain, mark it as:

**[Relationship to be confirmed]**

Do not guess.

---

## FAMILY TREE PRIVACY

Remember that this is a static public website.

Only include family information that the family has approved for publication.

Do not publicly expose:

* Phone numbers
* Email addresses
* Home addresses
* Identification numbers
* Private documents
* Sensitive personal information

A person's inclusion in the family tree does not automatically mean all personal information about that person should be displayed.

---

## MEMORIAL CONNECTION

The family tree should communicate the central idea:

**Her legacy continues through the generations.**

The experience should visually connect:

**Her Life → Her Children → Her Grandchildren → Future Generations**

The family tree should therefore be presented as part of the **Legacy** of Chief Mrs. Monica Mary Otoro rather than as an isolated technical feature.

---

# 65. CULTURAL RESPECT

Respect the family's:

* Culture
* Naming conventions
* Traditions
* Language
* Family terminology
* Memorial practices

Do not impose generic Western funeral conventions if they do not match the family's actual traditions.

---

# 66. LANGUAGE

The primary website language should follow the family's preference.

If multiple languages are required later, design the content structure so translations can be added without rewriting the UI.

Do not automatically translate culturally significant names or expressions.

---

# 67. FUTURE EXTENSIBILITY

The current project must remain simple.

However, write clean enough code that future features can be added if needed.

Potential future features could include:

* Additional languages
* More albums
* More family members
* Downloadable memorial book
* PWA/offline support
* Search
* More advanced archival features

Do NOT implement future features now unless requested.

---

# 68. MOST IMPORTANT PRIORITY

When making implementation decisions, use this priority:

1. Respect for her memory
2. Accuracy of her story
3. Emotional quality
4. Visual quality
5. Usability
6. Accessibility
7. Performance
8. Code simplicity
9. Technical sophistication

Technical sophistication is the LOWEST priority.

---

# 69. GOLDEN RULE

KEEP IT SIMPLE.

This is a static memorial website.

There is no backend.

There is no API.

There is no database.

There is no authentication.

There is no CMS.

There is no AI.

There is no unnecessary infrastructure.

Use React, TypeScript, Tailwind CSS, JSON content files and static media.

Build something beautiful enough that the family will want to keep it for generations.

The technology should disappear.

Her story should remain.
