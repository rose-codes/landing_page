import {
  PersonAvailableRegular,
  StarRegular,
  LocationRegular,
  PersonAddRegular,
  CartRegular,
} from "@fluentui/react-icons";

import { Link } from "react-router-dom";

import {
  makeStyles,
  shorthands,
  Body2,
  Subtitle1,
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
          <Link to="/" className="brandname flex content-center me-2 max-w-fit">
            <Subtitle1>Wreath Skincare</Subtitle1>
            {/* <img src="/wreath_logo.png" alt="wreath skincare logo"></img> */}
          </Link>
          <Link
            to="/shop"
            className="nav-link flex content-center items-center mx-2"
          >
            <Body2>Shop</Body2>
          </Link>
          <Link
            to=""
            className="nav-link flex content-center items-center mx-2"
          >
            <Body2>Brands</Body2>
          </Link>
          <Link
            to=""
            className="nav-link flex content-center items-center mx-2"
          >
            <Body2>Sale</Body2>
          </Link>
        </section>

        <section className="right-side flex justify-evenly content-center">
          <Link
            to=""
            className="nav-link flex row content-center items-center mx-2"
          >
            <PersonAddRegular />
            <div className="ml-1">
              <Body2>Register</Body2>
            </div>
          </Link>
          <Link
            to=""
            className="nav-link flex content-center items-center mx-2"
          >
            <PersonAvailableRegular />
            <div className="ml-1">
              <Body2>Login</Body2>
            </div>
          </Link>

          <Link
            to=""
            className="nav-link flex content-center items-center mx-2"
          >
            <StarRegular />
            <div className="ml-1">
              <Body2>Brand Rewards</Body2>
            </div>
          </Link>

          <Link
            to=""
            className="nav-link flex content-center items-center mx-2"
          >
            <LocationRegular />
            <div className="ml-1">
              <Body2>Find a Store</Body2>
            </div>
          </Link>
          <Link
            to="/cart"
            className="nav-link flex content-center items-center mx-2"
          >
            <CartRegular />
            <div className="ml-1">
              <Body2>Cart</Body2>
            </div>
          </Link>
        </section>
      </section>
    </section>
  );
}
