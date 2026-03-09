export type RecentActivityItem = {
  id: string;
  repo: string;
  repoName: string;
  message: string;
  sha: string;
  createdAt: string;
  url: string;
};

type GitHubCommitResponse = {
  sha: string;
  html_url: string;
  commit: {
    message: string;
    author: {
      date: string;
    };
  };
};

const GITHUB_USERNAME = process.env.GITHUB_USERNAME;
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

const FEATURED_REPOS = ["autofarm", "jobhunt", "serpentlab"];

async function fetchRepoCommits(repo: string): Promise<RecentActivityItem[]> {
  if (!GITHUB_USERNAME) return [];

  const res = await fetch(
    `https://api.github.com/repos/${GITHUB_USERNAME}/${repo}/commits?per_page=3`,
    {
      headers: {
        Accept: "application/vnd.github+json",
        ...(GITHUB_TOKEN ? { Authorization: `Bearer ${GITHUB_TOKEN}` } : {}),
      },
      next: { revalidate: 900 },
    }
  );

  if (!res.ok) {
    console.log(`failed commits fetch for ${repo}:`, res.status);
    return [];
  }

  const commits = (await res.json()) as GitHubCommitResponse[];

  return commits.map((commit) => {
    const firstLine = commit.commit.message.split("\n")[0]?.trim() || "Recent commit";

    return {
      id: `${repo}-${commit.sha}`,
      repo: `${GITHUB_USERNAME}/${repo}`,
      repoName: repo,
      message: firstLine,
      sha: commit.sha.slice(0, 7),
      createdAt: commit.commit.author.date,
      url: commit.html_url,
    };
  });
}

export async function getRecentGitHubActivity(): Promise<RecentActivityItem[]> {
  if (!GITHUB_USERNAME) {
    console.log("missing username");
    return [];
  }

  const allCommits = await Promise.all(
    FEATURED_REPOS.map((repo) => fetchRepoCommits(repo))
  );

  const items = allCommits
    .flat()
    .sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    )
    .slice(0, 5);

  console.log(
    "recent activity items",
    items.map((item) => ({
      repo: item.repoName,
      sha: item.sha,
      message: item.message,
      createdAt: item.createdAt,
    }))
  );

  return items;
}