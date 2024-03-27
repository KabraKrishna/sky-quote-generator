import {IoSearchOutline } from "react-icons/io5";

export default function Search({ classNames, iconSize, onQueryChange }) {

    const classes = `w-full px-2 py-1 flex flex-row items-center justify-start
        ${classNames ? classNames : "rounded-lg border border-indigo-500"}
    `
    const onInputChange = (event) => {
        console.log(event.target.value)
        onQueryChange(event.target.value);
    }

    return (
        <div className={classes}>
            <IoSearchOutline className="text-primary" size={iconSize} />
            <input
                type="text"
                placeholder="Search"
                className="mx-2 px-2 py-1 max-w-[86%] bg-transparent focus:outline-none"
                onChange={onInputChange}
            />
        </div>
    )

}