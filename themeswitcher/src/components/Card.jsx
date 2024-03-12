import React from "react";

export default function Card() {
    return (
        <div className="w-full  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="/">
                <img className=" p-8 rounded-t-lg " src="data:image/jpeg;base64,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" alt="product_image1" />
            </a>
            <div className="px-5 pb-5">
                <a href="/">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                        Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
                    </h5>
                </a>
                <div className="flex items-center mt-2.5 mb-5">
                    <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-gray-200 dark:text-gray-600"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                        4.0
                    </span>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
                    <a
                        href="/"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Add to cart
                    </a>
                </div>
            </div>
        </div>
    );
}
