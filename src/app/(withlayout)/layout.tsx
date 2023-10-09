import Contents from "@/components/ui/Contents";
import SideBar from "@/components/ui/Sidebar";
import { Layout } from "antd";

// ei layout ta (withlayout) er moddhe jeshob page thakbe, segulo k receive korbe
const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Layout hasSider>
      <SideBar />
      <Contents>{children}</Contents>
    </Layout>
  );
};

export default DashboardLayout;
