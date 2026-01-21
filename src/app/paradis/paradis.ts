import { Component, AfterViewInit } from '@angular/core';
import {NgForOf, NgClass, NgIf} from '@angular/common';
import { LanguageService, Lang } from '../services/language.services';

type ParadisePlace = {
  key: string;
  land: Record<Lang, string>;
  stadt: Record<Lang, string>;
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
      land: { de: 'Französisch-Polynesien', fr: 'Polynésie Française', en: 'French Polynesia' },
      stadt: { de: 'Bora Bora', fr: 'Bora Bora', en: 'Bora Bora' },
      image: 'https://images.unsplash.com/photo-1544551763-7707d57cb5f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2670&q=80',
      name: { de: 'Bora Bora', fr: 'Bora Bora', en: 'Bora Bora' },
      desc: {
        de: 'Das ultimative Postkartenmotiv. Eine türkisfarbene Lagune, umgeben von einem sanften Korallenriff und überdacht von einem erodierten Vulkan.',
        fr: 'La carte postale ultime. Un lagon turquoise, ceinturé par un récif corallien et surmonté d’un volcan érodé.',
        en: 'The ultimate postcard picture. A turquoise lagoon surrounded by a coral reef and topped by an eroded volcano.'
      }
    },
    {
      key: 'maldives',
      land: { de: 'Malediven', fr: 'Maldives', en: 'Maldives' },
      stadt: { de: 'Atoll Nord Malé', fr: 'Atoll de Malé Nord', en: 'North Malé Atoll' },
      image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2670&q=80',
      name: { de: 'Malediven', fr: 'Maldives', en: 'Maldives' },
      desc: {
        de: 'Ein Archipel aus Staub und Traum. Tausende Inseln mit puderweißem Sand, die wie Perlen auf einem Smaragdmeer schweben.',
        fr: 'Un archipel de poussière et de rêve. Des milliers d’îles au sable immaculé, flottant comme des perles sur une mer d’émeraude.',
        en: 'An archipelago of dust and dream. Thousands of islands with powder-white sand, floating like pearls on an emerald sea.'
      }
    },
    {
      key: 'santorini',
      land: { de: 'Griechenland', fr: 'Grèce', en: 'Greece' },
      stadt: { de: 'Santorini', fr: 'Santorin', en: 'Santorini' },
      image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=2670&q=80',
      name: { de: 'Santorini', fr: 'Santorin', en: 'Santorini' },
      desc: {
        de: 'Eine der dramatischten Kalderen der Welt. Weiße Zykladenhäuser klammern sich an schwarze Klippen über dem tiefblauen Ägäischen Meer.',
        fr: "L'une des caldeiras les plus spectaculaires au monde. Des maisons cycladiques blanches accrochées à des falaises noires surplombant la mer Égée bleu profond.",
        en: 'One of the world’s most dramatic calderas. White Cycladic houses clinging to black cliffs above the deep blue Aegean Sea.'
      }
    },
    {
      key: 'fjord-norway',
      land: { de: 'Norwegen', fr: 'Norvège', en: 'Norway' },
      stadt: { de: 'Sognefjord', fr: 'Sognefjord', en: 'Sognefjord' },
      image: 'https://images.unsplash.com/photo-1522156373667-4c7234bbd804?ixlib=rb-4.0.3&auto=format&fit=crop&w=2670&q=80',
      name: { de: 'Norwegische Fjorde', fr: 'Fjords Norvégiens', en: 'Norwegian Fjords' },
      desc: {
        de: 'Ein eiszeitliches Wunderwerk. Majestätische, von Wasserfällen durchzogene Fjorde, die sich zwischen schroffen Bergen tief ins Land schneiden.',
        fr: "Une œuvre d'art glaciaire. Des fjords majestueux striés de cascades, entaillant profondément la terre entre des montagnes escarpées.",
        en: 'A glacial masterpiece. Majestic fjords streaked with waterfalls, carving deep into the land between rugged mountains.'
      }
    },
    {
      key: 'cappadocia',
      land: { de: 'Türkei', fr: 'Turquie', en: 'Turkey' },
      stadt: { de: 'Göreme', fr: 'Göreme', en: 'Göreme' },
      image: 'https://images.unsplash.com/photo-1499602211854-122b55ef8f5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2670&q=80',
      name: { de: 'Kappadokien', fr: 'Cappadoce', en: 'Cappadocia' },
      desc: {
        de: 'Eine surreale Mondlandschaft aus Tuffstein. Berühmt für seine "Feenkamine", unterirdischen Städte und das atemberaubende Spektakel hunderter Heißluftballons bei Sonnenaufgang.',
        fr: 'Un paysage lunaire surréaliste en tuf. Célèbre pour ses « cheminées de fées », ses villes souterraines et le spectacle époustouflant de centaines de montgolfières au lever du soleil.',
        en: 'A surreal lunar landscape of tuff rock. Famous for its "fairy chimneys," underground cities, and the breathtaking spectacle of hundreds of hot air balloons at sunrise.'
      }
    },
    {
      key: 'banff-lake-louise',
      land: { de: 'Kanada', fr: 'Canada', en: 'Canada' },
      stadt: { de: 'Banff Nationalpark', fr: 'Parc national de Banff', en: 'Banff National Park' },
      image: 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=2670&q=80',
      name: { de: 'Lake Louise, Banff', fr: 'Lac Louise, Banff', en: 'Lake Louise, Banff' },
      desc: {
        de: 'Ein Juwel der kanadischen Rocky Mountains. Ein Gletschersee von unglaublichem Türkis, gesäumt von schneebedeckten Gipfeln und gespiegelten in seiner stillen Oberfläche.',
        fr: "Un joyau des Rocheuses canadiennes. Un lac glaciaire d'un turquoise incroyable, encadré par des pics enneigés et reflété dans sa surface immobile.",
        en: 'A jewel of the Canadian Rockies. A glacial lake of unbelievable turquoise, framed by snow-capped peaks and mirrored in its still surface.'
      }
    },
    {
      key: 'iceland-jokulsarlon',
      land: { de: 'Island', fr: 'Islande', en: 'Iceland' },
      stadt: { de: 'Jökulsárlón', fr: 'Jökulsárlón', en: 'Jökulsárlón' },
      image: 'https://images.unsplash.com/photo-1504893524553-b855bceeafe9?ixlib=rb-4.0.3&auto=format&fit=crop&w-2670&q=80',
      name: { de: 'Jökulsárlón', fr: 'Jökulsárlón', en: 'Jökulsárlón' },
      desc: {
        de: 'Die Geburt von Eisbergen. Eine atemberaubende Gletscherlagune, in der sich eisblaue Eisberge vom Gletscher lösen und langsam dem Meer entgegentreiben.',
        fr: 'La naissance des icebergs. Une lagune glaciaire à couper le souffle où des icebergs bleu glace se détachent du glacier et dérivent lentement vers la mer.',
        en: 'The birth of icebergs. A breathtaking glacial lagoon where ice-blue icebergs calve from a glacier and drift slowly toward the sea.'
      }
    },
    {
      key: 'machu-picchu',
      land: { de: 'Peru', fr: 'Pérou', en: 'Peru' },
      stadt: { de: 'Cusco Region', fr: 'Région de Cusco', en: 'Cusco Region' },
      image: 'https://images.unsplash.com/photo-1587595431973-160d0d94add1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2670&q=80',
      name: { de: 'Machu Picchu', fr: 'Machu Picchu', en: 'Machu Picchu' },
      desc: {
        de: 'Die Verlorene Stadt der Inka. Ein architektonisches Wunder, das auf einem felsigen Bergrücken thront und von Nebelwäldern und schroffen Andengipfeln umgeben ist.',
        fr: "La Cité perdue des Incas. Une merveille d'architecture perchée sur une arête rocheuse, entourée de forêts de nuages et des sommets escarpés des Andes.",
        en: 'The Lost City of the Incas. An architectural wonder perched on a rocky ridge, surrounded by cloud forests and the jagged peaks of the Andes.'
      }
    },
    {
      key: 'palawan',
      land: { de: 'Philippinen', fr: 'Philippines', en: 'Philippines' },
      stadt: { de: 'El Nido, Palawan', fr: 'El Nido, Palawan', en: 'El Nido, Palawan' },
      image: 'https://images.unsplash.com/photo-1526951521990-620dc14c214b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2670&q=80',
      name: { de: 'El Nido, Palawan', fr: 'El Nido, Palawan', en: 'El Nido, Palawan' },
      desc: {
        de: 'Das letzte ökologische Grenzgebiet der Philippinen. Kalkstein-Karsts, die wie Drachenzähne aus smaragdgrünem Wasser ragen, versteckte Lagunen und unberührte Strände.',
        fr: "La dernière frontière écologique des Philippines. Des karsts de calcaire jaillissant des eaux émeraude comme des dents de dragon, des lagons cachés et des plages immaculées.",
        en: 'The last ecological frontier of the Philippines. Limestone karsts jutting from emerald waters like dragon’s teeth, hidden lagoons, and pristine beaches.'
      }
    },
    {
      key: 'swiss-alps-grindelwald',
      land: { de: 'Schweiz', fr: 'Suisse', en: 'Switzerland' },
      stadt: { de: 'Grindelwald', fr: 'Grindelwald', en: 'Grindelwald' },
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2670&q=80',
      name: { de: 'Grindelwald, Schweizer Alpen', fr: 'Grindelwald, Alpes Suisses', en: 'Grindelwald, Swiss Alps' },
      desc: {
        de: 'Das "Dorf der Gletscher". Ein idyllisches Tal, das von einigen der ikonischsten Gipfel der Alpen dominiert wird, ein Paradies für Naturliebhaber zu jeder Jahreszeit.',
        fr: 'Le « Village des glaciers ». Une vallée idyllique dominée par certains des sommets les plus iconiques des Alpes, un paradis pour les amoureux de la nature en toute saison.',
        en: 'The "Glacier Village." An idyllic valley dominated by some of the Alps’ most iconic peaks, a paradise for nature lovers in every season.'
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
