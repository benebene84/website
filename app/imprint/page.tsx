import { Window } from 'app/components/ui/window'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Impressum',
  description: 'Impressum und rechtliche Informationen',
}

export default function Imprint() {
  return (
    <main className="flex flex-col gap-6" id="main">
      <Window
        title="Impressum.txt"
        as="article"
        className="window-animate-in"
        hover
      >
        {/* Document toolbar */}
        <div className="toolbar -mx-4 -mt-4 mb-6 flex items-center gap-3 border-b px-4 py-2">
          <span className="rounded bg-badge-bg px-2 py-0.5 font-mono text-badge-text text-xs">
            .txt
          </span>
          <span className="text-sm">Rechtliche Informationen</span>
        </div>

        <div className="prose prose-sm dark:prose-invert max-w-none" lang="de">
          <h1 className="mb-6 font-semibold text-2xl tracking-tight">
            Impressum
          </h1>

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
              Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle
              der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer
              Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von
              Rechtsverletzungen werden wir derartige Links umgehend entfernen.
            </p>
          </section>
        </div>

        {/* Document footer */}
        <div className="toolbar -mx-4 mt-6 -mb-4 flex items-center justify-between border-t px-4 py-2 text-xs">
          <span>© {new Date().getFullYear()} Benedikt Sperl</span>
          <span>München, Deutschland</span>
        </div>
      </Window>
    </main>
  )
}
