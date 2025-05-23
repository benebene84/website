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
          <span>E-Mail: benedikt.sperl@googlemail.com</span>
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
        {/* 
      <p>Google Analytics</p>
      <p>
        Diese Website benutzt Google Analytics, einen Webanalysedienst der
        Google Inc. (''Google''). Google Analytics verwendet sog. ''Cookies'',
        Textdateien, die auf Ihrem Computer gespeichert werden und die eine
        Analyse der Benutzung der Website durch Sie ermöglicht. Die durch den
        Cookie erzeugten Informationen über Ihre Benutzung dieser Website
        (einschließlich Ihrer IP-Adresse) wird an einen Server von Google in den
        USA übertragen und dort gespeichert. Google wird diese Informationen
        benutzen, um Ihre Nutzung der Website auszuwerten, um Reports über die
        Websiteaktivitäten für die Websitebetreiber zusammenzustellen und um
        weitere mit der Websitenutzung und der Internetnutzung verbundene
        Dienstleistungen zu erbringen. Auch wird Google diese Informationen
        gegebenenfalls an Dritte übertragen, sofern dies gesetzlich
        vorgeschrieben oder soweit Dritte diese Daten im Auftrag von Google
        verarbeiten. Google wird in keinem Fall Ihre IP-Adresse mit anderen
        Daten der Google in Verbindung bringen. Sie können die Installation der
        Cookies durch eine entsprechende Einstellung Ihrer Browser Software
        verhindern; wir weisen Sie jedoch darauf hin, dass Sie in diesem Fall
        gegebenenfalls nicht sämtliche Funktionen dieser Website voll umfänglich
        nutzen können. Durch die Nutzung dieser Website erklären Sie sich mit
        der Bearbeitung der über Sie erhobenen Daten durch Google in der zuvor
        beschriebenen Art und Weise und zu dem zuvor benannten Zweck
        einverstanden.
      </p>
      */}
      </div>
    </section>
  )
}
