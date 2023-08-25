import styled from "styled-components";

export const FavoriteWrapper = styled.div`
  background-color: rgb(244, 247, 253);
  height: 100vh;
`;

export const FavoriteInternalWrapper = styled.div`
  margin: 0 auto 0;
  padding: 50px 15px 0;
  max-width: 1300px;
  width: 100%;
`;

export const FavoriteTitle = styled.h2`
  font-weight: 600;
  font-size: 24px;
  line-height: 30px;
  margin: 20px 0;
  color: rgb(40, 40, 48);
`;

export const FavoriteInInternalWrapper = styled.div`
  min-height: 265px;
  display: flex;
`;

export const FavoriteLeft = styled.div`
  margin: 0 15px 30px 0;
  padding: 20px;
  height: 144px;
  display: flex;
  align-items: center;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(209, 213, 223, 0.5);
`;

export const FavoriteLeftLeft = styled.a`
  margin-right: 10px;
  max-width: 570px;
  width: 100%;
  text-decoration: none;
  display: flex;
  align-items: center;

  :hover {
    cursor: pointer;
    h4 {
      color: #008dff;
      opacity: 0.8;
    }
    span {
      opacity: 0.8;
    }
  }
`;

export const FavoriteImgWrapper = styled.span`
  margin-right: 25px;
  padding: 10px;
  width: 124px;
  height: 124px;
  background-color: #fff;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 10px 30px rgba(209, 213, 223, 0.5);
`;

export const FavoriteImg = styled.img``;

export const FavoriteLeftTitle = styled.h4`
  margin: 0 0 20px;
  line-height: 20px;
  font-weight: 600;
  color: rgb(40, 40, 48);
`;

export const FavoriteBrend = styled.span`
  padding: 4px 16px;
  background-color: #008dff;
  border-radius: 10px;
  color: white;
`;

export const FavoriteLeftRight = styled.div`
  width: 348px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const FavoriteBtnsWrapper = styled.div`
  margin-right: 12px;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  box-shadow: 0 10px 30px rgba(209, 213, 223, 0.5);
`;

export const FavoriteBtnCount1 = styled.button`
  padding: 5px 8px;
  font-weight: 600;
  border-radius: 5px 0 0 5px;
  border: none;
  background-color: #008dff;
  color: white;
  cursor: pointer;

  :hover {
    background-color: royalblue;
  }
`;

export const FavoriteBtnCount2 = styled.button`
  padding: 5px 8px;
  font-weight: 600;
  border-radius: 0 5px 5px 0;
  border: none;
  background-color: #008dff;
  color: white;
  cursor: pointer;

  :hover {
    background-color: royalblue;
  }
`;

export const FavoriteBtnContent = styled.span`
  padding: 4px 8px;
  display: inline-block;
  width: 74px;
  text-align: center;
  line-height: 20px;
  font-weight: 500;
  color: rgb(40, 40, 48);
  background-color: #fff;
`;

export const FavoritePrice = styled.span`
  margin-bottom: 4px;
  font-weight: 500;
  font-size: 13px;
  /* color: red; */
  text-decoration-line: ${({ textLine }) => (textLine ? textLine : "")};
  color: ${({ color }) => color || "rgb(40, 40, 48)"};
  display: block;
`;

export const FavoriteDalete = styled.button`
  padding: 2px 8px;
  font-weight: 500;
  font-size: 13px;
  border: none;
  background-color: inherit;
  color: #fe7300;
  display: flex;
  align-items: center;
  border: 1px solid #fe7300;
  border-radius: 4px;
  transition: ease 0.3s;
  cursor: pointer;

  :hover {
    transition: ease 0.3s;
    background-color: #fe7300;
    color: #fff;
  }
`;
