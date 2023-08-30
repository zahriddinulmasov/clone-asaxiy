import { BtnWrapper } from "./cardBtn.styles";

export const CardBtn = ({ style, selected, id }) => {
  return (
    <BtnWrapper style={style} onClick={selected} id={id}>
      {style.icon ? style.icon : ""} {style.title}
    </BtnWrapper>
  );
};
