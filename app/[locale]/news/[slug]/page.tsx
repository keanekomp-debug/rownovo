import fs from "fs";
import path from "path";

export default function PostPage({ params }: any) {
  const filePath = path.join(
    process.cwd(),
    "data/news",
    `${params.slug}.md`
  );

  const content = fs.readFileSync(filePath, "utf-8");

  return (
    <div className="container py-20 prose prose-invert">
      <pre>{content}</pre>
    </div>
  );
}
