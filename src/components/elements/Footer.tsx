import { useRouter } from "next/router";
import React, { useState } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import CommingSoonIcon from "../icons/CommingSoonIcon";
import DownloadsIcon from "../icons/DownloadsIcon";
import HomeIcon from "../icons/HomeIcon";
import MoreIcon from "../icons/More";
import SearchIcon from "../icons/SearchIcon";

const Footer = () => {
  const [path, setPath] = useState("home");
  const [selectedIcon, setSelectedIcon] = useState("home");
  const router = useRouter();
  console.log(router.pathname);

  const handleOnClick = (e: any) => {
    // if (e.currentTarget.name === "home") {
    //   router.push("/home");
    //   setPath("home");
    // } else if (e.currentTarget.name === "search") {
    //   router.push("/search");
    //   setPath("search");
    // }
    setSelectedIcon(e.currentTarget.name);
  };

  return (
    <Wrapper>
      <ItemWrapper>
        <HomeIcon
          path={path}
          onClick={handleOnClick}
          isSelected={selectedIcon === "home"}
        />
        <FooterItem>Home</FooterItem>
      </ItemWrapper>
      <ItemWrapper>
        <SearchIcon
          path={path}
          onClick={handleOnClick}
          isSelected={selectedIcon === "search"}
        />
        <FooterItem>Search</FooterItem>
      </ItemWrapper>
      <ItemWrapper>
        <CommingSoonIcon
          path={path}
          onClick={handleOnClick}
          isSelected={selectedIcon === "comming-soon"}
        />
        <FooterItem>Comming Soon</FooterItem>
      </ItemWrapper>
      <ItemWrapper>
        <DownloadsIcon
          path={path}
          onClick={handleOnClick}
          isSelected={selectedIcon === "downloads"}
        />
        <FooterItem>Downloads</FooterItem>
      </ItemWrapper>
      <ItemWrapper>
        <MoreIcon
          path={path}
          onClick={handleOnClick}
          isSelected={selectedIcon === "more"}
        />
        <FooterItem>More</FooterItem>
      </ItemWrapper>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.footer`
  position: fixed;
  bottom: 0;

  width: 375px;
  height: 53px;

  background-color: #121212;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 320px;

  cursor: pointer;
`;

const FooterImg = styled.img`
  width: 24px;
  height: 24px;
`;

const FooterItem = styled.div`
  font-size: 8px;
  font-weight: 500;
  letter-spacing: 0.26px;
  text-align: center;
  color: #ffffff;

  margin-top: 3px;
`;
