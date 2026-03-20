import { useNavigate } from "@tanstack/react-router";
import { motion } from "motion/react";
import { DogSVG } from "../components/DogSVG";

const FEATURED_DOGS = [
  {
    breed: "labrador",
    color: "golden",
    eyes: "round",
    markings: "none",
    name: "Biscuit",
    emoji: "🌟",
  },
  {
    breed: "husky",
    color: "gray",
    eyes: "wide",
    markings: "none",
    name: "Nova",
    emoji: "❄️",
  },
  {
    breed: "corgi",
    color: "golden",
    eyes: "round",
    markings: "patches",
    name: "Pudding",
    emoji: "🍮",
  },
  {
    breed: "dalmatian",
    color: "white",
    eyes: "round",
    markings: "spots",
    name: "Dot",
    emoji: "⚡",
  },
  {
    breed: "poodle",
    color: "white",
    eyes: "sleepy",
    markings: "none",
    name: "Coco",
    emoji: "☕",
  },
  {
    breed: "shiba",
    color: "golden",
    eyes: "round",
    markings: "none",
    name: "Mochi",
    emoji: "🍡",
  },
];

const HOW_IT_WORKS = [
  {
    step: "01",
    icon: "🐕",
    title: "Choose your breed",
    desc: "Pick from 8 lovable dog breeds — each with a unique shape and personality.",
  },
  {
    step: "02",
    icon: "🎨",
    title: "Customize traits",
    desc: "Set color, eye style, and markings to make your dog one of a kind.",
  },
  {
    step: "03",
    icon: "✏️",
    title: "Name your dog",
    desc: "Give your dog a name that will be stored on-chain forever.",
  },
  {
    step: "04",
    icon: "✨",
    title: "Mint and collect",
    desc: "Your dog is stored permanently on the Internet Computer, tied to your identity.",
  },
];

