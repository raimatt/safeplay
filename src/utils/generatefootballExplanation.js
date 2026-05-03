export function generatefootballExplanation(score, answers) {

    let topThree = Object.entries(score)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 3);

    const injuryNames = {
        headandneckinjury: "head and neck injury",
        shoulderinjury: "shoulder injury",
        kneeinjury: "knee injury",
        ankleinjury: "ankle injury",
        overuse: "overuse",
        heatinjury: "heat-related injury"
    };

    const fallbackReasons = {
        headandneckinjury: "football collisions place repeated load on the head and neck",
        shoulderinjury: "blocking and tackling motions stress the shoulder joint",
        kneeinjury: "your play style places repeated load on your knees",
        ankleinjury: "football requires rapid direction changes that stress the ankles",
        overuse: "high activity volume increases overall strain",
        heatinjury: "football is often played in hot conditions"
    };

    let topRisks = topThree.map(([injury, value]) => {

        let reasons = [];

        if (injury === "headandneckinjury") {

            reasons.push("football involves frequent collisions");

            if (answers.contactlevel === "high") {
                reasons.push("you play in a high-contact environment");
            }

            if (answers.position === "lineman" || answers.position === "linebacker") {
                reasons.push("your position involves constant physical contact");
            }
        }

        if (injury === "shoulderinjury") {

            if (answers.contactlevel === "high") {
                reasons.push("you experience frequent upper-body contact");
            }

            if (answers.position === "lineman" || answers.position === "linebacker") {
                reasons.push("your position requires blocking and tackling");
            }

            if (answers.pastinjuries === "shoulder") {
                reasons.push("you had a previous shoulder injury");
            }
        }

        if (injury === "kneeinjury") {

            if (answers.frequency === "high") {
                reasons.push("you play frequently");
            }

            if (answers.rolestyle === "speed") {
                reasons.push("your play style involves quick cutting and movement");
            }

            if (answers.pastinjuries === "knee") {
                reasons.push("you had a previous knee injury");
            }
        }

        if (injury === "ankleinjury") {

            reasons.push("football requires rapid direction changes");

            if (answers.fieldtype === "turf") {
                reasons.push("turf fields increase joint stress");
            }

            if (answers.pastinjuries === "ankle") {
                reasons.push("you had a previous ankle injury");
            }
        }

        if (injury === "overuse") {

            reasons.push("of high overall physical load");

            if (answers.frequency === "high") {
                reasons.push("you play frequently");
            }

            if (answers.position === "lineman") {
                reasons.push("your position involves constant physical strain");
            }
        }

        if (injury === "heatinjury") {

            reasons.push("football is often played in hot conditions");

            if (answers.frequency === "high") {
                reasons.push("you spend long periods training or playing");
            }

            if (answers.contactlevel === "high") {
                reasons.push("intense gameplay increases heat stress");
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
            "Contact level",
            "Position",
            "Field type",
            "Role style",
            "Previous injury history"
        ],
        topRisks
    };
}
