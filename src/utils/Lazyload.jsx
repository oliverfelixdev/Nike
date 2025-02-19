import { useState, useEffect, useRef, Suspense } from "react";

const Lazyload = ({ src: ModelComponent, type, alt = "", className = "" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) observer.disconnect();
    };
  }, []);

  if (!isVisible) {
    return <div ref={elementRef} className={className}></div>;
  }

  switch (type) {
    case "image":
      return <img src={ModelComponent} alt={alt} className={className} />;
    case "video":
      return (
        <video src={ModelComponent} className={className} preload="none" />
      );
    default:
      return null;
  }
};

export default Lazyload;
