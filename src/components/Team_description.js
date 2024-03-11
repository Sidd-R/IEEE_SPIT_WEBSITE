function importAll(r) {
  let images = {};
  r.keys().forEach(item => {
    images[item.replace('./', '').replace(/\.(jpg|jpeg|png)$/, '')] = r(item);
  });
  return images;
}

const images22 = importAll(require.context('../images/team22', false, /\.(jpeg|jpg|png)$/));
const images23 = importAll(require.context('../images/team23', false, /\.(jpeg|jpg|png)$/));

const team22 = [
  {
    name: 'Prof. Sujata Kulkarni',
    post: 'Mentor, IEEE SPIT',
    image: images22['prof_kulkarni'],
  },
  {
    name: 'Prof. Kiran Talele',
    post: 'Treasurer (Bombay Section)',
    image: images22['prof_talele'],
  },
  {
    name: 'Kevin Xavier',
    post: 'Chairperson',
    image: images22['kevin'],
  },
  {
    name: 'Atharva Tadge',
    post: 'Vice Chairperson',
    image: images22['atharva'],
  },
  {
    name: 'Ayushi Naik',
    post: 'Secretary',
    image: images22['ayushi'],
  },
  {
    name: 'Pratamesh Kulkarni',
    post: 'Deputy Secretary',
    image: images22['pratamesh'],
  },
  {
    name: 'Samarth Gupta',
    post: 'Technical Head',
    image: images22['samarth'],
  },
  {
    name: 'Navneet Nair',
    post: 'Technical Subordinate',
    image: images22['navneet'],
  },
  {
    name: 'Siddhant Rao',
    post: 'Technical Subordinate',
    image: images22['siddhant'],
  },
  {
    name: 'Malay Phadke',
    post: 'Technical Subordinate',
    image: images22['malay'],
  },
  {
    name: 'Shubh Gupta',
    post: 'Special Projects Head',
    image: images22['shubh'],
  },
  {
    name: 'Jaivik Parekh',
    post: 'Special Projects Head',
    image: images22['jaivik'],
  },
  {
    name: 'Sridhar Sundar',
    post: 'Event Head',
    image: images22['sridhar'],
  },
  {
    name: 'Ajeyaraj Upadhyaya',
    post: 'Event Head',
    image: images22['ajeyaraj'],
  },
  {
    name: 'Dewyani',
    post: 'PR Head',
    image: images22['dewyani'],
  },
  {
    name: 'Gauri',
    post: 'PR Head',
    image: images22['gauri'],
  },
  {
    name: 'Devanshi Padhy',
    post: 'Marketing Head',
    image: images22['devanshi'],
  },
  {
    name: 'Kevin Doshi',
    post: 'Finance Head',
    image: images22['kevind'],
  },
];

const team23 = [
  {
    name: 'Prof. Sujata Kulkarni',
    post: 'Faculty Coordinator',
    image: images23['prof_kulkarni'],
  },
  {
    name: 'Prof. Kiran Talele',
    post: 'Treasurer (Bombay Section)',
    image: images23['prof_talele'],
  },
  {
    name: 'Navneet Nair',
    post: 'Chairperson',
    linkedin: 'https://www.linkedin.com/in/navneet-nair-3546b023',
    instagram: 'https://instagram.com/_navneet_nair_',
    image: images23['navneet'],
  },
  {
    name: 'Ayushi Naik',
    post: 'Vice Chairperson',
    linkedin: 'https://www.linkedin.com/in/ayushinaik9',
    instagram: 'https://instagram.com/_ayushinaik_',
    image: images23['ayushi'],
  },
  {
    name: 'Shrutika Yeole',
    post: 'Secretary',
    linkedin: 'https://www.linkedin.com/in/shrutika-yeole-a428a1266/',
    instagram: 'https://www.instagram.com/shrutika_yeole',
    image: images23['shrutika'],
  },
  {
    name: 'Mega Agarwal',
    post: 'Deputy Secretary',
    linkedin: '',
    instagram: '',
    image: images23['megha'],
  },
  {
    name: 'Siddhant Rao',
    post: 'Technical Head',
    linkedin: 'https://www.linkedin.com/in/siddhant-rao-801323231/',
    instagram: 'https://instagram.com/s_i_ddhnt',
    image: images23['siddhant'],
  },
  {
    name: 'Harsh Dugar',
    post: 'Techical Subordinate',
    linkedin: 'https://www.linkedin.com/in/harsh-dugar-7014871b0',
    instagram: 'https://instagram.com/h3rsh.exe',
    image: images23['harshd'],
  },
  {
    name: 'Mayank Ravariya',
    post: 'Technical Subordinate',
    linkedin: 'https://www.linkedin.com/in/mayank-ravariya',
    instagram: 'https://instagram.com/m_a.y_a.n_k',
    image: images23['mayank'],
  },
  {
    name: 'Mihir Mulay',
    post: 'Head Of Marketing',
    linkedin: 'https://www.linkedin.com/in/mihir-mulay-910b35263',
    instagram: 'https://instagram.com/imihir707',
    image: images23['mihir'],
  },
  {
    name: 'Atharva Chavhan',
    post: 'Head of Events',
    linkedin: 'https://in.linkedin.com/in/atharva-chavhan-b28728252',
    instagram: 'https://instagram.com/ft.chavhan',
    image: images23['atharva'],
  },
  {
    name: 'Isha Bamel',
    post: 'Head of Public Relations',
    linkedin: 'https://www.linkedin.com/in/isha-bamel-b13916292',
    instagram: 'https://instagram.com/_i.bamel_',
    image: images23['isha'],
  },
  {
    name: 'Parnika Das',
    post: 'Head of Public Relations',
    linkedin: 'https://www.linkedin.com/in/parnika-das-4a27541b0',
    instagram: 'https://www.instagram.com/parnikadas05',
    image: images23['parnika'],
  },
  {
    name: 'Himanshu Agrawal',
    post: 'Head Of Creatives',
    linkedin: 'https://www.linkedin.com/in/himanshu-a-3ab697221',
    instagram: 'https://www.instagram.com/_himanshhuu_a',
    image: images23['himanshu'],
  },
  {
    name: 'Chetanarupa Jirgale',
    post: 'Head Of Creatives',
    linkedin: 'https://www.linkedin.com/in/chetana-j-802690290',
    instagram: 'https://instagram.com/chetanaa_30',
    image: images23['chetana'],
  },
  {
    name: 'Harsh Walavalkar',
    post: 'Head Of Creatives',
    linkedin: 'https://www.linkedin.com/in/harsh-walavalkar-15232b254/',
    instagram: 'https://www.instagram.com/haarshh/',
    image: images23['harshw'],
  },
  {
    name: 'Soham Karmarkar',
    post: 'Head of Operations',
    linkedin: '',
    instagram: 'https://instagram.com/so.dummbbb',
    image: images23['soham'],
  },
  {
    name: 'Aviraj Singh',
    post: 'Head of Finance',
    linkedin: 'https://www.linkedin.com/in/avirajsingh01',
    instagram: 'https://www.instagram.com/avirajjjjjjj',
    image: images23['aviraj'],
  },
];

export { team22, team23 };