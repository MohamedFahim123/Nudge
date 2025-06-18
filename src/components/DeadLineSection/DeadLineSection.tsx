import React from "react";

const DeadLineSection = () => {
  return (
    <section className="w-full bg-[#250168] text-center py-12 sm:py-16 px-4">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-regular text-white">
          Registration Deadline:
        </h2>
        <h3 className="text-6xl sm:text-7xl md:text-8xl font-medium text-green-400 my-6 sm:my-8">
          100
        </h3>
        <h4 className="text-2xl sm:text-3xl md:text-5xl font-regular text-white">
          days
        </h4>
      </div>
    </section>
  );
};

export default React.memo(DeadLineSection);
