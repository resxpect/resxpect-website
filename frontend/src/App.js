import React from "react";
import "@/App.css";
import Nav from "@/components/Nav";
import Hero from "@/components/sections/Hero";
import Principles from "@/components/sections/Principles";
import HowItWorks from "@/components/sections/HowItWorks";
import Reputation from "@/components/sections/Reputation";
import Disputes from "@/components/sections/Disputes";
import FinalCTA from "@/components/sections/FinalCTA";

function App() {
    return (
        <div className="App" data-testid="app-root">
            <Nav />
            <main>
                <Hero />
                <Principles />
                <HowItWorks />
                <Reputation />
                <Disputes />
                <FinalCTA />
            </main>
        </div>
    );
}

export default App;
