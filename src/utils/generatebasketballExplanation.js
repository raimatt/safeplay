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

    const fallbackReasons = {
        anklesprain: "your movement patterns and court conditions place stress on your ankles",
        kneeinjuries: "your play style places repeated load on your knees",
        jammedfingers: "frequent ball handling increases finger contact risk",
        footfracture: "impact and surface conditions increase foot stress",
        facialcuts: "physical contact situations increase facial injury risk",
        deepthighbruise: "contact in crowded play areas increases impact risk",
        overuse: "high activity volume increases overall strain"
    };

    let topRisks = topTwo.map(([injury, value]) => {

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
                reasons.push("there's more physical contact in the paint");
            }
        }

        const finalReasons = reasons.length > 0 ? reasons : [fallbackReasons[injury]];

        return {
            key: injury,
            name: injuryNames[injury],
            score: value,
            reasons: finalReasons
        };
    });

    return {
        factors: [
            "Frequency of play",
            "Court environment",
            "Position",
            "Age group",
            "Previous injury history"
        ],
        topRisks
    };
}
