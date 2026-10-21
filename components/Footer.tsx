import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="p-8 font-mono text-sm flex flex-col gap-2 border-t mt-16">
      <p>built by a backend engineer, against her will.</p>
      <div className="flex gap-4 underline">
        <a href={profile.links.github} target="_blank" rel="noopener noreferrer">github</a>
        <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer">linkedin</a>
        <a href={`mailto:${profile.links.email}`}>email</a>
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">resume</a>
      </div>
    </footer>
  );
}