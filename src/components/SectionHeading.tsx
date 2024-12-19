import {SectionHeadingTypes} from "../types/SectionHeadingTypes.ts";

function SectionHeading({ icon, title }: SectionHeadingTypes) {
    return (
        <div className={`flex items-center gap-3`}>
            <div className={`bg-amber-400/30 text-amber-500 p-1.5 rounded`}>
                {icon}
            </div>
            <p className={`text-amber-900 font-semibold text-base`}>{title}</p>
        </div>
    )
}

export default SectionHeading;
