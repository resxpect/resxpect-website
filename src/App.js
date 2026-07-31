import React from "react";
import "@/App.css";
import Nav from "@/components/Nav";
import Hero from "@/components/sections/Hero";
import TheProblem from "./components/sections/TheProblem";
import HowItWorks from "@/components/sections/HowItWorks";
import AgreementOutcome from "./components/sections/AgreementOutcome";
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
                <TheProblem />
                <HowItWorks />
                <AgreementOutcome />
                <Roles />
                <GlobalMessage />
                <FinalCTA />
            </main>
        </div>
    );
}

export default App;
