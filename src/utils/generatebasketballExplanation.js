import { calculatebasketballRisk } from "./calculatebasketballRisk.js"

export function generatebasketballExplanation(score, answers) {

    let topTwo = Object.entries(score)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 2);

    const injuryNames = {
        anklesprain: "ankle sprain",
        kneeinjuries: "knee injury",
        jammedfingers: "jammed fingers",
        footfracture: "foot fracture",
        facialcuts: "facial cuts",
        deepthighbruise: "deep thigh bruise",
        overuse: "overuse"
    };

    let result = topTwo.map(([injury, value]) => {

        let reasons = [];

        if (injury === "anklesprain") {

            if (answers.courttype === "outdoor") {
                reasons.push("you play on outdoor courts");
            }

            if (answers.pastinjury === "ankle") {
                reasons.push("you had a previous ankle injury");
            }
        }

        if (injury === "overuse") {

            if (answers.frequency === "high") {
                reasons.push("you play frequently");
            }

            if (answers.agegroup === "18up") {
                reasons.push("you are 18 or older");
            }
        }

        if (injury === "kneeinjuries") {

            if (answers.frequency === "high") {
                reasons.push("you play frequently");
            }

            if (answers.position === "big") {
                reasons.push("you play a physical position");
            }

            if (answers.agegroup === "14-18") {
                reasons.push("you are in a high-growth age range");
            }
        }

        if (injury === "jammedfingers") {

            if (answers.position === "guard" || answers.position === "wing") {
                reasons.push("you handle the ball often");
            }

            if (answers.courttype === "indoor") {
                reasons.push("indoor play increases hand contact");
            }
        }

        if (injury === "footfracture") {
            
            if (answers.courttype === "outdoor") {
                reasons.push("outdoor courts can be uneven");
            }
        }

        if (injury === "deepthighbruise") {

            if (answers.position === "big") {
                reasons.push("there's more physical contact in the paint")
            }
        }

        return `Your risk is ${injuryNames[injury]} because ${reasons.join(" and ")}`;
    });

    return `Your highest risks are:\n1. ${result[0]}\n2. ${result[1]}`;
}