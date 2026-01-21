import { Component, AfterViewInit } from '@angular/core';
import {NgForOf, NgClass, NgIf} from '@angular/common';
import { LanguageService, Lang } from '../services/language.services';

type Monument = {
  key: string;
  location: string;
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
      location: 'Paris, France',
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
      location: 'New York, USA',
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
      location: 'London, United Kingdom',
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
      location: 'Sydney, Australia',
      image: 'https://images.unsplash.com/photo-1506976785307-8732e854ad03?auto=format&fit=crop&w=2200&q=80',
      name: { de:'Opernhaus Sydney', fr:'Opéra de Sydney', en:'Sydney Opera House' },
      desc: {
        de:'Ikonische Architektur und kulturelles Herz Australiens.',
        fr:'Architecture iconique et cœur culturel de l’Australie.',
        en:'Iconic architecture and cultural heart of Australia.'
      }
    },
    {
      key: 'burjkhalifa',
      location: 'Dubai, UAE',
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=2200&q=80',
      name: { de:'Burj Khalifa', fr:'Burj Khalifa', en:'Burj Khalifa' },
      desc: {
        de:'Das höchste Gebäude der Welt – Symbol menschlicher Ambition.',
        fr:'Le plus haut bâtiment du monde — symbole d’ambition humaine.',
        en:'The tallest building in the world — a symbol of human ambition.'
      }
    },
    {
      key: 'mountfuji',
      location: 'Honshu, Japan',
      image: 'https://images.unsplash.com/photo-1505067216369-2d1c6fd33b3c?auto=format&fit=crop&w=2200&q=80',
      name: { de:'Berg Fuji', fr:'Mont Fuji', en:'Mount Fuji' },
      desc: {
        de:'Ein spirituelles Symbol Japans und Inspirationsquelle seit Jahrhunderten.',
        fr:'Symbole spirituel du Japon et source d’inspiration.',
        en:'A spiritual symbol of Japan and source of inspiration.'
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
