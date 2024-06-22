import { CiSearch } from 'react-icons/ci'
// eslint-disable-next-line import/no-unresolved
import { Button } from '../ui/button'
export default function Component() {
  return (
    <div className='flex items-center w-full max-w-md'>
      <form>
        <div className='d-flex justify-center items-center border border-gray-300 rounded-md'>
          <input placeholder='Search snippet code' type='search' className='outline-none p-1' />
          <Button>
            <CiSearch />
          </Button>
        </div>
      </form>
    </div>
  )
}
