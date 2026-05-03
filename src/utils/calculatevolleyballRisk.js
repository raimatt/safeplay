export function calculatevolleyballRisk(answers) {
    let score = {

        anklesprain: 0,
        aclinjury: 0,
        shoulderinjury: 0,
        fingerinjury: 0,
        headinjury: 0,
        overuse: 0

    }

    // FREQUENCY --------------------------------
    if (answers.frequency == "high") {
        score.overuse += 3;
        score.anklesprain += 2;
        score.aclinjury += 2;
        score.shoulderinjury += 2;
        score.fingerinjury += 1;
    }

    if (answers.frequency == "medium") {
        score.overuse += 2;
        score.anklesprain += 1;
        score.aclinjury += 1;
        score.shoulderinjury += 1;
    }

    if (answers.frequency == "low") {
        score.overuse += 1;
    }

    // JUMP INTENSITY --------------------------------
    if (answers.jumpintensity == "high") {
        score.anklesprain += 3;
        score.aclinjury += 3;
        score.overuse += 2;
        score.shoulderinjury += 1;
    }

    if (answers.jumpintensity == "medium") {
        score.anklesprain += 2;
        score.aclinjury += 2;
        score.overuse += 1;
    }

    if (answers.jumpintensity == "low") {
        score.anklesprain += 1;
        score.aclinjury += 1;
    }

    // POSITION --------------------------------
    if (answers.position == "setter") {
        score.fingerinjury += 3;
        score.shoulderinjury += 2;
        score.anklesprain += 1;
        score.overuse += 1;
    }

    if (answers.position == "outside") {
        score.shoulderinjury += 3;
        score.aclinjury += 3;
        score.anklesprain += 2;
        score.fingerinjury += 1;
        score.overuse += 2;
    }

    if (answers.position == "opposite") {
        score.shoulderinjury += 3;
        score.aclinjury += 3;
        score.anklesprain += 2;
        score.fingerinjury += 1;
        score.overuse += 2;
    }

    if (answers.position == "middle") {
        score.fingerinjury += 3;
        score.aclinjury += 3;
        score.anklesprain += 2;
        score.shoulderinjury += 2;
        score.overuse += 1;
    }

    if (answers.position == "libero") {
        score.headinjury += 3;
        score.anklesprain += 2;
        score.fingerinjury += 1;
        score.overuse += 1;
    }

    // COURT TYPE --------------------------------
    if (answers.courttype == "indoor") {
        score.fingerinjury += 2;
        score.shoulderinjury += 1;
        score.aclinjury += 1;
        score.overuse += 1;
    }

    if (answers.courttype == "outdoor") {
        score.anklesprain += 2;
        score.headinjury += 1;
        score.aclinjury += 1;
    }

    // ROLE STYLE --------------------------------
    if (answers.rolestyle == "offensive") {
        score.shoulderinjury += 3;
        score.aclinjury += 2;
        score.fingerinjury += 1;
        score.overuse += 1;
    }

    if (answers.rolestyle == "defensive") {
        score.headinjury += 3;
        score.fingerinjury += 2;
        score.anklesprain += 1;
        score.overuse += 1;
    }

    // PAST INJURY --------------------------------
    if (answers.pastinjury == "none") {
        score.anklesprain += 1;
        score.aclinjury += 1;
        score.shoulderinjury += 1;
        score.fingerinjury += 1;
        score.headinjury += 1;
        score.overuse += 1;
    }

    if (answers.pastinjury == "ankle") {
        score.anklesprain += 3;
        score.aclinjury += 2;
        score.overuse += 2;
    }

    if (answers.pastinjury == "knee") {
        score.aclinjury += 3;
        score.anklesprain += 2;
        score.overuse += 2;
    }

    if (answers.pastinjury == "shoulder") {
        score.shoulderinjury += 3;
        score.overuse += 2;
    }

    return score;
}
