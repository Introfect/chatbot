import { STS_LOGO_URL } from "~/lib/constants";
import { cn } from "~/lib/utils";

export default function AiLogo({ isUser, messageTextIsEmpty }: { isUser: boolean, messageTextIsEmpty: boolean }) {

    return (
        <img
            src={STS_LOGO_URL}
            alt="STS Logo"
            className={cn("size-8 rounded-full object-cover shrink-0 mt-1", isUser && "hidden", messageTextIsEmpty && "hidden")}
        />
    );
} 