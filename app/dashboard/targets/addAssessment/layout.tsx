'use client';

import React from 'react';

export default function RiskAssessmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex w-full h-full">
      {children}
    </div>
  );
}