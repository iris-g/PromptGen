import nlp from 'compromise';

const getRandomElement = (array) => array[Math.floor(Math.random() * array.length)];

const getRandomWord = (type) => {
  // Create a large text corpus to extract words from
  const corpus = `
  The rapid advancement of artificial intelligence is revolutionizing industries.
  Machine learning algorithms enable computers to learn from vast amounts of data.
  Blockchain technology ensures secure and transparent transactions.
  Autonomous vehicles are set to transform the transportation sector.
  Renewable energy, such as solar and wind, is vital for a sustainable future.
  Advances in medical technology have significantly improved patient outcomes.
  The internet of things connects everyday devices to the global network.
  Space missions to Mars are paving the way for human exploration of the Red Planet.
  Environmental conservation efforts are crucial for preserving biodiversity.
  Cybersecurity threats continue to evolve, requiring robust defense mechanisms.
  Quantum computing has the potential to solve complex problems beyond classical computers.
  The study of mathematical sequences like the Fibonacci-Lucas Sequence, Pell Numbers, and Eulerian Numbers reveals the beauty of numbers in nature.
  The exploration of fractals such as the Mandelbrot Set, Sierpinski Triangle, and Barnsley Fern unveils the complexity hidden within simple patterns.
  The concept of the Golden Ratio Sequence is evident in art, architecture, and nature, symbolizing balance and harmony.
  Hyperbolic Geometry and Non-Euclidean Geometry challenge our understanding of space, revealing new perspectives in advanced geometric structures.
  The Klein Bottle and Möbius Strip are fascinating examples of surfaces with unique topological properties.
  Cellular Automata, such as Wolfram's Rule 30, demonstrate how simple rules can lead to complex behavior.
  The study of geometric transformations, including Circle Inversion and Affine Transformations, provides insight into the symmetry and structure of shapes.
  Chaotic Attractors and Hypercomplex Fractals are key to understanding the unpredictable yet structured nature of chaotic systems.
  The intricate designs of Celtic Knots and Penrose Tiling showcase the intersection of art and mathematics.
  Tessellations and Spirograph Patterns are beautiful examples of repetitive geometric patterns that fill space in a regular manner.
  Algorithmic patterns, like Recursion and Turing Patterns, are fundamental to understanding the processes underlying computational systems.
  The fascinating world of fractals extends into nature, where patterns such as Cantor Dust and Fractal Flames are found in natural formations.
  Advanced geometric structures, like Polytopes and Poincaré Disks, push the boundaries of our understanding of shapes and dimensions.
  The study of Voronoi Diagrams and Symmetry Groups reveals the underlying order in seemingly random systems.
  Exploring the Hyperbolic Paraboloid surfaces in architecture and design showcases the application of mathematical principles in real-world structures.
  The role of mathematics in creative expression is exemplified by the use of Bezier Curves and Lissajous Curves in animation and graphic design.
  The exploration of self-avoiding walks and hexaflexagons illustrates the playful and inventive nature of mathematical exploration.
  Genetic research is providing insights into the human genome and its implications.
  The global pandemic has accelerated the adoption of remote work technologies.
  Cloud computing provides scalable and flexible resources for businesses and individuals.
  The rise of digital currencies is challenging traditional financial systems.
  Virtual and augmented reality are changing the way we experience the digital world.
  Advances in quantum mechanics are expanding our understanding of the universe.
  The development of smart grids is optimizing energy distribution and consumption.
  Artificial intelligence is increasingly being used to address global challenges.
  Ethical considerations are paramount in the development of autonomous systems.
  3D printing is revolutionizing manufacturing and prototyping processes.
  The expansion of renewable energy infrastructure is key to reducing carbon emissions.
  The study of consciousness remains one of the greatest challenges in neuroscience.
  The impact of global trade on economic development cannot be understated.
  Advances in telecommunication are connecting people across vast distances.
  The rise of e-commerce has transformed the retail industry.
  Understanding the human microbiome is key to advancing health and wellness.
  The future of artificial intelligence lies in developing general-purpose AI systems.
  Biotechnology advancements are leading to breakthroughs in personalized medicine.
  The integration of AI into daily life raises questions about privacy and ethics.
  Augmented reality applications are enhancing both consumer and enterprise experiences.
  The exploration of deep oceans is revealing new species and ecosystems.
  The discovery of new exoplanets fuels our search for extraterrestrial life.
  Understanding the brain's neural networks is crucial for advancing cognitive science.
  The growth of the gig economy is reshaping the traditional labor market.
  The study of epigenetics is shedding light on gene expression and inheritance.
  The expansion of renewable energy technologies is reducing our dependence on fossil fuels.
  Data science is uncovering valuable insights from large and complex datasets.
  The study of artificial neural networks is advancing our understanding of human cognition.
  The role of ethics in technology development is becoming more prominent.
  The rise of e-commerce has transformed the retail industry.
  The discovery of new exoplanets fuels our search for extraterrestrial life.
  Virtual and augmented reality are changing the way we experience the digital world.
  The study of consciousness remains one of the greatest challenges in neuroscience.
  The vibrant brushstrokes of impressionist paintings capture fleeting moments of light.
  Abstract expressionism explores emotional and psychological states through non-representational forms.
  The Renaissance masters perfected the use of perspective and chiaroscuro in their artworks.
  Surrealist paintings delve into the realm of dreams and the subconscious mind.
  Pop art challenged traditional boundaries between high art and popular culture.
  The intricate details of baroque art convey drama, exuberance, and grandeur.
  Minimalist art strips away excessive elements to focus on essential forms.
  Cubism revolutionized European painting by presenting multiple viewpoints simultaneously.
  Art Nouveau's organic forms and intricate patterns adorn architecture and decorative arts.
  The bold colors and primitive style of Fauvism shocked the art world in the early 20th century.
  
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
const artStyles = [
    'concept art', 'digital illustration', 'oil painting', 'acrylic painting',
    'painterly style', 'tempera', 'watercolor', 'gouache', 'ink illustration',
    'line drawing', 'pen and ink', 'ligne claire', 'sketch', 'charcoal drawing',
    'animation art', 'daguerreotype', 'infographic', 'technical drawing', 'CGI'
  ];
  
  const compositions = [
    'extreme close-up', 'close-up', 'medium close-up', 'medium shot',
    'cowboy shot', 'medium full shot', 'full shot', 'wide shot', 'extreme wide shot'
  ];
  
  const colorSchemes = [
    'vivid colors', 'vibrant colors', 'cinecolor', 'desaturated', 'cold colours',
    'warm colors', 'muted colors', 'muted tones', 'tonal colors', 'monochromatic',
    'complementary colors', 'split-complementary', 'achromatic', 'analogous colors',
    'triadic colors', 'tetradic colors', 'polychromatic'
  ];
  
  const visualTechniques = [
    'stencil volume shadows', 'lumen reflections', 'linear render',
    'physically based render', 'straightline render', 'low contrast', 'high contrast',
    'symmetric eyes', 'detailed ultra-realistic eyes', 'curvaceous forms',
    'proportional figure', 'realistic proportions', 'realistic skin', 'dynamic pose'
  ];
  
  const subjects = [
    () => `A ${getRandomWord('Adjective')} ${getRandomWord('Noun')}`,
    () => `The ${getRandomWord('Noun')} of ${getRandomWord('Noun')}`,
    () => `${getRandomWord('Adjective')} ${getRandomWord('Noun')}s`,
    () => `A ${getRandomElement(['1/4', '1/2', '3/4', 'full body'])} portrait of a ${getRandomWord('Adjective')} ${getRandomWord('Noun')}`,
  ];
  
  const actions = [
    () => getRandomWord('Verb'),
    () => `${getRandomWord('Verb')}s through`,
    () => `${getRandomWord('Verb')}s with`,
    () => `emerges from`,
    () => `transforms into`,
  ];
  
  const objects = [
    () => `${getRandomWord('Adjective')} ${getRandomWord('Noun')}s`,
    () => `the realm of ${getRandomWord('Noun')}`,
    () => `${getRandomWord('Adjective')} ${getRandomWord('Noun')} patterns`,
    () => `a landscape of ${getRandomWord('Noun')}s`,
  ];
  
  const modifiers = [
    () => `in the style of ${getRandomElement(artStyles)}`,
    () => `using a ${getRandomElement(compositions)} composition`,
    () => `with ${getRandomElement(colorSchemes)}`,
    () => `featuring ${getRandomElement(visualTechniques)}`,
    () => `inspired by ${getRandomWord('Adjective')} ${getRandomWord('Noun')}`,
  ];
export const generateRandomSentence = () => {
    const subject = getRandomElement(subjects)();
    const action = getRandomElement(actions)();
    const object = getRandomElement(objects)();
    const modifier1 = getRandomElement(modifiers)();
    const modifier2 = getRandomElement(modifiers)();

    return `${subject} ${action} ${object}, ${modifier1} and ${modifier2}.`;
};