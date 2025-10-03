// 'use client';

// // app/gallery/page.tsx
// import Image from 'next/image';
// import { useState } from 'react';

// interface Media {
//   path: string;
//   type: 'image' | 'video';
//   category: string;
// }

// type CategoryKey = 'all' | 'Ad Film Shoots' | 'Event Shoots' | 'Film shoots' | 'Music Shoots' | 'Product Shoots' | 'Short Films' | 'Wedding Shoots' | 'Root';

// const Gallery = () => {
//   const [selectedCategory, setSelectedCategory] = useState<CategoryKey>('all');

//   // Define categories and their media
//   const categories: Record<CategoryKey, Media[]> = {
//     all: [
//       // Root images
//       { path: '/Commercial Product shoot.jpg', type: 'image', category: 'Root' },
//       { path: '/corporate film and documentaries.jpg', type: 'image', category: 'Root' },
//       { path: '/event coverage.jpg', type: 'image', category: 'Root' },
//       { path: '/Film shooting.jpg', type: 'image', category: 'Root' },
//       { path: '/logo.png', type: 'image', category: 'Root' },
//       { path: '/logo1.jpg', type: 'image', category: 'Root' },
//       { path: '/music videos.jpg', type: 'image', category: 'Root' },
//       { path: '/professional-film-production-studio-with-cameras-a.jpg', type: 'image', category: 'Root' },
//       { path: '/Weeding films Pre Post wedding Shoot.jpg', type: 'image', category: 'Root' },
//       // Ad Film Shoots
//       { path: '/Ad Film Shoots/Peter England.mp4', type: 'video', category: 'Ad Film Shoots' },
//       { path: '/Ad Film Shoots/pexels-jack-baghel-2199968-20408436.jpg', type: 'image', category: 'Ad Film Shoots' },
//       { path: '/Ad Film Shoots/pexels-jose-martin-segura-benites-1422456152-27127387.jpg', type: 'image', category: 'Ad Film Shoots' },
//       { path: '/Ad Film Shoots/pexels-jose-martin-segura-benites-1422456152-27127418.jpg', type: 'image', category: 'Ad Film Shoots' },
//       { path: '/Ad Film Shoots/pexels-skgphotography-23801243.jpg', type: 'image', category: 'Ad Film Shoots' },
//       { path: '/Ad Film Shoots/pexels-skgphotography-23801251.jpg', type: 'image', category: 'Ad Film Shoots' },
//       // Event Shoots
//       { path: '/Event Shoots/pexels-jibarofoto-2146532.jpg', type: 'image', category: 'Event Shoots' },
//       { path: '/Event Shoots/pexels-keyurmali7-7153822.jpg', type: 'image', category: 'Event Shoots' },
//       { path: '/Event Shoots/pexels-lpfstudio023-26558728.jpg', type: 'image', category: 'Event Shoots' },
//       { path: '/Event Shoots/pexels-lpfstudio023-26558731.jpg', type: 'image', category: 'Event Shoots' },
//       { path: '/Event Shoots/pexels-rdne-7685719.jpg', type: 'image', category: 'Event Shoots' },
//       { path: '/Event Shoots/pexels-rdne-7685732.jpg', type: 'image', category: 'Event Shoots' },
//       { path: '/Event Shoots/pexels-rdne-7686327.jpg', type: 'image', category: 'Event Shoots' },
//       // Film shoots
//       { path: '/Film shoots/pexels-cottonbro-4427639.jpg', type: 'image', category: 'Film shoots' },
//       { path: '/Film shoots/pexels-ekam-juneja-61080223-34039347.jpg', type: 'image', category: 'Film shoots' },
//       { path: '/Film shoots/pexels-ryan-scot-mendez-1743509251-33809116.jpg', type: 'image', category: 'Film shoots' },
//       { path: '/Film shoots/pexels-saikat-ghosh-164424302-12843994.jpg', type: 'image', category: 'Film shoots' },
//       { path: '/Film shoots/pexels-shahadat-hossain-1853045-7573640.jpg', type: 'image', category: 'Film shoots' },
//       { path: '/Film shoots/pexels-tkirkgoz-12299480.jpg', type: 'image', category: 'Film shoots' },
//       // Music Shoots
//       { path: '/Music Shoots/0f750d49a3.jpg', type: 'image', category: 'Music Shoots' },
//       { path: '/Music Shoots/25f7946ee2.jpg', type: 'image', category: 'Music Shoots' },
//       { path: '/Music Shoots/92225f1a6f.jpg', type: 'image', category: 'Music Shoots' },
//       { path: '/Music Shoots/b675c8d688.jpg', type: 'image', category: 'Music Shoots' },
//       { path: '/Music Shoots/e0dbdf11fe.jpg', type: 'image', category: 'Music Shoots' },
//       { path: '/Music Shoots/pexels-jibarofoto-2091375.jpg', type: 'image', category: 'Music Shoots' },
//       // Product Shoots
//       { path: '/Product Shoots/jewels-sparkle-golden-wedding-rings-lying-leather.jpg', type: 'image', category: 'Product Shoots' },
//       { path: '/Product Shoots/pexels-ahmadkh5-9453448.jpg', type: 'image', category: 'Product Shoots' },
//       { path: '/Product Shoots/pexels-hemant-saini-2148893253-33363155.jpg', type: 'image', category: 'Product Shoots' },
//       { path: '/Product Shoots/pexels-noon-27639441.jpg', type: 'image', category: 'Product Shoots' },
//       { path: '/Product Shoots/pexels-rajesh-tp-749235-1633525.jpg', type: 'image', category: 'Product Shoots' },
//       { path: '/Product Shoots/pexels-umarali07-27768597.jpg', type: 'image', category: 'Product Shoots' },
//       { path: '/Product Shoots/pexels-valeriya-1961791.jpg', type: 'image', category: 'Product Shoots' },
//       { path: '/Product Shoots/shiny-gold-necklace-with-gemstone-drop-pendant-generated-by-ai.jpg', type: 'image', category: 'Product Shoots' },
//       { path: '/Product Shoots/shiny-gold-wedding-ring-with-blue-stone-generated-by-ai.jpg', type: 'image', category: 'Product Shoots' },
//       // Short Films
//       { path: '/Short Films/pexels-chandnaliyadhara-8663574.jpg', type: 'image', category: 'Short Films' },
//       { path: '/Short Films/pexels-hamidoffstudio-27678903.jpg', type: 'image', category: 'Short Films' },
//       { path: '/Short Films/pexels-lovetosmile-30659413.jpg', type: 'image', category: 'Short Films' },
//       { path: '/Short Films/pexels-onthecrow-31072582.jpg', type: 'image', category: 'Short Films' },
//       { path: '/Short Films/pexels-rdne-7581035.jpg', type: 'image', category: 'Short Films' },
//       { path: '/Short Films/pexels-stardustmultimedia-11844252 - Copy.jpg', type: 'image', category: 'Short Films' },
//       { path: '/Short Films/pexels-theshortguyfilms-29187425 - Copy.jpg', type: 'image', category: 'Short Films' },
//       // Wedding Shoots
//       { path: '/Wedding Shoots/IMG-20250906-WA0013.jpg', type: 'image', category: 'Wedding Shoots' },
//       { path: '/Wedding Shoots/IMG-20250906-WA0014.jpg', type: 'image', category: 'Wedding Shoots' },
//       { path: '/Wedding Shoots/IMG-20250906-WA0016.jpg', type: 'image', category: 'Wedding Shoots' },
//       { path: '/Wedding Shoots/IMG-20250906-WA0018.jpg', type: 'image', category: 'Wedding Shoots' },
//       { path: '/Wedding Shoots/IMG-20250906-WA0019.jpg', type: 'image', category: 'Wedding Shoots' },
//       { path: '/Wedding Shoots/IMG-20250906-WA0021.jpg', type: 'image', category: 'Wedding Shoots' },
//       { path: '/Wedding Shoots/IMG-20250906-WA0022.jpg', type: 'image', category: 'Wedding Shoots' },
//       { path: '/Wedding Shoots/IMG-20250906-WA0023.jpg', type: 'image', category: 'Wedding Shoots' },
//       { path: '/Wedding Shoots/IMG-20250906-WA0024.jpg', type: 'image', category: 'Wedding Shoots' },
//       { path: '/Wedding Shoots/pexels-sampark-films-samparkfilms-com-1300296201-32081704.jpg', type: 'image', category: 'Wedding Shoots' },
//       { path: '/Wedding Shoots/Picsart_25-09-09_15-19-02-184.jpg', type: 'image', category: 'Wedding Shoots' },
//       // Root videos
//       { path: '/hero.mp4', type: 'video', category: 'Root' },
//     ],
//     'Ad Film Shoots': [
//       { path: '/Ad Film Shoots/Peter England.mp4', type: 'video', category: 'Ad Film Shoots' },
//       { path: '/Ad Film Shoots/pexels-jack-baghel-2199968-20408436.jpg', type: 'image', category: 'Ad Film Shoots' },
//       { path: '/Ad Film Shoots/pexels-jose-martin-segura-benites-1422456152-27127387.jpg', type: 'image', category: 'Ad Film Shoots' },
//       { path: '/Ad Film Shoots/pexels-jose-martin-segura-benites-1422456152-27127418.jpg', type: 'image', category: 'Ad Film Shoots' },
//       { path: '/Ad Film Shoots/pexels-skgphotography-23801243.jpg', type: 'image', category: 'Ad Film Shoots' },
//       { path: '/Ad Film Shoots/pexels-skgphotography-23801251.jpg', type: 'image', category: 'Ad Film Shoots' },
//     ],
//     'Event Shoots': [
//       { path: '/Event Shoots/pexels-jibarofoto-2146532.jpg', type: 'image', category: 'Event Shoots' },
//       { path: '/Event Shoots/pexels-keyurmali7-7153822.jpg', type: 'image', category: 'Event Shoots' },
//       { path: '/Event Shoots/pexels-lpfstudio023-26558728.jpg', type: 'image', category: 'Event Shoots' },
//       { path: '/Event Shoots/pexels-lpfstudio023-26558731.jpg', type: 'image', category: 'Event Shoots' },
//       { path: '/Event Shoots/pexels-rdne-7685719.jpg', type: 'image', category: 'Event Shoots' },
//       { path: '/Event Shoots/pexels-rdne-7685732.jpg', type: 'image', category: 'Event Shoots' },
//       { path: '/Event Shoots/pexels-rdne-7686327.jpg', type: 'image', category: 'Event Shoots' },
//     ],
//     'Film shoots': [
//       { path: '/Film shoots/pexels-cottonbro-4427639.jpg', type: 'image', category: 'Film shoots' },
//       { path: '/Film shoots/pexels-ekam-juneja-61080223-34039347.jpg', type: 'image', category: 'Film shoots' },
//       { path: '/Film shoots/pexels-ryan-scot-mendez-1743509251-33809116.jpg', type: 'image', category: 'Film shoots' },
//       { path: '/Film shoots/pexels-saikat-ghosh-164424302-12843994.jpg', type: 'image', category: 'Film shoots' },
//       { path: '/Film shoots/pexels-shahadat-hossain-1853045-7573640.jpg', type: 'image', category: 'Film shoots' },
//       { path: '/Film shoots/pexels-tkirkgoz-12299480.jpg', type: 'image', category: 'Film shoots' },
//     ],
//     'Music Shoots': [
//       { path: '/Music Shoots/0f750d49a3.jpg', type: 'image', category: 'Music Shoots' },
//       { path: '/Music Shoots/25f7946ee2.jpg', type: 'image', category: 'Music Shoots' },
//       { path: '/Music Shoots/92225f1a6f.jpg', type: 'image', category: 'Music Shoots' },
//       { path: '/Music Shoots/b675c8d688.jpg', type: 'image', category: 'Music Shoots' },
//       { path: '/Music Shoots/e0dbdf11fe.jpg', type: 'image', category: 'Music Shoots' },
//       { path: '/Music Shoots/pexels-jibarofoto-2091375.jpg', type: 'image', category: 'Music Shoots' },
//     ],
//     'Product Shoots': [
//       { path: '/Product Shoots/jewels-sparkle-golden-wedding-rings-lying-leather.jpg', type: 'image', category: 'Product Shoots' },
//       { path: '/Product Shoots/pexels-ahmadkh5-9453448.jpg', type: 'image', category: 'Product Shoots' },
//       { path: '/Product Shoots/pexels-hemant-saini-2148893253-33363155.jpg', type: 'image', category: 'Product Shoots' },
//       { path: '/Product Shoots/pexels-noon-27639441.jpg', type: 'image', category: 'Product Shoots' },
//       { path: '/Product Shoots/pexels-rajesh-tp-749235-1633525.jpg', type: 'image', category: 'Product Shoots' },
//       { path: '/Product Shoots/pexels-umarali07-27768597.jpg', type: 'image', category: 'Product Shoots' },
//       { path: '/Product Shoots/pexels-valeriya-1961791.jpg', type: 'image', category: 'Product Shoots' },
//       { path: '/Product Shoots/shiny-gold-necklace-with-gemstone-drop-pendant-generated-by-ai.jpg', type: 'image', category: 'Product Shoots' },
//       { path: '/Product Shoots/shiny-gold-wedding-ring-with-blue-stone-generated-by-ai.jpg', type: 'image', category: 'Product Shoots' },
//     ],
//     'Short Films': [
//       { path: '/Short Films/pexels-chandnaliyadhara-8663574.jpg', type: 'image', category: 'Short Films' },
//       { path: '/Short Films/pexels-hamidoffstudio-27678903.jpg', type: 'image', category: 'Short Films' },
//       { path: '/Short Films/pexels-lovetosmile-30659413.jpg', type: 'image', category: 'Short Films' },
//       { path: '/Short Films/pexels-onthecrow-31072582.jpg', type: 'image', category: 'Short Films' },
//       { path: '/Short Films/pexels-rdne-7581035.jpg', type: 'image', category: 'Short Films' },
//       { path: '/Short Films/pexels-stardustmultimedia-11844252 - Copy.jpg', type: 'image', category: 'Short Films' },
//       { path: '/Short Films/pexels-theshortguyfilms-29187425 - Copy.jpg', type: 'image', category: 'Short Films' },
//     ],
//     'Wedding Shoots': [
//       { path: '/Wedding Shoots/IMG-20250906-WA0013.jpg', type: 'image', category: 'Wedding Shoots' },
//       { path: '/Wedding Shoots/IMG-20250906-WA0014.jpg', type: 'image', category: 'Wedding Shoots' },
//       { path: '/Wedding Shoots/IMG-20250906-WA0016.jpg', type: 'image', category: 'Wedding Shoots' },
//       { path: '/Wedding Shoots/IMG-20250906-WA0018.jpg', type: 'image', category: 'Wedding Shoots' },
//       { path: '/Wedding Shoots/IMG-20250906-WA0019.jpg', type: 'image', category: 'Wedding Shoots' },
//       { path: '/Wedding Shoots/IMG-20250906-WA0021.jpg', type: 'image', category: 'Wedding Shoots' },
//       { path: '/Wedding Shoots/IMG-20250906-WA0022.jpg', type: 'image', category: 'Wedding Shoots' },
//       { path: '/Wedding Shoots/IMG-20250906-WA0023.jpg', type: 'image', category: 'Wedding Shoots' },
//       { path: '/Wedding Shoots/IMG-20250906-WA0024.jpg', type: 'image', category: 'Wedding Shoots' },
//       { path: '/Wedding Shoots/pexels-sampark-films-samparkfilms-com-1300296201-32081704.jpg', type: 'image', category: 'Wedding Shoots' },
//       { path: '/Wedding Shoots/Picsart_25-09-09_15-19-02-184.jpg', type: 'image', category: 'Wedding Shoots' },
//     ],
//     'Root': [
//       { path: '/Commercial Product shoot.jpg', type: 'image', category: 'Root' },
//       { path: '/corporate film and documentaries.jpg', type: 'image', category: 'Root' },
//       { path: '/event coverage.jpg', type: 'image', category: 'Root' },
//       { path: '/Film shooting.jpg', type: 'image', category: 'Root' },
//       { path: '/logo.png', type: 'image', category: 'Root' },
//       { path: '/logo1.jpg', type: 'image', category: 'Root' },
//       { path: '/music videos.jpg', type: 'image', category: 'Root' },
//       { path: '/professional-film-production-studio-with-cameras-a.jpg', type: 'image', category: 'Root' },
//       { path: '/Weeding films Pre Post wedding Shoot.jpg', type: 'image', category: 'Root' },
//       { path: '/hero.mp4', type: 'video', category: 'Root' },
//     ],
//   };

