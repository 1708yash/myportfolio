import Header from '@/components/Header'
import Hero from '@/components/Hero';
import Image from 'next/image'

export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] h-screen text-white snap-y snap-mandatory overflow-scroll z-0">
      <Header />
      {/* hero */}
      <section className='snap-center' id="hero">
        <Hero />
      </section>

      {/* about */}

      {/* experiecne */}

      {/* skills */}

      {/* projects */}

      {/* contact me */}
    </div>
  );
}
