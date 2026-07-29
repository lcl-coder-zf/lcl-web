"use client"

import { useState } from "react"
import { SITE } from "@/lib/site"

// Sin backend a propósito: el formulario arma el mensaje y abre WhatsApp con
// todo escrito. Cero infraestructura que mantener y la conversación queda donde
// el equipo ya responde. Si algún día quieren los envíos en la base, se cambia
// esta función por un POST.
export default function ContactoForm() {
  const [form, setForm] = useState({
    nombre: "", empresa: "", correo: "", telefono: "", interes: "", mensaje: "",
  })

  const set = (campo: string, valor: string) =>
    setForm(prev => ({ ...prev, [campo]: valor }))

  function enviar(e: React.FormEvent) {
    e.preventDefault()
    const lineas = [
      `Hola LCL, soy ${form.nombre}${form.empresa ? ` de ${form.empresa}` : ""}.`,
      form.interes ? `Me interesa: ${form.interes}.` : "",
      form.mensaje,
      "",
      `Correo: ${form.correo}`,
      form.telefono ? `Teléfono: ${form.telefono}` : "",
    ].filter(Boolean)

    const url = `https://wa.me/${SITE.telefonoE164}?text=${encodeURIComponent(lineas.join("\n"))}`
    window.open(url, "_blank", "noopener,noreferrer")
  }

  const campo =
    "w-full rounded-xl border border-hairline bg-white px-4 py-3 text-sm text-ink " +
    "outline-none transition focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 " +
    "placeholder:text-muted/70"

  return (
    <form onSubmit={enviar} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="nombre" className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-muted">
            Nombre *
          </label>
          <input id="nombre" required value={form.nombre} onChange={e => set("nombre", e.target.value)}
            className={campo} placeholder="Tu nombre" />
        </div>
        <div>
          <label htmlFor="empresa" className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-muted">
            Empresa
          </label>
          <input id="empresa" value={form.empresa} onChange={e => set("empresa", e.target.value)}
            className={campo} placeholder="Razón social" />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="correo" className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-muted">
            Correo *
          </label>
          <input id="correo" type="email" required value={form.correo} onChange={e => set("correo", e.target.value)}
            className={campo} placeholder="nombre@empresa.com" />
        </div>
        <div>
          <label htmlFor="telefono" className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-muted">
            Teléfono
          </label>
          <input id="telefono" type="tel" value={form.telefono} onChange={e => set("telefono", e.target.value)}
            className={campo} placeholder="300 000 0000" />
        </div>
      </div>

      <div>
        <label htmlFor="interes" className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-muted">
          ¿Qué necesitas?
        </label>
        <select id="interes" value={form.interes} onChange={e => set("interes", e.target.value)} className={campo}>
          <option value="">Selecciona una opción</option>
          <option>Certificación BASC</option>
          <option>Certificación ISO 9001</option>
          <option>SG-SST</option>
          <option>SAGRILAFT / SARLAFT / SIPLAFT</option>
          <option>Auditoría interna</option>
          <option>Formación al equipo</option>
          <option>Otro</option>
        </select>
      </div>

      <div>
        <label htmlFor="mensaje" className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-muted">
          Cuéntanos brevemente
        </label>
        <textarea id="mensaje" rows={4} value={form.mensaje} onChange={e => set("mensaje", e.target.value)}
          className={`${campo} resize-none`} placeholder="En qué punto está tu empresa y qué necesitas lograr." />
      </div>

      <button type="submit"
        className="w-full rounded-xl bg-brand-500 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-brand-600">
        Enviar por WhatsApp
      </button>
      <p className="text-center text-xs text-muted">
        Se abre WhatsApp con tu mensaje ya escrito. También puedes escribir a{" "}
        <a href={`mailto:${SITE.correoComercial}`} className="font-medium text-brand-600 hover:underline">
          {SITE.correoComercial}
        </a>
      </p>
    </form>
  )
}
