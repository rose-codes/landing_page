import { ArrowRightFilled } from "@fluentui/react-icons";
import { Link } from "react-router-dom";
import {
  makeStyles,
  shorthands,
  mergeClasses,
  makeResetStyles,
  Subtitle1,
  Subtitle2,
  Title3,
  Button,
  tokens,
} from "@fluentui/react-components";

import { Card } from "@fluentui/react-components";

const useDefaultStyles = makeResetStyles({
  ":hover": {
    backgroundColor: tokens.colorPaletteDarkGreenBorderActive,
    color: tokens.colorNeutralForegroundInvertedLinkHover,
  },
});

const useStyles = makeStyles({
  productGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
    gridTemplateRows: "repeat(1, minmax(0, 1fr))",
    gap: "1rem",
    backgroundColor: "#C1C5A1",
    alignItems: "center",
  },
  heroCard: {
    aspectRatio: "1.5/1",
    height: "max-content",
  },
  image: {
    aspectRatio: "1/1.25",
  },
  text: {
    ...shorthands.margin("0.25rem", "0rem"),
  },
  button: {
    backgroundColor: tokens.colorPaletteDarkGreenBackground2,
  },
});
export default function Hero() {
  const styles = useStyles();
  const defaultStyles = useDefaultStyles();
  const buttonClass = mergeClasses(styles.button, defaultStyles);
  return (
    <section className="hero-container w-full ps-4 pe-4 ms-auto me-auto">
      <div className={`${styles.productGrid}`}>
        <div
          className={`${styles.heroCard} grid items-center justify-items-center`}
        >
          <Card className="max-w-fit shadow">
            <div className="justify-items-center my-2 py-2 flex flex-col p-8 justify-evenly">
              <Title3 className={`${styles.text}`}>
                Save Up to $50 on a New Routine
              </Title3>
              <Subtitle1 className={`${styles.text}`}>
                A whole routine at a fraction of the price.
              </Subtitle1>
              <Subtitle2 className={`${styles.text}`}>
                Offer ends 10/31.
              </Subtitle2>
              <Link to="/shop" className={`${styles.text}`}>
                <Button shape="rounded" className={buttonClass}>
                  <div className="buttonContent flex gap-x-2 items-center">
                    <Subtitle2>Shop Now</Subtitle2>
                    <ArrowRightFilled />
                  </div>
                </Button>
              </Link>
            </div>
          </Card>
        </div>
        <div className={`${styles.heroCard}`}>
          <img
            src="/pmv-chamara-OXYOFT9gTOE-unsplash.jpg"
            alt="A collection of purple skincare bottles against a lime green background"
            className={`${styles.image} w-full object-cover`}
          ></img>
        </div>
      </div>
    </section>
  );
}
