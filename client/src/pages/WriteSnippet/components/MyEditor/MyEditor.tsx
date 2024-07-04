import { useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import MultiSelect from '../MultiSelect'
import { Cat, Dog, Fish, Rabbit, Turtle } from 'lucide-react'

const frameworksList = [
  { value: 'react', label: 'React', icon: Turtle },
  { value: 'angular', label: 'Angular', icon: Cat },
  { value: 'vue', label: 'Vue', icon: Dog },
  { value: 'svelte', label: 'Svelte', icon: Rabbit },
  { value: 'ember', label: 'Ember', icon: Fish }
]
export default function MyEditor() {
  const [value, setValue] = useState('')
  const [selectedFrameworks, setSelectedFrameworks] = useState<string[]>(['react', 'angular'])

  const modules = {
    toolbar: [
      [{ header: '1' }, { header: '2' }, { font: [] }],
      [{ size: [] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote', 'code-block'],
      [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
      ['link', 'image', 'video'],
      ['clean']
    ]
  }

  const formats = [
    'header',
    'font',
    'size',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'code-block',
    'list',
    'bullet',
    'indent',
    'link',
    'image',
    'video'
  ]

  return (
    <div>
      <div className='py-12 flex justify-center'>
        <div className='max-w-7xl mx-auto sm:px-6 lg:px-8'>
          <div className='bg-white overflow-hidden shadow-md sm:rounded-lg'>
            <div className='p-6 bg-white border border-gray-200'>
              <form method='POST'>
                <div className='mb-4 text-2xl font-bold'>
                  <label htmlFor='title' className='text-xl text-gray-600'>
                    Title <span className='text-red-500'>*</span>
                  </label>
                  <br />
                  <input
                    type='text'
                    className='border-2 border-gray-300 p-2 w-full'
                    name='title'
                    id='title'
                    defaultValue=''
                  />
                </div>
                <div className='mb-4 text-2xl font-bold'>
                  <label htmlFor='description' className='text-xl text-gray-600'>
                    Tag
                  </label>
                  <br />
                  <div>
                    <MultiSelect
                      options={frameworksList}
                      onValueChange={setSelectedFrameworks}
                      defaultValue={selectedFrameworks}
                      placeholder='Select frameworks'
                      variant='inverted'
                      animation={2}
                      maxCount={4}
                    />
                  </div>
                </div>
                <div className='mb-8 text-2xl font-bold'>
                  <label htmlFor='content' className='text-xl text-gray-600'>
                    Content <span className='text-red-500'>*</span>
                  </label>
                  <br />
                  <ReactQuill value={value} onChange={setValue} modules={modules} formats={formats} />
                </div>
                <div className='flex p-1'>
                  <button className='p-3 bg-blue-500 text-white hover:bg-blue-400 rounded-md'>Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
