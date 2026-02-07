import { redirect, useParams } from "react-router";
import type { Route } from "./+types/blog";

const ALLOWED_SLUGS = ["example1", "example2", "example3", "example4", "example5"];

export function loader({ params }: Route.LoaderArgs) {
    if (!params.slug || !ALLOWED_SLUGS.includes(params.slug)) {
        return redirect("/blog/example1");
    }
    return null;
}

export function meta({ params }: Route.MetaArgs) {
    return [
        { title: `${params.slug} - Blog` },
        { name: "description", content: `Blog post: ${params.slug}` },
    ];
}

export default function BlogPage() {
    const params = useParams();
    const slug = params.slug || "";

    return (
        <div className="bg-white shadow rounded-lg p-6">
            <p className="text-xl text-gray-800">{slug}</p>
        </div>
    );
}
