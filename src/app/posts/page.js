import BlogPostGrid from "./components";
import axios from "axios";

export default async function PostsPage() {
  const posts = await fetch("https://dev.to/api/articles?page=1&per_page=10", {
    next: { revalidate: 60 },
  })
    .then((res) => res.json())
    .catch(() => []);

  return (
    <main>
      <BlogPostGrid initialPosts={posts} />
    </main>
  );
}
