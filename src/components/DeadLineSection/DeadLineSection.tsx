import React from "react";
const DeadLineSection = () => {
  return (
    <section className="w-full bg-[#250168] text-center py-16">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-regular text-white">Registeration Deadline:</h2>
        <h3 className="text-5xl md:text-7xl font-medium text-green-400 my-8">100</h3>
        <h4 className="text-3xl md:text-5xl font-regular text-white">days</h4>
      </div>
    </section>
  );
};

export default React.memo(DeadLineSection);
