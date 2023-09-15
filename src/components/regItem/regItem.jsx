import { memo } from "react";

import {
  ModalRightContentWrapper,
  ModalRightImg,
  ModalRightSubtitle,
  ModalRightTitle,
  ModalRightWrapper,
  ModalRightWrapperImg,
} from "./regItem.styles";

function ResItem({ props }) {
  const { img, title, subtitle } = props;

  return (
    <ModalRightWrapper>
      <ModalRightWrapperImg>
        <ModalRightImg src={img} alt="photo market" width="35px"/>
      </ModalRightWrapperImg>

      <ModalRightContentWrapper>
        <ModalRightTitle>{title}</ModalRightTitle>
        <ModalRightSubtitle>{subtitle}</ModalRightSubtitle>
      </ModalRightContentWrapper>
    </ModalRightWrapper>
  );
}

export default memo(ResItem);
