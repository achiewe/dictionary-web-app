import { useState } from "react";
import HeaderComponent from "./components/Header/HeaderComponent";

export default function App() {
  const [changeInput, setChangeInput] = useState<boolean>(true);
  return (
    <div
      className={`${
        changeInput ? "bg-[#FFFFFF]" : "bg-[#050505]"
      } w-full min-h-screen flex-col justify-center items-center px-[24px] pt-[24px] pb-[84px]`}
    >
      <HeaderComponent
        changeInput={changeInput}
        setChangeInput={setChangeInput}
      />
    </div>
  );
}
