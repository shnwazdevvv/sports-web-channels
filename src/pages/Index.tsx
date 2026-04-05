import { useState, useMemo } from "react";
import { Tv, Radio } from "lucide-react";
import { channels, categories } from "@/data/channels";
import ChannelCard from "@/components/ChannelCard";
import VideoPlayer from "@/components/VideoPlayer";

const Index = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeStream, setActiveStream] = useState<{ id: string; name: string } | null>(null);

  const filtered = useMemo(
    () =>
      activeCategory === "All"
        ? channels
        : channels.filter((c) => c.category === activeCategory),
    [activeCategory]
  );

  const handlePlay = (streamId: string, name: string) => {
    setActiveStream({ id: streamId, name });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background font-body">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="container mx-auto flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2">
            <Tv className="h-6 w-6 text-primary" />
            <span className="font-heading text-xl font-bold text-foreground tracking-wide">
              STR <span className="text-primary">SPORTS</span>
            </span>
          </div>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Radio className="h-3.5 w-3.5 text-primary animate-pulse-live" />
            <span className="font-medium">{channels.length} Channels</span>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 space-y-6">
        {/* Player */}
        {activeStream && (
          <VideoPlayer
            streamId={activeStream.id}
            channelName={activeStream.name}
            onClose={() => setActiveStream(null)}
          />
        )}

        {/* Category Tabs */}
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`shrink-0 rounded-full px-4 py-2 text-sm font-heading font-semibold transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Channel Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {filtered.map((channel, i) => (
            <div key={channel.id} className="animate-fade-up" style={{ animationDelay: `${i * 50}ms`, opacity: 0 }}>
              <ChannelCard
                name={channel.name}
                streamId={channel.id}
                index={i}
                isActive={activeStream?.id === channel.id}
                onPlay={handlePlay}
              />
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-6 mt-12">
        <p className="text-center text-xs text-muted-foreground">
          STR Sports Live Stream &bull; All channels are free to watch
        </p>
      </footer>
    </div>
  );
};

export default Index;
