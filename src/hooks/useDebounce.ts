// Debounces a value by a specified delay.

import { useEffect, useState } from "react";

export function useDebouncedValue(value: string, delay: number) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

// USAGE EXAMPLE:

// const [query, setQuery] = useState("");
// const debouncedQuery = useDebouncedValue(query, 500);
