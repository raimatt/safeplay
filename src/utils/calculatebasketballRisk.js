export function calculatebasketballRisk(answers) {
    let score = {

        anklesprain: 0,
        footfracture: 0,
        jammedfingers: 0,
        kneeinjuries: 0,
        facialcuts: 0,
        deepthighbruise: 0,
        overuse: 0

    }
    
    // FREQUENCY --------------------------------
    if (answers.frequency == "high") {
        score.overuse += 3;
        score.anklesprain += 2;
        score.kneeinjuries += 2;
    }

    if (answers.frequency == "medium") {
        score.overuse += 2;
        score.kneeinjuries += 1;
        score.anklesprain += 1;
    }

    if (answers.frequency == "low") {
        score.overuse += 1;
    }

    // COURT TYPE --------------------------------
    if (answers.courttype == "indoor") {
        score.jammedfingers += 3;
        score.anklesprain += 3;
        score.overuse += 2;
        score.kneeinjuries += 2;
        score.deepthighbruise += 2;
        score.facialcuts += 1;
        score.footfracture += 1;
    }

    if (answers.courttype == "outdoor") {
        score.anklesprain += 3;
        score.overuse += 3;
        score.kneeinjuries += 3;
        score.jammedfingers += 2;
        score.deepthighbruise += 2;
        score.footfracture += 2;
        score.facialcuts += 1;
    }

    // POSITION --------------------------------
    if (answers.position == "guard") {
        score.anklesprain += 3;
        score.jammedfingers += 3;
        score.kneeinjuries += 2;
        score.overuse += 2;
        score.deepthighbruise += 1;
        score.facialcuts += 1;
        score.footfracture += 1;
    }

    if (answers.position == "wing") {
        score.anklesprain += 3;
        score.kneeinjuries += 3;
        score.jammedfingers += 2;
        score.overuse += 2;
        score.deepthighbruise += 2;
        score.facialcuts += 1;
        score.footfracture += 1;
    }

    if (answers.position == "big") {
        score.kneeinjuries += 3;
        score.deepthighbruise += 3;
        score.jammedfingers += 3;
        score.anklesprain += 2;
        score.overuse += 2;
        score.facialcuts += 2;
        score.footfracture += 2;
    }

    // PAST INJURY --------------------------------
    if (answers.pastinjury == "none") {
        score.kneeinjuries += 1;
        score.deepthighbruise += 1;
        score.jammedfingers += 1;
        score.anklesprain += 1;
        score.overuse += 1;
        score.facialcuts += 1;
        score.footfracture += 1;
    }

    if (answers.pastinjury == "ankle") {
        score.kneeinjuries += 2;
        score.deepthighbruise += 1;
        score.jammedfingers += 1;
        score.anklesprain += 3;
        score.overuse += 2;
        score.facialcuts += 1;
        score.footfracture += 1;
    }

    if (answers.pastinjury == "knee") {
        score.kneeinjuries += 3;
        score.deepthighbruise += 2;
        score.jammedfingers += 1;
        score.anklesprain += 2;
        score.overuse += 3;
        score.facialcuts += 1;
        score.footfracture += 1;
    }

    if (answers.pastinjury == "multiple") {
        score.kneeinjuries += 3;
        score.deepthighbruise += 3;
        score.jammedfingers += 2;
        score.anklesprain += 3;
        score.overuse += 3;
        score.facialcuts += 1;
        score.footfracture += 2;
    }

    // AGE GROUP --------------------------------
    if (answers.agegroup == "under13") {
        score.overuse += 3;
        score.kneeinjuries += 2;
        score.anklesprain += 2;
        score.jammedfingers += 2;
        score.deepthighbruise += 1;
        score.facialcuts += 1;
        score.footfracture += 1;
    }

    if (answers.agegroup == "14-18") {
        score.anklesprain += 3;
        score.kneeinjuries += 3;
        score.overuse += 3;
        score.jammedfingers += 2;
        score.deepthighbruise += 2;
        score.facialcuts += 2;
        score.footfracture += 2;
    }

    if (answers.agegroup == "18up") {
        score.anklesprain += 2;
        score.kneeinjuries += 2;
        score.overuse += 2;
        score.jammedfingers += 2;
        score.deepthighbruise += 2;
        score.facialcuts += 2;
        score.footfracture += 2;
    }

    return score;
}