export function HomePage() {
  const navigate = useNavigate();

  return (
    <main className="flex flex-col">
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="hero-pattern bg-hero text-hero-foreground py-20 sm:py-28 px-5">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-7">
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 bg-white/10 border border-white/15 px-4 py-2 rounded-full"
          >
            <span className="text-base">🐾</span>
            <span className="text-xs font-bold tracking-[0.15em] uppercase">
              Galactic Dogs
            </span>
            <span className="ml-1 px-2 py-0.5 bg-white/15 rounded-full text-[10px] font-extrabold tracking-wide">
              ICP
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="text-5xl sm:text-6xl md:text-7xl font-display font-extrabold leading-[1.05] tracking-tight"
          >
            Mint Your{" "}
            <span className="relative">
              <span className="text-white/30">Dream</span>
              <span className="absolute inset-0 bg-gradient-to-r from-yellow-200 to-amber-300 bg-clip-text text-transparent">
                Dream
              </span>
            </span>{" "}
            Dog.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.18 }}
            className="text-lg sm:text-xl text-hero-foreground/75 max-w-lg leading-relaxed"
          >
            Choose a breed. Customize every trait. Name it yours. Stored forever
            on the Internet Computer.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.28 }}
            className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto"
          >
            <button
              type="button"
              onClick={() => navigate({ to: "/create" })}
              data-ocid="home.primary_button"
              className="px-9 py-4 rounded-full bg-primary text-primary-foreground font-extrabold text-base shadow-hero hover:bg-primary/90 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
            >
              Start Creating 🐶
            </button>
            <button
              type="button"
              onClick={() => navigate({ to: "/gallery" })}
              data-ocid="home.secondary_button"
              className="px-9 py-4 rounded-full bg-white/10 border border-white/20 text-hero-foreground font-bold text-base hover:bg-white/20 transition-all duration-200"
            >
              View My Dogs
            </button>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center gap-6 sm:gap-10 text-hero-foreground/50 text-xs font-bold tracking-wider uppercase mt-2"
          >
            <span>8 Breeds</span>
            <span className="w-1 h-1 rounded-full bg-hero-foreground/30" />
            <span>Infinite Combos</span>
            <span className="w-1 h-1 rounded-full bg-hero-foreground/30" />
            <span>Stored On-Chain</span>
          </motion.div>
        </div>
      </section>

      {/* ── BREED GRID ──────────────────────────────────────────────────── */}
      <section className="py-20 px-5 paw-pattern">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-primary mb-3">
              Choose Your Companion
            </p>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-foreground tracking-tight">
              Pick Your Breed
            </h2>
            <p className="text-muted-foreground mt-3 max-w-sm mx-auto leading-relaxed">
              Each dog is fully customizable and uniquely yours to name and
              collect.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {FEATURED_DOGS.map((dog, i) => (
              <motion.button
                key={dog.name}
                type="button"
                onClick={() => navigate({ to: "/create" })}
                whileHover={{ y: -4 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: i * 0.06 }}
                className="bg-card border border-border rounded-3xl p-4 flex flex-col items-center gap-3 hover:border-primary hover:shadow-hero transition-all duration-200 group"
              >
                <div className="bg-muted rounded-2xl p-2 w-full flex items-center justify-center group-hover:bg-primary/8 transition-colors">
                  <DogSVG
                    breed={dog.breed}
                    color={dog.color}
                    eyes={dog.eyes}
                    markings={dog.markings}
                    size={72}
                  />
                </div>
                <div className="text-center">
                  <span className="text-xs font-extrabold text-foreground block">
                    {dog.name}
                  </span>
                  <span className="text-[10px] text-muted-foreground capitalize">
                    {dog.breed}
                  </span>
                </div>
              </motion.button>
            ))}
          </div>

          <div className="text-center mt-10">
            <button
              type="button"
              onClick={() => navigate({ to: "/create" })}
              data-ocid="home.breeds.primary_button"
              className="px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-bold shadow-card hover:bg-primary/90 transition-all duration-200 hover:-translate-y-0.5"
            >
              Start Creating →
            </button>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────────────────────── */}
      <section className="py-20 px-5 bg-muted">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-primary mb-3">
              The Process
            </p>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-foreground tracking-tight">
              How It Works
            </h2>
            <p className="text-muted-foreground mt-3 max-w-sm mx-auto">
              From breed selection to on-chain ownership in four simple steps.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {HOW_IT_WORKS.map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-card border border-border rounded-3xl p-6 flex flex-col gap-4 shadow-xs relative overflow-hidden"
              >
                <div className="absolute top-4 right-4 text-5xl font-display font-extrabold text-foreground/5 leading-none select-none">
                  {item.step}
                </div>
                <div className="w-11 h-11 bg-primary/10 rounded-2xl flex items-center justify-center text-2xl">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-display font-bold text-foreground text-base">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <button
              type="button"
              onClick={() => navigate({ to: "/create" })}
              data-ocid="home.howitworks.primary_button"
              className="px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-bold shadow-card hover:bg-primary/90 transition-all duration-200 hover:-translate-y-0.5"
            >
              Start Creating
            </button>
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ───────────────────────────────────────────────────── */}
      <section className="py-24 px-5 hero-pattern bg-hero text-hero-foreground">
        <div className="max-w-2xl mx-auto text-center flex flex-col items-center gap-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-5xl mb-5">🐾</div>
            <h2 className="text-4xl sm:text-5xl font-display font-extrabold leading-tight tracking-tight">
              Ready to mint your dog?
            </h2>
            <p className="text-hero-foreground/70 mt-4 text-base max-w-md mx-auto leading-relaxed">
              Your dog lives on the Internet Computer forever — no servers, no
              middlemen, just you and your pup.
            </p>
            <button
              type="button"
              onClick={() => navigate({ to: "/create" })}
              data-ocid="home.bottomcta.primary_button"
              className="mt-8 px-10 py-4 rounded-full bg-primary text-primary-foreground font-extrabold text-base shadow-hero hover:bg-primary/90 transition-all duration-200 hover:-translate-y-0.5"
            >
              Mint Your Dog Now 🚀
            </button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
