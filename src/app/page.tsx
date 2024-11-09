import Header from '@/components/Header'
import Hero from '@/components/Hero'
import ValueProposition from '@/components/ValueProposition'
import ServicesGrid from '@/components/ServicesGrid'
import ProductsShowcase from '@/components/ProductsShowcase'
import Locations from '@/components/Locations'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main>
        <Hero />
        <ValueProposition />
        <ServicesGrid />
        <ProductsShowcase />
        <Locations />
      </main>
      <Footer />
    </div>
  )
}