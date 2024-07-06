import SuggestItem from './SuggestItem'

export default function SuggestList() {
  return (
    <div>
      <div className='border-b border-b-gray-300 text-cyan-600'>Câu hỏi mới nhất</div>
      <SuggestItem />
      <SuggestItem />
      <SuggestItem />
      <SuggestItem />
    </div>
  )
}
