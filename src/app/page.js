import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Welcome to the Blog</h1>
      <Link href="/posts">
        <span>View Blog Posts</span>
      </Link>
    </main>
  );
}
