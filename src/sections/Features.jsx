import PropTypes from "prop-types";
import {TiLocationArrow} from "react-icons/ti";

const BentoCard = ({src, title, description}) => {
    BentoCard.propTypes = {
        src: PropTypes.string,
        title: PropTypes.string,
        description: PropTypes.string,
    }
    return (
        <div className={'absolute inset-0'}>
            <video
                className={'absolute left-0 top-0 size-full object-cover object-center'}
                autoPlay
                loop
                muted
                src={src}
            />
            <div className={'relative z-10 flex size-full flex-col justify-between p-5 text-blue-50'}>
                <div>
                    <h2 className={'bento-title special-font'}>{title}</h2>
                    {description && <p className={'mt-3 max-w-80 text-xs md:text-base bg-black/50 rounded-md border border-blue-50/30 p-5'}>{description}</p>}
                </div>
            </div>
        </div>
    )
}

const Features = () => {
    return (
        <section className={'bg-black pb-52'}>
            <div className={'container mx-auto px-3 md:px-10'}>
                <div className={'px-5 py-32'}>
                    <p className={'font-circular-web text-lg text-blue-50'}>Into the MetaGame Layer</p>
                    <p className={'max-w-md font-circular-web text-lg text-blue-50 opacity-50'}>Immerse yourself in the
                        world of Zentry Expand your horizons and embark on a journey of endless possibilities.</p>
                </div>
                <div className={'border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]'}>
                    <BentoCard
                        src={'videos/feature-1.mp4'}
                        title={<>radi<b>n</b>t</>}
                        description={'A cross-platform, decentralized, and community-driven NFT marketplace.'}
                    />
                </div>
                <div className={'grid h-[135vh] grid-cols-2 grid-rows-3 gap-7'}>
                    <div className={'bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2'}>
                        <BentoCard
                            src={'videos/feature-2.mp4'}
                            title={<>bento<b>swap</b></>}
                            description={'A decentralized exchange for Zentry and other tokens.'}
                        />
                    </div>
                    <div className={'bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0'}>
                        <BentoCard
                            src={'videos/feature-3.mp4'}
                            title={<>n<b>e</b>xus</>}
                            description={'A gamified platform for NFTs, DeFi, and DAOs, all in one place.'}
                        />
                    </div>
                    <div className={'bento-tilt_1 me-14 md:col-span-1 md:me-0'}>
                        <BentoCard
                            src={'videos/feature-4.mp4'}
                            title={<>az<b>u</b>l</>}
                            description={'A decentralized social network for creators and collectors. Keep up with the latest trends and connect with like-minded individuals.'}
                        />
                    </div>

                    <div className={'bento-tilt_2'}>
                        <div className={'flex size-full flex-col justify-between p-5 bg-violet-300'}>
                            <h2 className={'bento-title special-font max-w-64 text-black'}>Mo<b>r</b>e co<b>m</b>ing soon</h2>
                            <TiLocationArrow className={'m-5 scale-[5] self-end'}/>
                        </div>
                    </div>

                    <div className={'bento-tilt_2'}>
                        <video
                            className={'size-full object-cover object-center'}
                            autoPlay
                            loop
                            muted
                            src={'./videos/feature-5.mp4'}/>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Features
