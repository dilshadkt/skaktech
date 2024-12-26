export const NavBarData = [
  { id: 1, title: "Company", path: "/company" },
  { id: 5, title: "About Us", path: "/about" },
  { id: 2, title: "Services", path: "/services" },
  {
    id: 3,
    title: "Products",
    hasDropdown: true,
    path:'#',
    dropdownItems: [
      { id: 1, title: "WareHouse360", subtitle:'Warehouse Management System', path: "/products/WareHouse360" ,img:'productimg-1.png' },
      { id: 2, title: "TrackSuite", subtitle:'Product Sales, Service and AMC Management.', path: "/products/TrackSuite",img:'productimg-2.png' },
      { id: 3, title: "Pepper", subtitle:'Restaurant Point of sale system.', path: "/products/Pepper",img:'productimg-3.png' },
      { id: 4, title: "QTrack", subtitle:'Queue Management system', path: "/products/QTrack",img:'productimg-4.png' },
      { id: 5, title: "TradeEzy", subtitle:'Sales and Inventory management system', path: "/products/TradeEzy",img:'productimg-5.png' },
      
    ],
  },
  { id: 4, title: "Careers", path: "/careers" },
  { id: 6, title: "Contact Us", path: "/contact" },
];

export const  products = [
   
    { id: 1, title: "WareHouse360", subtitle:'Warehouse Management System' ,img:'productimg-1.png' },
    { id: 2, title: "TrackSuite", subtitle:'Product Sales, Service and AMC Management.',img:'productimg-2.png' },
    { id: 3, title: "Pepper", subtitle:'Restaurant Point of sale system.', img:'productimg-3.png' },
    { id: 4, title: "QTrack", subtitle:'Queue Management system',img:'productimg-4.png' },
    { id: 5, title: "TradeEzy", subtitle:'Sales and Inventory management system', img:'productimg-5.png' },
    
  
]



export const services = [
  { id: 7, title: "Software Development" },
  { id: 8, title: "Low-code Development Platform" },
  { id: 9, title: "Robotic Process Automation (RPA)" },
  { id: 10, title: "Cloud Computing Services" },
];
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import XIcon from "@mui/icons-material/X";
import { patch } from "@mui/material";
export const socialMedia = [
  { id: 11, path: "https://www.facebook.com/Skaktech", Icon: FacebookIcon },
  { id: 12, path: "https://www.instagram.com/Skaktech/", Icon: InstagramIcon },
  {
    id: 13,
    path: "https://www.youtube.com/channel/UC0Yzi_wZ43IPTNjZIQAPtd",
    Icon: YouTubeIcon,
  },
  { id: 14, path: "https://twitter.com/skaktech", Icon: XIcon },
];

export const industriesWeServe = [
  { id: 15, icon: "first-aid-kit.png", title: "Healthcare" },
  { id: 16, icon: "finance.svg", title: "Finace" },
  { id: 17, icon: "retail.svg", title: "Retail" },
  { id: 18, icon: "real-estate.svg", title: "Real Estate" },
  { id: 19, icon: "education.svg", title: "Education" },
  { id: 20, icon: "govt.svg", title: "Government" },
  { id: 21, icon: "tele-communication.svg", title: "Tele Communications" },
  { id: 22, icon: "energy.svg", title: "Energy and Utilities" },
  { id: 23, icon: "transportation.svg", title: "Transportation and Logistics" },
  { id: 24, icon: "media.svg", title: "Entertainment and Media" },
  { id: 25, icon: "travel.svg", title: "Travel and Hospitality" },
  { id: 26, icon: "challenges.svg", title: "All Challenges Accepted" },
];
export const technologies = [
  {
    id: 30,
    icon: "dotnet.png",
  },
  {
    id: 31,
    icon: "oracle.png",
  },
  {
    id: 32,
    icon: "flutter.png",
  },
  {
    id: 33,
    icon: "api.png",
  },
  {
    id: 34,
    icon: "android.png",
  },
  {
    id: 35,
    icon: "ios.png",
  },
  {
    id: 36,
    icon: "angular.png",
  },
  {
    id: 37,
    icon: "css.png",
  },
  {
    id: 38,
    icon: "git.png",
  },
  {
    id: 39,
    icon: "aws.png",
  },
  {
    id: 40,
    icon: "Vector.png",
  },
  {
    id: 41,
    icon: "sql.png",
  },
  {
    id: 42,
    icon: "html.png",
  },
  {
    id: 43,
    icon: "js.png",
  },
  {
    id: 44,
    icon: "react.png",
  },
  {
    id: 45,
    icon: "json.png",
  },
];

