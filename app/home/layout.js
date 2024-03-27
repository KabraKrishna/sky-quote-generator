"use client"
import Header from "@/components/utils/header";

export default function HomeLoayout({ menu, content }) {

    return (
        <div className="flex flex-col items-center justify-between w-screen h-screen z-10">
            <Header />
            <div className="min-w-[60rem] max-w-[70rem] min-h-[30rem] max-h-[45rem] mb-4 bg-white rounded-lg shadow-lg flex flex-row items-start justify-between p-2">
                            <div className="min-h-full w-[29%] rounded-lg">{menu}</div>
                            <div className="min-h-full w-[70%] rounded-lg">{content}</div>
                        </div>
        </div>
    )
}