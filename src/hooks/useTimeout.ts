// Executes a function after a given number of milliseconds.

import { useEffect, useRef } from "react";

export function useTimeout(callback: () => void, delay: number): void {
  const savedCallback = useRef(callback);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (delay === null) return;
    const id = setTimeout(() => savedCallback.current(), delay);
    return () => clearTimeout(id);
  }, [delay]);
}

// USAGE EXAMPLE:

// useTimeout(() => {
//   console.log("Executed after 1 second");
// }, 1000);
