import { Component, AfterViewInit } from '@angular/core';
import {NgForOf, NgClass, NgIf} from '@angular/common';
import { LanguageService, Lang } from '../services/language.services';

type Wonder = {
  key: string;
  land:string,
  stadt:string,
  image: string;
  credit?: string;
  name: Record<Lang, string>;
  desc: Record<Lang, string>;
};

@Component({
  selector: 'app-old7',
  imports: [NgForOf, NgClass, NgIf],
  templateUrl: './old7.html',
  styleUrl: './old7.css',
  standalone: true
})

export class Old7Class implements AfterViewInit {
  constructor(public lang: LanguageService) {}


  wonders: Wonder[] = [
    {
      key: 'giza',
      land: 'Egypt',
      stadt: 'Giza',
      image: 'https://d1u2r2pnzqmal.cloudfront.net/content_images/images/10423/normal/pyramiden_gizeh.jpg?1641495454',
      name: { de: 'Pyramiden von Gizeh', fr: 'Pyramides de Gizeh', en: 'Pyramids of Giza' },
      desc: {
        de: 'Die ikonische Dreiergruppe aus Cheops-, Chephren- und Mykerinos-Pyramide, erbaut vor über 4.500 Jahren als monumentale Königsgräber. Mit der Großen Sphinx als stillem Wächter repräsentieren sie den Gipfel altägyptischer Ingenieurskunst, astronomischer Ausrichtung und absoluter Machtdarstellung – das einzige erhaltene Weltwunder der Antike.',
        fr: 'Le trio emblématique des pyramides de Khéops, Khéphren et Mykérinos, construites il y a plus de 4 500 ans comme tombeaux royaux monumentaux. Gardées par le Sphinx silencieux, elles représentent l’apogée du génie architectural égyptien, de l’alignement astronomique et de l’expression du pouvoir absolu — la seule merveille antique encore visible aujourd’hui.',
        en: 'The iconic trio of the Great Pyramids of Khufu, Khafre, and Menkaure, built over 4,500 years ago as monumental royal tombs. Guarded by the silent Sphinx, they represent the pinnacle of ancient Egyptian engineering, astronomical precision, and absolute power expression — the only surviving wonder of the ancient world.'
      }
    },
    {
      key: 'babylon',
      land: 'Iraq',
      stadt: 'Babylon (near Hillah)',
      image: 'https://i.pinimg.com/originals/c6/e1/b7/c6e1b7f42d694e1e86eb41a4f17082b0.jpg',
      name: { de: 'Hängende Gärten von Babylon', fr: 'Jardins suspendus de Babylone', en: 'Hanging Gardens of Babylon' },
      desc: {
        de: 'Das geheimnisvollste aller Weltwunder, möglicherweise von König Nebukadnezar II. für seine Gemahlin errichtet. Beschrieben als terrassierte, bewässerte Gärtenpaläste, die wie ein grünes Bergmassiv in der mesopotamischen Ebene erschienen. Ein technisches Wunderwerk der Antike, dessen tatsächliche Existenz und genaue Lage Archäologen bis heute rätseln lassen.',
        fr: 'La merveille la plus mystérieuse, peut-être construite par le roi Nabuchodonosor II pour son épouse. Décrits comme des palais-jardins en terrasses irrigués, ressemblant à une montagne verdoyante surgissant dans la plaine mésopotamienne. Un prodige technique de l’Antiquité dont l’existence réelle et l’emplacement précis continuent d’intriguer les archéologues.',
        en: 'The most mysterious of all wonders, possibly built by King Nebuchadnezzar II for his wife. Described as irrigated, terraced garden-palaces appearing like a green mountain rising from the Mesopotamian plain. An ancient engineering marvel whose actual existence and precise location continue to puzzle archaeologists to this day.'
      }
    },
    {
      key: 'zeus',
      land: 'Greece',
      stadt: 'Olympia',
      image: 'https://as1.ftcdn.net/v2/jpg/08/97/81/62/1000_F_897816282_L3pOH1ImlMAgHB6Pe7HOkvNUq854DcMW.jpg',
      name: { de: 'Statue des Zeus in Olympia', fr: 'Statue de Zeus à Olympie', en: 'Statue of Zeus at Olympia' },
      desc: {
        de: 'Das Werk des Bildhauers Phidias, geschaffen um 430 v. Chr. für den Zeustempel in Olympia. Die etwa 12 Meter hohe, mit Gold und Elfenbein verzierte Sitzstatue des Gottes thronte in einem eigenen Saal und verkörperte die Vorstellung göttlicher Autorität und Schönheit. Pilger berichteten, allein der Anblick könne die Seele erheben – bis sie in späteren Jahrhunderten verschwand.',
        fr: 'Œuvre du sculpteur Phidias, créée vers 430 av. J.-C. pour le temple de Zeus à Olympie. Cette statue chryséléphantine d’environ 12 mètres, plaquée d’or et d’ivoire, trônait dans sa propre salle, incarnant l’autorité et la beauté divines. Les pèlerins rapportaient que sa seule vue pouvait élever l’âme — avant qu’elle ne disparaisse au fil des siècles.',
        en: 'The masterpiece of sculptor Phidias, created around 430 BC for the Temple of Zeus at Olympia. This approximately 12-meter tall chryselephantine (gold and ivory) seated statue of the god dominated its own chamber, embodying divine authority and beauty. Pilgrims reported that the mere sight of it could elevate the soul — until it was lost in later centuries.'
      }
    },
    {
      key: 'artemis',
      land: ' Turkey',
      stadt: 'Ephesus (Selçuk)',
      image: 'https://th.bing.com/th/id/R.10e7a4f7dd22c78ec3e0fee1256df2da?rik=xPflqf7HPd%2fbFw&riu=http%3a%2f%2ffoundtheworld.com%2fwp-content%2fuploads%2f2014%2f04%2fTemple-of-Artemis-6.jpg&ehk=aApt9Rljs3e%2f%2bDIwPSuiw7CEiLJ8IH%2bfzOl8luv9an0%3d&risl=&pid=ImgRaw&r=0',
      name: { de: 'Tempel der Artemis', fr: 'Temple d’Artémis', en: 'Temple of Artemis' },
      desc: {
        de: 'Ein monumentaler ionischer Tempel, der der Göttin der Jagd und Natur gewidmet war. Mehrmals auf derselben heiligen Stätte errichtet, erreichte seine letzte Version im 4. Jahrhundert v. Chr. schwindelerregende Ausmaße mit über 100 Marmorsäulen. Mehr als nur ein Gebäude: ein international anerkanntes Heiligtum, Bankzentrum und Symbol für den Reichtum und die Frömmigkeit der antiken Metropole Ephesos.',
        fr: 'Un temple ionique monumental dédié à la déesse de la chasse et de la nature. Reconstruit plusieurs fois sur le même site sacré, sa dernière version au IVe siècle av. J.-C. atteignit des proportions gigantesques avec plus de 100 colonnes de marbre. Plus qu’un bâtiment : un sanctuaire international, une banque et un symbole de la richesse et de la piété de la métropole antique d’Éphèse.',
        en: 'A monumental Ionic temple dedicated to the goddess of the hunt and nature. Rebuilt multiple times on the same sacred site, its final version in the 4th century BC reached staggering proportions with over 100 marble columns. More than a building: an internationally recognized sanctuary, banking center, and symbol of the wealth and piety of the ancient metropolis of Ephesus.'
      }
    },
    {
      key: 'halicarnassus',
      land: 'Turkey',
      stadt: 'Halicarnassus (Bodrum)',
      image: 'https://insights.gostudent.org/hubfs/Insights_GoStudent_Blog_Images/Mausoleum-of-Halicarnassus-1.jpg',
      name: { de: 'Mausoleum von Halikarnassos', fr: 'Mausolée d’Halicarnasse', en: 'Mausoleum at Halicarnassus' },
      desc: {
        de: 'Das prächtige Grabmal für den persischen Satrapen Mausolos, errichtet um 350 v. Chr. von seiner Gemahlin Artemisia. Ein architektonisches Hybridwunder, das griechische, lykische und ägyptische Stile verschmolz: eine hohe rechteckige Basis, ein Säulenring und eine stufenförmige Pyramide, alles reich mit Skulpturen und Friesen geschmückt. So bedeutend, dass sein Name zum Gattungsbegriff für monumentale Grabstätten wurde.',
        fr: 'Le tombeau somptueux du satrape perse Mausole, érigé vers 350 av. J.-C. par son épouse Artémise. Un hybride architectural mêlant styles grec, lycien et égyptien : une haute base rectangulaire, une colonnade et une pyramide à degrés, le tout richement orné de sculptures et de frises. Si important que son nom est devenu le terme générique pour tout tombeau monumental.',
        en: 'The lavish tomb for the Persian satrap Mausolus, erected around 350 BC by his wife Artemisia. An architectural hybrid blending Greek, Lycian, and Egyptian styles: a tall rectangular base, a colonnade, and a stepped pyramid, all richly decorated with sculptures and friezes. So significant that its name became the generic term for any monumental tomb.'
      }
    },
    {
      key: 'colossus',
      land: 'Greece',
      stadt: 'Rhodes',
      image: 'https://www.carpemundi.com.br/wp-content/uploads/2021/07/colosso-rodes.jpg',
      name: { de: 'Kolosse von Rhodos', fr: 'Colosse de Rhodes', en: 'Colossus of Rhodes' },
      desc: {
        de: 'Eine riesige, über 30 Meter hohe Bronzestatue des Sonnengottes Helios, errichtet um 280 v. Chr. zum Gedenken an die erfolgreiche Verteidigung der Stadt. Konstruiert aus gegossenen Bronzeteilen auf einem steinernen Sockel, überragte sie den Hafen von Rhodos und war ein technisches Meisterwerk ihrer Zeit. Obwohl sie nur etwa 54 Jahre stand, blieb sie als Symbol für menschliches Streben, Stolz und Vergänglichkeit in der Erinnerung.',
        fr: 'Une statue géante en bronze du dieu-soleil Hélios, haute de plus de 30 mètres, érigée vers 280 av. J.-C. pour commémorer la défense victorieuse de la ville. Construite en pièces de bronze coulé sur un socle de pierre, elle dominait le port de Rhodes et fut un chef-d’œuvre technique de son époque. Bien qu’elle n’ait tenu que 54 ans, elle demeure dans la mémoire comme un symbole de l’ambition humaine, de la fierté et de la fragilité.',
        en: 'A giant bronze statue of the sun god Helios, over 30 meters tall, erected around 280 BC to commemorate the city\'s successful defense. Constructed from cast bronze plates on a stone base, it towered over the harbor of Rhodes and was a technical masterpiece of its age. Though it stood for only about 54 years, it endured in memory as a symbol of human ambition, pride, and transience.'
      }
    },
    {
      key: 'alexandria',
      land: 'Egypt',
      stadt: 'Alexandria',
      image: 'https://www.ingenieur.de/wp-content/uploads/2024/07/leuchtturm-alexandria-scaled.jpg',
      name: { de: 'Leuchtturm von Alexandria', fr: 'Phare d’Alexandrie', en: 'Lighthouse of Alexandria' },
      desc: {
        de: 'Der Prototyp aller Leuchttürme, erbaut um 280 v. Chr. auf der Insel Pharos. Mit einer geschätzten Höhe von 100-130 Metern war er über ein Jahrtausend lang eines der höchsten von Menschen errichteten Bauwerke. Sein Feuer, möglicherweise durch Spiegel verstärkt, war für Seeleute lebenswichtige Orientierung und machte Alexandria zum sichersten Hafen der antiken Welt – ein Symbol für Wissen, Handel und technologischen Fortschritt im hellenistischen Ägypten.',
        fr: 'L’archétype de tous les phares, construit vers 280 av. J.-C. sur l’île de Pharos. Avec une hauteur estimée de 100 à 130 mètres, il fut pendant plus d’un millénaire l’une des plus hautes structures jamais édifiées. Son feu, peut-être amplifié par des miroirs, était un guide vital pour les marins et fit d’Alexandrie le port le plus sûr du monde antique — un symbole du savoir, du commerce et du progrès technique dans l’Égypte hellénistique.',
        en: 'The prototype of all lighthouses, built around 280 BC on the island of Pharos. With an estimated height of 100-130 meters, it was for over a millennium one of the tallest man-made structures. Its fire, possibly magnified by mirrors, provided vital guidance for sailors and made Alexandria the safest harbor of the ancient world — a symbol of knowledge, trade, and technological advancement in Hellenistic Egypt.'
      }
    }
  ];

  ngAfterViewInit(): void {
    const items = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));
    if (!items.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            (e.target as HTMLElement).classList.add('is-visible');
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.16, rootMargin: '0px 0px -10% 0px' }
    );

    items.forEach(el => io.observe(el));
  }
}
