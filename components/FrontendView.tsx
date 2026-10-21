import { profile } from "@/data/profile";

export default function FrontendView() {
  return (
    <section className="p-8">
      <h1 className="text-4xl font-bold">{profile.name}</h1>
      <p className="mt-2 text-lg">
        {profile.role} · {profile.specialty.join(" · ")} · {profile.location}
      </p>

      <div className="mt-4 flex gap-4">
        <a href={profile.links.github} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        <a href={`mailto:${profile.links.email}`}>Email</a>
      </div>
    </section>
  );
}