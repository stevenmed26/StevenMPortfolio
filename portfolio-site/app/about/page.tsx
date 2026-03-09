import Image from "next/image"
import SectionReveal from "@/components/ui/section-reveal"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="mx-auto max-w-4xl px-6 py-16 md:py-20">

        {/* Header */}
        <div className="flex flex-col items-start gap-8 md:flex-row md:items-center">

          <div className="relative h-32 w-32 overflow-hidden rounded-2xl border border-border">
            <Image
              src="/profilepic.jpeg"
              alt="Steven Mediterraneo"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
              About
            </p>

            <h1 className="mt-2 text-4xl font-semibold tracking-tight sm:text-5xl">
              Hi, I'm Steven
            </h1>

            <p className="mt-3 text-muted-foreground">
              Backend Engineer • Distributed Systems • Go
            </p>

            {/* Identity tags */}
            <div className="mt-4 flex flex-wrap gap-2 text-sm text-muted-foreground">
              <span>Engineering</span>
              <span>•</span>
              <span>Motorsport</span>
              <span>•</span>
              <span>Motorcycles</span>
              <span>•</span>
              <span>Texas A&amp;M</span>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="my-10 h-px w-full bg-border" />
        <SectionReveal>
          <div className="space-y-6 text-lg leading-8 text-muted-foreground">

            <p>
              My background in engineering started in robotics at Texas A&amp;M University,
              where I developed an early interest in how complex systems interact:
              software controlling hardware, distributed components communicating,
              and real-time data shaping behavior. Robotics exposed me to the full
              stack of engineering: mechanical systems, electrical systems, and the
              software that connects them.
            </p>

            <p>
              That systems-oriented perspective still influences how I build
              software today. I enjoy designing backend systems that behave
              predictably under load, communicate clearly through well-defined
              interfaces, and can be reasoned about when something goes wrong.
              Much of my work now focuses on backend services written in Go and
              Python, building APIs, asynchronous processing pipelines, and
              infrastructure for distributed applications.
            </p>

            <p>
              Professionally, I worked as a software engineer at Digi International
              where I developed validation services, diagnostic tooling, and backend
              automation for device and connectivity platforms. The role required
              working closely with firmware engineers, debugging complex system
              interactions, and improving reliability across networked devices and
              services.
            </p>

          </div>
        </SectionReveal>
        <SectionReveal>
          {/* Divider */}
          <div className="my-10 h-px w-full bg-border" />

          <div className="space-y-6 text-lg leading-8 text-muted-foreground">

            <p>
              Outside of work, I spend a lot of time building systems purely out of
              curiosity. Many of my projects start with the question, “Could I build
              this myself?” Projects like AutoFarm, a distributed Go microservices
              simulation platform, or JobHunt, a backend-driven job aggregation
              system, are ways for me to explore architecture patterns, distributed
              coordination, and infrastructure tooling.
            </p>

            <p>
              I also enjoy experimenting with projects that sit at the intersection
              of systems and experimentation. SerpentLab, for example, is a personal
              playground combining Go services with Python reinforcement learning
              experiments. These kinds of projects help me explore ideas around
              simulation, training environments, and how systems can be designed to
              support experimentation.
            </p>

          </div>
        </SectionReveal>
        <SectionReveal>

          {/* Divider */}
          <div className="my-10 h-px w-full bg-border" />

          <div className="space-y-6 text-lg leading-8 text-muted-foreground">

            <p>
              Outside of engineering, I still spend a lot of time connected to the
              Texas A&amp;M community. I enjoy following Aggie athletics,
              especially college football in the fall, and staying involved with
              the broader A&amp;M network whenever I can.
            </p>

            <p>
              I’m also a big Formula 1 fan (go RedBull and Yuki Tsunoda!) and enjoy
              motorcycles whenever I get the chance to ride. Like a lot of my
              technical interests, I tend to appreciate the engineering behind
              these worlds just as much as the competition itself.
            </p>

            <p>
              Ultimately, I enjoy engineering environments where thoughtful design,
              collaboration, and curiosity are valued: places where engineers are
              encouraged to build reliable systems while continually learning and
              experimenting.
            </p>

          </div>
        </SectionReveal>
      </section>
    </main>
  )
}