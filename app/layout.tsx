import type { Metadata, Viewport } from "next";
import { Barlow_Condensed, Source_Sans_3 } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const titre = Barlow_Condensed({ subsets: ["latin"], weight: ["700", "800"], variable: "--font-titre", display: "swap" });
const texte = Source_Sans_3({ subsets: ["latin"], weight: ["400", "600", "700"], variable: "--font-texte", display: "swap" });

const url = process.env.NEXT_PUBLIC_SITE_URL || "https://standard-btp.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title: "Standard : vos réponses aux clients en un clic",
  description: "Les mêmes dix questions reviennent tous les jours ? Standard propose la bonne réponse en un clic, vous la modifiez, vous envoyez.",
  openGraph: {
    title: "Standard : vos réponses aux clients en un clic",
    description: "Artisans du bâtiment : arrêtez de retaper les mêmes réponses tous les jours.",
    type: "website",
    locale: "fr_FR",
  },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#14213D" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${titre.variable} ${texte.variable}`}>
      <body className="font-texte text-lg leading-relaxed antialiased">
        {children}
        <footer className="border-t border-bleu/20 bg-papier px-5 pb-28 pt-8 text-base text-bleu md:pb-10">
          <div className="mx-auto flex max-w-3xl flex-wrap gap-x-6 gap-y-2">
            <Link className="underline" href="/mentions-legales">Mentions légales</Link>
            <Link className="underline" href="/cgv">Conditions générales de vente</Link>
            <Link className="underline" href="/confidentialite">Confidentialité</Link>
          </div>
        </footer>
      </body>
    </html>
  );
}
