import nlp from 'compromise';

const getRandomElement = (array) => array[Math.floor(Math.random() * array.length)];

const getRandomWord = (type) => {
  // Create a large text corpus to extract words from
  const corpus = `
    The quick brown fox jumps over the lazy dog. 
    Artificial intelligence is reshaping the world of technology.
    Quantum computing promises to revolutionize data processing.
    Climate change poses significant challenges to global ecosystems.
    Space exploration continues to push the boundaries of human knowledge.
    Renewable energy sources are becoming increasingly important.
    The human brain is capable of remarkable feats of creativity.
    Nanotechnology offers exciting possibilities in medicine and manufacturing.
    Virtual reality is transforming entertainment and education.
    Genetic engineering raises both hopes and ethical concerns.
  `;

  const doc = nlp(corpus);
  let words;

  switch (type) {
    case 'Noun':
      words = doc.nouns().out('array');
      break;
    case 'Verb':
      words = doc.verbs().out('array');
      break;
    case 'Adjective':
      words = doc.adjectives().out('array');
      break;
    default:
      words = doc.words().out('array');
  }

  return getRandomElement(words);
};

const subjects = [
  () => `A ${getRandomWord('Adjective')} ${getRandomWord('Noun')}`,
  () => `The ${getRandomWord('Noun')} of ${getRandomWord('Noun')}`,
  () => `${getRandomWord('Adjective')} ${getRandomWord('Noun')}s`,
];

const actions = [
  () => getRandomWord('Verb'),
  () => `${getRandomWord('Verb')}s through`,
  () => `${getRandomWord('Verb')}s with`,
];

const objects = [
  () => `${getRandomWord('Adjective')} ${getRandomWord('Noun')}s`,
  () => `the realm of ${getRandomWord('Noun')}`,
  () => `${getRandomWord('Adjective')} ${getRandomWord('Noun')} patterns`,
];

const modifiers = [
  () => `in a world of ${getRandomWord('Noun')}`,
  () => `using ${getRandomWord('Adjective')} algorithms`,
  () => `across ${getRandomWord('Adjective')} dimensions`,
];

export const generateRandomSentence = () => {
  const subject = getRandomElement(subjects)();
  const action = getRandomElement(actions)();
  const object = getRandomElement(objects)();
  const modifier = getRandomElement(modifiers)();

  return `${subject} ${action} ${object} ${modifier}.`;
};