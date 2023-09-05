import { BtnWrapper, Img } from "./cardBtn.styles";

export const CardBtn = ({ style, selected, id }) => {
  return (
    <BtnWrapper style={style} onClick={selected} id={id}>
      {style.img ? (
        <Img id={style.id} src={style.img} alt="foto basket" width={28} />
      ) : (
        ""
      )}{" "}
      {style.title}
    </BtnWrapper>
  );
};
