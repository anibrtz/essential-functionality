import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Layout, ArticleCard } from "@/components/Layout";
import { articles, getArticle, getCategory, formatDate, categoryImages } from "@/lib/articles";

export const Route = createFileRoute("/articulo/$slug")({
  loader: ({ params }) => {
    const article = getArticle(params.slug);
    if (!article) throw notFound();
    return { article };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.article.title} — Código Femenino` },
      { name: "description", content: loaderData?.article.excerpt },
      { property: "og:title", content: loaderData?.article.title },
      { property: "og:description", content: loaderData?.article.excerpt },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: ArticlePage,
});

function ArticlePage() {
  const { article: a } = Route.useLoaderData();
  const cat = getCategory(a.category)!;
  const related = articles.filter((x) => x.slug !== a.slug).slice(0, 3);
  return (
    <Layout>
      <article className="mx-auto max-w-2xl px-4 py-12">
        <Link to="/categoria/$slug" params={{ slug: cat.slug }} className="text-[11px] uppercase tracking-[0.2em] text-primary">{cat.name}</Link>
        <h1 className="font-display mt-2 text-4xl md:text-5xl leading-tight text-foreground">{a.title}</h1>
        <p className="mt-4 text-lg text-muted-foreground">{a.excerpt}</p>
        <p className="mt-4 text-xs text-muted-foreground">Por {a.author} · {formatDate(a.date)} · {a.readTime} min de lectura</p>
        <img
          src={categoryImages[a.category]}
          alt={a.title}
          width={1200}
          height={800}
          className="my-8 aspect-[16/9] w-full rounded-sm object-cover"
        />
        <div className="space-y-5 text-[17px] leading-relaxed text-foreground">
          {a.body.map((b, i) => (
            <div key={i}>
              {b.h && <h2 className="font-display mb-2 text-2xl">{b.h}</h2>}
              <p>{b.p}</p>
            </div>
          ))}
        </div>
      </article>
      <div className="mx-auto max-w-6xl px-4 pb-16">
        <h2 className="mb-6 border-b border-border pb-2 text-xs uppercase tracking-[0.25em] text-muted-foreground">Sigue leyendo</h2>
        <div className="grid gap-10 sm:grid-cols-3">{related.map((r) => <ArticleCard key={r.slug} a={r} />)}</div>
      </div>
    </Layout>
  );
}
