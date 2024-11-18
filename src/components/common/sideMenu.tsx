import { Image, Menu } from "antd";
import { useNavigate } from "react-router-dom";
import logo from "../../../public/icons/logo.svg";

const SideMenu = () => {
  const navigate = useNavigate();

  return (
    <Menu
      className="min-h-full bg-[#f2f4f7]"
      onClick={(item) => {
        if (item.key) {
          navigate(`${item.key}`);
        }
      }}
      theme="light"
    >
      <div
        style={{
          height: 72,
          display: "flex",
          alignItems: "center",
          borderBottom: "1px solid #e5e5e5",
          justifyContent: "center",
          position: "sticky",
          top: 0,
          zIndex: 10,
          overflow: "hidden",
          background: "#f2f4f7",
        }}
      >
        <Image src={logo} width={120} height={120} preview={false} />
      </div>

      {/* Menu items */}
      <Menu.Item
        key="/admin"
        style={{
          height: 48,
          display: "flex",
          alignItems: "center",
          fontSize: 16,
          borderRadius: "0",
        }}
      >
        Admins
      </Menu.Item>
      <Menu.Item
        key="bio"
        style={{
          height: 48,
          display: "flex",
          alignItems: "center",
          fontSize: 16,
          borderRadius: "0",
        }}
      >
        Bio
      </Menu.Item>
      <Menu.Item
        key="members"
        style={{
          height: 48,
          display: "flex",
          alignItems: "center",
          fontSize: 16,
          borderRadius: "0",
        }}
      >
        Members
      </Menu.Item>
      <Menu.Item
        key="social-medias"
        style={{
          height: 48,
          display: "flex",
          alignItems: "center",
          fontSize: 16,
          borderRadius: "0",
        }}
      >
        Social Medias
      </Menu.Item>
      <Menu.Item
        key="promocodes"
        style={{
          height: 48,
          display: "flex",
          alignItems: "center",
          fontSize: 16,
          borderRadius: "0",
        }}
      >
        Promocodes
      </Menu.Item>
      <Menu.Item
        key="profile"
        style={{
          height: 48,
          display: "flex",
          alignItems: "center",
          fontSize: 16,
          borderRadius: "0",
        }}
      >
        Profile
      </Menu.Item>
    </Menu>
  );
};

export default SideMenu;
