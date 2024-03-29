"use client"
import { createContext, useState } from "react";

export const UtilContext = createContext({
    context: {
        isHaffeleActive: true,
        itemList: []
    },
    setSelectedItem: (item) => { },
    removeSelectedItem: (item) => { },
    toggleHaffeleActive: (item) => { },
    clearContext: () => {}
});

export default function UtilContextProvider({ children }) {

    const [context, setContext] = useState({
        isHaffeleActive: true,
        itemList: []
    })

    const setSelectedItem = (item) => {

        let isItemPresent = context.itemList.findIndex((x) => x.articleId === item.articleId);

        if (isItemPresent == -1) {

            setContext((current) => {

                return {
                    ...current,
                    itemList: [...current.itemList, item]
                }
            })
        }
    }

    const removeSelectedItem = (articleId) => {

        setContext((current) => {

            let filteredList = current.itemList.filter((x) => x.articleId !== articleId)

            return {
                ...current,
                itemList: [...filteredList]
            }
        })
    }

    const toggleHaffeleActive = (isActive) => {

        setContext((current) => {

            return {
                ...current,
                isHaffeleActive: isActive
            }
        })
    }

    const clearContext = () => {
        setContext((_) => {
            return {
                isHaffeleActive: true,
                itemList: []
            }
        })
    }

    return <UtilContext.Provider value={{ context, setSelectedItem, removeSelectedItem, toggleHaffeleActive, clearContext }}>{children} </UtilContext.Provider>

}