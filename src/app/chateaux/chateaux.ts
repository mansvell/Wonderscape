import {AfterViewInit, Component} from '@angular/core';
import {Lang, LanguageService} from '../services/language.services';
import {NgForOf, NgClass, NgIf} from '@angular/common';

type Castle = {
  key:string;
  land:Record<Lang, string>;
  stadt:Record<Lang, string>;
  image: string;
  name: Record<Lang, string>;
  desc: Record<Lang, string>;
};

@Component({
  selector: 'app-chateaux',
  imports:  [NgForOf, NgClass, NgIf],
  templateUrl: './chateaux.html',
  styleUrl: './chateaux.css',
  standalone: true
})
export class ChateauxClass implements AfterViewInit{

  constructor(public lang : LanguageService) {}

  chateaux: Castle[] = [
    {
      key: 'neuschwanstein',
      land: { de: 'Deutschland', fr: 'Allemagne', en: 'Germany' },
      stadt: { de: 'Schwangau, Bayern', fr: 'Schwangau, Bavière', en: 'Schwangau, Bavaria' },
      image: 'https://images5.alphacoders.com/129/thumb-1920-1298593.jpg',
      name: { de: 'Schloss Neuschwanstein', fr: 'Château de Neuschwanstein', en: 'Neuschwanstein Castle' },
      desc: {
        de: 'Das Märchenschloss schlechthin. Auf einem zerklüfteten Felsen erbaut, inspirierte es Disney und verkörpert den romantischen Traum von König Ludwig II.',
        fr: 'Le château de conte de fées par excellence. Juché sur un piton rocheux, il a inspiré Disney et incarne le rêve romantique du roi Louis II de Bavière.',
        en: 'The quintessential fairy-tale castle. Perched on a rugged cliff, it inspired Disney and embodies the romantic dream of King Ludwig II.'
      }
    },

    {
      key: 'windsor-castle',
      land: { de: 'England, UK', fr: 'Angleterre, Royaume-Uni', en: 'England, UK' },
      stadt: { de: 'Windsor', fr: 'Windsor', en: 'Windsor' },
      image: 'https://www.worldhistory.org/uploads/images/11555.jpg',
      name: { de: 'Windsor Castle', fr: 'Château de Windsor', en: 'Windsor Castle' },
      desc: {
        de: 'Die älteste und größte durchgehend bewohnte Burg der Welt. Eine offizielle Residenz der britischen Monarchie, reich an Geschichte, Staatsappartements und der St.-Georgs-Kapelle.',
        fr: 'Le plus ancien et le plus grand château habité au monde. Une résidence officielle de la monarchie britannique, riche en histoire, en appartements d’État et la chapelle Saint-Georges.',
        en: 'The oldest and largest inhabited castle in the world. An official residence of the British monarchy, rich in history, State Apartments, and St. George’s Chapel.'
      }
    },
    {
      key: 'chambord',
      land: { de: 'Frankreich', fr: 'France', en: 'France' },
      stadt: { de: 'Chambord, Loire-Tal', fr: 'Chambord, Vallée de la Loire', en: 'Chambord, Loire Valley' },
      image: 'https://cdn1.chambord.org/en/wp-content/uploads/sites/3/2020/06/Chambord-Photo-Drone-of-visuals-3.jpg',
      name: { de: 'Schloss Chambord', fr: 'Château de Chambord', en: 'Château de Chambord' },
      desc: {
        de: 'Das Juwel der Renaissance im Loiretal. Berühmt für seine atemberaubende doppelläufige Wendeltreppe und seine skulpturale Dachlandschaft, ein Meisterwerk der französischen Architektur.',
        fr: 'Le joyau de la Renaissance dans la Loire. Célèbre pour son spectaculaire escalier à double révolution et son toit en dentelle de pierre, un chef-d’œuvre de l’architecture française.',
        en: 'The jewel of the Renaissance in the Loire Valley. Famous for its breathtaking double-helix staircase and sculptural rooftop skyline, a masterpiece of French architecture.'
      }
    },
    {
      key: 'versailles',
      land: { de: 'Frankreich', fr: 'France', en: 'France' },
      stadt: { de: 'Versailles', fr: 'Versailles', en: 'Versailles' },
      image: 'https://images.bfmtv.com/Kdt2VS27Ugl77_P2TZhK3sY0BM0=/0x0:2568x1977/2568x0/images/Chateau-de-Versailles-192076.jpg',
      name: { de: 'Schloss Versailles', fr: 'Château de Versailles', en: 'Palace of Versailles' },
      desc: {
        de: 'Der Gipfel des absolutistischen Prunks. Ein Symbol der französischen Monarchie mit dem Spiegelsaal, den legendären Gärten und überwältigender barocker Architektur.',
        fr: "L'apogée de la magnificence absolue. Symbole de la monarchie française avec la Galerie des Glaces, les jardins légendaires et une architecture baroque à couper le souffle.",
        en: 'The pinnacle of absolutist splendor. A symbol of the French monarchy with the Hall of Mirrors, legendary gardens, and staggering Baroque architecture.'
      }
    },
    {
      key: 'edinburgh-castle',
      land: { de: 'Schottland, UK', fr: 'Écosse, Royaume-Uni', en: 'Scotland, UK' },
      stadt: { de: 'Edinburgh', fr: 'Édimbourg', en: 'Edinburgh' },
      image: 'https://th.bing.com/th/id/R.367ae246ac7f83c6dc11c1f0c3ae81c7?rik=%2bb4bRmYuEVOyGg&pid=ImgRaw&r=0',
      name: { de: 'Edinburgh Castle', fr: 'Château d’Édimbourg', en: 'Edinburgh Castle' },
      desc: {
        de: 'Eine ikonische Festung auf einem erloschenen Vulkan. Sie beherrscht die Skyline der Stadt, beherbergt die schottischen Kronjuwelen und atmet jahrhundertelange Geschichte.',
        fr: 'Une forteresse iconique sur un volcan éteint. Dominant la skyline de la ville, elle abrite les joyaux de la couronne écossaise et respire l’histoire des siècles.',
        en: 'An iconic fortress atop an extinct volcano. Dominating the city skyline, it houses the Scottish Crown Jewels and breathes centuries of history.'
      }
    },
    {
      key: 'himeji-castle',
      land: { de: 'Japan', fr: 'Japon', en: 'Japan' },
      stadt: { de: 'Himeji', fr: 'Himeji', en: 'Himeji' },
      image: 'https://th.bing.com/th/id/R.4f89b1c3cc5986018a142b7276c3eb1f?rik=Os4Itb7iMPiXZg&pid=ImgRaw&r=0',
      name: { de: 'Burg Himeji', fr: 'Château de Himeji', en: 'Himeji Castle' },
      desc: {
        de: 'Der "Weiße Reiher". Das schönste erhaltene Beispiel japanischer Schlossarchitektur mit eleganten, sich verjüngenden Dächern und einem komplexen Verteidigungssystem.',
        fr: 'Le "Héron Blanc". Le plus beau spécimen préservé de l’architecture des châteaux japonais, aux toits élégants et effilés et au système défensif complexe.',
        en: 'The "White Heron." The finest surviving example of Japanese castle architecture, with elegant, sloping roofs and a complex defensive system.'
      }
    },
    {
      key: 'prague-castle',
      land: { de: 'Tschechien', fr: 'République Tchèque', en: 'Czech Republic' },
      stadt: { de: 'Prag', fr: 'Prague', en: 'Prague' },
      image: 'https://th.bing.com/th/id/R.c34bbe8bfafc3b2c14f07dd1199b3405?rik=kaiHT8rk%2fKGHzA&riu=http%3a%2f%2fhopa.am%2fuploads%2fimages%2ftours%2fslider%2f436266_Prg-Praj3.jpg&ehk=df4UAfyAtMxz6hgv%2fnCm09ZN0A9%2bDYMOgfDP43jE%2f%2fk%3d&risl=1&pid=ImgRaw&r=0',
      name: { de: 'Prager Burg', fr: 'Château de Prague', en: 'Prague Castle' },
      desc: {
        de: 'Der größte alte Burgkomplex der Welt. Eine Stadt in der Stadt, die über der Moldau thront und die gotische St.-Veits-Kathedrale sowie das malerische Goldene Gässchen beherbergt.',
        fr: 'Le plus grand ancien complexe de châteaux au monde. Une ville dans la ville, surplombant la Vltava et abritant la cathédrale gothique Saint-Guy et la pittoresque Ruelle d’Or.',
        en: 'The largest ancient castle complex in the world. A city within a city, overlooking the Vltava River and housing the Gothic St. Vitus Cathedral and the picturesque Golden Lane.'
      }
    },

    {
      key: 'boldt-castle',
      land: { de: 'USA', fr: 'États-Unis', en: 'USA' },
      stadt: { de: 'Alexandria Bay, New York', fr: 'Alexandria Bay, New York', en: 'Alexandria Bay, New York' },
      image: 'https://allthatsinteresting.com/wordpress/wp-content/uploads/2021/04/aerial-boldt-castle-dawn-island.jpg',
      name: { de: 'Boldt Castle', fr: 'Château Boldt', en: 'Boldt Castle' },
      desc: {
        de: 'Ein Märchenschloss aus Liebe und Tragik. Auf einer eigenen Insel im Saint-Lorenz-Strom gelegen, wurde es als Liebesbeweis erbaut, aber nie vollendet – eine romantische Ruine.',
        fr: 'Un château de conte né d’un amour tragique. Situé sur sa propre île dans le fleuve Saint-Laurent, il fut construit comme preuve d’amour mais jamais achevé – une ruine romantique.',
        en: 'A storybook castle born of love and tragedy. Located on its own island in the Saint Lawrence River, it was built as a testament of love but never finished – a romantic ruin.'
      }
    },
    {
      key: 'corvin-castle',
      land: { de: 'Rumänien', fr: 'Roumanie', en: 'Romania' },
      stadt: { de: 'Hunedoara', fr: 'Hunedoara', en: 'Hunedoara' },
      image: 'https://www.romaniatourism.com/images/castles-fortresses/corvinesti-castle-hunedoara4.jpg',
      name: { de: 'Burg Hunedoara (Corvin)', fr: 'Château de Corvin', en: 'Corvin Castle' },
      desc: {
        de: 'Ein gotisch-renaissance Juwel in Transsilvanien. Mit seiner massiven Zugbrücke, hohen Türmen und düsteren Atmosphäre ist es einer der beeindruckendsten und authentischsten Schlösser Europas.',
        fr: 'Un joyau gothico-Renaissance en Transylvanie. Avec son pont-levis massif, ses hautes tours et son atmosphère austère, c’est l’un des châteaux les plus impressionnants et authentiques d’Europe.',
        en: 'A Gothic-Renaissance jewel in Transylvania. With its massive drawbridge, tall towers, and somber atmosphere, it is one of the most impressive and authentic castles in Europe.'
      }
    },
    {
      key: 'alhambra',
      land: { de: 'Spanien', fr: 'Espagne', en: 'Spain' },
      stadt: { de: 'Granada', fr: 'Grenade', en: 'Granada' },
      image: 'https://cdn-imgix.headout.com/media/images/58da77effa54b9c430bbabfd2a54f135-Alhambra%20Granada.jpeg',
      name: { de: 'Alhambra', fr: 'Alhambra', en: 'Alhambra' },
      desc: {
        de: 'Ein Juwel maurischer Architektur. Ein Fest aus filigranen Stuckarbeiten, kunstvollen Mosaiken, friedvollen Innenhöfen und üppigen Gärten mit Blick auf die Sierra Nevada.',
        fr: 'Un joyau d’architecture mauresque. Une fête de stucs délicats, de mosaïques complexes, de patios paisibles et de jardins luxuriants surplombant la Sierra Nevada.',
        en: 'A jewel of Moorish architecture. A feast of delicate stucco, intricate mosaics, peaceful courtyards, and lush gardens overlooking the Sierra Nevada.'
      }
    }
  ];

  ngAfterViewInit() : void {
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
