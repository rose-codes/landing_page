import {
  PersonAvailableRegular,
  StarRegular,
  LocationRegular,
  PersonAddRegular,
} from "@fluentui/react-icons";

import {
  makeStyles,
  shorthands,
  Body1,
  Body1Strong,
  Body1Stronger,
  Body2,
  Caption1,
  Caption1Strong,
  Caption1Stronger,
  Caption2,
  Caption2Strong,
  Display,
  LargeTitle,
  Subtitle1,
  Subtitle2,
  Body2Stronger,
  Title1,
  Title2,
  Title3,
} from "@fluentui/react-components";

const useStyles = makeStyles({
  container: {
    ...shorthands.gap("16px"),
    display: "flex",
    alignItems: "baseline",
  },
});

export default function Navbar() {
  const styles = useStyles();
  return (
    <section
      className={`${styles.container} navbar-container flex px-16 py-4 min-w-max justify-center`}
    >
      <section
        className={`navbar flex justify-between w-full h-8 content-center`}
      >
        <section className="left-side flex justify-evenly content-center">
          <div className="brandname flex content-center me-2">
            <Subtitle1>Brand</Subtitle1>
          </div>
          <div className="nav-link flex content-center items-center mx-2">
            <Body2>Shop</Body2>
          </div>
          <div className="nav-link flex content-center items-center mx-2">
            <Body2>Brands</Body2>
          </div>
          <div className="nav-link flex content-center items-center mx-2">
            <Body2>Sale</Body2>
          </div>
        </section>

        <section className="right-side flex justify-evenly content-center">
          <div className="nav-link flex row content-center items-center mx-2">
            <PersonAddRegular />
            <div className="ml-1">
              <Body2>Register</Body2>
            </div>
          </div>
          <div className="nav-link flex content-center items-center mx-2">
            <PersonAvailableRegular />
            <div className="ml-1">
              <Body2>Login</Body2>
            </div>
          </div>

          <div className="nav-link flex content-center items-center mx-2">
            <StarRegular />
            <div className="ml-1">
              <Body2>Brand Rewards</Body2>
            </div>
          </div>

          <div className="nav-link flex content-center items-center mx-2">
            <LocationRegular />
            <div className="ml-1">
              <Body2>Find a Store</Body2>
            </div>
          </div>
        </section>
      </section>
    </section>
  );
}
