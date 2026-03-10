import { redirect, useLoaderData } from "react-router";
import type { Route } from "./+types/blog";
import { loadBlogPost, type BlogPost } from "../../lib/blog";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const ALLOWED_SLUGS = ["a-career-in-venture-capital", "defining-your-market", "our-investment-in-slintel", "our-investment-in-uni", "saas-playbook-sales"];

export function loader({ params }: Route.LoaderArgs) {
    if (!params.slug || !ALLOWED_SLUGS.includes(params.slug)) {
        return redirect("/blog/a-career-in-venture-capital");
    }

    const blogPost = loadBlogPost(params.slug);
    
    if (!blogPost) {
        throw new Response("Blog post not found", { status: 404 });
    }

    return { blogPost };
}

export function meta({ data }: Route.MetaArgs) {
    if (!data?.blogPost) {
        return [
            { title: "Blog Post Not Found" },
            { name: "description", content: "The requested blog post could not be found." },
        ];
    }

    const { metadata } = data.blogPost;
    return [
        { title: `${metadata.name} - Blog` },
        { name: "description", content: `${metadata.name} by ${metadata.author}` },
    ];
}

export default function BlogPage() {
    const { blogPost } = useLoaderData<typeof loader>();

    if (!blogPost) {
        return (
            <div className="bg-white shadow rounded-lg p-6">
                <p className="text-xl text-gray-800">Blog post not found</p>
            </div>
        );
    }

    const { metadata, content } = blogPost;
    const formattedDate = metadata.createdOn 
        ? new Date(metadata.createdOn).toLocaleDateString("en-US", { 
            year: "numeric", 
            month: "long", 
            day: "numeric" 
          })
        : "";

    return (
        <article className="bg-white shadow rounded-lg overflow-hidden">
            {/* Blog Header */}
            <div className="border-b border-gray-200 bg-gray-50 px-6 py-8 sm:px-8">
                <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                    {metadata.name}
                </h1>
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                    {metadata.author && (
                        <span className="font-medium text-gray-900">
                            By {metadata.author}
                        </span>
                    )}
                    {formattedDate && (
                        <span className="flex items-center gap-1">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            {formattedDate}
                        </span>
                    )}
                    {metadata.readTime && (
                        <span className="flex items-center gap-1">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            {metadata.readTime}
                        </span>
                    )}
                </div>
            </div>

            {/* Blog Content */}
            <div className="px-6 py-8 sm:px-8">
                <div className="prose prose-gray max-w-none prose-headings:font-bold prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl prose-h2:mt-8 prose-h2:mb-4 prose-h3:mt-6 prose-h3:mb-3 prose-p:text-gray-700 prose-p:leading-relaxed prose-a:text-indigo-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-900 prose-strong:font-semibold prose-ul:list-disc prose-ul:pl-6 prose-ol:list-decimal prose-ol:pl-6 prose-li:text-gray-700 prose-li:my-2 prose-blockquote:border-l-4 prose-blockquote:border-indigo-500 prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-gray-700 prose-img:rounded-lg prose-img:shadow-md prose-img:my-8">
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                        {content}
                    </ReactMarkdown>
                </div>
            </div>
        </article>
    );
}
