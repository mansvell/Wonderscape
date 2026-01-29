import { Component, AfterViewInit } from '@angular/core';
import {NgForOf, NgClass, NgIf} from '@angular/common';
import { LanguageService, Lang } from '../services/language.services';

type Monument = {
  key: string;
  land:Record<Lang, string>
  stadt:string;
  image: string;
  name: Record<Lang, string>;
  desc: Record<Lang, string>;
};

@Component({
  selector: 'app-famous-monuments',
  standalone: true,
  imports: [NgForOf, NgClass, NgIf],
  templateUrl: './monuments.html',
  styleUrl: './monuments.css'
})

export class MonumentsClass implements AfterViewInit {
  constructor(public lang: LanguageService) {}

  monuments: Monument[] = [
    {
      key: 'eiffel',
      land: { de:'Frankreich', fr:'France', en:'France' },
      stadt: 'Paris',
      image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=2200&q=80',
      name: { de:'Eiffelturm', fr:'Tour Eiffel', en:'Eiffel Tower' },
      desc: {
        de: 'Erbaut von Gustave Eiffel für die Weltausstellung 1889, war dieser 324 Meter hohe Eisenfachwerkturm zunächst umstritten, wurde aber zum ikonischsten Symbol Frankreichs. Als einst höchstes Bauwerk der Welt vereint er ingenieurtechnische Pionierleistung mit ästhetischer Eleganz und bietet einen panoramischen Blick auf die französische Hauptstadt.',
        fr: 'Construite par Gustave Eiffel pour l’Exposition universelle de 1889, cette tour de fer de 324 mètres fut d’abord controversée avant de devenir le symbole iconique de la France. Plus haute structure du monde à son époque, elle allie prouesse technique pionnière et élégance esthétique, offrant une vue panoramique sur la capitale.',
        en: 'Built by Gustave Eiffel for the 1889 World\'s Fair, this 324-meter iron lattice tower was initially controversial before becoming France\'s most iconic symbol. Once the world\'s tallest structure, it combines pioneering engineering with aesthetic elegance, offering panoramic views of the French capital.'
      }
    },
    {
      key: 'statueofliberty',
      land: { de:'USA', fr:'Etats Unis', en:'USA' },
      stadt: 'New York',
      image: 'https://images.unsplash.com/photo-1485738422979-f5c462d49f74?auto=format&fit=crop&w=2200&q=80',
      name: { de:'Freiheitsstatue', fr:'Statue de la Liberté', en:'Statue of Liberty' },
      desc: {
        de: 'Ein Geschenk Frankreichs an die USA (1886), entworfen von Frédéric Auguste Bartholdi, mit innerer Struktur von Gustave Eiffel. Die 93 Meter hohe neoklassizistische Kupferstatue stellt Libertas, die römische Göttin der Freiheit, dar und begrüßte Millionen Einwanderer als erstes Symbol der Hoffnung, Demokratie und neuen Möglichkeiten in Amerika.',
        fr: 'Cadeau de la France aux États-Unis (1886), conçue par Frédéric Auguste Bartholdi avec une structure interne de Gustave Eiffel. Cette statue néoclassique en cuivre de 93 mètres représente Libertas, déesse romaine de la liberté, et accueillit des millions d\'immigrants comme premier symbole d\'espoir, de démocratie et de nouvelles opportunités en Amérique.',
        en: 'A gift from France to the United States (1886), designed by Frédéric Auguste Bartholdi with internal structure by Gustave Eiffel. This 93-meter neoclassical copper statue depicts Libertas, the Roman goddess of freedom, and welcomed millions of immigrants as the first symbol of hope, democracy, and new beginnings in America.'
      }
    },
    {
      key: 'bigben',
      land: { de:'Vereinigtes Königreich', fr:'Royaume Unis', en:'United Kingdom' },
      stadt: 'London',
      image: 'https://images.unsplash.com/photo-1529655683826-aba9b3e77383?auto=format&fit=crop&w=2200&q=80',
      name: { de:'Big Ben', fr:'Big Ben', en:'Big Ben' },
      desc: {
        de: 'Eigentlich bezeichnet "Big Ben" die 13,5 Tonnen schwere Hauptglocke im Elizabeth Tower des Palace of Westminster. Der 96 Meter hohe neugotische Turm, fertiggestellt 1859, ist eines der präzisesten mechanischen Uhrwerke der Welt und das akustische Symbol britischer Parlamentsdemokratie, dessen Schlag weltweit mit britischer Tradition und Beständigkeit assoziiert wird.',
        fr: 'À proprement parler, "Big Ben" désigne la cloche principale de 13,5 tonnes dans la tour Elizabeth du Palais de Westminster. Ce tour néogothique de 96 mètres, achevée en 1859, abrite l\'un des mécanismes d\'horlogerie mécanique les plus précis au monde et constitue le symbole sonore de la démocratie parlementaire britannique, dont les coups sont associés dans le monde entier à la tradition et à la constance britanniques.',
        en: 'Technically, "Big Ben" refers to the 13.5-ton main bell within the Elizabeth Tower of the Palace of Westminster. The 96-meter neo-Gothic tower, completed in 1859, houses one of the world\'s most precise mechanical clock mechanisms and serves as the auditory symbol of British parliamentary democracy, its chimes globally associated with British tradition and steadfastness.'
      }
    },
    {
      key: 'cologne-cathedral',
      land: { de: 'Deutschland', fr: 'Allemagne', en: 'Germany' },
      stadt:  'Köln',
      image: 'https://etichotels.com/journal/wp-content/uploads/2024/01/10-Things-To-Know-About-Cologne_Cathedral-ETIC-Hotels-scaled.jpg',
      name: { de: 'Kölner Dom', fr: 'Cathédrale de Cologne', en: 'Cologne Cathedral' },
      desc: {
        de: 'Begonnen 1248, aber erst 1880 vollendet, ist diese gotische Kathedrale mit ihren 157 Meter hohen Zwillingstürmen das meistbesuchte Wahrzeichen Deutschlands. Als Meisterwerk mittelalterlicher Baukunst beherbergt sie den Schrein der Heiligen Drei Könige und überstand als spirituelles und architektonisches Symbol Kölns die Bombardierungen des Zweiten Weltkriegs.',
        fr: 'Commencée en 1248 mais achevée seulement en 1880, cette cathédrale gothique aux deux flèches de 157 mètres est le monument le plus visité d\'Allemagne. Chef-d\'œuvre de l\'architecture médiévale, elle abrite la châsse des Rois Mages et a survécu aux bombardements de la Seconde Guerre mondiale, demeurant le symbole spirituel et architectural de Cologne.',
        en: 'Begun in 1248 but not completed until 1880, this Gothic cathedral with its 157-meter twin spires is Germany\'s most visited landmark. A masterpiece of medieval architecture, it houses the Shrine of the Three Kings and survived World War II bombings, remaining Cologne\'s spiritual and architectural symbol.'
      }
    },
    {
      key: 'sydneyopera',
      land: { de:'Australia', fr:'Australie', en:'Australia' },
      stadt: 'Sydney',
      image: 'https://a.travel-assets.com/findyours-php/viewfinder/images/res70/474000/474916-Sydney-Opera-House.jpg',
      name: { de:'Opernhaus Sydney', fr:'Opéra de Sydney', en:'Sydney Opera House' },
      desc: {
        de: 'Entworfen vom dänischen Architekten Jørn Utzon und 1973 eröffnet, ist dieses expressionistische Bauwerk mit seinen charakteristischen schalenförmigen Segeldächern ein UNESCO-Weltkulturerbe und das unverkennbare Symbol Australiens. Mehr als ein Veranstaltungsort: es ist eine Ikone des 20. Jahrhunderts, die Architektur, Ingenieurwesen und darstellende Kunst an der malerischen Sydney Cove vereint.',
        fr: 'Conçu par l\'architecte danois Jørn Utzon et inauguré en 1973, ce bâtiment expressionniste aux coques voilées caractéristiques est classé au patrimoine mondial de l\'UNESCO et le symbole indissociable de l\'Australie. Plus qu\'une salle de spectacle : c\'est une icône du XXe siècle qui unit architecture, ingénierie et arts vivants sur la pittoresque Sydney Cove.',
        en: 'Designed by Danish architect Jørn Utzon and opened in 1973, this expressionist building with its iconic sail-like shells is a UNESCO World Heritage Site and Australia\'s unmistakable symbol. More than a performance venue: it\'s a 20th-century icon combining architecture, engineering, and performing arts at picturesque Sydney Cove.'
      }
    },
    {
      key: 'mountrushmore',
      land: { de:'USA', fr:'États-Unis', en:'USA' },
      stadt: 'Keystone, South Dakota',
      image: 'https://www.votretourdumonde.com/wp-content/uploads/2020/04/plus-beaux-monuments-rushmore-1.jpg',
      name: {
        de:'Mount Rushmore',
        fr:'Mont Rushmore',
        en:'Mount Rushmore'
      },
      desc: {
        de: 'Geschaffen von Gutzon Borglum (1927-1941), zeigen diese 18 Meter hohen Granit-Porträts die Präsidenten Washington, Jefferson, Roosevelt und Lincoln. Mehr als eine technische Meisterleistung der Bildhauerei: das Denkmal verkörpert amerikanische Ideale wie Gründung, Expansion, Bewahrung und Einheit, auch wenn seine Lage auf indigenem Land kontrovers bleibt.',
        fr: 'Réalisé par Gutzon Borglum (1927-1941), ces portraits granitiques de 18 mètres de haut représentent les présidents Washington, Jefferson, Roosevelt et Lincoln. Plus qu\'un exploit technique de sculpture : ce mémorial incarne les idéaux américains de fondation, expansion, préservation et unité, bien que son emplacement sur des terres indigènes demeure controversé.',
        en: 'Carved by Gutzon Borglum (1927-1941), these 18-meter granite portraits depict Presidents Washington, Jefferson, Roosevelt, and Lincoln. More than a technical sculpting achievement: the memorial embodies American ideals of foundation, expansion, preservation, and unity, though its location on indigenous land remains controversial.'
      }
    },
    {
      key: 'burjkhalifa',
      land: { de:'UAE', fr:'UAE', en:'UAE' },
      stadt: 'Dubai',
      image: 'https://tse2.mm.bing.net/th/id/OIP.MMOSuZyYu3YPaho36zNkuwHaLH?rs=1&pid=ImgDetMain&o=7&rm=3',
      name: { de:'Burj Khalifa', fr:'Burj Khalifa', en:'Burj Khalifa' },
      desc: {
        de: 'Mit 828 Metern das höchste Bauwerk der Welt, eröffnet 2010. Entworfen von Adrian Smith (SOM), kombiniert es islamische Architekturmotive mit hypermoderner Technologie. Der Wolkenkratzer mit 163 Stockwerken beherbergt Luxuswohnungen, Büros und das Armani Hotel und symbolisiert Dubais atemberaubenden Aufstieg als globale Metropole des 21. Jahrhunderts.',
        fr: 'Plus haute structure du monde avec 828 mètres, inaugurée en 2010. Conçue par Adrian Smith (SOM), elle combine des motifs d\'architecture islamique avec une technologie hypermoderne. Ce gratte-ciel de 163 étages abrite des appartements de luxe, des bureaux et l\'hôtel Armani, symbolisant l\'ascension spectaculaire de Dubaï comme métropole mondiale du XXIe siècle.',
        en: 'At 828 meters, the world\'s tallest structure, opened in 2010. Designed by Adrian Smith (SOM), it combines Islamic architectural motifs with hypermodern technology. The 163-story skyscraper houses luxury residences, offices, and the Armani Hotel, symbolizing Dubai\'s breathtaking rise as a 21st-century global metropolis.'
      }
    },
    {
      key: 'dubaiframe',
      land: { de:'Vereinigte Arabische Emirate', fr:'Émirats Arabes Unis', en:'United Arab Emirates' },
      stadt: 'Dubai',
      image: 'https://blog.raynatours.com/wp-content/uploads/2017/04/Dubai-Frame.jpg',
      name: { de:'Dubai Frame', fr:'Dubai Frame', en:'Dubai Frame' },
      desc: {
        de: 'Eröffnet 2018, ragt dieses 150 Meter hohe, 93 Meter breite rechteckige Gebäude wie ein riesiger Bilderrahmen auf. Entworfen von Fernando Donis, bietet es durch sein innovatives Design einen physischen und metaphorischen Blick: nach Norden auf das historische "alte Dubai", nach Süden auf die ultramoderne Skyline, und verkörpert so die transformative Reise der Stadt.',
        fr: 'Inauguré en 2018, ce bâtiment rectangulaire de 150 mètres de haut sur 93 mètres de large s\'élève comme un cadre géant. Conçu par Fernando Donis, il offre par son design innovant une vue physique et métaphorique : au nord sur le « vieux Dubaï » historique, au sud sur la skyline ultramoderne, incarnant ainsi le voyage transformateur de la ville.',
        en: 'Opened in 2018, this 150-meter tall, 93-meter wide rectangular building rises like a giant picture frame. Designed by Fernando Donis, it provides through its innovative design both a physical and metaphorical view: north to historic "old Dubai," south to the ultramodern skyline, thus embodying the city\'s transformative journey.'
      }
    },
    {
      key: 'acropolis',
      land: { de:'Griechenland', fr:'Grèce', en:'Greece' },
      stadt: 'Athen',
      image: 'https://monuments.fr/wp-content/uploads/2022/07/Acropole-scaled.jpeg',
      name: { de:'Akropolis', fr:'Acropole', en:'Acropolis' },
      desc: {
        de: 'Diese antike Zitadelle auf einem 156 Meter hohen Felsen beherbergt ikonische Bauwerke aus dem 5. Jahrhundert v. Chr., darunter den Parthenon, das Erechtheion und den Tempel der Athena Nike. Als Höhepunkt der klassischen griechischen Zivilisation symbolisiert sie die Geburtsstätte von Demokratie, Philosophie, Theater und westlicher Architektur.',
        fr: 'Cette citadelle antique sur un rocher de 156 mètres abrite des bâtiments emblématiques du Ve siècle av. J.-C., dont le Parthénon, l\'Érechthéion et le temple d\'Athéna Nikè. Apogée de la civilisation grecque classique, elle symbolise le berceau de la démocratie, de la philosophie, du théâtre et de l\'architecture occidentale.',
        en: 'This ancient citadel on a 156-meter rock houses iconic 5th-century BC structures including the Parthenon, Erechtheion, and Temple of Athena Nike. As the pinnacle of classical Greek civilization, it symbolizes the birthplace of democracy, philosophy, theater, and Western architecture.'
      }
    },
    {
      key: 'siegessaeule',
      land: { de:'Deutschland', fr:'Allemagne', en:'Germany' },
      stadt: 'Berlin',
      image: 'https://external-preview.redd.it/1NDTaFdJ7aDCvtTAu0DhSwIpbstq22bywsGQtObMTEk.jpg?auto=webp&s=5fc2d18313224b88438fdcf4d721358bd242b97a',
      name: { de:'Siegessäule', fr:'Colonne de la Victoire', en:'Victory Column' },
      desc: {
        de: 'Errichtet 1873 nach Entwürfen von Heinrich Strack, erinnert diese 67 Meter hohe neoklassizistische Säule mit vergoldeter Viktoria-Statue an preußische Siege im Deutsch-Dänischen und Deutsch-Französischen Krieg. Ursprünglich vor dem Reichstag, wurde sie 1939 an den Großen Stern versetzt und ist heute ein Wahrzeichen des vereinten Berlins und beliebter Aussichtspunkt im Tiergarten.',
        fr: 'Érigée en 1873 d\'après les plans de Heinrich Strack, cette colonne néoclassique de 67 mètres surmontée d\'une statue dorée de Victoria commémore les victoires prussiennes contre le Danemark et la France. Initialement devant le Reichstag, elle fut déplacée au Großer Stern en 1939 et est aujourd\'hui un emblème du Berlin réunifié et un point de vue populaire dans le Tiergarten.',
        en: 'Erected in 1873 from designs by Heinrich Strack, this 67-meter neoclassical column crowned with a gilded Victoria statue commemorates Prussian victories in the Danish and Franco-Prussian wars. Originally before the Reichstag, it was moved to the Großer Stern in 1939 and now stands as a landmark of unified Berlin and popular viewpoint in the Tiergarten.'
      }
    }
  ];

  ngAfterViewInit(): void {
    const items = document.querySelectorAll<HTMLElement>('[data-reveal]');
    const io = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.18, rootMargin: '0px 0px -10% 0px' }
    );
    items.forEach(el => io.observe(el));
  }
}
