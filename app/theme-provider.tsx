'use client'

import React from 'react'
import { ThemeProvider as NextThemeProvider, ThemeProviderProps } from 'next-themes'

export  function ThemeProvider({children,...props}:ThemeProviderProps) {
  return <NextThemeProvider {...props}>{children}</NextThemeProvider>
}
