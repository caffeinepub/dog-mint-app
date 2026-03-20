import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";
import { PlusCircle } from "lucide-react";
import { motion } from "motion/react";
import type { Dog } from "../backend.d";
import { DogCard } from "../components/DogCard";
import { useActor } from "../hooks/useActor";

export function GalleryPage() {
  const navigate = useNavigate();
  const { actor, isFetching } = useActor();

  const {
    data: dogs,
    isLoading,
    isError,
    refetch,
  } = useQuery<Dog[]>({
    queryKey: ["myDogs"],
    queryFn: async () => {
      if (!actor) return [];
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      return (actor as any).getMyDogs() as Promise<Dog[]>;
    },
    enabled: !!actor && !isFetching,
  });

  const dogCount = dogs?.length ?? 0;

  return (
    <main className="min-h-screen py-12 px-5 paw-pattern">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10">
          <div>
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-primary mb-1">
              Your Collection
            </p>
            <div className="flex items-center gap-3">
              <h1 className="text-3xl sm:text-4xl font-display font-extrabold text-foreground tracking-tight">
                My Dogs
              </h1>
              {dogCount > 0 && (
                <span className="px-3 py-1 bg-primary text-primary-foreground text-sm font-bold rounded-full">
                  {dogCount}
                </span>
              )}
            </div>
            <p className="text-muted-foreground mt-1 text-sm">
              {dogCount > 0
                ? `${dogCount} dog${dogCount !== 1 ? "s" : ""} minted on the Internet Computer`
                : "Your minted dog collection on the Internet Computer"}
            </p>
          </div>
          <button
            type="button"
            onClick={() => navigate({ to: "/create" })}
            data-ocid="gallery.primary_button"
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-bold shadow-card hover:bg-primary/90 transition-all hover:-translate-y-0.5 whitespace-nowrap"
          >
            <PlusCircle size={16} />
            Mint New Dog
          </button>
        </div>

        {/* Loading */}
        {(isLoading || isFetching) && (
          <div
            className="flex flex-col items-center justify-center py-24 gap-4"
            data-ocid="gallery.loading_state"
          >
            <div className="w-12 h-12 border-4 border-primary/30 border-t-primary rounded-full animate-spin" />
            <p className="text-muted-foreground font-semibold">
              Loading your dogs...
            </p>
          </div>
        )}

        {/* Error */}
        {isError && (
          <div
            className="flex flex-col items-center gap-4 py-20"
            data-ocid="gallery.error_state"
          >
            <div className="text-4xl">⚠️</div>
            <p className="text-destructive font-semibold">
              Failed to load your dogs.
            </p>
            <button
              type="button"
              onClick={() => refetch()}
              className="px-5 py-2.5 rounded-full bg-muted text-foreground font-bold text-sm hover:bg-muted/80 transition-all"
            >
              Try Again
            </button>
          </div>
        )}

        {/* Empty state */}
        {!isLoading && !isFetching && !isError && dogs && dogs.length === 0 && (
          <div
            className="flex flex-col items-center gap-6 py-24"
            data-ocid="gallery.empty_state"
          >
            <div className="w-28 h-28 bg-primary/10 rounded-full flex items-center justify-center">
              <span className="text-6xl">🐾</span>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-display font-bold text-foreground">
                No dogs yet!
              </h3>
              <p className="text-muted-foreground mt-2 text-sm max-w-xs mx-auto leading-relaxed">
                Your collection is empty. Mint your first dog to start building
                your on-chain kennel.
              </p>
            </div>
            <button
              type="button"
              onClick={() => navigate({ to: "/create" })}
              data-ocid="gallery.empty_state.primary_button"
              className="px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold shadow-card hover:bg-primary/90 transition-all hover:-translate-y-0.5"
            >
              Mint Your First Dog 🐶
            </button>
          </div>
        )}

        {/* NFT grid */}
        {dogs && dogs.length > 0 && (
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            data-ocid="gallery.list"
          >
            {dogs.map((dog, i) => (
              <motion.div
                key={dog.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: i * 0.06 }}
              >
                <DogCard dog={dog} index={i + 1} />
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
