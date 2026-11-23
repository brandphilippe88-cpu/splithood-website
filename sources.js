/* Bronnen van de gymsessie: verwijzing en link (taalonafhankelijk), plus per taal wat de bron vond en wat de app ermee doet. */
window.SP_SRC = {
refs: [
  ['currier', 'Currier BS, Mcleod JC, Banfield L, et al. Resistance training prescription for muscle strength and hypertrophy in healthy adults: a systematic review and Bayesian network meta-analysis. Br J Sports Med 2023;57:1211-1220.', 'https://doi.org/10.1136/bjsports-2023-106807', 'nma'],
  ['lopez', 'Lopez P, Radaelli R, Taaffe DR, et al. Resistance training load effects on muscle hypertrophy and strength gain: systematic review and network meta-analysis. Med Sci Sports Exerc 2021;53(6):1206-1216.', 'https://doi.org/10.1249/MSS.0000000000002585', 'nma'],
  ['robinson', 'Robinson ZP, Pelland JC, Remmert JF, et al. Exploring the dose-response relationship between estimated resistance training proximity to failure, strength gain, and muscle hypertrophy: a series of meta-regressions. Sports Med 2024;54(9).', 'https://doi.org/10.1007/s40279-024-02069-2', 'mr'],
  ['pelland', 'Pelland JC, Remmert JF, Robinson ZP, Hinson SR, Zourdos MC. The resistance training dose response: meta-regressions exploring the effects of weekly volume and frequency on muscle hypertrophy and strength gains. Sports Med 2026;56(2):481-505.', 'https://doi.org/10.1007/s40279-025-02344-w', 'mr'],
  ['singer', 'Singer A, Wolf M, Generoso L, et al. Give it a rest: a systematic review with Bayesian meta-analysis on the effect of inter-set rest interval duration on muscle hypertrophy. Front Sports Act Living 2024;6:1429789.', 'https://doi.org/10.3389/fspor.2024.1429789', 'ma'],
  ['akorak', 'Androulakis-Korakakis P, Fisher JP, Steele J. The minimum effective training dose required to increase 1RM strength in resistance-trained men: a systematic review and meta-analysis. Sports Med 2020;50:751-765.', 'https://doi.org/10.1007/s40279-019-01236-0', 'ma'],
  ['lauersen', 'Lauersen JB, Bertelsen DM, Andersen LB. The effectiveness of exercise interventions to prevent sports injuries: a systematic review and meta-analysis of randomised controlled trials. Br J Sports Med 2014;48:871-877.', 'https://doi.org/10.1136/bjsports-2013-092538', 'ma'],
  ['vandyk', 'Van Dyk N, Behan FP, Whiteley R. Including the Nordic hamstring exercise in injury prevention programmes halves the rate of hamstring injuries: a systematic review and meta-analysis of 8459 athletes. Br J Sports Med 2019;53:1362-1370.', 'https://doi.org/10.1136/bjsports-2018-100045', 'ma'],
  ['llrun', 'Llanos-Lagos C, Ramirez-Campillo R, Moran J, Sáez de Villarreal E. Effect of strength training programs in middle- and long-distance runners’ economy at different running speeds: a systematic review with meta-analysis. Sports Med 2024;54:895-932.', 'https://doi.org/10.1007/s40279-023-01978-y', 'ma'],
  ['llrun2', 'Llanos-Lagos C, Ramirez-Campillo R, Moran J, Sáez de Villarreal E. The effect of strength training methods on middle-distance and long-distance runners’ athletic performance: a systematic review with meta-analysis. Sports Med 2024.', 'https://doi.org/10.1007/s40279-024-02018-z', 'ma'],
  ['llcyc', 'Llanos-Lagos C, Ramirez-Campillo R, Sáez de Villarreal E. Heavy strength training effects on physiological determinants of endurance cyclist performance: a systematic review with meta-analysis. Eur J Appl Physiol 2025.', 'https://doi.org/10.1007/s00421-025-05883-2', 'ma'],
  ['schumann', 'Schumann M, Feuerbacher JF, Sünkeler M, et al. Compatibility of concurrent aerobic and strength training for skeletal muscle size and function: an updated systematic review and meta-analysis. Sports Med 2022;52:601-612.', 'https://doi.org/10.1007/s40279-021-01587-7', 'ma'],
  ['deng', 'Deng N, Soh KG, Xu F, Yang X. The effects of strength and conditioning interventions on serve speed in tennis players: a systematic review and meta-analysis. Front Physiol 2025;15:1469965.', 'https://doi.org/10.3389/fphys.2024.1469965', 'ma'],
  ['jin', 'Jin G, Jin Y, Zhang H, et al. The methodology of resistance training is crucial for improving short-medium distance front crawl performance in competitive swimmers: a systematic review and meta-analysis. Front Physiol 2024;15:1406518.', 'https://doi.org/10.3389/fphys.2024.1406518', 'ma'],
  ['galpin', 'Andy Galpin, PhD, in: Huberman Lab, Essentials: How to build strength, muscle size and endurance. Podcast, 2026.', 'https://www.hubermanlab.com/episode/essentials-how-to-build-strength-muscle-size-and-endurance-andy-galpin', 'exp']
],
nl: {
  eyebrow: 'Bronnen', h1: 'Waar de gymsessie op is gebaseerd',
  lead: 'Transparantie hoort bij een app die van de leden is. De gymsessie volgt meta-analyses: onderzoeken die de uitkomsten van veel studies samen beoordelen. Eén bron is een vuistregel van een expert; die staat er als zodanig bij. Elke bron linkt naar het onderzoek zelf.',
  type: { ma: 'Meta-analyse', nma: 'Netwerk-meta-analyse', mr: 'Meta-regressie', exp: 'Vuistregel van een expert, geen meta-analyse' },
  found: 'Wat het onderzoek vond', use: 'Wat de app ermee doet', open: 'Lees het onderzoek',
  note: 'Meta-analyses geven gemiddelden voor groepen; wat voor jou het beste werkt kan afwijken. De gymsessie is nog niet door een trainer getoetst. Laatst bijgewerkt: november 2026.',
  items: {
    currier: ['Zware gewichten (meer dan 80% van je maximum) gaven de meeste krachtwinst; voor spiergroei deden alle varianten het ongeveer even goed. Het hoogst scoorden zwaar, meerdere sets en drie keer per week voor kracht, en twee keer per week voor spiergroei.', 'Bij Zwaar: zware hoofdoefeningen. Het advies is 2 tot 3 keer per week te trainen.'],
    lopez: ['Kracht nam het meest toe met zware en middelzware gewichten; spiergroei was vergelijkbaar bij lichte, middelzware en zware gewichten.', 'Bij Rustig en Gemiddeld lichtere gewichten met meer herhalingen.'],
    robinson: ['Of je ver of dicht bij falen stopt, de krachtwinst is ongeveer gelijk. Spiergroei profiteert wel van dichter bij falen.', 'Zware sets stoppen met nog 1 of 2 herhalingen over; hulpoefeningen in de laatste set dichter bij falen.'],
    pelland: ['Meer sets per week geven meer kracht en spiergroei, maar met afnemend rendement, voor kracht sterker dan voor spiergroei. Vaker trainen helpt vooral kracht.', 'Maximaal 4 sets per hoofdoefening en 3 per hulpoefening; bij tijd over een extra oefening.'],
    singer: ['Rust van meer dan 60 seconden tussen sets gaf iets meer spiergroei dan kortere rust.', 'Minstens 60 seconden rust, bij zware sets 2 tot 3 minuten.'],
    akorak: ['Eén set per oefening, een tot drie keer per week, gaf bij getrainde mannen al meetbare krachtwinst.', 'Korte sessies van 15 of 20 minuten als circuit.'],
    lauersen: ['Krachttraining bracht het aantal sportblessures terug tot minder dan een derde; rekken had geen beschermend effect.', 'Krachtoefeningen in elke sessie; het rekken aan het eind is voor het gevoel.'],
    vandyk: ['Programma’s met de Nordic hamstring curl halveerden ongeveer het aantal hamstringblessures.', 'Voorrang voor de Nordic hamstring curl bij teamsport en hardlopen.'],
    llrun: ['Zware krachttraining, sprongen en combinaties verbeterden de loopeconomie; lichtere en statische vormen werkten minder goed.', 'Hardlopen: sprongen eerst, hoofdoefeningen met weinig herhalingen en veel gewicht.'],
    llrun2: ['Zware krachttraining en combinaties van methodes verbeterden de tijdrit en de tijd tot uitputting bij lopers.', 'Hardlopen: zware hoofdoefeningen, ook bij Gemiddeld.'],
    llcyc: ['Zware krachttraining kan de tijdrit en de tijd tot uitputting bij wielrenners verbeteren. De zekerheid van het bewijs is laag.', 'Wielrennen: zware beenoefeningen voorop.'],
    schumann: ['Duur- en krachttraining combineren remt vooral de toename van explosieve kracht, het meest in dezelfde sessie. Maximale kracht en spiergroei lijden er nauwelijks onder.', 'Advies om kracht op een andere dag of ruim na duurtraining te doen.'],
    deng: ['Krachttraining verhoogde de opslagsnelheid, een combinatie van methodes nog meer; romptraining alleen had geen significant effect.', 'Tennis en padel: kracht en sprongen, weinig losse buikoefeningen.'],
    jin: ['Krachttraining verbeterde de maximale armkracht en de tijden op 25 tot 200 meter borstcrawl.', 'Zwemmen: trek- en duwoefeningen voorop.'],
    galpin: ['Voor maximale kracht: 3 tot 5 oefeningen, 3 tot 5 sets, 3 tot 5 herhalingen, 3 tot 5 minuten rust, 3 tot 5 keer per week.', 'De zware sets volgen deze vuistregel.']
  }
},
en: {
  eyebrow: 'Sources', h1: 'What the gym session is based on',
  lead: 'Transparency belongs in an app owned by its members. The gym session follows meta-analyses: studies that assess the results of many studies together. One source is an expert’s rule of thumb and is labelled as such. Every source links to the research itself.',
  type: { ma: 'Meta-analysis', nma: 'Network meta-analysis', mr: 'Meta-regression', exp: 'Expert rule of thumb, not a meta-analysis' },
  found: 'What the research found', use: 'What the app does with it', open: 'Read the research',
  note: 'Meta-analyses give averages for groups; what works best for you may differ. The gym session has not yet been reviewed by a coach. Last updated: November 2026.',
  items: {
    currier: ['Heavy loads (above 80% of your maximum) gave the largest strength gains; for muscle growth all variants worked about equally well. Ranked highest: heavy, multiple sets, three times a week for strength, and twice a week for muscle growth.', 'On Heavy: heavy main lifts. The advice is to train 2 to 3 times a week.'],
    lopez: ['Strength rose most with heavy and moderate loads; muscle growth was similar with light, moderate and heavy loads.', 'On Easy and Moderate: lighter loads with more reps.'],
    robinson: ['Whether you stop far from or close to failure, strength gains are about the same. Muscle growth does benefit from getting closer to failure.', 'Heavy sets stop with 1 or 2 reps left; accessory exercises go closer to failure on the last set.'],
    pelland: ['More weekly sets give more strength and muscle growth, but with diminishing returns, more so for strength. Training more often mainly helps strength.', 'At most 4 sets per main exercise and 3 per accessory; spare time goes to an extra exercise.'],
    singer: ['Rest of more than 60 seconds between sets gave slightly more muscle growth than shorter rest.', 'At least 60 seconds of rest, 2 to 3 minutes for heavy sets.'],
    akorak: ['One set per exercise, one to three times a week, already produced measurable strength gains in trained men.', 'Short 15 or 20 minute sessions as a circuit.'],
    lauersen: ['Strength training cut sports injuries to less than a third; stretching had no protective effect.', 'Strength exercises in every session; the stretching at the end is for comfort.'],
    vandyk: ['Programmes including the Nordic hamstring curl roughly halved hamstring injuries.', 'Priority for the Nordic hamstring curl in team sports and running.'],
    llrun: ['Heavy strength training, jumps and combinations improved running economy; lighter and static forms worked less well.', 'Running: jumps first, main lifts with few reps and heavy weight.'],
    llrun2: ['Heavy strength training and combined methods improved time trials and time to exhaustion in runners.', 'Running: heavy main lifts, also on Moderate.'],
    llcyc: ['Heavy strength training can improve time trials and time to exhaustion in cyclists. The certainty of the evidence is low.', 'Cycling: heavy leg exercises first.'],
    schumann: ['Combining endurance and strength training mainly holds back gains in explosive strength, most of all within the same session. Maximal strength and muscle growth are hardly affected.', 'Advice to do strength work on another day or well after endurance training.'],
    deng: ['Strength training increased serve speed, combined methods even more; core training alone had no significant effect.', 'Tennis and padel: strength and jumps, few separate core exercises.'],
    jin: ['Strength training improved maximal arm strength and 25 to 200 metre front crawl times.', 'Swimming: pulling and pushing exercises first.'],
    galpin: ['For maximal strength: 3 to 5 exercises, 3 to 5 sets, 3 to 5 reps, 3 to 5 minutes of rest, 3 to 5 times a week.', 'The heavy sets follow this rule of thumb.']
  }
},
de: {
  eyebrow: 'Quellen', h1: 'Worauf die Gym-Einheit beruht',
  lead: 'Transparenz gehört zu einer App, die ihren Mitgliedern gehört. Die Gym-Einheit folgt Meta-Analysen: Untersuchungen, die die Ergebnisse vieler Studien gemeinsam bewerten. Eine Quelle ist eine Faustregel eines Experten und als solche gekennzeichnet. Jede Quelle verlinkt auf die Studie selbst.',
  type: { ma: 'Meta-Analyse', nma: 'Netzwerk-Meta-Analyse', mr: 'Meta-Regression', exp: 'Faustregel eines Experten, keine Meta-Analyse' },
  found: 'Was die Forschung fand', use: 'Was die App damit macht', open: 'Studie lesen',
  note: 'Meta-Analysen liefern Durchschnittswerte für Gruppen; was für dich am besten wirkt, kann abweichen. Die Gym-Einheit wurde noch nicht von einem Trainer geprüft. Zuletzt aktualisiert: November 2026.',
  items: {
    currier: ['Schwere Gewichte (über 80% deines Maximums) brachten den größten Kraftzuwachs; für Muskelwachstum wirkten alle Varianten etwa gleich gut. Am besten schnitten ab: schwer, mehrere Sätze, dreimal pro Woche für Kraft und zweimal pro Woche für Muskelwachstum.', 'Bei Schwer: schwere Hauptübungen. Empfehlung: 2 bis 3 Mal pro Woche trainieren.'],
    lopez: ['Kraft stieg am stärksten mit schweren und mittleren Gewichten; das Muskelwachstum war bei leichten, mittleren und schweren Gewichten ähnlich.', 'Bei Locker und Mittel leichtere Gewichte mit mehr Wiederholungen.'],
    robinson: ['Ob du weit vom oder nah am Muskelversagen aufhörst, der Kraftzuwachs ist etwa gleich. Muskelwachstum profitiert davon, näher ans Versagen zu gehen.', 'Schwere Sätze enden mit noch 1 oder 2 Wiederholungen Reserve; Hilfsübungen im letzten Satz näher am Versagen.'],
    pelland: ['Mehr Sätze pro Woche bringen mehr Kraft und Muskelwachstum, aber mit abnehmendem Ertrag, bei Kraft stärker. Häufiger trainieren hilft vor allem der Kraft.', 'Höchstens 4 Sätze pro Hauptübung und 3 pro Hilfsübung; übrige Zeit geht in eine zusätzliche Übung.'],
    singer: ['Pausen von mehr als 60 Sekunden zwischen den Sätzen brachten etwas mehr Muskelwachstum als kürzere Pausen.', 'Mindestens 60 Sekunden Pause, bei schweren Sätzen 2 bis 3 Minuten.'],
    akorak: ['Ein Satz pro Übung, ein- bis dreimal pro Woche, brachte bei trainierten Männern bereits messbaren Kraftzuwachs.', 'Kurze Einheiten von 15 oder 20 Minuten als Zirkel.'],
    lauersen: ['Krafttraining senkte die Zahl der Sportverletzungen auf weniger als ein Drittel; Dehnen hatte keine schützende Wirkung.', 'Kraftübungen in jeder Einheit; das Dehnen am Ende ist fürs Gefühl.'],
    vandyk: ['Programme mit dem Nordic Hamstring Curl halbierten etwa die Zahl der Verletzungen der hinteren Oberschenkelmuskulatur.', 'Vorrang für den Nordic Hamstring Curl bei Teamsport und Laufen.'],
    llrun: ['Schweres Krafttraining, Sprünge und Kombinationen verbesserten die Laufökonomie; leichtere und statische Formen wirkten weniger.', 'Laufen: Sprünge zuerst, Hauptübungen mit wenigen Wiederholungen und viel Gewicht.'],
    llrun2: ['Schweres Krafttraining und kombinierte Methoden verbesserten Zeitläufe und die Zeit bis zur Erschöpfung bei Läufern.', 'Laufen: schwere Hauptübungen, auch bei Mittel.'],
    llcyc: ['Schweres Krafttraining kann Zeitfahren und die Zeit bis zur Erschöpfung bei Radsportlern verbessern. Die Sicherheit der Evidenz ist gering.', 'Radsport: schwere Beinübungen zuerst.'],
    schumann: ['Die Kombination von Ausdauer- und Krafttraining bremst vor allem den Zuwachs an Schnellkraft, am stärksten in derselben Einheit. Maximalkraft und Muskelwachstum leiden kaum.', 'Empfehlung: Krafttraining an einem anderen Tag oder mit Abstand zum Ausdauertraining.'],
    deng: ['Krafttraining erhöhte die Aufschlaggeschwindigkeit, kombinierte Methoden noch mehr; Rumpftraining allein hatte keinen signifikanten Effekt.', 'Tennis und Padel: Kraft und Sprünge, wenige einzelne Bauchübungen.'],
    jin: ['Krafttraining verbesserte die maximale Armkraft und die Zeiten über 25 bis 200 Meter Kraul.', 'Schwimmen: Zug- und Druckübungen zuerst.'],
    galpin: ['Für Maximalkraft: 3 bis 5 Übungen, 3 bis 5 Sätze, 3 bis 5 Wiederholungen, 3 bis 5 Minuten Pause, 3 bis 5 Mal pro Woche.', 'Die schweren Sätze folgen dieser Faustregel.']
  }
}
};
