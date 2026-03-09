"use client";

import { motion } from "motion/react";

type ArchitectureNode = {
  id: string;
  title: string;
  subtitle?: string;
};

type ArchitectureConnection = {
  from: string;
  to: string;
  label?: string;
};

type ArchitectureDiagramProps = {
  title?: string;
  description?: string;
  nodes: ArchitectureNode[];
  connections: ArchitectureConnection[];
};

export default function ArchitectureDiagram({
  title = "System Architecture",
  description,
  nodes,
  connections,
}: ArchitectureDiagramProps) {
  const nodeMap = new Map(nodes.map((node) => [node.id, node]));

  return (
    <motion.section
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.65, ease: "easeOut" }}
      className="mt-10 rounded-3xl border border-border/60 bg-card/70 p-6"
    >
      <div className="mb-6">
        <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
        {description ? (
          <p className="mt-3 max-w-3xl leading-7 text-muted-foreground">
            {description}
          </p>
        ) : null}
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {nodes.map((node, index) => (
          <motion.div
            key={node.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: 0.5,
              delay: 0.08 + index * 0.07,
              ease: "easeOut",
            }}
            className="rounded-2xl border border-border/60 bg-background/70 p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg"
          >
            <p className="text-sm uppercase tracking-[0.16em] text-muted-foreground">
              {node.id}
            </p>
            <h3 className="mt-2 text-lg font-semibold">{node.title}</h3>
            {node.subtitle ? (
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                {node.subtitle}
              </p>
            ) : null}
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.55, delay: 0.2, ease: "easeOut" }}
        className="mt-8 rounded-2xl border border-border/60 bg-background/60 p-5"
      >
        <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-muted-foreground">
          Service / Data Flow
        </h3>

        <div className="mt-4 space-y-3">
          {connections.map((connection, index) => {
            const fromNode = nodeMap.get(connection.from);
            const toNode = nodeMap.get(connection.to);

            return (
              <motion.div
                key={`${connection.from}-${connection.to}-${index}`}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.45,
                  delay: 0.28 + index * 0.05,
                  ease: "easeOut",
                }}
                className="flex flex-col gap-2 rounded-xl border border-border/50 bg-card/60 p-4 transition-all duration-300 hover:border-primary/20 md:flex-row md:items-center md:justify-between"
              >
                <div className="flex items-center gap-3">
                  <span className="rounded-full border border-border/60 bg-background px-3 py-1 text-sm font-medium">
                    {fromNode?.title ?? connection.from}
                  </span>
                  <span className="text-muted-foreground">→</span>
                  <span className="rounded-full border border-border/60 bg-background px-3 py-1 text-sm font-medium">
                    {toNode?.title ?? connection.to}
                  </span>
                </div>

                {connection.label ? (
                  <span className="text-sm text-muted-foreground">
                    {connection.label}
                  </span>
                ) : null}
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </motion.section>
  );
}