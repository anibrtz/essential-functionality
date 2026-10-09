import { createFileRoute } from "@tanstack/react-router";
import { Layout, ArticleCard } from "@/components/Layout";
import { articles } from "@/lib/articles";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Código Femenino — Revista de relaciones, autoestima y belleza" },
      { name: "description", content: "Revista digital para mujeres: relaciones, autoestima, psicología cotidiana y belleza." },
      { property: "og:title", content: "Código Femenino — Revista digital" },
      { property: "og:description", content: "Relaciones, autoestima, psicología y belleza para mujeres hispanohablantes." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const first = articles[0]!;
  const rest = articles.slice(1);
  return (
    <Layout>
      <div className="mx-auto max-w-6xl px-4 py-12">
        <ArticleCard a={first} large />
        <h2 className="mt-16 mb-6 border-b border-border pb-2 text-xs uppercase tracking-[0.25em] text-muted-foreground">Lo último</h2>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((a) => <ArticleCard key={a.slug} a={a} />)}
        </div>
      </div>
    </Layout>
  );
}
