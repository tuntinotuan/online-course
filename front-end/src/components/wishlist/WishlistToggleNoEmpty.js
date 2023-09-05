import React from "react";
import { Button } from "../button";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import CartToggleItems from "../cart/CartToggleItems";
import { handleMoveItemToCart } from "../../redux-toolkit/wishlist/wishlistHandlerThunk";

const WishlistToggleNoEmpty = ({ onClick = () => {} }) => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const { myWishlist } = useSelector((state) => state.wishlist);
  const { courses } = myWishlist;
  const wishlistMoveToCart = (id) => {
    dispatch(handleMoveItemToCart(id));
  };
  return (
    <div className="w-full">
      <div className="max-h-[420px] overflow-y-auto">
        {courses &&
          courses.map((items) => (
            <CartToggleItems
              key={items.id}
              id={items.id}
              image={items?.overview_image?.url}
              title={items.title}
              subtitle={items.subtitle}
              instructor={items?.user?.username}
              originalPrice={items.original_price}
              currentPrice={items.current_price}
            >
              <Button
                className="font-bold mt-2"
                full
                onClick={() => wishlistMoveToCart(items.id)}
              >
                Add to cart
              </Button>
            </CartToggleItems>
          ))}
      </div>
      {pathname !== "/my-course/wishlist" && (
        <div className="p-4 shadow-[0_-15px_20px_-15px_rgba(0,0,0,0.3)]">
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
