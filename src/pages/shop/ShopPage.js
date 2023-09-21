import { PRODUCTS } from "./products";
import ProductCard from "../../components/ProductCard";
import ShopHero from "../../components/ShopHero";
import {
  makeStyles,
  makeResetStyles,
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
    // backgroundColor: tokens.colorBrandBackground2,
    ...shorthands.padding("4rem"),
    ...shorthands.margin("0", "auto"),
  },
});

export default function ShopPage() {
  const styles = useStyles();
  return (
    <>
      <ShopHero />
      <section className="shop w-full ms-auto me-auto">
        <div className={`${styles.productGrid}`}>
          {PRODUCTS.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
        </div>
      </section>
    </>
  );
}
