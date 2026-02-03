export type EmploymentType = "Full-time" | "Part-time" | "Contract" | "Internship";
export type LocationType = "Remote" | "Hybrid" | "On-site";
export type ExperienceLevel = "Entry" | "Mid" | "Senior" | "Lead" | "Executive";

export interface Job {
  id: string;
  title: string;
  department: string;
  location: string;
  locationType: LocationType;
  employmentType: EmploymentType;
  experienceLevel: ExperienceLevel;
  description: string;
  responsibilities: string[];
  requirements: string[];
  niceToHave?: string[];
  salaryRange?: {
    min: number;
    max: number;
    currency: string;
  };
  postedDate: Date;
  applicationUrl?: string;
}
