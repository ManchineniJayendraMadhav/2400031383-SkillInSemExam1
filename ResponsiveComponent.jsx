import React, { useState, useEffect } from "react";
import "./ResponsiveComponent.css";

const ResponsiveComponent = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={`student-card ${isMobile ? "vertical" : "horizontal"}`}>
      <div className="student-details">
        <h2 className="student-name">Jane Smith</h2>
        <p><strong>Roll No:</strong> 202501</p>
        <p><strong>Course:</strong> B.Tech in Computer Science</p>
        <p><strong>Year:</strong> 3rd Year</p>
        <p><strong>Email:</strong> jane.smith@example.com</p>
        <p><strong>Rating:</strong> ⭐⭐⭐⭐☆ (4.2)</p>
       
        <div className="actions">
          <button className="btn primary">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveComponent;
