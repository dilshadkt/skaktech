import React from "react";

const PrivacyPolicy = () => {
  return (
    <section className="flex flex-col mt-[100px] gap-y-10 pb-10 text-sm md:text-base  leading-9 px-5 md:px-10 lg:px-12 2xl:px-20">
      <div className="flex flex-col ">
        <h3 className=" text-2xl md:text-4xl font-semibold text-primary">
          Privacy Policy
        </h3>
        <p className=" mt-3 md:mt-8">
          At www.bourgeontech.com, one of our main priorities is the privacy of
          our visitors. This Privacy Policy document contains types of
          information that is collected and recorded by www.bourgeontech.com and
          how we use it.
        </p>
        <p>
          If you have additional questions or require more information about our
          Privacy Policy, do not hesitate to contact us through email at
          info@bourgeontech.com.
        </p>
      </div>
      <div className="flex flex-col">
        <h4 className="text-xl md:text-2xl mb-3 font-semibold">Log Files</h4>
        <p>
          www.bourgeontech.com follows a standard procedure of using log files.
          These files log visitors when they visit websites. All hosting
          companies do this and a part of hosting services’s analytics. The
          information collected by log files include internet protocol (IP)
          addresses, browser type, Internet Service Provider (ISP), date and
          time stamp, referring/exit pages, and possibly the number of clicks.
          These are not linked to any information that is personally
          identifiable. The purpose of the information is for analyzing trends,
          administering the site, tracking user’s movement on the website, and
          gathering demographic information.
        </p>
      </div>
      <div className="flex flex-col">
        <h4 className="text-xl md:text-2xl mb-3 font-semibold">
          Our Advertising Partners
        </h4>
        <p>
          Some of advertisers on our site may use cookies and web beacons. Our
          advertising partners include:
        </p>
        <ul>
          <li>Google</li>
        </ul>
        <p>
          Each of our advertising partners has their own Privacy Policy for
          their website. For easier access, an updated and hyperlinked resource
          is maintained here:
        </p>
      </div>
      <div className="flex flex-col">
        <h4 className="text-xl md:text-2xl mb-3 font-semibold">
          Privacy Policies
        </h4>
        <p>
          You may consult this list to find the Privacy Policy for each of the
          advertising partners of www.bourgeontech.com.
        </p>
        <p>
          Third-party ad servers or ad networks uses technologies like cookies,
          JavaScript, or Web Beacons that are used in their respective
          advertisements and links that appear on www.bourgeontech.com, which
          are sent directly to user’s browser. They automatically receive your
          IP address when this occurs. These technologies are used to measure
          the effectiveness of their advertising campaigns and/or to personalize
          the advertising content that you see on websites that you visit.
        </p>
        <p>
          Note that www.bourgeontech.com has no access to or control over these
          cookies that are used by third-party advertisers.
        </p>
      </div>
      <div className="flex flex-col">
        <h4 className="text-xl md:text-2xl mb-3 font-semibold">
          Third Part Privacy Policies
        </h4>
        <p>
          www.bourgeontech.com’s Privacy Policy does not apply to other
          advertisers or websites. Thus, we are advising you to consult the
          respective Privacy Policies of these third-party ad servers for more
          detailed information. It may include their practices and instructions
          about how to opt-out of certain options. You may find a complete list
          of these Privacy Policies and their links here: Privacy Policy Links.
        </p>

        <p>
          You can choose to disable cookies through your individual browser
          options. To know more detailed information about cookie management
          with specific web browsers, it can be found at the browser’s
          respective websites. What Are Cookies?
        </p>
      </div>
      <div className="flex flex-col">
        <h4 className="text-xl md:text-2xl mb-3 font-semibold">
          Children’s Information
        </h4>
        <p>
          Another part of our priority is adding protection for children while
          using the internet. We encourage parents and guardians to observe,
          participate in, and/or monitor and guide their online activity.
        </p>

        <p>
          www.bourgeontech.com does not knowingly collect any Personal
          Identifiable Information from children under the age of 13. If you
          think that your child provided this kind of information on our
          website, we strongly encourage you to contact us immediately and we
          will do our best efforts to promptly remove such information from our
          records.
        </p>
      </div>
      <div className="flex flex-col">
        <h4 className="text-xl md:text-2xl mb-3 font-semibold">
          Online Privacy Policy Only
        </h4>
        <p>
          This privacy policy applies only to our online activities and is valid
          for visitors to our website with regards to the information that they
          shared and/or collect in www.bourgeontech.com. This policy is not
          applicable to any information collected offline or via channels other
          than this website.
        </p>
      </div>
      <div className="flex flex-col">
        <h4 className="text-xl md:text-2xl mb-3 font-semibold">Consent</h4>
        <p>
          By using our website, you hereby consent to our Privacy Policy and
          agree to its Terms and Conditions.
        </p>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
