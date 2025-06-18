import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-10">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between py-4">
          <Link href="/" className="text-2xl font-bold text-gray-900">
            AI Founder Hour
          </Link>
          <div className="flex gap-6">
            <Link href="/" className="text-gray-600 hover:text-gray-900">
              Home
            </Link>
            <Link href="/posts" className="text-gray-600 hover:text-gray-900">
              Blog
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-gray-900">
              About
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
