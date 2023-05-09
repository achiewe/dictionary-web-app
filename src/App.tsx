import { useState } from "react";
import HeaderComponent from "./components/Header/HeaderComponent";
import InputComponent from "./components/InputComponent";

export default function App() {
  const [changeInput, setChangeInput] = useState<boolean>(true);
  const [switchFont, setSwitchFont] = useState<number>(1);
  const [InputSearch, setInputSearch] = useState<string>("");
  return (
    <div
      className={`${
        changeInput ? "bg-[#FFFFFF]" : "bg-[#050505]"
      } w-full min-h-screen flex-col flex justify-start items-center px-[24px] pt-[24px] pb-[84px] ${
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
    </div>
  );
}
