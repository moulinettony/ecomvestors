import Announcement from '@/app/components/announcement'
import FrequentlyAskedQuestions from '@/app/components/faq'
import ContactForm from '@/app/components/form'
import HeroSection from '@/app/components/hero-section'
import MasterProgram from '@/app/components/master-program'
import Question from '@/app/components/question'
import TheOldWay from '@/app/components/the-old-way'
import WhosMe from '@/app/components/whos-me'
import Wins from '@/app/components/wins'
import NewHeroSection from './components/new-hero-description'
import PricingSection from '@/app/components/pricing'

export default function Home() {
    return (
        <main className="flex min-h-screen w-full flex-col items-center justify-between overflow-hidden">
            <Announcement />
            <HeroSection />
            <NewHeroSection />
            <TheOldWay />
            <MasterProgram />
            <WhosMe />
            <Wins />
            <PricingSection />
            <FrequentlyAskedQuestions />
            <Question />
            <ContactForm />
        </main>
    )
}
