export const NavBarData = [
  
  
  {
    id: 3,
    title: "Products",
    hasDropdown: true,
    path: '#',
    dropdownItems: [
      { id: 1, title: "WareHouse360", subtitle: 'Warehouse Management System', path: "/products/WareHouse360", img: 'productimg-1.png' },
      { id: 2, title: "TrackSuite", subtitle: 'Product Sales, Service and AMC Management.', path: "/products/TrackSuite", img: 'productimg-2.png' },
      { id: 3, title: "Pepper", subtitle: 'Restaurant Point of sale system.', path: "/products/Pepper", img: 'productimg-3.png' },
      { id: 4, title: "QTrack", subtitle: 'Queue Management system', path: "/products/QTrack", img: 'productimg-4.png' },
      { id: 5, title: "TradeEzy", subtitle: 'Sales and Inventory management system', path: "/products/TradeEzy", img: 'productimg-5.png' },

    ],
  },
  { id: 4, title: "Careers", path: "/careers" },
  { id: 6, title: "Contact Us", path: "/contact" },
];

export const products = [

  {
    id: 1,
    title: "WareHouse360",
    subtitle: "Warehouse Management System",
    img: "warehouse360.jpg",
    features: [
      {
        feature: "Inventory Management:",
        desc: "Tracks real-time inventory levels, ensuring accurate stock counts and reducing overstock or stockouts."
      },
      {
        feature: "Order Management:",
        desc: "Manages order fulfillment processes, from receiving and picking to packing and shipping, ensuring timely deliveries."
      },
      {
        feature: "Barcode/RFID Scanning:",
        desc: "Enhances accuracy and speed in inventory tracking and order processing using barcode or RFID technology."
      },
      {
        feature: "Warehouse Layout Optimization:",
        desc: "Optimizes the storage layout for faster picking, reducing travel time, and increasing warehouse efficiency."
      },
      {
        feature: "Real-Time Tracking:",
        desc: "Provides real-time updates on inventory and order statuses, allowing users to monitor operations effectively."
      },
      {
        feature: "Shipping Integration:",
        desc: "Integrates with multiple carriers and shipping providers to streamline label printing and shipping processes."
      },
      {
        feature: "Automated Replenishment:",
        desc: "Automates stock replenishment based on predefined thresholds, reducing the risk of stockouts."
      },
      {
        feature: "Returns Management:",
        desc: "Manages product returns efficiently, streamlining reverse logistics processes."
      },
      {
        feature: "Reporting and Analytics:",
        desc: "Offers insights into warehouse operations, inventory turnover, and order accuracy, helping with decision-making."
      },
      {
        feature: "Customer Portal:",
        desc: "Provides clients with access to real-time data, order tracking, and reporting, enhancing transparency and communication."
      }
    ],
    about: "A 3PL Warehouse Management System (WMS) is a software solution designed to streamline and optimize warehouse operations for third-party logistics providers. It helps manage inventory, track orders, and improve efficiency across various warehouse functions, including receiving, storing, picking, packing, and shipping. By automating processes, a 3PL WMS enhances accuracy, reduces operational costs, and improves customer satisfaction. It offers real-time visibility into stock levels and order statuses, enabling better decision-making. Additionally, the system integrates seamlessly with other supply chain management tools, ensuring smooth communication between warehouse teams, clients, and vendors, ultimately boosting overall supply chain performance."
  },
  
  {
    id: 2,
    title: "TrackSuite",
    subtitle: "Product Sales, Service, and AMC Management",
    img: "tracksuit.jpg",
    features: [
      {
        feature: "Sales Tracking:",
        desc: "Manages the entire sales process, from lead generation to order completion, ensuring smooth transactions and customer engagement."
      },
      {
        feature: "Service Management:",
        desc: "Allows scheduling, tracking, and managing product servicing, including regular maintenance and troubleshooting."
      },
      {
        feature: "AMC Management:",
        desc: "Tracks annual maintenance contracts, including renewals, billing, and service history, ensuring timely contract management."
      },
      {
        feature: "Customer Management:",
        desc: "Stores customer details, product purchases, service histories, and AMC contract data for better service delivery and customer relationship management."
      },
      {
        feature: "Real-Time Notifications:",
        desc: "Sends reminders for service appointments, AMC renewals, and warranty expiration, ensuring no service deadlines are missed."
      },
      {
        feature: "Invoice and Billing:",
        desc: "Automates invoicing for product sales, services, and AMC contracts, reducing manual effort and improving accuracy."
      },
      {
        feature: "Service History Tracking:",
        desc: "Maintains a complete history of all services and repairs for each product, allowing easy reference for future service needs."
      },
      {
        feature: "Performance Analytics:",
        desc: "Provides insights into sales trends, service efficiency, and AMC performance to optimize operations and decision-making."
      },
      {
        feature: "Resource Allocation:",
        desc: "Helps schedule and assign technicians based on availability and expertise, optimizing resource usage for service calls."
      },
      {
        feature: "Mobile Access:",
        desc: "Allows field technicians to access and update service records, schedules, and customer information via mobile devices for real-time updates."
      }
    ],
    about:'A Product Sales, Service, and AMC (Annual Maintenance Contract) Management application is a comprehensive software solution designed to streamline the sales, servicing, and maintenance processes for businesses. It enables the management of product sales, tracking of installations, and scheduling of regular services. The application also handles AMC contracts, including renewals, billing, and service history. By automating these processes, the application improves operational efficiency, enhances customer satisfaction, and ensures timely service delivery. It provides businesses with real-time insights into product performance, service requests, and contract statuses, helping optimize resource allocation and customer relationship management.'
  },
  {
    id: 3,
    title: "Pepper",
    subtitle: "Restaurant Point of Sale System",
    img: "pepper.jpg",
    features: [
      {
        feature: "Order Management:",
        desc: "Quickly inputs and processes customer orders, sending them directly to the kitchen for faster service."
      },
      {
        feature: "Payment Processing:",
        desc: "Supports various payment methods, including credit/debit cards, mobile payments, and cash, ensuring smooth transactions."
      },
      {
        feature: "Inventory Tracking:",
        desc: "Monitors stock levels in real-time and alerts for reordering to prevent shortages and reduce waste."
      },
      {
        feature: "Employee Management:",
        desc: "Tracks employee schedules, clock-ins/outs, and performance, improving staff management."
      },
      {
        feature: "Sales Reporting:",
        desc: "Generates detailed reports on sales, revenue, and performance, helping owners make data-driven decisions."
      },
      {
        feature: "Customer Management:",
        desc: "Stores customer preferences and order history to personalize service and enhance loyalty programs."
      },
      {
        feature: "Table Management:",
        desc: "Organizes seating arrangements, tracks table status, and helps optimize seating efficiency during busy times."
      },
      {
        feature: "Promotions and Discounts:",
        desc: "Easily applies discounts, promotions, and special offers, enhancing customer satisfaction and sales."
      },
      {
        feature: "Split Billing:",
        desc: "Allows customers to split the bill easily, simplifying the payment process for groups."
      },
      {
        feature: "Kitchen Display System:",
        desc: "Directly sends orders to the kitchen, reducing errors and improving communication between front-of-house and kitchen staff."
      }
    ],
    about:'A Restaurant Point of Sale (POS) system is a technology solution designed to streamline restaurant operations, including order taking, payment processing, and inventory management. It enables servers to input orders quickly, track customer preferences, and ensure accurate billing. The system integrates with kitchen displays to send orders directly to the kitchen, reducing errors and wait times. Additionally, it manages inventory, tracks stock evels, and helps with reordering supplies. With features like employee management, sales reporting, and customer loyalty programs, a Restaurant POS system enhances efficiency, improves customer service, and provides valuable insights for better decision-makingand business growth.'
  },
  {
    id: 4,
    title: "QTrack",
    subtitle: "Queue Management System",
    img: "qtrack.jpg",
    features: [
      {
        feature: "Ticketing System",
        desc: "Issues tickets to customers, allowing them to join the queue without waiting in line physically."
      },
      {
        feature: "Real-Time Queue Monitoring",
        desc: "Tracks customer queues in real-time, providing visibility into wait times and queue length."
      },
      {
        feature: "Queue Alerts",
        desc: "Sends notifications or alerts to customers when it's their turn, reducing the need for physical monitoring."
      },
      {
        feature: "Virtual Queuing",
        desc: "Allows customers to join the queue remotely via mobile apps or SMS, improving convenience."
      },
      {
        feature: "Customer Prioritization",
        desc: "Enables the prioritization of certain customers, such as VIPs or those with appointments."
      },
      {
        feature: "Queue Analytics",
        desc: "Provides reports and insights on queue performance, wait times, and service efficiency for better decision-making."
      },
      {
        feature: "Digital Signage Integration",
        desc: "Displays queue status and instructions on screens in waiting areas to keep customers informed."
      },
      {
        feature: "Multi-Location Management",
        desc: "Manages queues across multiple locations or branches, centralizing operations for businesses with a wide reach."
      },
      {
        feature: "Appointment Scheduling",
        desc: "Integrates appointment booking, allowing customers to schedule service times and avoid long queues."
      },
      {
        feature: "Staff Performance Tracking",
        desc: "Monitors staff service times and performance, helping businesses optimize resource allocation and improve service quality."
      }
    ],
    about: "A Queue Management System (QMS) is a technology solution designed to streamline customer flow in businesses or service centers by managing and organizing queues efficiently. It helps businesses minimize wait times, improve customer satisfaction, and enhance operational efficiency. The system uses digital signage, mobile apps, or ticket-based systems to guide customers through the process, alerting them when it's their turn. It can track the number of customers, monitor service times, and provide real-time data to optimize staffing. Additionally, QMS enables businesses to prioritize certain customers, manage appointments, and reduce congestion, creating a smoother and more organized experience for both customers and staff."
  },
  {
    id: 5,
    title: "TradeEzy",
    subtitle: "Sales and Inventory Management System",
    img: "tradeezy.jpg",
    features: [
      {
        feature: "Real-Time Inventory Tracking",
        desc: "Monitors stock levels in real-time, providing accurate data on available products."
      },
      {
        feature: "Sales Order Management",
        desc: "Tracks sales orders from creation to fulfillment, ensuring timely and accurate delivery."
      },
      {
        feature: "Automated Stock Updates",
        desc: "Automatically updates inventory levels after each sale, preventing stock discrepancies."
      },
      {
        feature: "Barcode Scanning",
        desc: "Integrates barcode scanning for quick and accurate product tracking during sales and inventory management."
      },
      {
        feature: "Reorder Alerts",
        desc: "Sends notifications when inventory levels are low, helping businesses reorder products before they run out."
      },
      {
        feature: "Sales Reporting",
        desc: "Provides detailed reports on sales performance, trends, and profitability to guide decision-making."
      },
      {
        feature: "Multi-Location Support",
        desc: "Manages inventory and sales across multiple locations or warehouses, centralizing control."
      },
      {
        feature: "Supplier Management",
        desc: "Tracks supplier information, orders, and deliveries, ensuring timely stock replenishment."
      },
      {
        feature: "Return and Refund Management",
        desc: "Handles returns and refunds efficiently, updating stock levels and sales records accordingly."
      },
      {
        feature: "Integration with Accounting Systems",
        desc: "Syncs sales data with accounting software for seamless financial management and reporting."
      }
    ],
    about: "A Sales and Inventory Management System is a software solution designed to streamline and automate the processes of tracking sales and managing inventory levels. It helps businesses maintain accurate records of stock, monitor product movement, and prevent stockouts or overstocking. The system provides real-time data on sales, inventory levels, and order status, allowing businesses to make informed decisions. It integrates sales transactions with inventory updates, automating the process and improving accuracy. Additionally, it supports reporting, reorder alerts, and supplier management, ensuring efficient stock replenishment and helping businesses optimize resources, reduce costs, and improve customer satisfaction."
  }


]

