import { PRODUIT_OUVERT, LIEN_PAIEMENT } from "./config";

const ACCES = "#acces";

function Bouton({ className = "" }: { className?: string }) {
  return (
    <a
      href={ACCES}
      className={`inline-flex min-h-14 w-full items-center justify-center bg-jaune px-6 py-3 text-center font-titre text-2xl font-bold text-bleu active:translate-y-px md:w-auto ${className}`}
    >
      Commencer, c’est gratuit
    </a>
  );
}

export default function Accueil() {
  return (
    <main>
      <section className="bg-bleu px-5 pb-12 pt-10 text-papier">
        <div className="mx-auto max-w-3xl">
          <p className="font-semibold text-jaune">Standard, pour les artisans du bâtiment</p>
          <h1 className="mt-3 font-titre text-5xl font-extrabold leading-[0.95] md:text-7xl">
            Arrêtez de retaper les mêmes réponses à vos clients.
          </h1>
          <p className="mt-5 max-w-xl text-xl">
            Prix d’un déplacement, délai d’un devis, zone d’intervention : les mêmes questions reviennent chaque jour.
            Standard propose la bonne réponse en un clic. Vous la relisez, vous envoyez.
          </p>

          <div className="mt-8 max-w-md space-y-3" aria-label="Exemple de conversation">
            <p className="ml-0 mr-10 bg-papier px-4 py-3 text-encre">Bonjour, vous prenez combien pour changer un chauffe-eau ?</p>
            <div className="ml-10 mr-0 border-2 border-jaune px-4 py-3">
              <p className="font-semibold text-jaune">Réponse proposée</p>
              <p className="mt-1">Bonjour, le remplacement d’un chauffe-eau se fait en général en une demi-journée. Je passe voir sur place pour vous donner un prix exact, sans frais de déplacement dans le secteur.</p>
              <p className="mt-3 inline-block bg-jaune px-4 py-2 font-bold text-bleu">Envoyer</p>
            </div>
          </div>

          <div className="mt-8"><Bouton /></div>
          <p className="mt-3 text-base opacity-80">Aucune carte demandée pour commencer.</p>
        </div>
      </section>

      <section className="px-5 py-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-titre text-4xl font-bold text-bleu">Ce que ça vous coûte aujourd’hui</h2>
          <p className="mt-3">
            Exemple : 10 messages par jour, 3 minutes pour chacun. Cela fait 30 minutes par jour, soit environ 10 heures par mois
            passées à retaper des réponses que vous connaissez par cœur. Ce temps n’est facturé à personne.
          </p>
          <ul className="mt-8 space-y-6">
            <li className="border-l-4 border-jaune pl-4">
              <h3 className="font-titre text-2xl font-bold text-bleu">Votre base de réponses en dix minutes</h3>
              <p>Vous saisissez vos questions habituelles et vos réponses une fois pour toutes.</p>
            </li>
            <li className="border-l-4 border-jaune pl-4">
              <h3 className="font-titre text-2xl font-bold text-bleu">Une réponse en un clic, que vous gardez la main dessus</h3>
              <p>Standard choisit la réponse adaptée. Vous la modifiez si besoin, puis vous envoyez.</p>
            </li>
            <li className="border-l-4 border-jaune pl-4">
              <h3 className="font-titre text-2xl font-bold text-bleu">Les nouvelles questions ne vous échappent pas</h3>
              <p>Quand un client pose une question absente de votre base, Standard vous propose de l’ajouter.</p>
            </li>
          </ul>
        </div>
      </section>

      <section id="acces" className="scroll-mt-4 bg-white px-5 py-12">
        <div className="mx-auto max-w-3xl">
          {PRODUIT_OUVERT ? (
            <>
              <h2 className="font-titre text-4xl font-bold text-bleu">Standard, votre abonnement</h2>
              <p className="mt-6 font-titre text-6xl font-extrabold text-bleu">29 € <span className="text-2xl font-bold">par mois</span></p>
              <p className="text-base">Soit environ 1 € par jour.</p>
              <ul className="mt-5 space-y-2">
                <li><strong>Satisfait ou remboursé 30 jours.</strong> Écrivez-nous, nous vous remboursons sous 5 jours ouvrés.</li>
                <li><strong>Sans engagement</strong>, résiliable à tout moment.</li>
              </ul>
              <a href={LIEN_PAIEMENT} className="mt-6 inline-flex min-h-14 w-full items-center justify-center bg-jaune px-6 py-3 font-titre text-2xl font-bold text-bleu md:w-auto">
                S’abonner, 29 € par mois
              </a>
            </>
          ) : (
            <>
              <h2 className="font-titre text-4xl font-bold text-bleu">Standard ouvre bientôt</h2>
              <p className="mt-3">Standard est en cours de finalisation. L’inscription n’est pas encore ouverte.</p>
            </>
          )}
        </div>
      </section>

      <div className="fixed inset-x-0 bottom-0 border-t border-bleu/20 bg-papier p-3 md:hidden">
        <Bouton />
      </div>
    </main>
  );
}
