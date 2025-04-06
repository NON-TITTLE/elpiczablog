import React from 'react';

// Especificar el tipo de `children` como React.ReactNode
interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div style={{ maxWidth: '640px', margin: '0 auto', padding: '2rem' }}>
      <header><h1>ElPicza Blog</h1></header>
      {children}
    </div>
  );
}
