import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { Stats } from '@/components/stats';
import { Painkiller } from '@/components/painkiller';
import { Concept } from '@/components/concept';
import { FeaturesNew } from '@/components/features-new';
import { AiApp } from '@/components/ai-app';
import { VideoDemo } from '@/components/video-demo';
import { FutureApp } from '@/components/future-app';
import { Differentiation } from '@/components/economics';
import { SocialProof } from '@/components/social-proof';
import { ChatDemo } from '@/components/chat-demo';
import { Contact } from '@/components/contact';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Stats />
        <Painkiller />
        <Concept />
        <FeaturesNew />
        <AiApp />
        <VideoDemo />
        <FutureApp />
        <Differentiation />
        <SocialProof />
        <ChatDemo />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
