import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface VoteButtonProps {
  disabled?: boolean;
  onClick?: () => void;
}

export default function VoteButton({ disabled = false, onClick }: VoteButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "w-full py-3 px-6 rounded-lg font-semibold transition-all",
        disabled
          ? "bg-gray-100 text-gray-400 cursor-not-allowed"
          : "bg-blue-600 text-white hover:bg-blue-700 active:scale-95"
      )}
    >
      {disabled ? (
        <span className="flex items-center justify-center">
          <Check className="w-5 h-5 mr-2" />
          Already Voted
        </span>
      ) : (
        "Cast Vote"
      )}
    </button>
  );
}
