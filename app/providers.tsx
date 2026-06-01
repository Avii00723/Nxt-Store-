'use client'
import React from 'react';
import {ThemeProvider} from "./theme-provider";
import { Toaster } from "@/components/ui/sonner"
function Providers({children}:{children:React.ReactNode}) {
  return (<>
    <Toaster richColors position='top-right' />
    <ThemeProvider attribute='class' defaultTheme='system' enableSystem disableTransitionOnChange>
      {children}
    </ThemeProvider>
    </>
  )
}
export default Providers