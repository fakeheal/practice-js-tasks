/**
 *  Use the next few constants for easier testing
 */

// Contains Game titles
export const TITLES = [
  'Fortnite',
  'Minecraft',
  'Counter-Strike: Global Offensive',
  'League of Legends',
  'ROBLOX',
  'Valorant',
  'Grand Theft Auto V',
  'Apex Legends',
  'Call of Duty: Modern Warfare/Warzone',
  'Rocket League',
  'Tom Clancy\'s Rainbow Six: Siege',
  'Destiny 2',
];


export const GENRES = [
  'Shooter',
  'Action adventure',
  'Simulation',
  'Racing',
  'MOBA',
  'Battle royale',
  'Sports',
  'Strategy',
  'Puzzle platform',
  'Action platform',
  'Online board games'
];


const getRandomElement = (array) => array.sort(() => 0.5 - Math.random())[0];
export const getRandomTitle = () => getRandomElement(TITLES);
export const getRandomGenre = () => getRandomElement(GENRES);
export const getRandomPlatform = () => getRandomElement(['IOS', 'ANDROID', 'CONSOLE', 'PC']);


