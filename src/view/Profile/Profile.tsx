import React from 'react'
import { useParams } from 'react-router-dom'
import { context } from '../../context/Context';
import { getSession, getUserById } from '../../services/user';
import { TUser } from '../../context/types/user';

export default function Profile() {
  const { user_id } = useParams();

  const [ user, setUser ] = React.useState<TUser | undefined>(undefined);

  const { state } = React.useContext(context)


  React.useEffect(() => {

    if (user_id && state.token) {
      getUserById(user_id, state.token)
        .then((res) => {
          setUser(res.user)
        })
    } 
    else if (state.token) {
      getSession(state.token)
        .then(res => {
          setUser(res.user)
        })
    }
  }, [user_id, state.token])


  return (
    <div>
      {
        user ?
          <>{user}</>
          : <>Ney</>
      }
    </div>
  )
}
