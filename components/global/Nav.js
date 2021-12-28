const Nav = () => {
    return (
        <>
            <section className="overflow-y-scroll h-5/6 md:h-[56rem] scrollbar-thin scrollbar-thumb-indigo-200 hover:scrollbar-thumb-slate-600 transition duration-300">
                {[...Array(100).keys()].map((elem) => <>
                    <p className="block px-4 py-2.5 hover:bg-indigo-700 hover:text-indigo-50 transition duration-300 rounded-md w-11/12">{"task " + elem}</p>
                </>)}
            </section>
        </>
    );
};

export default Nav;
