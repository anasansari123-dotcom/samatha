import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="relative min-h-[360px] overflow-hidden bg-[#0A4D8D] sm:min-h-[420px]">
      <Image
        src="/slide-2.png"
        alt="Rooftop solar installation by Samatha Green Energy Solutions"
        fill
        priority
        className="object-cover object-[70%_center]"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0A4D8D] via-[#0A4D8D]/90 to-[#0A4D8D]/42" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#083a6e]/30 via-transparent to-[#083a6e]/15" />

      <div className="relative z-10 mx-auto flex min-h-[360px] max-w-[1280px] flex-col justify-center px-4 py-16 sm:min-h-[420px] sm:px-6 lg:px-8">
        <p className="text-[14px] font-extrabold uppercase tracking-[0.18em] text-[#2cb673]">
          SOLAR ENERGY SOLUTIONS
        </p>
        <h1 className="page-hero-title mt-3 max-w-3xl font-display font-extrabold text-white">
          About Samatha Green Energy Solutions
        </h1>
        <p className="page-desc-on-dark mt-4 max-w-2xl">
          Your trusted partner in the clean energy transition, delivering tech-enabled renewable
          energy solutions across residential, commercial, industrial, utility, and community
          requirements.
        </p>
      </div>
    </section>
  );
}

export function AboutIntroSection() {
  return (
    <>
      <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto grid max-w-[1200px] items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <p className="text-[14px] font-extrabold tracking-[0.16em] text-brand-green">
              COMPANY INTRODUCTION
            </p>
            <h2 className="page-title mt-3 font-display font-bold leading-tight text-brand-navy">
              Advanced Renewable Energy Solutions with Digital Intelligence
            </h2>
            <p className="page-desc mt-5">
              Welcome to Samatha Green Energy Solutions Pvt Ltd., your trusted partner in the clean
              energy transition. We provide advanced renewable energy solutions with our
              tech-enabled platform to measure, build, and monitor high efficiency Solar PV systems,
              battery energy storage systems (BESS), EV charging infrastructure, wind energy
              integration, microgrid, green hydrogen, and allied technologies for residential,
              commercial, industrial, and utility requirements.
            </p>
            <p className="page-desc mt-4">
              We provide our own Samatha platform to aggregate renewable energy systems into a clean
              energy ecosystem for residential, commercial, and industrial requirements. The
              platform supports performance tracking, status monitoring, digital warranty, and
              service requests.
            </p>
          </div>

          <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-[#0b3a7a] shadow-[0_16px_40px_rgba(15,23,42,0.1)]">
            <Image
              src="/aboutimage.jpg"
              alt="Samatha energy monitoring platform dashboard"
              fill
              className="object-cover object-center scale-[1.1]"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#f4f8fc] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto grid max-w-[1320px] items-stretch gap-6 lg:grid-cols-2 lg:gap-8">
          <article className="h-full rounded-[24px] bg-white px-7 py-8 shadow-[0_12px_32px_rgba(15,23,42,0.06)] sm:px-9 sm:py-10">
            <h3 className="page-card-title font-display font-bold !text-[#125393]">
              Our Mission
            </h3>
            <p className="page-desc mt-4">
              Our mission is to deliver tech-enabled, reliable, and eco-friendly green energy
              solutions to residential, commercial, industrial, institutional, and utility customers
              that reduce energy costs and carbon footprint, supporting a cleaner, greener tomorrow
              for us and future generations.
            </p>
          </article>
          <article className="h-full rounded-[24px] bg-white px-7 py-8 shadow-[0_12px_32px_rgba(15,23,42,0.06)] sm:px-9 sm:py-10">
            <h3 className="page-card-title font-display font-bold !text-[#125393]">
              Our Vision
            </h3>
            <p className="page-desc mt-4">
              Our vision is to accelerate the transition towards a cleaner and net-zero carbon
              future. Our innovative renewable energy platform empowers residential, commercial,
              industrial, utility, and community users with an integrated clean energy ecosystem.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
