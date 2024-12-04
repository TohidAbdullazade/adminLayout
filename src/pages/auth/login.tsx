import { Button, Form, Image, Input } from "antd";
import { useForm } from "antd/es/form/Form";
import { useState } from "react";

const Login = () => {
  const [adminForm] = useForm();
  const [loginLoader, setLoginLoader] = useState<boolean>(false);

  // Login Handler
  const handleLoginUser = () => {};

  // JSX
  return (
    <>
      <div className="w-full flex-col  flex  justify-center h-screen">
        <div className=" flex flex-col gap-12  items-center ">
          <div>
            <div>
              <div className="flex justify-center my-5">
                <Image
                  draggable={false}
                  width={300}
                  height={300}
                  alt="carfax.png"
                  className="w-96 h-96"
                />
              </div>
              <Form
                form={adminForm}
                onFinish={handleLoginUser}
                labelCol={{ span: 24 }}
                className="p-2.5 "
              >
                <Form.Item
                  label={<span className="poppins-medium">Email</span>}
                  name="email"
                  rules={[
                    {
                      required: true,
                    },
                    // {
                    //   type: "email",
                    // },
                  ]}
                >
                  <Input
                    className=" max-w-[400px] h-12"
                    name="email"
                    placeholder="Enter email..."
                  />
                </Form.Item>
                <Form.Item
                  name="password"
                  label={<span className="poppins-medium">Password</span>}
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                  hasFeedback={true}
                >
                  <Input.Password
                    name="password"
                    className="max-w-[400px] h-12"
                    placeholder="Enter password..."
                  />
                </Form.Item>
                <Form.Item>
                  <Button
                    loading={loginLoader}
                    className="w-[400px] mt-5 h-12 text-base poppins-medium"
                    type="primary"
                    htmlType="submit"
                  >
                    Login
                  </Button>
                </Form.Item>
                <div className=" mt-[160px] text-center">
                  <p className="text-sm text-[#3A3A3F]  ">
                    Provided by
                    <strong>
                      <a
                        href="https://www.artcodehub.com"
                        target="_blank"
                        className="text-base ml-1 text-[#FF8215]  "
                      >
                        Artcodehub
                      </a>
                    </strong>
                  </p>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
