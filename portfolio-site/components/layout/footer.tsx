import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between lg:px-10">
        <div>
          <p className="text-sm font-medium text-foreground">
            Steven Mediterraneo
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            Backend Engineer • Go • Distributed Systems
          </p>
        </div>

        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
          <a
            href="mailto:stevenmediterraneo@gmail.com"
            className="transition-colors hover:text-foreground"
          >
            stevenmediterraneo@gmail.com
          </a>

          <Link
            href="https://github.com/stevenmed26"
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-foreground"
          >
            GitHub
          </Link>

          <Link
            href="https://www.linkedin.com/in/steven-mediterraneo"
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-foreground"
          >
            LinkedIn
          </Link>

          <Link
            href="/Steven_Mediterraneo_Resume.pdf"
            target="_blank"
            className="transition-colors hover:text-foreground"
          >
            Resume
          </Link>
        </div>
      </div>
    </footer>
  );
}