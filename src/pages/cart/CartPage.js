import { PRODUCTS } from "../shop/products";
import { useShopContext } from "../../hooks/useShopContext";
import { CartProductCard } from "../../components/CartProductCard";
import { SubtotalCard } from "../../components/SubtotalCard";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import {
  makeStyles,
  Title1,
  Body2,
  Subtitle1,
  shorthands,
  tokens,
} from "@fluentui/react-components";

const useStyles = makeStyles({
  productGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
    rowGap: "1rem",
    columnGap: "1rem",
    ...shorthands.padding("0", "8rem"),
    ...shorthands.margin("0", "auto"),
  },
});
export default function CartPage({ children }) {
  const [itemTotalCount, setItemTotalCount] = useState(0);
  const styles = useStyles();
  const { cartItems, getItemsInCartCount } = useShopContext();
  useEffect = () => {
    setItemTotalCount(getItemsInCartCount());
  };
  return (
    <>
      <section className="shop w-full ms-auto me-auto">
        <div className={styles.productGrid}>
          <div className="left-side">
            <div className="header py-4">
              <Title1 className="mr-4">Your Cart</Title1>
              <Subtitle1>{itemTotalCount} items</Subtitle1>
            </div>
            <div className="products-list flex flex-col gap-y-4">
              {PRODUCTS.map((product) => {
                if (cartItems[product.id] > 0) {
                  return <CartProductCard product={product} />;
                }
              })}
            </div>
            <Link to="/shop" className="row-start-3">
              <button>Continue Shopping</button>
            </Link>
          </div>
          <div className="right-side">
            <SubtotalCard className="col-start-2"></SubtotalCard>
          </div>
        </div>
      </section>
    </>
  );
}
