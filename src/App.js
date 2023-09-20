import { useState } from "react";
import axios from "axios";
import logo from "./logo.svg";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import "./App.css";
import { FluentProvider, teamsLightTheme } from "@fluentui/react-components";

function App() {
  // new line start
  const [profileData, setProfileData] = useState(null);

  function getData() {
    axios({
      method: "GET",
      url: "/profile",
    })
      .then((response) => {
        const res = response.data;
        setProfileData({
          profile_name: res.name,
          about_me: res.about,
        });
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
          console.log(error.response.status);
          console.log(error.response.headers);
        }
      });
  }
  //end of new line

  return (
    <FluentProvider theme={teamsLightTheme}>
      <div className="App">
        <Navbar />
        <Hero />
        <header className="App-header">
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
          </a>

          {/* new line start*/}
          <p>To get your profile details: </p>
          <button onClick={getData}>Click me</button>
          {profileData && (
            <div>
              <p>Profile name: {profileData.profile_name}</p>
              <p>About me: {profileData.about_me}</p>
            </div>
          )}
        </header>
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
      </footer>
    </FluentProvider>
  );
}

export default App;
