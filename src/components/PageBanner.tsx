import Image from "next/image";

type PageBannerProps = {
  eyebrow: string;
  title: string;
  description: string;
  image?: string;
};

/** Shared inner-page hero matching original royal-blue banner treatment. */
export default function PageBanner({
  eyebrow,
  title,
  description,
  image = "/hero-energy.jpg",
}: PageBannerProps) {
  return (
    <section className="relative min-h-[340px] overflow-hidden bg-[#0A4D8D] sm:min-h-[400px]">
      <Image
        src={image}
        alt=""
        fill
        priority
        className="object-cover object-[70%_center]"
        sizes="100vw"
      />
      {/* Left-solid royal blue fading to translucent image on the right */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0A4D8D] via-[#0A4D8D]/88 to-[#0A4D8D]/45" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#083a6e]/35 via-transparent to-[#083a6e]/20" />

      <div className="relative z-10 mx-auto flex min-h-[340px] max-w-[1280px] flex-col justify-center px-4 py-16 sm:min-h-[400px] sm:px-6 lg:px-8">
        <p className="text-[13px] font-bold uppercase tracking-[0.18em] text-[#2cb673]">
          {eyebrow}
        </p>
        <h1 className="mt-3 max-w-3xl font-display text-[clamp(2.4rem,5.5vw,3.6rem)] font-extrabold leading-[1.1] text-white">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-white/95 sm:text-[1.05rem] sm:leading-7">
          {description}
        </p>
      </div>
    </section>
  );
}
