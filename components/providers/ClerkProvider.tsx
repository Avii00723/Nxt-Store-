'use client';

import { ClerkProvider as NextClerkProvider } from '@clerk/nextjs';
import React from 'react';

export function ClerkProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <NextClerkProvider>{children}</NextClerkProvider>;
}

