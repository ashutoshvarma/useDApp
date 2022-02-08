import { createContext } from 'react'
import { Action, ChainState } from '../common'

export const ChainStateContext = createContext<{
  value?: {
    blockNumber: number
    state?: ChainState
    error?: unknown
  }
  multicallAddress: string | undefined
  dispatchCalls: (action: Action) => void
}>({
  multicallAddress: '',
  dispatchCalls: () => {
    // empty
  },
})