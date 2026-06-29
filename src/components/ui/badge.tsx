import * as React from "react";
import { cn } from "@/lib/utils";

/** Small pill used for section eyebrows and labels. */
export function Badge({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3.5 py-1.5 text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground",
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}