//   const mediaList = selectedCategory === 'all' ? categories.all : categories[selectedCategory];

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-3xl font-bold mb-8 text-center">HIG Production House Gallery</h1>
      
//       {/* Category Filter */}
//       <div className="flex flex-wrap justify-center mb-8 gap-4">
//         {Object.keys(categories).map((cat) => (
//           <button
//             key={cat as CategoryKey}
//             onClick={() => setSelectedCategory(cat as CategoryKey)}
//             className={`px-4 py-2 rounded-lg font-semibold ${
//               selectedCategory === cat
//                 ? 'bg-blue-600 text-white'
//                 : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
//             }`}
//           >
//             {cat === 'Root' ? 'Miscellaneous' : cat}
//           </button>
//         ))}
//       </div>

//       {/* Gallery Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
//         {mediaList.map((media: Media, index: number) => (
//           <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
//             {media.type === 'image' ? (
//               <Image
//                 src={media.path}
//                 alt={`Gallery image ${index + 1}`}
//                 width={400}
//                 height={300}
//                 className="w-full h-48 object-cover"
//                 priority={index < 4}
//               />
//             ) : (
//               <video
//                 src={media.path}
//                 controls
//                 className="w-full h-48 object-cover"
//               >
//                 Your browser does not support the video tag.
//               </video>
//             )}
//             <div className="p-2 text-sm text-gray-600">
//               {media.path.split('/').pop()}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Gallery;











