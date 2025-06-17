import React from "react";
const DeadLineSection = () => {
  return (
    <section className="w-full bg-[#250168] text-center py-16">
      <div className="max-w-screen-xl mx-auto">
        <p className="text-4xl md:text-6xl font-bold text-white">Registeration Deadline:</p>
        <h3 className="text-6xl md:text-8xl font-medium text-green-400 my-8">100</h3>
        <p className="text-4xl md:text-6xl font-bold text-white">Days</p>
      </div>
    </section>
  );
};

export default React.memo(DeadLineSection);
