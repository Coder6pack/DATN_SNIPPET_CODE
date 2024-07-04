/* eslint-disable react/no-unknown-property */
/* eslint-disable @typescript-eslint/no-unused-vars */
import Markdown from 'react-markdown'
import rehypeHighlight from 'rehype-highlight'
import 'highlight.js/styles/github.css'
import Comment from '../Comment'

const markdown = `
# Code Example
const a = 1;
#
console.log('hello word',a)
`
export default function SnippetContent() {
  return (
    <div>
      <div>
        <Markdown rehypePlugins={[rehypeHighlight]}>{markdown}</Markdown>
      </div>
      <div>
        <Comment />
      </div>
    </div>
  )
}
