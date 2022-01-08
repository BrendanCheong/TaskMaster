import { useState } from "react";

const ViewTask = () => {

    const [completed, setCompleted] = useState(false);

    const handleCompletion = () => {
        setCompleted(!completed);
    };

    return (
        <div className="flex-col flex-1 w-full h-full p-5 space-y-24 text-4xl bg-zinc-100 font-poppins">
            <div className="w-full h-full p-5 bg-white shadow-lg rounded-xl">
                <div className="relative flex flex-col md:flex-row">
                    <h1 className="p-3 font-bold">HEADLINE BABY</h1>
                    <div className="flex flex-row p-3 space-x-6 text-base md:absolute md:right-0 md:top-0 font-roboto">
                        <button className="px-4 py-2 text-white transition duration-300 bg-indigo-500 rounded-md hover:bg-indigo-700">edit</button>
                        <button className="px-4 py-2 text-white transition duration-300 bg-red-500 rounded-md hover:bg-red-700">delete</button>
                        {completed
                            ? <>
                                <button className="px-4 py-2 text-sm text-white transition duration-300 bg-teal-500 rounded-md hover:bg-teal-700"
                                    onClick={() => handleCompletion()}>Completed</button>
                            </>
                            : <>
                                <button className="px-4 py-2 text-sm text-white transition duration-300 bg-indigo-500 rounded-md hover:bg-indigo-700"
                                    onClick={() => handleCompletion()}>Set Complete</button>
                            </>}
                    </div>
                </div>
                <p className="block w-full p-3 text-xl subpixel-antialiased font-light break-words whitespace-pre-line font-roboto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse venenatis turpis eu rhoncus iaculis. 
            
            Donec volutpat lacus id urna vulputate sagittis. Cras non lacus vitae felis consectetur aliquam. 
            
            Pellentesque sed risus sed odio aliquet hendrerit. Cras dictum convallis porta. 
            
            Aenean eget aliquam lorem. Sed placerat, est ut faucibus ultrices, quam erat porta orci, 
            
            nec facilisis metus magna sed neque. Cras ullamcorper pulvinar placerat. 
            
            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
            
            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
            
            Quisque dignissim lacus quis euismod tristique. Quisque lacinia tempus est ut rhoncus. 
            
            Sed sed sem vitae libero iaculis ornare. Maecenas a semper mi, auctor aliquet urna. 
            
            Vivamus quis purus nec ligula imperdiet eleifend. Nunc in risus at augue tempus pretium nec eu purus.
                </p>
                <div className="flex items-center justify-center md:p-5">
                    <h2 className="w-8/12 px-5 py-2 text-base text-center text-white bg-indigo-600 rounded-3xl md:w-1/6" id="deadline">
                16/12/2035 10:00
                    </h2>
                </div>
                
                <section className="container mx-auto">
                    <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
                    #Bevy
                    </span>
                    <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
                    #Bevy
                    </span>
                    <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
                    #Bevy
                    </span>
                    <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
                    #Bevy
                    </span>
                    <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
                    #Bevy
                    </span>
                </section>
            </div>
        </div>
    );
};

export default ViewTask;
