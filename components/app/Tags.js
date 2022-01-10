import PropTypes from "prop-types";


const Tags = ({ name, id }) => {
    return (
        <div className="" id={`${name}  ${id}`} key={`${name}  ${id}`}>
            <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full" key={`${name}  ${id}`}>
                {`#${name}`}
            </span>
        </div>
    );
};

export default Tags;

Tags.propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
};