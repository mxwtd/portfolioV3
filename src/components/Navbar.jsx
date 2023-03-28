// import React from "react";
// import "/Users/maxwtd/Desktop/PortfolioV3/src/assets/stylesheets/Navbar.css";

// const Navbar = () => {
//   return (
//     <nav>
//       <ul>
//         <li>
//           <a href="/">Home</a>
//         </li>
//         <li>
//           <a href="/projects">Projects</a>
//         </li>
//         <li>
//           <a href="/contact">Contact</a>
//         </li>
//       </ul>
//     </nav>
//   );
// }

// export default Navbar;

import React, { useState } from "react";
import "/Users/maxwtd/Desktop/PortfolioV3/src/assets/stylesheets/Navbar.css";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav>
      <div className="hamburger-menu" onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <ul className={`menu ${showMenu ? "show" : ""}`}>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/projects">Projects</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

