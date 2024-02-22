import React from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { rltSidebarStatus, selectedLanguage } from "../features/loginSlice";

const LanguageDropdown = () => {
  const { currentLanguage } = useSelector((state) => state.login);
  const dispatch = useDispatch();
  return (
    <DropdownButton
      id="dropdown-basic-primary"
      title={currentLanguage === "english" ? "English" : "عربي"}
      className="language-dropdown py-1"
    >
      <Dropdown.Item
        onClick={() => {
          dispatch(selectedLanguage("english"));
          dispatch(rltSidebarStatus(false));
        }}
      >
        English
      </Dropdown.Item>
      <Dropdown.Item
        onClick={() => {
          dispatch(selectedLanguage("arabic"));
          dispatch(rltSidebarStatus(true));
        }}
      >
        عربي
      </Dropdown.Item>
    </DropdownButton>
  );
};

export default LanguageDropdown;
