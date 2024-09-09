// components/ui/tooltip.jsx
import * as React from 'react';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import { cn } from '@/lib/utils'; // This is an optional utility for merging Tailwind classes.

const Tooltip = TooltipPrimitive.Root;
const TooltipTrigger = TooltipPrimitive.Trigger;
const TooltipContent = React.forwardRef(
  ({ className, sideOffset = 4, ...props }, ref) => (
    <TooltipPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(
        'z-50 overflow-hidden rounded-md border border-gray-200 bg-white px-3 py-1.5 text-sm text-gray-800 shadow-md',
        className
      )}
      {...props}
    />
  )
);
TooltipContent.displayName = TooltipPrimitive.Content.displayName;

const TooltipProvider = TooltipPrimitive.Provider;

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider };
