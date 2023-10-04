import animationData from '@/public/lottie/downArrowsAnimation.json';
import LottieAnimation from '@/components/common/LottieAnimation';

export default function Footer() {
  return (
    <div className="bg-gradient-to-b from-white to-[#EBEBEB]">
      <div className="flex flex-col items-center justify-center">
        <LottieAnimation animationData={animationData} />
      </div>
    </div>
  );
}