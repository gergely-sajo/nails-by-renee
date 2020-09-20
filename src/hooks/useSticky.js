import { useEffect, useState, useRef } from 'react';
import { throttle } from 'lodash';

function useSticky() {
  const [isSticky, setSticky] = useState(false)
  const element = useRef(null)

  const handleScroll = () => {
    if (window.scrollY > 10) {setSticky(true)}
    else {setSticky(false)}
  }

  useEffect(() => {
    window.addEventListener("scroll", throttle(handleScroll, 200))
    return () => {
      window.removeEventListener("scroll", () => handleScroll)
    }
  })
  
  return { isSticky, element }
}

export default useSticky