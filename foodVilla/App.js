/*
* HMR - HOT module replacement
* File Watcher Algorithm
* BUNDLING
* MINIFYING
* Cleaning our code
* Dev And production Build
* Super fast build Algorithm
* Image Optimisation
* Caching while Development
* compatible with older version of browser
* add polyfills
* HTTPS on dev
* Port no
* Consistent Hashing Algorithm
* Zero Config
*/




import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";


const AppLayout = () => (

    <>
        < Header />
        < Body />
        < Footer />
    </>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(< AppLayout />);