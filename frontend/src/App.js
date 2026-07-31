import React from "react";
import "@/App.css";
import Nav from "@/components/Nav";
import Hero from "@/components/sections/Hero";
import HowItWorks from "@/components/sections/HowItWorks";
import WhyResxpect from "@/components/sections/WhyResxpect";
import Roles from "@/components/sections/Roles";
import GlobalMessage from "@/components/sections/GlobalMessage";
import FinalCTA from "@/components/sections/FinalCTA";

function App() {
    return (
        <div className="App" data-testid="app-root">
            <Nav />
            <main>
                <Hero />
                <HowItWorks />
                <WhyResxpect />
                <Roles />
                <GlobalMessage />
                <FinalCTA />
            </main>
        </div>
    );
}

export default App;
