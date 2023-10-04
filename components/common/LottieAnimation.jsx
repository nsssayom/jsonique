import { useRef, useEffect } from 'react';
import lottie from 'lottie-web';

const LottieAnimation = ({ animationData }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const animation = lottie.loadAnimation({
      container: containerRef.current,
      renderer: 'svg', // or 'canvas', 'html'
      loop: true,
      autoplay: true,
      animationData: animationData,
      preserveAspectRatio: 'xMidYMid slice'
    });


    return () => {
      // Cleanup when the component unmounts
      animation.destroy();
    };
  }, [animationData]);

  return <div className="h-28 2xl:h-32" ref={containerRef}></div>;
};

export default LottieAnimation;
