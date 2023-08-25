import { BtnWrapper } from "./cardBtn.styles";

export const CardBtn = ({ style, id, selected}) => {
  return (
    <BtnWrapper style={style} onClick={selected} id={id}>
      {style.icon ? style.icon : ""} {style.title}
    </BtnWrapper>
  );
};
