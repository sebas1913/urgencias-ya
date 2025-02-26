import type { Metadata } from "next";
import { Raleway } from "next/font/google"; 
import { AuthProvider } from "./authProvider";
import "../styles/globals.scss";

const font = Raleway({
    variable: "--font-principal",
    subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Urgencias Ya - Encuentra atención médica inmediata",
  description: "Accede rápidamente a información sobre los centros de urgencias más cercanos según tu EPS y ubicación. Encuentra atención médica en momentos críticos.",
  keywords: ["Urgencias", "Atención médica", "EPS", "Hospitales", "Centros de salud", "Emergencias", "Salud"],
  authors: [{ name: "Urgencias Ya", url: "" }],
  openGraph: {
      title: "Urgencias Ya - Encuentra atención médica inmediata",
      description: "Nuestra plataforma te ayuda a ubicar el centro de urgencias más cercano y menos congestionado según tu EPS y municipio.",
      url: "",
      siteName: "Urgencias Ya",
      locale: "es_CO",
      type: "website",
  },
  icons: {
      icon: "/favicon.svg",
  }
};


export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="es">
            <body className={font.className}>
                <AuthProvider>
                    {children}
                </AuthProvider>
            </body>
        </html>
    );
}
