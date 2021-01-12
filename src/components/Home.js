import React from "react";
import image from "../yosemite_valley.JPG"

export default function Home() {
    return (
        <main>
            <img
                src={image}
                alt="Half-Dome"
                className="absolute object-cover w-full h-full "/>
            <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
                <h1 className="text-6xl text-white font-bold cursive leading-none lg:leading-snug home-name shadow-xl">Hey! Welcome To My Page!</h1>
            </section>
        </main>
    )
}