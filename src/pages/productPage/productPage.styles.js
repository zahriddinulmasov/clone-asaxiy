import styled from "styled-components";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

export const Wrapper = styled.div`
  margin: 0 -15px;
  padding: 30px 15px 30px 15px;
  max-width: 1300px;
  width: 100%;
  background-color: rgba(0, 0, 0, 0);
`;

export const InternalWrapper = styled.div`
  margin-bottom: 10px;
  width: 100%;
  display: flex;
`;

export const ProductPageLeft = styled.div`
  margin-right: 30px;
  padding: 35px 30px;
  box-sizing: border-box;
  width: fit-content;
  height: 440px;
  border-radius: 20px;
  background-color: #fff;
  position: relative;
`;

export const ProductPageImg = styled.img`
  display: block;
  margin: 0 auto;
`;

export const SingleFavoriteBorderIcon = styled(FavoriteBorderIcon)`
  padding: 10px;
  position: absolute;
  right: 20px;
  top: 20px;
  z-index: 2;
  background: aliceblue;
  border-radius: 50%;
  color: #008dff;
`;

export const ProductPageRight = styled.div`
  width: 100%;
  /* display: flex; */
`;

export const ProductTitle = styled.h1`
  margin: 0;
  font-size: 32px;
  line-height: 40px;
  font-weight: 700;
  margin-bottom: 8px;
`;

export const ProductComWrapper = styled.div`
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  /* justify-content: center; */
`;

export const ProductComLink = styled.span`
  margin-left: 16px;
  display: flex;
  align-items: center;
  fill: #c2c6d1;
`;

export const ProductComText = styled.span`
  margin-left: 4px;
  font-size: 14px;
  color: #c2c6d1;
`;

export const ProductCardPrice = styled.span`
  margin: 0;
  font-size: 14px;
  line-height: 20px;
  font-weight: 500;
  text-decoration-line: line-through;
  display: block;
  color: #af5679;
`;

export const ProductCardNewPrice = styled.span`
  margin: 0 0 20px;
  font-size: 24px;
  line-height: 30px;
  display: block;
  color: red;
`;

export const ProductWrapperInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProductBrend = styled.p`
  margin: 0 0 12px;
  margin-right: 16px;
`;
export const ProductBrendName = styled.span`
  margin: 0;
  font-weight: 600;
  font-size: 18px;
`;

export const ProductBtnWrapper = styled.div`
  margin-bottom: 16px;
  display: flex;
  align-items: center;
`;

export const ProductDescWrapper = styled.div`
  margin-bottom: ${({ styles }) => (styles ? styles.marginBottom : 0)};
  padding: ${({ styles }) => (styles ? styles.padding : "15px")};
  border-radius: 20px;
  background-color: #fff;
`;

export const ProductDescTitle = styled.h3`
  margin: 0 0 12px;
  font-size: 24px;
  line-height: 30px;
  color: #000;
`;

export const ProductDesc = styled.p`
  font-weight: ${({ fontFamily }) => (fontFamily ? fontFamily : "400")};
  line-height: 22px;
`;

export const ProductCommitTitle = styled.h3`
  margin: 0 0 4px;
  color: dimgrey;
`;

export const ProductCommitInterWrapper = styled.div`
  padding-bottom: 20px;
  border-bottom: 1px solid #fe7300;
`;
