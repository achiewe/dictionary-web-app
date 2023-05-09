import { useEffect } from "react";
import OutcomeAchieve from "./Outcome/OutcomeAchieve";
import OutcomeError from "./Outcome/OutcomeError";
import axios from "axios";

interface Props {
  saveInfo: any;
  setSaveInfo(saveInfo: any): void;
}

const Outcome = ({ saveInfo, setSaveInfo }: Props): JSX.Element => {
  useEffect(() => {
    const takeWord = async () => {
      const response = await axios.get(
        "https://api.dictionaryapi.dev/api/v2/entries/en/keyboard"
      );
      const data = response.data;
      setSaveInfo(data);
      console.log(saveInfo);
    };
    takeWord();
  }, []);
  return (
    <div>
      <OutcomeAchieve />
      <OutcomeError />
    </div>
  );
};

export default Outcome;
