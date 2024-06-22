// eslint-disable-next-line import/no-unresolved
import Header from '@/components/Header'

interface Props {
  children: React.ReactNode
}

export default function MainLayout({ children }: Props) {
  return (
    <div>
      <Header />
      {children}
    </div>
  )
}
