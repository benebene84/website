import { PageContainer } from 'app/components/ui/page-container'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Impressum',
  description: 'Impressum und rechtliche Informationen',
}

export default function Imprint() {
  return (
    <main className="page-animate-in" id="main">
      <PageContainer>
        <article lang="de">
          <h1 className="mb-8 font-semibold text-3xl tracking-tight">
            Impressum
          </h1>

          <div className="prose max-w-none">
            <section className="mb-6">
              <p className="mb-2 font-medium text-text-primary">
                Angaben gemäß § 5 DDG
              </p>
              <address className="flex flex-col text-text-secondary not-italic">
                <span>Benedikt Sperl</span>
                <span>Harthauserstraße 119</span>
                <span>81545 München</span>
              </address>
            </section>

            <section className="mb-6">
              <p className="mb-2 font-medium text-text-primary">
                Vertreten durch:
              </p>
              <div className="flex flex-col text-text-secondary">
                <span>Benedikt Sperl</span>
                <span>
                  E-Mail:{' '}
                  <a
                    href="mailto:benedikt.sperl@gmail.com"
                    className="text-accent hover:underline"
                  >
                    benedikt.sperl@gmail.com
                  </a>
                </span>
              </div>
            </section>

            <section className="mb-6">
              <p className="mb-2 font-medium text-text-primary">
                Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:
              </p>
              <address className="flex flex-col text-text-secondary not-italic">
                <span>Benedikt Sperl</span>
                <span>Harthauserstraße 119</span>
                <span>81545 München</span>
              </address>
            </section>

            <section className="rounded-lg border border-border-default bg-bg-secondary p-4">
              <h2 className="mb-3 font-semibold text-lg text-text-primary">
                Haftungsausschluss
              </h2>
              <h3 className="mb-2 font-medium text-text-primary">
                Haftung für Links
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                Unser Angebot enthält Links zu externen Webseiten Dritter, auf
                deren Inhalte wir keinen Einfluss haben. Deshalb können wir für
                diese fremden Inhalte auch keine Gewähr übernehmen. Für die
                Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter
                oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten
                wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße
                überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der
                Verlinkung nicht erkennbar. Eine permanente inhaltliche
                Kontrolle der verlinkten Seiten ist jedoch ohne konkrete
                Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei
                Bekanntwerden von Rechtsverletzungen werden wir derartige Links
                umgehend entfernen.
              </p>
            </section>
          </div>
        </article>
      </PageContainer>
    </main>
  )
}