// 'use client';

// // app/gallery/page.tsx
// import Image from 'next/image';
// import { useState } from 'react';
// import { Navigation } from "@/components/navigation"
// import { Footer } from "@/components/footer"

// interface Media {
//   path: string;
//   type: 'image' | 'video';
//   category: string;
// }

// type CategoryKey = 'all' | 'Ad Film Shoots' | 'Event Shoots' | 'Film shoots' | 'Music Shoots' | 'Product Shoots' | 'Short Films' | 'Wedding Shoots' | 'Root';

// const Gallery = () => {
//   const [selectedCategory, setSelectedCategory] = useState<CategoryKey>('all');

//   // Define categories and their media
//   const categories: Record<CategoryKey, Media[]> = {
//     all: [
//       // Root images
//       { path: '/Commercial Product shoot.jpg', type: 'image', category: 'Root' },
//       { path: '/corporate film and documentaries.jpg', type: 'image', category: 'Root' },
//       { path: '/event coverage.jpg', type: 'image', category: 'Root' },
//       { path: '/Film shooting.jpg', type: 'image', category: 'Root' },
//       { path: '/logo.png', type: 'image', category: 'Root' },
//       { path: '/logo1.jpg', type: 'image', category: 'Root' },
//       { path: '/music videos.jpg', type: 'image', category: 'Root' },
//       { path: '/professional-film-production-studio-with-cameras-a.jpg', type: 'image', category: 'Root' },
//       { path: '/Weeding films Pre Post wedding Shoot.jpg', type: 'image', category: 'Root' },
//       // Ad Film Shoots
//       { path: '/Ad Film Shoots/Peter England.mp4', type: 'video', category: 'Ad Film Shoots' },
//       { path: '/Ad Film Shoots/pexels-jack-baghel-2199968-20408436.jpg', type: 'image', category: 'Ad Film Shoots' },
//       { path: '/Ad Film Shoots/pexels-jose-martin-segura-benites-1422456152-27127387.jpg', type: 'image', category: 'Ad Film Shoots' },
//       { path: '/Ad Film Shoots/pexels-jose-martin-segura-benites-1422456152-27127418.jpg', type: 'image', category: 'Ad Film Shoots' },
//       { path: '/Ad Film Shoots/pexels-skgphotography-23801243.jpg', type: 'image', category: 'Ad Film Shoots' },
//       { path: '/Ad Film Shoots/pexels-skgphotography-23801251.jpg', type: 'image', category: 'Ad Film Shoots' },
//       // Event Shoots
//       { path: '/Event Shoots/pexels-jibarofoto-2146532.jpg', type: 'image', category: 'Event Shoots' },
//       { path: '/Event Shoots/pexels-keyurmali7-7153822.jpg', type: 'image', category: 'Event Shoots' },
//       { path: '/Event Shoots/pexels-lpfstudio023-26558728.jpg', type: 'image', category: 'Event Shoots' },
//       { path: '/Event Shoots/pexels-lpfstudio023-26558731.jpg', type: 'image', category: 'Event Shoots' },
//       { path: '/Event Shoots/pexels-rdne-7685719.jpg', type: 'image', category: 'Event Shoots' },
//       { path: '/Event Shoots/pexels-rdne-7685732.jpg', type: 'image', category: 'Event Shoots' },
//       { path: '/Event Shoots/pexels-rdne-7686327.jpg', type: 'image', category: 'Event Shoots' },
//       // Film shoots
//       { path: '/Film shoots/pexels-cottonbro-4427639.jpg', type: 'image', category: 'Film shoots' },
//       { path: '/Film shoots/pexels-ekam-juneja-61080223-34039347.jpg', type: 'image', category: 'Film shoots' },
//       { path: '/Film shoots/pexels-ryan-scot-mendez-1743509251-33809116.jpg', type: 'image', category: 'Film shoots' },
//       { path: '/Film shoots/pexels-saikat-ghosh-164424302-12843994.jpg', type: 'image', category: 'Film shoots' },
//       { path: '/Film shoots/pexels-shahadat-hossain-1853045-7573640.jpg', type: 'image', category: 'Film shoots' },
//       { path: '/Film shoots/pexels-tkirkgoz-12299480.jpg', type: 'image', category: 'Film shoots' },
//       // Music Shoots
//       { path: '/Music Shoots/0f750d49a3.jpg', type: 'image', category: 'Music Shoots' },
//       { path: '/Music Shoots/25f7946ee2.jpg', type: 'image', category: 'Music Shoots' },
//       { path: '/Music Shoots/92225f1a6f.jpg', type: 'image', category: 'Music Shoots' },
//       { path: '/Music Shoots/b675c8d688.jpg', type: 'image', category: 'Music Shoots' },
//       { path: '/Music Shoots/e0dbdf11fe.jpg', type: 'image', category: 'Music Shoots' },
//       { path: '/Music Shoots/pexels-jibarofoto-2091375.jpg', type: 'image', category: 'Music Shoots' },
//       // Product Shoots
//       { path: '/Product Shoots/jewels-sparkle-golden-wedding-rings-lying-leather.jpg', type: 'image', category: 'Product Shoots' },
//       { path: '/Product Shoots/pexels-ahmadkh5-9453448.jpg', type: 'image', category: 'Product Shoots' },
//       { path: '/Product Shoots/pexels-hemant-saini-2148893253-33363155.jpg', type: 'image', category: 'Product Shoots' },
//       { path: '/Product Shoots/pexels-noon-27639441.jpg', type: 'image', category: 'Product Shoots' },
//       { path: '/Product Shoots/pexels-rajesh-tp-749235-1633525.jpg', type: 'image', category: 'Product Shoots' },
//       { path: '/Product Shoots/pexels-umarali07-27768597.jpg', type: 'image', category: 'Product Shoots' },
//       { path: '/Product Shoots/pexels-valeriya-1961791.jpg', type: 'image', category: 'Product Shoots' },
//       { path: '/Product Shoots/shiny-gold-necklace-with-gemstone-drop-pendant-generated-by-ai.jpg', type: 'image', category: 'Product Shoots' },
//       { path: '/Product Shoots/shiny-gold-wedding-ring-with-blue-stone-generated-by-ai.jpg', type: 'image', category: 'Product Shoots' },
//       // Short Films
//       { path: '/Short Films/pexels-chandnaliyadhara-8663574.jpg', type: 'image', category: 'Short Films' },
//       { path: '/Short Films/pexels-hamidoffstudio-27678903.jpg', type: 'image', category: 'Short Films' },
//       { path: '/Short Films/pexels-lovetosmile-30659413.jpg', type: 'image', category: 'Short Films' },
//       { path: '/Short Films/pexels-onthecrow-31072582.jpg', type: 'image', category: 'Short Films' },
//       { path: '/Short Films/pexels-rdne-7581035.jpg', type: 'image', category: 'Short Films' },
//       { path: '/Short Films/pexels-stardustmultimedia-11844252 - Copy.jpg', type: 'image', category: 'Short Films' },
//       { path: '/Short Films/pexels-theshortguyfilms-29187425 - Copy.jpg', type: 'image', category: 'Short Films' },
//       // Wedding Shoots
//       { path: '/Wedding Shoots/IMG-20250906-WA0013.jpg', type: 'image', category: 'Wedding Shoots' },
//       { path: '/Wedding Shoots/IMG-20250906-WA0014.jpg', type: 'image', category: 'Wedding Shoots' },
//       { path: '/Wedding Shoots/IMG-20250906-WA0016.jpg', type: 'image', category: 'Wedding Shoots' },
//       { path: '/Wedding Shoots/IMG-20250906-WA0018.jpg', type: 'image', category: 'Wedding Shoots' },
//       { path: '/Wedding Shoots/IMG-20250906-WA0019.jpg', type: 'image', category: 'Wedding Shoots' },
//       { path: '/Wedding Shoots/IMG-20250906-WA0021.jpg', type: 'image', category: 'Wedding Shoots' },
//       { path: '/Wedding Shoots/IMG-20250906-WA0022.jpg', type: 'image', category: 'Wedding Shoots' },
//       { path: '/Wedding Shoots/IMG-20250906-WA0023.jpg', type: 'image', category: 'Wedding Shoots' },
//       { path: '/Wedding Shoots/IMG-20250906-WA0024.jpg', type: 'image', category: 'Wedding Shoots' },
//       { path: '/Wedding Shoots/pexels-sampark-films-samparkfilms-com-1300296201-32081704.jpg', type: 'image', category: 'Wedding Shoots' },
//       { path: '/Wedding Shoots/Picsart_25-09-09_15-19-02-184.jpg', type: 'image', category: 'Wedding Shoots' },
//       // Root videos
//       { path: '/hero.mp4', type: 'video', category: 'Root' },
//     ],
//     'Ad Film Shoots': [
//       { path: '/Ad Film Shoots/Peter England.mp4', type: 'video', category: 'Ad Film Shoots' },
//       { path: '/Ad Film Shoots/pexels-jack-baghel-2199968-20408436.jpg', type: 'image', category: 'Ad Film Shoots' },
//       { path: '/Ad Film Shoots/pexels-jose-martin-segura-benites-1422456152-27127387.jpg', type: 'image', category: 'Ad Film Shoots' },
//       { path: '/Ad Film Shoots/pexels-jose-martin-segura-benites-1422456152-27127418.jpg', type: 'image', category: 'Ad Film Shoots' },
//       { path: '/Ad Film Shoots/pexels-skgphotography-23801243.jpg', type: 'image', category: 'Ad Film Shoots' },
//       { path: '/Ad Film Shoots/pexels-skgphotography-23801251.jpg', type: 'image', category: 'Ad Film Shoots' },
//     ],
//     'Event Shoots': [
//       { path: '/Event Shoots/pexels-jibarofoto-2146532.jpg', type: 'image', category: 'Event Shoots' },
//       { path: '/Event Shoots/pexels-keyurmali7-7153822.jpg', type: 'image', category: 'Event Shoots' },
//       { path: '/Event Shoots/pexels-lpfstudio023-26558728.jpg', type: 'image', category: 'Event Shoots' },
//       { path: '/Event Shoots/pexels-lpfstudio023-26558731.jpg', type: 'image', category: 'Event Shoots' },
//       { path: '/Event Shoots/pexels-rdne-7685719.jpg', type: 'image', category: 'Event Shoots' },
//       { path: '/Event Shoots/pexels-rdne-7685732.jpg', type: 'image', category: 'Event Shoots' },
//       { path: '/Event Shoots/pexels-rdne-7686327.jpg', type: 'image', category: 'Event Shoots' },
//     ],
//     'Film shoots': [
//       { path: '/Film shoots/pexels-cottonbro-4427639.jpg', type: 'image', category: 'Film shoots' },
//       { path: '/Film shoots/pexels-ekam-juneja-61080223-34039347.jpg', type: 'image', category: 'Film shoots' },
//       { path: '/Film shoots/pexels-ryan-scot-mendez-1743509251-33809116.jpg', type: 'image', category: 'Film shoots' },
//       { path: '/Film shoots/pexels-saikat-ghosh-164424302-12843994.jpg', type: 'image', category: 'Film shoots' },
//       { path: '/Film shoots/pexels-shahadat-hossain-1853045-7573640.jpg', type: 'image', category: 'Film shoots' },
//       { path: '/Film shoots/pexels-tkirkgoz-12299480.jpg', type: 'image', category: 'Film shoots' },
//     ],
//     'Music Shoots': [
//       { path: '/Music Shoots/0f750d49a3.jpg', type: 'image', category: 'Music Shoots' },
//       { path: '/Music Shoots/25f7946ee2.jpg', type: 'image', category: 'Music Shoots' },
//       { path: '/Music Shoots/92225f1a6f.jpg', type: 'image', category: 'Music Shoots' },
//       { path: '/Music Shoots/b675c8d688.jpg', type: 'image', category: 'Music Shoots' },
//       { path: '/Music Shoots/e0dbdf11fe.jpg', type: 'image', category: 'Music Shoots' },
//       { path: '/Music Shoots/pexels-jibarofoto-2091375.jpg', type: 'image', category: 'Music Shoots' },
//     ],
//     'Product Shoots': [
//       { path: '/Product Shoots/jewels-sparkle-golden-wedding-rings-lying-leather.jpg', type: 'image', category: 'Product Shoots' },
//       { path: '/Product Shoots/pexels-ahmadkh5-9453448.jpg', type: 'image', category: 'Product Shoots' },
//       { path: '/Product Shoots/pexels-hemant-saini-2148893253-33363155.jpg', type: 'image', category: 'Product Shoots' },
//       { path: '/Product Shoots/pexels-noon-27639441.jpg', type: 'image', category: 'Product Shoots' },
//       { path: '/Product Shoots/pexels-rajesh-tp-749235-1633525.jpg', type: 'image', category: 'Product Shoots' },
//       { path: '/Product Shoots/pexels-umarali07-27768597.jpg', type: 'image', category: 'Product Shoots' },
//       { path: '/Product Shoots/pexels-valeriya-1961791.jpg', type: 'image', category: 'Product Shoots' },
//       { path: '/Product Shoots/shiny-gold-necklace-with-gemstone-drop-pendant-generated-by-ai.jpg', type: 'image', category: 'Product Shoots' },
//       { path: '/Product Shoots/shiny-gold-wedding-ring-with-blue-stone-generated-by-ai.jpg', type: 'image', category: 'Product Shoots' },
//     ],
//     'Short Films': [
//       { path: '/Short Films/pexels-chandnaliyadhara-8663574.jpg', type: 'image', category: 'Short Films' },
//       { path: '/Short Films/pexels-hamidoffstudio-27678903.jpg', type: 'image', category: 'Short Films' },
//       { path: '/Short Films/pexels-lovetosmile-30659413.jpg', type: 'image', category: 'Short Films' },
//       { path: '/Short Films/pexels-onthecrow-31072582.jpg', type: 'image', category: 'Short Films' },
//       { path: '/Short Films/pexels-rdne-7581035.jpg', type: 'image', category: 'Short Films' },
//       { path: '/Short Films/pexels-stardustmultimedia-11844252 - Copy.jpg', type: 'image', category: 'Short Films' },
//       { path: '/Short Films/pexels-theshortguyfilms-29187425 - Copy.jpg', type: 'image', category: 'Short Films' },
//     ],
//     'Wedding Shoots': [
//       { path: '/Wedding Shoots/IMG-20250906-WA0013.jpg', type: 'image', category: 'Wedding Shoots' },
//       { path: '/Wedding Shoots/IMG-20250906-WA0014.jpg', type: 'image', category: 'Wedding Shoots' },
//       { path: '/Wedding Shoots/IMG-20250906-WA0016.jpg', type: 'image', category: 'Wedding Shoots' },
//       { path: '/Wedding Shoots/IMG-20250906-WA0018.jpg', type: 'image', category: 'Wedding Shoots' },
//       { path: '/Wedding Shoots/IMG-20250906-WA0019.jpg', type: 'image', category: 'Wedding Shoots' },
//       { path: '/Wedding Shoots/IMG-20250906-WA0021.jpg', type: 'image', category: 'Wedding Shoots' },
//       { path: '/Wedding Shoots/IMG-20250906-WA0022.jpg', type: 'image', category: 'Wedding Shoots' },
//       { path: '/Wedding Shoots/IMG-20250906-WA0023.jpg', type: 'image', category: 'Wedding Shoots' },
//       { path: '/Wedding Shoots/IMG-20250906-WA0024.jpg', type: 'image', category: 'Wedding Shoots' },
//       { path: '/Wedding Shoots/pexels-sampark-films-samparkfilms-com-1300296201-32081704.jpg', type: 'image', category: 'Wedding Shoots' },
//       { path: '/Wedding Shoots/Picsart_25-09-09_15-19-02-184.jpg', type: 'image', category: 'Wedding Shoots' },
//     ],
//     'Root': [
//       { path: '/Commercial Product shoot.jpg', type: 'image', category: 'Root' },
//       { path: '/corporate film and documentaries.jpg', type: 'image', category: 'Root' },
//       { path: '/event coverage.jpg', type: 'image', category: 'Root' },
//       { path: '/Film shooting.jpg', type: 'image', category: 'Root' },
//       { path: '/logo.png', type: 'image', category: 'Root' },
//       { path: '/logo1.jpg', type: 'image', category: 'Root' },
//       { path: '/music videos.jpg', type: 'image', category: 'Root' },
//       { path: '/professional-film-production-studio-with-cameras-a.jpg', type: 'image', category: 'Root' },
//       { path: '/Weeding films Pre Post wedding Shoot.jpg', type: 'image', category: 'Root' },
//       { path: '/hero.mp4', type: 'video', category: 'Root' },
//     ],
//   };

