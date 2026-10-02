import type { Project } from '@/types/project';
import { stories } from './stories';

const content: Project[] = [
  {
    "shortTitle": "100xDev",
    "description": "I built a connected learning and developer community application, from the Flutter interface to the Node.js backend.",
    "dateRange": null,
    "status": "Independent project",
    "role": "Flutter & full-stack development",
    "projectType": "Application",
    "featured": true,
    "ownership": "",
    "implemented": [
      "Feature-specific Bloc state management",
      "Hive blog caching",
      "Learning and course content",
      "Project Launchpad",
      "AI course assistance",
      "Socket.IO integration",
      "Payment integration"
    ],
    "planned": [],
    "media": [
      {
        "src": "/projects/100xdev/overview.png",
        "alt": "100xDev course content, learning home and project Launchpad shown on three phones",
        "width": 550,
        "height": 453,
        "source": "https://res.cloudinary.com/dstikpo7o/image/upload/v1754734106/Untitled_design__2_-removebg-preview_in95uz.png",
        "caption": "100xDev course content, learning home and project Launchpad shown on three phones"
      },
      {
        "src": "/projects/100xdev/home.png",
        "alt": "The 100xDev learning home: courses and developer content",
        "width": 459,
        "height": 864,
        "source": "https://res.cloudinary.com/dstikpo7o/image/upload/v1754716457/Screenshot_2025-08-08_123825_wg9c0w.png",
        "caption": "The 100xDev learning home: courses and developer content"
      }
    ],
    "caseStudy": {
      "context": "I built a connected learning and developer community application, from the Flutter interface to the Node.js backend.",
      "architecture": []
    },
    "slug": "100xdev",
    "title": "100xDev",
    "subtitle": "A whole learning ecosystem. Built in Flutter.",
    "summary": "I built a connected learning and developer community application, from the Flutter interface to the Node.js backend.",
    "categories": [
      "Flutter / Mobile",
      "Full Stack",
      "AI / Automation"
    ],
    "stack": [
      "Flutter",
      "Dart",
      "Bloc",
      "Node.js",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "Redis",
      "Socket.IO",
      "Hive",
      "AWS",
      "Firebase",
      "Gemini",
      "Judge0",
      "Razorpay"
    ],
    "capabilities": [
      "Application architecture",
      "Offline content",
      "Real-time",
      "HLS media"
    ],
    "featuredOrder": 1,
    "links": [
      {
        "label": "Flutter source",
        "href": "https://github.com/Althaf-codes/100xdev_frontend"
      },
      {
        "label": "Backend source",
        "href": "https://github.com/Althaf-codes/100xdev_backend"
      }
    ],
    "archiveOrder": 4
  },
  {
    "shortTitle": "HuntIQ",
    "description": "I built HuntIQ to connect job applications, tailored resumes and outreach across a Chrome extension, web experience and backend.",
    "dateRange": null,
    "status": "Independent project",
    "role": "Product & full-stack engineering",
    "projectType": "AI product",
    "featured": true,
    "ownership": "",
    "implemented": [
      "Job-search automation",
      "Profile-aware assistance",
      "Job tracking",
      "Authentication and subscriptions",
      "Usage and entitlement management"
    ],
    "planned": [],
    "media": [],
    "caseStudy": {
      "context": "I built HuntIQ to connect job applications, tailored resumes and outreach across a Chrome extension, web experience and backend.",
      "architecture": []
    },
    "slug": "huntiq",
    "title": "HuntIQ",
    "subtitle": "Less repetition. More possibility.",
    "summary": "I built HuntIQ to connect job applications, tailored resumes and outreach across a Chrome extension, web experience and backend.",
    "categories": [
      "Full Stack",
      "Web / Frontend",
      "AI / Automation"
    ],
    "stack": [
      "Fastify",
      "Node.js",
      "PostgreSQL",
      "Prisma",
      "Redis",
      "Gemini",
      "OpenAI",
      "Claude"
    ],
    "capabilities": [
      "Browser automation",
      "AI workflows",
      "Subscriptions",
      "Entitlements"
    ],
    "featuredOrder": 2,
    "links": [],
    "archiveOrder": 1
  },
  {
    "shortTitle": "Video on demand",
    "description": "I built a Flutter streaming experience and the AWS pipeline that turns uploaded videos into adaptive HLS playback.",
    "dateRange": null,
    "status": "Independent project",
    "role": "Product development",
    "projectType": "Application",
    "featured": true,
    "ownership": "",
    "implemented": [
      "Adaptive streaming",
      "Cloud media",
      "State architecture"
    ],
    "planned": [],
    "media": [
      {
        "src": "/projects/vod/browse.png",
        "alt": "Netflix-inspired Flutter video browsing interface",
        "width": 470,
        "height": 807,
        "source": "https://github.com/Althaf-codes/Netflix-Clone-Flutter/tree/main/screenshots",
        "caption": "Netflix-inspired Flutter video browsing interface"
      },
      {
        "src": "/projects/vod/player.png",
        "alt": "Existing Flutter video player capture",
        "width": 467,
        "height": 797,
        "source": "https://github.com/Althaf-codes/Netflix-Clone-Flutter/tree/main/screenshots",
        "caption": "Existing Flutter video player capture"
      }
    ],
    "caseStudy": {
      "context": "I built a Flutter streaming experience and the AWS pipeline that turns uploaded videos into adaptive HLS playback.",
      "architecture": []
    },
    "slug": "video-on-demand",
    "title": "On-Demand Video Streaming Platform",
    "subtitle": "From upload to the first frame.",
    "summary": "I built a Flutter streaming experience and the AWS pipeline that turns uploaded videos into adaptive HLS playback.",
    "categories": [
      "Flutter / Mobile",
      "Full Stack"
    ],
    "stack": [
      "Flutter",
      "Bloc",
      "Firebase Auth",
      "Node.js",
      "MongoDB",
      "S3",
      "SQS",
      "Lambda",
      "MediaConvert",
      "HLS"
    ],
    "capabilities": [
      "Adaptive streaming",
      "Cloud media",
      "State architecture"
    ],
    "featuredOrder": 3,
    "links": [
      {
        "label": "Flutter source",
        "href": "https://github.com/Althaf-codes/Netflix-Clone-Flutter"
      },
      {
        "label": "Backend source",
        "href": "https://github.com/Althaf-codes/netflix-clone-server"
      }
    ],
    "archiveOrder": 5
  },
  {
    "shortTitle": "Complete Chat",
    "description": "I built private and group messaging with live presence, message receipts and persistent conversation history.",
    "dateRange": null,
    "status": "Independent project",
    "role": "Product development",
    "projectType": "Application",
    "featured": true,
    "ownership": "",
    "implemented": [
      "Real-time messaging",
      "Persistent history",
      "Presence"
    ],
    "planned": [],
    "media": [
      {
        "src": "/projects/chat/desktop.png",
        "alt": "Complete Chat desktop interface with conversation list and message history",
        "width": 1915,
        "height": 898,
        "source": "https://github.com/Althaf-codes/Chat-app-flutter/tree/main/screenshots",
        "caption": "Complete Chat desktop interface with conversation list and message history"
      },
      {
        "src": "/projects/chat/mobile.png",
        "alt": "Complete Chat mobile application",
        "width": 413,
        "height": 768,
        "source": "https://github.com/Althaf-codes/Chat-app-flutter/tree/main/screenshots",
        "caption": "Complete Chat mobile application"
      }
    ],
    "caseStudy": {
      "context": "I built private and group messaging with live presence, message receipts and persistent conversation history.",
      "architecture": []
    },
    "slug": "complete-chat",
    "title": "Complete Chat",
    "subtitle": "A conversation. A distributed system.",
    "summary": "I built private and group messaging with live presence, message receipts and persistent conversation history.",
    "categories": [
      "Flutter / Mobile",
      "Full Stack"
    ],
    "stack": [
      "Flutter",
      "Provider",
      "Socket.IO",
      "Node.js",
      "MongoDB",
      "Redis Pub/Sub",
      "Firebase"
    ],
    "capabilities": [
      "Real-time messaging",
      "Persistent history",
      "Presence"
    ],
    "featuredOrder": 4,
    "links": [
      {
        "label": "Flutter source",
        "href": "https://github.com/Althaf-codes/Chat-app-flutter"
      },
      {
        "label": "Backend source",
        "href": "https://github.com/Althaf-codes/Persistent-Distributed-Chat-App"
      }
    ],
    "archiveOrder": 6
  },
  {
    "shortTitle": "Vehicle Monitoring",
    "description": "I built the Flutter interface for an Arduino vehicle-monitoring prototype, connecting live sensor data, location and alerts.",
    "dateRange": null,
    "status": "Academic project",
    "role": "Team lead & Flutter developer",
    "projectType": "Application",
    "featured": false,
    "ownership": "",
    "implemented": [
      "Hardware integration",
      "Live telemetry",
      "Location"
    ],
    "planned": [],
    "media": [
      {
        "src": "/projects/vehicle/dashboard.png",
        "alt": "Vehicle Monitoring dashboard with vehicle status and telemetry",
        "width": 467,
        "height": 962,
        "source": "https://github.com/Althaf-codes/realtime-vehicle-monitoring/tree/main/screenshots",
        "caption": "Vehicle Monitoring dashboard with vehicle status and telemetry"
      }
    ],
    "caseStudy": {
      "context": "I built the Flutter interface for an Arduino vehicle-monitoring prototype, connecting live sensor data, location and alerts.",
      "architecture": [
        {
          "title": "Connecting hardware to a useful interface",
          "detail": "I led the project and built the Flutter application for an Arduino-based vehicle-monitoring prototype. Firebase connects the software to location and sensor updates, while Google Maps presents the vehicle position."
        },
        {
          "title": "Making telemetry understandable",
          "detail": "I brought vehicle status, tracking and alerts into one interface. The work connected my ECE background with mobile development: translating physical-world signals into information a person can use."
        }
      ]
    },
    "slug": "vehicle-monitoring",
    "title": "Vehicle Monitoring",
    "subtitle": "Software meets the physical world.",
    "summary": "I built the Flutter interface for an Arduino vehicle-monitoring prototype, connecting live sensor data, location and alerts.",
    "categories": [
      "Flutter / Mobile"
    ],
    "stack": [
      "Flutter",
      "Arduino",
      "Firebase",
      "Google Maps"
    ],
    "capabilities": [
      "Hardware integration",
      "Live telemetry",
      "Location"
    ],
    "links": [
      {
        "label": "Source code",
        "href": "https://github.com/Althaf-codes/realtime-vehicle-monitoring"
      }
    ],
    "archiveOrder": 7
  },
  {
    "shortTitle": "Dental App",
    "description": "I built a dental-record application around a custom interactive tooth interface, role-based access and patient filtering.",
    "dateRange": null,
    "status": "Independent project",
    "role": "Product development",
    "projectType": "Application",
    "featured": false,
    "ownership": "",
    "implemented": [
      "Specialized interfaces",
      "Role-based access",
      "Data filtering"
    ],
    "planned": [],
    "media": [
      {
        "src": "/projects/dental/overview.png",
        "alt": "Dental application showing its custom tooth interface",
        "width": 466,
        "height": 883,
        "source": "https://res.cloudinary.com/dstikpo7o/image/upload/v1754707287/Screenshot_2025-08-08_090440_hosqzq.png",
        "caption": "Dental application showing its custom tooth interface"
      },
      {
        "src": "/projects/dental/records.png",
        "alt": "The custom interactive tooth interface",
        "width": 402,
        "height": 775,
        "source": "https://res.cloudinary.com/dstikpo7o/image/upload/v1754707284/Screenshot_2024-07-16_105103_olzdz7.png",
        "caption": "The custom interactive tooth interface"
      }
    ],
    "caseStudy": {
      "context": "I built a dental-record application around a custom interactive tooth interface, role-based access and patient filtering.",
      "architecture": [
        {
          "title": "A visual interface for teeth",
          "detail": "I built a custom dental structure widget with Flutter ShapeBorder, using colour to represent recorded problems. Selecting a tooth gives the record workflow a direct visual entry point."
        },
        {
          "title": "Records and permissions",
          "detail": "I used Firebase and Provider to connect the interface to patient records. Role-based access separates a doctor’s entries from administrator access, and age-based filtering supports more focused record retrieval."
        }
      ]
    },
    "slug": "dental",
    "title": "Dental App",
    "subtitle": "An interface for a very specific job.",
    "summary": "I built a dental-record application around a custom interactive tooth interface, role-based access and patient filtering.",
    "categories": [
      "Flutter / Mobile"
    ],
    "stack": [
      "Flutter",
      "Provider",
      "Firebase",
      "Custom widgets"
    ],
    "capabilities": [
      "Specialized interfaces",
      "Role-based access",
      "Data filtering"
    ],
    "links": [
      {
        "label": "Source code",
        "href": "https://github.com/Althaf-codes/student-dental-checkup-app"
      }
    ],
    "archiveOrder": 8
  },
  {
    "shortTitle": "News App",
    "description": "I built a Flutter news reader with category filters, translation and debounced search, structured with MVVM.",
    "dateRange": null,
    "status": "Independent project",
    "role": "Product development",
    "projectType": "Developer-role exercise",
    "featured": false,
    "ownership": "",
    "implemented": [
      "MVVM",
      "Search",
      "Remote configuration"
    ],
    "planned": [],
    "media": [],
    "caseStudy": {
      "context": "I built a Flutter news reader with category filters, translation and debounced search, structured with MVVM.",
      "architecture": [
        {
          "title": "Keeping the reader in control",
          "detail": "I implemented category-based news, translation and an in-app reading flow. Search uses debouncing to avoid a request on every keystroke."
        },
        {
          "title": "Separating the application layers",
          "detail": "I used MVVM to separate the interface from data and presentation logic. Firebase handles authentication, while Remote Config supplies the country setting for the news feed."
        }
      ]
    },
    "slug": "news",
    "title": "News App",
    "subtitle": "A focused reading experience.",
    "summary": "I built a Flutter news reader with category filters, translation and debounced search, structured with MVVM.",
    "categories": [
      "Flutter / Mobile"
    ],
    "stack": [
      "Flutter",
      "MVVM",
      "Firebase Auth",
      "Remote Config"
    ],
    "capabilities": [
      "MVVM",
      "Search",
      "Remote configuration"
    ],
    "links": [
      {
        "label": "Source code",
        "href": "https://github.com/Althaf-codes/news_app_pingolearn"
      }
    ],
    "archiveOrder": 12
  },
  {
    "shortTitle": "OCR / Braille",
    "description": "I explored text recognition, text-to-Braille and Braille-to-text conversion in a Flutter application.",
    "dateRange": null,
    "status": "Independent project",
    "role": "Product development",
    "projectType": "Experiment",
    "featured": false,
    "ownership": "",
    "implemented": [
      "Camera integration",
      "Text recognition",
      "Translation"
    ],
    "planned": [],
    "media": [],
    "caseStudy": {
      "context": "I explored text recognition, text-to-Braille and Braille-to-text conversion in a Flutter application.",
      "architecture": [
        {
          "title": "Exploring different representations of text",
          "detail": "I built a Flutter experiment around OCR, Braille conversion and multilingual translation. The work brought camera input, recognition and text processing into a mobile interface."
        }
      ]
    },
    "slug": "ocr-braille",
    "title": "OCR / Braille",
    "subtitle": "Exploring different ways to read.",
    "summary": "I explored text recognition, text-to-Braille and Braille-to-text conversion in a Flutter application.",
    "categories": [
      "Flutter / Mobile",
      "AI / Automation"
    ],
    "stack": [
      "Flutter",
      "OCR",
      "Translation"
    ],
    "capabilities": [
      "Camera integration",
      "Text recognition",
      "Translation"
    ],
    "links": [
      {
        "label": "Source code",
        "href": "https://github.com/Althaf-codes/braille-and-text"
      }
    ],
    "archiveOrder": 13
  },
  {
    "shortTitle": "Dodo Documentation",
    "description": "I rebuilt a documentation frontend with MDX content, OpenAPI reference pages, generated navigation and search.",
    "dateRange": null,
    "status": "Independent recreation",
    "role": "Product development",
    "projectType": "Frontend engineering",
    "featured": false,
    "ownership": "Independent frontend recreation. Dodo Payments content and identity belong to their respective owners. No affiliation.",
    "implemented": [
      "Content architecture",
      "API rendering",
      "Search"
    ],
    "planned": [],
    "media": [
      {
        "src": "/projects/dodo/api.jpg",
        "alt": "My Dodo documentation frontend: navigation, API fields and code samples",
        "width": 1265,
        "height": 712,
        "source": "https://dodo-docs-ui.vercel.app/api-reference/addons/create-addon",
        "caption": "My Dodo documentation frontend: navigation, API fields and code samples"
      },
      {
        "src": "/projects/dodo/search.jpg",
        "alt": "Documentation search across API and content pages",
        "width": 1280,
        "height": 720,
        "source": "https://dodo-docs-ui.vercel.app/api-reference/addons/create-addon",
        "caption": "Documentation search across API and content pages"
      }
    ],
    "caseStudy": {
      "context": "I rebuilt a documentation frontend with MDX content, OpenAPI reference pages, generated navigation and search.",
      "architecture": []
    },
    "slug": "dodo-documentation",
    "title": "Dodo Documentation",
    "subtitle": "The system behind the documentation.",
    "summary": "I rebuilt a documentation frontend with MDX content, OpenAPI reference pages, generated navigation and search.",
    "categories": [
      "Web / Frontend"
    ],
    "stack": [
      "React",
      "TypeScript",
      "MDX",
      "OpenAPI",
      "MiniSearch"
    ],
    "capabilities": [
      "Content architecture",
      "API rendering",
      "Search"
    ],
    "links": [
      {
        "label": "Source code",
        "href": "https://github.com/Althaf-codes/dodo-docs-ui"
      },
      {
        "label": "Live demo",
        "href": "https://dodo-docs-ui.vercel.app/introduction"
      }
    ],
    "archiveOrder": 2
  },
  {
    "shortTitle": "ALBA Cars 360",
    "description": "I designed and built a vehicle-detail concept with a custom 72-frame interactive exterior viewer.",
    "dateRange": null,
    "status": "Independent recreation",
    "role": "Product development",
    "projectType": "Frontend concept",
    "featured": false,
    "ownership": "Independent concept. Not affiliated with or endorsed by ALBA CARS.",
    "implemented": [
      "Interaction design",
      "Progressive media",
      "Keyboard controls"
    ],
    "planned": [],
    "media": [
      {
        "src": "/projects/alba/detail.jpg",
        "alt": "My ALBA concept: Porsche vehicle photography and detail page",
        "width": 1265,
        "height": 712,
        "source": "https://alba-cars-360.vercel.app/",
        "caption": "My ALBA concept: Porsche vehicle photography and detail page"
      },
      {
        "src": "/projects/alba/viewer.jpg",
        "alt": "The custom 360-degree image-sequence viewer",
        "width": 1280,
        "height": 720,
        "source": "https://alba-cars-360.vercel.app/",
        "caption": "The custom 360-degree image-sequence viewer"
      }
    ],
    "caseStudy": {
      "context": "I designed and built a vehicle-detail concept with a custom 72-frame interactive exterior viewer.",
      "architecture": []
    },
    "slug": "alba-cars",
    "title": "ALBA Cars 360",
    "subtitle": "A closer look, without a 3D engine.",
    "summary": "I designed and built a vehicle-detail concept with a custom 72-frame interactive exterior viewer.",
    "categories": [
      "Web / Frontend"
    ],
    "stack": [
      "React",
      "TypeScript",
      "Pointer Events",
      "WebP"
    ],
    "capabilities": [
      "Interaction design",
      "Progressive media",
      "Keyboard controls"
    ],
    "links": [
      {
        "label": "Source code",
        "href": "https://github.com/Althaf-codes/alba-cars-360"
      },
      {
        "label": "Live demo",
        "href": "https://alba-cars-360.vercel.app"
      }
    ],
    "archiveOrder": 3
  },
  {
    "shortTitle": "Meatzy",
    "description": "I built a Flutter commerce experience spanning buyer, seller and local-area administration workflows.",
    "dateRange": null,
    "status": "Independent project",
    "role": "Product development",
    "projectType": "Application",
    "featured": false,
    "ownership": "",
    "implemented": [
      "Multi-role workflows",
      "Catalogues",
      "Order management"
    ],
    "planned": [],
    "media": [
      {
        "src": "/projects/meatzy/browse.png",
        "alt": "Meatzy buyer application product browsing",
        "width": 477,
        "height": 1020,
        "source": "https://github.com/Althaf-codes/Meatzy/tree/main/screenshots",
        "caption": "Meatzy buyer application product browsing"
      },
      {
        "src": "/projects/meatzy/product.png",
        "alt": "Meatzy product and shopping flow",
        "width": 467,
        "height": 956,
        "source": "https://github.com/Althaf-codes/Meatzy/tree/main/screenshots",
        "caption": "Meatzy product and shopping flow"
      }
    ],
    "caseStudy": {
      "context": "I built a Flutter commerce experience spanning buyer, seller and local-area administration workflows.",
      "architecture": [
        {
          "title": "A marketplace has more than one user",
          "detail": "I built buyer, seller and local-area administration applications with Flutter and Firebase. The buyer experience includes browsing, a cart and order tracking; the supporting applications address the other sides of the marketplace."
        },
        {
          "title": "Connecting the shopping flow",
          "detail": "I integrated Firebase authentication, Firestore and push notifications. The interesting challenge was connecting catalogues and order workflows across different roles."
        }
      ]
    },
    "slug": "meatzy",
    "title": "Meatzy",
    "subtitle": "One marketplace. Different perspectives.",
    "summary": "I built a Flutter commerce experience spanning buyer, seller and local-area administration workflows.",
    "categories": [
      "Flutter / Mobile"
    ],
    "stack": [
      "Flutter",
      "Firebase",
      "Firestore"
    ],
    "capabilities": [
      "Multi-role workflows",
      "Catalogues",
      "Order management"
    ],
    "links": [
      {
        "label": "Buyer source",
        "href": "https://github.com/Althaf-codes/Meatzy"
      },
      {
        "label": "Seller source",
        "href": "https://github.com/Althaf-codes/meatzy_seller"
      },
      {
        "label": "Admin source",
        "href": "https://github.com/Althaf-codes/Meatzy_localarea_admin"
      }
    ],
    "archiveOrder": 11
  },
  {
    "shortTitle": "Pharmacy UI",
    "description": "I recreated the Al-Mutawa Pharmacy interface in Flutter, translating its shopping screens into working UI.",
    "dateRange": null,
    "status": "Independent recreation",
    "role": "Product development",
    "projectType": "UI study",
    "featured": false,
    "ownership": "",
    "implemented": [
      "UI implementation"
    ],
    "planned": [],
    "media": [
      {
        "src": "/projects/pharmacy/browse.png",
        "alt": "My Flutter recreation of the Al-Mutawa Pharmacy shopping interface",
        "width": 474,
        "height": 871,
        "source": "https://res.cloudinary.com/dstikpo7o/image/upload/v1754707285/Screenshot_2025-08-07_200951_cqezuy.png",
        "caption": "My Flutter recreation of the Al-Mutawa Pharmacy shopping interface"
      }
    ],
    "caseStudy": {
      "context": "I recreated the Al-Mutawa Pharmacy interface in Flutter, translating its shopping screens into working UI.",
      "architecture": [
        {
          "title": "Recreating the shopping experience",
          "detail": "I translated the reference screenshots into a Flutter interface, focusing on layout, product presentation and navigation. This is an independent UI recreation of Al-Mutawa Pharmacy."
        }
      ]
    },
    "slug": "pharmacy",
    "title": "Pharmacy UI",
    "subtitle": "A study in interface implementation.",
    "summary": "I recreated the Al-Mutawa Pharmacy interface in Flutter, translating its shopping screens into working UI.",
    "categories": [
      "Flutter / Mobile"
    ],
    "stack": [
      "Flutter",
      "Dart"
    ],
    "capabilities": [
      "UI implementation"
    ],
    "links": [
      {
        "label": "Source code",
        "href": "https://github.com/Althaf-codes/almutawa_pharmacy_clone"
      }
    ],
    "archiveOrder": 9
  },
  {
    "shortTitle": "SNKR Store UI",
    "description": "I recreated the SNKR Store interface in Flutter, connecting the shopping UI with Provider state management.",
    "dateRange": null,
    "status": "Independent recreation",
    "role": "Product development",
    "projectType": "UI study",
    "featured": false,
    "ownership": "",
    "implemented": [
      "UI implementation"
    ],
    "planned": [],
    "media": [
      {
        "src": "/projects/snkr/browse.png",
        "alt": "My Flutter recreation of the SNKR Store interface",
        "width": 474,
        "height": 874,
        "source": "https://res.cloudinary.com/dstikpo7o/image/upload/v1754707285/Screenshot_2025-08-07_204052_eyduzx.png",
        "caption": "My Flutter recreation of the SNKR Store interface"
      }
    ],
    "caseStudy": {
      "context": "I recreated the SNKR Store interface in Flutter, connecting the shopping UI with Provider state management.",
      "architecture": [
        {
          "title": "From visual reference to interactive UI",
          "detail": "I recreated the SNKR Store shopping interface in Flutter and used Provider to manage its UI state. The focus was faithful interface implementation and a connected browsing experience."
        }
      ]
    },
    "slug": "snkr",
    "title": "SNKR Store UI",
    "subtitle": "A study in interface implementation.",
    "summary": "I recreated the SNKR Store interface in Flutter, connecting the shopping UI with Provider state management.",
    "categories": [
      "Flutter / Mobile"
    ],
    "stack": [
      "Flutter",
      "Dart"
    ],
    "capabilities": [
      "UI implementation"
    ],
    "links": [
      {
        "label": "Source code",
        "href": "https://github.com/Althaf-codes/snkr_clone"
      }
    ],
    "archiveOrder": 10
  }
];

