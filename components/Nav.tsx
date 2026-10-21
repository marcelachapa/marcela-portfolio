import Link from "next/link";
import { profile } from "@/data/profile";

export default function Nav() {
  return (
    <nav className="flex items-center justify-between p-8 font-mono">
      <Link href="/" className="font-bold">
        marcela.chapa
      </Link>
      <div className="flex gap-6 text-sm">
        <Link href="#projects">projects</Link>
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">resume</a>
        <a href={profile.links.github} target="_blank" rel="noopener noreferrer">github</a>
      </div>
    </nav>
  );
}