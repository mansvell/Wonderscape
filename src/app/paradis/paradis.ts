import { Component, AfterViewInit } from '@angular/core';
import {NgForOf, NgClass, NgIf} from '@angular/common';
import { LanguageService, Lang } from '../services/language.services';

type ParadisePlace = {
  key: string;
  location: string;
  image: string;
  name: Record<Lang, string>;
  desc: Record<Lang, string>;
};

@Component({
  selector: 'app-paradise-places',
  standalone: true,
  imports: [NgForOf, NgClass, NgIf],
  templateUrl: './paradis.html',
  styleUrl: './paradis.css'
})

export class ParadisClass implements AfterViewInit {

  constructor(public lang: LanguageService) {}

  places: ParadisePlace[] = [
    {
      key: 'bora-bora',
      location: 'French Polynesia',
      image: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=2200&q=80',
      name: { de: 'Bora Bora', fr: 'Bora Bora', en: 'Bora Bora' },
      desc: {
        de: 'Lagunen in Türkis, Bungalows über dem Wasser — pure Postkarten-Perfektion.',
        fr: 'Lagons turquoise, bungalows sur pilotis — une carte postale vivante.',
        en: 'Turquoise lagoons, overwater bungalows — living postcard perfection.'
      }
    },
    {
      key: 'maldives',
      location: 'Maldives',
      image: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=2200&q=80',
      name: { de: 'Malediven', fr: 'Maldives', en: 'Maldives' },
      desc: {
        de: 'Kristallklares Wasser, weiße Sandbänke, stille Sonnenuntergänge.',
        fr: 'Eau cristalline, bancs de sable blanc, couchers de soleil silencieux.',
        en: 'Crystal water, white sandbanks, quiet sunsets.'
      }
    },
    {
      key: 'santorini',
      location: 'Santorini, Greece',
      image: 'https://images.unsplash.com/photo-1504512485720-7d83a16ee930?auto=format&fit=crop&w=2200&q=80',
      name: { de: 'Santorini', fr: 'Santorin', en: 'Santorini' },
      desc: {
        de: 'Weiße Häuser, blaues Meer, goldene Abende — Ägäis-Romantik pur.',
        fr: 'Maisons blanches, mer bleue, soirs dorés — romance égéenne.',
        en: 'White houses, blue sea, golden evenings — pure Aegean romance.'
      }
    },
    {
      key: 'seychelles',
      location: 'Seychelles',
      image: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=2200&q=80',
      name: { de: 'Seychellen', fr: 'Seychelles', en: 'Seychelles' },
      desc: {
        de: 'Granitfelsen, Palmen, Lagunen — ein Naturparadies wie gemalt.',
        fr: 'Rochers de granit, palmiers, lagons — paradis naturel.',
        en: 'Granite boulders, palms, lagoons — a painted nature paradise.'
      }
    },
    {
      key: 'capri',
      location: 'Capri, Italy',
      image: 'https://images.unsplash.com/photo-1526481280695-3c687fd643ed?auto=format&fit=crop&w=2200&q=80',
      name: { de: 'Capri', fr: 'Capri', en: 'Capri' },
      desc: {
        de: 'Klippen über azurblauem Meer — mediterraner Luxus und Ruhe.',
        fr: 'Falaises sur mer azur — luxe méditerranéen et calme.',
        en: 'Cliffs over azure sea — Mediterranean luxury and calm.'
      }
    },
    {
      key: 'banff',
      location: 'Banff, Canada',
      image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=2200&q=80',
      name: { de: 'Banff', fr: 'Banff', en: 'Banff' },
      desc: {
        de: 'Türkisfarbene Seen, Berge, Wälder — Natur in ihrer schönsten Form.',
        fr: 'Lacs turquoise, montagnes, forêts — nature à l’état pur.',
        en: 'Turquoise lakes, mountains, forests — nature at its finest.'
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
