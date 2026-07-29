// Datos de la empresa en un solo lugar: si algo cambia, se cambia acá.
// OJO: cifras y datos tomados del sitio actual y del RUT — Daniel/Laura deben
// confirmarlos antes de publicar.

export const SITE = {
  nombre: "LCL Gestión Empresarial",
  razonSocial: "LCL Gestión Empresarial S.A.S.",
  nit: "901766155-9",
  telefono: "311 745 3541",
  telefonoE164: "573117453541",
  correoComercial: "laura.llano@lclgestionempresarial.com",
  correoAdmin: "contabilidad@lclgestionempresarial.com",
  direccion: "Cra. 84F # 3D-150, Belén, Medellín",
  portalClientes: "https://app.lclgestionempresarial.com",
  ciudades: "Medellín · Bogotá · Virtual en toda Colombia",
} as const

export const CIFRAS = [
  { valor: "12+", etiqueta: "Años de experiencia" },
  { valor: "1.000+", etiqueta: "Horas de auditoría" },
  { valor: "900+", etiqueta: "Horas de formación" },
  { valor: "2", etiqueta: "Sedes: Medellín y Bogotá" },
]

export const NORMAS = ["BASC", "ISO 9001", "SG-SST", "SAGRILAFT", "SARLAFT", "SIPLAFT"]

export const SERVICIOS = [
  {
    titulo: "Auditorías",
    resumen:
      "Auditorías internas y de preparación para el ente certificador, con hallazgos accionables y no con un informe que nadie lee.",
    puntos: ["BASC", "ISO 9001", "SG-SST", "Riesgo LA/FT"],
  },
  {
    titulo: "Certificaciones",
    resumen:
      "Acompañamiento de punta a punta: del diagnóstico inicial hasta obtener el sello y sostenerlo en las renovaciones.",
    puntos: ["Diagnóstico", "Cierre de brechas", "Visita del ente", "Sostenimiento"],
  },
  {
    titulo: "Cumplimiento LA/FT",
    resumen:
      "Diseño e implementación del sistema completo: manual, matriz de riesgo, señales de alerta y reportes al regulador.",
    puntos: ["SAGRILAFT", "SARLAFT", "SIPLAFT", "Reportes UIAF"],
  },
  {
    titulo: "Gestión de riesgos",
    resumen:
      "Identificación, medición y control de los riesgos del negocio, con planes de tratamiento que sí se pueden ejecutar.",
    puntos: ["Matrices", "Controles", "Planes de acción", "Seguimiento"],
  },
  {
    titulo: "Seguridad y salud en el trabajo",
    resumen:
      "Implementación y mantenimiento del SG-SST conforme a la normativa colombiana vigente, listo para inspección.",
    puntos: ["Estándares mínimos", "Plan anual", "Indicadores", "Documentación"],
  },
  {
    titulo: "Formación",
    resumen:
      "Capacitación al equipo para que el sistema viva en la operación y no dependa de un asesor externo permanente.",
    puntos: ["Auditores internos", "Cultura de cumplimiento", "Inducción normativa"],
  },
]

export const PROCESO = [
  {
    titulo: "Diagnóstico",
    detalle: "Revisamos el estado real frente a la norma y le ponemos números a la brecha.",
  },
  {
    titulo: "Diseño e implementación",
    detalle: "Documentación, controles y responsables definidos, adaptados a cómo opera la empresa.",
  },
  {
    titulo: "Auditoría interna",
    detalle: "Verificamos antes de que lo haga el ente certificador y cerramos lo que falte.",
  },
  {
    titulo: "Certificación y sostenimiento",
    detalle: "Acompañamos la visita y dejamos el sistema andando para las renovaciones.",
  },
]

export const VALORES = [
  "Excelencia", "Seguridad", "Transparencia", "Calidad", "Cumplimiento", "Ética",
]
