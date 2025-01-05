import clsx from "clsx";
import PropTypes from 'prop-types';
import {useEffect, useRef} from "react";
import gsap from "gsap";

const AnimatedTitle = ({title, containerClass}) => {
    // Fix issue with props validation warning
    AnimatedTitle.propTypes = {
        title: PropTypes.string,
        containerClass: PropTypes.string,
    };

    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(()=>{
            const titleAnimation = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: '100 bottom',
                    end: 'center bottom',
                    toggleActions: 'play none none reverse',
                }
            });

            titleAnimation.to('.animated-word', {
                opacity: 1,
                transform: 'translate3d(0, 0, 0) rotateY(0deg) rotateX(0deg)',
                ease: 'power2.inOut',
                stagger: 0.04,
            });
        },containerRef)

        return () => {
            ctx.revert();
        }

    }, []);

  return (
    <div ref={containerRef}
      className={clsx('animated-title', containerClass)
      }
    >
        {/*Add ability to animate each word separately */}
        {title.split('<br/>').map((line, index) => (
            <div key={index} className={'flex-center max-w-full flex-wrap gap-2 px-10 md:gap-3'}>
                {line.split(' ').map((word, i) => (
                <span key={i} className={'animated-word'} dangerouslySetInnerHTML={{__html:word}}/>
                ))}
            </div>
        ))}
    </div>
  );
};
export default AnimatedTitle;
