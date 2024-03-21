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



const heading = (
 <h1 id="title" key="h1">
       Namaste React 
 </h1>
);

const HeadingComponent = () => {

    return (

        <div>
            
            <h1>Namaste react functional component woshhhhhh</h1>
            <h2>This is a h2 tag</h2>

        </div>
    )
};

const HeadingComponent2 = () => (

    <>
        <h1>This is another way of writin jsx bc</h1>
        <h2>this is h2 tag</h2>
    </>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent2 />);