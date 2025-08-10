import React, { useState, useEffect } from "react";

// The Header component, self-contained within this file.
const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownItems = [
    { label: "Thrust Area", key: "thrust-area", href: "#" },
    {
      label: "On Going Research Projects",
      key: "ongoing-research-projects",
      href: "#",
    },
    {
      label: "Completed Research Projects",
      key: "completed-research-projects",
      href: "#",
    },
    { label: "Joint Project", key: "joint-project", href: "#" },
    {
      label: "Important Laboratories",
      key: "important-laboratories",
      href: "/laboratories",
    },
    {
      label: "Departmental Committees",
      key: "departmental-committees",
      href: "#",
    },
    {
      label: "Alumni Relations",
      key: "alumni-relations",
      href: "/alumni-relations",
    },
  ];

  useEffect(() => {
    // Closes the dropdown when the user clicks outside of it.
    const handleClickOutside = (e) => {
      if (
        !e.target.closest(".dropdown-toggle") &&
        !e.target.closest(".dropdown-menu")
      ) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <style>{`
        /* --- HEADER STYLES --- */
        .amu-header-horizontal {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: #ffffff;
          border-radius: 20px;
          padding: 12px 20px;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
          flex-wrap: wrap; /* Allows items to wrap to a new line on small screens */
        }

        .amu-left {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .amu-left img {
          height: 45px;
        }

        .amu-title {
          font-weight: bold;
          font-size: 1.2em;
          color: #004d40;
        }

        .amu-nav {
          display: flex;
          gap: 16px;
          align-items: center;
          flex-wrap: wrap;
        }

        .amu-nav-link, .dropdown-toggle {
          text-decoration: none;
          color: #004d40;
          font-weight: 600;
          font-size: 0.95em;
          cursor: pointer;
          transition: color 0.2s ease-in-out;
        }

        .amu-nav-link:hover, .dropdown-toggle:hover {
          color: #00796b;
        }

        .dropdown-wrapper {
          position: relative;
        }

        .dropdown-menu {
          position: absolute;
          background: white;
          border: 1px solid #ccc;
          border-radius: 8px;
          box-shadow: 0 4px 10px rgba(0,0,0,0.1);
          padding: 10px;
          top: 100%;
          right: 0;
          z-index: 999;
          min-width: 250px;
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        .dropdown-menu-item {
          display: block;
          padding: 8px;
          color: #004d40;
          text-decoration: none;
          font-size: 14px;
          transition: background-color 0.2s ease-in-out;
        }

        .dropdown-menu-item:hover {
          background: #e0f2f1;
          border-radius: 4px;
        }

        /* Responsive adjustments for the header on tablets and mobile devices */
        @media (max-width: 768px) {
          .amu-header-horizontal {
            flex-direction: column;
            align-items: flex-start;
            padding: 15px;
          }
          .amu-left {
            margin-bottom: 15px;
          }
          .amu-nav {
            flex-direction: column;
            align-items: flex-start;
            gap: 10px;
            width: 100%;
          }
          .amu-nav-link, .dropdown-toggle {
            width: 100%;
            text-align: left;
            padding: 8px 0;
          }
          .dropdown-wrapper {
            width: 100%;
          }
          .dropdown-menu {
            position: static;
            width: 100%;
            box-shadow: none;
            border: none;
            padding: 0;
            margin-top: 5px;
            background: #f8f8f8;
          }
          .dropdown-menu-item {
            padding-left: 15px;
          }
        }

        /* Further adjustments for very small mobile devices */
        @media (max-width: 480px) {
          .amu-title {
            font-size: 1em;
            text-align: center;
            width: 100%;
          }
          .amu-left {
            flex-direction: column;
          }
          .amu-left img {
            height: 35px;
          }
        }
      `}</style>
      <header className="amu-header-horizontal">
        <div className="amu-left">
          <img
            src="https://amubuddy.com/wp-content/uploads/2023/06/amu-logo.jpg"
            alt="AMU Logo"
            className="amu-logo"
          />
          <span className="amu-title">Aligarh Muslim University</span>
        </div>
        <nav className="amu-nav">
          <a href="/" className="amu-nav-link">
            Home
          </a>
          <a href="/about" className="amu-nav-link">
            About
          </a>
          <a href="/programs" className="amu-nav-link">
            Programs
          </a>
          <a href="/faculty" className="amu-nav-link">
            Faculty
          </a>
          <a href="/contact" className="amu-nav-link">
            Contact
          </a>
          <div className="dropdown-wrapper">
            <span
              className="dropdown-toggle"
              onClick={() => setShowDropdown(!showDropdown)}
            >
              Links ▼
            </span>
            {showDropdown && (
              <div className="dropdown-menu">
                {dropdownItems.map((item) => (
                  <a
                    href={item.href}
                    key={item.key}
                    className="dropdown-menu-item"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        </nav>
      </header>
      <div className="amu-underline"></div>
    </>
  );
};

// The Footer component, self-contained within this file.
const Footer = () => {
  return (
    <>
      <style>{`
        /* --- FOOTER STYLES --- */
        .amu-footer {
          background-color: #ffffff;
          color: #004d40;
          padding: 20px 0;
          margin-top: auto;
          border-top-left-radius: 20px;
          border-top-right-radius: 20px;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
        }

        .footer-container {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 20px;
          display: grid; /* Changed to use CSS Grid */
          grid-template-columns: 1fr 1fr; /* Two columns for desktop */
          gap: 20px;
          align-items: center;
        }

        .footer-left {
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .footer-logo {
          height: 50px;
        }

        .footer-text {
          font-size: 0.9em;
          line-height: 1.6;
          color: #004d40;
        }

        .footer-right {
          text-align: right;
          font-size: 0.85em;
          color: #004d40;
        }

        /* Responsive adjustments for the footer on tablets and mobile devices */
        @media (max-width: 768px) {
          .amu-footer {
            padding: 15px 0;
          }
          .footer-container {
            grid-template-columns: 1fr; /* Single column on small screens */
            justify-items: center; /* Center items horizontally */
            text-align: center;
            padding: 0 15px;
          }
          .footer-left {
            flex-direction: column;
            gap: 10px;
            margin-bottom: 10px;
          }
          .footer-logo {
            margin-bottom: 5px;
          }
        }
      `}</style>
      <footer className="amu-footer">
        <div className="footer-container">
          <div className="footer-left">
            <p className="footer-text">
              &copy; {new Date().getFullYear()} Aligarh Muslim University. All
              Rights Reserved.
            </p>
          </div>
          <div className="footer-right">
            <p>Designed and Developed by Department of Computer Science</p>
            <p>Contact: info@amu.ac.in</p>
          </div>
        </div>
      </footer>
    </>
  );
};

const Layout = ({ children }) => {
  return (
    <>
      <style>{`
        /* Global Styles (apply to the entire page body) */
        body {
          margin: 0;
          font-family: 'Segoe UI', sans-serif;
          background: #ffffff;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }

        /* Main content area styling */
        .main-content-wrapper {
          flex-grow: 1;
          max-width: 1100px;
          margin: 20px auto;
          padding: 0 20px;
          width: 100%;
        }

        .amu-underline {
          height: 4px;
          background: #004d40;
          width: 100%;
          border-bottom-left-radius: 4px;
          border-bottom-right-radius: 4px;
          margin-bottom: 20px;
        }
      `}</style>
      <Header />
      <main className="main-content-wrapper">{children}</main>
      <Footer />
    </>
  );
};

// --- RTI Related Information Component ---
const RTIInformation = () => {
  return (
    <div className="rti-container">
      <style>{`
        /* --- STYLES FOR THE RTI INFORMATION CARD --- */
        .rti-container {
          padding: 30px;
          background-color: #ffffff;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
          max-width: 600px;
          margin: 0 auto;
          text-align: center;
        }

        .rti-title {
          font-size: clamp(1.5rem, 5vw, 2.5rem);
          font-weight: bold;
          color: #004d40;
          margin-bottom: 1rem;
        }

        .rti-subtitle {
          font-size: clamp(1rem, 3vw, 1.25rem);
          color: #555;
          margin-bottom: 1.5rem;
        }

        .rti-link-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 15px;
          margin-top: 2rem;
        }

        .rti-download-link {
          text-decoration: none;
          background-color: #00796b;
          color: white;
          padding: 12px 24px;
          border-radius: 8px;
          font-weight: 600;
          transition: background-color 0.2s ease-in-out, transform 0.2s ease-in-out;
          box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        }

        .rti-download-link:hover {
          background-color: #004d40;
          transform: translateY(-2px);
        }

        .rti-upload-date {
          font-size: 0.9rem;
          color: #777;
        }

        .rti-act-info {
          margin-top: 2rem;
          font-size: 1rem;
          color: #333;
        }
      `}</style>
      <div className="rti-card">
        <h1 className="rti-title">RTI Related Information</h1>
        <p className="rti-subtitle">
          Under the (R.T.I.) Right to Information Act, 2005
        </p>

        <div className="rti-link-container">
          <a href="#" className="rti-download-link">
            Download List
          </a>
          <p className="rti-upload-date">
            Dept. data last updated on: 08/08/2025
          </p>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Layout>
      <RTIInformation />
    </Layout>
  );
};

export default App;
