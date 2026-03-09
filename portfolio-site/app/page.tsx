import PortfolioHero from "@/components/sections/hero";
import RecentActivity from "@/components/home/recent-activity";

export default function HomePage() {
  return (
    <main className="bg-background text-foreground">
      <PortfolioHero />
      <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-10">
        <RecentActivity />
      </section>
    </main>
  );
}