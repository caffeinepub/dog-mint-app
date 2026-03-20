import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";
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
  } = useQuery({
    queryKey: ["myDogs"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getMyDogs();
    },
    enabled: !!actor && !isFetching,
  });

  return (
    <main className="min-h-screen py-10 px-6 paw-pattern">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-extrabold text-foreground">My Dogs</h1>
            <p className="text-muted-foreground mt-1">
              Your minted dog collection on the Internet Computer
            </p>
          </div>
          <button
            type="button"
            onClick={() => navigate({ to: "/create" })}
            data-ocid="gallery.primary_button"
            className="px-6 py-3 rounded-full bg-primary text-primary-foreground font-bold shadow-card hover:bg-primary/90 transition-all whitespace-nowrap"
          >
            + Mint New Dog
          </button>
        </div>

        {(isLoading || isFetching) && (
          <div
            className="flex flex-col items-center justify-center py-20 gap-4"
            data-ocid="gallery.loading_state"
          >
            <div className="w-12 h-12 border-4 border-primary/30 border-t-primary rounded-full animate-spin" />
            <p className="text-muted-foreground font-semibold">
              Loading your dogs...
            </p>
          </div>
        )}

        {isError && (
          <div
            className="flex flex-col items-center gap-3 py-16"
            data-ocid="gallery.error_state"
          >
            <p className="text-destructive font-semibold">
              Failed to load your dogs.
            </p>
            <button
              type="button"
              onClick={() => refetch()}
              className="px-4 py-2 rounded-full bg-muted text-foreground font-bold text-sm hover:bg-muted/80 transition-all"
            >
              Retry
            </button>
          </div>
        )}

        {!isLoading && !isFetching && !isError && dogs && dogs.length === 0 && (
          <div
            className="flex flex-col items-center gap-6 py-20"
            data-ocid="gallery.empty_state"
          >
            <div className="text-6xl">🐾</div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-foreground">
                No dogs yet!
              </h3>
              <p className="text-muted-foreground mt-2 text-sm">
                Mint your first dog to start your collection.
              </p>
            </div>
            <button
              type="button"
              onClick={() => navigate({ to: "/create" })}
              data-ocid="gallery.empty_state.primary_button"
              className="px-6 py-3 rounded-full bg-primary text-primary-foreground font-bold shadow-card hover:bg-primary/90 transition-all"
            >
              Create Your First Dog
            </button>
          </div>
        )}

        {dogs && dogs.length > 0 && (
          <div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5"
            data-ocid="gallery.list"
          >
            {dogs.map((dog, i) => (
              <DogCard key={dog.id} dog={dog} index={i + 1} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
