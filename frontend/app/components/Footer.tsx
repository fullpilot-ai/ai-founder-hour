export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center text-gray-600">
          <p>© {new Date().getFullYear()} AI Founder Hour. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
