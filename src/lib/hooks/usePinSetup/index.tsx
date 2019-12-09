import React, {
  useReducer,
  useContext,
  createContext,
  useCallback,
} from 'react'
import PropTypes from 'prop-types'

interface PinSetupState {
  pin: string
  pinConfirmation: string
}

const PinSetupContext = createContext<PinSetupState>(null)
const PinSetupDispatchContext = createContext<React.Dispatch<any>>(null)

const initialState: PinSetupState = {
  pin: '',
  pinConfirmation: '',
}

const SET_PIN = 'SET_PIN'
const SET_PIN_CONFIRMATION = 'SET_PIN_CONFIRMATION'
const RESET = 'RESET'

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_PIN:
    case SET_PIN_CONFIRMATION:
      return { ...state, ...payload }
    case RESET:
      return initialState
    default:
      return state
  }
}

export const PinSetupProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <PinSetupDispatchContext.Provider value={dispatch}>
      <PinSetupContext.Provider value={state}>
        {children}
      </PinSetupContext.Provider>
    </PinSetupDispatchContext.Provider>
  )
}

PinSetupProvider.propTypes = { children: PropTypes.node.isRequired }

export const usePinSetup = () => {
  return useContext(PinSetupContext)
}

export const usePinSetupActions = () => {
  const dispatch = useContext(PinSetupDispatchContext)
  const setPin = useCallback(
    (pin: string) => {
      dispatch({ type: SET_PIN, payload: { pin } })
    },
    [dispatch]
  )
  const setPinConfirmation = useCallback(
    (pin: string) => {
      dispatch({
        type: SET_PIN_CONFIRMATION,
        payload: { pinConfirmation: pin },
      })
    },
    [dispatch]
  )
  const reset = useCallback(() => {
    dispatch({ type: RESET })
  }, [dispatch])
  return {
    setPin,
    setPinConfirmation,
    reset,
  }
}
