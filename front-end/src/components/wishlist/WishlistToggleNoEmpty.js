import React from "react";
import { Button } from "../button";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import CartToggleItems from "../cart/CartToggleItems";

const WishlistToggleNoEmpty = ({ onClick = () => {} }) => {
  const { pathname } = useLocation();
  const { myWishlist } = useSelector((state) => state.wishlist);
  const { courses } = myWishlist;
  return (
    <div className="w-full">
      <div className="max-h-[420px] overflow-y-auto">
        {courses &&
          courses.map((items) => (
            <div>
              <CartToggleItems
                id={items.id}
                image={items?.overview_image?.url}
                title={items.title}
                subtitle={items.subtitle}
                instructor={items?.user?.username}
                originalPrice={items.original_price}
                currentPrice={items.current_price}
                key={items.id}
              >
                <Button className="font-bold mt-2" full>
                  Add to cart
                </Button>
              </CartToggleItems>
            </div>
          ))}
      </div>
      {pathname !== "/my-course/wishlist" && (
        <div className="p-4">
          <Button
            className="bg-primaryBlack text-white font-bold py-4"
            borderNone
            full
            to="/my-course/wishlist"
            onClick={onClick}
          >
            Go to wishlist
          </Button>
        </div>
      )}
    </div>
  );
};

export default WishlistToggleNoEmpty;
