import React from 'react';
import { Link as RouterLink, LinkProps } from 'react-router-dom';

interface SmartLinkProps extends LinkProps {
  children: React.ReactNode;
  className?: string;
}

export function SmartLink({ children, to, className, ...props }: SmartLinkProps) {
  // If it's an external link, use a standard <a> tag for SEO and security
  const isExternal = typeof to === 'string' && (to.startsWith('http') || to.startsWith('mailto:'));

  if (isExternal) {
    return (
      <a
        href={to as string}
        className={className}
        target="_blank"
        rel="noopener noreferrer"
        {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </a>
    );
  }

  // Internal links use React Router's Link
  return (
    <RouterLink to={to} className={className} {...props}>
      {children}
    </RouterLink>
  );
}
