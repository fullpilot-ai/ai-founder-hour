import { notFound } from "next/navigation";

const pages = {
  about: {
    title: "About AI Founder Hour",
    content: `
      <p>AI Founder Hour is a platform dedicated to helping entrepreneurs navigate the intersection of artificial intelligence and business.</p>
      
      <h2>Our Mission</h2>
      <p>We believe that AI will transform every industry, and founders need to understand and leverage these technologies to build successful companies.</p>
      
      <h2>What We Offer</h2>
      <ul>
        <li>Educational content about AI technologies</li>
        <li>Practical guides for implementing AI in your startup</li>
        <li>Insights from successful AI entrepreneurs</li>
        <li>Community support and networking opportunities</li>
      </ul>
      
      <h2>Join Us</h2>
      <p>Whether you&apos;re just starting out or already building with AI, we&apos;re here to support your journey.</p>
    `
  }
};

export default async function DynamicPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = pages[slug as keyof typeof pages];
  
  if (!page) {
    notFound();
  }

  return (
    <article className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">{page.title}</h1>
      <div 
        className="prose prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: page.content }}
      />
    </article>
  );
}
