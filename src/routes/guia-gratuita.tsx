import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Layout } from "@/components/Layout";
import img from "@/assets/cat-autoestima.jpg";

export const Route = createFileRoute("/guia-gratuita")({
  head: () => ({
    meta: [
      { title: "Guía gratuita: Empezá por vos — Código Femenino" },
      { name: "description", content: "Descarga gratis la guía con 5 claves para fortalecer tu autoestima y tus relaciones." },
      { property: "og:title", content: "Guía gratuita: Empezá por vos" },
      { property: "og:description", content: "5 claves para fortalecer tu autoestima y tus relaciones." },
    ],
  }),
  component: Guia,
});

const claves = [
  "Reconocer tu valor sin pedir permiso",
  "Poner límites con amor y firmeza",
  "Dejar de compararte en redes",
  "Elegir vínculos que te sumen",
  "Crear un ritual diario de autocuidado",
];

function Guia() {
  const [sent, setSent] = useState(false);
  return (
    <Layout>
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-2 md:items-center">
        <img src={img} alt="Guía Empezá por vos" width={1200} height={800} className="aspect-[4/5] w-full rounded-sm object-cover" />
        <div>
          <p className="text-[11px] uppercase tracking-[0.2em] text-primary">Guía gratuita</p>
          <h1 className="font-display mt-2 text-4xl md:text-5xl leading-tight text-foreground">Empezá por vos</h1>
          <p className="mt-3 text-lg text-muted-foreground">5 claves para fortalecer tu autoestima y tus relaciones.</p>
          <ol className="mt-6 space-y-2 text-foreground">
            {claves.map((c, i) => (
              <li key={c} className="flex gap-3"><span className="font-display text-primary">{i + 1}.</span>{c}</li>
            ))}
          </ol>
          {sent ? (
            <p className="mt-8 rounded-sm bg-secondary p-4 font-medium text-primary">¡Gracias! La descarga por correo estará disponible próximamente. Te avisaremos en cuanto esté lista.</p>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="mt-8 space-y-3">
              <input required placeholder="Tu nombre" className="w-full rounded-full border border-input bg-background px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-ring" />
              <input required type="email" placeholder="tu@correo.com" className="w-full rounded-full border border-input bg-background px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-ring" />
              <button className="w-full rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90">Quiero mi guía gratis</button>
              <p className="text-[11px] text-muted-foreground">Próximamente: envío automático del PDF a tu correo.</p>
            </form>
          )}
        </div>
      </div>
    </Layout>
  );
}
