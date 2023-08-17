import { memo } from "react";
import { useDispatch } from "react-redux";

import {
  NavbarItemLink,
  NavbarItemText,
  NavbarItemWrapper,
  NavbarSmallItemLink,
} from "./navbarItem.styles";
import { mainInfoActions } from "../../store/commonData";

import { AccordionSummary } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export const NavbarItem = ({ name, icon, link, smallCategory }) => {
  const dispatch = useDispatch();

  function handleCategory(slug) {
    localStorage.setItem("slug", JSON.stringify(slug));
    dispatch(mainInfoActions.dataSlug(slug));
    dispatch(mainInfoActions.navIsBtn(false));
  }

  return (
    <NavbarItemWrapper>
      <NavbarItemLink to={link} onClick={() => handleCategory(link)}>
        <AccordionSummary
          style={{
            width: "100%",
            padding: "0 ",
          }}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          {icon} <NavbarItemText>{name}</NavbarItemText>
        </AccordionSummary>
      </NavbarItemLink>
      {smallCategory.map((item) => (
        <NavbarSmallItemLink
          to={`${link}/${item.slug}`}
          key={item.id}
          onClick={() => handleCategory(`${link}/${item.slug}`)}
        >
          {item.title}
        </NavbarSmallItemLink>
      ))}
    </NavbarItemWrapper>
  );
};
export default memo(NavbarItem);
