import Link from "next/link";

const posts = [
  {
    slug: "getting-started-with-ai",
    title: "Getting Started with AI",
    excerpt: "A beginner&apos;s guide to artificial intelligence",
    date: "2024-01-15",
  },
  {
    slug: "building-your-first-startup",
    title: "Building Your First Startup",
    excerpt: "Essential steps to launch your business",
    date: "2024-01-10",
  },
  {
    slug: "ai-tools-for-founders",
    title: "AI Tools for Founders", 
    excerpt: "Top AI tools to boost your productivity",
    date: "2024-01-05",
  },
];

export default function PostsPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Blog Posts</h1>
      <div className="space-y-8">
        {posts.map((post) => (
          <article key={post.slug} className="border-b pb-6">
            <h2 className="text-2xl font-semibold mb-2">
              <Link 
                href={`/posts/${post.slug}`}
                className="hover:text-blue-600 transition-colors"
              >
                {post.title}
              </Link>
            </h2>
            <p className="text-gray-600 mb-2">{post.excerpt}</p>
            <time className="text-sm text-gray-500">{post.date}</time>
          </article>
        ))}
      </div>
    </div>
  );
} 