import Lottie from 'react-lottie';
import animationData from '@/public/lottie/downArrowsAnimation.json';

export default function Footer() {
  return (
    <div className="bg-gradient-to-b from-white to-[#EBEBEB]">
      <div className="flex flex-col items-center justify-center">
        <div className="h-28 2xl:h-32">
          <Lottie options={{
            loop: true,
            autoplay: true,
            animationData: animationData,
            rendererSettings: {
              preserveAspectRatio: 'xMidYMid slice'
            }
          }} />
        </div>
      </div>
    </div>
  );
}