// // const Footer = () => {
// //     return (
// //         <div>
// //             Footer
// //         </div>
// //     )
// // }

// // export default Footer


// import React from "react";

// import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"; // Import Lucide icons
// import { Link } from "react-router-dom";
// import Container from "./container";
// import { MainRoutes } from "@/lib/helper";

// interface SocialLinkProps {
//   href: string;
//   icon: React.ReactNode;
//   hoverColor: string;
// }

// const SocialLink: React.FC<SocialLinkProps> = ({ href, icon, hoverColor }) => {
//   return (
//     <a
//       href={href}
//       target="_blank"
//       rel="noopener noreferrer"
//       className={`hover:${hoverColor}`}
//     >
//       {icon}
//     </a>
//   );
// };

// interface FooterLinkProps {
//   to: string;
//   children: React.ReactNode;
// }

// const FooterLink: React.FC<FooterLinkProps> = ({ to, children }) => {
//   return (
//     <li>
//       <Link
//         to={to}
//         className="hover:underline text-gray-300 hover:text-gray-100"
//       >
//         {children}
//       </Link>
//     </li>
//   );
// };

// const Footer = () => {
//   return (
//     <div className="w-full bg-black text-gray-300 hover:text-gray-100 py-8">
//       <Container>
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//           {/* First Column: Links */}
//           <div>
//             <h3 className="font-bold text-lg mb-4">Quick Links</h3>
//             <ul className="space-y-2">
//               {MainRoutes.map((route) => (
//                 <FooterLink key={route.href} to={route.href}>
//                   {route.label}
//                 </FooterLink>
//               ))}
//             </ul>
//           </div>

//           {/* Second Column: About Us */}
//           <div>
//             <h3 className="font-bold text-lg mb-4">About Us</h3>
//             <p>
//               We are committed to helping you unlock your full potential with
//               AI-powered tools. Our platform offers a wide range of resources to
//               improve your interview skills and chances of success.
//             </p>
//           </div>

//           {/* Third Column: Services */}
//           <div>
//             <h3 className="font-bold text-lg mb-4">Services</h3>
//             <ul>
//               <FooterLink to="/services/interview-prep">
//                 Interview Preparation
//               </FooterLink>
//               <FooterLink to="/services/career-coaching">
//                 Career Coaching
//               </FooterLink>
//               <FooterLink to="/services/resume-building">
//                 Resume Building
//               </FooterLink>
//             </ul>
//           </div>

//           {/* Fourth Column: Address and Social Media */}
//           <div>
//             <h3 className="font-bold text-lg mb-4">Contact Us</h3>
//             <p className="mb-4">123 AI Street, Tech City, 12345</p>
//             <div className="flex gap-4">
//               <SocialLink
//                 href="https://facebook.com"
//                 icon={<Facebook size={24} />}
//                 hoverColor="text-blue-500"
//               />
//               <SocialLink
//                 href="https://twitter.com"
//                 icon={<Twitter size={24} />}
//                 hoverColor="text-blue-400"
//               />
//               <SocialLink
//                 href="https://instagram.com"
//                 icon={<Instagram size={24} />}
//                 hoverColor="text-pink-500"
//               />
//               <SocialLink
//                 href="https://linkedin.com"
//                 icon={<Linkedin size={24} />}
//                 hoverColor="text-blue-700"
//               />
//             </div>
//           </div>
//         </div>
//       </Container>
//     </div>
//   );
// };


// export default Footer

//////////////////////////////////////////////////////////////


import React from "react";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import Container from "./container";
import { MainRoutes } from "@/lib/helper";

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  hoverColor: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon, hoverColor }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`hover:${hoverColor} transition duration-300`}
    >
      {icon}
    </a>
  );
};

interface FooterLinkProps {
  to: string;
  children: React.ReactNode;
}

const FooterLink: React.FC<FooterLinkProps> = ({ to, children }) => {
  return (
    <li>
      <Link to={to} className="hover:underline text-gray-400 hover:text-white transition duration-300">
        {children}
      </Link>
    </li>
  );
};

const Footer = () => {
  return (
    <div className="w-full bg-gray-900 text-gray-300 py-10 border-t border-gray-700">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {MainRoutes.map((route) => (
                <FooterLink key={route.href} to={route.href}>
                  {route.label}
                </FooterLink>
              ))}
            </ul>
          </div>

          {/* About Us */}
          <div>
            <h3 className="font-semibold text-lg text-white mb-4">About Us</h3>
            <p className="text-gray-400">
              We are a passionate team of seven innovators from Texas A&M University - Corpus Christi,
              dedicated to revolutionizing interview preparation with AI-driven insights.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg text-white mb-4">Services</h3>
            <ul className="space-y-2">
              <FooterLink to="/services">Free Trail</FooterLink>
              <FooterLink to="/services/career-coaching">Unlimited Access</FooterLink>
              <FooterLink to="/services/resume-building">Ultimate Package</FooterLink>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="font-semibold text-lg text-white mb-4">Contact Us</h3>
            <p className="text-gray-400 mb-2">CareerSquad, Corpus Christi, 78412</p>
            <p className="text-gray-400 flex items-center gap-2">
              <Mail size={20} /> support@smarthireai.com
            </p>
            <p className="text-gray-400 flex items-center gap-2 mt-1">
              <Phone size={20} /> +1 (000) 000-0000
            </p>
            <div className="flex gap-4 mt-4">
              <SocialLink href="https://facebook.com" icon={<Facebook size={24} />} hoverColor="text-blue-500" />
              <SocialLink href="https://twitter.com" icon={<Twitter size={24} />} hoverColor="text-blue-400" />
              <SocialLink href="https://instagram.com" icon={<Instagram size={24} />} hoverColor="text-pink-500" />
              <SocialLink href="https://linkedin.com" icon={<Linkedin size={24} />} hoverColor="text-blue-700" />
            </div>
          </div>
        </div>
        
        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Smart Hire AI | CareerSquad. All rights reserved.
        </div>
      </Container>
    </div>
  );
};

export default Footer;
