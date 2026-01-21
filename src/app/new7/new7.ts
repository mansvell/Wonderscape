import {AfterViewInit, Component} from '@angular/core';
import {NgClass, NgFor, NgForOf, NgIf, NgStyle} from '@angular/common';
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
    NgStyle,
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
      stadt: '...',
      image:
        'https://cdn.britannica.com/54/122154-050-4DA0F697/Great-Wall-of-China.jpg',
      name: {
        de: 'Die Große Mauer',
        fr: 'La Grande Muraille',
        en: 'The Great Wall',
      },
      desc: {
        de: 'Ein monumentales Bauwerk, das sich über Berge und Täler zieht – Symbol von Ausdauer, Geschichte und Maßstab.',
        fr: 'Un ouvrage monumental serpentant montagnes et vallées — symbole d’histoire, de persévérance et de grandeur.',
        en: 'A monumental structure winding across mountains and valleys — a symbol of history, endurance, and scale.',
      },
    },
    {
      key: 'petra',
      land: '...',
      stadt: 'Jordan',
      image:
        'https://mymodernmet.com/wp/wp-content/uploads/2020/08/petra-jordan-4.jpg',
      name: { de: 'Petra', fr: 'Pétra', en: 'Petra' },
      desc: {
        de: 'In Fels gemeißelt, geheimnisvoll und majestätisch – eine Stadt aus Stein und Licht.',
        fr: 'Taillée dans la roche, mystérieuse et majestueuse — une ville de pierre et de lumière.',
        en: 'Carved into rock, mysterious and majestic — a city of stone and light.',
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
        de: 'Über der Stadt – ikonisch, ruhig, riesig. Eine Perspektive, die Rio wie ein Gemälde wirken lässt.',
        fr: 'Au-dessus de la ville — iconique, calme, immense. Une vue qui transforme Rio en tableau.',
        en: 'Above the city — iconic, calm, immense. A viewpoint that turns Rio into a living painting.',
      },
    },
    {
      key: 'machupicchu',
      land: 'Peru',
      stadt: '...',
      image:
        'https://cdn.holidayguru.ch/wp-content/uploads/2020/03/Machu-Pichu-ancient-ruins.-Detail_shutterstock_22225723.jpg',
      name: { de: 'Machu Picchu', fr: 'Machu Picchu', en: 'Machu Picchu' },
      desc: {
        de: 'Nebelschwaden, Terrassen, Anden — ein Ort, der wie ein Geheimnis über den Wolken wirkt.',
        fr: 'Brume, terrasses, Andes — un lieu qui ressemble à un secret posé au-dessus des nuages.',
        en: 'Mist, terraces, Andes — a place that feels like a secret resting above the clouds.',
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
        de: 'Geometrie und Mythos. Ein Meisterwerk der Maya-Kultur mit zeitloser Präsenz.',
        fr: 'Géométrie et mythe. Un chef-d’œuvre maya à la présence intemporelle.',
        en: 'Geometry and myth. A Maya masterpiece with timeless presence.',
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
        de: 'Stein, Schatten, Geschichte. Ein Amphitheater, das Vergangenheit greifbar macht.',
        fr: 'Pierre, ombre, histoire. Un amphithéâtre qui rend le passé palpable.',
        en: 'Stone, shadow, history. An amphitheater that makes the past tangible.',
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
        de: 'Marble, Symmetrie, Emotion. Ein Denkmal der Liebe – elegant und still.',
        fr: 'Marbre, symétrie, émotion. Un monument d’amour — élégant et silencieux.',
        en: 'Marble, symmetry, emotion. A monument of love — elegant and quiet.',
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
