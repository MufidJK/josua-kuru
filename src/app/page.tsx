import { Hero } from "@/components/birthday/Hero";
import { MessageSection } from "@/components/birthday/MessageSection";
import { PhotoGallery } from "@/components/birthday/PhotoGallery";
import { VideoSection } from "@/components/birthday/VideoSection";
import { SignatureSection } from "@/components/birthday/SignatureSection";
import { Footer } from "@/components/birthday/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-ivory overflow-x-hidden">
      <Hero />
      <MessageSection />
      <PhotoGallery />
      <VideoSection />
      <SignatureSection />
      <Footer />
    </main>
  );
}
