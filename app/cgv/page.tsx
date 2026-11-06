export const metadata = { title: "Conditions générales de vente" };
export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-12">
      <a href="/" className="underline text-bleu">Retour à l’accueil</a>
      <h1 className="mt-6 font-titre text-5xl font-extrabold text-bleu">Conditions générales de vente</h1>
      <div className="mt-6 space-y-4">
        <p><strong>Vendeur :</strong> [À COMPLÉTER : raison sociale, SIRET, adresse].</p>
        <p><strong>Service :</strong> Standard, un outil qui propose des réponses aux questions fréquentes des clients d’un professionnel, modifiables avant envoi.</p>
        <p><strong>Prix :</strong> 29 € par mois [À COMPLÉTER : préciser TTC ou HT selon votre régime de TVA]. Paiement par carte via Stripe.</p>
        <p><strong>Accès fondateur :</strong> l’ouverture du service est prévue dans un délai de 7 jours après le paiement.</p>
        <p><strong>Satisfait ou remboursé :</strong> vous pouvez demander le remboursement intégral dans les 30 jours suivant le paiement, en écrivant à [À COMPLÉTER : email]. Le remboursement est effectué sous 5 jours ouvrés.</p>
        <p><strong>Résiliation :</strong> l’abonnement est sans engagement et résiliable à tout moment, avec effet à la fin de la période payée.</p>
        <p><strong>Droit de rétractation :</strong> [À COMPLÉTER : à faire valider, l’acheteur est un professionnel].</p>
        <p><strong>Litiges :</strong> droit français. [À COMPLÉTER : médiateur ou tribunal compétent].</p>
      </div>
    </main>
  );
}
