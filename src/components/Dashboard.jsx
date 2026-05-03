import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

export default function Dashboard({ explanation, topInjuries = [] }) {

    const formatHostname = (url) => {
        try {
            return new URL(url).hostname.replace(/^www\./, "");
        } catch {
            return url;
        }
    };

    const topRisks = explanation?.topRisks ?? [];
    const factors = explanation?.factors ?? [];
    const riskCount = topRisks.length || topInjuries.length;

    const gridClass = riskCount >= 3
        ? "grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        : "grid gap-4 md:grid-cols-2";

    return (
        <div className="pb-12">
            <h1 className="text-xl sm:text-2xl text-center border-b border-foreground w-fit mx-auto pb-1 font-bold">
                Your Risk Dashboard
            </h1>

            <Tabs defaultValue="risk-summary" className="w-full max-w-6xl mx-auto mt-6 sm:mt-8">

                <div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
                    <TabsList className="
                        flex justify-start sm:justify-center
                        w-max sm:w-full
                        gap-1 sm:gap-2 md:gap-3
                        p-2 md:p-3
                        rounded-xl
                        bg-muted/40 backdrop-blur-md border
                        mb-3
                    ">
                        <TabsTrigger className="text-xs sm:text-sm md:text-base px-3 sm:px-4 py-2 md:py-3 whitespace-nowrap" value="risk-summary">
                            Risk Summary
                        </TabsTrigger>
                        <TabsTrigger className="text-xs sm:text-sm md:text-base px-3 sm:px-4 py-2 md:py-3 whitespace-nowrap" value="prevention-plan">
                            Prevention Plan
                        </TabsTrigger>
                        <TabsTrigger className="text-xs sm:text-sm md:text-base px-3 sm:px-4 py-2 md:py-3 whitespace-nowrap" value="warmup">
                            Warm-Up Guide
                        </TabsTrigger>
                        <TabsTrigger className="text-xs sm:text-sm md:text-base px-3 sm:px-4 py-2 md:py-3 whitespace-nowrap" value="resources">
                            Resources
                        </TabsTrigger>
                    </TabsList>
                </div>

                <TabsContent value="risk-summary">
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-base sm:text-lg">Personalized Risk Summary</CardTitle>
                            <CardDescription>
                                A concise overview of your injury risk profile, highlighting your top risks and the key factors contributing to them based on your activity and playing habits.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4 sm:space-y-6">

                            <section className="rounded-xl border bg-muted/30 p-4 sm:p-5">
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="text-lg">📌</span>
                                    <h3 className="font-semibold text-sm sm:text-base">Overview</h3>
                                </div>
                                <p className="text-sm leading-relaxed mb-3">
                                    Based on your playing profile, we analyzed key factors such as:
                                </p>
                                <div className="flex flex-wrap gap-2 mb-3">
                                    {factors.map((factor) => (
                                        <span
                                            key={factor}
                                            className="text-xs px-3 py-1 rounded-full border bg-background"
                                        >
                                            {factor}
                                        </span>
                                    ))}
                                </div>
                                <p className="text-sm leading-relaxed text-muted-foreground">
                                    These inputs help estimate your most likely injury risks based on common patterns seen in athletes with similar profiles.
                                </p>
                            </section>

                            <section>
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="text-lg">⚠️</span>
                                    <h3 className="font-semibold text-sm sm:text-base">
                                        Your Top {riskCount} Injury {riskCount === 1 ? "Risk" : "Risks"}
                                    </h3>
                                </div>
                                <div className={gridClass}>
                                    {topRisks.map((risk, index) => (
                                        <div
                                            key={risk.key}
                                            className="rounded-xl border bg-linear-to-br from-muted/50 to-muted/10 p-4 sm:p-5"
                                        >
                                            <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                                                <div className="flex items-center gap-2 min-w-0">
                                                    <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-foreground text-background shrink-0">
                                                        #{index + 1}
                                                    </span>
                                                    <h4 className="font-semibold text-sm sm:text-base capitalize truncate">
                                                        {risk.name}
                                                    </h4>
                                                </div>
                                                <span className="text-xs text-muted-foreground whitespace-nowrap">
                                                    Risk score: {risk.score}
                                                </span>
                                            </div>
                                            <p className="text-xs uppercase tracking-wide text-muted-foreground mb-2">
                                                Why this risk
                                            </p>
                                            <ul className="space-y-2 text-sm leading-relaxed">
                                                {risk.reasons.map((reason, i) => (
                                                    <li key={i} className="flex gap-2">
                                                        <span className="text-foreground/60">•</span>
                                                        <span>{reason}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            <section className="rounded-xl border bg-muted/30 p-4 sm:p-5">
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="text-lg">🧠</span>
                                    <h3 className="font-semibold text-sm sm:text-base">What This Means</h3>
                                </div>
                                <p className="text-sm leading-relaxed">
                                    These risks are not random — they reflect stress patterns commonly seen in players with similar movement loads, playing conditions, and physical demands. The contributing factors listed in each risk highlight why those areas are more vulnerable based on your current habits.
                                </p>
                            </section>

                            <section className="rounded-xl border bg-muted/30 p-4 sm:p-5">
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="text-lg">🛡️</span>
                                    <h3 className="font-semibold text-sm sm:text-base">Next Steps</h3>
                                </div>
                                <p className="text-sm leading-relaxed mb-3">
                                    Use the Prevention Plan and Warm-Up Guide tabs to:
                                </p>
                                <ul className="space-y-2 text-sm leading-relaxed">
                                    <li className="flex gap-2">
                                        <span className="text-foreground/60">✓</span>
                                        <span>Reduce injury risk</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-foreground/60">✓</span>
                                        <span>Improve movement efficiency</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-foreground/60">✓</span>
                                        <span>Support long-term performance and durability</span>
                                    </li>
                                </ul>
                            </section>

                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="prevention-plan">
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-base sm:text-lg">Prevention Plan</CardTitle>
                            <CardDescription>
                                Targeted prevention strategies for your {riskCount === 1 ? "highest-risk injury" : `${riskCount} highest-risk injuries`}. Build these habits into your routine to lower your injury risk over time.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className={gridClass}>
                            {topInjuries.map((injury, index) => (
                                <div key={injury.name} className="rounded-xl border bg-muted/30 p-4 sm:p-5">
                                    <div className="flex items-center gap-2 mb-3">
                                        <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-foreground text-background shrink-0">
                                            #{index + 1}
                                        </span>
                                        <h3 className="font-semibold text-sm sm:text-base">{injury.name}</h3>
                                    </div>
                                    <ul className="space-y-2 text-sm leading-relaxed">
                                        {injury.preventions.map((tip, i) => (
                                            <li key={i} className="flex gap-2">
                                                <span className="text-foreground/60">✓</span>
                                                <span>{tip}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="warmup">
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-base sm:text-lg">Warm-Up Guide</CardTitle>
                            <CardDescription>
                                Sport-specific warm-ups designed to prep the areas most at risk for you. Run through these before every session to prime your muscles and joints.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className={gridClass}>
                            {topInjuries.map((injury, index) => (
                                <div key={injury.name} className="rounded-xl border bg-muted/30 p-4 sm:p-5">
                                    <div className="flex items-center gap-2 mb-3">
                                        <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-foreground text-background shrink-0">
                                            #{index + 1}
                                        </span>
                                        <h3 className="font-semibold text-sm sm:text-base">{injury.name}</h3>
                                    </div>
                                    {injury.warmup.length > 0 ? (
                                        <ol className="space-y-2 text-sm leading-relaxed list-decimal list-inside marker:text-foreground/60">
                                            {injury.warmup.map((exercise, i) => (
                                                <li key={i}>{exercise}</li>
                                            ))}
                                        </ol>
                                    ) : (
                                        <p className="text-sm text-muted-foreground italic">
                                            No specific warm-up exercises listed for this injury. Focus on general dynamic stretching before play.
                                        </p>
                                    )}
                                </div>
                            ))}
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="resources">
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-base sm:text-lg">Resources</CardTitle>
                            <CardDescription>
                                Trusted articles and references behind your prevention and warm-up plan. Use these to dig deeper into the injuries most relevant to you.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className={gridClass}>
                            {topInjuries.map((injury, index) => (
                                <div key={injury.name} className="rounded-xl border bg-muted/30 p-4 sm:p-5">
                                    <div className="flex items-center gap-2 mb-3">
                                        <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-foreground text-background shrink-0">
                                            #{index + 1}
                                        </span>
                                        <h3 className="font-semibold text-sm sm:text-base">{injury.name}</h3>
                                    </div>
                                    <ul className="space-y-3 text-sm leading-relaxed">
                                        {injury.sources.map((url, i) => (
                                            <li key={i} className="flex flex-col gap-0.5">
                                                <a
                                                    href={url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="font-medium underline underline-offset-4 hover:text-foreground/70 break-words"
                                                >
                                                    {formatHostname(url)}
                                                </a>
                                                <span className="text-xs text-muted-foreground break-all">
                                                    {url}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    )
}
