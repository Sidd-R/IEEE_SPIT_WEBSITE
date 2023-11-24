function importAll(r) {
  let images = {};
  r.keys().forEach(item => {
    images[item.replace('./', '').replace(/\.(jpg|jpeg|png)$/, '')] = r(item);
  });
  return images;
}

const images22 = importAll(require.context('../images/events22', false, /\.(jpeg|jpg|png)$/));
const images23 = importAll(require.context('../images/events23', false, /\.(jpeg|jpg|png)$/));

const events23 = [
  {
    name: 'Blog Writing 2023',
    desc: 'Circular Economy X Blog Writing Competition',
    image: images23['blog'],
  },
  {
    name: 'IEEE Day 2023',
    desc: 'Celebration of IEEE Day with our Honoured Guests',
    image: images23['ieeeday'],
  },
  {
    name: 'Aarambh 2023',
    desc: 'An Ice breaker Session for our Freshers',
    image: images23['aarambh'],
  },
];

const events22 = [
  {
    name: 'Peripherathon 2023',
    desc: 'A AI powered IoT hackathon',
    image: images22['peripherithon'],
  },
  {
    name: 'codeHunt 2023',
    desc: 'A mix of treasure hunt and a CP contest along with the guidance of ICPC finalist Vivek Gupta',
    image: images22['codehunt'],
  },
  {
    name: 'Innovation Cup 2023',
    desc: 'A hardware hackathon',
    image: images22['IC'],
  },
  {
    name: 'GSOC Webinar 2023',
    desc: 'A webinar on how to get selected for GSOC',
    image: images22['gsoc_webinar'],
  },
  {
    name: 'Tackling Placements 2023',
    desc: "A seminar by our college's alumni about placements and higher studies",
    image: images22['placement'],
  },
  {
    name: 'Webinar on Blockchain',
    desc: 'A webinar by instustry experts to get insights on the current usage of blockchain',
    image: images22['blockchain_speaker2'],
  },
  {
    name: 'Aarambh 2022',
    desc: 'A fun ice breaker session for FEs',
    image: images22['aarambh'],
  },
  {
    name: 'Techbrawl 2022',
    desc: 'A tech competition for FEs',
    image: images22['techbrawl1'],
  },
];

export { events22, events23 };