import Container from '../global/Container';
import CartButton from './CartButton';
import DarkMode from './DarkMode';
import LinksDropdown from './LinksDropdown';
import Logo from './Logo';
import NavSearch from './NavSearch';
import { Suspense } from 'react';
import { Button } from '../ui/button';
import { LuAlignLeft, LuShoppingCart } from 'react-icons/lu';

function CartButtonFallback() {
  return (
    <Button
      variant='outline'
      size='icon'
      className='flex justify-center items-center relative'
      disabled
    >
      <LuShoppingCart />
      <span className='absolute -top-3 -right-3 bg-primary text-white rounded-full h-6 w-6 flex items-center justify-center text-xs'>
        0
      </span>
    </Button>
  );
}

function LinksDropdownFallback() {
  return (
    <Button variant='outline' className='flex gap-4 max-w-[100px]' disabled>
      <LuAlignLeft className='w-6 h-6' />
    </Button>
  );
}

function Navbar() {
  return (
    <nav className='border-b'>
      <Container className='flex flex-col sm:flex-row sm:justify-between sm:items-center flex-wrap py-8 gap-4'>
        <Logo />
        <Suspense>
          <NavSearch />
        </Suspense>
        <div className='flex gap-4 items-center'>
          <Suspense fallback={<CartButtonFallback />}>
            <CartButton />
          </Suspense>
          <DarkMode />
          <Suspense fallback={<LinksDropdownFallback />}>
            <LinksDropdown />
          </Suspense>
        </div>
      </Container>
    </nav>
  );
}
export default Navbar;
