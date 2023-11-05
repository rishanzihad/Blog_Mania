

const Banner = () => {
    return (
        <div className="hero min-h-[70vh]" style={{ backgroundImage: 'url(https://i.ibb.co/MsYZ5Hm/Wallpaper-4k-Preview-Rome.jpg)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="">
                    <h1 className="mb-5 md:text-5xl text-3xl font-bold underline">Blog Mania</h1>
                    <p className="mb-5 max-w-4xl font-semibold">Join our community of avid readers, thought-seekers, and learners. <br /> Explore, engage, and empower your mind with us. Your next adventure in the world of ideas begins here.</p>
                    <button className="btn bg-red-500">Explore Us</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;