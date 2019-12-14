'use strict'
var __assign =
  (this && this.__assign) ||
  function() {
    __assign =
      Object.assign ||
      function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i]
          for (const p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) {
              t[p] = s[p]
            }
          }
        }
        return t
      }
    return __assign.apply(this, arguments)
  }
exports.__esModule = true
const react_1 = require('react')
const hashing_1 = require('../../crypto/hashing')
const PinSetupContext = react_1.createContext(null)
const PinSetupDispatchContext = react_1.createContext(null)
const initialState = {
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
const reducer = function(state, _a) {
  if (state === void 0) {
    state = initialState
  }
  const type = _a.type
  const payload = _a.payload
  switch (type) {
    case LOADING_PIN_HASH:
      return __assign(__assign({}, state), {
        pinHash: '',
        loadingPinHash: true,
        pinHashLoaded: false,
      })
    case PIN_HASH_LOADED:
      return __assign(__assign(__assign({}, state), payload), {
        loadingPinHash: false,
        pinHashLoaded: true,
      })
    case SET_PIN:
    case SET_PIN_CONFIRMATION:
      return __assign(__assign({}, state), payload)
    case RESET:
      return initialState
    default:
      return state
  }
}
exports.PinSetupProvider = function(_a) {
  const children = _a.children
  const _b = react_1.useReducer(reducer, initialState)
  const state = _b[0]
  const dispatch = _b[1]
  return (
    <PinSetupDispatchContext.Provider value={dispatch}>
      <PinSetupContext.Provider value={state}>
        {children}
      </PinSetupContext.Provider>
    </PinSetupDispatchContext.Provider>
  )
}
exports.usePinSetup = function() {
  return react_1.useContext(PinSetupContext)
}
exports.usePinSetupActions = function() {
  const dispatch = react_1.useContext(PinSetupDispatchContext)
  const setPin = react_1.useCallback(
    function(pin) {
      dispatch({ type: SET_PIN, payload: { pin: pin } })
    },
    [dispatch],
  )
  const setPinConfirmation = react_1.useCallback(
    function(pin) {
      dispatch({
        type: SET_PIN_CONFIRMATION,
        payload: { pinConfirmation: pin },
      })
    },
    [dispatch],
  )
  const hashPin = react_1.useCallback(
    function(pin) {
      dispatch({ type: LOADING_PIN_HASH })
      const hash = hashing_1.hashWithSalt(pin)
      dispatch({ type: PIN_HASH_LOADED, payload: { pinHash: hash } })
    },
    [dispatch],
  )
  const reset = react_1.useCallback(
    function() {
      dispatch({ type: RESET })
    },
    [dispatch],
  )
  return {
    setPin: setPin,
    setPinConfirmation: setPinConfirmation,
    hashPin: hashPin,
    reset: reset,
  }
}
