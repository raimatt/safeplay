import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Combobox, ComboboxContent, ComboboxEmpty, ComboboxInput, ComboboxItem, ComboboxList, } from "@/components/ui/combobox"

import BasketballForm from "./components/forms/BasketballForm.jsx"
import FootballForm from "./components/forms/FootballForm.jsx"
import VolleyballForm from "./components/forms/VolleyballForm.jsx"

export default function App() {
  const [ sport, setSport ] = useState("")
  const [ data, setData ] = useState(null)

  const sports = [
    "Basketball",
    "Football",
    "Volleyball"
  ];

  return (
    <main className="bg-background text-foreground px-8">
      
      {/* HERO SECTION */}
      <section className="flex flex-col items-center justify-center py-12 text-center">
        <h1 className="text-4xl md:text-5xl tracking-tight lg:text-6xl mb-6 font-bold">
          SafePlay
        </h1>

        <p className="text-muted-foreground text-md md:text-lg mb-6">
          Select a sport to begin your personalized injury risk assessment. We’ll analyze your responses using a rule-based system to generate a personalized injury risk dashboard with prevention tips and educational insights.
        </p>

        <Combobox
          items={sports}
          value={sport}
          onValueChange={setSport}
        >
          <ComboboxInput className="" placeholder="Select a sport" />

          <ComboboxContent>
            <ComboboxEmpty>No items found.</ComboboxEmpty>

            <ComboboxList>
              {(item) => (
                <ComboboxItem key={item} value={item}>
                  {item}
                </ComboboxItem>
              )}
            </ComboboxList>
          </ComboboxContent>
        </Combobox>
      </section>

      <section>
        {sport === "Basketball" && (
          <BasketballForm onSubmit={(formData) => {
            setData(formData)
          }} />
        )}
        {sport === "Football" && <FootballForm />}
        {sport === "Volleyball" && <VolleyballForm />}
      </section>

      <Separator className="mt-14"/>

      <section>
        <h1 className="text-2xl mt-10 text-center border-b border-foreground w-fit mx-auto pb-1 font-bold">Developers</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8 max-w-7xl mx-auto">
          <Card className="rounded-2xl shadow-md">
            <CardHeader>
              <CardTitle className="text-lg font-semibold">Raiden Lazaro</CardTitle>
              <CardDescription>
                Senior CS Major @ Oregon State University
              </CardDescription> 
            </CardHeader>
            <CardFooter>
              I'm a trash Full-Stack Engineer, but I'm a professional 2K player. I'm very hard to guard. Do not mess with me...
            </CardFooter>
          </Card>
          <Card className="rounded-2xl shadow-md">
            <CardHeader>
              <CardTitle className="text-lg font-semibold">Name</CardTitle>
              <CardDescription>
                Description
              </CardDescription>
            </CardHeader>
            <CardFooter>
              Content
            </CardFooter>
          </Card>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">
        SafePlay by Raiden & Rylan
      </footer>
    </main>
  )
}