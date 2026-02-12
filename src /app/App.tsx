import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Legend } from "./components/Legend";
import { FestivalMap } from "./components/FestivalMap";
import { DailyActivities } from "./components/DailyActivities";
import { Sustainability } from "./components/Sustainability";
import { Benefits } from "./components/Benefits";
import { Lineup } from "./components/Lineup";
import { Tickets } from "./components/Tickets";
import { SocialProof } from "./components/SocialProof";
import { Footer } from "./components/Footer";
import { Registration } from "./components/Registration";
import "../styles/index.css";
import { useEffect, useState } from "react";

export default function App() {
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    const handleLocationChange = () => setPath(window.location.pathname);
    window.addEventListener("popstate", handleLocationChange);
    return () => window.removeEventListener("popstate", handleLocationChange);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground antialiased font-sans">
      {path === "/registration" ? (
        <Registration />
      ) : (
        <>
          <Header />
          <main>
            <Hero />
            <Legend />
            <FestivalMap />
            <DailyActivities />
            <Sustainability />
            <Benefits />
            <Lineup />
            <Tickets />
            <SocialProof />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}
