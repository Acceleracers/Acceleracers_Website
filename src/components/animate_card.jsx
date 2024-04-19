import { useState, useEffect, useRef } from 'react';

const CountUp = ({ x }) => {
    const [count, setCount] = useState(0);
    const [inViewport, setInViewport] = useState(false);
    const divRef = useRef(null);
  
    const handleIntersection = ([entry]) => {
      setInViewport(entry.isIntersecting);
    };
  
    useEffect(() => {
      const observer = new IntersectionObserver(handleIntersection, {
        threshold: 0.5,
      });
    
      if (divRef.current) {
        observer.observe(divRef.current);
      }
    
      return () => {
        if (divRef.current) {
          observer.unobserve(divRef.current);
        }
      };
    }, []);
  
    useEffect(() => {
      if (inViewport && count < x) {
        const intervalId = setInterval(() => {
          setCount((prevCount) => Math.min(prevCount + 1, x));
        }, 50);
  
        return () => clearInterval(intervalId);
      }
    }, [inViewport, count, x]);
  
    return (
      <div ref={divRef}>
        <h1 style={{fontSize:'40px'}}>{count}</h1>
      </div>
    );
  };

  export default CountUp