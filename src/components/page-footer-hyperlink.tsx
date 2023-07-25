import React from "react";

interface FooterHyperlinkProps {
  path: string;
  children?: React.ReactNode;
}

export const PageFooterHyperlink: React.FC<FooterHyperlinkProps> = ({
  children,
  path,
}) => {
  return (
    <a
      className="page-footer__hyperlink"
      href={path}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
};
