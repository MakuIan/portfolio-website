export const TAG_COLORS: Record<string, string> = {
  sveltekit:
    "bg-orange-500/15 text-orange-600 dark:text-orange-400 border-orange-500/30",
  svelte:
    "bg-orange-500/15 text-orange-600 dark:text-orange-400 border-orange-500/30",
  convex:
    "bg-amber-500/15 text-amber-600 dark:text-amber-400 border-amber-500/30",
  typescript: "bg-sky-500/15 text-sky-600 dark:text-sky-400 border-sky-500/30",
  ts: "bg-sky-500/15 text-sky-600 dark:text-sky-400 border-sky-500/30",
  postgresql:
    "bg-blue-600/15 text-blue-600 dark:text-blue-400 border-blue-600/30",
  postgres:
    "bg-blue-600/15 text-blue-600 dark:text-blue-400 border-blue-600/30",
  astro:
    "bg-purple-500/15 text-purple-600 dark:text-purple-400 border-purple-500/30",
  tailwind:
    "bg-cyan-500/15 text-cyan-600 dark:text-cyan-400 border-cyan-500/30",
  "tailwind css":
    "bg-cyan-500/15 text-cyan-600 dark:text-cyan-400 border-cyan-500/30",
  tailwindcss:
    "bg-cyan-500/15 text-cyan-600 dark:text-cyan-400 border-cyan-500/30",
  javascript:
    "bg-yellow-500/15 text-yellow-700 dark:text-yellow-400 border-yellow-500/30",
  js: "bg-yellow-500/15 text-yellow-700 dark:text-yellow-400 border-yellow-500/30",
  react: "bg-cyan-400/15 text-cyan-600 dark:text-cyan-300 border-cyan-400/30",
  "node.js":
    "bg-green-600/15 text-green-600 dark:text-green-400 border-green-600/30",
  node: "bg-green-600/15 text-green-600 dark:text-green-400 border-green-600/30",
  python: "bg-blue-500/15 text-blue-600 dark:text-blue-400 border-blue-500/30",
  docker: "bg-sky-600/15 text-sky-600 dark:text-sky-400 border-sky-600/30",
  git: "bg-slate-500/15 text-slate-600 dark:text-slate-400 border-slate-500/30",
  github:
    "bg-slate-500/15 text-slate-600 dark:text-slate-400 border-slate-500/30",
};

export function getTagColorClass(tag: string): string {
  const normalized = tag.trim().toLowerCase();
  return TAG_COLORS[normalized] || "badge-outline text-base-content/80";
}
