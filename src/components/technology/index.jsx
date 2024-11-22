import Image from "next/image";
import React from "react";

const Technologies = ({ className, iconClassName }) => {
  const icons = [
    { id: 1, icon: "google.svg", title: "Google" },
    { id: 2, icon: "google-photos.svg", title: "Google Photos" },
    { id: 3, icon: "flutter.svg", title: "Flutter" },
    { id: 4, icon: "photoshop.svg", title: "Photoshop" },
    { id: 5, icon: "pdf.svg", title: "PDF" },
    { id: 6, icon: "windows.svg", title: "Windows" },
    { id: 7, icon: "dot-net.svg", title: ".NET" },
    { id: 8, icon: "api.svg", title: "API" },
    { id: 9, icon: "godaddy.svg", title: "GoDaddy" },
    { id: 10, icon: "aws.svg", title: "AWS" },
    { id: 11, icon: "oracle.svg", title: "Oracle" },
    { id: 12, icon: "sql.svg", title: "SQL" },
    { id: 13, icon: "html5.svg", title: "HTML5" },
    { id: 14, icon: "analytics.svg", title: "Analytics" },
    { id: 15, icon: "nodejs.svg", title: "Node.js" },
    { id: 16, icon: "react.svg", title: "React" },
    { id: 17, icon: "dotnet.svg", title: ".net" },
    { id: 18, icon: "whatsapp.svg", title: "whatsapp" },
    { id: 19, icon: "ios.svg", title: "iOS" },
    { id: 20, icon: "android.svg", title: "Android" },
    { id: 21, icon: "oauth.svg", title: "OAuth" },
    { id: 22, icon: "css3.svg", title: "CSS3" },
    { id: 23, icon: "github.svg", title: "GitHub" },
    { id: 24, icon: "angular.svg", title: "Angular" },
    { id: 25, icon: "paypal.svg", title: "PayPal" },
    { id: 26, icon: "xml.svg", title: "XML" },
    { id: 27, icon: "html5.svg", title: "HTML5" },
    { id: 28, icon: "salesforce.svg", title: "Salesforce" },
  ];
  return (
    <div
      className={`h-fit md:h-screen   flex flex-col items-center py-14 ${className}`}
    >
      <h3 className="text-center leading-9 md:leading-[58px] text-2xl md:text-4xl font-medium">
        Technologies, services and <br /> Subscriptions we work with
      </h3>
      <div className="grid grid-cols-4 md:grid-cols-7 gap-y-16 mt-20 w-full">
        {icons.map((tech) => (
          <div key={tech.id} className="flex text-center justify-center">
            <Image
              src={`/assets/svg/${tech.icon}`}
              alt={tech.title}
              width={40}
              height={40}
              className={` w-[30px] md:w-[40px] ${iconClassName} `}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
