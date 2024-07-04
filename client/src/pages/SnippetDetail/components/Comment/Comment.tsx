/* eslint-disable no-empty */
import { useEffect, useRef } from 'react'

export default function Comment() {
  const comment = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const element = comment.current
    if (element && element.innerHTML === '') {
      const script = document.createElement('script')
      script.src = 'https://utteranc.es/client.js'
      script.async = true
      script.crossOrigin = 'anonymous'
      script.setAttribute('repo', 'Coder6pack/DATN_SNIPPET_CODE') // Thay "username/repo" bằng tên repository của bạn
      script.setAttribute('issue-term', 'pathname')
      script.setAttribute('label', 'comments')
      script.setAttribute('theme', 'github-light') // Thay đổi theme nếu cần
      element.appendChild(script)
    }
  }, [])
  return (
    <div>
      <div ref={comment} />
    </div>
  )
}
