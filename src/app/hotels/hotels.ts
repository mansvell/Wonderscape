import { Component, AfterViewInit } from '@angular/core';
import {NgForOf, NgClass, NgIf} from '@angular/common';
import { LanguageService, Lang } from '../services/language.services';

type Hotel = {
  key: string;
  land:Record<Lang, string>;
  stadt:Record<Lang, string>;
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
      key: 'aman-tokyo',
      land: { de: 'Japan', fr: 'Japon', en: 'Japan' },
      stadt: { de: 'Tokio', fr: 'Tokyo', en: 'Tokyo' },
      image: 'https://res-1.cloudinary.com/enchanting/images/w_1600,h_700,c_fill/et-web/2017/07/Enchanting-Travels-Japan-Tours-Tokyo-Hotels-Aman-Tokyo-Exterior-1600/hotel-aman-tokyo-japan.jpg',
      name: { de: 'Aman Tokyo', fr: 'Aman Tokyo', en: 'Aman Tokyo' },
      desc: {
        de: 'Eine Zen-Oase in den Wolken. Minimalistisches Design, atemberaubende Stadtpanoramen und ein ikonischer Swimmingpool schaffen eine Stille mitten im urbanen Pulsschlag.',
        fr: 'Une oasis zen dans les nuages. Un design minimaliste, des vues panoramiques époustouflantes et une piscine iconique créent un silence au cœur du pouls urbain.',
        en: 'A zen oasis in the clouds. Minimalist design, breathtaking city panoramas, and an iconic swimming pool create a silence in the heart of the urban pulse.'
      }
    },
    {
      key: 'burj-al-arab',
      land: { de: 'Vereinigte Arabische Emirate', fr: 'Émirats Arabes Unis', en: 'United Arab Emirates' },
      stadt: { de: 'Dubai', fr: 'Dubaï', en: 'Dubai' },
      image: 'https://luxuriate.life/wp-content/uploads/2021/03/Burj-Al-Arab-Jumeirah-Aerial-at-Sunrise-1-1024x575.jpg',
      name: { de: 'Burj Al Arab Jumeirah', fr: 'Burj Al Arab Jumeirah', en: 'Burj Al Arab Jumeirah' },
      desc: {
        de: 'Die ultimative Ikone des Luxus. Diese segelförmige Silhouette ist ein Symbol für kühnen Opulenz, mit Suiten über zwei Etagen, einer Flotte von Rolls-Royce und einem höchst exklusiven Ambiente.',
        fr: "L'icône ultime du luxe. Cette silhouette en forme de voile est un symbole d'audace et d'opulence, avec des suites sur deux niveaux, une flotte de Rolls-Royce et une ambiance résolument exclusive.",
        en: 'The ultimate icon of luxury. This sail-shaped silhouette is a symbol of bold opulence, with two-story suites, a fleet of Rolls-Royces, and a fiercely exclusive ambiance.'
      }
    },
    {
      key: 'cheval-blanc-paris',
      land: { de: 'Frankreich', fr: 'France', en: 'France' },
      stadt: { de: 'Paris', fr: 'Paris', en: 'Paris' },
      image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/3b/99/e3/la-samaritaine-building.jpg?w=1200&h=-1&s=1',
      name: { de: 'Cheval Blanc Paris', fr: 'Cheval Blanc Paris', en: 'Cheval Blanc Paris' },
      desc: {
        de: 'Moderne Eleganz im Herzen von Paris. In einem renovierten historischen Gebäude vereint dieses Haus zeitgenössische Kunst, kulinarische Höchstleistungen und einen atemberaubenden Pool mit Blick auf die Seine.',
        fr: "Élégance contemporaine au cœur de Paris. Dans un monument historique réinventé, cette maison allie art contemporain, excellence culinaire et une piscine spectaculaire face à la Seine.",
        en: 'Contemporary elegance in the heart of Paris. Housed in a reinvented historic landmark, this mansion blends contemporary art, culinary excellence, and a stunning pool overlooking the Seine.'
      }
    },
    {
      key: 'four-seasons-bora-bora',
      land: { de: 'Französisch-Polynesien', fr: 'Polynésie Française', en: 'French Polynesia' },
      stadt: { de: 'Bora Bora', fr: 'Bora Bora', en: 'Bora Bora' },
      image: 'https://th.bing.com/th/id/R.53cfd4042f752ebe06a9d86e523b0bde?rik=NMUheu4PIpQ4fA&riu=http%3a%2f%2fcdn.architecturendesign.net%2fwp-content%2fuploads%2f2014%2f07%2fFour-Seasons-Resort-Bora-Bora-02.jpg&ehk=5EBvS%2fOJHwhKa6drwtfikim%2bNwn9cpqj8xOTrg2CU2g%3d&risl=&pid=ImgRaw&r=0',
      name: { de: 'Four Seasons Resort Bora Bora', fr: 'Four Seasons Resort Bora Bora', en: 'Four Seasons Resort Bora Bora' },
      desc: {
        de: 'Das Paradies auf Stelzen. Legendäre Overwater-Bungalows mit Glasböden, türkisfarbener Lagune und einem Service, der jedes Bedürfnis vorausahnt. Die Definition des tropischen Traums.',
        fr: 'Le paradis sur pilotis. Des bungalows sur l’eau légendaires avec plancher de verre, un lagon turquoise et un service aux petits soins. La définition du rêve tropical.',
        en: 'Paradise on stilts. Legendary overwater bungalows with glass-floor panels, a turquoise lagoon, and service that anticipates every need. The definition of the tropical dream.'
      }
    },
    {
      key: 'crillon-paris',
      land: { de: 'Frankreich', fr: 'France', en: 'France' },
      stadt: { de: 'Paris', fr: 'Paris', en: 'Paris' },
      image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2670&q=80',
      name: { de: 'Hôtel de Crillon', fr: 'Hôtel de Crillon', en: 'Hôtel de Crillon' },
      desc: {
        de: 'Die Krönung der französischen Kunst des Gastgebens. Ein palastartiges Herrenhaus aus dem 18. Jahrhundert, das mit modernem Design neu interpretiert wurde. Luxus, Geschichte und perfekter Geschmack.',
        fr: "Le summum de l'art de vivre à la française. Un palais du XVIIIe siècle réinterprété avec un design moderne. Luxe, histoire et goût parfait.",
        en: 'The pinnacle of French art de vivre. An 18th-century palace mansion reinterpreted with modern design. Luxury, history, and perfect taste.'
      }
    },
    {
      key: 'mandarin-oriental-bangkok',
      land: { de: 'Thailand', fr: 'Thaïlande', en: 'Thailand' },
      stadt: { de: 'Bangkok', fr: 'Bangkok', en: 'Bangkok' },
      image: 'https://runbkk.net/wp-content/uploads/2019/03/mandarin-oriental-bangkok-photo85.jpg',
      name: { de: 'Mandarin Oriental, Bangkok', fr: 'Mandarin Oriental, Bangkok', en: 'Mandarin Oriental, Bangkok' },
      desc: {
        de: 'Die Wiege des legendären asiatischen Luxus. Am Ufer des Chao Phraya gelegen, verbindet dieses Kult-Hotel seit über 140 Jahren unübertroffenen Service, historischen Charme und zeitlose Eleganz.',
        fr: "Le berceau du luxe asiatique légendaire. Sur les rives du Chao Phraya, cet hôtel culte allie depuis plus de 140 ans un service inégalé, un charme historique et une élégance intemporelle.",
        en: 'The birthplace of legendary Asian luxury. On the banks of the Chao Phraya, this iconic hotel has blended unparalleled service, historic charm, and timeless elegance for over 140 years.'
      }
    },
    {
      key: 'the-ritz-london',
      land: { de: 'Vereinigtes Königreich', fr: 'Royaume-Uni', en: 'United Kingdom' },
      stadt: { de: 'London', fr: 'Londres', en: 'London' },
      image: 'https://cdn.kiwicollection.com/media/property/PR003267/xl/003267-06-exterior-view-evening-street.jpg',
      name: { de: 'The Ritz London', fr: 'The Ritz London', en: 'The Ritz London' },
      desc: {
        de: 'Das Maß aller Dinge für britischen Stil. Mit seinem berühmten Palm Court für den Afternoon Tea und dem opulenten, aber gemütlichen Interieur ist es ein Symbol für unverwechselbare Eleganz und Tradition.',
        fr: "La référence absolue du style britannique. Avec son célèbre Palm Court pour le thé de l'après-midi et ses intérieurs somptueux mais chaleureux, c'est un symbole d'élégance et de tradition.",
        en: 'The gold standard of British style. With its famous Palm Court for afternoon tea and its opulent yet cozy interiors, it is a symbol of unmistakable elegance and tradition.'
      }
    },
    {
      key: 'singita-lodges',
      land: { de: 'Südafrika', fr: 'Afrique du Sud', en: 'South Africa' },
      stadt: { de: 'Sabi Sand', fr: 'Sabi Sand', en: 'Sabi Sand' },
      image: 'https://th.bing.com/th/id/R.617ac8a0eb283fe5c53b9ef61b006025?rik=oFk%2ft%2fcIoreXNA&riu=http%3a%2f%2fcdn.luxatic.com%2fwp-content%2fuploads%2f2011%2f12%2fSingita-Boulders-Lodge-South-Africa-1.jpg&ehk=lVO5kbNihdHoSuObjEPiBme0XHN%2fr5IpwpceKhLAsvE%3d&risl=&pid=ImgRaw&r=0',
      name: { de: 'Singita Sabi Sand', fr: 'Singita Sabi Sand', en: 'Singita Sabi Sand' },
      desc: {
        de: 'Chic in der Wildnis. Mehr als ein Hotel: eine ultra-exklusive Lodge in einem privaten Wildreservat. Unvergleichliche Safari-Erlebnisse, atemberaubendes Design und ein tiefes Engagement für den Naturschutz.',
        fr: 'Chic sauvage. Plus qu’un hôtel : un lodge ultra-exclusif au cœur d’une réserve privée. Expérience safari inégalée, design époustouflant et engagement profond pour la conservation.',
        en: 'Chic in the wild. More than a hotel: an ultra-exclusive lodge in a private game reserve. Unparalleled safari experiences, breathtaking design, and a deep commitment to conservation.'
      }
    },
    {
      key: 'orient-express',
      land: { de: 'Europa', fr: 'Europe', en: 'Europe' },
      stadt: { de: 'Bord des Zuges', fr: 'À bord du train', en: 'Onboard the Train' },
      image: 'https://www.findingtheuniverse.com/wp-content/uploads/2017/01/Venice-Simplon-Orient-Express-50.jpg',
      name: { de: 'Venice Simplon-Orient-Express', fr: 'Venice Simplon-Orient-Express', en: 'Venice Simplon-Orient-Express' },
      desc: {
        de: 'Ein fahrender Palast. Reisen Sie in die glorreichen Tage des Zugverkehrs in restaurierten Art-Déco-Waggons. Intime Kabinen, Gourmetküche und eine unvergessliche Reise durch die Landschaften Europas.',
        fr: 'Un palace roulant. Revivez l’âge d’or du voyage en train dans des wagons Art Déco restaurés. Cabines intimes, cuisine gastronomique et un voyage inoubliable à travers l’Europe.',
        en: 'A rolling palace. Step back into the golden age of train travel in restored Art Deco carriages. Intimate cabins, gourmet cuisine, and an unforgettable journey through Europe’s landscapes.'
      }
    },
    {
      key: 'ubud-hanging-gardens',
      land: { de: 'Indonesien', fr: 'Indonésie', en: 'Indonesia' },
      stadt: { de: 'Ubud, Bali', fr: 'Ubud, Bali', en: 'Ubud, Bali' },
      image: 'https://www.piscicolor.com/images/blog/UbudHangingGardens/1090947.jpg',
      name: { de: 'Ubud Hanging Gardens', fr: 'Ubud Hanging Gardens', en: 'Ubud Hanging Gardens' },
      desc: {
        de: 'Architektonisches Meisterwerk im Dschungel. Berühmt für seinen atemberaubenden mehrstufigen Infinity-Pool, der sich über das grüne Tal erstreuft. Pure Stille und spirituelle Harmonie.',
        fr: "Chef-d'œuvre architectural dans la jungle. Célèbre pour sa piscine à débordement spectaculaire à plusieurs niveaux qui épouse la vallée verte. Silence absolu et harmonie spirituelle.",
        en: 'Architectural masterpiece in the jungle. Famous for its breathtaking multi-tiered infinity pool that drapes over the green valley. Pure serenity and spiritual harmony.'
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

