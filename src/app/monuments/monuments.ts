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
        de:'Ein Symbol moderner Ingenieurskunst und das Wahrzeichen von Paris.',
        fr:'Symbole de l’ingénierie moderne et icône de Paris.',
        en:'A symbol of modern engineering and the icon of Paris.'
      }
    },
    {
      key: 'statueofliberty',
      land: { de:'USA', fr:'Etats Unis', en:'USA' },
      stadt: 'New York',
      image: 'https://images.unsplash.com/photo-1485738422979-f5c462d49f74?auto=format&fit=crop&w=2200&q=80',
      name: { de:'Freiheitsstatue', fr:'Statue de la Liberté', en:'Statue of Liberty' },
      desc: {
        de:'Ein globales Zeichen für Freiheit, Hoffnung und Demokratie.',
        fr:'Un symbole mondial de liberté, d’espoir et de démocratie.',
        en:'A global symbol of freedom, hope, and democracy.'
      }
    },
    {
      key: 'bigben',
      land: { de:'Vereinigtes Königreich', fr:'Royaume Unis', en:'United Kingdom' },
      stadt: 'London',
      image: 'https://images.unsplash.com/photo-1529655683826-aba9b3e77383?auto=format&fit=crop&w=2200&q=80',
      name: { de:'Big Ben', fr:'Big Ben', en:'Big Ben' },
      desc: {
        de:'Zeit, Tradition und britische Geschichte vereint in einem Bauwerk.',
        fr:'Temps, tradition et histoire britannique réunis.',
        en:'Time, tradition, and British history united.'
      }
    },
    {
      key: 'sydneyopera',
      land: { de:'Australia', fr:'Australie', en:'Australia' },
      stadt: 'Sydney',
      image: 'https://a.travel-assets.com/findyours-php/viewfinder/images/res70/474000/474916-Sydney-Opera-House.jpg',
      name: { de:'Opernhaus Sydney', fr:'Opéra de Sydney', en:'Sydney Opera House' },
      desc: {
        de:'Ikonische Architektur und kulturelles Herz Australiens.',
        fr:'Architecture iconique et cœur culturel de l’Australie.',
        en:'Iconic architecture and cultural heart of Australia.'
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
        de:'Monumentale Felsreliefs der vier US-Präsidenten — Symbol amerikanischer Geschichte und Identität.',
        fr:'Sculptures monumentales de quatre présidents américains — symbole de l’histoire et de l’identité des États-Unis.',
        en:'Monumental rock carvings of four U.S. presidents — a symbol of American history and identity.'
      }
    },
    {
      key: 'burjkhalifa',
      land: { de:'UAE', fr:'UAE', en:'UAE' },
      stadt: 'Dubai',
      image: 'https://tse2.mm.bing.net/th/id/OIP.MMOSuZyYu3YPaho36zNkuwHaLH?rs=1&pid=ImgDetMain&o=7&rm=3',
      name: { de:'Burj Khalifa', fr:'Burj Khalifa', en:'Burj Khalifa' },
      desc: {
        de:'Das höchste Gebäude der Welt – Symbol menschlicher Ambition.',
        fr:'Le plus haut bâtiment du monde — symbole d’ambition humaine.',
        en:'The tallest building in the world — a symbol of human ambition.'
      }
    },
    {
      key: 'dubaiframe',
      land: { de:'Vereinigte Arabische Emirate', fr:'Émirats Arabes Unis', en:'United Arab Emirates' },
      stadt: 'Dubai',
      image: 'https://blog.raynatours.com/wp-content/uploads/2017/04/Dubai-Frame.jpg',
      name: { de:'Dubai Frame', fr:'Dubai Frame', en:'Dubai Frame' },
      desc: {
        de:'Ein monumentaler Rahmen, der das alte und das moderne Dubai symbolisch verbindet.',
        fr:'Un cadre monumental reliant symboliquement l’ancien et le nouveau Dubaï.',
        en:'A monumental frame symbolically linking old and modern Dubai.'
      }
    },
    {
      key: 'acropolis',
      land: { de:'Griechenland', fr:'Grèce', en:'Greece' },
      stadt: 'Athen',
      image: 'https://monuments.fr/wp-content/uploads/2022/07/Acropole-scaled.jpeg',
      name: { de:'Akropolis', fr:'Acropole', en:'Acropolis' },
      desc: {
        de:'Zentrum der antiken griechischen Kultur und Symbol der Demokratie.',
        fr:'Centre de la culture grecque antique et symbole de la démocratie.',
        en:'The heart of ancient Greek culture and a symbol of democracy.'
      }
    },
    {
      key: 'siegessaeule',
      land: { de:'Deutschland', fr:'Allemagne', en:'Germany' },
      stadt: 'Berlin',
      image: 'https://external-preview.redd.it/1NDTaFdJ7aDCvtTAu0DhSwIpbstq22bywsGQtObMTEk.jpg?auto=webp&s=5fc2d18313224b88438fdcf4d721358bd242b97a',
      name: { de:'Siegessäule', fr:'Colonne de la Victoire', en:'Victory Column' },
      desc: {
        de:'Ein historisches Berliner Monument und Symbol nationaler Erinnerung.',
        fr:'Un monument historique berlinois et symbole de mémoire nationale.',
        en:'A historic Berlin monument and symbol of national remembrance.'
      }}
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
