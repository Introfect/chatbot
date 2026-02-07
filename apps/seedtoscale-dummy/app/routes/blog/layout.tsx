import { Outlet, useNavigate, useParams } from "react-router";

const BLOG_PAGES = ["example1", "example2", "example3", "example4", "example5"];

export default function BlogLayout() {
    const navigate = useNavigate();
    const params = useParams();
    const currentSlug = params.slug || "";

    const handlePageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        navigate(`/blog/${event.target.value}`);
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <header className="bg-white shadow">
                <div className="max-w-7xl mx-auto px-4 py-4 sm:py-6">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
                            {currentSlug || "Blog"}
                        </h1>
                        <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto">
                            <label htmlFor="blog-select" className="text-sm font-medium text-gray-700 whitespace-nowrap">
                                Switch Page:
                            </label>
                            <select
                                id="blog-select"
                                value={currentSlug}
                                onChange={handlePageChange}
                                className="block w-full sm:w-auto rounded-md border-gray-300 bg-white text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-sm px-3 py-2 border"
                            >
                                {BLOG_PAGES.map((slug) => (
                                    <option key={slug} value={slug} className="text-gray-900">
                                        {slug}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>
            </header>
            <main className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
                <Outlet />
            </main>
        </div>
    );
}
