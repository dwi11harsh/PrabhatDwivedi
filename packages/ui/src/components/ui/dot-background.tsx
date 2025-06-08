import { cn } from "@repo/ui/lib/utils";

export const DotBackground = () => {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 w-full h-full bg-inherit">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:20px_20px]",
          "[background-image:radial-gradient(#c9c9c9_1px,transparent_1px)]",
          "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]",
        )}
      />
    </div>
  );
};
