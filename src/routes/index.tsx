import { createFileRoute } from "@tanstack/react-router";
import heroBaby from "@/assets/hero-baby-home.jpg";
import logoMDC from "@/assets/logo-mdc.png";
import clinicFacade from "@/assets/clinic-facade.jpg";
import {
  MessageCircle,
  MapPin,
  CalendarCheck,
  Users,
  ShieldCheck,
  Percent,
  CreditCard,
  Lock,
  TrendingDown,
  Home,
  Star,
} from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/5551998821132?text=Ol%C3%A1%20eu%20gostaria%20de%20fazer%20um%20agendamento!";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MDC Vacinas — Vacinação em casa com as melhores condições" },
      {
        name: "description",
        content:
          "Vacinação domiciliar em Porto Alegre e região. Pacote pediátrico com 12% de desconto, parcelamento em até 21x e 15% de desconto no PIX.",
      },
      { property: "og:title", content: "MDC Vacinas — Vacinação no conforto do seu lar" },
      {
        property: "og:description",
        content:
          "Pacote vacinal pediátrico com 12% OFF, até 21x, reserva de doses e sem reajuste de valores.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Hero />
      <HowItWorks />
      <PackageSection />
      <WhyUs />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
}

function CTAButton({ className = "" }: { className?: string }) {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 rounded-full bg-[var(--navy)] px-7 py-4 text-sm font-semibold uppercase tracking-wide text-white shadow-[var(--shadow-soft)] transition-transform hover:-translate-y-0.5 hover:bg-[var(--navy-deep)] ${className}`}
    >
      <MessageCircle className="h-4 w-4" />
      Clique aqui e tire suas dúvidas
    </a>
  );
}

function Hero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: "var(--gradient-hero)" }}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 pb-24 pt-10 lg:grid-cols-2 lg:pb-32 lg:pt-16">
        <div className="text-white">
          <img src={logoMDC} alt="MDC Vacinas" className="mb-10 w-56 md:w-64" />
          <h1 className="text-4xl font-bold leading-tight md:text-5xl">
            Vacine-se em casa com as{" "}
            <span className="text-[var(--navy)]">MELHORES</span> condições do mercado
          </h1>
          <p className="mt-6 max-w-md text-lg text-white/90">
            Consulte as regiões atendidas e aguarde no conforto do seu lar.
          </p>
          <div className="mt-8">
            <CTAButton />
          </div>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-3xl shadow-2xl ring-1 ring-white/20">
            <img
              src={heroBaby}
              alt="Bebê sendo vacinado no conforto do lar"
              width={1600}
              height={1200}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>

      <svg
        className="block w-full text-background"
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          fill="currentColor"
          d="M0,40 C240,90 480,0 720,30 C960,60 1200,80 1440,30 L1440,80 L0,80 Z"
        />
      </svg>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    { icon: MessageCircle, text: "Entre em contato pelo nosso WhatsApp" },
    { icon: MapPin, text: "Confira sua região e prepare a carteirinha" },
    { icon: CalendarCheck, text: "Realize seu agendamento sem complicações" },
    { icon: Users, text: "Aguarde nossa equipe no horário marcado" },
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <h2 className="mx-auto max-w-3xl text-center text-3xl font-bold text-[var(--navy)] md:text-4xl">
        É difícil sair de casa com o bebê, mochila e carrinho? Pegar trânsito e pagar
        estacionamento?
      </h2>
      <p className="mt-4 text-center text-2xl font-semibold text-[var(--teal)]">
        Nós vamos até você!
      </p>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((s, i) => (
          <div
            key={i}
            className="flex flex-col items-center rounded-2xl border border-border bg-card p-8 text-center shadow-[var(--shadow-card)] transition-transform hover:-translate-y-1"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[var(--teal-soft)] text-[var(--navy)]">
              <s.icon className="h-8 w-8" />
            </div>
            <p className="mt-5 text-sm font-medium text-foreground">{s.text}</p>
          </div>
        ))}
      </div>

      <p className="mx-auto mt-12 max-w-3xl text-center text-lg text-muted-foreground">
        Com nosso atendimento facilitado, você economiza tempo e dinheiro, e vacina no
        conforto de casa.
      </p>

      <div className="mt-8 flex justify-center">
        <CTAButton />
      </div>

      <p className="mt-6 text-center text-xs text-muted-foreground">
        Obs: Nosso atendimento domiciliar é realizado atendendo os requisitos da RDC 197/2017
      </p>
    </section>
  );
}

function PackageSection() {
  const highlights = [
    {
      icon: Percent,
      title: "12% de desconto",
      desc: "No pacote vacinal pediátrico completo.",
      badge: "NOVO",
    },
    {
      icon: CreditCard,
      title: "Parcele em até 21x*",
      desc: "Condições facilitadas para caber no seu orçamento.",
    },
    {
      icon: TrendingDown,
      title: "15% OFF no PIX",
      desc: "Pagamento à vista com o maior desconto do mercado.",
    },
    {
      icon: Lock,
      title: "Reserva de todas as doses",
      desc: "Garantia da disponibilidade completa do calendário.",
    },
    {
      icon: ShieldCheck,
      title: "Sem reajuste de valores",
      desc: "Preço travado durante todo o período do pacote.",
    },
    {
      icon: Home,
      title: "Vamos até sua casa de graça*",
      desc: "Atendimento domiciliar sem taxa nas regiões atendidas.",
    },
  ];

  const doses = [
    { name: "Pneumo 20 ou Pneumo 15", detail: "3 doses (2-4-6 meses)" },
    { name: "Rotavírus Penta", detail: "3 doses (2-4-6 meses)" },
    { name: "Hexavalente", detail: "3 doses (2-4-6 meses)" },
    { name: "Meningo ACWY", detail: "2 doses (3-5 meses)" },
    { name: "Meningo B", detail: "2 doses (3-5 meses)" },
  ];

  return (
    <section className="relative bg-[var(--teal-soft)]/40 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <span className="inline-block rounded-full bg-[var(--teal)] px-4 py-1 text-xs font-semibold uppercase tracking-widest text-white">
            Vantagens
          </span>
          <h2 className="mt-4 text-4xl font-bold text-[var(--navy)] md:text-5xl">
            Pacote Vacinal Pediátrico
          </h2>
          <p className="mt-3 text-lg text-muted-foreground">
            Melhores condições do mercado, do começo ao fim do calendário do seu bebê.
          </p>
        </div>

        <div className="mt-14 space-y-10">
          {/* Highlights first */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {highlights.map((h) => (
              <div
                key={h.title}
                className="group relative rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] transition-transform hover:-translate-y-1"
              >
                {h.badge && (
                  <span className="absolute -right-2 -top-2 rounded-full bg-[var(--gold)] px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[var(--navy-deep)] shadow-md">
                    {h.badge}
                  </span>
                )}
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--teal-soft)] text-[var(--navy)]">
                  <h.icon className="h-6 w-6" />
                </div>
                <h4 className="mt-4 text-lg font-bold text-[var(--navy)]">{h.title}</h4>
                <p className="mt-1 text-sm text-muted-foreground">{h.desc}</p>
              </div>
            ))}
          </div>

          {/* Package summary below */}
          <div
            className="relative overflow-hidden rounded-3xl p-8 text-white shadow-[var(--shadow-soft)]"
            style={{ background: "var(--gradient-package)" }}
          >
            <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/10 blur-2xl" />
            <div className="absolute -bottom-24 -left-16 h-56 w-56 rounded-full bg-[var(--teal)]/30 blur-2xl" />

            <div className="relative grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center">
              <div>
                <span className="inline-block rounded-full bg-white/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest">
                  Pacote
                </span>
                <h3 className="mt-3 text-3xl font-bold">2 a 6 meses</h3>
                <p className="mt-1 text-sm text-white/80">Calendário essencial do bebê</p>

                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold uppercase tracking-wide text-[var(--navy)] transition-transform hover:-translate-y-0.5"
                >
                  <MessageCircle className="h-4 w-4" /> Quero contratar o pacote
                </a>
              </div>

              <ul className="space-y-4">
                {doses.map((d) => (
                  <li key={d.name} className="flex items-start gap-3">
                    <span className="mt-1 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-white/15">
                      <ShieldCheck className="h-3.5 w-3.5" />
                    </span>
                    <div>
                      <p className="font-semibold">{d.name}</p>
                      <p className="text-sm text-white/75">{d.detail}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="text-xs leading-relaxed text-muted-foreground">
            * Venda do pacote completo mediante disponibilidade e validade das vacinas no
            mercado. * Verifique com a clínica como personalizar seu pacote. * Verifique as
            regiões atendidas gratuitamente. * Parcelamento sujeito a análise da operadora.
          </p>
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  const stats = [
    { value: "+ de 10", label: "Anos de experiência" },
    { value: "+ de 20 mil", label: "Vidas vacinadas anualmente" },
    { value: "+ de 100", label: "Empresas atendidas anualmente" },
  ];
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <div>
          <h2 className="text-4xl font-bold text-[var(--navy)] md:text-5xl">
            Por que a MDC Vacinas?
          </h2>
          <p className="mt-4 text-muted-foreground">
            Anos de experiência cuidando de famílias com carinho, segurança e o padrão técnico
            que sua saúde merece.
          </p>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-border bg-card p-5 text-center shadow-[var(--shadow-card)]"
              >
                <p className="text-2xl font-bold text-[var(--teal-dark)]">{s.value}</p>
                <p className="mt-1 text-xs text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="overflow-hidden rounded-3xl shadow-[var(--shadow-soft)]">
          <img
            src={clinicFacade}
            alt="Fachada da MDC Vacinas"
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const items = [
    {
      name: "@gabrielabordasch",
      avatar: "https://i.pravatar.cc/120?img=47",
      text: "Nossa experiência com o serviço de atendimento em casa da MDC Vacinas foi incrível. Somos clientes desde o nascimento da nossa primeira filha. Adoramos a qualidade do atendimento e o carinho da equipe. Serviço perfeito. Super recomendo!",
    },
    {
      name: "@clausevanessa",
      avatar: "https://i.pravatar.cc/120?img=45",
      text: "É tão bom saber que uma empresa oferece um serviço tão cuidadoso e exclusivo com valores justos, aonde podemos receber atendimento dentro da nossa casa. Eu amo o atendimento domiciliar da MDC vacinas!",
    },
    {
      name: "@drarebecamiotto",
      avatar: "https://i.pravatar.cc/120?img=44",
      text: "Nossa experiência foi sensacional. Nada como poder vacinar nossa filha, tão pequena e frágil, no conforto da nossa casa. Sem custo adicional. Todas as funcionárias muito atenciosas.",
    },
    {
      name: "@marcellosowka",
      avatar: "https://i.pravatar.cc/120?img=12",
      text: "Somos clientes da MDC há muitos anos. Não precisar sair de casa com o bebê já é uma grande vantagem! As meninas são extremamente atenciosas e experientes. Recomendo!",
    },
  ];
  return (
    <section className="bg-[var(--teal-soft)]/40 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-4xl font-bold text-[var(--navy)] md:text-5xl">
          Famílias que confiam na MDC
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {items.map((t) => (
            <div
              key={t.name}
              className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]"
            >
              <div className="flex items-center gap-1 text-[var(--gold)]">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-foreground">{t.text}</p>
              <p className="mt-4 text-sm font-semibold text-[var(--teal-dark)]">{t.name}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <CTAButton />
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const faqs = [
    {
      q: "A MDC atende em quais locais?",
      a: "Atendemos atualmente em Porto Alegre e grande Porto Alegre sem custo de deslocamento dependendo do raio de distância em quilômetros. Confira no nosso WhatsApp se sua região é de deslocamento gratuito!",
    },
    {
      q: "As vacinas são apenas para crianças?",
      a: "Não. A MDC Vacinas atende todo o calendário vacinal, da criança ao idoso. Confira sua carteirinha conosco para atualizá-la.",
    },
    {
      q: "Posso vacinar mais de uma pessoa no mesmo endereço?",
      a: "Pode sim! No agendamento já marcamos quantas pessoas serão vacinadas em cada endereço.",
    },
    {
      q: "Quais meios de pagamento são aceitos?",
      a: "Aceitamos cartão de crédito com parcelamento em até 21x, dinheiro e PIX com 15% de desconto.",
    },
  ];
  return (
    <section className="mx-auto max-w-4xl px-6 py-20">
      <h2 className="text-center text-3xl font-bold text-[var(--navy)] md:text-4xl">
        Dúvidas Frequentes
      </h2>
      <div className="mt-10 space-y-4">
        {faqs.map((f) => (
          <details
            key={f.q}
            className="group rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between font-semibold text-[var(--navy)]">
              {f.q}
              <span className="ml-4 text-[var(--teal)] transition-transform group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="mt-3 text-sm text-muted-foreground">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[var(--navy-deep)] py-10 text-center text-sm text-white/80">
      <img src={logoMDC} alt="MDC Vacinas" className="mx-auto mb-4 w-40 opacity-90" />
      <p>Copyright © {new Date().getFullYear()} MDC Vacinas</p>
      <div className="mt-3 flex justify-center gap-4">
        <a href="https://www.facebook.com/mdcvacinas/" className="hover:text-white">
          Facebook
        </a>
        <a href="https://www.instagram.com/mdcvacinas/" className="hover:text-white">
          Instagram
        </a>
      </div>
    </footer>
  );
}
