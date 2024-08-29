import React from "react";
import CustomInput from "../components/custominput/CustomInput";

function Page2() {
  return (
    <div className="space-y-4">
      <CustomInput placeholder="Поиск" />
      <CustomInput placeholder="Поиск" disabled={true} />
      <CustomInput value="hello world!" size="SMALL" />
      <CustomInput value="hello world!" isLoading={true} size="SMALL" />
    </div>
  );
}

export default Page2;
