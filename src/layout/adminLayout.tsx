import { Layout } from "antd";
import { Content, Footer } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import { Outlet } from "react-router-dom";
import SideMenu from "../components/common/sideMenu";
import WithAuth from "../components/common/withAuth";

const AdminLayout = () => {
  return (
    <>
      <Layout className="h-screen">
        <Sider theme="dark">
          <SideMenu />
        </Sider>
        <Layout>
          <Content>
            <Outlet />
          </Content>
          <Footer className="text-center bg-gray-300">
            <p className="text-[#FF8215]">
              <a target="_blank" href="https://artcodehub.com">
                <span className="text-[#3A3A3F]">Provided</span> by Artcodehub
              </a>
            </p>
          </Footer>
        </Layout>
      </Layout>
    </>
  );
};

export default WithAuth(AdminLayout);
