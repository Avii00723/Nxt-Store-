'use client';

import * as React from 'react';
import { MoonIcon, SunIcon } from '@radix-ui/react-icons';
import { useTheme } from 'next-themes';

import { Button } from '@/components/ui/button';

export default function ModeToggle() {
  const { setTheme, theme } = useTheme();
  const [open, setOpen] = React.useState(false);
  const menuRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (!menuRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  function handleThemeChange(nextTheme: string) {
    setTheme(nextTheme);
    setOpen(false);
  }

  return (
    <div className='relative' ref={menuRef}>
      <Button
        variant='outline'
        size='icon'
        aria-label='Toggle theme'
        aria-haspopup='menu'
        aria-expanded={open}
        onClick={() => setOpen((current) => !current)}
      >
        <SunIcon className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
        <MoonIcon className='absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
      </Button>

      {open && (
        <div
          role='menu'
          className='absolute right-0 top-11 z-50 min-w-36 rounded-md border border-border bg-popover p-1 text-popover-foreground shadow-md'
        >
          <button
            type='button'
            role='menuitem'
            onClick={() => handleThemeChange('light')}
            className={`block w-full rounded-sm px-3 py-2 text-left text-sm hover:bg-accent hover:text-accent-foreground ${
              theme === 'light' ? 'bg-accent text-accent-foreground' : ''
            }`}
          >
            Light
          </button>
          <button
            type='button'
            role='menuitem'
            onClick={() => handleThemeChange('dark')}
            className={`block w-full rounded-sm px-3 py-2 text-left text-sm hover:bg-accent hover:text-accent-foreground ${
              theme === 'dark' ? 'bg-accent text-accent-foreground' : ''
            }`}
          >
            Dark
          </button>
          <button
            type='button'
            role='menuitem'
            onClick={() => handleThemeChange('system')}
            className={`block w-full rounded-sm px-3 py-2 text-left text-sm hover:bg-accent hover:text-accent-foreground ${
              theme === 'system' ? 'bg-accent text-accent-foreground' : ''
            }`}
          >
            System
          </button>
        </div>
      )}
    </div>
  );
}
