import React from 'react';

export interface Project {
  id: string;
  client: string;
  type: 'Branding' | 'Performance' | 'Development' | 'Strategy';
  title: string;
  description: string;
  image: string;
  year: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  details: string[];
}

export interface NavItem {
  label: string;
  path: string;
}