//   const mediaList = selectedCategory === 'all' ? categories.all : categories[selectedCategory];

//   return (
//     <>
//       <Navigation />

//       <main className="pt-16">
//         <div className="container mx-auto p-4">
//           <h1 className="text-3xl font-bold mb-8 text-center">HIG Production House Gallery</h1>
          
//           {/* Category Filter */}
//           <div className="flex flex-wrap justify-center mb-8 gap-4">
//             {Object.keys(categories).map((cat) => (
//               <button
//                 key={cat as CategoryKey}
//                 onClick={() => setSelectedCategory(cat as CategoryKey)}
//                 className={`px-4 py-2 rounded-lg font-semibold ${
//                   selectedCategory === cat
//                     ? 'bg-blue-600 text-white'
//                     : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
//                 }`}
//               >
//                 {cat === 'Root' ? 'Miscellaneous' : cat}
//               </button>
//             ))}
//           </div>

//           {/* Gallery Grid */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
//             {mediaList.map((media: Media, index: number) => (
//               <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
//                 {media.type === 'image' ? (
//                   <Image
//                     src={media.path}
//                     alt={`Gallery image ${index + 1}`}
//                     width={400}
//                     height={300}
//                     className="w-full h-48 object-cover"
//                     priority={index < 4}
//                   />
//                 ) : (
//                   <video
//                     src={media.path}
//                     controls
//                     className="w-full h-48 object-cover"
//                   >
//                     Your browser does not support the video tag.
//                   </video>
//                 )}
//                 <div className="p-2 text-sm text-gray-600">
//                   {media.path.split('/').pop()}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </main>

