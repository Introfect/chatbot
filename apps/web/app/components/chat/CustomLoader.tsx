import Lottie from "lottie-react";
import starMagicAnimation from "../../../public/star-magic.json";
import { cn } from "~/lib/utils";

export default function CustomLoader() {
    return (

        <div className={cn("flex items-center gap-2 w-fit")}>
            <Lottie animationData={starMagicAnimation} loop={true} className="size-8" />
            <p className="text-sm text-gray-500">Thinking...</p>
        </div>

    )
}