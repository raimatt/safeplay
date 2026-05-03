export function generatevolleyballExplanation(score, answers) {

    let topThree = Object.entries(score)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 3);

    const injuryNames = {
        anklesprain: "ankle sprain",
        aclinjury: "ACL injury",
        shoulderinjury: "shoulder injury",
        fingerinjury: "finger injury",
        headinjury: "head injury",
        overuse: "overuse"
    };

    const fallbackReasons = {
        anklesprain: "frequent jumping and landing increases ankle stress",
        aclinjury: "explosive jumping and cutting load the ACL",
        shoulderinjury: "repeated overhead motion strains the shoulder",
        fingerinjury: "constant ball contact increases finger injury risk",
        headinjury: "court collisions and diving increase head impact risk",
        overuse: "high activity volume increases overall strain"
    };

    let topRisks = topThree.map(([injury, value]) => {

        let reasons = [];

        if (injury === "anklesprain") {

            reasons.push("volleyball involves frequent jumping and landing");

            if (answers.jumpintensity === "high") {
                reasons.push("you jump at a high intensity");
            }

            if (answers.pastinjury === "ankle") {
                reasons.push("you had a previous ankle injury");
            }
        }

        if (injury === "aclinjury") {

            if (answers.jumpintensity === "high") {
                reasons.push("you perform explosive jumps and landings");
            }

            if (answers.rolestyle === "offensive") {
                reasons.push("your role involves aggressive movement and attacking");
            }

            if (answers.pastinjury === "knee") {
                reasons.push("you had a previous knee injury");
            }
        }

        if (injury === "shoulderinjury") {

            if (answers.position === "setter" || answers.position === "outside" || answers.position === "opposite") {
                reasons.push("your position involves frequent overhead motions");
            }

            if (answers.rolestyle === "offensive") {
                reasons.push("you perform repeated hitting and attacking motions");
            }

            if (answers.pastinjury === "shoulder") {
                reasons.push("you had a previous shoulder injury");
            }
        }

        if (injury === "fingerinjury") {

            if (answers.position === "setter" || answers.position === "middle") {
                reasons.push("you frequently contact the ball with your hands");
            }

            if (answers.courttype === "indoor") {
                reasons.push("indoor play increases ball contact intensity");
            }
        }

        if (injury === "headinjury") {

            if (answers.position === "libero") {
                reasons.push("your position involves diving and defensive plays");
            }

            if (answers.rolestyle === "defensive") {
                reasons.push("you focus on defensive movements and floor contact");
            }
        }

        if (injury === "overuse") {

            reasons.push("of high overall physical activity");

            if (answers.frequency === "high") {
                reasons.push("you play frequently");
            }

            if (answers.jumpintensity === "high") {
                reasons.push("you repeatedly jump at high intensity");
            }
        }

        const finalReasons = reasons.length > 0 ? reasons.slice(0, 3) : [fallbackReasons[injury]];

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
            "Jump intensity",
            "Position",
            "Court type",
            "Role style",
            "Previous injury history"
        ],
        topRisks
    };
}
