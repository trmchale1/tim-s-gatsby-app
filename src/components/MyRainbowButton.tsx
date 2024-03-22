import * as React from "react";
import { ConnectButton } from '@rainbow-me/rainbowkit';
import '../../node_modules/@rainbow-me/rainbowkit/dist/index.css';


export const MyRainbowButton = () => {
  return (
    <div className="button-container">
      <div className="rainbow-button">
        <ConnectButton />
    </div>
  </ div>
  );
};

export default MyRainbowButton;