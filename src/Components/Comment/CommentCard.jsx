
const CommentCard = ({ single }) => {
    console.log(single);
    const { comment, name, image } = single;

    return (
        <div className="flex bg-gray-400 rounded-lg  ">
            <div className="p-4 w-20 justify-center">
                <img src={image} alt='' className="rounded-full" />
                <h1 className="inline">{name}</h1>
            </div>
            <div className="flex-1 text-center py-10">
                <p>{comment}</p>
            </div>
        </div>
    );
};

export default CommentCard;
