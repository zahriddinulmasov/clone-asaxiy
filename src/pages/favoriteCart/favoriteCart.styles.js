import styled from "styled-components";

export const FavoriteWrapper = styled.div`
  background-color: rgb(244, 247, 253);
  height: 100vh;
`;

export const FavoriteInternalWrapper = styled.div`
  margin: 0 auto 0;
  padding: 55px 15px 0;
  max-width: 1100px;
  width: 100%;
`;

export const FavoriteTitle = styled.h2`
  font-weight: 600;
  font-size: 24px;
  line-height: 30px;
  margin: 20px 0;
  color: rgb(40, 40, 48);
`;

export const FavoriteLeft = styled.div`
  margin: 0 15px 30px 0;
  padding: 20px;
  height: 144px;
  display: flex;
  width: 100%;
  align-items: center;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(209, 213, 223, 0.5);
`;

export const FavoriteLeftWrapper = styled.div`
  display: flex;
  align-items: center;
  max-width: 850px;
  width: 100%;
`;

export const FavoriteLeftLink = styled.a`
  margin-right: 10px;
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
  min-width: 200px;
  padding: 16px;
  display: flex;
  flex-direction: column;
`;

export const FavoriteLeftSalesPrice = styled.span`
  font-size: 14px;
  line-height: 20px;
  text-decoration-line: line-through;
  font-weight: 600;
  color: #af5679;
`;

export const FavoriteLeftPrice = styled.span`
  font-size: 18px;
  line-height: 20px;
  font-weight: 600;
  color: #141821;
`;

export const FavoriteBtnWrapper = styled.div`
  max-width: 200px;
  width: 100%;
`;

export const FavoriteNoFavorite = styled.div`
margin: 80px auto ;
  font-size: 24px;
  width: 350px;
  color: rgb(254, 115, 0);
  font-weight: 600;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const FavoriteNoFavoriteImg = styled.img``;
