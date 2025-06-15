import Image from "next/image";
import Link from "next/link";
import React from "react";

const PartnersSection = () => {
  return (
    <section className="flex flex-col md:flex-row w-full min-h-[60vh]">
      <div className="flex-1 bg-gradient-to-br from-green-200 via-green-300 to-green-100 p-10 flex flex-col justify-center gap-6">
        <h2 className="text-7xl md:text-5xl font-bold leading-tight text-black">
          Partners <br /> in Success
        </h2>
        <p className="text-3xl text-black max-w-xl my-5">
          The Nudge Summit 2025 is sponsored by market leaders who share similar
          visions in enabling other corporations to succeed.
        </p>
        <div>
          <p className="italic text-2xl text-gray-800 max-w-md mb-5">
            Do you want to join a community of market leaders and visionaries
            and become a sponsor?
          </p>
          <Link
            href="/contact-us"
            className="inline-block text-2xl bg-black text-white font-medium py-2 px-5 rounded hover:bg-gray-800 transition"
          >
            Contact us
          </Link>
        </div>
      </div>

      <div className="flex-1 flex flex-col justify-center items-center bg-white gap-10">
        <div className="w-full h-auto">
          <Image
            src="/images/chialidini.png"
            alt="Cialdini Institute"
            width={600}
            height={100}
            className="object-contain w-full h-auto"
          />
        </div>
        <div className="w-full h-auto bg-gray-100 py-6 flex items-center justify-center">
          <Image
            src="/images/mena.png"
            alt="MENA Speakers"
            width={600}
            height={100}
            className="object-contain w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default React.memo(PartnersSection);
