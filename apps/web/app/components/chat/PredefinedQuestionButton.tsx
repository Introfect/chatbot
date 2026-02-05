import { Button } from "../ui/button";

export default function PredefinedQuestionButton({ question, onClick }: { question: string, onClick: () => void }) {
    return (
        <Button type="button" variant="ghost" size="sm" className="rounded-full px-0 pl-1 h-fit text-wrap hover:bg-none font-seedtoscale text-primary hover:underline hover:text-primary text-sm w-fit text-center" onClick={onClick}>
            {question}
        </Button>
    )
}