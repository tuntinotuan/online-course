import React from "react";
const dataLocal = [
  "Basic math skills.",
  "Basic to Intermediate Python Skills",
  "Have a computer (either Mac, Windows, or Linux)",
  "Desire to learn!",
];
const SpecialTextWithDots = ({
  title = "Requirements",
  styleTitle,
  content = dataLocal,
  styleContent,
  dotSize = 8,
}) => {
  return (
    <section>
      <h1 className={`text-2xl font-bold mt-8 mb-5 ${styleTitle}`}>{title}</h1>
      {content.map((items) => (
        <div
          className={`flex items-center gap-5 text-slate-600 pl-1 mb-2 ${styleContent}`}
          key={items}
        >
          <div
            className="bg-primaryBlack dark:bg-white rounded-full"
            style={{ width: dotSize, height: dotSize }}
          ></div>
          <p>{items}</p>
        </div>
      ))}
    </section>
  );
};

export default SpecialTextWithDots;
