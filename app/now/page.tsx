import Nav from '../../components/Nav'
import Footer from '../../components/Footer'

export const metadata = { title: 'Now — Shreyash Bhatkar' }

export default function NowPage(){
  return (
    <div>
      <Nav/>
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4">
          <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">Now</h1>
          <p className="mt-3 text-sm text-zinc-700 dark:text-zinc-300">
            What I’m focused on right now.
          </p>
          <ul className="mt-4 list-disc pl-5 text-sm text-zinc-700 dark:text-zinc-300">
            <li>Java/Kotlin microservices on OCI for Batelco.</li>
            <li>LangChain + Cohere docs agent to speed API onboarding.</li>
            <li>Writing notes on cloud observability & on‑device ML.</li>
          </ul>
        </div>
      </section>
      <Footer/>
    </div>
  )
}