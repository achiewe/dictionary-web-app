import { useState } from "react";
import HeaderComponent from "./components/Header/HeaderComponent";
import InputComponent from "./components/InputComponent";
import Outcome from "./components/Outcome";
import ObjectTypes from "./type";

export default function App() {
  const [changeInput, setChangeInput] = useState<boolean>(true);
  const [switchFont, setSwitchFont] = useState<number>(1);
  const [InputSearch, setInputSearch] = useState<string>("");
  const [saveInfo, setSaveInfo] = useState<ObjectTypes | null>(null);
  return (
    <div
      className={`${
        changeInput ? "bg-[#FFFFFF]" : "bg-[#050505]"
      } w-full min-h-screen flex-col flex justify-start items-center px-[24px] pt-[24px] pb-[84px] gap-[24px] md:px-[40px] md:pt-[58px] md:pb-[118px] md:gap-[51px] lg:pb-[124px] lg:px-[0] ${
        switchFont === 1
          ? "font-inter"
          : switchFont === 2
          ? "font-lora"
          : "font-mono"
      }`}
    >
      <HeaderComponent
        changeInput={changeInput}
        setChangeInput={setChangeInput}
        switchFont={switchFont}
        setSwitchFont={setSwitchFont}
      />
      <InputComponent
        changeInput={changeInput}
        InputSearch={InputSearch}
        setInputSearch={setInputSearch}
      />
      <Outcome
        saveInfo={saveInfo}
        setSaveInfo={setSaveInfo}
        InputSearch={InputSearch}
        changeInput={changeInput}
        switchFont={switchFont}
      />
    </div>
  );
}
