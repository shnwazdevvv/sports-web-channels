import { X, RefreshCw, Loader2 } from "lucide-react";
import { useState, useCallback } from "react";

interface VideoPlayerProps {
  streamId: string;
  channelName: string;
  onClose: () => void;
}

const VideoPlayer = ({ streamId, channelName, onClose }: VideoPlayerProps) => {
  const [loading, setLoading] = useState(true);
  const [retryKey, setRetryKey] = useState(Date.now());

  const handleRetry = useCallback(() => {
    setLoading(true);
    setRetryKey(Date.now());
  }, []);

  const handleLoad = useCallback(() => {
    setLoading(false);
  }, []);

  return (
    <div className="animate-fade-up rounded-2xl glass-card overflow-hidden">
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
        <div className="flex items-center gap-2">
          <button
            onClick={handleRetry}
            className="flex h-8 w-8 items-center justify-center rounded-full glass-icon text-muted-foreground hover:text-foreground transition-colors"
            title="Reload stream"
          >
            <RefreshCw className="h-4 w-4" />
          </button>
          <button
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-full glass-icon text-muted-foreground hover:text-foreground transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
      <div className="relative w-full" style={{ aspectRatio: "16/9" }}>
        {loading && (
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-black/60 backdrop-blur-sm">
            <Loader2 className="h-8 w-8 text-primary animate-spin mb-2" />
            <p className="text-xs text-white/80 font-medium">Loading stream...</p>
          </div>
        )}
        <iframe
          key={`${streamId}-${retryKey}`}
          src={`https://apiok.pages.dev/?id=${streamId}&autoplay=1&t=${retryKey}`}
          className="absolute inset-0 w-full h-full"
          allowFullScreen
          allow="autoplay; encrypted-media; fullscreen"
          title={channelName}
          onLoad={handleLoad}
        />
        {/* Live badge overlay */}
        <div className="absolute top-3 left-3 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-destructive/90 backdrop-blur-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-primary-foreground animate-pulse-live" />
          <span className="text-[10px] font-bold uppercase tracking-wider text-primary-foreground">
            Live
          </span>
        </div>
        {/* Bottom overlay to hide watermarks */}
        <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />
      </div>
    </div>
  );
};

export default VideoPlayer;
