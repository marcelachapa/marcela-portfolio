import { profile } from "@/data/profile";

export default function BackendView() {
  const { links, ...rest } = profile;

  return (
    <section className="font-mono p-8">
      <p>
        GET /marcela → <span className="text-green-600">200 OK</span>
      </p>
      <pre>
        {JSON.stringify(rest, null, 2).slice(0, -2)},
        {"\n  \"links\": {\n"}
        {"    \"github\": \""}<a href={links.github} target="_blank" rel="noopener noreferrer" className="underline">{links.github}</a>{"\",\n"}
        {"    \"linkedin\": \""}<a href={links.linkedin} target="_blank" rel="noopener noreferrer" className="underline">{links.linkedin}</a>{"\",\n"}
        {"    \"email\": \""}<a href={`mailto:${links.email}`} className="underline">{links.email}</a>{"\"\n"}
        {"    \"resume\": \""}<a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="underline"> My Resume</a>{"\"\n"}
        {"  }\n}"}
      </pre>
    </section>
  );
}