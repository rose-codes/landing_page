import { useState } from "react";
import axios from "axios";
import logo from "./logo.svg";
import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";
import CartPage from "./pages/cart/CartPage";
import ShopPage from "./pages/shop/ShopPage";
import NotFoundPage from "./pages/NotFoundPage";
import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import { FluentProvider, teamsLightTheme } from "@fluentui/react-components";
import ShopContextProvider from "./context/shopContext";

function App() {
  // new line start
  // const [profileData, setProfileData] = useState(null);

  // function getData() {
  //   axios({
  //     method: "GET",
  //     url: "/profile",
  //   })
  //     .then((response) => {
  //       const res = response.data;
  //       setProfileData({
  //         profile_name: res.name,
  //         about_me: res.about,
  //       });
  //     })
  //     .catch((error) => {
  //       if (error.response) {
  //         console.log(error.response);
  //         console.log(error.response.status);
  //         console.log(error.response.headers);
  //       }
  //     });
  // }
  //end of new line

  return (
    <ShopContextProvider>
      <FluentProvider theme={teamsLightTheme}>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/not-found" element={<NotFoundPage />} />
            <Route path="*" element={<Navigate to="/not-found" replace />} />
          </Routes>
          {/* <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a> */}

          {/* new line start*/}
          {/* <p>To get your profile details: </p>
            <button onClick={getData}>Click me</button>
            {profileData && (
              <div>
                <p>Profile name: {profileData.profile_name}</p>
                <p>About me: {profileData.about_me}</p>
              </div>
            )} */}
          {/* </header> */}
        </div>
        <footer>
          Photo by{" "}
          <a href="https://unsplash.com/@pmvch?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            pmv chamara
          </a>{" "}
          on{" "}
          <a href="https://unsplash.com/photos/OXYOFT9gTOE?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            Unsplash
          </a>
          Photo by{" "}
          <a href="https://unsplash.com/@msbirgith?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            Birgith Roosipuu
          </a>{" "}
          on{" "}
          <a href="https://unsplash.com/photos/PWPe-x1Ygtw?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            Unsplash
          </a>
          Photo by{" "}
          <a href="https://unsplash.com/@curology?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            Curology
          </a>{" "}
          on{" "}
          <a href="https://unsplash.com/photos/X1sIr53DhzA?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            Unsplash
          </a>
          Photo by{" "}
          <a href="https://unsplash.com/@linaverovaya?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            Lina Verovaya
          </a>{" "}
          on{" "}
          <a href="https://unsplash.com/photos/BibJjO4sYrI?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            Unsplash
          </a>
        </footer>
      </FluentProvider>
    </ShopContextProvider>
  );
}

export default App;
