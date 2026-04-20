import fs from "fs";
import path from "path";
import Link from "next/link";

export default function NewsPage() {
  const dir = path.join(process.cwd(), "data/news");
  const files = fs.readdirSync(dir);

  return (
    <div className="container py-20">
      <h1 className="text-4xl font-heading mb-10">News</h1>

      <ul className="space-y-4">
        {files.map((file) => {
          const slug = file.replace(".md", "");
          return (
            <li key={slug}>
              <Link href={`/news/${slug}`} className="text-primary">
                {slug}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
