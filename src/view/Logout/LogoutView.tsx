import React from 'react'
import { context } from '../../context/Context'
import { clearToken } from '../../context/actions/token';

export default function LogoutView() {

  const { dispatch } = React.useContext(context);

  React.useEffect( () => {
    dispatch(clearToken())
    
  }, [])

  return (
    <div>LogoutView</div>
  )
}
