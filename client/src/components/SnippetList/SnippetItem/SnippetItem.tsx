import React from 'react'
// eslint-disable-next-line import/no-unresolved
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from '@/components/ui/card'

interface AnnouncementProps {
  title: string
  time: string
  readingTime: string
  content: string
  category: string
}

const SnippetItem: React.FC<AnnouncementProps> = ({ title, time, readingTime, content, category }) => {
  return (
    <Card className='p-4 mb-4'>
      <CardHeader className='flex justify-between items-center'>
        <div>
          <CardTitle>{title}</CardTitle>
          <CardDescription>
            {time} - {readingTime}
          </CardDescription>
        </div>
        <div className='bg-blue-500 text-white px-2 py-1 rounded'>{category}</div>
      </CardHeader>
      <CardContent>
        <p>{content}</p>
      </CardContent>
    </Card>
  )
}

export default SnippetItem
