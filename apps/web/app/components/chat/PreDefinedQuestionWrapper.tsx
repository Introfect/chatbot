import { EmptyStateQuestions } from "~/lib/constants";
import PredefinedQuestionButton from "./PredefinedQuestionButton";

export default function PreDefinedQuestionWrapper({ handleAskQuestion }: { handleAskQuestion: (question: string) => void }) {
    return (
        <div className="hidden mt-6 mx-auto md:flex flex-wrap items-center text-balance justify-center gap-2">
            <p className="text-sm text-gray-500">Try</p>
            {EmptyStateQuestions.map((question, index) => (
                <>
                    {index === EmptyStateQuestions.length - 1 && (
                        <span className="text-sm text-gray-500">or</span>
                    )}
                    <span key={question}>
                        <PredefinedQuestionButton key={question} question={question} onClick={() => handleAskQuestion(question)} />
                        {index < EmptyStateQuestions.length - 2 && (
                            <span className="text-sm text-gray-500">, </span>
                        )}
                    </span>
                </>
            ))}
        </div>
    )
}