import React from "react";

import { Link } from "react-router-dom";
interface CustomLinkProps {
  children: React.ReactNode;
  to: string;
}
function CustomLink({ children, to }: CustomLinkProps) {
  return (
    <Link to={to} style={{ textDecoration: "none" }}>
      {children}
    </Link>
  );
}

export default CustomLink;
