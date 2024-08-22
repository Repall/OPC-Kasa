import arrow from "../assets/arrow.png";
import { useState } from "react";

export default function Collapse({ title, content }) {
    const [toggle, setToggle] = useState(false);

    return (
        <>
            <div className="my-0 mx-auto " onClick={() => setToggle(!toggle)}>
                <div className="font-bold lg:text-2xl bg-red-400 w-full text-white rounded-lg px-3 py-1 flex flex-row justify-between items-center cursor-pointer">
                    <p>{title}</p>
                    <img className={`h-4 ${toggle ? "duration-500 rotate-180" : "duration-500 rotate-0"}`} src={arrow} alt="show content" />
                </div>
                <div className={toggle ? "duration-700 bg-gray-100 p-4 rounded-lg opacity-1 max-h-96" : "px-4 duration-700 opacity-0 max-h-0"}>
                    {Array.isArray(content)
                        ? content.map((item, index) => {
                            return <p key={index}>{item}</p>;
                        })
                        : content}
                </div>
            </div>
        </>
    );
}
