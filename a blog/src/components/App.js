import React from "react";
import { NewPostButton } from "./NewPostButton";
import { Home } from "./Home";
import { Header } from "./Header";
import { Footer } from "./Footer";

import { Route, Routes } from "react-router-dom";
import { NewPostPage } from "./NewPostPage";

import { Pages } from "./Pages";

export function App() {
    return (
        <div id="app">

            <>


                <Header />

                <Home />



                <NewPostPage />

                <NewPostButton />
                <Footer />
            </>



        </div>
    );
}
