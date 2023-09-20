import { PRODUCTS } from "./products";
import ProductCard from "../../components/ProductCard";
import ShopHero from "../../components/ShopHero";
import {
  makeStyles,
  makeResetStyles,
  Body2,
  Subtitle1,
  tokens,
} from "@fluentui/react-components";

const useStyles = makeStyles({
  productGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(15rem, 1fr))",
    rowGap: "1rem",
    columnGap: "1rem",
  },
});

export default function ShopPage() {
  const styles = useStyles();
  return (
    <>
      <ShopHero />
      <section className="shop w-full px-16 ms-auto me-auto bg-slate-300">
        <div className="shopTitle">
          <h1>Shop page</h1>
        </div>
        <div className={`${styles.productGrid}`}>
          {PRODUCTS.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
        </div>
      </section>
    </>
  );
}
