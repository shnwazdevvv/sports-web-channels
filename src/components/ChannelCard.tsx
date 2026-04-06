import { Play } from "lucide-react";

interface ChannelCardProps {
  name: string;
  streamId: string;
  index: number;
  isActive: boolean;
  onPlay: (streamId: string, name: string) => void;
}

const ChannelCard = ({ name, streamId, isActive, onPlay }: ChannelCardProps) => {
  const isHD = name.includes("HD");

  return (
    <div
      className={`group relative rounded-xl sm:rounded-2xl p-3 sm:p-4 cursor-pointer transition-all duration-300 active:scale-[0.98] hover:-translate-y-0.5 ${
        isActive ? "glass-card-active ring-2 ring-primary/30" : "glass-card"
      }`}
      onClick={() => onPlay(streamId, name)}
    >
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3 min-w-0">
          <div className="flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-lg sm:rounded-xl glass-icon font-heading font-bold text-primary text-[10px] sm:text-xs">
            STR
          </div>
          <div className="min-w-0">
            <h3 className="font-heading font-semibold text-foreground truncate text-sm">
              {name}
            </h3>
            <div className="flex items-center gap-2 mt-0.5">
              <span className="flex items-center gap-1 text-[11px] text-primary font-semibold">
                <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-live" />
                LIVE
              </span>
              {isHD && (
                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-md glass-icon text-primary">
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
