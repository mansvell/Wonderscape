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
        de: 'Das einzige noch erhaltene Weltwunder der Antike — monumental, präzise und zeitlos.',
        fr: 'La seule merveille antique encore debout — monumentale, précise et intemporelle.',
        en: 'The only ancient wonder still standing — monumental, precise, and timeless.'
      }
    },
    {
      key: 'babylon',
      land: 'Iraq',
      stadt: 'Babylon (near Hillah)',
      image: 'https://i.pinimg.com/originals/c6/e1/b7/c6e1b7f42d694e1e86eb41a4f17082b0.jpg',
      name: { de: 'Hängende Gärten von Babylon', fr: 'Jardins suspendus de Babylone', en: 'Hanging Gardens of Babylon' },
      desc: {
        de: 'Legendär: Terrassen aus Grün in der Wüste — ein Mythos zwischen Technik und Poesie.',
        fr: 'Légendaires : terrasses de verdure dans le désert — un mythe entre technique et poésie.',
        en: 'Legendary terraces of green in the desert — a myth between engineering and poetry.'
      }
    },
    {
      key: 'zeus',
      land: 'Greece',
      stadt: 'Olympia',
      image: 'https://as1.ftcdn.net/v2/jpg/08/97/81/62/1000_F_897816282_L3pOH1ImlMAgHB6Pe7HOkvNUq854DcMW.jpg',
      name: { de: 'Statue des Zeus in Olympia', fr: 'Statue de Zeus à Olympie', en: 'Statue of Zeus at Olympia' },
      desc: {
        de: 'Ein Symbol göttlicher Macht — kunstvoll, ehrfurchtgebietend, ikonisch.',
        fr: 'Un symbole de puissance divine — raffiné, impressionnant, iconique.',
        en: 'A symbol of divine power — refined, awe-inspiring, iconic.'
      }
    },
    {
      key: 'artemis',
      land: ' Turkey',
      stadt: 'Ephesus (Selçuk)',
      image: 'https://th.bing.com/th/id/R.10e7a4f7dd22c78ec3e0fee1256df2da?rik=xPflqf7HPd%2fbFw&riu=http%3a%2f%2ffoundtheworld.com%2fwp-content%2fuploads%2f2014%2f04%2fTemple-of-Artemis-6.jpg&ehk=aApt9Rljs3e%2f%2bDIwPSuiw7CEiLJ8IH%2bfzOl8luv9an0%3d&risl=&pid=ImgRaw&r=0',
      name: { de: 'Tempel der Artemis', fr: 'Temple d’Artémis', en: 'Temple of Artemis' },
      desc: {
        de: 'Prunkvolle Säulen und Kult — ein Meisterwerk antiker Architektur und Glaubenswelt.',
        fr: 'Colonnes somptueuses et culte — un chef-d’œuvre d’architecture et de foi.',
        en: 'Grand columns and cult — a masterpiece of ancient architecture and devotion.'
      }
    },
    {
      key: 'halicarnassus',
      land: 'Turkey',
      stadt: 'Halicarnassus (Bodrum)',
      image: 'https://insights.gostudent.org/hubfs/Insights_GoStudent_Blog_Images/Mausoleum-of-Halicarnassus-1.jpg',
      name: { de: 'Mausoleum von Halikarnassos', fr: 'Mausolée d’Halicarnasse', en: 'Mausoleum at Halicarnassus' },
      desc: {
        de: 'Skulptur trifft Monument — ein Grabmal, das dem Begriff “Mausoleum” seinen Namen gab.',
        fr: 'Sculpture et monument — un tombeau qui a donné son nom au mot “mausolée”.',
        en: 'Sculpture meets monument — the tomb that gave the word “mausoleum” its name.'
      }
    },
    {
      key: 'colossus',
      land: 'Greece',
      stadt: 'Rhodes',
      image: 'https://www.carpemundi.com.br/wp-content/uploads/2021/07/colosso-rodes.jpg',
      name: { de: 'Kolosse von Rhodos', fr: 'Colosse de Rhodes', en: 'Colossus of Rhodes' },
      desc: {
        de: 'Gigantische Bronze-Ikone — ein Statement von Macht, Stolz und Handwerkskunst.',
        fr: 'Icône géante de bronze — une déclaration de puissance, fierté et savoir-faire.',
        en: 'A gigantic bronze icon — a statement of power, pride, and craft.'
      }
    },
    {
      key: 'alexandria',
      land: 'Egypt',
      stadt: 'Alexandria',
      image: 'https://www.ingenieur.de/wp-content/uploads/2024/07/leuchtturm-alexandria-scaled.jpg',
      name: { de: 'Leuchtturm von Alexandria', fr: 'Phare d’Alexandrie', en: 'Lighthouse of Alexandria' },
      desc: {
        de: 'Licht über dem Meer — Orientierung, Handel und Mythos in einem Bauwerk.',
        fr: 'Lumière sur la mer — repère, commerce et mythe dans un seul monument.',
        en: 'Light over the sea — navigation, trade, and myth in one monument.'
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
