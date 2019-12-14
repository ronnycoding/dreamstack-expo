'use strict' // --> OFF
/* eslint consistent-return: 0 */ const __awaiter =
  (this && this.__awaiter) ||
  function(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function(resolve) {
            resolve(value)
          })
    }
    return new (P || (P = Promise))(function(resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value))
        } catch (e) {
          reject(e)
        }
      }
      function rejected(value) {
        try {
          step(generator.throw(value))
        } catch (e) {
          reject(e)
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected)
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next())
    })
  }
const __generator =
  (this && this.__generator) ||
  function(thisArg, body) {
    let _ = {
      label: 0,
      sent: function() {
        if (t[0] & 1) throw t[1]
        return t[1]
      },
      trys: [],
      ops: [],
    }
    let f
    let y
    let t
    let g
    return (
      (g = { next: verb(0), throw: verb(1), return: verb(2) }),
      typeof Symbol === 'function' &&
        (g[Symbol.iterator] = function() {
          return this
        }),
      g
    )
    function verb(n) {
      return function(v) {
        return step([n, v])
      }
    }
    function step(op) {
      if (f) throw new TypeError('Generator is already executing.')
      while (_) {
        try {
          if (
            ((f = 1),
            y &&
              (t =
                op[0] & 2
                  ? y.return
                  : op[0]
                  ? y.throw || ((t = y.return) && t.call(y), 0)
                  : y.next) &&
              !(t = t.call(y, op[1])).done)
          )
            return t
          if (((y = 0), t)) op = [op[0] & 2, t.value]
          switch (op[0]) {
            case 0:
            case 1:
              t = op
              break
            case 4:
              _.label++
              return { value: op[1], done: false }
            case 5:
              _.label++
              y = op[1]
              op = [0]
              continue
            case 7:
              op = _.ops.pop()
              _.trys.pop()
              continue
            default:
              if (
                !((t = _.trys), (t = t.length > 0 && t[t.length - 1])) &&
                (op[0] === 6 || op[0] === 2)
              ) {
                _ = 0
                continue
              }
              if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                _.label = op[1]
                break
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1]
                t = op
                break
              }
              if (t && _.label < t[2]) {
                _.label = t[2]
                _.ops.push(op)
                break
              }
              if (t[2]) _.ops.pop()
              _.trys.pop()
              continue
          }
          op = body.call(thisArg, _)
        } catch (e) {
          op = [6, e]
          y = 0
        } finally {
          f = t = 0
        }
      }
      if (op[0] & 5) throw op[1]
      return { value: op[0] ? op[1] : void 0, done: true }
    }
  }
exports.__esModule = true
const react_1 = require('react')
const expo_1 = require('expo')
const Permissions = require('expo-permissions')
const ENDPOINT =
  'https://us-central1-dac-notifier.cloudfunctions.net/registerForPushNotifications'
function useRegisterForPushNotifications(username) {
  const _this = this
  const _a = react_1.useState(false)
  const isRegistering = _a[0]
  const setIsRegistering = _a[1]
  const _b = react_1.useState(null)
  const error = _b[0]
  const setError = _b[1]
  const register = function() {
    return __awaiter(_this, void 0, void 0, function() {
      let existingStatus
      let finalStatus
      let status_1
      let token
      let pushNotificationRegisterError_1
      return __generator(this, function(_a) {
        switch (_a.label) {
          case 0:
            setIsRegistering(true)
            setError(null)
            _a.label = 1
          case 1:
            _a.trys.push([1, 6, 7, 8])
            return [
              4 /* yield*/,
              Permissions.getAsync(Permissions.NOTIFICATIONS),
            ]
          case 2:
            existingStatus = _a.sent().status
            finalStatus = existingStatus
            if (!(existingStatus !== 'granted')) return [3 /* break*/, 4]
            return [
              4 /* yield*/,
              Permissions.askAsync(Permissions.NOTIFICATIONS),
            ]
          case 3:
            status_1 = _a.sent().status
            finalStatus = status_1
            _a.label = 4
          case 4:
            if (finalStatus !== 'granted') {
              return [2 /* return*/]
            }
            return [4 /* yield*/, expo_1.Notifications.getExpoPushTokenAsync()]
          case 5:
            token = _a.sent()
            return [
              2 /* return*/,
              fetch(ENDPOINT, {
                method: 'POST',
                headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  data: {
                    token: { value: token },
                    user: { username: username },
                  },
                }),
              }),
            ]
          case 6:
            pushNotificationRegisterError_1 = _a.sent()
            setError(pushNotificationRegisterError_1)
            return [3 /* break*/, 8]
          case 7:
            setIsRegistering(false)
            return [7 /* endfinally*/]
          case 8:
            return [2 /* return*/]
        }
      })
    })
  }
  return [register, isRegistering, error]
}
exports.default = useRegisterForPushNotifications
