import { Fingerprint, MessagesSquare, Orbit } from "lucide-react";

const principles = [
  {
    icon: Fingerprint,
    number: "01",
    title: "The person comes first",
    description: "A conversation can be meaningful before anyone knows your name, your history, or your place in a crowd.",
    tone: "text-violet-200 bg-violet-300/[0.08] border-violet-200/10",
  },
  {
    icon: MessagesSquare,
    number: "02",
    title: "Make room for nuance",
    description: "The best exchanges leave space for curiosity, disagreement, and the thought you almost kept to yourself.",
    tone: "text-cyan-100 bg-cyan-200/[0.07] border-cyan-200/10",
  },
  {
    icon: Orbit,
    number: "03",
    title: "Connection has no score",
    description: "A good conversation doesn't need an audience counter. It just needs someone on the other side who cares.",
    tone: "text-fuchsia-200 bg-fuchsia-300/[0.07] border-fuchsia-200/10",
  },
];

export function LandingPrinciples() {
  return (
    <section className="mx-auto w-full max-w-[1440px] px-5 pb-24 pt-16 sm:px-8 sm:pb-32 lg:px-14" id="the-idea">
      <div className="grid gap-10 border-t border-white/[0.08] pt-10 md:grid-cols-[0.8fr_1.2fr] md:gap-14 md:pt-14">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-cyan-200/80">A different starting point</p>
          <h2 className="mt-4 max-w-sm font-display text-3xl font-medium leading-tight tracking-[-0.05em] text-white sm:text-4xl">
            Built for what happens between people.
          </h2>
          <p className="mt-4 max-w-sm text-sm leading-7 text-slate-500">
            VEIL begins with a simple idea: good conversation is worth making room for.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-3">
          {principles.map(({ icon: Icon, number, title, description, tone }) => (
            <article
              className="group rounded-2xl border border-white/[0.07] bg-white/[0.022] p-5 transition duration-300 hover:-translate-y-1 hover:border-white/[0.13] hover:bg-white/[0.04] sm:p-5"
              key={number}
            >
              <div className={`mb-7 grid size-10 place-items-center rounded-xl border ${tone}`}>
                <Icon aria-hidden="true" className="size-[17px]" />
              </div>
              <p className="mb-2 text-[9px] font-semibold tracking-[0.18em] text-slate-600">{number}</p>
              <h3 className="font-display text-base font-medium tracking-[-0.02em] text-slate-100">{title}</h3>
              <p className="mt-2.5 text-xs leading-6 text-slate-500">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
