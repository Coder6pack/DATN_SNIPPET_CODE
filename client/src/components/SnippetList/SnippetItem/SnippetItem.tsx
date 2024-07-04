/* eslint-disable import/no-unresolved */
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'
import { Link } from 'react-router-dom'
import { FaHeart } from 'react-icons/fa'
import path from '@/constants/path'

export default function SnippetItem() {
  return (
    <div className='flex gap-4 p-2 border-b border-b-gray-300 mt-2'>
      <div className='w-10 h-10'>
        <Link to='#'>
          <Avatar>
            <AvatarImage src='https://github.com/shadcn.png' className='w-10 h-10 rounded-full object-cover' />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </Link>
      </div>
      <div>
        <div className='text-base flex flex-wrap'>
          <Link to='#' className='text-cyan-500 hover:underline hover:text-cyan-600 mr-2'>
            Your Name
          </Link>
          <span className='text-tagColor'>Khoảng 2 giờ trước - 4 phút đọc</span>
        </div>
        <div className='my-1'>
          <Link to={path.snippetDetail} className='hover:text-cyan-700 hover:underline'>
            Ứng Dụng WhatsApp Để Thúc Đẩy Chiến Lược Marketing Cho doanh nghiệp
          </Link>
        </div>
        <div className='flex items-center gap-4 pr-2 mt-1'>
          <span className='px-2 border rounded-md bg-gray-100 hover:bg-gray-200 hover:text-cyan-500 text-tagColor'>
            NodeJS
          </span>
          <span className='px-2 border rounded-md bg-gray-100 hover:bg-gray-200 hover:text-cyan-500 text-tagColor'>
            JavaScript
          </span>
        </div>
        <div className='flex justify-end items-center gap-1 text-tagColor text-sm'>
          <FaHeart />
          <span>99</span>
        </div>
      </div>
    </div>
  )
}
