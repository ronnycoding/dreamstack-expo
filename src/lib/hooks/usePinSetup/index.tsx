import React, {
  useReducer,
  useContext,
  createContext,
  useCallback,
} from 'react'

import { hashWithSalt } from '../../crypto/hashing'

interface PinSetupState {
  pin: string
  pinConfirmation: string
  pinHash: string
  loadingPinHash: boolean
  pinHashLoaded: boolean
}

const PinSetupContext = createContext<PinSetupState>(null)
const PinSetupDispatchContext = createContext<React.Dispatch<any>>(null)

const initialState: PinSetupState = {
  pin: '',
  pinConfirmation: '',
  pinHash: '',
  loadingPinHash: false,
  pinHashLoaded: false,
}

const LOADING_PIN_HASH = 'LOADING_PIN_HASH'
const PIN_HASH_LOADED = 'PIN_HASH_LOADED'
const SET_PIN = 'SET_PIN'
const SET_PIN_CONFIRMATION = 'SET_PIN_CONFIRMATION'
const RESET = 'RESET'

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOADING_PIN_HASH:
      return {
        ...state,
        pinHash: '',
        loadingPinHash: true,
        pinHashLoaded: false,
      }
    case PIN_HASH_LOADED:
      return {
        ...state,
        ...payload,
        loadingPinHash: false,
        pinHashLoaded: true,
      }
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

  const hashPin = useCallback(
    (pin: string) => {
      dispatch({ type: LOADING_PIN_HASH })
      const hash = hashWithSalt(pin)
      dispatch({ type: PIN_HASH_LOADED, payload: { pinHash: hash } })
    },
    [dispatch]
  )

  const reset = useCallback(() => {
    dispatch({ type: RESET })
  }, [dispatch])

  return {
    setPin,
    setPinConfirmation,
    hashPin,
    reset,
  }
}
