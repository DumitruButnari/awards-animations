import {useEffect, useRef, useState} from "react";
import Button from "./Button.jsx";
import {TiLocationArrow} from "react-icons/ti";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import Loading from "./Loading.jsx";
import {ScrollTrigger} from "gsap/all";


gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(1);
    const [hasClicked, setHasClicked] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [loadedVideos, setLoadedVideos] = useState(0);

    const totalVideos = 4;
    const upcomingVideoIndex = (currentIndex % totalVideos) + 1;
    const nextVideoRef = useRef();
    const getVideoSrc = (index) => {
        return `./videos/hero-${index}.mp4`;
    }

    const handleMiniVideoClick = () => {
        setHasClicked(true);
        setCurrentIndex(upcomingVideoIndex);
    }

    const handleVideoLoad= () => {
        setLoadedVideos((prev)=>prev + 1);
    }

    useEffect(() => {
        if (loadedVideos === totalVideos-1) {
            setIsLoading(false);
        }
    }, [loadedVideos]);

    // Gsap Animations

    // Video animation
    useGSAP(()=>{
        if (hasClicked) {
            gsap.set('#next-video', {visibility: 'visible'});
            gsap.to('#next-video', {
               transformOrigin: 'center center',
                scale: 1,
                width: '100%',
                height: '100%',
                duration: 1,
                ease: 'power1.inOut',
                onStart: () => nextVideoRef.current.play(),
            });
            gsap.from('#current-video', {
                transformOrigin: 'center center',
                scale: 0,
                duration: 1.5,
                ease: 'power1.inOut',
            })
        }
    }, {dependencies: [currentIndex], revertOnUpdate:true})

    // Scroll on hero section animation

    useGSAP(()=>{
        gsap.set('#video-frame', {
            clipPath: 'polygon(50% 0%, 93% 1%, 100% 43%, 87% 89%, 68% 100%, 36% 84%, 2% 91%, 0% 43%, 3% 15%)',
            borderRadius: '10% 0% 40% 50%',
        });
        gsap.from('#video-frame', {
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 100% 100%, 100% 100%, 100% 100%, 0% 100%, 0% 100%, 0% 100%)',
            borderRadius: '0 0 0 0',
            ease: 'power1.inOut',
            scrollTrigger: {
                trigger: '#video-frame',
                start: 'center center',
                end: 'bottom center',
                scrub: true,
            }
        });
    });

  return <div className={'relative h-dvh w-screen overflow-x-hidden'}>
      {isLoading && <Loading/>}
      <h2 className={'special-font hero-heading text-black absolute lg:top-[6rem] lg:left-10'}>redefi<b>n</b>e</h2>
      <div id={'video-frame'}
           className={'relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75'}>
          <div>
              <div className={'mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg'}>
                  <div onClick={handleMiniVideoClick}
                       className={'origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100'}>
                      <video
                          ref={nextVideoRef}
                          src={getVideoSrc(currentIndex + 1)}
                          loop
                          muted
                          id={'current-video'}
                          className={'size-64 origin-center scale-150 object-cover object-center'}
                          onLoadedData={handleVideoLoad}
                      />
                  </div>
              </div>
              <video
                  src={getVideoSrc(currentIndex)}
                  ref={nextVideoRef}
                  loop
                  muted
                  autoPlay
                  id={'next-video'}
                  className={'absolute-center invisible absolute z-20 size-64 object-cover object-center'}
                  onLoadedData={handleVideoLoad}
              />
              <video
                  src={getVideoSrc(currentIndex === totalVideos - 1 ? 1 : currentIndex)}
                  loop
                  muted
                  autoPlay
                  className={'absolute left-0 top-0 size-full object-cover object-center'}
                  onLoadedData={handleVideoLoad}
              />
          </div>
          <h1 className={'special-font hero-heading absolute right-5 bottom-5 text-blue-75 z-50'}><b>Gaming</b></h1>
          <div className={'absolute left-0 top-0 z-40 size-full'}>
              <div className={'mt-24 px-5 sm:px-10'}>
                  <h2 className={'special-font hero-heading text-blue-100 '}>redefi<b>n</b>e</h2>
                  <p className={'mb-5 max-w-64 font-robert-regular text-blue-100'}>
                      Enter the MetaGame Layer <br/>
                      Unleash the Play Economy
                  </p>
                  <Button id={'watch-trailer'}
                          title={'Watch Trailer'}
                          leftIcon={<TiLocationArrow/>}
                          containerClass={'!bg-yellow-300 flex-center gap-1'}/>
              </div>
          </div>
      </div>
      <h1 className={'special-font hero-heading absolute right-5 bottom-5 text-black'}><b>Gaming</b></h1>
  </div>;
};
export default Hero;
