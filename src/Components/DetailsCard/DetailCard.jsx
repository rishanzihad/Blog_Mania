/* eslint-disable react/prop-types */


const DetailCard = ({ blog }) => {
    const { title,  image, category, shortDescription, longDescription } = blog
    return (
        <div className="mt-10">
            <div className="relative flex flex-col text-gray-700 bg-white shadow-md  rounded-xl bg-clip-border">
                <div className="relative   mx-4 -mt-6 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
                    <div className=" flex-1 w-full">
                        <img
                            src={image}
                            alt="img-blur-shadow"
                            className=" h-full  w-full "


                        />
                    </div>
                </div>
                <div className="p-6">
                    <div className="flex justify-around">
                        <h5 className="block mb-2 font-semibold font-sans text-4xl antialiased  leading-snug tracking-normal text-blue-gray-900">
                            {title}
                        </h5>

                    </div>
                    <div className="  mb-2">
                        <p className="block text-red-400 font-sans font-bold text-base antialiased  leading-relaxed text-inherit">
                            Category:{category}
                        </p>
                        <p className="block font-sans font-bold text-base antialiased  leading-relaxed text-inherit">
                            <span className=" text-gray-400">Short DesCription:</span>{shortDescription}
                        </p>

                    </div>
                    <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                        {longDescription}
                    </p>
                </div>

            </div>

        </div>
    );
};

export default DetailCard;