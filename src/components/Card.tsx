import React from 'react';

interface CardProps {
  children: React.ReactNode;
}

export default function Card({ children }: CardProps) {
  return <div style={{ padding: 20, border: '1px solid #ddd', borderRadius: 10 }}>{children}</div>;
}