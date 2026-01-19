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