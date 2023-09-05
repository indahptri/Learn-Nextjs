const PostList = () => {
    return ( 
        <div className="flex space-x-8 justify-center w-full">
            <div className="flex items-center w-1/5">
                <img alt="Image" />
            </div>
            <div className="flex flex-col w-3/5">
                <h4 className="text-xl">Project Title</h4>
                <p className="text-lg">
                    Project Short Description
                </p>
            </div>
        </div>
     );
}
 
export default PostList;