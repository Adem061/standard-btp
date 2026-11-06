"use client";
import Link from "next/link";
export default function Erreur({ reset }: { error: Error; reset: () => void }) {
  return (
    <main className="mx-auto max-w-3xl px-5 py-20">
      <h1 className="font-titre text-5xl font-extrabold text-bleu">Un problème est survenu.</h1>
      <p className="mt-4">Rien n’a été perdu. Réessayez, ou revenez à l’accueil.</p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <button onClick={() => reset()} className="min-h-14 bg-jaune px-6 font-titre text-2xl font-bold text-bleu">Réessayer</button>
        <Link href="/" className="inline-flex min-h-14 items-center border-2 border-bleu px-6 font-titre text-2xl font-bold text-bleu">Retour à l’accueil</Link>
      </div>
    </main>
  );
}
