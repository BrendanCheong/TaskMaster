import produce from "immer";
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Chip from "@mui/material/Chip";
import { makeStyles } from "@mui/styles";
import TextField from "@mui/material/TextField";
import Downshift from "downshift";

const useStyles = makeStyles(theme => ({
    chip: {
        margin: theme.spacing(0.5, 0.25),
    },
}));

const TagsInput = ({ ...props }) => {
    const classes = useStyles();
    const { selectedTags, placeholder, tags, ...other } = props;
    const [inputValue, setInputValue] = useState("");
    const [selectedItem, setSelectedItem] = useState([]);

    useEffect(() => {
        setSelectedItem(tags);
    }, [tags]);

    useEffect(() => {
        selectedTags(selectedItem);
    }, [selectedItem, selectedTags]);

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            const newSelectedItem = [...selectedItem];
            const duplicatedValues = newSelectedItem.indexOf(
                event.target.value.trim()
            );

            if (duplicatedValues !== -1) {
                setInputValue("");
                return;
            }
            if (!event.target.value.replace(/\s/g, "").length) return;

            const newArray = produce(selectedItem, draft => {
                draft.push(event.target.value.trim());
            });
            setSelectedItem(newArray);
            setInputValue("");
        }
        if (selectedItem.length && !inputValue.length && event.key === "Backspace") {
            setSelectedItem(selectedItem.slice(0, selectedItem.length - 1));
        }
    };

    const handleChange = (item) => {
        const newItem = produce(selectedItem, draft => {
            if (selectedItem.indexOf(item) === -1) {
                draft.push(item);
            }
        });
        setInputValue("");
        setSelectedItem(newItem);
    };

    const handleDelete = item => () => {
        const newSelectedItem = produce(selectedItem, draft => {
            draft.splice(selectedItem.indexOf(item), 1);
        });
        setSelectedItem(newSelectedItem);
    };

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    return (
        <>
            <Downshift
                id="downshift-multiple"
                inputValue={inputValue}
                onChange={handleChange}
                selectedItem={selectedItem}
            >
                {({ getInputProps }) => {
                    const { onBlur, onChange, onFocus, ...inputProps } = getInputProps({
                        onKeyDown: handleKeyDown,
                        placeholder,
                    });
                    return (
                        <div>
                            <TextField
                                InputProps={{
                                    startAdornment: selectedItem.map(item => (
                                        <Chip
                                            key={item}
                                            tabIndex={-1}
                                            label={item}
                                            className={classes.chip}
                                            onDelete={handleDelete(item)}
                                            color="primary"
                                            variant="outlined"
                                        />
                                    )),
                                    onBlur,
                                    onChange: event => {
                                        handleInputChange(event);
                                        onChange(event);
                                    },
                                    onFocus,
                                }}
                                {...other}
                                {...inputProps}
                            />
                        </div>
                    );
                }}
            </Downshift>
        </>
    );
};

export default TagsInput;

TagsInput.defaultProps = {
    tags: [],
};
TagsInput.propTypes = {
    selectedTags: PropTypes.func.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string),
};
