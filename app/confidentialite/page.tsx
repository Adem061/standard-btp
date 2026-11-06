export const metadata = { title: "Politique de confidentialité" };
export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-12">
      <a href="/" className="underline text-bleu">Retour à l’accueil</a>
      <h1 className="mt-6 font-titre text-5xl font-extrabold text-bleu">Politique de confidentialité</h1>
      <div className="mt-6 space-y-4">
        <p><strong>Responsable du traitement :</strong> [À COMPLÉTER : raison sociale, email].</p>
        <p><strong>Données collectées :</strong> votre email et les informations nécessaires au paiement. Les données de carte sont traitées par Stripe et ne passent jamais par nos serveurs.</p>
        <p><strong>Finalités :</strong> vous donner accès au service, gérer votre abonnement, répondre à vos demandes.</p>
        <p><strong>Mesure d’audience :</strong> [À COMPLÉTER : outil retenu, sans cookie et respectueux de la vie privée].</p>
        <p><strong>Vos droits :</strong> accès, rectification, suppression, en écrivant à [À COMPLÉTER : email]. Vous pouvez saisir la CNIL (cnil.fr).</p>
      </div>
    </main>
  );
}
