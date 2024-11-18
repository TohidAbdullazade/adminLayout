import { Button, Empty, Form, Input, Spin } from "antd";
import { useForm } from "antd/es/form/Form";
import { useEffect, useState } from "react";
import TopSide from "../components/common/topSide";
import { GET, POST, putWithOutId } from "../service/main_service";
import CreateModal from "../utils/createModal";
import UpdateModal from "../utils/updateModal";

export default function Bio() {
  const [createModal, setCreateModal] = useState(false);
  const [data, setData] = useState<any>();
  const [createForm] = useForm();
  const [updateModal, setUpdateModal] = useState(false);
  const [updateForm] = useForm();
  const [loading, setLoading] = useState<boolean>(false);

  const handleGetAllBios = () => {
    setLoading(true);
    GET("/admin/bio")
      .then((res) => setData(res.data.data))

      .catch(() => {
        return;
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    handleGetAllBios();
  }, []);

  const createNewBio = (value: any) => {
    setLoading(true);
    POST("/admin/bio", value)
      .then((res) => {
        if (res) {
          setCreateModal(false);
          handleGetAllBios();
        }
      })
      .catch(() => {
        return;
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const updateBio = (value: any) => {
    setLoading(true);
    putWithOutId("/admin/bio", value)
      .then((res) => {
        if (res) {
          handleGetAllBios();
          setUpdateModal(false);
          updateForm.resetFields();
        }
      })
      .catch(() => {
        return;
      })
      .finally(() => setLoading(false));
  };

  return (
    <div>
      <TopSide
        buttonText="Edit"
        isDanger={false}
        onClick={() => {
          setUpdateModal(true);
          updateForm.setFieldsValue({
            addressAz: data.addressAz,
            addressRu: data.addressRu,
            addressEn: data.addressEn,
            phoneNumber: data.phoneNumber,
          });
        }}
        title="Bio"
      />
      {/* Create Modal */}
      <CreateModal
        title="Create Bio"
        width={600}
        isOpen={createModal}
        onCloseFunction={() => {
          setCreateModal(false);
          createForm.resetFields();
        }}
      >
        <Form form={createForm} onFinish={createNewBio} labelCol={{ span: 24 }}>
          <div className="flex flex-col  gap-5">
            <div className="flex h-auto justify-between items-center">
              <h2 className="font-poppins font-[600] text-2xl">Address</h2>
              <Form.Item className="">
                <button
                  disabled={loading}
                  className="w-[150px] mt-2 duration-300 hover:bg-[#15616D] text-white bg-[#111111] h-12 text-base poppins-medium"
                  type="submit"
                >
                  {loading ? (
                    <span className="flex justify-center items-center">
                      <Spin spinning />
                      <span className="ml-2">Loading...</span>
                    </span>
                  ) : (
                    "Create"
                  )}
                </button>
              </Form.Item>
            </div>
            <div className="flex gap-2.5">
              <Form.Item
                rules={[{ required: true }]}
                name="addressAz"
                label={
                  <span className="font-poppins font-[600] text-base">Az</span>
                }
              >
                <Input className="h-12" placeholder="Enter address" />
              </Form.Item>
              <Form.Item
                rules={[{ required: true }]}
                name="addressRu"
                label={
                  <span className="font-poppins font-[600] text-base">Ru</span>
                }
              >
                <Input className="h-12" placeholder="Enter address" />
              </Form.Item>
              <Form.Item
                rules={[{ required: true }]}
                name="addressEn"
                label={
                  <span className="font-poppins font-[600] text-base">Eng</span>
                }
              >
                <Input className="h-12" placeholder="Enter address" />
              </Form.Item>
            </div>
          </div>

          <Form.Item
            rules={[{ required: true }, { min: 8 }]}
            name="phoneNumber"
            label={
              <span className="font-poppins font-[600] text-base">
                Phone number
              </span>
            }
          >
            <Input placeholder="Enter phone number" />
          </Form.Item>
        </Form>
      </CreateModal>
      {/* Create Modal */}

      {/* Update Modal */}
      <UpdateModal
        title="Edit Bio"
        width={600}
        isOpen={updateModal}
        onCloseFunction={() => {
          setUpdateModal(false);
        }}
      >
        <Form form={updateForm} onFinish={updateBio} labelCol={{ span: 24 }}>
          <div className="flex flex-col  gap-5">
            <div className="flex h-auto justify-between items-center">
              <h2 className="font-poppins font-[600] text-2xl">Address</h2>
              <Form.Item className="">
                <button
                  disabled={loading}
                  className="w-[150px] mt-2 duration-300 hover:bg-[#15616D] text-white bg-[#111111] h-12 text-base poppins-medium"
                  type="submit"
                >
                  {loading ? (
                    <span className="flex justify-center items-center">
                      <Spin spinning />
                      <span className="ml-2">Loading...</span>
                    </span>
                  ) : (
                    "Update"
                  )}
                </button>
              </Form.Item>
            </div>
            <div className="flex gap-2.5">
              <Form.Item
                rules={[{ required: true }]}
                name="addressAz"
                label={
                  <span className="font-poppins font-[600] text-base">Az</span>
                }
              >
                <Input className="h-12" placeholder="Enter address" />
              </Form.Item>
              <Form.Item
                rules={[{ required: true }]}
                name="addressRu"
                label={
                  <span className="font-poppins font-[600] text-base">Ru</span>
                }
              >
                <Input className="h-12" placeholder="Enter address" />
              </Form.Item>
              <Form.Item
                rules={[{ required: true }]}
                name="addressEn"
                label={
                  <span className="font-poppins font-[600] text-base">Eng</span>
                }
              >
                <Input className="h-12" placeholder="Enter address" />
              </Form.Item>
            </div>
          </div>

          <Form.Item
            rules={[{ required: true }, { min: 8 }]}
            name="phoneNumber"
            label={
              <span className="font-poppins font-[600] text-base">
                Phone number
              </span>
            }
          >
            <Input className="h-12" placeholder="Enter phone number" />
          </Form.Item>
        </Form>
      </UpdateModal>

      <>
        {data != null ? (
          <div className="flex flex-col  ">
            <div className="flex flex-col border-b mx-5 p-5">
              <span className="text-2xl font-[700] my-5 "> Address </span>
              <div className="grid grid-cols-3 gap-4">
                <Form.Item
                  labelCol={{ span: 24 }}
                  label={<span className="text-sm font-[700]">Az</span>}
                >
                  <Input value={data?.addressAz} className="h-12" />
                </Form.Item>
                <Form.Item
                  labelCol={{ span: 24 }}
                  label={<span className="text-sm font-[700]">Ru</span>}
                >
                  <Input value={data?.addressRu} className="h-12" />
                </Form.Item>
                <Form.Item
                  labelCol={{ span: 24 }}
                  label={<span className="text-sm font-[700]">Eng</span>}
                >
                  <Input value={data?.addressEn} className="h-12" />
                </Form.Item>
              </div>
            </div>
            <div className="flex flex-col border-b mx-5 p-5">
              <span className="text-2xl font-[700] my-5 "> Phone </span>
              <div className="w-full">
                <Form.Item
                  labelCol={{ span: 24 }}
                  label={<span className="text-sm font-[700]">Az</span>}
                >
                  <Input value={data?.phoneNumber} className="h-12" />
                </Form.Item>
              </div>
            </div>
          </div>
        ) : (
          <Empty image={Empty.PRESENTED_IMAGE_SIMPLE}>
            <Button type="primary" className="h-12">
              Create
            </Button>
          </Empty>
        )}
      </>
    </div>
  );
}
