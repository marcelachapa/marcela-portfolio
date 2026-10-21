import { profile } from "@/data/profile";

export default function BackendView() {
  return (
    <section className="font-mono p-8">
      <p>
        GET /marcela → <span className="text-green-600">200 OK</span>
      </p>
      <pre>{JSON.stringify(profile, null, 2)}</pre>
    </section>
  );
}