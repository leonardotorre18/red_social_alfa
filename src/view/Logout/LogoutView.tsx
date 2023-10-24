import React from 'react'
import { context } from '../../context/Context'
import { clearAuth } from '../../context/actions/auth';

export default function LogoutView() {

  const { dispatch } = React.useContext(context);

  React.useEffect( () => {
    dispatch(clearAuth())
  }, [])

  return (
    <div>LogoutView</div>
  )
}
