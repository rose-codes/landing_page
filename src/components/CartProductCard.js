import { useShopContext } from "../hooks/useShopContext";
import {
  makeStyles,
  Card,
  Subtitle2,
  Title3,
  Body1,
  Subtitle1,
} from "@fluentui/react-components";

const useCardStyles = makeStyles({
  productGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(1rem, 1fr))",

    // columnGap: "2rem",
  },
});

const useButtonStyles = makeStyles({
  addOrRemove: {
    // height: "2rem",
  },
  remove: {
    height: "2rem",
    gridRowStart: "3",
  },
});

const useImageStyles = makeStyles({
  productImage: {
    height: "12rem",
    maxHeight: "12rem",
    position: "relative",
    height: "auto",
  },
});
export const CartProductCard = ({ product }) => {
  const { cartItems, addToCart, removeFromCart, updateCardItemCount } =
    useShopContext();

  const cardStyles = useCardStyles();
  const buttonStyles = useButtonStyles();
  const imageStyles = useImageStyles();
  return (
    <Card className={cardStyles.productGrid}>
      <div className={imageStyles.productImage}>
        <img
          src={product.productImage}
          alt="product image"
          className="max-w-full h-full"
        ></img>
      </div>
      <div className="productInformation flex flex-col justify-between justify-items-center">
        <Title3 className="productName">{product.productName}</Title3>
        <Subtitle1 className="productPrice row-start-2">
          {product.price}
        </Subtitle1>
        <div className="productAmountCounter border border-solid w-6/12 flex justify-center justify-self-center">
          <button
            className={buttonStyles.addOrRemove}
            onClick={() => removeFromCart}
          >
            -
          </button>
          <input
            type="text"
            className="productAmountInt text-center w-6/12"
            value={cartItems[product.id]}
            onChange={(e) => {
              e.preventDefault();
              updateCardItemCount(e.target.value, product.id);
            }}
          ></input>
          <button
            className={buttonStyles.addOrRemove}
            onClick={() => addToCart}
          >
            +
          </button>
        </div>
        <button className={buttonStyles.remove}>X Remove</button>
      </div>
    </Card>
  );
};
