// mdx-components.tsx
import type { MDXComponents } from "mdx/types";
import Link from "next/link";
import ArchitectureDiagram from "@/components/ui/architecture-diagram";

function H1(props: React.HTMLAttributes<HTMLHeadingElement>) {
  return <h1 className="mt-10 text-3xl font-semibold tracking-tight" {...props} />;
}

function H2(props: React.HTMLAttributes<HTMLHeadingElement>) {
  return <h2 className="mt-10 text-2xl font-semibold tracking-tight" {...props} />;
}

function H3(props: React.HTMLAttributes<HTMLHeadingElement>) {
  return <h3 className="mt-8 text-xl font-semibold tracking-tight" {...props} />;
}

function P(props: React.HTMLAttributes<HTMLParagraphElement>) {
  return <p className="mt-4 leading-8 text-muted-foreground" {...props} />;
}

function UL(props: React.HTMLAttributes<HTMLUListElement>) {
  return <ul className="mt-4 list-disc space-y-2 pl-6 text-muted-foreground" {...props} />;
}

function OL(props: React.HTMLAttributes<HTMLOListElement>) {
  return <ol className="mt-4 list-decimal space-y-2 pl-6 text-muted-foreground" {...props} />;
}

function LI(props: React.HTMLAttributes<HTMLLIElement>) {
  return <li className="leading-7" {...props} />;
}

function A(props: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  const href = props.href ?? "#";
  const isExternal = href.startsWith("http");

  if (isExternal) {
    return (
      <a
        {...props}
        href={href}
        target="_blank"
        rel="noreferrer"
        className="font-medium text-primary underline underline-offset-4"
      />
    );
  }

  return (
    <Link
      href={href}
      className="font-medium text-primary underline underline-offset-4"
    >
      {props.children}
    </Link>
  );
}

function Blockquote(props: React.HTMLAttributes<HTMLElement>) {
  return (
    <blockquote
      className="mt-6 border-l-2 border-border pl-6 italic text-muted-foreground"
      {...props}
    />
  );
}

function Code(props: React.HTMLAttributes<HTMLElement>) {
  return (
    <code
      className="rounded-md bg-secondary px-1.5 py-0.5 font-mono text-sm"
      {...props}
    />
  );
}

function Pre(props: React.HTMLAttributes<HTMLPreElement>) {
  return (
    <pre
      className="mt-6 overflow-x-auto rounded-2xl border border-border/60 bg-card p-4 text-sm"
      {...props}
    />
  );
}

const components: MDXComponents = {
  h1: H1,
  h2: H2,
  h3: H3,
  p: P,
  ul: UL,
  ol: OL,
  li: LI,
  a: A,
  blockquote: Blockquote,
  code: Code,
  pre: Pre,
  ArchitectureDiagram,
};

export function useMDXComponents(): MDXComponents {
  return components;
}