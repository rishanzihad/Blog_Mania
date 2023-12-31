import {motion} from 'framer-motion'

import { fadeIn } from '../FormarMotion/Framer'

const Banner = () => {
    return (
        <motion.div
        variants={fadeIn('down',0.40)}
        initial='hidden'
        whileInView={"show"}
        viewport={{once:false,amout:0.9}} className="hero mt-5 min-h-[70vh]" style={{ backgroundImage: 'url(https://i.ibb.co/MsYZ5Hm/Wallpaper-4k-Preview-Rome.jpg)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="">
                    <h1 className="mb-5 md:text-5xl text-3xl font-bold underline">Blog Mania</h1>
                    <p className="mb-5 max-w-4xl font-semibold">Join our community of avid readers, thought-seekers, and learners. <br /> Explore, engage, and empower your mind with us. Your next adventure in the world of ideas begins here.</p>
                    <button className="btn bg-red-500">Explore Us</button>
                </div>
            </div>
        </motion.div>
    );
};

export default Banner;