import Image from "next/image";
import React from "react";

const GlobalExpertise = () => {
  return (
    <section>
      <div className="bg-white py-16">
        <div className="max-w-screen-xl mx-auto text-center">
          <h2 className="text-3xl md:text-6xl font-regular text-[#250168]">
            Global Expertise
          </h2>
          <Image
            src="/images/stars.png"
            alt="Stars"
            width={300}
            height={20}
            className="h-20 object-cover my-2 mx-auto"
          />
          <p className="text-2xl text-black mb-12 max-w-lg mx-auto">
            A team of global experts with a track record of speaking to and
            working with:
          </p>

          <div className="my-16 w-full">
            <Image
              src={"/images/Logos.avif"}
              alt="HSBC"
              width={1000}
              height={400}
              className="object-cover my-2 mx-auto w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(GlobalExpertise);
