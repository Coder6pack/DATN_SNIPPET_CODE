import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { FaSearch } from 'react-icons/fa'

export default function Component() {
  return (
    <div className='flex items-center w-full max-w-md h-10'>
      <form className='max-w-md mx-auto'>
        <div className='flex items-center space-x-2'>
          <Input type='text' className='px-3 py-2 w-60' placeholder='Search...' />
          <Button className='px-3 py-2'>
            <FaSearch />
          </Button>
        </div>
      </form>
    </div>
  )
}
