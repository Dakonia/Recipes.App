import React, { useState } from "react";
import "../styles/Header.css";

function Header() {
  const [isDocumentationMenuOpen, setDocumentationMenuOpen] = useState(false);

  const handleDocumentationClick = () => {
    setDocumentationMenuOpen(!isDocumentationMenuOpen);
  };

  return (
    <div className="header">
      <h1 className="logo">
        <a href="http://localhost:8080">Книга рецептов</a>
      </h1>
      <div className="documentation-menu">
        <span
          className="documentation-toggle"
          onClick={handleDocumentationClick}
        >
          Документация
        </span>
        <div className={`dropdown-content ${isDocumentationMenuOpen ? 'open' : ''}`}>
          <a href="http://localhost:8000/swagger" target="_blank" rel="noopener noreferrer">Swagger</a>
          <a href="http://localhost:8000/doc" target="_blank" rel="noopener noreferrer">Documents</a>
          <a href="http://localhost:8000/api" target="_blank" rel="noopener noreferrer">D-Rest-F</a>
        </div>
      </div>
    </div>
  );
}

export default Header;
