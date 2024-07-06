/* eslint-disable import/no-unresolved */
import SuggestList from '@/components/SuggestList'
import SnippetContent from './components/SnippetContent'

export default function SnippetDetail() {
  return (
    <div className='max-w-6xl mx-auto px-4 grid grid-cols-9 mt-10 gap-4'>
      <div className='col-span-6'>
        <div>
          <SnippetContent />
        </div>
      </div>
      <div className='col-span-3'>
        <SuggestList />
      </div>
    </div>
  )
}
