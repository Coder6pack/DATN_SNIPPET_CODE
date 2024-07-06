import { Link } from 'react-router-dom'
import { FaHeart } from 'react-icons/fa'
export default function SuggestItem() {
  return (
    <div className='pb-2 border-b border-b-gray-300 pt-2'>
      <Link to={''} className='text-lg cursor-pointer hover:underline hover:text-cyan-600'>
        Lorem ipsum dolor sit amet, consectetur ?
      </Link>
      <div className='flex items-center gap-4 mt-1'>
        <Link to={''} className='text-sm text-tagColor hover:underline hover:text-gray-400 '>
          Tác giả: Nguyễn Văn A
        </Link>
        <div className='flex items-center gap-1'>
          <FaHeart className='text-red-500' /> 100
        </div>
      </div>
    </div>
  )
}
