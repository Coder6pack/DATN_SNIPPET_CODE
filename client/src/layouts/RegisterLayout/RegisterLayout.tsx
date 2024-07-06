// eslint-disable-next-line import/no-unresolved
import HeaderRegister from '@/components/HeaderRegister'

interface Props {
  children: React.ReactNode
}

export default function RegisterLayout({ children }: Props) {
  return (
    <div>
      <HeaderRegister />
      {children}
    </div>
  )
}
