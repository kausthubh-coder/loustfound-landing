"use client";

import { BellIcon } from "lucide-react";

import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { ConfettiButton } from "@/components/ui/confetti";
import Iphone15Pro from "@/components/ui/iphone-15-pro";
import MorphingText from "@/components/ui/morphing-text";
import PulsatingButton from "@/components/ui/pulsating-button";
import { RainbowButton } from "@/components/ui/rainbow-button";
import RetroGrid from "@/components/ui/retro-grid";
import ScrollProgress from "@/components/ui/scroll-progress";
import { TextAnimate } from "@/components/ui/text-animate";
import { WarpBackground } from "@/components/ui/warp-background";
import WordRotate from "@/components/ui/word-rotate";
import { MapIcon, DashboardIcon } from "@/components/icons";
import { AnimatedList } from "@/components/ui/animated-list";
import { cn } from "@/lib/utils";
import { FeatureSteps } from "@/components/ui/feature-steps";

import mapgif from '../assets/mapgif.gif';
import reportImage from '../assets/reportitem.png';
import trackImage from '../assets/dashbaord-track.png';
import connectImage from '../assets/messages.png';
import dashboardImage from '../assets/dashbaord-featires.png';

interface Item {
  name: string;
  description: string;
  icon: string;
  color: string;
  time: string;
}

let notifications = [
  {
    name: "Item found",
    description: "Your airpods have matches",
    time: "15m ago",
    icon: "❗",
    color: "#00C9A7",
  },
  {
    name: "akhil",
    description: "found your airpods",
    time: "10m ago",
    icon: "💬",
    color: "#FFB800",
  },
  {
    name: "your post has been deleted",
    description: "your post has been deleted",
    time: "5m ago",
    icon: "💬",
    color: "#FF3D71",
  },
];

notifications = Array.from({ length: 5 }, () => notifications).flat();

const Notification = ({ name, description, icon, color, time }: Item) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[300px] cursor-pointer overflow-hidden rounded-xl p-2",
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <div
          className="flex size-8 items-center justify-center rounded-xl"
          style={{
            backgroundColor: color,
          }}
        >
          <span className="text-base">{icon}</span>
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-sm font-medium dark:text-white">
            <span className="text-xs sm:text-sm">{name}</span>
            <span className="mx-1">·</span>
            <span className="text-xs text-gray-500">{time}</span>
          </figcaption>
          <p className="text-xs font-normal dark:text-white/60">
            {description}
          </p>
        </div>
      </div>
    </figure>
  );
};

const features = [
  { 
    step: 'Report Lost Item', 
    title: 'Report Your Lost Item',
    content: 'Quickly report your lost item with details and last known location.', 
    image: reportImage
  },
  { 
    step: 'Track Status',
    title: 'Track Item Status',
    content: 'Monitor your item status and receive instant notifications when found.',
    image: trackImage
  },
  { 
    step: 'Connect & Recover',
    title: 'Connect with Finder',
    content: 'Securely connect with the finder and arrange item recovery.',
    image: connectImage
  },
];

