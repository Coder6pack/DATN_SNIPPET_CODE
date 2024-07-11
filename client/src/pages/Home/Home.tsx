/* eslint-disable import/no-unresolved */
import SnippetList from '@/components/SnippetList'
import SuggestList from '@/components/SuggestList/SuggestList'
// import { AppContext } from '@/contexts/app.context'
// import { useContext } from 'react'

export default function Home() {
  // const { profile } = useContext(AppContext)
  return (
    <div className='max-w-6xl mx-auto px-4 grid grid-cols-9 mt-10'>
      <div className='col-span-6'>
        <div className='flex justify-center'>
          <SnippetList />
        </div>
      </div>
      <div className='col-span-3'>
        <SuggestList />
      </div>
    </div>
  )
}
