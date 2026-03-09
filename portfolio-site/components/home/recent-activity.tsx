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

export default async function RecentActivity() {
  const activity = await getRecentGitHubActivity();

  if (activity.length === 0) {
    return (
      <section className="mt-16 bg-background text-foreground">
        <div className="rounded-3xl border border-border/60 bg-card/70 p-6">
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
            My Activity
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight">
            Recent GitHub work
          </h2>
          <p className="mt-3 text-muted-foreground">
            Activity is temporarily unavailable.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="mt-16">
      <div className="mb-6">
        <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
          My Activity
        </p>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight">
          Recent GitHub work
        </h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          A live snapshot of recent pushes across my active projects.
        </p>
      </div>

      <div className="grid gap-4">
        {activity.map((item) => (
          <Link
            key={item.id}
            href={item.url}
            target="_blank"
            rel="noreferrer"
            className="group"
          >
            <Card className="rounded-3xl border-border/60 bg-card/70 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg">
              <CardContent className="flex items-start gap-4 p-5">
                <div className="rounded-2xl border border-border/60 bg-background/70 p-3">
                  <GitCommitHorizontal className="h-5 w-5" />
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                    <span className="font-medium text-foreground">
                      {item.repoName}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {item.sha}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {formatRelativeTime(item.createdAt)}
                    </span>
                  </div>

                  <p className="mt-2 line-clamp-2 text-sm leading-6 text-muted-foreground">
                    {item.message}
                  </p>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}