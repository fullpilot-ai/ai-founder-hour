import Link from "next/link";

export default function HomePage() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center py-16">
        <h1 className="text-5xl font-bold mb-4">Welcome to AI Founder Hour</h1>
        <p className="text-xl text-gray-600 mb-8">
          Learn about artificial intelligence and entrepreneurship
        </p>
        <Link
          href="/posts"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Read Our Blog
        </Link>
      </section>

      {/* Features Section */}
      <section className="grid md:grid-cols-3 gap-8">
        <div className="text-center p-6 border rounded-lg">
          <h3 className="text-xl font-semibold mb-2">AI Insights</h3>
          <p className="text-gray-600">
            Stay updated with the latest trends in artificial intelligence
          </p>
        </div>
        <div className="text-center p-6 border rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Startup Tips</h3>
          <p className="text-gray-600">
            Learn from successful founders and their experiences
          </p>
        </div>
        <div className="text-center p-6 border rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Resources</h3>
          <p className="text-gray-600">
            Access curated tools and resources for your journey
          </p>
        </div>
      </section>

      {/* Recent Posts Section */}
      <section>
        <h2 className="text-3xl font-bold mb-6">Recent Posts</h2>
        <div className="space-y-4">
          <article className="border-b pb-4">
            <h3 className="text-xl font-semibold mb-1">
              <Link href="/posts/getting-started-with-ai" className="hover:text-blue-600">
                Getting Started with AI
              </Link>
            </h3>
            <p className="text-gray-600">A beginner&apos;s guide to artificial intelligence</p>
          </article>
          <article className="border-b pb-4">
            <h3 className="text-xl font-semibold mb-1">
              <Link href="/posts/building-your-first-startup" className="hover:text-blue-600">
                Building Your First Startup
              </Link>
            </h3>
            <p className="text-gray-600">Essential steps to launch your business</p>
          </article>
          <article className="border-b pb-4">
            <h3 className="text-xl font-semibold mb-1">
              <Link href="/posts/ai-tools-for-founders" className="hover:text-blue-600">
                AI Tools for Founders
              </Link>
            </h3>
            <p className="text-gray-600">Top AI tools to boost your productivity</p>
          </article>
        </div>
      </section>
    </div>
  );
}
