import { useState } from "react";
import { brazilStates } from "@/data/brazilStates";

const BlogGeoTags = () => {
  const [expandedState, setExpandedState] = useState<string | null>(null);

  return (
    <div className="my-12 py-8 border-t border-border">
      <h3 className="font-heading text-lg text-foreground mb-4">
        Atendimento Online para Todo o Brasil
      </h3>
      <p className="text-muted-foreground text-sm mb-6">
        Psicóloga especialista em narcisismo com atendimento online. Agende sua consulta de qualquer cidade do Brasil.
      </p>
      <div className="flex flex-wrap gap-2">
        {brazilStates.map((state) => (
          <div key={state.uf} className="relative">
            <button
              onClick={() => setExpandedState(expandedState === state.uf ? null : state.uf)}
              className={`text-xs px-3 py-1.5 rounded-full border transition-all duration-200 ${
                expandedState === state.uf
                  ? "bg-accent text-white border-accent"
                  : "bg-secondary/50 text-muted-foreground border-border hover:border-accent hover:text-accent"
              }`}
            >
              {state.uf}
            </button>
            {expandedState === state.uf && (
              <div className="absolute z-10 top-full mt-2 left-0 bg-card border border-border rounded-lg shadow-lg p-3 min-w-[220px]">
                <p className="font-heading text-sm text-foreground mb-2">{state.name}</p>
                <div className="flex flex-wrap gap-1">
                  {state.cities.map((city) => (
                    <span
                      key={city}
                      className="text-[10px] px-2 py-0.5 rounded-full bg-secondary/80 text-muted-foreground"
                    >
                      {city}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogGeoTags;
