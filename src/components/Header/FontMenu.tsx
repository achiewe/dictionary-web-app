interface Props {
  changeInput: boolean;
  font: boolean;
  setFont(font: boolean): void;
}

const FontMenu = ({ changeInput, font, setFont }: Props): JSX.Element => {
  return (
    <div
      className={`w-[183px] h-[152px] rounded-[16px] ${
        changeInput ? "bg-[#FFFFFF]" : "bg-[#1F1F1F]"
      } p-[24px] flex flex-col items-start gap-[16px] ${
        changeInput ? "shadow-light" : "shadow-dark"
      }  absolute top-[80px] right-[129px] ${font ? "block" : "hidden"}`}
    >
      <h3
        className={`text-[18px] ${
          changeInput ? "text-[#2D2D2D]" : "text-[#FFFFFF]"
        } leading-[24px] font-bold cursor-pointer hover:text-[#A445ED]`}
      >
        Sans Serif
      </h3>
      <h3
        className={`text-[18px] ${
          changeInput ? "text-[#2D2D2D]" : "text-[#FFFFFF]"
        } leading-[24px] font-bold cursor-pointer hover:text-[#A445ED]`}
      >
        Serif
      </h3>
      <h3
        className={`text-[18px] ${
          changeInput ? "text-[#2D2D2D]" : "text-[#FFFFFF]"
        } leading-[24px] font-bold cursor-pointer hover:text-[#A445ED]`}
      >
        Mono
      </h3>
    </div>
  );
};

export default FontMenu;
