import React from "react";
import ButtonStatusTag from "../../components/button/ButtonStatusTag";

const CourseAttention = ({ data }) => {
  return (
    <section
      className={`bg-primaryBlack text-white py-2 px-3
        shadow-lg fixed top-0 left-0 right-0 overflow-hidden z-40`}
    >
      <div
        className={`flex items-center justify-between w-auto overflow-hidden`}
      >
        <div>
          <h1 className="text-sm font-bold mb-2">
            {data.title ||
              "Learning Python for Data Analysis and Visualization Ver 1"}
          </h1>
          <div className="flex items-center gap-2">
            <ButtonStatusTag className="bg-tagYellow">
              Bestseller
            </ButtonStatusTag>
            <div className="rate flex items-center gap-1 cursor-pointer">
              <span className="text-starBg font-bold text-sm">4.3</span>
              {Array(4)
                .fill(null)
                .map((index) => (
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"
                    alt=""
                    className="w-[11px] h-[11px]"
                    key={index}
                  />
                ))}
              <img
                src="https://cdn-icons-png.flaticon.com/128/2107/2107737.png"
                alt=""
                className="w-[11px] h-[11px]"
              />
              <span className="text-xs text-partner underline">
                (18,934 ratings)
              </span>
            </div>
            <p>197,152 students</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseAttention;
