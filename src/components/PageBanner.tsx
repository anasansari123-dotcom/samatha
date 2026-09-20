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
        <p className="text-[14px] font-extrabold uppercase tracking-[0.18em] text-[#2cb673]">
          {eyebrow}
        </p>
        <h1 className="page-hero-title mt-3 max-w-3xl font-display font-extrabold text-white">
          {title}
        </h1>
        <p className="page-desc-on-dark mt-4 max-w-2xl">
          {description}
        </p>
      </div>
    </section>
  );
}
