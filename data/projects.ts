export type ProjectStatus = "live" | "building" | "planned";

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  stack: string[];
  status: ProjectStatus;
  repo?: string;
  liveUrl?: string;
  demoVideo?: string;
  youtubeUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "lb-playground",
    title: "lb-playground",
    tagline: "What happens to an API when traffic triples?",
    stack: ["FastAPI", "Redis", "nginx", "Docker"],
    status: "building",
  },
  // your turn: url-shortener
  // your turn: the AI project (placeholder title is fine)
];