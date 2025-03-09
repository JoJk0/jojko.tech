export interface CodersrankProjectsResponse {
  projects: CodersrankProject[]
}

export interface CodersrankProject {
  company: string
  description?: string
  end_date?: string
  highlighted_technologies?: string[]
  image?: string
  is_current: boolean
  other_technologies?: string[]
  project_title: string
  role: string
  startDate?: string
  link_to_project?: string
  link_to_source_code?: string
}
