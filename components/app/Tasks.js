const Tasks = () => {
    return (
        <div className="block px-4 py-2.5 hover:text-slate-700 transition duration-300 rounded-md w-11/12 bg-white text-black"> 
            <div className="max-w-sm overflow-hidden rounded">
                <div className="px-6 py-4">
                    <div className="mb-2 text-xl font-bold truncate text-ellipsis">Mountain Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Voluptatibus quia, Nonea! 
                            Maiores et perferendis eaque, 
                            exercitationem praesentium nihil.</div>
                    <p className="text-base text-gray-700 text-ellipsis">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Voluptatibus quia, Nonea! 
                            Maiores et perferendis eaque, 
                            exercitationem praesentium nihil.
                    </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                    <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">#photography</span>
                    <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">#travel</span>
                    <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">#winter</span>
                    <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">#Work</span>
                    <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">#Leisure</span>
                    <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">#School</span>
                    <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">#Movie</span>
                </div>
            </div>
        </div>
    );
};

export default Tasks;
