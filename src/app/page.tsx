import Image from "next/image"
import ContactoForm from "@/components/ContactoForm"
import { SITE, CIFRAS, NORMAS, SERVICIOS, SERVICIO_DESTACADO, PROCESO, VALORES } from "@/lib/site"

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <Cifras />
        <Servicios />
        <Proceso />
        <PorQue />
        <Cobertura />
        <Contacto />
      </main>
      <Footer />
    </>
  )
}

/* ── Navegación ─────────────────────────────────────────────── */

const LINKS = [
  { href: "#servicios", label: "Servicios" },
  { href: "#proceso", label: "Cómo trabajamos" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#contacto", label: "Contacto" },
]

// Logo oficial. La versión a color va sobre fondos claros y la blanca sobre
// los oscuros, donde el navy del logo se perdería contra el fondo.
function Logo({ oscuro = false, className = "h-9" }: { oscuro?: boolean; className?: string }) {
  return (
    <a href="#" aria-label="LCL Gestión Empresarial — inicio" className="inline-flex items-center">
      <Image
        src={oscuro ? "/logo-lcl-blanco.png" : "/logo-lcl.png"}
        alt="LCL Gestión Empresarial"
        width={oscuro ? 295 : 326}
        height={oscuro ? 137 : 160}
        priority={!oscuro}
        className={`${className} w-auto`}
      />
    </a>
  )
}

function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-hairline bg-white/85 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Logo />
        <div className="hidden items-center gap-8 md:flex">
          {LINKS.map(l => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-ink/70 transition hover:text-brand-600">
              {l.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <a href={SITE.portalClientes}
            className="hidden text-sm font-medium text-muted transition hover:text-brand-600 lg:block">
            Portal del equipo
          </a>
          <a href="#contacto"
            className="rounded-xl bg-navy-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-navy-800">
            Hablemos
          </a>
        </div>
      </nav>
    </header>
  )
}

/* ── Hero ───────────────────────────────────────────────────── */

function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy-950">
      <div className="absolute inset-0 grid-lines" aria-hidden />
      <div className="absolute inset-0 halo" aria-hidden />

      <div className="relative mx-auto max-w-6xl px-5 py-24 sm:py-32">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-500/25 bg-brand-500/10 px-3.5 py-1.5 text-xs font-semibold text-brand-400">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
            12 años acompañando empresas colombianas
          </span>

          <h1 className="mt-7 text-4xl font-black leading-[1.08] tracking-tight text-white sm:text-6xl">
            Cumplir la norma sin{" "}
            <span className="text-brand-500">frenar la operación</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
            Auditoría, gestión de riesgos y cumplimiento normativo para empresas que no
            se pueden dar el lujo de improvisar. Diseñamos el sistema, lo implementamos
            con su equipo y lo dejamos funcionando.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a href="#contacto"
              className="rounded-xl bg-brand-500 px-6 py-3.5 text-sm font-semibold text-navy-950 transition hover:bg-brand-400">
              Solicitar diagnóstico
            </a>
            <a href="#servicios"
              className="rounded-xl border border-white/15 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-white/35 hover:bg-white/5">
              Ver servicios
            </a>
          </div>

          <div className="mt-14">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-steel">
              Normas y sistemas que trabajamos
            </p>
            <div className="mt-4 flex flex-wrap gap-2.5">
              {NORMAS.map(n => (
                <span key={n}
                  className="rounded-lg border border-white/10 bg-white/[0.04] px-3.5 py-2 text-sm font-semibold text-white/80">
                  {n}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── Cifras ─────────────────────────────────────────────────── */

function Cifras() {
  return (
    <section className="border-b border-hairline bg-surface">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px overflow-hidden px-5 py-12 sm:grid-cols-4">
        {CIFRAS.map(c => (
          <div key={c.etiqueta} className="px-4 text-center">
            <p className="text-3xl font-black tracking-tight text-navy-900 sm:text-4xl">{c.valor}</p>
            <p className="mt-1.5 text-xs font-medium leading-snug text-muted">{c.etiqueta}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

/* ── Encabezado de sección reutilizable ─────────────────────── */

function Titulo({ eyebrow, titulo, texto, claro = false }: {
  eyebrow: string; titulo: string; texto?: string; claro?: boolean
}) {
  return (
    <div className="max-w-2xl">
      <p className={`text-[11px] font-bold uppercase tracking-[0.2em] ${claro ? "text-brand-400" : "text-brand-600"}`}>
        {eyebrow}
      </p>
      <h2 className={`mt-3 text-3xl font-black tracking-tight sm:text-4xl ${claro ? "text-white" : "text-navy-900"}`}>
        {titulo}
      </h2>
      {texto && (
        <p className={`mt-4 text-base leading-relaxed ${claro ? "text-steel" : "text-ink/70"}`}>{texto}</p>
      )}
    </div>
  )
}

/* ── Servicios ──────────────────────────────────────────────── */

function Servicios() {
  return (
    <section id="servicios" className="mx-auto max-w-6xl px-5 py-24">
      <Titulo
        eyebrow="Servicios"
        titulo="Lo que hacemos por su empresa"
        texto="Seis frentes que se pueden tomar por separado o como un acompañamiento completo, según en qué punto esté la organización."
      />

      {/* Servicio bandera: va destacado y a lo ancho, porque es el que
          diferencia a LCL y porque siete tarjetas iguales dejarían una sola
          huérfana en la última fila. */}
      <article className="relative mt-14 overflow-hidden rounded-2xl bg-navy-900 p-8 sm:p-10">
        <div className="absolute inset-0 grid-lines opacity-70" aria-hidden />
        <div className="relative grid gap-8 lg:grid-cols-[1.15fr_1fr] lg:gap-14">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-500/25 bg-brand-500/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.15em] text-brand-400">
              Servicio destacado
            </span>
            <h3 className="mt-5 text-2xl font-black tracking-tight text-white sm:text-3xl">
              {SERVICIO_DESTACADO.titulo}
            </h3>
            <p className="mt-4 text-base leading-relaxed text-steel">{SERVICIO_DESTACADO.resumen}</p>
            <a href="#contacto"
              className="mt-7 inline-block rounded-xl bg-brand-500 px-6 py-3 text-sm font-semibold text-navy-950 transition hover:bg-brand-400">
              Consultar por este servicio
            </a>
          </div>

          <ul className="grid content-start gap-2.5 sm:grid-cols-2 lg:grid-cols-1">
            {SERVICIO_DESTACADO.puntos.map(p => (
              <li key={p}
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3">
                <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-500" />
                <span className="text-sm font-medium text-white/90">{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </article>

      <div className="mt-5 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {SERVICIOS.map((s, i) => (
          <article key={s.titulo}
            className="group rounded-2xl border border-hairline bg-white p-7 transition hover:-translate-y-0.5 hover:border-brand-500/40 hover:shadow-lg hover:shadow-navy-900/5">
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
          </article>
        ))}
      </div>
    </section>
  )
}

/* ── Proceso ────────────────────────────────────────────────── */

function Proceso() {
  return (
    <section id="proceso" className="border-y border-hairline bg-surface">
      <div className="mx-auto max-w-6xl px-5 py-24">
        <Titulo
          eyebrow="Cómo trabajamos"
          titulo="Cuatro etapas, sin sorpresas"
          texto="El mismo método en todos los proyectos: usted sabe siempre en qué etapa va, qué falta y quién responde por cada cosa."
        />

        <ol className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {PROCESO.map((p, i) => (
            <li key={p.titulo} className="relative rounded-2xl border border-hairline bg-white p-7">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-navy-900 text-sm font-black text-brand-500">
                {i + 1}
              </span>
              <h3 className="mt-4 text-base font-bold text-navy-900">{p.titulo}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/70">{p.detalle}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

/* ── Por qué LCL ────────────────────────────────────────────── */

function PorQue() {
  return (
    <section id="nosotros" className="relative overflow-hidden bg-navy-900">
      <div className="absolute inset-0 grid-lines opacity-60" aria-hidden />
      <div className="relative mx-auto max-w-6xl px-5 py-24">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <Titulo
              claro
              eyebrow="Nosotros"
              titulo="Consultoría que se queda hasta que funciona"
              texto="LCL Gestión Empresarial nació para que las certificaciones dejen de ser una carpeta que se arma la semana antes de la auditoría. Trabajamos dentro de la operación, con la gente que la conoce, y dejamos capacidad instalada en el equipo."
            />
            <p className="mt-6 text-base leading-relaxed text-steel">
              Atendemos empresas de transporte, logística, comercio exterior y servicios,
              con presencia en Medellín y Bogotá y acompañamiento virtual en todo el país.
            </p>
          </div>

          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-400">
              Nuestros valores
            </p>
            <div className="mt-5 grid grid-cols-2 gap-3">
              {VALORES.map(v => (
                <div key={v}
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3.5">
                  <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-500" />
                  <span className="text-sm font-semibold text-white/90">{v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── Cobertura ──────────────────────────────────────────────── */

function Cobertura() {
  const sedes = [
    { ciudad: "Medellín", detalle: "Sede principal. Atención presencial en el Valle de Aburrá y Antioquia." },
    { ciudad: "Bogotá", detalle: "Cobertura en la capital y la sabana para auditorías y acompañamiento en sitio." },
    { ciudad: "Toda Colombia", detalle: "Acompañamiento virtual, con visitas presenciales cuando el proyecto lo exige." },
  ]

  return (
    <section className="mx-auto max-w-6xl px-5 py-24">
      <Titulo eyebrow="Cobertura" titulo="Dónde estamos" />
      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {sedes.map(s => (
          <div key={s.ciudad} className="rounded-2xl border border-hairline p-7">
            <h3 className="text-lg font-bold text-navy-900">{s.ciudad}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink/70">{s.detalle}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

/* ── Contacto ───────────────────────────────────────────────── */

function Contacto() {
  const canales = [
    { label: "Teléfono / WhatsApp", valor: SITE.telefono, href: `https://wa.me/${SITE.telefonoE164}` },
    { label: "Correo", valor: SITE.correoComercial, href: `mailto:${SITE.correoComercial}` },
    { label: "Dirección", valor: SITE.direccion },
  ]

  return (
    <section id="contacto" className="border-t border-hairline bg-surface">
      <div className="mx-auto max-w-6xl px-5 py-24">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <Titulo
              eyebrow="Contacto"
              titulo="Empecemos por un diagnóstico"
              texto="Cuéntenos en qué punto está su empresa. Le decimos con claridad qué le falta para la norma que necesita, cuánto toma y qué implica."
            />

            <dl className="mt-10 space-y-6">
              {canales.map(c => (
                <div key={c.label}>
                  <dt className="text-[11px] font-bold uppercase tracking-[0.15em] text-muted">{c.label}</dt>
                  <dd className="mt-1 text-base font-semibold text-navy-900">
                    {c.href
                      ? <a href={c.href} className="transition hover:text-brand-600">{c.valor}</a>
                      : c.valor}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="rounded-2xl border border-hairline bg-white p-7 shadow-sm sm:p-9">
            <ContactoForm />
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── Footer ─────────────────────────────────────────────────── */

function Footer() {
  return (
    <footer className="bg-navy-950">
      <div className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Logo oscuro className="h-11" />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-steel">
              Auditoría, gestión de riesgos y cumplimiento normativo para empresas
              colombianas. {SITE.ciudades}.
            </p>
          </div>

          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-steel/60">Navegación</p>
            <ul className="mt-4 space-y-2.5">
              {LINKS.map(l => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm text-steel transition hover:text-brand-400">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-steel/60">Contacto</p>
            <ul className="mt-4 space-y-2.5 text-sm text-steel">
              <li>
                <a href={`https://wa.me/${SITE.telefonoE164}`} className="transition hover:text-brand-400">
                  {SITE.telefono}
                </a>
              </li>
              <li>
                <a href={`mailto:${SITE.correoComercial}`} className="break-all transition hover:text-brand-400">
                  {SITE.correoComercial}
                </a>
              </li>
              <li>
                <a href={SITE.portalClientes} className="transition hover:text-brand-400">Portal del equipo</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-white/10 pt-8 text-xs text-steel/70 sm:flex-row sm:items-center sm:justify-between">
          <p>{SITE.razonSocial} · NIT {SITE.nit}</p>
          <p>© {new Date().getFullYear()} Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
