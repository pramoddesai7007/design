// import { FaLinkedinIn, FaFacebookF, FaTwitter } from 'react-icons/fa';
// import { Link } from 'react-router-dom';
// import Logo from '../common/Logo';

// const Footer = () => {
//   return (
//     <footer className="bg-brand-gray text-white pt-12 px-8 md:px-20">
//       <div className="grid md:grid-cols-4 gap-10">
//         {/* Logo + Contact */}
//         <div>
//           <div className="flex items-center gap-3 mb-6">
//             <Logo />
//           </div>
//           <p className="text-sm text-gray-400 mb-6">
//             Forem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
//           </p>
//           <p className="text-sm">+91 9876543210</p>
//           <p className="text-sm mb-6">support@D4U.agency</p>

//           <div className="flex gap-6 mt-6">
//             <FaLinkedinIn className="w-7 h-7 hover:text-orange-500 transition-all duration-300 ease-in-out cursor-pointer" />
//             <FaFacebookF className="w-7 h-7 hover:text-orange-500 transition-all duration-300 ease-in-out cursor-pointer" />
//             <FaTwitter className="w-7 h-7 hover:text-orange-500 transition-all duration-300 ease-in-out cursor-pointer" />
//           </div>
//         </div>

//         {/* Other Links */}
//         <div>
//           <h3 className="font-semibold text-lg mb-4">Other Links</h3>
//           <ul className="space-y-2 text-sm text-gray-400">
//             <li>
//               <Link to="/about" className="hover:text-white transition">
//                 About Us
//               </Link>
//             </li>
//             <li>
//               <Link to="/contact" className="hover:text-white transition">
//                 Contact Us
//               </Link>
//             </li>
//             <li>
//               <Link to="/help" className="hover:text-white transition">
//                 Help & Support
//               </Link>
//             </li>
//           </ul>
//         </div>

//         {/* Services */}
//         <div>
//           <h3 className="font-semibold text-lg mb-4">Services</h3>
//           <ul className="space-y-2 text-sm text-gray-400">
//             <li>
//               <Link to="/graphic-design" className="hover:text-white transition">
//                 Graphic Design
//               </Link>
//             </li>
//             <li>
//               <Link to="/uiux-design" className="hover:text-white transition">
//                 UI/UX Design
//               </Link>
//             </li>
//             <li>
//               <Link to="/video-editing" className="hover:text-white transition">
//                 Video Editing
//               </Link>
//             </li>
//             <li>
//               <Link to="/digital-marketing" className="hover:text-white transition">
//                 Digital Marketing
//               </Link>
//             </li>
//             <li>
//               <Link to="/software-developing" className="hover:text-white transition">
//                 Software Developing
//               </Link>
//             </li>
//           </ul>
//         </div>

//         {/* Subscribe */}
//         <div>
//           <h3 className="font-semibold text-lg mb-4">Subscribe</h3>
//           <div className="bg-white flex rounded-full overflow-hidden">
//             <input
//               type="email"
//               placeholder="Get product updates"
//               className="px-3 py-4 w-full text-black focus:outline-none"
//             />
           
//              <button className="w-[60px] h-[50px] bg-[#F76517] rounded-full border border-[#D6D6D6] flex items-center justify-center text-white text-lg mr-2 mt-1">
//               →
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Copyright */}
//       <div className="text-sm text-brand-gray text-center py-6 mt-12 border-t border-gray-700">
//         © 2025 Design4you. All rights reserved
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import { FaLinkedinIn, FaFacebookF, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Logo from '../common/Logo';

const Footer = () => {
  return (
    <footer className="bg-brand-gray text-white pt-12 px-8 md:px-20">
      <div className="grid md:grid-cols-4 gap-10">
        {/* Logo + Contact */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <Logo />
          </div>
          <p className="text-sm text-gray-400 mb-6">
            Forem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
          </p>
          <p className="text-sm">+91 9876543210</p>
          <p className="text-sm mb-6">support@D4U.agency</p>
        </div>

        {/* Other Links */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Other Links</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>
              <Link to="/about" className="hover:text-white transition">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white transition">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/help" className="hover:text-white transition">
                Help & Support
              </Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Services</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>
              <Link to="/graphic-design" className="hover:text-white transition">
                Graphic Design
              </Link>
            </li>
            <li>
              <Link to="/uiux-design" className="hover:text-white transition">
                UI/UX Design
              </Link>
            </li>
            <li>
              <Link to="/video-editing" className="hover:text-white transition">
                Video Editing
              </Link>
            </li>
            <li>
              <Link to="/digital-marketing" className="hover:text-white transition">
                Digital Marketing
              </Link>
            </li>
            <li>
              <Link to="/software-developing" className="hover:text-white transition">
                Software Developing
              </Link>
            </li>
          </ul>
        </div>

        {/* Subscribe */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Subscribe</h3>
          <div className="bg-white flex rounded-full overflow-hidden">
            <input
              type="email"
              placeholder="Get product updates"
              className="px-3 py-4 w-full text-black focus:outline-none"
            />
            <button className="w-[60px] h-[50px] bg-[#F76517] rounded-full border border-[#D6D6D6] flex items-center justify-center text-white text-lg mr-2 mt-1">
              →
            </button>
          </div>
        </div>
      </div>

      {/* Copyright and Social Icons */}
      <div className="flex justify-between items-center text-sm text-brand-gray py-6 mt-10 border-t border-gray-600">
  <div className="flex gap-3">
    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
      <div className="w-6 h-6 border border-white rounded-full flex items-center justify-center hover:border-orange-500 transition-all duration-300 ease-in-out">
        <FaLinkedinIn className="w-3 h-3 text-white hover:text-orange-500" />
      </div>
    </a>
    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
      <div className="w-6 h-6 border border-white rounded-full flex items-center justify-center hover:border-orange-500 transition-all duration-300 ease-in-out">
        <FaFacebookF className="w-3 h-3 text-white hover:text-orange-500" />
      </div>
    </a>
    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
      <div className="w-6 h-6 border border-white rounded-full flex items-center justify-center hover:border-orange-500 transition-all duration-300 ease-in-out">
        <FaTwitter className="w-3 h-3 text-white hover:text-orange-500" />
      </div>
    </a>
  </div>
  <div className="text-gray-200">
    © 2025 Design4you. All rights reserved
  </div>
</div>

    </footer>
  );
};

export default Footer;
