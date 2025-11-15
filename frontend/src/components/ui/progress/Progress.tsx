// src/components/ui/progress/Progress.tsx
import * as React from "react"

import { cn } from "@/lib/utils"

export interface ProgressProps
    extends React.HTMLAttributes<HTMLDivElement> {
    value?: number
}

const Progress = React.forwardRef<HTMLDivElement, ProgressProps>(
    ({ className, value, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn(
                    "relative h-4 w-full overflow-hidden rounded-full bg-[#223150]",
                    className
                )}
                {...props}
            >
                <div
                    className="h-full w-full flex-1 bg-gradient-to-r from-[#C92337] to-[#E16237] transition-all"
                    style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
                />
            </div>
        )
    }
)
Progress.displayName = "Progress"

export { Progress }