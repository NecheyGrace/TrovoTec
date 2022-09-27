import React, { useState } from "react";
import Map from "./maps";

const useModal = () => {
  const [moda, setModal] = useState(false);

  return {
    moda,
    render: (
      <div>
        Modal
        <div className="h-96 w-[80%] bg-green-500"></div>
        <button onClick={() => setModal(false)}>close</button>
      </div>
    ),
  };
};

export default useModal;
