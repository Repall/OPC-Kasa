import React from "react";

export default function Tag({tags}) {
    return (
        <>
            {tags.map((tag, index) => (
            <p key={index} className="bg-red-400 text-center rounded-full px-3 py-1 text-xs md:text-sm">
                {tag}
            </p>
            ))}
        </>
    );
}
