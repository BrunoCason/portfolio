export interface ExperienceDetails {
  company: string;
  position: string;
  startDate: Date;
  endDate?: Date;
  currentlyWorkHere: boolean;
  summary: string[];
}

export interface ExperienceDetailsLanguage {
  en: ExperienceDetails[];
  pt: ExperienceDetails[];
}
