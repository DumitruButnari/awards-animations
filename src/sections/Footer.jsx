import {FaFacebook, FaGithub, FaInstagram, FaLinkedin} from "react-icons/fa";

const SocialLink = [
    {
        href: 'https://www.linkedin.com/in/dumitrubutnari/',
        icon: <FaLinkedin />
    },
    {
        href: 'https://github.com/DumitruButnari',
        icon: <FaGithub />
    },
    {
        href: 'https://www.facebook.com/DumitruButnariDoxa/',
        icon: <FaFacebook />
    },
    {
        href: 'https://www.instagram.com/dimadoxadeo/',
        icon: <FaInstagram />
    }
]

export const Footer = () => {
    return (
        <footer id={'footer'} className={'w-screen bg-violet-300 py-4 text-black'}>
            <div className={'container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row'}>
                <p className={'text-center text-sm md:text-left'}>&copy; {new Date().getFullYear()} Zentry. All rights reserved</p>
                <div className={'flex justify-center gap-4 md:justify-start'}>
                    {SocialLink.map((social) => (
                        <a key={social.href} href={social.href} target={'_blank'} rel={'noreferrer noopener'} className={'text-black text-lg transition-colors duration-500 ease-in-out hover:text-white'}>
                            {social.icon}
                        </a>
                    ))}
                </div>
                <a href="#privac-policy" className={'text-center text-sm transition-colors duration-300 ease hover:underline hover:text-white md:text-right'}>Policy & Privacy</a>
            </div>
        </footer>
    )
}
