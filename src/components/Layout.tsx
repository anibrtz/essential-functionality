import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { categories, type Article, getCategory, formatDate } from "@/lib/articles";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b border-border">
        <div className="mx-auto max-w-6xl px-4 py-6 text-center">
          <Link to="/" className="font-display text-4xl md:text-5xl tracking-tight text-foreground">
            Código <em className="text-primary">Femenino</em>
          </Link>
          <nav className="mt-4 flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            {categories.map((c) => (
              <Link key={c.slug} to="/categoria/$slug" params={{ slug: c.slug }} className="hover:text-primary" activeProps={{ className: "text-primary" }}>
                {c.name}
              </Link>
            ))}
            <Link to="/sobre" className="hover:text-primary" activeProps={{ className: "text-primary" }}>Nosotras</Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <Newsletter />
      <footer className="border-t border-border py-8 text-center text-xs text-muted-foreground">
        © 2026 Código Femenino · Revista digital para mujeres hispanohablantes
      </footer>
    </div>
  );
}

function Newsletter() {
  const [sent, setSent] = useState(false);
  return (
    <section className="bg-secondary py-14">
      <div className="mx-auto max-w-xl px-4 text-center">
        <h2 className="font-display text-3xl text-foreground">Recibe lo mejor cada semana</h2>
        <p className="mt-2 text-sm text-muted-foreground">Nuestro boletín llega próximamente. Deja tu interés y te avisaremos al lanzarlo.</p>
        {sent ? (
          <p className="mt-6 font-medium text-primary">¡Gracias! Lanzaremos el boletín muy pronto.</p>
        ) : (
          <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="mt-6 flex gap-2">
            <input required type="email" placeholder="tu@correo.com" className="flex-1 rounded-full border border-input bg-background px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-ring" />
            <button className="rounded-full bg-primary px-6 py-2 text-sm font-medium text-primary-foreground hover:opacity-90">Avisarme</button>
          </form>
        )}
        <p className="mt-3 text-[11px] text-muted-foreground">Próximamente: suscripción real con envío por correo.</p>
      </div>
    </section>
  );
}

export function ArticleCard({ a, large }: { a: Article; large?: boolean }) {
  const cat = getCategory(a.category);
  return (
    <Link to="/articulo/$slug" params={{ slug: a.slug }} className="group block">
      <div className={`cover-${a.category} rounded-sm ${large ? "aspect-[16/10]" : "aspect-[4/3]"} flex items-end p-5`}>
        <span className="font-display text-6xl text-primary-foreground/80">{a.title.charAt(0)}</span>
      </div>
      <p className="mt-4 text-[11px] uppercase tracking-[0.2em] text-primary">{cat?.name}</p>
      <h3 className={`font-display mt-1 text-foreground group-hover:text-primary transition-colors ${large ? "text-3xl md:text-4xl" : "text-xl"}`}>{a.title}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{a.excerpt}</p>
      <p className="mt-2 text-xs text-muted-foreground">{a.author} · {formatDate(a.date)} · {a.readTime} min</p>
    </Link>
  );
}
