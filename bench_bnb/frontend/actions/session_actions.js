import * as APIUTIL from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_ERRORS';

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
})

export const receiveSessionErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
})

export const login = user => dispatch => (
  APIUTIL.login(user).then(
    res => dispatch(receiveCurrentUser(res)),
    err => dispatch(receiveSessionErrors(err.responseJSON))
  )
)

export const signup = user => dispatch => (
  APIUTIL.signup(user).then(
    res => dispatch(receiveCurrentUser(res)),
    err => dispatch(receiveSessionErrors(err.responseJSON))
  )
)

export const logout = () => dispatch => (
  APIUTIL.logout().then(
    res => dispatch(receiveCurrentUser(null))
  )
)