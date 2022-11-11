import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { SvgWrapper } from "./icons.styled";

const HomeIcon = ({ path, onClick, isSelected }: any) => {
  // const [isSelected, setIsSelected] = useState(false);
  // useEffect(() => {
  //   setIsSelected(path === "home");
  // }, [path]);

  return (
    <SvgWrapper name="home" onClick={onClick}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill={isSelected ? "white" : "#8C8787"}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M22 9.15789L12 2"
          stroke={isSelected ? "white" : "#8C8787"}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M2 9.15789L12 2"
          stroke={isSelected ? "white" : "#8C8787"}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M5 19V7.36841"
          stroke={isSelected ? "white" : "#8C8787"}
          stroke-width="2"
          stroke-linecap="round"
        />
        <path
          d="M19 19V7.36841"
          stroke={isSelected ? "white" : "#8C8787"}
          stroke-width="2"
          stroke-linecap="round"
        />
        <path
          d="M5 19H19"
          stroke={isSelected ? "white" : "#8C8787"}
          stroke-width="2"
          stroke-linecap="round"
        />
      </svg>
    </SvgWrapper>
  );
};

export default HomeIcon;
