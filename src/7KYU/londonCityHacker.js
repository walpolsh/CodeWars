// You are given an array of a journey in London, UK.
// The array will contain bus numbers and TFL tube names
//  as strings e.g.
// ['Northern', 'Central', 243, 1, 'Victoria']
// Journeys will always only contain a combination of
// tube names
// and bus numbers. Each tube journey costs £2.40
// and each bus journey costs £1.50. If there are
// 2 or more adjacent bus journeys, the bus fare
// is capped for sets of two adjacent buses and
// calculated as one bus fare for each set.
// Your task is to calculate the total cost of the journey
// and return the cost rounded to 2 decimal places in the format (where x is a number): £x.xx

export function londonCityHacker(journey) {
  //Each tube journey costs £2.40
  // each bus journey costs £1.50
  const tubeJourney = 2.4;
  const busJourney = 1.5;

  return journey;
}
