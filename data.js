// France 2026 — shared data. English is the base; data.<lang>.js translate it in the same order.
// Facts come from news reports and carry source keys. Voices: kind 'quoted' = really said in the press (source required),
// kind 'composite' = a fictional person built from reporting. Figures differ by who published them: always give both.
window.RUMEUR = {
  meta: {
    title: '17 octobre',
    date: '2026-10-17',
    asof: '2026-10-18',
    place: 'Place de la République, Paris (reconstruction)',
  },

  sources: {
    wiki_fr: { name: 'Wikipédia (fr) — Manifestations du 17 octobre 2026', url: 'https://fr.wikipedia.org/wiki/Manifestations_du_17_octobre_2026' },
    wiki_en: { name: 'Wikipedia (en) — 2026 French student protests', url: 'https://en.wikipedia.org/wiki/2026_French_student_protests' },
    aj: { name: 'Al Jazeera — Tear gas and unrest as hundreds of thousands protest', url: 'https://www.aljazeera.com/news/2026/10/17/france-wave-of-nationwide-protests' },
    f24: { name: 'France 24 — Live, 17 Oct 2026', url: 'https://www.france24.com/en/france/20261017-live-france-s-yellow-vests-throw-their-weight-behind-mounting-student-protests' },
    fi_react: { name: 'franceinfo — Mélenchon / Bardella', url: 'https://www.franceinfo.fr/economie/greve/manifestations-du-17-octobre-jean-luc-melenchon-salue-des-dizaines-de-milliers-de-gens-calmement-mobilises-jordan-bardella-denonce-les-professionnels-du-chaos_8241847.html' },
    fi_vance: { name: 'franceinfo — JD Vance', url: 'https://www.franceinfo.fr/economie/greve/les-progressistes-occidentaux-ont-importe-le-tiers-monde-le-vice-president-americain-jd-vance-pointe-le-role-de-l-immigration-dans-les-violences-lors-des-manifestations-du-17-octobre_8242465.html' },
    ifop: { name: 'Brussels Signal — Ifop/Marianne poll (25–30 Sep 2026)', url: 'https://brusselssignal.eu/2026/10/nearly-half-of-french-muslims-would-consider-leaving-if-le-pen-wins/' },
    unherd: { name: 'UnHerd — Public opinion on immigration policy', url: 'https://unherd.com/newsroom/centrists-are-trying-to-outflank-marine-le-pen-on-immigration/' },
    stat: { name: 'Wikipédia (fr) — Statistiques ethniques en France', url: 'https://fr.wikipedia.org/wiki/Statistiques_ethniques_en_France' },
    embassy: { name: 'U.S. Embassy France — Demonstration Alert', url: 'https://fr.usembassy.gov/demonstration-alert-update-october-5-2026-continued-student-protests-across-france/' },
    f24_fr: { name: 'France 24 (fr) — « Ça bouge pas… » à Paris, les colères convergent', url: 'https://www.france24.com/fr/france/20261017-%C3%A7a-bouge-pas-donc-il-faut-employer-grands-moyens-paris-manifestation-les-col%C3%A8res-convergent' },
    fi_rep: { name: 'franceinfo — Reportage : une multitude de « ras-le-bol »', url: 'https://www.franceinfo.fr/economie/greve/reportage-a-paris-une-foule-compacte-et-une-multitude-de-ras-le-bol-dans-la-manifestation-du-17-octobre_8241868.html' },
    fi_tension: { name: 'franceinfo — Situation sous haute tension place de la République', url: 'https://www.franceinfo.fr/societe/education/blocage-des-lycees/situation-sous-haute-tension-place-de-la-republique-a-paris_8241820.html' },
    nbc: { name: 'NBC News (AP) — Clashes and fires break out', url: 'https://www.nbcnews.com/world/europe/france-protests-rcna604019' },
    wiki1961: { name: 'Wikipédia (fr) — Massacre du 17 octobre 1961', url: 'https://fr.wikipedia.org/wiki/Massacre_du_17_octobre_1961' },
    spg: { name: 'S&P Global — France to release 10 million barrels of diesel', url: 'https://www.spglobal.com/energy/en/news-research/latest-news/refined-products/100826-france-to-release-10-million-barrels-of-diesel-from-emergency-reserves-lecornu' },
  },

  // key figures (always name who published them)
  figures: {
    turnout: [
      { who: 'Interior Ministry', value: 550000, note: 'nationwide (110,000 in Paris)', src: ['wiki_fr', 'f24'] },
      { who: 'Organisers / CGT', value: 800000, note: 'nationwide', src: ['wiki_fr', 'f24'] },
    ],
    arrests: { value: 1200, note: 'nationwide, provisional (855 in the Paris area)', src: ['wiki_fr', 'f24'] },
    policeInjured: { value: 150, note: 'police and gendarmes', src: ['wiki_fr', 'f24'] },
  },

  // what actually happened on 17 October (local time)
  timeline: [
    { t: 9.5, label: 'Morning', city: 'Paris 15e', text: 'About 100 masked people block the CNews / Europe 1 car park. 21 detained.', src: ['wiki_fr'] },
    { t: 12.33, label: '12:20', city: 'Paris', text: 'Tear gas on the "Orchestre du Nouveau Monde" while it rehearses at République, before the march.', src: ['wiki_fr'] },
    { t: 12.5, label: '12:30', city: 'Lille', text: 'The prefect reports about 2,000 "violent elements" clashing with police.', src: ['wiki_fr'] },
    { t: 14.0, label: '14:00', city: 'Lyon', text: 'Several thousand gather at Place Bellecour without authorisation.', src: ['wiki_fr'] },
    { t: 14.5, label: '14:30', city: 'Lille', text: 'The march sets off. 24,000 according to the prefecture.', src: ['wiki_fr'] },
    { t: 15.0, label: '~15:00', city: 'Lyon', text: 'The tourist office on Place Bellecour is set on fire; firefighters arrive just after 15:00.', src: ['wiki_fr'] },
    { t: 15.5, label: 'Afternoon', city: 'Bordeaux', text: 'Protesters enter the prefect\'s residence. The RAID unit is deployed.', src: ['wiki_fr'] },
    { t: 19.68, label: '19:41', city: 'Paris 10e', text: 'Protesters force their way into the town hall, where about 100 people are at a breast-cancer event.', src: ['f24'] },
    { t: 19.98, label: '19:59', city: 'France', text: 'The interior minister reports about 400 arrests.', src: ['f24'] },
    { t: 21.0, label: '21:00', city: 'Paris 8e', text: 'A car is overturned on Rue Cambacérès, about 400 m from the Élysée.', src: ['f24'] },
    { t: 21.73, label: '21:44', city: 'Limoges', text: 'The 143-year-old town hall is set on fire. According to the prefect, most of the building is lost.', src: ['f24', 'wiki_fr'] },
    { t: 22.9, label: '22:54', city: 'Saint-Étienne', text: 'A 17-year-old loses a hand, apparently to a crowd-control grenade. The IGPN opens an inquiry.', src: ['f24', 'wiki_fr'] },
    { t: 23.37, label: '23:22', city: 'Paris 8e', text: 'Tourists are caught in tear gas and stone-throwing at Place de la Madeleine.', src: ['f24'] },
    { t: 23.8, label: '23:48', city: 'Prime Minister', text: 'Lecornu announces 1,200 arrests and 150 police officers injured.', src: ['f24'] },
  ],

  // things in the 3D scene that can be inspected
  objects: {
    marianne: {
      code: 'MON-01', fr: 'Marianne en gilet jaune', name: 'Marianne in a yellow vest',
      facts: [
        { text: 'The statue of Marianne at the centre of Place de la République personifies the French Republic. That day she was dressed in a yellow vest, and black streaks were drawn on the faces of the allegorical figures at her base.', src: ['aj'] },
        { text: 'The yellow vest (gilet jaune) became a symbol in 2018, when a movement against diesel prices began. This time former yellow vests joined over soaring fuel prices.', src: ['aj', 'wiki_en'] },
        { text: 'In Marseille, people who entered the town hall threw a bust of Marianne to the floor.', src: ['wiki_fr'] },
      ],
      voices: [
        { kind: 'composite', who: 'Retired history teacher, 71, lives in the 11th', text: 'People gathered in front of this statue in 1989, and again after the 2015 attacks. She belongs to no one, so she belongs to everyone. That\'s why everyone wants to dress her in their own colours.' },
        { kind: 'composite', who: 'Security guard, 44, commutes from the suburbs', text: 'I understand why they put the vest on her. But tomorrow morning, scrubbing off those black streaks will be somebody\'s job.' },
      ],
      question: 'What symbolises "the country" for you? When someone paints over it, do you feel anger, or sympathy?',
    },
    cortege: {
      code: 'FOU-02', fr: 'Le cortège', name: 'The march',
      facts: [
        { text: 'Turnout: 550,000 nationwide (110,000 in Paris) according to the Interior Ministry; 800,000 according to the organisers and the CGT union.', src: ['wiki_fr', 'f24'] },
        { text: 'A high-school and university movement that began on 21 September in Créteil was joined by unions, former yellow vests, farmers\' unions, nurses and firefighters.', src: ['wiki_en'] },
        { text: 'Main demands: action on the cost of living, keeping public services, better schools. Some also called for President Macron and the government to resign.', src: ['wiki_fr', 'aj'] },
      ],
      voices: [
        { kind: 'quoted', who: 'Lola, 19, Paris', text: 'The price of fuel is too high.', src: ['f24'] },
        { kind: 'quoted', who: 'Amelie, mother of three (with her teenage daughter)', text: 'We will keep up the pressure to make sure someone is taking care of our children\'s future.', src: ['aj'] },
        { kind: 'quoted', who: 'High-school student (unnamed)', text: 'We are here because we want to take back our rights.', src: ['aj'] },
        { kind: 'quoted', who: 'Lorie, 42, shop assistant, mother of two (her sign)', text: 'Now, Macron, can you see my anger better?', src: ['fi_rep'] },
        { kind: 'quoted', who: 'Clémence, 27, HR employee from Caen (her sign)', text: 'Fewer consulting firms, more medical practices.', src: ['fi_rep'] },
      ],
      question: '550,000 and 800,000. One scene, two numbers. Which did you believe first, and why?',
    },
    banner: {
      code: 'TXT-03', fr: 'Banderole lycéenne', name: 'The students\' banner',
      facts: [
        { text: 'Students denounced classes of 32 to 36, a shortage of teachers and crumbling buildings. During the 2026 heatwaves, classrooms reportedly reached 40°C.', src: ['wiki_en'] },
        { text: 'Stress over Parcoursup, the university admissions platform, is another key grievance.', src: ['wiki_en'] },
        { text: 'One banner reported in the press: "Sorry to bother you, we just want a future."', src: ['wiki_en'] },
        { text: 'Placards in the Paris march read "Resources for our kids" and "Proud of our children". A nurse wrote "Public hospitals dying, France in palliative care".', src: ['fi_rep', 'f24_fr'] },
      ],
      voices: [
        { kind: 'composite', who: 'Maths teacher, 38, Créteil', text: 'With 36 pupils it takes me until November to learn their names. By then, some have already stopped coming.' },
        { kind: 'composite', who: 'Student, 16, Saint-Denis', text: 'My parents tell me to study. But where? When it rains, water drips into the classroom.' },
      ],
      question: 'How many were in your class? What did you get there, and what didn\'t you get?',
    },
    kiosque: {
      code: 'OBJ-04', fr: 'Kiosque incendié', name: 'The burning kiosk',
      facts: [
        { text: 'At République, protesters set a car and a newspaper stand on fire, sending black smoke into the sky. Cafés and shops closed for the day.', src: ['aj'] },
        { text: 'AP reporters saw a kiosk burning and several shops looted.', src: ['nbc'] },
        { text: 'The people who light fires in this piece are faceless composite silhouettes, not depictions of any real person or group.', src: [] },
        { text: 'The mayor of Paris said whole streets had been devastated. Police sources said an elderly couple was robbed in central Paris.', src: ['f24'] },
      ],
      voices: [
        { kind: 'composite', who: 'Kiosk owner, 58', text: 'I don\'t know who burned it, or why. But this stand is my pension. I don\'t even know who to be angry with.' },
        { kind: 'composite', who: 'Regular customer, 29, nurse', text: 'I bought my paper here every morning. Today I marched at noon, and tonight I\'ll treat the injured at the hospital.' },
      ],
      question: 'When someone\'s livelihood is destroyed in the name of a cause, can that loss be called "unavoidable"? Who gets to decide?',
    },
    voiture: {
      code: 'OBJ-05', fr: 'Voiture brûlée', name: 'The burning car',
      facts: [
        { text: 'Burning bins, cars and makeshift barricades were recurring images of this movement.', src: ['wiki_en'] },
        { text: 'Fire engines were burned, and buses and trams damaged.', src: ['wiki_en'] },
      ],
      voices: [
        { kind: 'composite', who: 'Car owner, 33, delivery driver', text: 'The insurance assessment is next month. Until then I have no way to get to work. And I agree with what they\'re asking for.' },
      ],
      question: 'If this were your car, what would you say the next morning, and to whom?',
    },
    cagoules: {
      code: 'GRP-06', fr: 'Groupe cagoulé', name: 'The hooded group',
      facts: [
        { text: 'Their faces are hidden. Neither who they are nor why they are here can be read from how they look.', src: [] },
        { text: 'Hundreds of people dressed in black and masked clashed with police or played "cat and mouse" with them.', src: ['fi_rep'] },
        { text: 'The Interior Ministry and the Prime Minister blamed the violence on organised "ultra-left" groups. Mélenchon called on protesters not to join in looting.', src: ['wiki_fr', 'aj'] },
        { text: 'RN leader Jordan Bardella called them "professionals of chaos".', src: ['fi_react'] },
      ],
      voices: [
      ],
      question: 'What story did you attach to people whose faces you cannot see? Where did that story come from?',
    },
    crs: {
      code: 'FOR-07', fr: 'Ligne de CRS', name: 'The riot police line',
      facts: [
        { text: 'On the side behind the statue, protesters fired firework mortars at the police, who answered with tear-gas grenades. The exchanges grew and spread across the square.', src: ['f24_fr'] },
        { text: '150 police officers and gendarmes injured (Prime Minister). The UNSA police union said officers were "used as punching bags".', src: ['f24'] },
        { text: 'Amnesty called the use of force "disproportionate". HRW reported serious injuries to children, and the UN human rights office called for de-escalation.', src: ['wiki_en'] },
        { text: 'Interior Minister Nuñez said the response was proportionate in almost all cases. The IGPN is investigating how a 17-year-old lost a hand in Saint-Étienne.', src: ['wiki_en', 'f24'] },
      ],
      voices: [
        { kind: 'composite', who: 'CRS officer, 34, from Normandy', text: 'On the other side of my shield are kids my daughter\'s age. Some nights I go home and don\'t know how to talk about it.' },
        { kind: 'composite', who: 'Volunteer medic, 25, medical student', text: 'Today I treated injuries on both sides. The blood was the same colour.' },
      ],
      question: 'Order, or the freedom to protest. If you could protect only one, which would it be? Is there a way not to choose?',
    },
    gaz: {
      code: 'AIR-08', fr: 'Nuage lacrymogène', name: 'The tear-gas cloud',
      facts: [
        { text: 'At 12:20, before the march was due to leave at 14:00, tear gas was used on the "Orchestre du Nouveau Monde" rehearsing at République.', src: ['wiki_fr'] },
        { text: 'At 23:22, tourists at Place de la Madeleine were caught in tear gas and stone-throwing and fled pulling their suitcases.', src: ['f24'] },
      ],
      voices: [
        { kind: 'composite', who: 'Cellist, 27', text: 'We were in the middle of a piece. I couldn\'t open my eyes, so I sat down holding my instrument.' },
      ],
      question: 'One change of wind and an onlooker becomes part of it. Where are you standing right now?',
    },
    pompiers: {
      code: 'SEC-09', fr: 'Sapeurs-pompiers', name: 'Firefighters',
      facts: [
        { text: 'In Limoges, the 143-year-old town hall was set alight and its bell tower collapsed. In Lyon, the tourist office burned.', src: ['f24', 'wiki_fr'] },
        { text: 'Firefighters were also reported among the marchers that day.', src: ['aj'] },
      ],
      voices: [
        { kind: 'composite', who: 'Firefighter, 41, parents emigrated from Portugal', text: 'At noon I marched against staff cuts. At night I put out fires on the same street. Both times I thought I was doing it for this city.' },
      ],
      question: 'One person can be both "the protester" and "the protector" on the same day. Are there two such people in you?',
    },
    lycee: {
      code: 'BAT-10', fr: 'Lycée fermé', name: 'The closed high school',
      facts: [
        { text: 'The movement began in late September at the Saint-Exupéry high school in Créteil and spread through Seine-Saint-Denis and Val-de-Marne.', src: ['wiki_en'] },
        { text: 'On 1 October the Interior Ministry said 1,027 lycées were affected and 222 blockaded. According to the education minister, 24 schools were "burned or ransacked" (5 October), and 65 staff including 40 head teachers were injured (2 October).', src: ['wiki_en'] },
      ],
      voices: [
        { kind: 'composite', who: 'Head teacher, 56', text: 'I agree with ninety percent of their demands. And they broke my gate. Both things are true.' },
        { kind: 'composite', who: 'Parent, 47, of Algerian descent, pharmacist', text: 'I told my daughter not to go. She asked, "Did you keep quiet when you were young?" I had no answer.' },
      ],
      question: 'When children break what adults never repaired, who do you speak to first?',
    },
    livreur: {
      code: 'PER-11', fr: 'Livreur à vélo', name: 'The bike courier',
      facts: [
        { text: 'Even on a night when shops are shut and streets blocked, the delivery orders keep coming.', src: [] },
      ],
      voices: [
        { kind: 'composite', who: 'Courier, 24, from Guinea, residence permit pending', text: 'I can\'t join the protest. If I\'m detained, my papers are finished. But rising prices hit my wallet too.' },
      ],
      question: 'Some can raise their voice and some cannot. Where do the voices of people not on this square go?',
    },
    giletjaune: {
      code: 'PER-12', fr: 'Gilet jaune', name: 'The man in the yellow vest',
      facts: [
        { text: 'Former yellow vests joined on 17 October over fuel prices. On 7 October PM Lecornu had announced the release of 10 million barrels from strategic diesel reserves.', src: ['wiki_en', 'aj', 'spg'] },
        { text: 'Government borrowing costs are at their highest in over 20 years. Researchers say the huge debt and deficit limit what the state can offer.', src: ['aj'] },
      ],
      voices: [
        { kind: 'composite', who: 'Warehouse worker, 52, from a village in the Somme', text: 'It\'s 60 km to work. No bus. People in Paris tell me to give up my car. Next year I\'ll vote RN. They were the only ones who listened.' },
      ],
      question: 'Can you understand his vote? Is understanding the same as agreeing?',
    },
    affiche: {
      code: 'TXT-13', fr: 'Affiches électorales', name: 'Torn election posters',
      facts: [
        { text: 'About six months to the presidential election. At the end of Macron\'s time in office, the far-right RN could come to power.', src: ['aj', 'f24'] },
        { text: 'At the end of January 2026, Justice Minister Gérald Darmanin called for a three-year moratorium on legal migration; almost six in ten backed it in a poll.', src: ['unherd'] },
        { text: 'In one poll about 70% said "there are too many immigrants in France". The RN is the most trusted party on immigration (46%).', src: ['unherd'] },
        { text: 'After 17 October, US Vice President JD Vance posted, over footage of the Limoges town hall fire, that "Western progressives imported the Third World into France".', src: ['fi_vance'] },
        { text: 'French law prohibits, in principle, processing personal data on ethnic or racial origin. There are no official statistics on the origins of those arrested, so no explanation can be confirmed or refuted with data.', src: ['stat'] },
        { text: 'In an Ifop survey (Sept. 2026), 46% of Muslim respondents said they would consider emigrating if Le Pen were elected (21% of all respondents).', src: ['ifop'] },
      ],
      voices: [
        { kind: 'composite', who: 'Retired couple, both 78, 10th arrondissement', text: 'We don\'t go out at night anymore. We don\'t think all immigrants are bad. It\'s just that nobody takes this fear seriously.' },
        { kind: 'composite', who: 'Office worker, 35, born in Lyon, parents from Tunisia', text: 'I was born here. Yet every election someone asks if I\'m ready to leave. There is nowhere else to go back to.' },
      ],
      question: 'Where is the line between "fear" and "exclusion"? Have you heard the same words in your own country\'s elections?',
    },
    telephone: {
      code: 'SIG-14', fr: 'Écran de téléphone', name: 'Someone\'s phone screen',
      facts: [
        { text: 'The 17 October call started on TikTok in September from a creator called "V2" and spread with no established political affiliation. Shared online maps showed meeting points and police positions.', src: ['wiki_fr'] },
        { text: 'On 7 October France summoned Iran\'s ambassador over disinformation about the protests.', src: ['wiki_en'] },
        { text: 'The Prime Minister\'s office called it a "manoeuvre organised by La France Insoumise and its ultra-left proxies"; protesters said it was spontaneous.', src: ['wiki_en'] },
      ],
      voices: [
      ],
      question: 'Like everything on this screen, the information in this game was chosen by someone. What did you check, and what did you believe without checking?',
    },
    touriste: {
      code: 'PER-15', fr: 'Voyageuse étrangère', name: 'A traveller from abroad',
      facts: [
        { text: 'The US Embassy and others advised travellers to avoid the protest areas.', src: ['embassy'] },
      ],
      voices: [
        { kind: 'composite', who: 'Graduate student, 26, on exchange in Paris', text: 'Back home the news called it a "riot" and left it there. Standing here, that word isn\'t enough. And I remember that my own country, too, is starting to split over foreigners and prices.' },
      ],
      question: 'Are you looking at this square as a tourist, or as something that could one day happen in your own city?',
    },
    fanfare: {
      code: 'SON-16', fr: 'La fanfare', name: 'The brass band',
      facts: [
        { text: 'In front of the Monument to the Republic a brass band accompanied many protesters. The songs called for Macron to resign and also targeted the far right.', src: ['f24_fr'] },
        { text: 'The march left around 14:00 and went 3.6 km to Place de Clichy via Boulevard Magenta, Gare du Nord and Barbès. Later techno played and teenagers danced by the speakers.', src: ['f24_fr', 'fi_rep'] },
      ],
      voices: [
        { kind: 'quoted', who: 'High-school student (to Irish tourists)', text: 'It\'s not against, it\'s for. For a future. A better future.', src: ['fi_rep'] },
        { kind: 'quoted', who: 'Marie-Thérèse, 78, retired', text: 'At their age, I did May \'68. I blockaded my social-work school.', src: ['fi_rep'] },
      ],
      question: 'Music and tear gas on the same square. Which sound will you take home?',
    },
    filtrage: {
      code: 'FOR-17', fr: 'Filtrage à l\'entrée', name: 'Bag checks at the entrance',
      facts: [
        { text: 'At the entrances gendarmes searched bags and confiscated anything deemed dangerous. Citing a prefectoral order, they refused masks, even surgical ones, and saline solution for the eyes.', src: ['f24_fr'] },
        { text: 'Police also checked the words on placards at the entrance. About 30 high-school students appeared from Rue René-Boulanger and were applauded.', src: ['fi_rep'] },
      ],
      voices: [
        { kind: 'quoted', who: 'Gendarme at the entrance', text: 'Masks? No way!', src: ['f24_fr'] },
        { kind: 'composite', who: 'Gendarme, 29, sent in from a regional unit', text: 'Take one thing away here and that\'s one less injury later. That\'s what I believe. I know it\'s a job people hate.' },
      ],
      question: 'When your belongings are searched for safety, how far are you willing to go along with it?',
    },
    pancarte1961: {
      code: 'TXT-18', fr: 'Pancarte « 17 octobre 1961 »', name: 'A sign for 17 October 1961',
      facts: [
        { text: 'Lina, 21, a student who wants to become a teacher, carried a sign referring to 17 October 1961.', src: ['f24_fr'] },
        { text: 'On 17 October 1961, a Paris demonstration by Algerians against a curfew imposed only on them was repressed by police. Estimates of the dead range widely, from 7 to more than 200 depending on the source.', src: ['wiki1961'] },
        { text: 'In 2012 President Hollande "recognised with lucidity" this "bloody repression". The 2026 protest fell on the same date, exactly 65 years later.', src: ['wiki1961'] },
      ],
      voices: [
        { kind: 'quoted', who: 'Lina, 21, education student (her sign)', text: 'They drowned our ancestors, not our memories!', src: ['f24_fr'] },
        { kind: 'quoted', who: 'Lina', text: 'Nothing changes, so we have to use big means.', src: ['f24_fr'] },
        { kind: 'composite', who: 'Retired office worker, 69, 12th arrondissement', text: 'Mixing a wound from 65 years ago with today\'s cost of living blurs the point, I think. But I\'m not saying we should forget.' },
      ],
      question: 'People of different generations and origins give the same date different meanings. Does your country have dates like that?',
    },
    medic: {
      code: 'SEC-19', fr: 'Street medics', name: 'Street medics',
      facts: [
        { text: 'Volunteers cared for protesters with eyes reddened by tear gas. Damien, 25, a job-seeking graduate, handed out a home-made mix of water and antacid.', src: ['f24_fr'] },
      ],
      voices: [
        { kind: 'quoted', who: 'A protester calling for help', text: 'Saline here! Don\'t run!', src: ['f24_fr'] },
        { kind: 'quoted', who: 'Damien, 25', text: 'I\'m a sort of amateur street medic.', src: ['f24_fr'] },
      ],
      question: 'In the middle of the clash, some treat the injured without taking sides. Where would you stand?',
    },
    canon: {
      code: 'FOR-20', fr: 'Canon à eau', name: 'Water cannon',
      facts: [
        { text: 'Police fired tear gas and water cannons to push back people in hoods and masks who were throwing fireworks. Paving stones and other objects were thrown at officers.', src: ['nbc'] },
        { text: 'Around the square there were repeated rounds of tear gas, charges and water cannon.', src: ['fi_rep'] },
      ],
      voices: [
        { kind: 'composite', who: 'Water-cannon driver, 46', text: 'From here I see only smoke and lights. I can\'t really see who is at the end of the water.' },
      ],
      question: 'Pushing back with water, pushing back with words. Where does "force" begin?',
    },
    velib: {
      code: 'OBJ-21', fr: 'Vélos incendiés', name: 'Burned bicycles',
      facts: [
        { text: 'AP reporters saw thick black smoke rising from cars, bicycles and other vehicles, and trash bins on fire.', src: ['nbc'] },
        { text: 'The people who light fires in this piece are faceless composite silhouettes, not depictions of any real person or group.', src: [] },
      ],
      voices: [
        { kind: 'composite', who: 'Bike-share mechanic, 31', text: 'They\'ll call me in at six. Those bikes belonged to no one, which is exactly why they belonged to everyone.' },
      ],
      question: 'When you break something that "belongs to no one", who gets hurt?',
    },
    nettoyage: {
      code: 'FIN-22', fr: 'Le matin, on nettoie', name: 'Cleaning up in the morning',
      facts: [
        { text: 'Passers-by helped the city cleaners tidy up Place de la République.', src: ['fi_tension'] },
        { text: 'The mayor of Paris said whole streets had been devastated.', src: ['f24'] },
      ],
      voices: [
        { kind: 'composite', who: 'Street cleaner, 49', text: 'I don\'t ask what happened in the night. A student asked to borrow a broom, and that helped a little.' },
        { kind: 'composite', who: 'University student, 20', text: 'Yesterday I was shouting here. Today I\'m sweeping. Both are really me.' },
      ],
      question: 'After things break, who cleans up? Where you live, who is it?',
    },
  },

  // closing questions (answers are never stored)
  reflection: [
    'Do you think the schools, hospitals and transport in your town will still be the same in ten years?',
    'When prices rise, who is the first person you feel angry at?',
    'Do you know where your neighbour comes from? Do you need to know?',
    '"Violence is wrong" and "nobody listens to us". When both are true, what do you do?',
    'Whose voice did you stop for longest in this game?',
  ],
};
