export type ProjectDetails = {
  name: string;
  image: string;
  description: string;
  url: string;
  technologies: string[];
};

export interface ProjectDetailsLanguage {
  en: ProjectDetails[];
  pt: ProjectDetails[];
}
