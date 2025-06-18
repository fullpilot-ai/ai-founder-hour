import { notFound } from "next/navigation";
import Link from "next/link";

const posts = {
  "getting-started-with-ai": {
    title: "Getting Started with AI",
    date: "2024-01-15",
    content: `
      <p>Artificial Intelligence (AI) is transforming the way we work, live, and interact with technology. This guide will help you understand the basics and get started on your AI journey.</p>
      
      <h2>What is AI?</h2>
      <p>AI refers to computer systems that can perform tasks that typically require human intelligence, such as understanding language, recognizing patterns, and making decisions.</p>
      
      <h2>Key Concepts</h2>
      <ul>
        <li>Machine Learning: Systems that improve through experience</li>
        <li>Neural Networks: Computing systems inspired by the human brain</li>
        <li>Natural Language Processing: Enabling computers to understand human language</li>
      </ul>
      
      <h2>Getting Started</h2>
      <p>Begin with online courses, experiment with AI tools, and join communities to learn from others.</p>
    `
  },
  "building-your-first-startup": {
    title: "Building Your First Startup",
    date: "2024-01-10",
    content: `
      <p>Starting a business is an exciting journey filled with challenges and opportunities. Here&apos;s what you need to know.</p>
      
      <h2>Finding Your Idea</h2>
      <p>The best startup ideas solve real problems. Look for pain points in your own life or industry.</p>
      
      <h2>Building Your MVP</h2>
      <p>Start with a Minimum Viable Product (MVP) to test your assumptions and get feedback from real users.</p>
      
      <h2>Finding Product-Market Fit</h2>
      <p>Iterate based on user feedback until you find a product that people love and are willing to pay for.</p>
    `
  },
  "ai-tools-for-founders": {
    title: "AI Tools for Founders",
    date: "2024-01-05",
    content: `
      <p>AI tools can dramatically increase your productivity as a founder. Here are some of the best ones.</p>
      
      <h2>Writing and Content</h2>
      <ul>
        <li>ChatGPT: For brainstorming, writing, and problem-solving</li>
        <li>Jasper: For marketing copy and content creation</li>
      </ul>
      
      <h2>Design and Development</h2>
      <ul>
        <li>Midjourney: For creating stunning visuals</li>
        <li>GitHub Copilot: For faster coding</li>
      </ul>
      
      <h2>Productivity</h2>
      <ul>
        <li>Notion AI: For organizing and managing information</li>
        <li>Otter.ai: For meeting transcription</li>
      </ul>
    `
  }
};

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = posts[params.slug as keyof typeof posts];
  
  if (!post) {
    notFound();
  }

  return (
    <article className="max-w-4xl mx-auto">
      <Link href="/posts" className="text-blue-600 hover:underline mb-4 inline-block">
        ← Back to posts
      </Link>
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <time className="text-gray-600 block mb-8">{post.date}</time>
      <div 
        className="prose prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </article>
  );
}
