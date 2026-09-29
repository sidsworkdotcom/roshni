import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";
import * as React from "react";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center justify-center w-fit whitespace-nowrap shrink-0 text-xs uppercase transition-colors overflow-hidden font-medium",
  {
    variants: {
      variant: {
        // FILLED (default)
        default:
          " px-4 py-2  tracking-[0.3em] border border-charcoal/20 text-charcoal text-[0.65rem] font-bold bg-sand-50",

        // TEXT ONLY
        text: "text-primary tracking-[0.2em] text-sm",

        destructive: "bg-destructive text-white px-3 py-1 rounded-full",

        outline: "border border-border text-foreground px-3 py-1 rounded-full",

        ghost: "text-foreground hover:text-primary",

        link: "text-primary underline-offset-4 hover:underline"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);

function Badge({
  className,
  variant = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot.Root : "span";

  return (
    <Comp
      data-slot="badge"
      data-variant={variant}
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
