import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import { LuAlignLeft } from 'react-icons/lu';
import Link from 'next/link';
import { Button } from '../ui/button';
import { links } from '@/utils/links';
import UserIcon from './UserIcon';
// import { SignInButton, SignedIn, SignedOut, SignUpButton } from '@clerk/nextjs';
// import SignOutLink from './SignOutLink';
// import { auth } from '@clerk/nextjs/server';
function LinksDropdown() {
  
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='outline' size='icon' >
          <LuAlignLeft />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-56'>
        {links.map((link) => (
          <DropdownMenuItem key={link.href} asChild>
            <Link href={link.href}>{link.label}</Link>
          </DropdownMenuItem>
        ))}
        <DropdownMenuSeparator />
        {/* <SignedIn> */}
          <UserIcon />
          {/* <SignOutLink /> */}
        {/* </SignedIn> */}
        {/* <SignedOut> */}
          {/* <SignInButton /> */}
          {/* <SignUpButton /> */}
        {/* </SignedOut> */}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
export default LinksDropdown;
