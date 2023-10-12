import React from 'react'
import { context } from '../../context/Context'
import { logout } from '../../context/actions/auth';

export default function LogoutView() {

  const { dispatch } = React.useContext(context);

  React.useEffect( () => {
    dispatch(logout())
  }, [])

  return (
    <div>LogoutView</div>
  )
}
