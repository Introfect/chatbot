import { redirect } from "react-router";
import type { Route } from "./+types/redirect";

export function loader({ }: Route.LoaderArgs) {
    return redirect("/blog/example1");
}

export default function Redirect() {
    return null;
}
