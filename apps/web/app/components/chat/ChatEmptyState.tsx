import SeedToScaleAILogo from "../svg/SeedToScaleAILogo";
import PreDefinedQuestionWrapper from "./PreDefinedQuestionWrapper";

export default function ChatEmptyState({
  handleAskQuestion,
}: {
  handleAskQuestion: (question: string) => void;
}) {
  return (
    <div className="w-full relative flex flex-col items-center justify-start pt-36 h-full">
      <SeedToScaleAILogo className="w-64" />
      <p className="text-sm text-gray-500 mt-4">
        Ready to build the future? Start by asking about...
      </p>
      <PreDefinedQuestionWrapper handleAskQuestion={handleAskQuestion} />
    </div>
  );
}
