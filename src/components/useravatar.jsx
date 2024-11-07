// UserAvatar.js
import React, { useState, useEffect, useRef } from "react";
import defaultAvatar from "../assets/image.png";
import "./useravatar.css"; // Create a new CSS file for UserAvatar-specific styles

const UserAvatar = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isFullWindowOpen, setIsFullWindowOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Account");

  const fullWindowRef = useRef(null);

  // Toggle hover state
  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);

  // Toggle full window state on avatar or username click
  const handleAvatarClick = (e) => {
    e.stopPropagation(); // Prevent event from propagating up to the document
    setIsFullWindowOpen((prev) => !prev);
  };

  // Close full window if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        fullWindowRef.current &&
        !fullWindowRef.current.contains(event.target) &&
        isFullWindowOpen
      ) {
        setIsFullWindowOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isFullWindowOpen]);

  // Sidebar menu items
  const sidebarMenu = [
    { name: "Account", label: "Account Details" },
    { name: "Payments", label: "Payment Methods" },
    { name: "History", label: "Order History" },
    { name: "Settings", label: "Settings" },
    { name: "Addresses", label: "Addresses" },
  ];

  return (
    <div className="user-section">
      <img
        src={defaultAvatar}
        alt="User Avatar"
        className="user-avatar"
        onClick={handleAvatarClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
      <span className="user-name" onClick={handleAvatarClick}>
        John Doe
      </span>

      {/* Full window with sidebar and content on click */}
      {isFullWindowOpen && (
        <div className="full-window" ref={fullWindowRef}>
          <div className="sidebar">
            <h3>Menu</h3>
            {sidebarMenu.map((item) => (
              <button
                key={item.name}
                className={activeSection === item.name ? "active" : ""}
                onClick={() => setActiveSection(item.name)}
              >
                {item.label}
              </button>
            ))}
          </div>
          <div className="content">
            {activeSection === "Account" && (
              <div>
                <h3>Account Details</h3>
                <p>Name: John Doe</p>
                <p>Email: johndoe@example.com</p>
              </div>
            )}
            {activeSection === "Payments" && (
              <div>
                <h3>Payment Methods</h3>
                <p>Manage your payment methods here.</p>
              </div>
            )}
            {activeSection === "History" && (
              <div>
                <h3>Order History</h3>
                <p>View your past orders here.</p>
              </div>
            )}
            {activeSection === "Settings" && (
              <div>
                <h3>Settings</h3>
                <p>Adjust your preferences here.</p>
              </div>
            )}
            {activeSection === "Addresses" && (
              <div>
                <h3>Addresses</h3>
                <p>Manage your addresses here.</p>
              </div>
            )}
            <button onClick={() => setIsFullWindowOpen(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserAvatar;
