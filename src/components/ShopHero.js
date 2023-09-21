import {
  makeStyles,
  shorthands,
  mergeClasses,
  makeResetStyles,
  Subtitle2,
  LargeTitle,
  tokens,
} from "@fluentui/react-components";

import { Card } from "@fluentui/react-components";

const heroPicURL = "/assets/pmv-chamara-SfoNOwxdmo8-unsplash.jpg";

const useDefaultStyles = makeResetStyles({
  ":hover": {
    backgroundColor: tokens.colorPaletteDarkGreenBorderActive,
    color: tokens.colorNeutralForegroundInvertedLinkHover,
  },
});

const useStyles = makeStyles({
  productGrid: {
    display: "grid",
    backgroundImage: `url(${heroPicURL})`,
    backgroundSize: "cover",
    backgroundPositionX: "center",
    backgroundPositionY: "center",
    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
    gridTemplateRows: "repeat(1, minmax(0, 1fr))",
    justifyContent: "center",
    justifyItems: "center",
    height: "auto",
  },
  heroCard: {
    aspectRatio: "1.5/1",
    height: "max-content",
  },
  image: {
    objectFit: "cover",
  },
  text: {
    ...shorthands.margin("0.25rem", "0rem"),
  },
  button: {
    backgroundColor: tokens.colorPaletteDarkGreenBackground2,
  },
});
export default function ShopHero() {
  const styles = useStyles();
  const defaultStyles = useDefaultStyles();
  const buttonClass = mergeClasses(styles.button, defaultStyles);
  return (
    <section className="hero-container w-full ps-4 pe-4 ms-auto me-auto">
      <div className={`${styles.productGrid}`}>
        {/* <img
          src="/assets/pmv-chamara-SfoNOwxdmo8-unsplash.jpg"
          alt="skincare bottles"
          className="w-full"
        ></img> */}
        <div
          className={`${styles.heroCard} grid items-center justify-items-center`}
        >
          <Card className="max-w-fit shadow w-9/12">
            <div className="justify-items-center my-2 py-4 flex flex-col p-8 justify-evenly">
              <LargeTitle className={`${styles.text}`}>
                Build Your Routine
              </LargeTitle>
              <Subtitle2 className={`${styles.text}`}>
                Shop our best skincare products to help you achieve the perfect
                routine for you.
              </Subtitle2>
            </div>
          </Card>
        </div>
        {/* <div className={`${styles.heroCard}`}>
          <img
            src="/pmv-chamara-OXYOFT9gTOE-unsplash.jpg"
            alt="A collection of purple skincare bottles against a lime green background"
            className={`${styles.image} w-full object-cover`}
          ></img>
        </div> */}
      </div>
    </section>
  );
}
