import { useState, useMemo } from "react";
import { Tv, Radio, Zap } from "lucide-react";
import { channels, categories } from "@/data/channels";
import ChannelCard from "@/components/ChannelCard";
import VideoPlayer from "@/components/VideoPlayer";
import TeamSection from "@/components/TeamSection";

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
    <div
      className="min-h-screen bg-background font-body"
      onContextMenu={(e) => e.preventDefault()}
      onCopy={(e) => e.preventDefault()}
      onCut={(e) => e.preventDefault()}
    >
      {/* Header */}
      <header className="sticky top-0 z-50 glass-strong">
        <div className="mx-auto flex items-center justify-between px-3 sm:px-4 py-2.5 sm:py-3 max-w-5xl">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary">
              <Tv className="h-4.5 w-4.5 text-primary-foreground" />
            </div>
            <div>
              <h1 className="font-heading text-base sm:text-lg font-bold text-foreground leading-tight tracking-tight">
                STR Sports
              </h1>
              <p className="text-[10px] text-muted-foreground font-medium tracking-widest uppercase">
                Live Stream
              </p>
            </div>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full glass-tab text-xs text-muted-foreground">
            <Radio className="h-3 w-3 text-primary animate-pulse-live" />
            <span className="font-semibold">{channels.length} Live</span>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-3 sm:px-4 py-4 sm:py-5 space-y-4 sm:space-y-5">
        {/* Player */}
        {activeStream && (
          <VideoPlayer
            streamId={activeStream.id}
            channelName={activeStream.name}
            onClose={() => setActiveStream(null)}
          />
        )}

        {/* Category Tabs */}
        <div className="flex gap-1.5 sm:gap-2 overflow-x-auto pb-1 scrollbar-hide -mx-3 px-3 sm:mx-0 sm:px-0">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`shrink-0 rounded-full px-3.5 sm:px-5 py-1.5 sm:py-2 text-xs sm:text-sm font-heading font-semibold transition-all duration-300 ${
                activeCategory === cat
                  ? "glass-tab-active"
                  : "glass-tab text-muted-foreground hover:text-foreground hover:bg-white/50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Channel Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-3">
          {filtered.map((channel, i) => (
            <div
              key={channel.id}
              className="animate-fade-up"
              style={{ animationDelay: `${i * 40}ms`, opacity: 0 }}
            >
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

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="flex flex-col items-center py-16 text-muted-foreground">
            <Zap className="h-8 w-8 mb-2" />
            <p className="font-heading font-semibold">No channels found</p>
          </div>
        )}

        {/* Team */}
        <TeamSection />
      </main>

      {/* Footer */}
      <footer className="mt-12 py-6">
        <p className="text-center text-xs text-muted-foreground">
          STR Sports &mdash; Free live sports streaming
        </p>
      </footer>
    </div>
  );
};

export default Index;