export const serviceDropDown = [
  {
    name: "Software Development",
    id: "softwaredevelopment",
  },
  {
    name: "Low-code development platform",
    id: "lowcode",
  },
  {
    name: "Robotic process automation (RPA)",
    id: "robotics",
  },
  {
    name: "Cloud computing services",
    id: "cloudcomputing",
  },
  {
    name: "Call Centre Outsourcing",
    id: "callcentreoutsourcing",
  },
  {
    name: "Helpdesk outsourcing",
    id: "helpdeskoutsourcing",
  },
  {
    name: "Virtual IT partnering",
    id: "virtualitpartnering",
  },
  {
    name: "Outsource Legacy Software Support",
    id: "legacysoftwaresupport",
  },
];



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
  { id: 16, icon: "finance.svg", title: "Finance" },
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

export const  caseStudyContent = [
  {
    "heading": "Streamlined Inventory Tracking",
    "description": "Implemented real-time inventory tracking using barcode or RFID technology, reducing manual errors and ensuring accurate stock levels."
  },
  {
    "heading": "Optimized Warehouse Layout",
    "description": "Redesigned the warehouse layout to improve space utilization, increase workflow efficiency, and reduce time spent on product retrieval."
  },
  {
    "heading": "Automated Order Fulfillment",
    "description": "Introduced automated systems for order picking and packing, improving speed and accuracy in fulfilling customer orders."
  },
  {
    "heading": "Advanced Reporting and Analytics",
    "description": "Developed a reporting system to track inventory turnover, product demand trends, and warehouse performance, providing actionable insights for better decision-making."
  },
  {
    "heading": "Enhanced Employee Productivity",
    "description": "Integrated mobile devices and warehouse management software to streamline communication and task management, enabling employees to work more efficiently."
  }
]

