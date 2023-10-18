// import React from "react";
// import { context } from "../context/Context";
// import { login } from "../context/actions/auth";
// import { refreshSession } from "../services/user";

const useSession = () => {
  // const {state, dispatch } = React.useContext(context)

  // const handlerRefresh = React.useCallback(() => {
  //   const token = localStorage.getItem('token')
  //   if (token) {
  //     refreshSession(token)
  //       .then(res => {
  //         dispatch(login({
  //           token: res.token,
  //           user: {
  //             _id: res.user._id,
  //             name: res.user.name,
  //             email: res.user.email
  //           }
  //         }))
  //         localStorage.setItem('token', res.token)
  //       }).catch( () => localStorage.removeItem('token'))
  //   } else 
  // }, [dispatch])

  // React.useEffect( () => {
  //   handlerRefresh()
  //   setTimeout(handlerRefresh, 1.5 * 60 * 60 * 1000)
  // }, [handlerRefresh])
}

export default useSession