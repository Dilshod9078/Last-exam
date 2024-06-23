
interface ButtonType {
    title: string;
    icon?:any;
    position?: "prev" | "next";
    buttonWidth?: number;
    padT?: number;
    padB?: number;
    btnBg: boolean;
    onclick?:() => void;
}
 export const Button:React.FC<ButtonType> = ({title, icon , position, buttonWidth, padT, padB, btnBg, onclick}) => {
    return(
        <button onClick={onclick} style={{width:`${buttonWidth}px`, paddingTop:`${padT}px`, paddingBottom:`${padB}px`}} className={`${btnBg ? "bg-transparent" : "bg-[#46A358]"} transition-all duration-300 hover:opacity-80 rounded-[6px] flex items-center justify-center space-x-[4px]`}>
            {icon && position == "prev" && icon}
            <span className={`leading-[20px] font-medium ${btnBg ? "text-[#46A358] text-[12px] " : "text-white text-[16px] "}`}>{title}</span>
            {icon && position == "next" && icon}
        </button>
    )
 }