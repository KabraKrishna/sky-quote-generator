"use client"
import { createContext, useState } from "react";

export const UtilContext = createContext({
    context: {
        itemList: []
    },
    setSelectedItem: (item) => { },
    removeSelectedItem: (item) => { },
    clearContext: () => {}
});

export default function UtilContextProvider({ children }) {

    const [context, setContext] = useState({
        itemList: []
    })

    const setSelectedItem = (item) => {

        let isItemPresent = context.itemList.findIndex((x) => x.articleId === item.articleId);

        if (isItemPresent == -1) {

            setContext((current) => {

                return {
                    itemList: [...current.itemList, item]
                }
            })
        }
    }

    const removeSelectedItem = (articleId) => {

        setContext((current) => {

            let filteredList = current.itemList.filter((x) => x.articleId !== articleId)

            return {
                itemList: [...filteredList]
            }
        })
    }

    const clearContext = () => {
        setContext((_) => {
            return {
                itemList: []
            }
        })
    }

    return <UtilContext.Provider value={{ context, setSelectedItem, removeSelectedItem, clearContext }}>{children} </UtilContext.Provider>

}