export const servicesList = [
  {
    id: 46,
    image: "service1.svg",
    title: "Software Development",
    content:
      "At our company, we specialize in software development services that cater to the unique needs of businesses across various industries. Our expert team designs, develops, and maintains custom software solutions that enhance efficiency, streamline operations, and drive innovation. From web and mobile applications to enterprise software systems, we deliver high-quality, scalable, and secure software tailored to meet your specific requirements, ensuring optimal performance and a seamless user experience",
  },
  {
    id: 47,
    image: "service2.svg",
    title: "Low-code development platform",
    content:
      "OutSystems is a leading low-code development platform that enables rapid application development with minimal hand-coding. It provides a visual development environment where developers can design and build applications using drag-and-drop components, pre-built templates, and reusable modules. This approach significantly speeds up the development process, reduces the complexity of coding, and allows both professional developers and business users to create and deploy apps quickly.",
  },
  {
    id: 48,
    image: "service3.svg",
    title: "Robotic process automation (RPA)",
    content:
      'RPA technology that uses software robots, or "bots," to automate repetitive, rule-based tasks and processes across various applications and systems. RPA helps businesses improve efficiency by reducing manual workloads, minimizing errors, and speeding up task execution, allowing human employees to focus on more strategic and value-added activities. It can be applied in numerous industries for tasks such as data entry, invoice processing, customer service, and reporting. By seamlessly integrating with existing software and systems, RPA provides a cost-effective and scalable solution for digital transformation, enhancing productivity and operational agility.',
  },
  {
    id: 49,
    image: "service4.svg",
    title: "Cloud computing services",
    content:
      "Cloud computing services refer to a range of on-demand services provided over the internet that allow individuals and businesses to access computing resources—such as servers, storage, databases, networking, software, and analytics—without having to own or manage physical infrastructure. These services are provided by cloud service providers like Amazon Web Services (AWS), Microsoft Azure, Google Cloud Platform (GCP), and others, offering flexibility, scalability, and cost efficiency.",
  },
];

export const partners = [
  {
    id: 50,
    icon: "corporate-affairs.png",
  },
  {
    id: 51,
    icon: "stip.png",
  },
  {
    id: 52,
    icon: "startup.png",
  },
  {
    id: 53,
    icon: "startup-india.png",
  },
  {
    id: 54,
    icon: "cafit.png",
  },
  {
    id: 55,
    icon: "bni.png",
  },
];

export const clients = [
  {
    id: 56,
    icon: "kent.png",
  },
  {
    id: 57,
    icon: "tallyglobe.png",
  },
  {
    id: 58,
    icon: "talabat.png",
  },
  {
    id: 59,
    icon: "lmti.png",
  },
  {
    id: 60,
    icon: "technocare.png",
  },

];

export const careers = [
  {
    id: 62,
    title: "designer",
    details: [
      {
        role: "UI/UX Designer",
        postions: "15 postion",
      },
      {
        role: "UI/UX Designer",
        postions: "15 postion",
      },
    ],
  },
  {
    id: 63,
    title: "marketing",
    details: [
      {
        role: "Digital Marketer",
        postions: "01 postion",
      },
    ],
  },
  {
    id: 64,
    title: "developer",
    details: [
      {
        role: "Full Stack Developer",
        postions: "01 postion",
      },
    ],
  },
  {
    id: 65,
    title: "others",
    details: [
      {
        role: "BDO",
        postions: "01 postion",
      },
    ],
  },
];

export const sliders = [
  { id: 1, image: "slider-1.svg" },
  { id: 2, image: "s2.svg" },
  { id: 3, image: "s3.svg" },
  { id: 4, image: "amico.svg" },
];
export const newsletterList = [
  "Insights & trends",
  "Product & solution news",
  "Offers",
  "Company updates",
  "Customer stories",
];
