export interface ContentItem {
  id: string
  created_at: string
  title: string
  excerpt: string
  date: string
  author: string
  image: string
  category?: string | null
  full_text?: string | null
  event_date?: string
  project_date?: string
  tags?: string[] | string | null
}
