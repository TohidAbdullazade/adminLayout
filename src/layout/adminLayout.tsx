import { Layout } from "antd";
import { Content, Footer } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import SideMenu from "../components/sideMenu";

const AdminLayout = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Layout className="h-screen">
        <Sider
          theme="dark"
          collapsible
          breakpoint="sm"
          collapsed={open}
          onCollapse={(isOpen: boolean) => setOpen(isOpen)}
          collapsedWidth={60}
        >
          <SideMenu />
        </Sider>
        <Layout>
          <Content className="p-5 flex-grow bg-slate-200">
            <Outlet />
          </Content>
          <Footer className="text-center bg-gray-300">
            <p className="text-[#FF8215]">
              <span className="text-[#3A3A3F]">Provided</span> by Artcodehub
            </p>
          </Footer>
        </Layout>
      </Layout>
    </>
  );
};

export default AdminLayout;
