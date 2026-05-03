import { useState, useEffect } from "react"

import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Combobox, ComboboxContent, ComboboxEmpty, ComboboxInput, ComboboxItem, ComboboxList, } from "@/components/ui/combobox"

import BasketballForm from "./components/forms/BasketballForm.jsx"
import FootballForm from "./components/forms/FootballForm.jsx"
import VolleyballForm from "./components/forms/VolleyballForm.jsx"
import Dashboard from "./components/Dashboard.jsx"

import { calculatebasketballRisk } from "./utils/calculatebasketballRisk.js"
import { generatebasketballExplanation } from "./utils/generatebasketballExplanation.js"
import { calculatefootballRisk } from "./utils/calculatefootballRisk.js"
import { generatefootballExplanation } from "./utils/generatefootballExplanation.js"
import { calculatevolleyballRisk } from "./utils/calculatevolleyballRisk.js"
import { generatevolleyballExplanation } from "./utils/generatevolleyballExplanation.js"

import injuryContent from "./data/injuryContent.json"
import { SafePlayLogo, getSportIcon } from "./components/icons/SportIcons.jsx"

export default function App() {
  const [ sport, setSport ] = useState("")
  const [ data, setData ] = useState(null)
  const [ explanation, setExplanation ] = useState(null)
  const [ topInjuries, setTopInjuries ] = useState([])

  const sports = [
    "Basketball",
    "Football",
    "Volleyball"
  ];

  const basketballInjuryNameMap = {
    anklesprain: "Ankle Injury",
    footfracture: "Foot Fracture",
    jammedfingers: "Jammed Fingers",
    kneeinjuries: "Knee Injuries",
    facialcuts: "Facial Cuts",
    deepthighbruise: "Deep Thigh Bruising",
    overuse: "Overuse Injuries"
  };

  const footballInjuryNameMap = {
    headandneckinjury: "Head and Neck Injury",
    shoulderinjury: "Shoulder Injury",
    kneeinjury: "Knee Injury",
    ankleinjury: "Ankle Injury",
    overuse: "Overuse",
    heatinjury: "Heat Injury"
  };

  const volleyballInjuryNameMap = {
    anklesprain: "Ankle Sprain",
    aclinjury: "ACL Injury",
    shoulderinjury: "Shoulder Injury",
    fingerinjury: "Finger Injury",
    headinjury: "Head Injury",
    overuse: "Overuse"
  };

  useEffect(() => {
    if (!data) return;

    if (data.sport === "basketball") {
      const basketballResult = calculatebasketballRisk(data);
      const explanationData = generatebasketballExplanation(basketballResult, data);

      const topTwo = Object.entries(basketballResult)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 2)
        .map(([key]) =>
          injuryContent.basketball.injuries.find(i => i.name === basketballInjuryNameMap[key])
        )
        .filter(Boolean);

      setExplanation(explanationData);
      setTopInjuries(topTwo);
    }

    if (data.sport === "football") {
      const footballResult = calculatefootballRisk(data);
      const explanationData = generatefootballExplanation(footballResult, data);

      const topThree = Object.entries(footballResult)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 3)
        .map(([key]) =>
          injuryContent.football.injuries.find(i => i.name === footballInjuryNameMap[key])
        )
        .filter(Boolean);

      setExplanation(explanationData);
      setTopInjuries(topThree);
    }

    if (data.sport === "volleyball") {
      const volleyballResult = calculatevolleyballRisk(data);
      const explanationData = generatevolleyballExplanation(volleyballResult, data);

      const topThree = Object.entries(volleyballResult)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 3)
        .map(([key]) =>
          injuryContent.volleyball.injuries.find(i => i.name === volleyballInjuryNameMap[key])
        )
        .filter(Boolean);

      setExplanation(explanationData);
      setTopInjuries(topThree);
    }
  }, [data]);

  const handleSportChange = (value) => {
    setSport(value);
    setData(null);
    setExplanation(null);
    setTopInjuries([]);
  };

  const handleSubmit = (formData) => {
    setData({
      ...formData,
      sport: sport.toLowerCase()
    });
  };

  return (
    <main className="bg-background text-foreground px-4 sm:px-6 md:px-8">

      {/* HERO SECTION */}
      <section className="flex flex-col items-center justify-center py-10 sm:py-12 text-center max-w-3xl mx-auto">
        <div className="flex items-center justify-center gap-3 sm:gap-4 mb-4 sm:mb-6">
          <SafePlayLogo className="size-10 sm:size-12 lg:size-14 text-primary drop-shadow-sm" />
          <h1 className="text-4xl sm:text-5xl lg:text-6xl tracking-tight font-bold">
            SafePlay
          </h1>
        </div>

        <p className="text-muted-foreground text-sm sm:text-base md:text-lg mb-6 leading-relaxed">
          Select a sport to begin your personalized injury risk assessment. We'll analyze your responses using a rule-based system to generate a personalized injury risk dashboard with prevention tips and educational insights.
        </p>

        <Combobox
          items={sports}
          value={sport}
          onValueChange={handleSportChange}
        >
          <ComboboxInput className="w-full max-w-xs" placeholder="Select a sport" />

          <ComboboxContent>
            <ComboboxEmpty>No items found.</ComboboxEmpty>

            <ComboboxList>
              {(item) => {
                const Icon = getSportIcon(item);
                return (
                  <ComboboxItem key={item} value={item}>
                    {Icon && <Icon className="size-4 text-muted-foreground" />}
                    <span>{item}</span>
                  </ComboboxItem>
                );
              }}
            </ComboboxList>
          </ComboboxContent>
        </Combobox>
      </section>

      <section>
        {sport === "Basketball" && !data && (
          <BasketballForm onSubmit={handleSubmit} />
        )}
        {sport === "Football" && !data && (
          <FootballForm onSubmit={handleSubmit} />
        )}
        {sport === "Volleyball" && !data && (
          <VolleyballForm onSubmit={handleSubmit} />
        )}
        {data && (
          <Dashboard
            explanation={explanation}
            topInjuries={topInjuries}
          />
        )}
      </section>

      <Separator className="mt-2"/>

      <section className="max-w-7xl mx-auto">
        <h1 className="text-xl sm:text-2xl mt-10 text-center border-b border-foreground w-fit mx-auto pb-1 font-bold">Developers</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 py-8">
          <Card className="rounded-2xl shadow-md">
            <CardHeader>
              <CardTitle className="text-base sm:text-lg font-semibold">Raiden Lazaro</CardTitle>
              <CardDescription>
                Senior CS Web & Mobile App Development Major @ Oregon State University
              </CardDescription>
            </CardHeader>
            <CardFooter className="text-sm leading-relaxed">
              I'm a trash Full-Stack Engineer, but I'm a professional 2K player. I'm very hard to guard. Do not mess with me...
            </CardFooter>
          </Card>
          <Card className="rounded-2xl shadow-md">
            <CardHeader>
              <CardTitle className="text-base sm:text-lg font-semibold">Rylan Lazaro</CardTitle>
              <CardDescription>
                Sophomore CS Cybersecurity Major @ Oregon State University
              </CardDescription>
            </CardHeader>
            <CardFooter className="text-sm leading-relaxed">
              I'm an aspiring Network Engineer and currently work @ NOC. I am very good at Rainbow Six Siege. Please 1v1 me...
            </CardFooter>
          </Card>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border py-6 sm:py-8 text-center text-xs sm:text-sm text-muted-foreground">
        SafePlay by Raiden &amp; Rylan
      </footer>
    </main>
  )
}
