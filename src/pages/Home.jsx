import ThemeToggle from '../components/ThemeToggle.jsx'
import StarBackGround from '../components/StarBackGround'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import AboutMe from '../components/AboutMe'
import { SkillsSection } from "@/components/SkillsSection";
import { ProjectsSection } from '../components/ProjectSection'
import { ContactSection } from '../components/ContactSection.jsx'
const Home = () => {
  return (
    <div className='min-h-screen bg-background text-foreground overflow-x-hidden'>
    {/* Theme Toggle */}
    <ThemeToggle/>


    {/* BackGround Effect */}
    <StarBackGround/>

    
    {/* Navbar */}
    <Navbar/>

    {/* Main Content */}
    <main>
      <HeroSection/>
      <AboutMe/>
      <SkillsSection/>
      <ProjectsSection/>
      <ContactSection/>

    </main>

    {/* Footer */}
    </div>
  )
}

export default Home