import type { Project } from "@/data/projects";

type Props = { project: Project };

const statusLabel = {
  live: "● live",
  building: "◐ building",
  planned: "○ planned",
};

export default function ProjectCard({ project }: Props) {
  return (
    <article className="border rounded-lg p-4 flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold">{project.title}</h3>
        <span className="font-mono text-sm">{statusLabel[project.status]}</span>
      </div>

      <p>{project.tagline}</p>

      <ul className="flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <li key={tech} className="font-mono text-xs border rounded px-2 py-1">
            {tech}
          </li>
        ))}
      </ul>

      <div className="flex gap-4 text-sm underline mt-auto">
        {project.repo && <a href={project.repo} target="_blank" rel="noopener noreferrer">repo</a>}
        {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">live</a>}
        {project.youtubeUrl && <a href={project.youtubeUrl} target="_blank" rel="noopener noreferrer">▶ watch me explain it</a>}
      </div>
    </article>
  );
}