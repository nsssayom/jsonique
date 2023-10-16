import animationData from '@/public/lottie/downArrowsAnimation.json';
import LottieAnimation from '@/components/common/LottieAnimation';

export default function Footer({ data, activePage, setActivePage }) {
  const totalNavbarItems = data?.nav?.navMenus?.length;

  return (
    <div className="bg-gradient-to-b from-white to-[#EBEBEB] h-28 2xl:h-32">
      <div className="flex flex-col items-center justify-center">
        {totalNavbarItems === activePage +1  ? null : (
          <LottieAnimation animationData={animationData} activePage={activePage} setActivePage={setActivePage} />
        )}
      </div>
    </div>
  );
}
