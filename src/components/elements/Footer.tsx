import styled from 'styled-components';

const Footer = () => (
  <Wrapper>
    <ItemWrapper>
      <FooterImg src="/images/footer/home.svg" />
      <FooterItem>Home</FooterItem>
    </ItemWrapper>
    <ItemWrapper>
      <FooterImg src="/images/footer/search.svg" />
      <FooterItem>Search</FooterItem>
    </ItemWrapper>
    <ItemWrapper>
      <FooterImg src="/images/footer/comming-soon.svg" />
      <FooterItem>Comming Soon</FooterItem>
    </ItemWrapper>
    <ItemWrapper>
      <FooterImg src="/images/footer/Downloads.svg" />
      <FooterItem>Downloads</FooterItem>
    </ItemWrapper>
    <ItemWrapper>
      <FooterImg src="/images/footer/More.svg" />
      <FooterItem>More</FooterItem>
    </ItemWrapper>
  </Wrapper>
);

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
