import About from '@/components/About';
import Header from '@/components/Header'
import Hero from '@/components/Hero';
import Image from 'next/image'

export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] h-screen text-white snap-y snap-mandatory overflow-scroll z-0">
    
      <Header />
      {/* hero */}
      <section className=' mt-36 pt-24 snap-start' id="hero">
        <Hero />
      </section>

      {/* about */}
<section id="about" className='pt-24 snap-center'>
  <About  />
</section>
      {/* experiecne */}

      {/* skills */}

      {/* projects */}

      {/* contact me */}
    </div>
  );
}
