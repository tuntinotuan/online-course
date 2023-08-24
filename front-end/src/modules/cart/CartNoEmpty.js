import React from "react";
import CartTotal from "./CartTotal";
import CartItems from "./CartItems";

const CartNoEmpty = ({ data }) => {
  return (
    <div className="flex items-start gap-20">
      <div className="w-[70%]">
        <h2 className="font-bold mb-1">{data.length} Courses in Cart</h2>
        {data &&
          data.map((course) => (
            <CartItems
              key={course.id}
              id={course.id}
              img={course.overview_image}
              title={course.title}
              instructor={course?.user?.username}
              rating={course.star}
              originalPrice={course.original_price}
              currentPrice={course?.current_price}
            ></CartItems>
          ))}
        {false && (
          <div className="mt-5">
            <h2 className="font-bold mb-1">Saved for later</h2>
            <CartItems></CartItems>
          </div>
        )}
      </div>
      <CartTotal data={data}></CartTotal>
    </div>
  );
};

export default CartNoEmpty;
