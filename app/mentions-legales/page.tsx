export const metadata = { title: "Mentions légales" };
export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-12">
      <a href="/" className="underline text-bleu">Retour à l’accueil</a>
      <h1 className="mt-6 font-titre text-5xl font-extrabold text-bleu">Mentions légales</h1>
      <div className="mt-6 space-y-4">
        <p><strong>Éditeur du site :</strong> [À COMPLÉTER : raison sociale ou nom et prénom], [À COMPLÉTER : forme juridique], SIRET [À COMPLÉTER].</p>
        <p><strong>Adresse :</strong> [À COMPLÉTER : adresse postale]. <strong>Contact :</strong> [À COMPLÉTER : email].</p>
        <p><strong>Directeur de la publication :</strong> [À COMPLÉTER].</p>
        <p><strong>Hébergeur :</strong> Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis.</p>
      </div>
    </main>
  );
}
