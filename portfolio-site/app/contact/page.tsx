import Link from "next/link";
import { Mail, Github, Linkedin, FileText } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

const contactLinks = [
  {
    label: "Email",
    value: "stevenmediterraneo@gmail.com",
    href: "mailto:stevenmediterraneo@gmail.com",
    icon: Mail,
  },
  {
    label: "GitHub",
    value: "github.com/stevenmed26",
    href: "https://github.com/stevenmed26",
    icon: Github,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/steven-mediterraneo",
    href: "https://www.linkedin.com/in/steven-mediterraneo",
    icon: Linkedin,
  },
  {
    label: "Resume",
    value: "Download PDF",
    href: "/Steven_Mediterraneo_Resume.pdf",
    icon: FileText,
  },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="mx-auto max-w-4xl px-6 py-16 md:py-20">
        <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
          Contact
        </p>

        <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
          Let&apos;s connect
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
          I&apos;m interested in backend, platform, and distributed systems roles,
          especially where I can contribute to reliable services, thoughtful
          architecture, and strong engineering collaboration.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {contactLinks.map((item) => {
            const Icon = item.icon;

            return (
              <Link key={item.label} href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel={item.href.startsWith("http") ? "noreferrer" : undefined}>
                <Card className="h-full rounded-3xl border-border/60 bg-card/70 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30">
                  <CardContent className="flex items-start gap-4 p-6">
                    <div className="rounded-2xl border border-border/60 bg-background/70 p-3">
                      <Icon className="h-5 w-5 text-foreground" />
                    </div>

                    <div>
                      <p className="text-sm uppercase tracking-[0.16em] text-muted-foreground">
                        {item.label}
                      </p>
                      <p className="mt-2 text-base font-medium text-foreground">
                        {item.value}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>

        <div className="mt-12 rounded-3xl border border-border/60 bg-card/70 p-6">
          <h2 className="text-lg font-semibold">A quick note</h2>
          <p className="mt-3 leading-7 text-muted-foreground">
            The best way to reach me is by email or LinkedIn. I&apos;m always happy
            to connect about backend engineering, systems design, developer
            tooling, or interesting opportunities.
          </p>
        </div>
      </section>
    </main>
  );
}