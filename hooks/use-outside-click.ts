"use client";

import { useEffect, type RefObject } from "react";

export function useOutsideClick<T extends HTMLElement>(
  ref: RefObject<T | null>,
  callback: () => void,
) {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      const element = ref.current;
      const target = event.target;

      if (!element || !(target instanceof Node)) {
        return;
      }

      if (!element.contains(target)) {
        callback();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [ref, callback]);
}