/* eslint-disable import/no-unresolved */
import { Button } from '@/components/ui/button'
import { TableCell, TableRow } from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'
import { Delete, WrenchIcon } from 'lucide-react'

export default function UserItem() {
  return (
    <TableRow>
      <TableCell className='hidden sm:table-cell'>
        <img
          src='https://github.com/shadcn.png'
          alt='ProductImage'
          className='aspect-square rounded-md object-cover'
          height='64'
          width='64'
        />
      </TableCell>
      <TableCell className='font-medium'>Laser Lemonade Machine</TableCell>
      <TableCell>
        <Badge variant='outline'>Draft</Badge>
      </TableCell>
      <TableCell>$499.99</TableCell>
      <TableCell className='hidden md:table-cell'>25</TableCell>
      <TableCell className='hidden md:table-cell'>2023-07-12 10:42 AM</TableCell>
      <TableCell>
        <div className='flex items-center gap-1'>
          <Button className='w-12 h-10'>
            <Delete />
          </Button>
          <Button className='w-12 h-10'>
            <WrenchIcon />
          </Button>
        </div>
      </TableCell>
    </TableRow>
  )
}
