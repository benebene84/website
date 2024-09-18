import { Headline } from './components/ui/headline'

export default function NotFound() {
  return (
    <section id="main">
      <Headline>404 - Page Not Found</Headline>
      <p className="mb-4">The page you are looking for does not exist.</p>
    </section>
  )
}
