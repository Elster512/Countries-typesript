import React from "react";
import { Link } from "react-router-dom";
interface CountriesLinkProps {
  children: React.ReactNode;
  to: string;
}
const CountriesLink = ({ children, to }: CountriesLinkProps) => {
  return (
    <Link to={`/${to}`} replace>
      {children}
    </Link>
  );
};

export default CountriesLink;
