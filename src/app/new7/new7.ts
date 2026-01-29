import {AfterViewInit, Component} from '@angular/core';
import {NgClass, NgFor, NgForOf, NgIf} from '@angular/common';
import { LanguageService, Lang } from '../services/language.services';

type Wonder = {
  key: string;
  land: string;
  stadt: string;
  image: string;
  credit?: string;
  name: Record<Lang, string>;
  desc: Record<Lang, string>;
};

@Component({
  selector: 'app-new7',
  imports: [
    NgForOf,
    NgClass,
    NgIf
  ],
  templateUrl: './new7.html',
  styleUrl: './new7.css',
  standalone: true
})
export class New7Class implements AfterViewInit {
  constructor(public lang: LanguageService) {}

  wonders: Wonder[] = [
    {
      key: 'greatwall',
      land: 'China',
      stadt: 'Beijing (Northern Region)',
      image:
        'https://cdn.britannica.com/54/122154-050-4DA0F697/Great-Wall-of-China.jpg',
      name: {
        de: 'Die Große Mauer',
        fr: 'La Grande Muraille',
        en: 'The Great Wall',
      },
      desc: {
        de: 'Eine über 21.000 km lange Befestigung, die sich über Bergkämme und Wüsten erstreckt , ein jahrtausendealtes Symbol für Chinas Verteidigungswillen, architektonische Kühnheit und historische Ausdauer.',
        fr: 'Une fortification de plus de 21 000 km serpentant les crêtes montagneuses et les déserts , symbole millénaire de la volonté défensive, de l’audace architecturale et de la persévérance historique de la Chine.',
        en: 'A fortification stretching over 21,000 km across mountain ridges and deserts , an ancient symbol of China’s defensive will, architectural daring, and historical endurance.',
      },
    },
    {
      key: 'petra',
      land: 'Jordan',
      stadt: 'Ma\'an Governorate',
      image:
        'https://mymodernmet.com/wp/wp-content/uploads/2020/08/petra-jordan-4.jpg',
      name: { de: 'Petra', fr: 'Pétra', en: 'Petra' },
      desc: {
        de: 'Die versteckte, in rosaroten Fels gemeißelte Hauptstadt der Nabatäer. Bekannt durch das Schatzhaus (Al-Khazneh), ist sie ein atemberaubendes Vermächtnis von Handel, Hydraulik und in Stein gehauener Architektur.',
        fr: 'L’ancienne capitale nabatéenne, cachée et taillée dans la roche rose. Célèbre pour son Trésor (Al-Khazneh), elle est un héritage saisissant de commerce, d’hydraulique et d’architecture sculptée dans la montagne.',
        en: 'The hidden capital of the Nabataeans, carved into pink rock. Famous for the Treasury (Al-Khazneh), it is a stunning legacy of trade, hydraulics, and rock-cut architecture.',
      },
    },
    {
      key: 'redeemer',
      land: 'Brazil',
      stadt: 'Rio de Janeiro',
      image:
        'https://tse4.mm.bing.net/th/id/OIP.4LVhAxeUdPZ4H8ehgBzBmgHaE4?rs=1&pid=ImgDetMain&o=7&rm=3',
      name: { de: 'Christus der Erlöser', fr: 'Christ Rédempteur', en: 'Christ the Redeemer' },
      desc: {
        de: 'Die 30 Meter hohe, den Corcovado-Berg krönende Art-Deco-Statue. Mehr als ein Wahrzeichen – sie ist ein universelles Symbol für Frieden und einen umarmenden Blick auf die Bucht und die pulsierende Stadt darunter.',
        fr: 'Cette statue Art Déco de 30 mètres couronnant le mont Corcovado. Plus qu’un monument, c’est un symbole universel de paix et un regard embrassant la baie et la ville vibrante en contrebas.',
        en: 'The 30-meter-tall Art Deco statue crowning Corcovado Mountain. More than a landmark, it is a universal symbol of peace and an embracing gaze over the bay and vibrant city below.',
      },
    },
    {
      key: 'machupicchu',
      land: 'Peru',
      stadt: 'Cusco Region',
      image:
        'https://cdn.holidayguru.ch/wp-content/uploads/2020/03/Machu-Pichu-ancient-ruins.-Detail_shutterstock_22225723.jpg',
      name: { de: 'Machu Picchu', fr: 'Machu Picchu', en: 'Machu Picchu' },
      desc: {
        de: 'Die legendäre, perfekt in die Anden integrierte Inkazitadelle aus dem 15. Jahrhundert. Ihre Terrassen, Tempel und die spektakuläre Lage machen sie zum ultimativen Symbol des Ingenieurwissens und spirituellen Erbes der Inka.',
        fr: 'La légendaire citadelle inca du XVe siècle, parfaitement intégrée dans les Andes. Ses terrasses, ses temples et son emplacement spectaculaire en font le symbole ultime du génie civil et de l’héritage spirituel inca.',
        en: 'The legendary 15th-century Inca citadel, perfectly integrated into the Andes. Its terraces, temples, and spectacular location make it the ultimate symbol of Inca engineering and spiritual heritage.',
      },
    },
    {
      key: 'chichenitza',
      land: 'Mexico',
      stadt: 'Yucatán',
      image:
        'https://tse1.mm.bing.net/th/id/OIP.YoOqowdTGvI6wYYP-Rq--QHaE8?rs=1&pid=ImgDetMain&o=7&rm=3',
      name: { de: 'Chichén Itzá', fr: 'Chichén Itzá', en: 'Chichén Itzá' },
      desc: {
        de: 'Die große präkolumbische Stadt der Maya, geprägt durch die berühmte Stufenpyramide „El Castillo“. Sie vereint Astronomie, heilige Geometrie und Macht in einem einzigartigen architektonischen Ensemble.',
        fr: 'La grande cité maya précolombienne, dominée par la célèbre pyramide à degrés « El Castillo ». Un lieu où astronomie, géométrie sacrée et pouvoir se mêlent dans un ensemble architectural unique.',
        en: 'The great pre-Columbian Maya city, dominated by the famous stepped pyramid "El Castillo." A site where astronomy, sacred geometry, and power merge in a unique architectural ensemble.',
      },
    },
    {
      key: 'colosseum',
      land: 'Italy',
      stadt: 'Rome',
      image:
        'https://tse1.mm.bing.net/th/id/OIP.3ydfmzY0jLOvnHbCADbPbgHaDK?rs=1&pid=ImgDetMain&o=7&rm=3',
      name: { de: 'Kolosseum', fr: 'Colisée', en: 'Colosseum' },
      desc: {
        de: 'Das größte jemals gebaute Amphitheater, Herz der römischen Unterhaltung und Ingenieurskunst. In seinen steinernen Rängen hallen noch immer der Glanz und die Grausamkeit des antiken Roms wider.',
        fr: 'Le plus grand amphithéâtre jamais construit, cœur du divertissement et du génie romain. Dans ses gradins de pierre résonnent encore la splendeur et la cruauté de la Rome antique.',
        en: 'The largest amphitheater ever built, the heart of Roman entertainment and engineering. In its stone tiers still echo the splendor and the cruelty of ancient Rome.',
      },
    },
    {
      key: 'tajmahal',
      land: 'India',
      stadt: 'Agra',
      image:
        'https://static.vecteezy.com/system/resources/thumbnails/017/791/706/original/4k-time-lapse-of-taj-mahal-an-ivory-white-marble-mausoleum-on-the-south-bank-of-the-yamuna-river-in-agra-uttar-pradesh-india-free-video.jpg',
      name: { de: 'Taj Mahal', fr: 'Taj Mahal', en: 'Taj Mahal' },
      desc: {
        de: 'Das strahlend weiße Marmormausoleum, erbaut aus Liebe. Seine perfekte Symmetrie, die filigranen Intarsien und die spiegelnde Wasserfläche machen es zum reinsten und bewegendsten Ausdruck mogulischer Architektur.',
        fr: 'Le mausolée de marbre blanc immaculé, bâti par amour. Sa symétrie parfaite, ses incrustations délicates et ses bassins réfléchissants en font l’expression la plus pure et la plus émouvante de l’architecture moghole.',
        en: 'The immaculate white marble mausoleum, built out of love. Its perfect symmetry, delicate inlays, and reflecting pools make it the purest and most moving expression of Mughal architecture.',
      },
    },
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
      { threshold: 0.18, rootMargin: '0px 0px -8% 0px' }
    );

    items.forEach(el => io.observe(el));
  }
}