//       <Footer />
//     </>
//   );
// };

// export default Gallery;













// app/gallery/page.tsx
'use client';

import Image from 'next/image';
import { useState, useMemo } from 'react';
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

interface Media {
  path: string;
  type: 'image' | 'video';
  category: string;
}

// 1. Single source of truth for all media items. No more duplication!
const allMedia: Media[] = [
  // Root images
  { path: '/Commercial Product shoot.jpg', type: 'image', category: 'Root' },
  { path: '/corporate film and documentaries.jpg', type: 'image', category: 'Root' },
  { path: '/event coverage.jpg', type: 'image', category: 'Root' },
  { path: '/Film shooting.jpg', type: 'image', category: 'Root' },
  { path: '/logo.png', type: 'image', category: 'Root' },
  { path: '/logo1.jpg', type: 'image', category: 'Root' },
  { path: '/music videos.jpg', type: 'image', category: 'Root' },
  { path: '/professional-film-production-studio-with-cameras-a.jpg', type: 'image', category: 'Root' },
  { path: '/Weeding films Pre Post wedding Shoot.jpg', type: 'image', category: 'Root' },
  // Ad Film Shoots
  { path: '/Ad Film Shoots/Peter England.mp4', type: 'video', category: 'Ad Film Shoots' },
  { path: '/Ad Film Shoots/pexels-jack-baghel-2199968-20408436.jpg', type: 'image', category: 'Ad Film Shoots' },
  { path: '/Ad Film Shoots/pexels-jose-martin-segura-benites-1422456152-27127387.jpg', type: 'image', category: 'Ad Film Shoots' },
  { path: '/Ad Film Shoots/pexels-jose-martin-segura-benites-1422456152-27127418.jpg', type: 'image', category: 'Ad Film Shoots' },
  { path: '/Ad Film Shoots/pexels-skgphotography-23801243.jpg', type: 'image', category: 'Ad Film Shoots' },
  { path: '/Ad Film Shoots/pexels-skgphotography-23801251.jpg', type: 'image', category: 'Ad Film Shoots' },
  // Event Shoots
  { path: '/Event Shoots/pexels-jibarofoto-2146532.jpg', type: 'image', category: 'Event Shoots' },
  { path: '/Event Shoots/pexels-keyurmali7-7153822.jpg', type: 'image', category: 'Event Shoots' },
  { path: '/Event Shoots/pexels-lpfstudio023-26558728.jpg', type: 'image', category: 'Event Shoots' },
  { path: '/Event Shoots/pexels-lpfstudio023-26558731.jpg', type: 'image', category: 'Event Shoots' },
  { path: '/Event Shoots/pexels-rdne-7685719.jpg', type: 'image', category: 'Event Shoots' },
  { path: '/Event Shoots/pexels-rdne-7685732.jpg', type: 'image', category: 'Event Shoots' },
  { path: '/Event Shoots/pexels-rdne-7686327.jpg', type: 'image', category: 'Event Shoots' },
  // Film shoots
  { path: '/Film shoots/pexels-cottonbro-4427639.jpg', type: 'image', category: 'Film shoots' },
  { path: '/Film shoots/pexels-ekam-juneja-61080223-34039347.jpg', type: 'image', category: 'Film shoots' },
  { path: '/Film shoots/pexels-ryan-scot-mendez-1743509251-33809116.jpg', type: 'image', category: 'Film shoots' },
  { path: '/Film shoots/pexels-saikat-ghosh-164424302-12843994.jpg', type: 'image', category: 'Film shoots' },
  { path: '/Film shoots/pexels-shahadat-hossain-1853045-7573640.jpg', type: 'image', category: 'Film shoots' },
  { path: '/Film shoots/pexels-tkirkgoz-12299480.jpg', type: 'image', category: 'Film shoots' },
  // Music Shoots
  { path: '/Music Shoots/0f750d49a3.jpg', type: 'image', category: 'Music Shoots' },
  { path: '/Music Shoots/25f7946ee2.jpg', type: 'image', category: 'Music Shoots' },
  { path: '/Music Shoots/92225f1a6f.jpg', type: 'image', category: 'Music Shoots' },
  { path: '/Music Shoots/b675c8d688.jpg', type: 'image', category: 'Music Shoots' },
  { path: '/Music Shoots/e0dbdf11fe.jpg', type: 'image', category: 'Music Shoots' },
  { path: '/Music Shoots/pexels-jibarofoto-2091375.jpg', type: 'image', category: 'Music Shoots' },
  // Product Shoots
  { path: '/Product Shoots/jewels-sparkle-golden-wedding-rings-lying-leather.jpg', type: 'image', category: 'Product Shoots' },
  { path: '/Product Shoots/pexels-ahmadkh5-9453448.jpg', type: 'image', category: 'Product Shoots' },
  { path: '/Product Shoots/pexels-hemant-saini-2148893253-33363155.jpg', type: 'image', category: 'Product Shoots' },
  { path: '/Product Shoots/pexels-noon-27639441.jpg', type: 'image', category: 'Product Shoots' },
  { path: '/Product Shoots/pexels-rajesh-tp-749235-1633525.jpg', type: 'image', category: 'Product Shoots' },
  { path: '/Product Shoots/pexels-umarali07-27768597.jpg', type: 'image', category: 'Product Shoots' },
  { path: '/Product Shoots/pexels-valeriya-1961791.jpg', type: 'image', category: 'Product Shoots' },
  { path: '/Product Shoots/shiny-gold-necklace-with-gemstone-drop-pendant-generated-by-ai.jpg', type: 'image', category: 'Product Shoots' },
  { path: '/Product Shoots/shiny-gold-wedding-ring-with-blue-stone-generated-by-ai.jpg', type: 'image', category: 'Product Shoots' },
  // Short Films
  { path: '/Short Films/pexels-chandnaliyadhara-8663574.jpg', type: 'image', category: 'Short Films' },
  { path: '/Short Films/pexels-hamidoffstudio-27678903.jpg', type: 'image', category: 'Short Films' },
  { path: '/Short Films/pexels-lovetosmile-30659413.jpg', type: 'image', category: 'Short Films' },
  { path: '/Short Films/pexels-onthecrow-31072582.jpg', type: 'image', category: 'Short Films' },
  { path: '/Short Films/pexels-rdne-7581035.jpg', type: 'image', category: 'Short Films' },
  { path: '/Short Films/pexels-stardustmultimedia-11844252 - Copy.jpg', type: 'image', category: 'Short Films' },
  { path: '/Short Films/pexels-theshortguyfilms-29187425 - Copy.jpg', type: 'image', category: 'Short Films' },
  // Wedding Shoots
  { path: '/Wedding Shoots/IMG-20250906-WA0013.jpg', type: 'image', category: 'Wedding Shoots' },
  { path: '/Wedding Shoots/IMG-20250906-WA0014.jpg', type: 'image', category: 'Wedding Shoots' },
  { path: '/Wedding Shoots/IMG-20250906-WA0016.jpg', type: 'image', category: 'Wedding Shoots' },
  { path: '/Wedding Shoots/IMG-20250906-WA0018.jpg', type: 'image', category: 'Wedding Shoots' },
  { path: '/Wedding Shoots/IMG-20250906-WA0019.jpg', type: 'image', category: 'Wedding Shoots' },
  { path: '/Wedding Shoots/IMG-20250906-WA0021.jpg', type: 'image', category: 'Wedding Shoots' },
  { path: '/Wedding Shoots/IMG-20250906-WA0022.jpg', type: 'image', category: 'Wedding Shoots' },
  { path: '/Wedding Shoots/IMG-20250906-WA0023.jpg', type: 'image', category: 'Wedding Shoots' },
  { path: '/Wedding Shoots/IMG-20250906-WA0024.jpg', type: 'image', category: 'Wedding Shoots' },
  { path: '/Wedding Shoots/pexels-sampark-films-samparkfilms-com-1300296201-32081704.jpg', type: 'image', category: 'Wedding Shoots' },
  { path: '/Wedding Shoots/Picsart_25-09-09_15-19-02-184.jpg', type: 'image', category: 'Wedding Shoots' },
  // Root videos
  { path: '/hero.mp4', type: 'video', category: 'Root' },
];

