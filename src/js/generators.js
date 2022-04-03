/**
 * Generates random characters
 *
 * @param allowedTypes iterable of classes
 * @param maxLevel max character level
 * @returns Character type children (ex. Magician, Bowman, etc)
 */
export function* characterGenerator(allowedTypes, maxLevel) {
  // TODO: write logic here
  const typeId = Math.floor(Math.random() * allowedTypes.length);
  const generatedCharacter = allowedTypes[typeId];
  generatedCharacter.level = maxLevel;
  yield generatedCharacter;
}

export function generateTeam(allowedTypes, maxLevel, characterCount) {
  // TODO: write logic here
}
