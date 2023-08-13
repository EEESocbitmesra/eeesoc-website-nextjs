export interface Mentor {
  name: string;
  image: string;
  profileLink?: string;
  designation: string;
  department: string;
  areasOfInterest: string[];
}

export interface ExecutiveBodyMember {
  name: string;
  linkedinUrl?: string | null;
  designation: string;
  image: string;
}

export interface Workshop {
  title: string;
  cardImage: string;
  contentImage: string;
  content: string;
}

export interface Project {
  name: string;
  title: string;
  image: string;
  description: string;
  reportLink: string | null;
  demoLink?: string;
  githubLink?: string;
}

export interface IProjectProgram {
  type: "SPP" | "SMP";
  title: string;
  description: string;
  yearWiseProjects: {
    year: number;
    projects: Project[];
  }[];
}

export interface Contact {
  name: string;
  mobile: string;
  designation: string;
  linkedinUrl: string;
}

export interface Alumni {
  name: string;
  workplace?: string | null;
  position?: string | null;
  image: string;
  linkedinUrl?: string | null;
}

export interface BatchAlumni {
  year: number;
  alumni: Alumni[];
}

export interface Interview {
  name: string;
  image: string;
  company: string;
  interviewContent: string;
  facebookInterviewLink?: string | null;
  mediumInterviewLink?: string | null;
}

export interface BatchInterview {
  year: string;
  prefix: string;
  interviews: Interview[];
}

export interface FieldInterview {
  field: string;
  description: string;
  interviewCollections: BatchInterview[];
}

export interface Blog {
  title: string;
  slug: string;
  thumbnail: string;
  date: string;
  author: {
    name: string;
    avatar: string;
  };
  tags: string[];
}