export default function LandingPage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <ScrollProgress />

      {/* Header Section */}
      <header className="relative z-10">
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-6">
          <div className="text-2xl font-bold">Lost & Found</div>
          <div className="flex items-center gap-6">
            <a href="#features">Features</a>
            <a href="https://lostfound-ptpm.vercel.app/">Demo</a>
            <RainbowButton onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              Contact
            </RainbowButton>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-[70vh]">
        <WarpBackground>
          <div className="mx-auto max-w-4xl px-6 py-12">
            <div className="flex flex-col items-center justify-center text-center">
              <WordRotate
                className="text-6xl font-bold"
                words={[
                  "Effortless Lost & Found",
                  "Smart Item Recovery",
                  "Campus-Wide Solutions",
                ]}
              />
              <TextAnimate
                className="mt-6 max-w-2xl text-xl text-muted-foreground"
                animation="blurInUp"
              >
                Revolutionize item recovery with location tracking, messaging,
                and a streamlined dashboard.
              </TextAnimate>
              <div className="mt-8 flex gap-4">
                <ConfettiButton onClick={() => window.location.href = 'https://lostfound-ptpm.vercel.app/'}>
                  Demo
                </ConfettiButton>
                <PulsatingButton onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                  Contact
                </PulsatingButton>
              </div>
            </div>
          </div>
        </WarpBackground>
      </section>

      <section id="how-it-works" className="relative py-4">
        <div className="relative mx-auto max-w-5xl px-6">
          <FeatureSteps 
            features={features}
            title="How It Works"
            autoPlayInterval={4000}
            imageHeight="h-[500px] md:h-[400px]"
            className="md:[&_img]:!object-contain md:[&_.order-1]:!h-[400px]"
          />
        </div>
      </section>


      {/* Features Section */}
      <section id="features" className="relative py-12">
        <AnimatedGridPattern className="absolute inset-0" />
        <div className="relative mx-auto max-w-4xl px-6">
          <TextAnimate
            className="text-center text-5xl font-bold"
            animation="blurInDown"
          >
            Why Choose Us?
          </TextAnimate>
          <BentoGrid className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 [&>*]:mb-8 md:[&>*]:mb-0">
            <BentoCard
              name="Map-Based Tracking"
              description="                          "
              Icon={MapIcon}
              background={
                <div className="absolute inset-0 flex items-start justify-center pt-4">
                  <img 
                    src={mapgif}
                    alt="Map Icon"
                    className="relative z-10 h-72 w-72 rounded-2xl opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              }
              href="https://lostfound-ptpm.vercel.app/"
              cta="Try Now"
              className="col-span-1 min-h-[400px] mb-8 md:mb-0"
            />
            <BentoCard
              name="Secure Messaging"
              description="Connect finders and owners directly through our platform."
              Icon={BellIcon}
              background={
                <div className="absolute inset-0 overflow-hidden">
                  <AnimatedList 
                    delay={800} 
                    className="absolute right-2 top-4 h-[350px] w-full transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105"
                  >
                    {notifications.map((item, idx) => (
                      <Notification {...item} key={idx} />
                    ))}
                  </AnimatedList>
                </div>
              }
              href="https://lostfound-ptpm.vercel.app/"
              cta="Try Now"
              className="col-span-1 min-h-[400px] mb-8 md:mb-0"
            />
            <BentoCard
              name="Dashboard Management"
              description="Keep all records in one place with our powerful dashboard."
              Icon={DashboardIcon}
              background={
                <div className="absolute inset-0 flex items-start justify-center pt-4">
                  <img 
                    src={dashboardImage}
                    alt="Dashboard Features"
                    className="relative z-10 w-full h-full object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-300 
                      max-h-[300px] md:max-h-none md:h-72 md:w-auto rounded-3xl"
                  />
                </div>
              }
              href="https://lostfound-ptpm.vercel.app/"
              cta="Try Now"
              className="col-span-1 min-h-[400px]"
            />
          </BentoGrid>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section id="demo" className="relative py-12">
        <RetroGrid className="absolute inset-0" />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center gap-8">
            <div className="text-4xl font-bold text-center w-full">
              <MorphingText texts={["See It in Action", "Try Now"]} className="w-full" />
            </div>
            <a href="https://lostfound-ptpm.vercel.app/" className="w-full max-w-md">
              <div className="flex items-center justify-center">
                <Iphone15Pro
                  src="https://firebasestorage.googleapis.com/v0/b/lostandfound-uncc.firebasestorage.app/o/lostfound-ptpm.vercel.app_dashboard(iPhone%2014%20Pro%20Max)%20(1).png?alt=media&token=a9708023-2645-451a-bd2b-48fa909af5b4"
                  className="relative z-10 w-full max-w-[300px] hover:scale-105 transition-transform duration-300"
                />
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-12">
        <div className="mx-auto max-w-7xl px-6">
          <TextAnimate
            className="text-center text-4xl font-bold mb-12"
            animation="blurInDown"
          >
            Schedule a Demo
          </TextAnimate>
          <div className="rounded-xl border bg-background/50 backdrop-blur-sm overflow-hidden">
            <iframe
              src="https://calendly.com/kausthubh/lost-and-found"
              width="100%"
              height="700px"
              frameBorder="0"
              title="Schedule a demo"
              className="w-full"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-background py-12">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold">Lost & Found</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Making item recovery effortless for campuses worldwide.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Links</h3>
              <ul className="mt-2 space-y-2">
                <li>
                  <a href="#features">Features</a>
                </li>
                <li>
                  <a href="https://lostfound-ptpm.vercel.app">Demo</a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Legal</h3>
              <ul className="mt-2 space-y-2">
                <li>
                  <a href="/privacy">Privacy Policy</a>
                </li>
                <li>
                  <a href="/terms">Terms of Service</a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Connect</h3>
              <ul className="mt-2 space-y-2">
                <li>kausthubh2007@gmail.com</li>
                <li>9803274282</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
} 