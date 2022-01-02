const FilterTaskForm = () => {
    return (
        <>
            <form className="overflow-hidden bg-white">
                <div className="px-4 py-2 border-t border-gray-200 sm:grid sm:grid-cols-4 sm:gap-4 sm:items-start sm:pt-5 sm:px-6">
                    <label className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">Title keywords</label>
                    <div className="mt-1 sm:mt-0 sm:col-span-3">
                        <div className="flex rounded-md shadow-sm">
                            <input type="text" name="title" id="title" placeholder="Title keywords..." className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" value="">

                            </input>
                        </div>
                    </div>
                </div>
                <div className="px-4 py-2 sm:grid sm:grid-cols-4 sm:gap-4 sm:items-start sm:pt-5 sm:px-6">
                    <label className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">Description keywords</label>
                    <div className="mt-1 sm:mt-0 sm:col-span-3">
                        <div className="flex rounded-md shadow-sm">
                            <input type="text" name="description" id="description" placeholder="Description keywords..." className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" value="">

                            </input>
                        </div>
                    </div>
                </div>
                <div className="px-4 py-2 sm:grid sm:grid-cols-4 sm:gap-4 sm:items-center sm:pt-5 sm:px-6">
                    <label className="block text-sm font-medium text-gray-700">Status</label>
                    <div className="mt-1 sm:mt-0 sm:col-span-3">
                        <div className="grid grid-cols-3 gap-3">
                            <button type="button" className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                Show all status
                            </button>
                            <button type="button" className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                Show pending only
                            </button>
                            <button type="button" className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                Show done only
                            </button>
                        </div>
                    </div>
                </div>
                <div className="px-4 py-2 sm:grid sm:grid-cols-4 sm:gap-4 sm:items-start sm:pt-5 sm:px-6">
                    <label className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">Tags</label>
                    <div className="mt-1 sm:mt-0 sm:col-span-3">
                        <div className="flex flex-wrap gap-2 px-3 py-2 overflow-hidden bg-white border border-gray-300 rounded-lg shadow-sm focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500">
                            <input type="text" placeholder="Press enter to add tags" className="flex-grow block p-0 border-0 border-gray-300 rounded-md min-w-xs focus:outline-none focus:border-blue-500 focus:ring-0 sm:text-sm" value="die">

                            </input>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-3 px-4 pt-2 pb-4 sm:px-6">
                    <div className="flex justify-end">
                        <div className="grid flex-grow grid-cols-2 gap-3 sm:flex-grow-0">
                            <button type="button" className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                Reset
                            </button>
                            <button type="submit" className="inline-flex items-center justify-center px-4 py-2 text-base font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="w-5 h-5 mr-3 -ml-1">
                                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path>
                                </svg>
                                    Search
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
};

export default FilterTaskForm;
