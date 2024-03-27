import { IoCloseOutline, IoSearchOutline } from "react-icons/io5";
import SearchDropDown from "./searchDropdown";

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
            {/* <a className="btn btn-ghost btn-xs btn-circle text-primary hidden hover:bg-primary hover:text-white peer-focus:block">
                <IoCloseOutline size={18} />
            </a> */}
        </div>
    )

}