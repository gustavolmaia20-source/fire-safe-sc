import { MapPin } from "lucide-react";

const cities = [
  "Florianópolis", "São José", "Palhoça", "Biguaçu",
  "Joinville", "Blumenau", "Itajaí", "Balneário Camboriú",
  "Chapecó", "Criciúma", "Lages", "Jaraguá do Sul",
  "Tubarão", "Brusque", "Caçador", "Concórdia",
  "Rio do Sul", "Gaspar", "Navegantes", "Xanxerê",
];

export function CitiesSection() {
  return (
    <section className="bg-muted py-16 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">Área de Atuação</p>
          <h2 className="mt-2 font-display text-3xl font-bold text-foreground md:text-4xl text-balance">
            Atendemos todo o estado de Santa Catarina
          </h2>
          <p className="mt-4 text-muted-foreground">
            Com experiência em todos os batalhões do Corpo de Bombeiros de SC, garantimos atendimento ágil na sua região.
          </p>
        </div>

        <div className="mx-auto mt-10 flex max-w-3xl flex-wrap items-center justify-center gap-3">
          {cities.map((city) => (
            <span
              key={city}
              className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground shadow-card"
            >
              <MapPin className="h-3.5 w-3.5 text-accent" />
              {city}
            </span>
          ))}
          <span className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-sm font-bold text-primary-foreground">
            + todas as cidades de SC
          </span>
        </div>
      </div>
    </section>
  );
}