const hunt = content.find(p=>p.slug==='huntiq')!;
hunt.media = [{src:'/projects/huntiq/product.png',alt:'HuntIQ product artwork showing its job-search dashboard and connected workflows',width:1536,height:1024,caption:'HuntIQ — application automation, AI documents and job tracking.',source:'User supplied: huntiq-og-image.png'}];
hunt.featuredOrder=1;
content.find(p=>p.slug==='100xdev')!.featuredOrder=2;
const demos: Record<string,string> = {
  huntiq:'https://huntiq.in',
  'alba-cars':'https://alba-cars-360.vercel.app/',
  'dodo-documentation':'https://dodo-docs-ui.vercel.app/',
  snkr:'https://althaf-codes.github.io/snkr_clone_web/',
  pharmacy:'https://althaf-codes.github.io/almutawa-pharmacy-web/',
};
for(const project of content){
  if(demos[project.slug]) project.links=[...project.links.filter(link=>link.label!=='Live demo'),{label:'Live demo',href:demos[project.slug]}];
}
export const uiStudies = [
  {slug:'acme',title:'Acme Inc.',summary:'A workspace UI study with tasks, notes and team messages.',demo:'https://althaf-codes.github.io/acme_inc_ui/',image:'/projects/studies/acme.jpg'},
  {slug:'paypal',title:'PayPal UI',summary:'An independent recreation of a wallet and payments interface.',demo:'https://althaf-codes.github.io/paypal_ui/',image:'/projects/studies/paypal.jpg'},
  {slug:'services',title:'Service Marketplace',summary:'A mobile service-discovery interface with categories and listings.',demo:'https://althaf-codes.github.io/service_marketplace_ui/',image:'/projects/studies/services.jpg'},
] satisfies {slug:string;title:string;summary:string;demo:string;image:string}[];
export const projects: Project[] = content.map(p => ({...p, caseStudy: stories[p.slug] ?? p.caseStudy})).sort((a,b)=>(a.archiveOrder ?? 99)-(b.archiveOrder ?? 99));
export const devMedia = projects.find(p=>p.slug==='100xdev')!.media[0];
export const getProject = (slug: string) => projects.find(p => p.slug === slug);
