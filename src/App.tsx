import { useState } from "react";
import "./App.css";
import onImage from "./assets/emoji-images/e1.png";
// import offImage from "./assets/emoji-images/e2.png";
import Button from "./re-use-components/Button";
// import WhatIF from "./re-use-components/WhatIF";
import { WhatIF } from "vk64-react";

const App = () => {
  const [isBtnActive, setBtnActive] = useState<boolean>(true);

  return (
    <main className="dvw-screen min-h-screen gradient-bg-blue ">
      <div className="flex pt-20 py-10 justify-center gap-2">
        <WhatIF
          check={isBtnActive}
          if={
            <Button
              label="OFF"
              color="red"
              onBtnClick={() => setBtnActive(false)}
            />
          }
          else={
            <Button
              label="ON"
              color="green"
              onBtnClick={() => setBtnActive(true)}
            />
          }
        />
      </div>

      <div className="flex justify-center gap-2">
        <WhatIF
          check={isBtnActive}
          if={
            <img
              src={onImage}
              alt="OnImage"
              loading="lazy"
              className="rounded"
            />
          }
        />
      </div>
    </main>
  );
};

export default App;
