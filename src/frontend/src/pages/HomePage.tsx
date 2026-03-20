import { useNavigate } from "@tanstack/react-router";
import { DogSVG } from "../components/DogSVG";

const FEATURED_DOGS = [
  {
    breed: "labrador",
    coatColor: "golden",
    eyeColor: "brown",
    accessory: "collar",
    name: "Biscuit",
  },
  {
    breed: "husky",
    coatColor: "gray",
    eyeColor: "heterochromia",
    accessory: "glasses",
    name: "Nova",
  },
  {
    breed: "corgi",
    coatColor: "golden",
    eyeColor: "amber",
    accessory: "bowtie",
    name: "Pudding",
  },
  {
    breed: "dalmatian",
    coatColor: "spotted",
    eyeColor: "blue",
    accessory: "hat",
    name: "Dot",
  },
  {
    breed: "poodle",
    coatColor: "cream",
    eyeColor: "green",
    accessory: "bandana",
    name: "Coco",
  },
  {
    breed: "shiba",
    coatColor: "golden",
    eyeColor: "brown",
    accessory: "none",
    name: "Mochi",
  },
];

export function HomePage() {
  const navigate = useNavigate();

  return (
    <main className="flex flex-col">
      <section className="hero-pattern bg-hero text-hero-foreground py-16 px-6">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-6">
          <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
            <span className="text-xl">🐾</span>
            <span className="text-sm font-bold tracking-wide">
              ICP-Native Dog NFTs
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
            Create Your
            <br />
            <span className="text-accent">Unique Dog</span>
          </h1>
          <p className="text-lg text-hero-foreground/80 max-w-xl">
            Design, customize, and mint your one-of-a-kind dog on the Internet
            Computer. Every pup is uniquely yours.
          </p>
          <button
            type="button"
            onClick={() => navigate({ to: "/create" })}
            data-ocid="home.primary_button"
            className="mt-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-extrabold text-lg shadow-hero hover:bg-primary/90 transition-all duration-200 hover:-translate-y-0.5"
          >
            Start Creating 🐶
          </button>
        </div>
      </section>

      <section className="py-14 px-6 paw-pattern">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-extrabold text-foreground">
              Meet the Pack
            </h2>
            <p className="text-muted-foreground mt-2 text-sm">
              8 unique breeds waiting to be customized
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {FEATURED_DOGS.map((dog) => (
              <button
                key={dog.name}
                type="button"
                onClick={() => navigate({ to: "/create" })}
                className="bg-card border border-border rounded-2xl p-3 flex flex-col items-center gap-2 hover:border-primary hover:shadow-card transition-all duration-200 hover:-translate-y-0.5"
              >
                <DogSVG
                  breed={dog.breed}
                  coatColor={dog.coatColor}
                  eyeColor={dog.eyeColor}
                  accessory={dog.accessory}
                  size={72}
                />
                <span className="text-xs font-bold text-foreground">
                  {dog.name}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 px-6 bg-muted">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-extrabold text-foreground mb-8">
            How It Works
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                step: "1",
                icon: "🐕",
                title: "Choose a Breed",
                desc: "Pick from 8 lovable dog breeds, each with unique ears and personality.",
              },
              {
                step: "2",
                icon: "🎨",
                title: "Customize Traits",
                desc: "Set your coat color, eye color, and fun accessories like hats or bandanas.",
              },
              {
                step: "3",
                icon: "✨",
                title: "Mint on ICP",
                desc: "Your dog is stored permanently on the Internet Computer, tied to your identity.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="bg-card border border-border rounded-2xl p-6 flex flex-col items-center gap-3 shadow-xs"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-2xl">
                  {item.icon}
                </div>
                <h3 className="font-bold text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground text-center">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
          <button
            type="button"
            onClick={() => navigate({ to: "/create" })}
            data-ocid="home.secondary_button"
            className="mt-8 px-8 py-3 rounded-full bg-primary text-primary-foreground font-bold shadow-card hover:bg-primary/90 transition-all duration-200"
          >
            Create Your Dog
          </button>
        </div>
      </section>
    </main>
  );
}
