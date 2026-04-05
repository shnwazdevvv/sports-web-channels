import { Play } from "lucide-react";

interface ChannelCardProps {
  name: string;
  streamId: string;
  index: number;
  isActive: boolean;
  onPlay: (streamId: string, name: string) => void;
}

const ChannelCard = ({ name, streamId, index, isActive, onPlay }: ChannelCardProps) => {
  const isHD = name.includes("HD");

  return (
    <div
      className={`group relative rounded-lg border p-4 cursor-pointer transition-all duration-300 hover:border-primary hover:-translate-y-1 ${
        isActive
          ? "border-primary bg-primary/10"
          : "border-border bg-card"
      }`}
      style={{ animationDelay: `${index * 60}ms` }}
      onClick={() => onPlay(streamId, name)}
    >
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3 min-w-0">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-secondary font-heading font-bold text-primary text-sm">
            STR
          </div>
          <div className="min-w-0">
            <h3 className="font-heading font-semibold text-foreground truncate text-sm md:text-base">
              {name}
            </h3>
            <div className="flex items-center gap-2 mt-0.5">
              <span className="flex items-center gap-1 text-xs text-primary font-medium">
                <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-live" />
                LIVE
              </span>
              {isHD && (
                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-accent text-accent-foreground">
                  HD
                </span>
              )}
            </div>
          </div>
        </div>
        <button
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform duration-200 group-hover:scale-110"
          onClick={(e) => {
            e.stopPropagation();
            onPlay(streamId, name);
          }}
        >
          <Play className="h-4 w-4 ml-0.5" />
        </button>
      </div>
    </div>
  );
};

export default ChannelCard;
