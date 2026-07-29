"use client"

import { SERVICIOS } from "@/lib/site"

type Servicio = (typeof SERVICIOS)[number]

// Tarjeta de servicio clickeable: al hacer clic lleva al formulario de contacto
// y deja ya seleccionado ese servicio (vía evento que ContactoForm escucha), para
// que quien quiera cotizarlo no tenga que buscarlo en el desplegable. Es un <a>
// real a #contacto, así que si el JS no carga igual baja al contacto.
export default function ServicioCard({ s, i }: { s: Servicio; i: number }) {
  function handle(e: React.MouseEvent) {
    e.preventDefault()
    window.dispatchEvent(new CustomEvent("lcl:interes", { detail: s.titulo }))
    document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <a
      href="#contacto"
      onClick={handle}
      aria-label={`Cotizar ${s.titulo}`}
      className="group flex flex-col rounded-2xl border border-hairline bg-white p-7 transition hover:-translate-y-0.5 hover:border-brand-500/40 hover:shadow-lg hover:shadow-navy-900/5 focus:outline-none focus-visible:border-brand-500 focus-visible:ring-4 focus-visible:ring-brand-500/10"
    >
      <span className="text-xs font-black tabular-nums text-brand-500/60">
        {String(i + 1).padStart(2, "0")}
      </span>
      <h3 className="mt-3 text-lg font-bold text-navy-900">{s.titulo}</h3>
      <p className="mt-2.5 text-sm leading-relaxed text-ink/70">{s.resumen}</p>
      <ul className="mt-5 flex flex-wrap gap-1.5">
        {s.puntos.map(p => (
          <li key={p} className="rounded-md bg-surface px-2.5 py-1 text-xs font-medium text-muted">
            {p}
          </li>
        ))}
      </ul>
      <span className="mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-semibold text-brand-600 transition group-hover:gap-2.5">
        Cotizar este servicio
        <span aria-hidden className="transition group-hover:translate-x-0.5">→</span>
      </span>
    </a>
  )
}
