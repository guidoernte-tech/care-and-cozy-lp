import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import heroBaby from "@/assets/hero-baby-home.jpg";
import logoMDC from "@/assets/logo-mdc.png";
import clinicFacade from "@/assets/clinic-facade.jpg";
import {
  MessageCircleHeart,
  MapPinned,
  CalendarHeart,
  Stethoscope,
  HeartPulse,
  ShieldCheck,
  Percent,
  CreditCard,
  Lock,
  TrendingDown,
  Home,
  Star,
  ChevronLeft,
  ChevronRight,
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
      <MessageCircleHeart className="h-4 w-4" />
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
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 px-6 pb-16 pt-10 text-center lg:pb-20 lg:pt-14">
        <img src={logoMDC} alt="MDC Vacinas" className="w-48 md:w-56" />
        <h1 className="text-4xl font-bold leading-tight text-white md:text-5xl">
          Vacine-se em casa com as{" "}
          <span className="text-[var(--navy)]">MELHORES</span> condições do mercado
        </h1>
        <p className="max-w-md text-lg text-white/90">
          Consulte as regiões atendidas e aguarde no conforto do seu lar.
        </p>

        <div className="w-full overflow-hidden rounded-3xl shadow-2xl ring-1 ring-white/20">
          <img
            src={heroBaby}
            alt="Bebê sendo vacinado no conforto do lar"
            width={1600}
            height={1200}
            className="h-full w-full object-cover"
          />
        </div>

        <CTAButton />
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
    { icon: MessageCircleHeart, text: "Entre em contato pelo nosso WhatsApp" },
    { icon: MapPinned, text: "Confira sua região e prepare a carteirinha" },
    { icon: CalendarHeart, text: "Realize seu agendamento sem complicações" },
    { icon: Stethoscope, text: "Aguarde nossa equipe no horário marcado" },
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      <h2 className="mx-auto max-w-3xl text-center text-3xl font-bold text-[var(--navy)] md:text-4xl">
        É difícil sair de casa com o bebê, mochila e carrinho? Pegar trânsito e pagar
        estacionamento?
      </h2>
      <p className="mt-4 text-center text-2xl font-semibold text-[var(--teal)]">
        Nós vamos até você!
      </p>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((s, i) => (
          <div
            key={i}
            className="group relative flex flex-col items-center overflow-hidden rounded-2xl border border-border bg-card p-8 text-center shadow-[var(--shadow-card)] transition-all hover:-translate-y-1.5 hover:shadow-[var(--shadow-soft)]"
          >
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[var(--teal-soft)] opacity-60 transition-transform duration-500 group-hover:scale-150"
            />
            <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--teal)] to-[var(--navy)] text-white shadow-lg transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110">
              <s.icon className="h-8 w-8" strokeWidth={1.75} />
              <span className="absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-white text-[var(--teal)] shadow ring-1 ring-[var(--teal-soft)]">
                <HeartPulse className="h-3.5 w-3.5" />
              </span>
            </div>
            <p className="relative mt-5 text-sm font-medium text-foreground">{s.text}</p>
          </div>
        ))}
      </div>

      <p className="mx-auto mt-10 max-w-3xl text-center text-lg text-muted-foreground">
        Com nosso atendimento facilitado, você economiza tempo e dinheiro, e vacina no
        conforto de casa.
      </p>

      <div className="mt-6 flex justify-center">
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
      desc: "Nos pacotes vacinais. Verifique com nossa equipe possíveis personalizações.",
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

  const packages = [
    {
      title: "2 a 6 meses",
      subtitle: "Calendário vacinal do bebê",
      doses: [
        { name: "Pneumo 20 ou Pneumo 15", detail: "3 doses" },
        { name: "Rotavírus Penta", detail: "3 doses" },
        { name: "Hexavalente", detail: "3 doses" },
        { name: "Meningo ACWY", detail: "2 doses" },
        { name: "Meningo B", detail: "2 doses" },
      ],
    },
    {
      title: "12 a 24 meses",
      subtitle: "Calendário vacinal do bebê",
      doses: [
        { name: "Pneumo 20 ou Pneumo 15", detail: "1 dose" },
        { name: "Meningo B", detail: "1 dose" },
        { name: "Meningo ACWY", detail: "1 dose" },
        { name: "Pentavalente", detail: "1 dose" },
        { name: "Hepatite A INF", detail: "1 dose" },
        { name: "Tríplice Viral", detail: "2 doses" },
        { name: "Varicela", detail: "2 doses" },
      ],
    },
  ];

  return (
    <section className="relative bg-[var(--teal-soft)]/40 py-14">
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
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {highlights.map((h) => (
              <div
                key={h.title}
                className="group relative rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-soft)]"
              >
                <div className="absolute left-0 top-0 h-1 w-full bg-[var(--teal)]" />
                {h.badge && (
                  <span className="absolute -right-2 -top-2 rounded-full bg-[var(--gold)] px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[var(--navy-deep)] shadow-md">
                    {h.badge}
                  </span>
                )}
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[var(--teal-soft)] text-[var(--navy)] transition-colors group-hover:bg-[var(--teal)] group-hover:text-white">
                  <h.icon className="h-7 w-7" />
                </div>
                <h4 className="font-display mt-5 text-2xl text-[var(--navy)] md:text-3xl">
                  {h.title}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{h.desc}</p>
              </div>
            ))}
          </div>

          {/* Package carousel */}
          <PackageCarousel packages={packages} />

          <p className="text-xs leading-relaxed text-muted-foreground">
            * Venda do pacote completo mediante disponibilidade e validade das vacinas no
            mercado. * Verifique com a clínica como personalizar seu pacote. * Verifique as
            regiões atendidas gratuitamente. * Confira as condições do parcelamento até 21x
            com nossa equipe.
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
    <section className="mx-auto max-w-7xl px-6 py-14">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <div>
          <h2 className="text-4xl font-bold text-[var(--navy)] md:text-5xl">
            Por que a MDC Vacinas?
          </h2>
          <p className="mt-4 text-muted-foreground">
            Anos de experiência cuidando de famílias com carinho, segurança e o padrão técnico
            que sua família merece.
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
      avatar:
        "https://mdcvacinas.com.br/wp-content/uploads/2022/11/188047733_146355437472106_4760731370720499386_n.jpg",
      text: "Nossa experiência com o serviço de atendimento em casa da MDC Vacinas foi incrível. Somos clientes da MDC desde o nascimento da nossa primeira filha. Fizemos todas as vacinas lá. Adoramos a qualidade do atendimento e o carinho da equipe. Poder fazer as vacinas em casa só agregar ainda mais o que já era excelente. Não precisar pegar trânsito, pagar estacionamento, função de tirar as crianças do carro e tudo mais facilita e muito a vida das famílias. E o melhor de tudo, não tem taxa extra pra isso. Serviço perfeito. Super recomendo!",
    },
    {
      name: "@clausevanessa",
      avatar:
        "https://mdcvacinas.com.br/wp-content/uploads/2022/11/273915568_323318373076494_2434003820495313128_n.jpg",
      text: "É tão bom saber que uma empresa oferece um serviço tão cuidadoso e exclusivo com valores justos de mercado aonde podemos receber atendimento dentro da nossa casa um lugar aonde a gente confia, se sente seguro e confortável Além de outras vantagens como não precisar pegar trânsito não pagar estacionamento e não correr riscos eu amo o atendimento domiciliar da MDC vacinas!",
    },
    {
      name: "@drarebecamiotto",
      avatar:
        "https://mdcvacinas.com.br/wp-content/uploads/2022/12/WhatsApp-Image-2022-12-20-at-09.44.50.jpeg",
      text: "Nossa experiência com MDC vacinas foi sensacional. Nada como poder vacinar nossa filha, tão pequena e frágil, no conforto da nossa casa, em um local que ela sente mais segurança. O fato de não ter que sair de casa com um recém nascido, pegar trânsito, ficar em sala de espera é o que faz toda diferença. Além disso, sem custo adicional. Todas as funcionárias sempre muito solicitas e competentes, tratando nossa pequena com muito carinho. Nosso muito obrigada a toda equipe do MDC vacinas.",
    },
    {
      name: "@marcellosowka",
      avatar: "https://mdcvacinas.com.br/wp-content/uploads/2022/12/Marcello-Sowka.jpg",
      text: "Somos clientes da MDC Vacinas há muitos anos, e quando nosso filho nasceu não tivemos dúvidas em chamá-los para vacinar nosso filho em casa. Não precisar sair de casa com o bebê, pegar transito, pagar estacionamento e sair com mochila, carrinho e etc já é uma grande vantagem! Além disso as meninas são extremamente atenciosas e experientes. Fazer a vacina em casa, no quarto do nosso filho com certeza o deixou mais calmo! Recomendo!",
    },
  ];
  return (
    <section className="bg-[var(--teal-soft)]/40 py-14">
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
              <p className="text-sm leading-relaxed text-foreground">{t.text}</p>
              <div className="mt-5 flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  loading="lazy"
                  className="h-12 w-12 flex-none rounded-full object-cover ring-2 ring-[var(--teal-soft)]"
                />
                <div>
                  <p className="text-sm font-semibold text-[var(--teal-dark)]">{t.name}</p>
                  <div className="mt-0.5 flex items-center gap-0.5 text-[var(--gold)]">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
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
      a: "Atendemos atualmente em Porto Alegre, grande Porto Alegre e região do Vale dos Sinos sem custo de deslocamento dependendo do raio de distância. Confira no nosso WhatsApp se sua região é atendida!",
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
      a: "Aceitamos cartão de crédito com parcelamento em até 21x, dinheiro e PIX com 15% de desconto nos pacotes vacinais.",
    },
  ];

  return (
    <section className="mx-auto max-w-4xl px-6 py-14">
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

type Pkg = {
  title: string;
  subtitle: string;
  doses: { name: string; detail: string }[];
};

function PackageCarousel({ packages }: { packages: Pkg[] }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % packages.length);
    }, 3000);
    return () => clearInterval(id);
  }, [paused, packages.length]);

  const go = (dir: number) =>
    setIndex((i) => (i + dir + packages.length) % packages.length);

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="overflow-hidden rounded-3xl">
        <div
          className="flex transition-transform duration-700 ease-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {packages.map((p) => (
            <div key={p.title} className="w-full flex-none">
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
                    <h3 className="mt-3 text-3xl font-bold">{p.title}</h3>
                    <p className="mt-1 text-sm text-white/80">{p.subtitle}</p>

                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold uppercase tracking-wide text-[var(--navy)] transition-transform hover:-translate-y-0.5"
                    >
                      <MessageCircleHeart className="h-4 w-4" /> Quero contratar o pacote
                    </a>
                  </div>

                  <ul className="space-y-4">
                    {p.doses.map((d) => (
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
            </div>
          ))}
        </div>
      </div>

      <button
        type="button"
        aria-label="Pacote anterior"
        onClick={() => go(-1)}
        className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 text-[var(--navy)] shadow-md transition hover:bg-white"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        type="button"
        aria-label="Próximo pacote"
        onClick={() => go(1)}
        className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 text-[var(--navy)] shadow-md transition hover:bg-white"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      <div className="mt-4 flex justify-center gap-2">
        {packages.map((p, i) => (
          <button
            key={p.title}
            type="button"
            aria-label={`Ir para pacote ${p.title}`}
            onClick={() => setIndex(i)}
            className={`h-2 rounded-full transition-all ${
              i === index ? "w-8 bg-[var(--navy)]" : "w-2 bg-[var(--navy)]/30"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

