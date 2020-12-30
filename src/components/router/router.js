// Packages
import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

// Components
import Header from 'components/header';

// Routes
import Home from './home';
import About from './about';

export default function Router() {
    return (
        <BrowserRouter>
            <Header />
            <div className="container">
                <Switch>

                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                    <Redirect to="/" />
                </Switch>
            </div>
        </BrowserRouter>
    )
}