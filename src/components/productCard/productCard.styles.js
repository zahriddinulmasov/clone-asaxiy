import styled from "styled-components";

export const CardWrapper = styled.div`
  margin: 9px;
  padding: 15px 15px 59px;
  width: 237px;
  height: fit-content;
  background-color: #fff;
  border-radius: 15px;
  position: relative;
  cursor: pointer;

  :hover {
    opacity: calc(0.9);

    p {
      transition: all 0.2s;
      color: rgb(0, 141, 255);
    }
  }
`;

export const CardLink = styled.a`
  text-decoration: none;
`;

export const CardImgWrapper = styled.div`
  text-align: center;
`;

export const CardImg = styled.img``;

export const CardIconsWrapper = styled.div`
  padding: 0 0 2px 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border-radius: 0 0 0 6px;
  position: absolute;
  right: 15px;
  top: 15px;
`;

export const StyleShoppingBasketIcon = styled.img`
  margin-bottom: 6px;
  padding: 4px 6px 4px 4px;
  border-radius: 6px;
  background-color: rgb(0, 141, 255);
`;

export const StyleFavoriteBorderIcon = styled.img`
  border-radius: 6px;
`;

export const CardDescription = styled.p`
  margin: 10px 0;
  height: 40px;
`;

export const CommentWrapper = styled.div`
  margin-bottom: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CommentLink = styled.span`
  display: flex;
  align-items: center;
  fill: #c2c6d1;
`;

export const CommentText = styled.span`
  margin-left: 6px;
  font-size: 14px;
  color: #c2c6d1;
`;

export const CardPrice = styled.span`
  margin: 0;
  height: 20px;
  font-size: 14px;
  line-height: 20px;
  font-weight: 500;
  text-decoration-line: line-through;
  display: block;
  color: #af5679;
`;

export const CardNewPrice = styled.span`
  margin: 0;
  font-size: 18px;
  line-height: 20px;
  display: block;
`;


export const CardBottomBtn = styled.div`
width: 100%;
  position: absolute;
  bottom: 15px;

`