// 2. Define category keys dynamically and for typing.
const categoryKeys = ['all', 'Ad Film Shoots', 'Event Shoots', 'Film shoots', 'Music Shoots', 'Product Shoots', 'Short Films', 'Wedding Shoots', 'Root'];
type CategoryKey = typeof categoryKeys[number];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryKey>('all');

  // 3. Filter the media list efficiently based on the selected category.
  const mediaList = useMemo(() => {
    if (selectedCategory === 'all') {
      return allMedia;
    }
    return allMedia.filter(media => media.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <>
      <Navigation />
      <main className="pt-24 sm:pt-32"> {/* Added more top padding to account for the larger nav bar */}
        <div className="container mx-auto p-4">
          <h1 className="text-3xl font-bold mb-8 text-center">HIG Production House Gallery</h1>
          
          <div className="flex flex-wrap justify-center mb-8 gap-2 sm:gap-4">
            {categoryKeys.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-lg font-semibold transition-colors duration-200 ${
                  selectedCategory === cat
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                }`}
              >
                {/* Display 'Root' category as 'Miscellaneous' */}
                {cat === 'Root' ? 'Miscellaneous' : cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {mediaList.map((media, index) => (
              <div key={media.path} className="bg-white rounded-lg shadow-md overflow-hidden group">
                {media.type === 'image' ? (
                  <Image
                    src={media.path}
                    alt={`${media.category} gallery item ${index + 1}`}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover transform transition-transform duration-300 group-hover:scale-105"
                    priority={index < 8} // Prioritize loading for the first few images for better LCP
                  />
                ) : (
                  <video
                    src={media.path}
                    controls
                    preload="metadata" // Only load metadata initially
                    className="w-full h-48 object-cover"
                  >
                    Your browser does not support the video tag.
                  </video>
                )}
                <div className="p-2 text-sm text-gray-600 truncate" title={media.path.split('/').pop()}>
                  {media.path.split('/').pop()}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Gallery;