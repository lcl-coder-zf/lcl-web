import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lclgestionempresarial.com"),
  title: {
    default: "LCL Gestión Empresarial | Auditoría, cumplimiento y certificación",
    template: "%s | LCL Gestión Empresarial",
  },
  description:
    "Consultoría en auditoría, gestión de riesgos, gestión legal y cumplimiento normativo en Colombia. BASC, ISO 9001, SARLAFT y PTEE. Medellín, Bogotá y acompañamiento virtual en todo el país.",
  keywords: [
    "auditoría BASC", "certificación ISO 9001", "SARLAFT", "PTEE",
    "gestión legal", "cumplimiento normativo", "Medellín", "Itagüí", "Colombia",
  ],
  openGraph: {
    type: "website",
    locale: "es_CO",
    siteName: "LCL Gestión Empresarial",
    title: "LCL Gestión Empresarial | Auditoría, cumplimiento y certificación",
    description:
      "Más de 12 años acompañando empresas colombianas en auditoría, gestión de riesgos y cumplimiento normativo.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-CO" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
