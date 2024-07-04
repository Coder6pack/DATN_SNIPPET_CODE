/* eslint-disable import/no-unresolved */
import { Link } from 'react-router-dom'
import path from '@/constants/path'

export default function UserSideNav() {
  return (
    <div>
      UserSideNav
      <div>
        <Link to={path.profile}> Profile</Link>
      </div>
      <div>
        <Link to={path.managerSnippet}>Manager</Link>
      </div>
    </div>
  )
}
