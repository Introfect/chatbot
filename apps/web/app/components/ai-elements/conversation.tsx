"use client";

import { Button } from "~/components/ui/button";
import { cn } from "~/lib/utils";
import { ArrowDownIcon } from "lucide-react";
import type { ComponentProps } from "react";
import { useCallback } from "react";
import { StickToBottom, useStickToBottomContext } from "use-stick-to-bottom";

export type ConversationProps = ComponentProps<typeof StickToBottom>

export const Conversation = ({
  className,
  children,
  ...props
}: ConversationProps) => {

  return (
    <StickToBottom
      className={cn(
        "relative flex-1",
        className,
      )}
      initial="smooth"
      resize="smooth"
      role="log"
      {...props}
    >
      {children}
    </StickToBottom>
  );
};

export type ConversationContentProps = ComponentProps<"div">;

export const ConversationContent = ({
  className,
  ...props
}: ConversationContentProps) => {
  const { contentRef, scrollRef } = useStickToBottomContext();
  return (
    <div
      ref={scrollRef}
      className="size-full overflow-y-auto no-scrollbar"
    >
      <div
        ref={contentRef}
        className={cn("flex flex-col gap-8 p-4", className)}
        {...props}
      />
    </div>
  );
};

export type ConversationEmptyStateProps = ComponentProps<"div"> & {
  title?: string;
  description?: string;
  icon?: React.ReactNode;
};

export const ConversationEmptyState = ({
  className,
  title = "No messages yet",
  description = "Start a conversation to see messages here",
  icon,
  children,
  ...props
}: ConversationEmptyStateProps) => (
  <div
    className={cn(
      "flex size-full flex-col items-center justify-center gap-3 p-8 text-center",
      className,
    )}
    {...props}
  >
    {children ?? (
      <>
        {icon && <div className="text-muted-foreground">{icon}</div>}
        <div className="space-y-1">
          <h3 className="font-medium text-sm">{title}</h3>
          {description && (
            <p className="text-muted-foreground text-sm">{description}</p>
          )}
        </div>
      </>
    )}
  </div>
);

export type ConversationScrollButtonProps = ComponentProps<typeof Button>;

export const ConversationScrollButton = ({
  className,
  ...props
}: ConversationScrollButtonProps) => {
  const { isAtBottom, scrollToBottom } = useStickToBottomContext();

  const handleScrollToBottom = useCallback(() => {
    scrollToBottom();
  }, [scrollToBottom]);


  return (
    !isAtBottom && (
      <Button
        className={cn(
          "absolute bottom-[120px] sm:bottom-[100px] z-20 left-[50%] translate-x-[-50%] rounded-full bg-black text-[#be2623]",
          className
        )}
        onClick={handleScrollToBottom}
        size="icon"
        type="button"
        variant="outline"
        {...props}
      >
        <ArrowDownIcon className="size-8" />
      </Button>
    )
  );
};

const ContextConversationScrollButton = ({
  className,
  ...props
}: ConversationScrollButtonProps) => {
  const context = useStickToBottomContext();
  if (!context) return null;

  const { isAtBottom, scrollToBottom } = context;

  const handleScrollToBottom = useCallback(() => {
    scrollToBottom();
  }, [scrollToBottom]);

  return (
    !isAtBottom && (
      <Button
        className={cn(
          "absolute bottom-4 left-[50%] translate-x-[-50%] rounded-full dark:bg-background dark:hover:bg-muted",
          className,
        )}
        onClick={handleScrollToBottom}
        size="icon"
        type="button"
        variant="outline"
        {...props}
      >
        <ArrowDownIcon className="size-4" />
      </Button>
    )
  );
};
