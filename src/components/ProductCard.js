import {
  Card,
  Body2,
  Subtitle1,
  tokens,
  shorthands,
  Text,
  makeStyles,
  makeResetStyles,
  mergeClasses,
  Image,
  Button,
} from "@fluentui/react-components";

const useDefaultStyles = makeResetStyles({
  ":hover": {
    backgroundColor: tokens.colorPaletteDarkGreenBorderActive,
    color: tokens.colorNeutralForegroundInvertedLinkHover,
  },
});

const useStyles = makeStyles({
  card: {
    aspectRatio: "1/1.75",
  },
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
  button: {
    gridRow: "3/4",
    backgroundColor: tokens.colorPaletteDarkGreenBackground2,
  },
});

export default function ProductCard({ product }) {
  const styles = useStyles();
  const defaultStyles = useDefaultStyles();
  const buttonClass = mergeClasses(styles.button, defaultStyles);
  return (
    <Card className={`${styles.card}`}>
      <div className="flex flex-col">
        <Image src={product.productImage} className={styles.image} />
        <div className="card-text grid grid-rows-3">
          <Subtitle1 className={styles.productName}>
            {product.productName}
          </Subtitle1>
          <Text size="300" className={styles.description}>
            {product.description}
          </Text>
          <Button className={buttonClass}>
            <Body2>Add to Cart - </Body2>
            <Body2>$ {product.price}</Body2>
          </Button>
        </div>
      </div>
    </Card>
  );
}
