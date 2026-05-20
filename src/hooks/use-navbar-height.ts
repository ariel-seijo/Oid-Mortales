"use client";

import { useState, useEffect, useRef } from "react";

export function useNavbarHeight(selector: string) {
  const [height, setHeight] = useState(0);
  const observerRef = useRef<ResizeObserver | null>(null);

  useEffect(() => {
    const el = document.querySelector(selector);
    if (!(el instanceof HTMLElement)) return;

    observerRef.current = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setHeight(entry.target.getBoundingClientRect().height);
      }
    });

    observerRef.current.observe(el);
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setHeight(el.getBoundingClientRect().height);

    return () => observerRef.current?.disconnect();
  }, [selector]);

  return height;
}
