import { BtnWrapper } from "./cardBtn.styles";

export const CardBtn = ({ style }) => {
  return (
    <BtnWrapper style={style}>
      {style.icon ? style.icon : ""} {style.title}
    </BtnWrapper>
  );
};
