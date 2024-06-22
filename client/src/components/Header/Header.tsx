/* eslint-disable import/no-unresolved */

import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { NavigationMenu, NavigationMenuList, NavigationMenuLink } from '@/components/ui/navigation-menu'
import { Link } from 'react-router-dom'
import { MenuIcon } from 'lucide-react'
import path from '@/constants/path'
import { FaGithub } from 'react-icons/fa'
import { ModeToggle } from '../mode-toggle'
import { AiFillAppstore } from 'react-icons/ai'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import SearchInput from '../SearchInput'

export default function Header() {
  return (
    <div className='container mx-auto px-4 md:px-6 lg:px-8'>
      <header className='flex h-20 w-full shrink-0 items-center px-4 md:px-6'>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant='outline' size='icon' className='lg:hidden'>
              <MenuIcon className='h-6 w-6' />
              <span className='sr-only'>Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side='left'>
            <Link to='#'>
              <span className='sr-only'>ShadCN</span>
            </Link>
            <div className='grid gap-2 py-6'>
              <Link to='#' className='flex w-full items-center py-2 text-lg font-semibold'>
                Home
              </Link>
              <Link to='#' className='flex w-full items-center py-2 text-lg font-semibold'>
                About
              </Link>
              <Link to='#' className='flex w-full items-center py-2 text-lg font-semibold'>
                Services
              </Link>
              <Link to='#' className='flex w-full items-center py-2 text-lg font-semibold'>
                Portfolio
              </Link>
              <Link to='#' className='flex w-full items-center py-2 text-lg font-semibold'>
                Contact
              </Link>
            </div>
          </SheetContent>
        </Sheet>
        <Link to='#' className='mr-6 hidden lg:flex'>
          <AiFillAppstore className='w-8 h-8' />
          <span className='sr-only'>ShadCN</span>
        </Link>
        <NavigationMenu className='hidden lg:flex'>
          <NavigationMenuList>
            <NavigationMenuLink asChild>
              <Link
                to='#'
                className='group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50'
              >
                Home
              </Link>
            </NavigationMenuLink>
            <NavigationMenuLink asChild>
              <Link
                to='#'
                className='group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50'
              >
                About
              </Link>
            </NavigationMenuLink>
            <NavigationMenuLink asChild>
              <Link
                to='#'
                className='group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50'
              >
                Services
              </Link>
            </NavigationMenuLink>
            <NavigationMenuLink asChild>
              <Link
                to='#'
                className='group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50'
              >
                Portfolio
              </Link>
            </NavigationMenuLink>
            <NavigationMenuLink asChild>
              <Link
                to='#'
                className='group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50'
              >
                Contact
              </Link>
            </NavigationMenuLink>
          </NavigationMenuList>
        </NavigationMenu>
        <div className='ml-auto flex gap-2'>
          <SearchInput />
          <div className='ml-auto flex gap-4 items-center'>
            <Link to={path.gitHub}>
              <FaGithub className='w-8 h-8' />
            </Link>
            <ModeToggle />
          </div>
          <Button variant='outline'>
            <Link to={path.login}>Sign in</Link>
          </Button>
          <Button>
            <Link to={path.register}>Sign Up</Link>
          </Button>
          <Popover>
            <PopoverTrigger>Open</PopoverTrigger>
            <PopoverContent className='w-44'>
              <Link to={path.login}>
                <div className='hover:bg-slate-100 p-2 rounded-md hover:text-black'>Profile</div>
              </Link>
              <Link to={path.login}>
                <div className='hover:bg-slate-100 p-2 rounded-md hover:text-black'>Logout</div>
              </Link>
            </PopoverContent>
          </Popover>
        </div>
      </header>
    </div>
  )
}
