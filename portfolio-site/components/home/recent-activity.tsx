import Link from "next/link";
import { GitCommitHorizontal } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { getRecentGitHubActivity } from "@/lib/github";

function formatRelativeTime(dateString: string) {
  const now = new Date();
  const then = new Date(dateString);
  const diffMs = now.getTime() - then.getTime();

  const minutes = Math.floor(diffMs / 1000 / 60);
  const hours = Math.floor(diffMs / 1000 / 60 / 60);
  const days = Math.floor(diffMs / 1000 / 60 / 60 / 24);

  if (minutes < 60) return `${minutes}m ago`;
  if (hours < 24) return `${hours}h ago`;
  return `${days}d ago`;
}

function repoAccent(repoName: string) {
  switch (repoName.toLowerCase()) {
    case "autofarm":
      return "bg-emerald-500/12 text-emerald-300 border-emerald-500/20";
    case "jobhunt":
      return "bg-sky-500/12 text-sky-300 border-sky-500/20";
    case "serpentlab":
      return "bg-violet-500/12 text-violet-300 border-violet-500/20";
    default:
      return "bg-primary/10 text-primary border-primary/20";
  }
}

export default async function RecentActivity() {
  const activity = await getRecentGitHubActivity();

  return (
    <section className="mt-16 bg-background text-foreground">
      <Card className="overflow-hidden rounded-3xl border-border/60 bg-card/70 shadow-xl">
        <CardContent className="p-0">
          <div className="border-b border-border/60 px-6 py-5">
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
              My Activity
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-foreground">
              Recent GitHub work
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">
              A live snapshot of recent pushes across my featured projects.
            </p>
          </div>

          {activity.length === 0 ? (
            <div className="px-6 py-6">
              <p className="text-sm text-muted-foreground">
                No recent commit activity found across featured projects.
              </p>
            </div>
          ) : (
            <div className="divide-y divide-border/50">
              {activity.map((item) => (
                <Link
                  key={item.id}
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  className="group block transition-colors hover:bg-background/40"
                >
                  <div className="flex items-start gap-4 px-6 py-4">
                    <div className="mt-0.5 rounded-2xl border border-border/60 bg-background/70 p-2.5">
                      <GitCommitHorizontal className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-foreground" />
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span
                          className={`rounded-full border px-2.5 py-0.5 text-xs font-medium ${repoAccent(
                            item.repoName
                          )}`}
                        >
                          {item.repoName}
                        </span>

                        <span className="text-xs font-mono text-muted-foreground">
                          {item.sha}
                        </span>

                        <span className="text-xs text-muted-foreground">
                          {formatRelativeTime(item.createdAt)}
                        </span>
                      </div>

                      <p className="mt-2 line-clamp-1 text-sm leading-6 text-muted-foreground transition-colors group-hover:text-foreground/90">
                        {item.message}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </section>
  );
}