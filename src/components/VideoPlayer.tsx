import { X } from "lucide-react";

interface VideoPlayerProps {
  streamId: string;
  channelName: string;
  onClose: () => void;
}

const VideoPlayer = ({ streamId, channelName, onClose }: VideoPlayerProps) => {
  return (
    <div className="animate-fade-up rounded-2xl glass-strong overflow-hidden">
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-destructive animate-pulse-live" />
          <span className="text-[11px] font-bold uppercase tracking-wider text-destructive">
            Live Now
          </span>
          <span className="mx-1 text-border">|</span>
          <h2 className="font-heading font-bold text-foreground text-base truncate">
            {channelName}
          </h2>
        </div>
        <button
          onClick={onClose}
          className="flex h-8 w-8 items-center justify-center rounded-full glass-tab text-muted-foreground hover:text-foreground transition-colors"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
      <div className="relative w-full" style={{ aspectRatio: "16/9" }}>
        <iframe
          key={streamId}
          src={`https://apiok.pages.dev/?id=${streamId}&autoplay=1&t=${Date.now()}`}
          className="absolute inset-0 w-full h-full"
          allowFullScreen
          allow="autoplay; encrypted-media; fullscreen"
          title={channelName}
        />
        {/* Live badge overlay */}
        <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-destructive/90 backdrop-blur-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-primary-foreground animate-pulse-live" />
          <span className="text-[10px] font-bold uppercase tracking-wider text-primary-foreground">
            Live
          </span>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
