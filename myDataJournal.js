// GitHub Repo: https://github.com/TenGallons/cs81-module4b-mydataexplorer

// Predictions (before coding):
// - Most screen time day: Friday
// - Best focus day: Tuesday
// - Does more caffeine help focus? I think yes, slightly

const weekData = [
  { day: "Monday",    sleepHours: 6.5, screenTime: 6.0, mood: "tired",      caffeineIntake: 2, focusLevel: 5 },
  { day: "Tuesday",   sleepHours: 7.5, screenTime: 4.5, mood: "productive", caffeineIntake: 1, focusLevel: 8 },
  { day: "Wednesday", sleepHours: 6.0, screenTime: 7.0, mood: "busy",       caffeineIntake: 2, focusLevel: 6 },
  { day: "Thursday",  sleepHours: 7.0, screenTime: 5.0, mood: "okay",       caffeineIntake: 1, focusLevel: 7 },
  { day: "Friday",    sleepHours: 5.5, screenTime: 8.5, mood: "stressed",   caffeineIntake: 3, focusLevel: 6 },
  { day: "Saturday",  sleepHours: 8.5, screenTime: 6.5, mood: "relaxed",    caffeineIntake: 0, focusLevel: 7 },
  { day: "Sunday",    sleepHours: 8.0, screenTime: 5.5, mood: "reset",      caffeineIntake: 1, focusLevel: 7 }
];

console.log("Analyzing my weekly data...");

function findHighestScreenTime(data) {
  let best = data[0];
  for (let d of data) {
    if (d.screenTime > best.screenTime) best = d;
  }
  return best;
}

function averageSleep(data) {
  let total = 0;
  for (let d of data) total += d.sleepHours;
  return Math.round((total / data.length) * 10) / 10;
}

const mostScreen = findHighestScreenTime(weekData);
console.log("Most screen time:", mostScreen.day, "(" + mostScreen.screenTime + " hrs)");
console.log("Average sleep:", averageSleep(weekData), "hrs");

function mostFrequentMood(data) {
  const counts = {};
  for (let d of data) {
    counts[d.mood] = (counts[d.mood] || 0) + 1;
  }
  let bestMood = null;
  let bestCount = 0;
  for (let mood in counts) {
    if (counts[mood] > bestCount) {
      bestMood = mood;
      bestCount = counts[mood];
    }
  }
  return bestMood;
}

function correlateCaffeineToFocus(data) {
  // Simple comparison: average focus on low caffeine (0-1 cups) vs high caffeine (2+ cups)
  let lowTotal = 0, lowCount = 0;
  let highTotal = 0, highCount = 0;

  for (let d of data) {
    if (d.caffeineIntake <= 1) {
      lowTotal += d.focusLevel;
      lowCount++;
    } else {
      highTotal += d.focusLevel;
      highCount++;
    }
  }

  const lowAvg = lowCount ? Math.round((lowTotal / lowCount) * 10) / 10 : null;
  const highAvg = highCount ? Math.round((highTotal / highCount) * 10) / 10 : null;

  return { lowAvg, highAvg };
}

console.log('Most frequent mood:', '"' + mostFrequentMood(weekData) + '"');

const caf = correlateCaffeineToFocus(weekData);
console.log("Avg focus (0-1 cups):", caf.lowAvg);
console.log("Avg focus (2+ cups):", caf.highAvg);