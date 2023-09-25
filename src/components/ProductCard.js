import {
  Card,
  Body2,
  Subtitle1,
  tokens,
  shorthands,
  Text,
  makeStyles,
  Image,
  Button,
} from "@fluentui/react-components";

import { useShopContext } from "../hooks/useShopContext";

const useButtonStyles = makeStyles({
  addToCartButton: {
    gridRow: "3/4",
    backgroundColor: tokens.colorPaletteDarkGreenBackground2,

    ":hover": {
      backgroundColor: tokens.colorPaletteDarkGreenBorderActive,
      color: tokens.colorNeutralForegroundInvertedLinkHover,
    },
  },
});

const useStyles = makeStyles({
  image: {
    maxWidth: "100%",
    width: "100%",
    aspectRatio: "1/1.25",
    objectFit: "cover",
  },
  productName: {
    gridRow: "1/2",
    ...shorthands.padding("0.5rem", "0rem"),
  },
  description: {
    gridRowStart: "2",
    gridRowEnd: "3",
  },
});

export default function ProductCard({ product }) {
  const styles = useStyles();
  const buttonClass = useButtonStyles();
  const { id, productName, productImage, description, price } = product;
  const { addToCart } = useShopContext();

  return (
    <Card className={`${styles.card}`}>
      <div className="flex flex-col">
        <Image src={productImage} className={styles.image} />
        <div className="card-text grid grid-rows-3">
          <Subtitle1 className={styles.productName}>{productName}</Subtitle1>
          <Text size="300" className={styles.description}>
            {description}
          </Text>
          <Button
            className={buttonClass.addToCartButton}
            onClick={() => addToCart(id)}
          >
            <Body2>Add to Cart - </Body2>
            <Body2>${price}</Body2>
          </Button>
        </div>
      </div>
    </Card>
  );
}
