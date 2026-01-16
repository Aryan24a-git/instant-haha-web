"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import canvasConfetti from "canvas-confetti";
import { Coffee, Instagram, Facebook, Youtube, Heart, TrendingUp, Users } from "lucide-react";

import { NeoButton } from "@/components/NeoButton";
import { Marquee } from "@/components/Marquee";
import { BentoGrid, BentoCard } from "@/components/BentoGrid";
import { ReelCard } from "@/components/ReelCard";
import { TeamMember } from "@/components/TeamMember";
import { MerchCard } from "@/components/MerchCard";
import { FollowModal } from "@/components/FollowModal";

export default function Home() {
  const [likes, setLikes] = useState(125400);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Auto-increment likes for "live" feel
  useEffect(() => {
    const interval = setInterval(() => {
      setLikes((prev) => prev + Math.floor(Math.random() * 5));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const handleConfetti = () => {
    canvasConfetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#39FF14", "#FF69B4", "#8A2BE2"],
    });
  };

  return (
    <div className="min-h-screen overflow-x-hidden flex flex-col font-baloo">
      <FollowModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center text-center p-4 border-b-4 border-neo-black bg-neo-yellow/20">

        {/* Floating MEME Elements */}
        <FloatingElement emoji="🥟" className="absolute top-20 left-10 md:left-40 text-6xl rotate-12" delay={0} />
        <FloatingElement emoji="😹" className="absolute bottom-40 right-10 md:right-40 text-6xl -rotate-12" delay={1} />
        <FloatingElement emoji="🔥" className="absolute top-40 right-20 text-5xl rotate-6" delay={0.5} />
        <FloatingElement emoji="🐸" className="absolute bottom-20 left-20 text-5xl -rotate-6" delay={1.5} />

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="relative z-10"
        >
          <span className="font-bungee text-neo-purple text-xl md:text-2xl mb-2 block rotate-2">Daily Dose of Comedy</span>
          <h1 className="text-6xl md:text-9xl font-black mb-4 font-bungee text-neo-black drop-shadow-[5px_5px_0px_#39FF14]">
            INSTANT <br className="md:hidden" /> HAHA
          </h1>
          <p className="text-xl md:text-3xl font-bold mb-8 bg-white px-4 py-2 inline-block border-2 border-neo-black shadow-neo-sm -rotate-1">
            Short videos | Big laughs | <span className="opacity-70 text-sm md:text-xl">Reels that make you smile</span>
          </p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.1, rotate: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          <NeoButton
            onClick={() => {
              handleConfetti();
              setIsModalOpen(true);
            }}
            className="text-xl md:text-2xl px-8 py-4 bg-neo-green text-neo-black hover:bg-green-400"
          >
            Follow for হাসির গ্যারান্টি... 🤪
          </NeoButton>
        </motion.div>
      </section>

      {/* MARQUEE SEPARATOR */}
      <Marquee text="CHAAP NISH NA just CHILL • JIBON TA TEJPATTA • PORASHONA KORE KEU BOROLOK HOY NI" />

      {/* ABOUT SECTION (KE AMRA?) */}
      <section className="py-20 px-4 bg-white">
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-7xl font-bungee mb-4 text-neo-pink drop-shadow-[3px_3px_0px_#000] stroke-black">
            KE AMRA?
          </h2>
        </div>

        <BentoGrid>
          <BentoCard
            title="Relatable AF"
            description="We post content that hurts because it's true. Bangali Ma, Baba, and Shona - everyone is roasted equally."
            icon={<TrendingUp className="w-12 h-12 text-neo-blue" />}
            className="bg-neo-yellow/30"
          />
          <BentoCard
            title="The Instant Life"
            description="99% Instant, 1% Content Creation. Our admin team works from bed."
            cols={3}
            icon={<Coffee className="w-12 h-12 text-neo-black" />}
            className="bg-neo-pink/30"
          />
        </BentoGrid>
      </section>

      {/* MARQUEE SEPARATOR */}
      <Marquee text="BENGALI MEMES • INSTANT HAHA • KOLKATA VIBES • FUN UNLIMITED" speed={25} className="bg-neo-pink border-y-4 border-neo-black" />

      {/* CONTENT SHOWCASE (MAAL MOSLA) */}
      <section className="py-20 bg-neo-black/5 overflow-hidden">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl md:text-7xl font-bungee mb-12 text-center text-neo-black">
            MAAL MOSLA
          </h2>

          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            <ReelCard
              title="Watch on Instagram"
              category="INSTA REEL"
              color="bg-neo-purple"
              platform="instagram"
              thumbnail="/thumbnails/insta.png"
              href="https://www.instagram.com/reel/DTXvvdzj01y/?igsh=Njd2YW1yeGxnZTls"
              className="-rotate-2 hover:rotate-0 hover:z-10"
            />
            <ReelCard
              title="Watch on Facebook"
              category="FB VIDEO"
              color="bg-neo-blue"
              platform="facebook"
              thumbnail="/thumbnails/fb.png"
              href="https://www.facebook.com/reel/1213784450892531/?mibextid=rS40aB7S9Ucbxw6v"
              className="rotate-2 hover:rotate-0 hover:z-10 mt-10 md:mt-0"
            />
            <ReelCard
              title="Watch on YouTube"
              category="YT SHORTS"
              color="bg-red-400"
              platform="youtube"
              thumbnail="/thumbnails/yt.png"
              href="https://youtube.com/shorts/hBWNUG7vK2I?si=BYwyv0I-Nz_-ljM9"
              className="-rotate-1 hover:rotate-0 hover:z-10"
            />
          </div>
        </div>
      </section>

      {/* TEAM SECTION (THE MASTERMINDS) */}
      <section className="py-20 bg-white border-t-4 border-neo-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl md:text-7xl font-bungee mb-12 text-neo-purple drop-shadow-[3px_3px_0px_#000]">
            THE MASTERMINDS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <TeamMember name="Wahid" role="Lead Actor & Owner" instagram="https://www.instagram.com/itz_ahii_23?igsh=bnplOHg0Mnpjd29x" />
            <TeamMember name="Emon" role="Lead Co-Actor" instagram="https://www.instagram.com/i_am_emon_01?igsh=bm11ZGp2bmtibzJi" color="bg-neo-green" />
            <TeamMember name="Sakil" role="Editor & Cameraman" instagram="https://www.instagram.com/sk_s.02?igsh=a2ZrenozdWRremRk" color="bg-neo-blue" />
            <TeamMember name="Aryan" role="Backend & Tech Support" instagram="https://www.instagram.com/aryan_24a?igsh=d251eHRsZTA1dmly" color="bg-neo-pink" />
            <TeamMember name="Koushik" role="Actor" instagram="https://www.instagram.com/dead__boy___00?igsh=MWg5MmJxeTR1amY0MA==" />
            <TeamMember name="Aslam" role="Actor" instagram="https://www.instagram.com/_ashu._079?igsh=aGk0Y21yZnRubnpl" color="bg-neo-yellow" />
          </div>
        </div>
      </section>

      {/* MERCH SECTION (BAJAR) */}
      <section className="py-20 bg-neo-green/20 border-t-4 border-neo-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl md:text-7xl font-bungee mb-12 text-neo-black">
            BAJAR <span className="text-2xl block font-baloo mt-2">(Market)</span>
          </h2>
          <div className="flex justify-center">
            <MerchCard />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-neo-black text-white py-12 border-t-4 border-neo-black">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bungee text-neo-yellow mb-2">INSTANT HAHA</h2>
            <p className="font-baloo text-gray-400">© 2024 Instant Haha. Made with Instant Lyadh.</p>
          </div>

          <div className="flex gap-6">
            <SocialLink href="https://www.instagram.com/instant_haha?igsh=MWc1amsya3BrOGdxbQ==" icon={<Instagram />} label="Instagram" color="hover:text-neo-pink" />
            <SocialLink href="https://www.facebook.com/profile.php?id=61585844837775" icon={<Facebook />} label="Facebook" color="hover:text-neo-blue" />
            <SocialLink href="https://m.youtube.com/@instanthaha_official" icon={<Youtube />} label="YouTube" color="hover:text-red-500" />
          </div>
        </div>
      </footer>
    </div>
  );
}

// Helper Components

const FloatingElement = ({ emoji, className, delay }: { emoji: string, className: string, delay: number }) => (
  <motion.div
    className={className}
    animate={{ y: [0, -20, 0] }}
    transition={{ repeat: Infinity, duration: 3, delay: delay, ease: "easeInOut" }}
    whileHover={{ scale: 1.2, rotate: 180 }}
  >
    {emoji}
  </motion.div>
);

const SocialLink = ({ href, icon, label, color }: { href: string, icon: React.ReactNode, label: string, color: string }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`p-3 border-2 border-white bg-neo-black text-white transition-all ${color}`}
    aria-label={label}
    whileHover={{ scale: 1.2, rotate: 10 }}
    whileTap={{ scale: 0.9 }}
  >
    {icon}
  </motion.a>
);
