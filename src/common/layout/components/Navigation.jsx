import { useState } from "react";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import { FaCog, FaUserTie, FaColumns, FaThList } from "react-icons/fa";
import {
  Menu,
  MenuItem,
  ProSidebar,
  SidebarHeader,
  SubMenu
} from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import styled from "styled-components";

const Menuitem = styled(MenuItem)`
  :hover {
    background-color: #2c3c4f ;
    padding: 2px;
    border-radius: 10px;
  }
`;

const SideBar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const styles = {
    sideBarHeight: {
      height: "auto"
    },
    menuIcon: {
      float: "right",
      margin: "10px"
    },
    notChanged: {
      display: 'block'
    }
  };
  const onClickMenuIcon = () => {
    setCollapsed(!collapsed);
  };

  return (
    <>
      <ProSidebar style={styles.sideBarHeight} collapsed={collapsed}>
        <SidebarHeader className="sideBar">
          {
            collapsed
              ?
              <img style={styles.notChanged} src="/assets/img/logo-small.png" alt="there may be a logo" className="imgLogosmall" />

              :
              <img style={styles.notChanged} src="/assets/img/logo-white.png" alt="there may be a logo" className="imgLogo" />

              
          }
        </SidebarHeader>
        <Menu className="NavMenu" iconShape="square">
          <Menuitem icon={<FaColumns />}> <a href="/">Главная</a></Menuitem>
          <Menuitem icon={<FaUserTie />}>
            <a href="/groups">Контроль студентов</a>
          </Menuitem>
          <SubMenu title="Задания" icon={<FaThList />}>
            <Menuitem><a href="/tests">Тесты</a></Menuitem>
            <MenuItem><a href="/assignment">Задания</a></MenuItem>
          </SubMenu>
          <Menuitem icon={<FaCog />}><a href="/notifications">Доска объявлений</a></Menuitem>
        </Menu>
        <div className="Nav" style={styles.menuIcon} onClick={onClickMenuIcon}>
          
          {
            collapsed
              ?
<AiFillCaretRight />

              :
<AiFillCaretLeft />
              
          }
        </div>
      </ProSidebar>
    </>

  );
};
export default SideBar;