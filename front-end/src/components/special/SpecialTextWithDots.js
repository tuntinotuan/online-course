import React from "react";
const dataLocal = [
  "Basic math skills.",
  "Basic to Intermediate Python Skills",
  "Have a computer (either Mac, Windows, or Linux)",
  "Desire to learn!",
];
const SpecialTextWithDots = ({ title = "Requirements", data = dataLocal }) => {
  return (
    <section>
      <h1 className="text-2xl font-bold mt-8 mb-5">{title}</h1>
      {data.map((items) => (
        <div className="flex items-center gap-5 text-slate-600 pl-1 mb-2">
          <div className="w-2 h-2 bg-primaryBlack rounded-full"></div>
          <p>{items}</p>
        </div>
      ))}
    </section>
  );
};

export default SpecialTextWithDots;
