import { Listbox, Transition, Combobox } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react"
import { IoChevronDown } from "react-icons/io5";
import Search from "./search";
import { searchItem, getItems } from "../../lib/data/items";

export default function SearchDropDown() {

    const [query, setQuery] = useState('');
    const [selected, setSelected] = useState(null);
    const [filteredItems, setFilteredItems] = useState(getItems())

    useEffect(() => {

        if (query === '') setFilteredItems(getItems())
        else setFilteredItems(searchItem(query))

    }, [query])

    return (
        <div className="w-full">
            <Combobox value={selected} onChange={setSelected}>
                <Combobox.Input onChange={(event) => setQuery(event.target.value)} />
                <Combobox.Options>
                    {filteredItems.map((item, index) => (
                        <Combobox.Option key={index} value={item}>
                            {item.articleId} | {item.model}
                        </Combobox.Option>
                    ))}
                </Combobox.Options>
            </Combobox>
        </div>
    )
}