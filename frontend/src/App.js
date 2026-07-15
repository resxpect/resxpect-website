import React from "react";
import "@/App.css";
import Nav from "@/components/Nav";
import Hero from "@/components/sections/Hero";
import TrustProblem from "@/components/sections/TrustProblem";
import HowItWorks from "@/components/sections/HowItWorks";
import ProtectedAgreements from "@/components/sections/ProtectedAgreements";
import RespectPoints from "@/components/sections/RespectPoints";
import Disputes from "@/components/sections/Disputes";
import FinalCTA from "@/components/sections/FinalCTA";

function App() {
    return (
        <div className="App" data-testid="app-root">
            <Nav />
            <main>
                <Hero />
                <TrustProblem />
                <HowItWorks />
                <ProtectedAgreements />
                <RespectPoints />
                <Disputes />
                <FinalCTA />
            </main>
        </div>
    );
}

export default App;