export const allProductsData = [
  {
    heading:"WareHouse360",
   
    img:'serviceimg-1',
    desc1:"A 3PL Warehouse Management System (WMS) is a software solution designed to streamline and optimize warehouse operations for third-party logistics providers. It helps manage inventory, track orders, and improve efficiency across various warehouse functions, including receiving, storing, picking, packing, and shipping. By automating processes, a 3PL WMS enhances accuracy, reduces operational costs, and improves customer satisfaction. It offers real-time visibility into stock levels and order statuses, enabling better decision-making. Additionally, the system integrates seamlessly with other supply chain management tools, ensuring smooth communication between warehouse teams, clients, and vendors, ultimately boosting overall supply chain performance.",
  },
  {
    heading:"TrackSuite",
    
    img:'serviceimg-1',
    desc1:"A Product Sales, Service, and AMC (Annual Maintenance Contract) Management application is a comprehensive software solution designed to streamline the sales, servicing, and maintenance processes for businesses. It enables the management of product sales, tracking of installations, and scheduling of regular services. The application also handles AMC contracts, including renewals, billing, and service history. By automating these processes, the application improves operational efficiency, enhances customer satisfaction, and ensures timely service delivery. It provides businesses with real-time insights into product performance, service requests, and contract statuses, helping optimize resource allocation and customer relationship management.",
  },
  {
    heading:"Pepper",
   
    img:'serviceimg-1',
    desc1:"A Restaurant Point of Sale (POS) system is a technology solution designed to streamline restaurant operations, including order taking, payment processing, and inventory management. It enables servers to input orders quickly, track customer preferences, and ensure accurate billing. The system integrates with kitchen displays to send orders directly to the kitchen, reducing errors and wait times. Additionally, it manages inventory, tracks stock levels, and helps with reordering supplies. With features like employee management, sales reporting, and customer loyalty programs, a Restaurant POS system enhances efficiency, improves customer service, and provides valuable insights for better decision-makingand business growth.",
  },
  {
    heading:"QTrack",
   
    img:'serviceimg-1',
    desc1:"A Queue Management System (QMS) is a technology solution designed to streamline customer flow in businesses or service centers by managing and organizing queues efficiently. It helps businesses minimize wait times, improve customer satisfaction, and enhance operational efficiency. The system uses digital signage, mobile apps, or ticket-based systems to guide customers through the process, alerting them when it's their turn. It can track the number of customers, monitor service times, and provide real-time data to optimize staffing. Additionally, QMS enables businesses to prioritize certain customers, manage appointments, and reduce congestion, creating a smoother and more organized experience for both customers and staff.",
  },
  {
    heading:"TradeEzy",

    img:'serviceimg-1',
    desc1:"A Sales and Inventory Management System is a software solution designed to streamline and automate the processes of tracking sales and managing inventory levels. It helps businesses maintain accurate records of stock, monitor product movement, and prevent stockouts or overstocking. The system provides real-time data on sales, inventory levels, and order status, allowing businesses to make informed decisions. It integrates sales transactions with inventory updates, automating the process and improving accuracy. Additionally, it supports reporting, reorder alerts, and supplier management, ensuring efficient stock replenishment and helping businesses optimize resources, reduce costs, and improve customer satisfaction.",
  },

]

export const sliderData = [
  {
    id:1,
    heading:"WareHouse360",
    desc:"A warehouse management system"
  },
  {
    id:1,
    heading:"TrackSuite",
    desc:"A warehouse management system"
  },
  {
    id:1,
    heading:"Pepper",
    desc:"A warehouse management system"
  },
  {
    id:1,
    heading:"QTrack",
    desc:"A warehouse management system"
  },
  {
    id:5,
    heading:"TradeEzy",
    desc:"A warehouse management system"
  },
]

export const sliderItems = [
  {
    id:1,
    img:"AllProductsBanner"
  },
  {
    id:2,
    img:"productImg2"
  },
  {
    id:3,
    img:"productImg3"
  },
  {
    id:4,
    img:"productImg4"
  },
]