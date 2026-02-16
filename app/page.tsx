import { Nav } from '@/components/Nav';
import { Hero } from '@/components/Hero';
import { Skills } from '@/components/Skills';
import { Projects } from '@/components/Projects';
import { About } from '@/components/About';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <About />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
