import { Component, AfterViewInit } from '@angular/core';
import {NgForOf, NgClass, NgIf} from '@angular/common';
import { LanguageService, Lang } from '../services/language.services';

type Hotel = {
  key: string;
  location: string;
  image: string;
  name: Record<Lang, string>;
  desc: Record<Lang, string>;
};

@Component({
  selector: 'app-iconic-hotels',
  standalone: true,
  imports: [NgForOf, NgClass, NgIf],
  templateUrl: './hotels.html',
  styleUrl: './hotels.css'
})
export class HotelsClass implements AfterViewInit {
  constructor(public lang: LanguageService) {}

  hotels: Hotel[] = [
    {
      key: 'burj-al-arab',
      location: 'Dubai, UAE',
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=2200&q=80',
      name: { de: 'Burj Al Arab', fr: 'Burj Al Arab', en: 'Burj Al Arab' },
      desc: {
        de: 'Eine Silhouette wie ein Segel — Luxus-Ikone am Meer und Symbol Dubais.',
        fr: 'Une silhouette en voile — icône du luxe au bord de la mer, symbole de Dubaï.',
        en: 'A sail-like silhouette — a luxury icon by the sea and a symbol of Dubai.'
      }
    },
    {
      key: 'marina-bay-sands',
      location: 'Singapore',
      image: 'https://images.unsplash.com/photo-1508964942454-1a56651d54ac?auto=format&fit=crop&w=2200&q=80',
      name: { de: 'Marina Bay Sands', fr: 'Marina Bay Sands', en: 'Marina Bay Sands' },
      desc: {
        de: 'Skyline-Legende mit Infinity-Pool — futuristisch, spektakulär, unverwechselbar.',
        fr: 'Légende du skyline avec piscine à débordement — futuriste et spectaculaire.',
        en: 'Skyline legend with an infinity pool — futuristic, spectacular, unmistakable.'
      }
    },
    {
      key: 'ritz-paris',
      location: 'Paris, France',
      image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=2200&q=80',
      name: { de: 'Ritz Paris', fr: 'Ritz Paris', en: 'Ritz Paris' },
      desc: {
        de: 'Zeitlose Eleganz — ein Name, der für Luxus, Geschichte und Stil steht.',
        fr: 'Élégance intemporelle — un nom synonyme de luxe, d’histoire et de style.',
        en: 'Timeless elegance — a name synonymous with luxury, history, and style.'
      }
    },
    {
      key: 'plaza-nyc',
      location: 'New York, USA',
      image: 'https://images.unsplash.com/photo-1485738422979-f5c462d49f74?auto=format&fit=crop&w=2200&q=80',
      name: { de: 'The Plaza', fr: 'The Plaza', en: 'The Plaza' },
      desc: {
        de: 'Klassiker an der Fifth Avenue — Glamour, Kultur und Filmgeschichte.',
        fr: 'Classique sur la Fifth Avenue — glamour, culture et légende du cinéma.',
        en: 'A Fifth Avenue classic — glamour, culture, and movie history.'
      }
    },
    {
      key: 'raffles',
      location: 'Singapore',
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=2200&q=80',
      name: { de: 'Raffles Hotel', fr: 'Raffles Hotel', en: 'Raffles Hotel' },
      desc: {
        de: 'Kolonialer Charme und Legenden — ein Ort mit Seele und Tradition.',
        fr: 'Charme colonial et légendes — un lieu chargé d’âme et de tradition.',
        en: 'Colonial charm and legends — a place with soul and tradition.'
      }
    },
    {
      key: 'the-sahara-desert-lodge',
      location: 'Sahara / Desert Luxury',
      image: 'https://images.unsplash.com/photo-1501117716987-c8e1ecb210ff?auto=format&fit=crop&w=2200&q=80',
      name: { de: 'Desert Luxury Lodge', fr: 'Lodge de luxe du désert', en: 'Desert Luxury Lodge' },
      desc: {
        de: 'Minimalismus, Stille, Himmel — ikonischer Luxus mitten in der Wüste.',
        fr: 'Minimalisme, silence, ciel — luxe iconique au cœur du désert.',
        en: 'Minimalism, silence, sky — iconic luxury in the heart of the desert.'
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
      { threshold: 0.16, rootMargin: '0px 0px -10% 0px' }
    );
    items.forEach(el => io.observe(el));
  }
}

