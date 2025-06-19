import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-10">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between py-4">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo-light.png"
              alt="AI Founder Hour Logo"
              width={40}
              height={40}
              className="rounded-lg"
            />
            <span className="text-2xl font-bold text-gray-900">
              AI Founder Hour
            </span>
          </Link>
          <div className="flex gap-6">
            <Link href="/" className="text-gray-600 hover:text-gray-900">
              Home
            </Link>
            <Link href="/sales" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Join Session
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
