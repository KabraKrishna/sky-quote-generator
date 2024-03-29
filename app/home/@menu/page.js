"use client"

import AddQuote from "@/components/modals/addQuote";
import Item from "@/components/utils/item";
import Search from "@/components/utils/search";
import { UtilContext } from "@/lib/context/utilContext";
import { Dialog } from "@material-tailwind/react";
import { useContext, useState, useLayoutEffect } from "react";
import { getItems, searchItem, getItemByArticleId } from "@/lib/data/items";
import Switch from "@/components/utils/switch";

export default function Menu() {

    const context = useContext(UtilContext);

    const [isDrawerOpen, setDrawerOpen] = useState(false);
    const [query, setQuery] = useState('');
    const [selectedItem, setSelectedItem] = useState(null);
    const [filteredItems, setFilteredItems] = useState(getItems());
    const [isHaffele, setIsHaffele] = useState(true);

    const openDrawer = () => setDrawerOpen(true);
    const closeDrawer = () => setDrawerOpen(false);

    useLayoutEffect(() => {

        if (query === '') setFilteredItems(getItems(isHaffele))
        else setFilteredItems(searchItem(isHaffele, query))

    }, [query, isHaffele])

    const onItemSelected = (articleId) => {
        const itm = getItemByArticleId(isHaffele, articleId);
        setSelectedItem(itm);
        openDrawer();
    }

    const onItemAdded = (articleDetails) => {
        setSelectedItem(articleDetails);
        context.setSelectedItem(articleDetails);
        closeDrawer();
    }

    const toggleSwitch = (toggleValue) => {
        setIsHaffele(toggleValue);
        context.toggleHaffeleActive(toggleValue);
    }

    return (
        <div className="relative w-full flex flex-col items-center justify-between">
            <Switch onToggle={toggleSwitch} />
            <Search iconSize={20} onQueryChange={setQuery} />
            <Dialog
                size="xs"
                open={isDrawerOpen}
                handler={closeDrawer}
            >
                <AddQuote mode="ADD" onClose={closeDrawer} article={selectedItem} onAdd={onItemAdded} />
            </Dialog>
            <div
                className=" h-[23rem]
                    my-2 w-full
                    flex flex-col items-center 
                    justify-start p-0 no-scrollbar 
                    overflow-y-scroll">
                {
                    filteredItems.map((item, index) => (
                        <Item key={index} icon={<span className="text-xl font-bold">#</span>} value={item} onItemClick={onItemSelected} isHaffele={isHaffele} />
                    ))
                }

            </div>
        </div>
    )
}