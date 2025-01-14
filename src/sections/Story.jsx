import AnimatedTitle from "../components/AnimatedTitle.jsx";
import {useRef} from "react";
import gsap from "gsap";
import RoundedCorners from "../components/RoundedCorners.jsx";
import Button from "../components/Button.jsx";

const Story = () => {

    const frameRef = useRef(null);

    const handleMouseLeave = () => {
        const element = frameRef.current;

        gsap.to(element, {
            duration: 0.3,
            rotateY: 0,
            rotateX: 0,
            ease: 'power1.inOut',
        });
    }

    const handleMouseMove = (e) => {
        const {clientX, clientY} = e;
        const element = frameRef.current;

        if (!element) return;

        const rect = element.getBoundingClientRect();
        const x = clientX - rect.left;
        const y = clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -10;
        const rotateY = ((x - centerX) / centerX) * 10;

        gsap.to(element, {
            duration: 0.3,
            rotateY,
            rotateX,
            transformPerspective: 500,
            ease: 'power1.inOut',
        });
    }

    return (
        <section id={'story'} className={'min-h-dvh w-screen bg-black text-blue-50'}>
            <div className={'flex size-full flex-col items-center py-10 pb-24'}>
                <p className={'font-general text-sm uppercase md:text-[10px]'}>the multiverse ip world</p>
                <div className={'relative size-full'}>
                    <AnimatedTitle title={'The st<b>o</b>ry of <br/> a hidden real<b>m</b>'} sectionId={'#story'} containerClass={'mt-5 pointer-events-none mix-blend-difference relative z-10'}
                    />

                    <div className={'story-img-container'}>
                        <div className={'story-img-mask'}>
                            <div className={'story-img-content'}>
                                <img className={'object-contain'}
                                     src={'/img/entrance.webp'}
                                     alt={'entrance'}
                                     ref={frameRef}
                                     onMouseLeave={handleMouseLeave}
                                     onMouseUp={handleMouseLeave}
                                     onMouseEnter={handleMouseLeave}
                                     onMouseMove={handleMouseMove}
                                />
                            </div>
                        </div>
                        <RoundedCorners />
                    </div>
                </div>

                <div className={'-mt-80 flex w-full justify-center md:-mt-64 md:me-44 md:justify-end'}>
                    <div className={'flex h-full w-fit flex-col items-center md:items-start'}>
                        <p className={'mt-3 max-w-sm font-circular-web text-center text-violet-50 md:text-start'}>Where realms converge, lies Znetry and the boundless realm of the metaverse. Discover the world of Zentry, its secret realm, and the boundless realm of the metaverse.</p>
                        <Button id={'realm-button'} title={'Discover prologue'} containerClass={'mt-5'} />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Story
