import { getDictionary } from '@/app/[lang]/dictionaries'
import AboutUs from '@/component/about-us'
import CTA from '@/component/cta'
import ExportDestination from '@/component/export-destination'
import FloatWhatsapp from '@/component/float-wa'
import Footer from '@/component/footer'
import Hero from '@/component/hero'
import LocationShowcase from '@/component/location'
import Location from '@/component/location'
import Mission from '@/component/mission'
import Navbar from '@/component/navbar'
import Product from '@/component/product'
import ProductQuality from '@/component/product-quality'
import USP from '@/component/usp'

export default async function Page({
  params,
}: {
  params: Promise<{ lang: 'en' | 'id' }>
}) {
  const { lang } = await params
  const dict = await getDictionary(lang)

  return (
    <main className="font-sans bg-background text-foreground relative">
      <Navbar lang={lang} dict={dict.navbar} />

      <Hero lang={lang} dict={dict.hero} />

      <Product dict={dict.product} lang={lang} />

      <div className="mx-auto">
        <div className="h-[0.5px] w-full bg-secondary" />
      </div>

      <LocationShowcase dict={dict.location} />

      <Footer dict={dict.footer} lang={lang} />

      <div className='w-full flex justify-end px-4'>
        <FloatWhatsapp />
      </div>

      {/* <Mission dict={dict.mission} /> */}
      {/* <AboutUs dict={dict.about} /> */}
      {/* <ProductQuality dict={dict.quality} /> */}
      {/* <USP dict={dict.usp} /> */}
      {/* <ExportDestination dict={dict.exportDestination} /> */}
      {/* <CTA dict={dict.cta} /> */}
    </main>
  )
}