import PropTypes from "prop-types";
import Button from "../components/Button.jsx";

const ImageBox = ({src, clipPathClass, alt}) => {
    ImageBox.propTypes = {
        src: PropTypes.string.isRequired,
        clipPathClass: PropTypes.string.isRequired,
        alt: PropTypes.string.isRequired,
    }

    return (
        <div className={clipPathClass}>
            <img src={src} alt={alt}/>
        </div>
    )
}
const Contact = () => {
    return (
        <div id={'contact'} className={'my-20 min-h-96 w-screen px-10'}>
            <div className={'relative rounded-lg bg-black py-24 text-blue-50 sm:overflow-hidden'}>
                <div className={'absolute -left-20 top-0 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96'}>
                    <ImageBox clipPathClass={'contact-clip-path-1'} src={'/img/contact-1.webp'} alt={'image'}/>
                    <ImageBox clipPathClass={'contact-clip-path-2 translate-y-60 lg:translate-y-40'} src={'/img/contact-2.webp'} alt={'image2'}/>
                </div>
                <div className={'absolute -top-40 left-20 w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80'}>
                    <ImageBox clipPathClass={'absolute md:scale-125'} src={'/img/swordman-partial.webp'} alt={'image-sword'}/>
                    <ImageBox clipPathClass={'sword-man-clip-path md:scale-125'} src={'/img/swordman.webp'} alt={'image-sword2'}/>
                </div>
                <div className={'flex flex-col items-center text-center'}>
                    <p className={'font-general text-[10px] uppercase'}>Join Zentry</p>
                    <p className={'special-font mt-10 text-5xl w-full font-zentry leading-[0.9] md:text-[6rem]'}>Lets b<b>u</b>ild the <br/> new <b>e</b>ra of <br/> ga<b>m</b>ing t<b>o</b>gether!</p>
                    <Button title={'Contact Us'} containerClass={'mt-10 cursor-pointer'}/>
                </div>
            </div>
        </div>
    )
}
export default Contact
