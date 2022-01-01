import PropTypes from "prop-types";


const Tags = ({ name }) => {
    return (
        <>
            <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
                {`#${name}`}
            </span>
        </>
    );
};

export default Tags;

Tags.propTypes = {
    name: PropTypes.string.isRequired,
};