export type ProjectDetails = {
  name: string;
  description: string;
  url: string;
  technologies: string[];
};

export interface ProjectDetailsLanguage {
  en: ProjectDetails[];
  pt: ProjectDetails[];
}
