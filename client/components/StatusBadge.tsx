import { cn } from "@/lib/utils";

interface StatusBadgeProps {
  status: "live" | "ended" | "upcoming";
  className?: string;
}

export default function StatusBadge({ status, className }: StatusBadgeProps) {
  const variants = {
    live: "bg-green-100 text-green-800 border-green-200",
    ended: "bg-red-100 text-red-800 border-red-200",
    upcoming: "bg-blue-100 text-blue-800 border-blue-200",
  };

  const labels = {
    live: "Live",
    ended: "Ended",
    upcoming: "Upcoming",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border",
        variants[status],
        className
      )}
    >
      {status === "live" && (
        <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse" />
      )}
      {labels[status]}
    </span>
  );
}
