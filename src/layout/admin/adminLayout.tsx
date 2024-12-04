import { Layout } from "antd";
import { Content, Footer } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import { Outlet } from "react-router-dom";
import SideMenu from "../../components/common/sideMenu";
import WithAuth from "../../components/common/withAuth";

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
        </Layout>
      </Layout>
    </>
  );
};

export default AdminLayout;
