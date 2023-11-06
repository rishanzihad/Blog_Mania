
const CommentCard = ({ single }) => {
    console.log(single);
    const { comment, name, image } = single;

    return (
        <div className="flex bg-gray-400 h-16 rounded-lg  ">
            <div className="p-4 gap-4 flex w-20 -mt-2   ml-10 h-20 justify-center">
           
                <img src={image} alt='' className="rounded-full" />
                <p className="inline-block">{name}</p>
            </div>
            <div className="flex-1 text-center -mt-4  py-10">
                <p>{comment}</p>
            </div>
        </div>
    );
};

export default CommentCard;
