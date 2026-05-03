export function calculatefootballRisk(answers) {
    let score = {

        headandneckinjury: 0,
        shoulderinjury: 0,
        kneeinjury: 0,
        ankleinjury: 0,
        overuse: 0,
        heatinjury: 0

    }

    // FREQUENCY --------------------------------
    if (answers.frequency == "high") {
        score.overuse += 3;
        score.kneeinjury += 2;
        score.ankleinjury += 2;
        score.heatinjury += 2;
    }

    if (answers.frequency == "medium") {
        score.overuse += 2;
        score.kneeinjury += 1;
        score.ankleinjury += 1;
        score.heatinjury += 1;
    }

    if (answers.frequency == "low") {
        score.overuse += 1;
    }

    // CONTACT LEVEL --------------------------------
    if (answers.contactlevel == "high") {
        score.headandneckinjury += 3;
        score.shoulderinjury += 3;
        score.kneeinjury += 2;
        score.ankleinjury += 1;
        score.heatinjury += 2;
    }

    if (answers.contactlevel == "low") {
        score.headandneckinjury += 1;
        score.shoulderinjury += 1;
        score.heatinjury += 1;
    }

    // POSITION --------------------------------
    if (answers.position == "lineman") {
        score.headandneckinjury += 3;
        score.shoulderinjury += 3;
        score.kneeinjury += 2;
        score.ankleinjury += 1;
        score.overuse += 3;
        score.heatinjury += 3;
    }

    if (answers.position == "linebacker") {
        score.headandneckinjury += 3;
        score.shoulderinjury += 3;
        score.kneeinjury += 3;
        score.ankleinjury += 2;
        score.overuse += 2;
        score.heatinjury += 2;
    }

    if (answers.position == "runningback") {
        score.kneeinjury += 3;
        score.ankleinjury += 3;
        score.headandneckinjury += 2;
        score.shoulderinjury += 2;
        score.overuse += 2;
        score.heatinjury += 1;
    }

    if (answers.position == "quarterback") {
        score.shoulderinjury += 3;
        score.kneeinjury += 2;
        score.headandneckinjury += 2;
        score.ankleinjury += 1;
        score.overuse += 1;
        score.heatinjury += 1;
    }

    if (answers.position == "receiver") {
        score.kneeinjury += 3;
        score.ankleinjury += 3;
        score.headandneckinjury += 2;
        score.shoulderinjury += 1;
        score.overuse += 2;
        score.heatinjury += 1;
    }

    if (answers.position == "kicker") {
        score.kneeinjury += 1;
        score.ankleinjury += 1;
        score.heatinjury += 1;
        score.overuse += 1;
    }

    // FIELD TYPE --------------------------------
    if (answers.fieldtype == "turf") {
        score.kneeinjury += 2;
        score.ankleinjury += 3;
        score.heatinjury += 2;
        score.overuse += 1;
    }

    if (answers.fieldtype == "grass") {
        score.kneeinjury += 1;
        score.ankleinjury += 1;
        score.heatinjury += 1;
    }

    // PAST INJURIES --------------------------------
    if (answers.pastinjuries == "none") {
        score.headandneckinjury += 1;
        score.shoulderinjury += 1;
        score.kneeinjury += 1;
        score.ankleinjury += 1;
        score.overuse += 1;
        score.heatinjury += 1;
    }

    if (answers.pastinjuries == "shoulder") {
        score.shoulderinjury += 3;
        score.headandneckinjury += 1;
        score.overuse += 2;
    }

    if (answers.pastinjuries == "knee") {
        score.kneeinjury += 3;
        score.ankleinjury += 1;
        score.overuse += 2;
    }

    if (answers.pastinjuries == "ankle") {
        score.ankleinjury += 3;
        score.kneeinjury += 2;
        score.overuse += 2;
    }

    // ROLE STYLE --------------------------------
    if (answers.rolestyle == "speed") {
        score.kneeinjury += 3;
        score.ankleinjury += 3;
        score.overuse += 2;
        score.heatinjury += 1;
    }

    if (answers.rolestyle == "balanced") {
        score.kneeinjury += 2;
        score.ankleinjury += 2;
        score.shoulderinjury += 1;
        score.overuse += 2;
    }

    return score;
}
