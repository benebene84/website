import { PageContainer } from 'app/components/ui/page-container'
import { createMetadata } from 'app/utils/metadata'
import type { Metadata } from 'next'

export const metadata: Metadata = createMetadata({
  title: 'Impressum',
  description: 'Impressum und rechtliche Informationen',
  path: '/imprint',
})

export default function Imprint() {
  return (
    <main className="page-animate-in" id="main">
      <PageContainer>
        <article lang="de">
          <h1 className="mb-8 font-serif text-3xl font-medium tracking-tight">
            Impressum
          </h1>

          <div className="prose max-w-none">
            <section className="mb-6">
              <p className="text-text-primary mb-2 font-medium">
                Angaben gemäß § 5 DDG
              </p>
              <address className="text-text-secondary flex flex-col not-italic">
                <span>Benedikt Sperl</span>
                <span>Harthauserstraße 119</span>
                <span>81545 München</span>
              </address>
            </section>

            <section className="mb-6">
              <p className="text-text-primary mb-2 font-medium">
                Vertreten durch:
              </p>
              <div className="text-text-secondary flex flex-col">
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
              <p className="text-text-primary mb-2 font-medium">
                Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:
              </p>
              <address className="text-text-secondary flex flex-col not-italic">
                <span>Benedikt Sperl</span>
                <span>Harthauserstraße 119</span>
                <span>81545 München</span>
              </address>
            </section>

            <section className="border-border-default bg-bg-secondary rounded-lg border p-4">
              <h2 className="text-text-primary mb-3 text-lg font-semibold">
                Haftungsausschluss
              </h2>
              <h3 className="text-text-primary mb-2 font-medium">
                Haftung für Links
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
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
