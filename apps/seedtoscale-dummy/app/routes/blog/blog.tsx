import { redirect, useParams, useLoaderData } from "react-router";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import type { Route } from "./+types/blog";

const ALLOWED_SLUGS = [
  "a-career-in-venture-capital",
  "defining-your-market",
  "our-investment-in-slintel",
  "our-investment-in-uni",
  "saas-playbook-sales",
];

export async function loader({ params, request }: Route.LoaderArgs) {
  if (!params.slug || !ALLOWED_SLUGS.includes(params.slug)) {
    return redirect("/blog/a-career-in-venture-capital");
  }

  const url = new URL(request.url);
  const blogUrl = `${url.origin}/blog-content/${params.slug}.md`;

  try {
    const response = await fetch(blogUrl);
    if (!response.ok) {
      console.error(
        `Failed to fetch blog content: ${response.statusText} from ${blogUrl}`,
      );
      return {
        content:
          "# Blog Post Not Found\n\nThe requested blog post could not be loaded.",
      };
    }
    const content = await response.text();
    return { content };
  } catch (error) {
    console.error("Error fetching blog content:", error);
    return {
      content: "# Error\nFailed to load blog content. Please try again later.",
    };
  }
}

export function meta({ params }: Route.MetaArgs) {
  const title = params.slug
    ?.split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
  return [
    { title: `${title} - SeedToScale Blog` },
    { name: "description", content: `Read our latest insights on ${title}` },
  ];
}

export default function BlogPage() {
  const { content } = useLoaderData<typeof loader>();
  const params = useParams();
  const slug = params.slug || "";

  return (
    <div className="bg-white shadow-xl rounded-2xl overflow-hidden border border-gray-100">
      <div className="prose-container p-8 md:p-12">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            h1: ({ node, ...props }) => (
              <h1
                className="text-4xl font-extrabold text-gray-900 mb-8 leading-tight"
                {...props}
              />
            ),
            h2: ({ node, ...props }) => (
              <h2
                className="text-2xl font-bold text-gray-800 mt-12 mb-4 pb-2 border-b border-gray-100"
                {...props}
              />
            ),
            h3: ({ node, ...props }) => (
              <h3
                className="text-xl font-semibold text-gray-800 mt-8 mb-3"
                {...props}
              />
            ),
            p: ({ node, ...props }) => (
              <p
                className="text-gray-600 text-lg leading-relaxed mb-6"
                {...props}
              />
            ),
            ul: ({ node, ...props }) => (
              <ul
                className="list-disc list-inside mb-6 space-y-2 text-gray-600 text-lg ml-4"
                {...props}
              />
            ),
            ol: ({ node, ...props }) => (
              <ol
                className="list-decimal list-inside mb-6 space-y-2 text-gray-600 text-lg ml-4"
                {...props}
              />
            ),
            li: ({ node, ...props }) => <li className="mb-1" {...props} />,
            blockquote: ({ node, ...props }) => (
              <blockquote
                className="border-l-4 border-indigo-500 pl-6 py-2 italic text-gray-700 bg-indigo-50 rounded-r-lg my-8"
                {...props}
              />
            ),
            code: ({ node, ...props }) => (
              <code
                className="bg-gray-100 text-indigo-600 px-1.5 py-0.5 rounded text-sm font-mono"
                {...props}
              />
            ),
            pre: ({ node, ...props }) => (
              <pre
                className="bg-gray-900 text-gray-100 p-6 rounded-xl overflow-x-auto my-8 shadow-inner"
                {...props}
              />
            ),
            a: ({ node, ...props }) => (
              <a
                className="text-indigo-600 hover:text-indigo-800 underline underline-offset-4 transition-colors"
                {...props}
              />
            ),
            img: ({ node, ...props }) => (
              <img
                className="rounded-xl shadow-lg my-10 w-full object-cover"
                {...props}
              />
            ),
            hr: ({ node, ...props }) => (
              <hr className="my-12 border-gray-200" {...props} />
            ),
          }}
        >
          {content}
        </ReactMarkdown>
      </div>
    </div>
  );
}
