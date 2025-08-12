import { Headline } from 'app/components/ui/headline'

export default function Imprint() {
  return (
    <section lang="de">
      <Headline id="main">Impressum</Headline>
      <div className="prose prose-sm">
        <p>Angaben gemäß § 5 DDG</p>
        <p className="flex flex-col">
          <span>Benedikt Sperl</span>
          <span>Harthauserstraße 119</span>
          <span>81545 München</span>
        </p>
        <p className="flex flex-col">
          <span>Vertreten durch:</span>
          <span>Benedikt Sperl</span>
          <span>E-Mail: benedikt.sperl@gmail.com</span>
        </p>
        <p>
          Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV: Benedikt Sperl
          Harthauserstraße 119 81545 München
        </p>
        <p>Haftungsausschluss:</p>
        <p>Haftung für Links</p>
        <p>
          Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren
          Inhalte wir keinen Einfluss haben. Deshalb können wir für diese
          fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
          verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der
          Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der
          Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige
          Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine
          permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne
          konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei
          Bekanntwerden von Rechtsverletzungen werden wir derartige Links
          umgehend entfernen.
        </p>
      </div>
    </section>
  )
}
