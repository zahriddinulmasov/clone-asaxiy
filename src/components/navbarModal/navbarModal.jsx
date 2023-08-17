import { memo } from "react";
import { useDispatch, useSelector } from "react-redux";

import { ModalLeft, ModalWrapper } from "./navbarModal.styles";

import NavbarItem from "../navbarItem/navbarItem";

import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import CoffeeMakerIcon from "@mui/icons-material/CoffeeMaker";
import ComputerIcon from "@mui/icons-material/Computer";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import GrassIcon from "@mui/icons-material/Grass";
import SpaIcon from "@mui/icons-material/Spa";
import { mainInfoActions } from "../../store/commonData";

let icons = [
  <SmartphoneIcon />,
  <LibraryBooksIcon />,
  <CoffeeMakerIcon />,
  <ComputerIcon />,
  <SportsSoccerIcon />,
  <GrassIcon />,
  <SpaIcon />,
];

export const   NavbarModal = ({open}) => {
  const infos = useSelector((state) => state.commonInfo.info);

  const dispatch = useDispatch();

  function handleCategory(slug) {
    localStorage.setItem("slug", JSON.stringify(slug));
    dispatch(mainInfoActions.dataSlug(slug));
    dispatch(mainInfoActions.navIsBtn(false));
  }

  return (
    <ModalWrapper style={{display: open ? "flex" : "none"}}>
      <ModalLeft

      >
        {infos.map((item, index) => (
          <NavbarItem
            key={item.id}
            name={item.title}
            link={item.slug}
            icon={icons[index]}
            smallCategory={item.child_category}
            handleCategory={handleCategory}
          />
        ))}
      </ModalLeft>


    </ModalWrapper>
  );
};

export default memo(NavbarModal)