import { useEffect, useState } from "react";
import { HeadingIcon } from "../../components/Icons";
import SectionHeading from "../../components/SectionHeading";

interface Heading {
    text: string;
    tag: string;
}

function Audit() {
    const [headings, setHeadings] = useState<Heading[]>([]);

    useEffect(() => {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            if (tabs[0].id) {
                chrome.scripting.executeScript(
                    {
                        target: { tabId: tabs[0].id },
                        files: ["content.js"], // Assurez-vous que le content script est généré
                    },
                    () => {
                        chrome.tabs.sendMessage(
                            tabs[0].id!,
                            { action: "getHeadings" },
                            (response) => {
                                if (response && response.headings) {
                                    setHeadings(response.headings);
                                }
                            }
                        );
                    }
                );
            }
        });
    }, []);

    return (
        <div>
            <SectionHeading icon={<HeadingIcon />} title={`Headings`} />
            <div className="mt-3">
                {headings.map((heading, index) => (
                    <div
                        key={index}
                        className={`py-1 relative overflow-hidden ${
                            heading.tag === "H1"
                                ? "pl-0"
                                : heading.tag === "H2"
                                    ? "pl-6"
                                    : heading.tag === "H3"
                                        ? "pl-12"
                                        : heading.tag === "H4"
                                            ? "pl-18"
                                            : heading.tag === "H5" 
                                                ? "pl-24" 
                                                : heading.tag === "H6" 
                                                    ? "pl-30" 
                                                    : ""
                        }`}
                    >
                        { heading.tag === "H1"
                            ? ""
                            : heading.tag === "H2"
                                ? <div className={`absolute top-1/2 -translate-y-1/2 left-1 w-[2px] h-1/2 bg-gray-200`} />
                                : heading.tag === "H3"
                                    ? (
                                        <>
                                            <div className={`absolute top-1/2 -translate-y-1/2 left-1 w-[2px] h-1/2 bg-gray-200`}/>
                                            <div className={`absolute top-1/2 -translate-y-1/2 left-8 w-[2px] h-1/2 bg-gray-200`}/>
                                        </>
                                    ) : heading.tag === "H4"
                                        ? (
                                            <>
                                                <div className={`absolute top-1/2 -translate-y-1/2 left-1 w-[2px] h-1/2 bg-gray-200`}/>
                                                <div className={`absolute top-1/2 -translate-y-1/2 left-8 w-[2px] h-1/2 bg-gray-200`}/>
                                                <div className={`absolute top-1/2 -translate-y-1/2 left-14 w-[2px] h-1/2 bg-gray-200`}/>
                                            </>
                                        ) : heading.tag === "H5"
                                            ? (
                                                <>
                                                    <div className={`absolute top-1/2 -translate-y-1/2 left-1 w-[2px] h-1/2 bg-gray-200`}/>
                                                    <div className={`absolute top-1/2 -translate-y-1/2 left-8 w-[2px] h-1/2 bg-gray-200`}/>
                                                    <div className={`absolute top-1/2 -translate-y-1/2 left-14 w-[2px] h-1/2 bg-gray-200`}/>
                                                    <div className={`absolute top-1/2 -translate-y-1/2 left-20 w-[2px] h-1/2 bg-gray-200`}/>
                                                </>
                                            ) : heading.tag === "H6"
                                                ? (
                                                    <>
                                                        <div className={`absolute top-1/2 -translate-y-1/2 left-1 w-[2px] h-1/2 bg-gray-200`}/>
                                                        <div className={`absolute top-1/2 -translate-y-1/2 left-8 w-[2px] h-1/2 bg-gray-200`}/>
                                                        <div className={`absolute top-1/2 -translate-y-1/2 left-14 w-[2px] h-1/2 bg-gray-200`}/>
                                                        <div className={`absolute top-1/2 -translate-y-1/2 left-20 w-[2px] h-1/2 bg-gray-200`}/>
                                                        <div className={`absolute top-1/2 -translate-y-1/2 left-[6.5rem] w-[2px] h-1/2 bg-gray-200`}/>
                                                    </>
                                                ) : ""}
                        <span className={`font-semibold`}>{heading.tag}</span>: {heading.text}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Audit;
