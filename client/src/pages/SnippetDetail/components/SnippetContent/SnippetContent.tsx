/* eslint-disable import/no-unresolved */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-children-prop */
/* eslint-disable react/no-unknown-property */
/* eslint-disable @typescript-eslint/no-unused-vars */
import ReactMarkdown from 'react-markdown'
import Comment from '../Comment'
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter'
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import { RiFileCopyLine } from 'react-icons/ri'
import 'github-markdown-css/github-markdown.css'
import './customMarkdown.css'
import { Button } from '@/components/ui/button'
const markdown = `
# Đây là tiêu đề h1
## Đây là tiêu đề h2
Đây là một đoạn văn bản với một [liên kết](https://example.com) và một đoạn \`code\`.

\`\`\`javascript
function greet(name) {
  return \`Hello, \${name}!\`;
}
console.log(greet('World'));
\`\`\`
\`\`\`javascript
function greet(name) {
  return \`Hello, \${name}!\`;
}
console.log(greet('World'));
\`\`\`
console.log(greet('World'));
`
export default function SnippetContent() {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    alert('Code copied to clipboard!')
  }

  const components = {
    code({ node, inline, className, children, ...props }: any) {
      const match = /language-(\w+)/.exec(className || '')
      const codeString = String(children).replace(/\n$/, '')

      return !inline && match ? (
        <div style={{ position: 'relative' }}>
          <SyntaxHighlighter style={github} language={match[1]} PreTag='div' {...props}>
            {codeString}
          </SyntaxHighlighter>
          <Button
            onClick={() => copyToClipboard(codeString)}
            style={{ position: 'absolute', top: '0', right: '0' }}
            size='sm'
          >
            <RiFileCopyLine fontSize='small' />
          </Button>
        </div>
      ) : (
        <code className={className} {...props}>
          {children}
        </code>
      )
    }
  }

  return (
    <div>
      <div className='markdown-body px-5 rounded-lg border border-gray-300'>
        <ReactMarkdown components={components}>{markdown}</ReactMarkdown>
      </div>
      <div>
        <Comment />
      </div>
    </div>
  )
}
