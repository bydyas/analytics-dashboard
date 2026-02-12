import { useCallback, useEffect, useRef } from 'react'

export const useDebouncedCallback = <T extends (...args: any[]) => void>(
  callback: T,
  delay: number = 300
) => {
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const callbackRef = useRef(callback)

  useEffect(() => {
    callbackRef.current = callback
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    }
  }, [callback])

  const debounced = useCallback(
    (...args: Parameters<T>) => {
      if (timerRef.current) {
        clearTimeout(timerRef.current)
      }

      timerRef.current = setTimeout(() => {
        callbackRef.current(...args)
      }, delay)
    },
    [delay]
  )

  return debounced;
}