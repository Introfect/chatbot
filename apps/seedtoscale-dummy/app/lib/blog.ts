import matter from "gray-matter";

// Import all blog markdown files
import aCareerInVentureCapital from "../../public/seedtoscale-blogs/a-career-in-venture-capital.md?raw";
import definingYourMarket from "../../public/seedtoscale-blogs/defining-your-market.md?raw";
import ourInvestmentInSlintel from "../../public/seedtoscale-blogs/our-investment-in-slintel.md?raw";
import ourInvestmentInUni from "../../public/seedtoscale-blogs/our-investment-in-uni.md?raw";
import saasPlaybookSales from "../../public/seedtoscale-blogs/saas-playbook-sales.md?raw";

export interface BlogMetadata {
    name: string;
    slug: string;
    domain: string;
    function: string;
    author: string;
    featured: boolean;
    clapCount: number;
    readTime: string;
    createdOn: string;
}

export interface BlogPost {
    metadata: BlogMetadata;
    content: string;
}

// Map of slugs to markdown content
const blogMarkdownMap: Record<string, string> = {
    "a-career-in-venture-capital": aCareerInVentureCapital,
    "defining-your-market": definingYourMarket,
    "our-investment-in-slintel": ourInvestmentInSlintel,
    "our-investment-in-uni": ourInvestmentInUni,
    "saas-playbook-sales": saasPlaybookSales,
};

export function loadBlogPost(slug: string): BlogPost | null {
    try {
        const markdownContent = blogMarkdownMap[slug];
        
        if (!markdownContent) {
            return null;
        }
        
        // Parse frontmatter and content
        const { data, content } = matter(markdownContent);

        const metadata: BlogMetadata = {
            name: data.name || "",
            slug: data.slug || slug,
            domain: data.domain || "",
            function: data.function || "",
            author: data.author || "",
            featured: data.featured || false,
            clapCount: data["clap-count"] || 0,
            readTime: data["read-time"] || "",
            createdOn: data["created-on"] || "",
        };

        return {
            metadata,
            content,
        };
    } catch (error) {
        console.error(`Error loading blog post ${slug}:`, error);
        return null;
    }
}
