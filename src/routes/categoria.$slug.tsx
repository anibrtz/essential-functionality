import { createFileRoute, notFound } from "@tanstack/react-router";
import { Layout, ArticleCard } from "@/components/Layout";
import { articles, getCategory } from "@/lib/articles";

export const Route = createFileRoute("/categoria/$slug")({
  loader: ({ params }) => {
    const category = getCategory(params.slug);
    if (!category) throw notFound();
    return { category };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.category.name} — Código Femenino` },
      { name: "description", content: loaderData?.category.description },
      { property: "og:title", content: `${loaderData?.category.name} — Código Femenino` },
      { property: "og:description", content: loaderData?.category.description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: CategoryPage,
});

function CategoryPage() {
  const { category } = Route.useLoaderData();
  const list = articles.filter((a) => a.category === category.slug);
  return (
    <Layout>
      <div className="mx-auto max-w-6xl px-4 py-12">
        <h1 className="font-display text-5xl text-foreground">{category.name}</h1>
        <p className="mt-2 text-muted-foreground">{category.description}</p>
        <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((a) => <ArticleCard key={a.slug} a={a} />)}
        </div>
      </div>
    </Layout>
  );
}
