/* eslint-disable import/no-unresolved */
// import { Button } from '@/components/ui/button'
import { TableCell, TableRow } from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Delete, WrenchIcon } from 'lucide-react'
import { toast } from 'react-toastify'

interface Props {
  title: string
  tag: string
  author: string
  vote: string
  created_at: string
  avatar: string
}
export default function SnippetItem(props: Props) {
  const handleOnClick = () => toast.success('Đã xoá snippet thành công')
  return (
    <TableRow>
      <TableCell className='hidden sm:table-cell'>
        <img
          src={props.avatar}
          alt='ProductImage'
          className='aspect-square rounded-md object-cover'
          height='64'
          width='64'
        />
      </TableCell>
      <TableCell className='font-medium'>{props.title}</TableCell>
      <TableCell>
        <Badge variant='outline'>{props.tag}</Badge>
      </TableCell>
      <TableCell>{props.author}</TableCell>
      <TableCell className='hidden md:table-cell'>{props.vote}</TableCell>
      <TableCell className='hidden md:table-cell'>{props.created_at}</TableCell>
      <TableCell>
        <div className='flex items-center gap-1'>
          <Button onClick={handleOnClick} className='w-12 h-10'>
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
