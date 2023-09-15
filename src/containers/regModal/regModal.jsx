import { memo } from "react";

import {
  ModalBtn,
  ModalClose,
  ModalForm,
  ModalLeft,
  ModalLeftApps,
  ModalLeftLinkedn,
  ModalLeftOr,
  ModalNumberInputError,
  ModalRight,
  ModalTelInput,
  ModalTelInputWrapper,
  ModalTelLabel,
  ModalTitle,
  ModalWrapper,
} from "./regModal.styles";

import RegItem from "../../components/regItem/regItem";

import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";

import google from "../../assets/images/google.png";
import telegram from "../../assets/images/telegram.webp";

import market from "../../assets/images/res-modal/market.svg";
import delivery from "../../assets/images/res-modal/fast-delivery.svg";
import return_product from "../../assets/images/res-modal/return.svg";
import card from "../../assets/images/res-modal/card.svg";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Box } from "@mui/material";

const modal_items = [
  {
    id: 1,
    img: market,
    title: "Больше не нужно ходить на базар!",
    subtitle: "У нас выгодные цены и доставка до дома",
  },
  {
    id: 2,
    img: delivery,
    title: "Быстрая доставка!",
    subtitle: "Наш сервис удивит вас",
  },
  {
    id: 3,
    img: return_product,
    title: "Удобства для вас!",
    subtitle: "Быстрое оформление и гарантия на возврат в случае неисправности",
  },
  {
    id: 4,
    img: card,
    title: "Рассрочка!",
    subtitle: "Без предоплаты на 6 или 12 месяцев",
  },
];

function ResModal({ open, click }) {
  const validationSchema = Yup.object().shape({
    number: Yup.string()
      .min(10, "Чисел должно быть больше 10!")
      .max(12, "Чисел не должно быть больше 12!")
      .required("Пожалуйста введите ваш номер телефона!"),
  });

  const initialValueInputs = {
    number: "998",
    code: "",
  };

  const formik = useFormik({
    initialValues: initialValueInputs,
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <Modal open={open} onClose={click}>
      <ModalWrapper>
        <ModalClose onClick={click}>
          <CloseIcon />
        </ModalClose>
        <ModalLeft>
          <ModalTitle>Вход или создать личный кабинет</ModalTitle>

          <ModalForm onSubmit={formik.handleSubmit}>
            <ModalTelInputWrapper>
              <ModalTelLabel htmlFor="tel-input">Телефон</ModalTelLabel>
              <ModalTelInput
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.number}
                name="number"
                type="number"
                id="tel-input"
                placeholder="Phone number... "
                autoComplete="off"
              />

              {formik.errors.number && formik.touched.number && (
                <ModalNumberInputError>
                  {formik.errors.number}
                </ModalNumberInputError>
              )}

                {/* <div style={styles}>
                  <label htmlFor="fffffffffff">wwwwwww</label>
                  <input type="text" />
                </div> */}
            </ModalTelInputWrapper>

            <ModalBtn type="submit">Получить код активации</ModalBtn>
          </ModalForm>

          <Box>
            <ModalLeftOr>или</ModalLeftOr>

            <ModalLeftApps>
              <ModalLeftLinkedn href="https://libwu.netlify.app/">
                <img src={google} alt="logo google" width={25} />
              </ModalLeftLinkedn>{" "}
              <ModalLeftLinkedn href="https://t.me/zahriddinus">
                <img src={telegram} alt="logo telegram" width={25} />
              </ModalLeftLinkedn>
            </ModalLeftApps>
          </Box>
        </ModalLeft>

        <ModalRight>
          {modal_items.map((item) => (
            <RegItem props={item} key={item.id} />
          ))}
        </ModalRight>
      </ModalWrapper>
    </Modal>
  );
}

export default memo(ResModal);
