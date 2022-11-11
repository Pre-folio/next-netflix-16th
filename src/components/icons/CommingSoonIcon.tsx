import React, { useState } from "react";
import styled from "styled-components";
import { SvgWrapper } from "./icons.styled";

const CommingSoonIcon = ({ path, onClick, isSelected }: any) => {
  return (
    <SvgWrapper name="comming-soon" onClick={onClick}>
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill={isSelected ? "white" : "#8C8787"}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2 4H0V18C0 19.1 0.9 20 2 20H16V18H2V4ZM18 0H6C4.9 0 4 0.9 4 2V14C4 15.1 4.9 16 6 16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0ZM18 14H6V2H18V14ZM10 3.5V12.5L16 8L10 3.5Z"
          fill={isSelected ? "white" : "#8C8787"}
        />
      </svg>
    </SvgWrapper>
  );
};

export default CommingSoonIcon;
