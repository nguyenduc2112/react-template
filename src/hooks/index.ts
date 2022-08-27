import { useEffect, useRef, useMemo } from 'react'
import { useLocation } from 'react-router-dom'

export const usePrevious: any = (state: any): any => {
  const ref: any = useRef()

  useEffect((): void => {
    ref.current = state
  }, [state])

  return ref.current
}

const paramsToObject: any = (entries: any): object => {
  const result: any = {}
  for (const [key, value] of entries) {
    // each 'entry' is a [key, value] tupple
    result[key] = value
  }
  return result
}
export const useQuery: any = (state: any): void => {
  const { search } = useLocation()

  const query: any = useMemo((): any => {
    return new URLSearchParams(search)
  }, [search])

  return paramsToObject(query.entries())
}
