import React from "react";
import CartTotal from "./CartTotal";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

const CartNoEmpty = ({ data }) => {
  const { myWishlist } = useSelector((state) => state.wishlist);
  const { courses } = myWishlist;
  return (
    <div className="flex items-start gap-20">
      <div className="w-[70%]">
        <h2 className="font-bold mb-1">{data.length} Courses in Cart</h2>
        {data &&
          data.map((course) => (
            <CartItem
              key={course.id}
              id={course.id}
              img={course.overview_image}
              title={course.title}
              instructor={course?.user?.username}
              rating={course?.reviews}
              originalPrice={course.original_price}
              currentPrice={course?.current_price}
            ></CartItem>
          ))}
        {courses.length > 0 && (
          <div className="mt-5">
            <h2 className="font-bold mb-1">Recently wishlisted</h2>
            {courses?.map((course) => (
              <CartItem
                key={course.id}
                id={course.id}
                img={course.overview_image}
                title={course.title}
                instructor={course?.user?.username}
                rating={course?.reviews}
                originalPrice={course.original_price}
                currentPrice={course?.current_price}
                forWishlist
              ></CartItem>
            ))}
          </div>
        )}
      </div>
      <CartTotal data={data}></CartTotal>
    </div>
  );
};

export default CartNoEmpty;
