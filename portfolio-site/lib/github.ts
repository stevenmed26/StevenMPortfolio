type GitHubEvent = {
  id: string;
  type: string;
  repo: {
    name: string;
  };
  created_at: string;
  payload?: {
    commits?: Array<{
      sha: string;
      message: string;
    }>;
  };
};

export type RecentActivityItem = {
  id: string;
  repo: string;
  repoName: string;
  message: string;
  sha: string;
  createdAt: string;
  url: string;
};

const GITHUB_USERNAME = process.env.GITHUB_USERNAME;
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

export async function getRecentGitHubActivity(): Promise<RecentActivityItem[]> {
  if (!GITHUB_USERNAME) {
    return [];
  }

  const res = await fetch(
    `https://api.github.com/users/${GITHUB_USERNAME}/events/public`,
    {
      headers: {
        Accept: "application/vnd.github+json",
        ...(GITHUB_TOKEN
          ? { Authorization: `Bearer ${GITHUB_TOKEN}` }
          : {}),
      },
      next: { revalidate: 900 },
    }
  );

  if (!res.ok) {
    return [];
  }

  const events = (await res.json()) as GitHubEvent[];

  const pushEvents = events.filter(
    (event) => event.type === "PushEvent" && (event.payload?.commits?.length ?? 0) > 0
  );

  const items: RecentActivityItem[] = [];

  for (const event of pushEvents) {
    const commits = event.payload?.commits ?? [];

    for (const commit of commits.slice(0, 2)) {
      console.log("commit message", commit.message);
      if (!commit.message?.trim()) continue;

      const repoName = event.repo.name.split("/")[1] ?? event.repo.name;

      items.push({
        id: `${event.id}-${commit.sha}`,
        repo: event.repo.name,
        repoName,
        message: commit.message,
        sha: commit.sha.slice(0, 7),
        createdAt: event.created_at,
        url: `https://github.com/${event.repo.name}/commit/${commit.sha}`,
      });
    }
  }

  console.log(
    "items",
    items.map((item) => ({
        repo: item.repoName,
        sha: item.sha,
        message: item.message,
    }))
    );
  console.log("items length", items.length);
  return items.slice(0, 5);
}