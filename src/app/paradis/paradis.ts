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
      key: 'maldives',
      land: { de: 'Malediven', fr: 'Maldives', en: 'Maldives' },
      stadt: { de: 'Atoll Nord Malé', fr: 'Atoll de Malé Nord', en: 'North Malé Atoll' },
      image: 'https://lilybeachmaldives.com/wp-content/uploads/2017/09/aerial-2.jpg',
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
      image: 'https://a.cdn-hotels.com/gdcs/production18/d1838/041ae6b1-0a88-4c22-a648-53a22dd4a006.jpg',
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
      image: 'https://assets.simpleviewcms.com/simpleview/image/upload/q_75/v1/clients/norway/naeroyfjorden_fjord_norway_2_1_001b9127-14ad-4b3d-99b6-29d8b3aae412.jpg',
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
      image: 'https://journeysremastered.com/wp-content/uploads/2017/11/Cappadocia.png',
      name: { de: 'Kappadokien', fr: 'Cappadoce', en: 'Cappadocia' },
      desc: {
        de: 'Eine surreale Mondlandschaft aus Tuffstein. Berühmt für seine "Feenkamine", unterirdischen Städte und das atemberaubende Spektakel hunderter Heißluftballons bei Sonnenaufgang.',
        fr: 'Un paysage lunaire surréaliste en tuf. Célèbre pour ses « cheminées de fées », ses villes souterraines et le spectacle époustouflant de centaines de montgolfières au lever du soleil.',
        en: 'A surreal lunar landscape of tuff rock. Famous for its "fairy chimneys," underground cities, and the breathtaking spectacle of hundreds of hot air balloons at sunrise.'
      }
    },
    {
      key: 'niagara-falls',
      land: { de: 'Kanada / USA', fr: 'Canada / États-Unis', en: 'Canada / USA' },
      stadt: { de: 'Niagara Falls', fr: 'Chutes du Niagara', en: 'Niagara Falls' },
      image: 'https://th.bing.com/th/id/R.965153fddbcc64542e3f9c7ab1f89bfe?rik=lzgZVhNj2nrxrg&riu=http%3a%2f%2fupload.wikimedia.org%2fwikipedia%2fcommons%2f0%2f05%2fNiagara-Falls-Horseshoe-Falls-view.jpg&ehk=rthQyAY5rPngKplvkaiDakZzgt%2bK9%2bfxRt%2f2%2bGMJfa0%3d&risl=&pid=ImgRaw&r=0',
      name: { de: 'Niagarafälle', fr: 'Chutes du Niagara', en: 'Niagara Falls' },
      desc: {
        de: 'Die tosende Kraft der Natur. Eine gewaltige Wassermenge stürzt donnernd in die Tiefe und erzeugt einen atemberaubenden Vorhang aus Gischt und Regenbögen an der Grenze zwischen zwei Nationen.',
        fr: 'La puissance tonitruante de la nature. Un débit d’eau colossal se précipite avec fracas, créant un rideau vertigineux d’embruns et d’arcs-en-ciel à la frontière de deux nations.',
        en: 'The thundering power of nature. A colossal volume of water plummets with a roar, creating a breathtaking curtain of mist and rainbows on the border between two nations.'
      }
    },
    {
      key: 'banff-lake-louise',
      land: { de: 'Kanada', fr: 'Canada', en: 'Canada' },
      stadt: { de: 'Banff Nationalpark', fr: 'Parc national de Banff', en: 'Banff National Park' },
      image: 'https://banfflakelouise.bynder.com/m/3d04f19979f432ec/2000x1080_jpg-2022_MoraineLake_TravelAlberta_RothandRamberg%20(3).jpg',
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
      image: 'https://guidetoiceland.is/image/179548/x/0/jokulsarlon-glacier-lagoon-see-the-crown-jewel-of-iceland-s-nature-1.jpg',
      name: { de: 'Jökulsárlón', fr: 'Jökulsárlón', en: 'Jökulsárlón' },
      desc: {
        de: 'Die Geburt von Eisbergen. Eine atemberaubende Gletscherlagune, in der sich eisblaue Eisberge vom Gletscher lösen und langsam dem Meer entgegentreiben.',
        fr: 'La naissance des icebergs. Une lagune glaciaire à couper le souffle où des icebergs bleu glace se détachent du glacier et dérivent lentement vers la mer.',
        en: 'The birth of icebergs. A breathtaking glacial lagoon where ice-blue icebergs calve from a glacier and drift slowly toward the sea.'
      }
    },
    {
      key: 'plitvice-lakes',
      land: { de: 'Kroatien', fr: 'Croatie', en: 'Croatia' },
      stadt: { de: 'Nationalpark Plitvicer Seen', fr: 'Parc national des lacs de Plitvice', en: 'Plitvice Lakes National Park' },
      image: 'https://cdn.audleytravel.com/-/-/79/15975667-plitvice-lakes-national-park-croatia.jpg',
      name: { de: 'Plitvicer Seen', fr: 'Lacs de Plitvice', en: 'Plitvice Lakes' },
      desc: {
        de: 'Ein Märchen aus Wasser und Wald. Sechzehn smaragdgrüne Seen, die durch ein Labyrinth von Wasserfällen und natürlichen Travertin-Barrieren auf magische Weise miteinander verbunden sind.',
        fr: 'Un conte de fées d’eau et de forêt. Seize lacs d’émeraude reliés comme par magie par un dédale de cascades et de barrières naturelles de travertin.',
        en: 'A fairy tale of water and forest. Sixteen emerald lakes magically interconnected by a labyrinth of waterfalls and natural travertine barriers.'
      }
    },
    {
      key: 'palawan',
      land: { de: 'Philippinen', fr: 'Philippines', en: 'Philippines' },
      stadt: { de: 'El Nido, Palawan', fr: 'El Nido, Palawan', en: 'El Nido, Palawan' },
      image: 'https://th.bing.com/th/id/R.274e521cd6598c259226f4fb7532eb69?rik=ZDnYMZ3PD61WoA&riu=http%3a%2f%2finspirationseek.com%2fwp-content%2fuploads%2f2014%2f11%2fPalawan-Island-Philippines-Photography.jpg&ehk=n0k1ZIoMdot2hwMw1QSzRKPKjwm5dKXJ6JPp%2bC4ATeY%3d&risl=&pid=ImgRaw&r=0',
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
      image: 'https://s1.it.atcdn.net/wp-content/uploads/2015/11/shutterstock_279572969.jpg',
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
