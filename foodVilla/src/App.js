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




import React, { lazy } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import {createBrowserRouter , RouterProvider} from "react-router-dom"
import About from "./Components/About";
import Error from "./Components/Error";
import Cart from "./Components/Cart";
import Contact from "./Components/Contact";
import { Outlet } from "react-router-dom";
import RestaurantMenu from "./Components/RestaurantMenu";
import { lazy,Suspense } from "react";
import Shimmer from "./Components/Shimmer";
// import Instamart from "./Components/Instamart";

const Instamart = lazy(() => import ("./Components/Instamart")); // import it in a lazy way




const AppLayout = () => (

    <>
        < Header />
         <Outlet />
        < Footer />
    </>
);



const appRouter = createBrowserRouter([

    {
        path : "/",
        element : <AppLayout />,
        errorElement: <Error />,
        children : [

            {
                path : "/",
                element : <Body/>
            },
            {
                path : "/about",
                element : <About />
            },

            {
                path : "/contact",
                element: <Contact />
            },

            {
                path : "/cart",
                element : <Cart />
            },

            {
                path : "/instamart",
                element : <Suspense fallback = {<Shimmer/>}>
                             <Instamart />
                     n   </Suspense>

            },

            {
                path : "/restaurant/:id",
                element : <RestaurantMenu />

            }

            

        ]
    }

  
])



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);