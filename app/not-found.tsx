import Link from "next/link";
export default function NotFound() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-20">
      <h1 className="font-titre text-5xl font-extrabold text-bleu">Cette page n’existe pas.</h1>
      <p className="mt-4">Le lien est peut-être erroné ou la page a été déplacée.</p>
      <Link href="/" className="mt-8 inline-flex min-h-14 items-center bg-jaune px-6 font-titre text-2xl font-bold text-bleu">Retour à l’accueil</Link>
    </main>
  );
}
