import { Instagram } from "lucide-react";

interface TeamMember {
  username: string;
  role: string;
}

const team: TeamMember[] = [
  { username: "@sexyshnwaz", role: "Founder & Admin" },
];

const TeamSection = () => {
  return (
    <section className="space-y-3">
      <h2 className="font-heading text-lg font-bold text-foreground">Our Team</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {team.map((member) => (
          <div
            key={member.username}
            className="glass rounded-2xl p-5 flex items-center gap-4 animate-fade-up"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
              <Instagram className="h-5 w-5 text-primary" />
            </div>
            <div className="min-w-0">
              <a
                href={`https://instagram.com/${member.username.replace("@", "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-heading font-bold text-foreground text-base hover:text-primary transition-colors"
              >
                {member.username}
              </a>
              <p className="text-xs text-muted-foreground font-medium mt-0.5">
                {member.role}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
