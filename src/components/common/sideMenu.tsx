import { Menu } from "antd";
import { useNavigate } from "react-router-dom";
import type { MenuProps } from "antd";

const SideMenu = () => {
  const navigate = useNavigate();

  // Create a shared style object to reduce repetition
  const commonItemStyle = {
    height: 48,
    display: "flex",
    alignItems: "center",
    fontSize: 16,
    borderRadius: 0,
  };

  const menuItems: MenuProps["items"] = [
    {
      key: "logo",
      label: (
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
          <div className="h-f w-full flex justify-center items-center">
            salam
            {/* <Image src={logo} width={120} height={120} preview={false} /> */}
          </div>
        </div>
      ),
      style: { padding: 0, margin: 0 },
    },
    {
      key: "/admin",
      label: "Admins",
      style: commonItemStyle,
    },
    {
      key: "bio",
      label: "Bio",
      style: commonItemStyle,
    },
    {
      key: "members",
      label: "Members",
      style: commonItemStyle,
    },
    {
      key: "social-medias",
      label: "Social Medias",
      style: commonItemStyle,
    },
    {
      key: "promocodes",
      label: "Promocodes",
      style: commonItemStyle,
    },
    {
      key: "profile",
      label: "Profile",
      style: commonItemStyle,
    },
  ];

  return (
    <Menu
      className="min-h-full bg-[#f2f4f7]"
      onClick={(item) => {
        if (item.key && item.key !== "logo") {
          navigate(`${item.key}`);
        }
      }}
      theme="light"
      items={menuItems}
    />
  );
};

export default SideMenu;
