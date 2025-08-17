"use client";

import { Button, Form, Input, notification } from "antd";
import { useState } from "react";
import aesjs from "aes-js";
import store from "store";
import { useNavigate } from "react-router-dom";

const key = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

const encryptPassword = (password: string) => {
  // Convert text to bytes
  const textBytes = aesjs.utils.utf8.toBytes(password);

  // The counter is optional, and if omitted will begin at 1
  const aesCtr = new aesjs.ModeOfOperation.ctr(key, new aesjs.Counter(5));
  const encryptedBytes = aesCtr.encrypt(textBytes);

  // To print or store the binary data, you may convert it to hex
  const encryptedHex = aesjs.utils.hex.fromBytes(encryptedBytes);
  return encryptedHex;
};

const Login = () => {
  const navigate = useNavigate();
  const [formdata, setFormdata] = useState({
    username: "",
    password: "",
  });

  const handleChange = (
    val: React.ChangeEvent<HTMLInputElement>,
    input: "username" | "password"
  ) => {
    const value = val.target.value;
    const newData = { ...formdata, [input]: value };
    setFormdata(newData);
  };

  const onFinish = () => {
    const payload = {
      username: formdata.username,
      password: encryptPassword(formdata.password),
    };

    if (
      payload?.username === "admin" &&
      payload?.password === "a71de6a4d013cb99"
    ) {
      store.set("authorized", true);
      navigate(`/admin`);
      notification.success({
        message: "Login Successful",
        description: "You are now logged in!",
      });
    } else {
      notification.error({
        message: "Login Failed",
        description: "You have entered an invalid username or password!",
      });
    }
  };

  return (
    <div className="container mx-auto min-h-screen flex items-center justify-center md:pr-5 z-10 w-full md:w-1/2">
      <div className="bg-white rounded-2xl flex flex-col justify-center">
        <div className="flex flex-col items-center text-center mb-9">
          <h1 className="text-2xl font-bold mt-3">
            Welcome to Nusantara Admin
          </h1>
        </div>

        <Form name="login" autoFocus layout="vertical" onFinish={onFinish}>
          <div
            className={`transition-all duration-500 ease-in-out opacity-100 translate-y-0 scale-100`}
            key="login-form"
          >
            <>
              <Form.Item
                name="username"
                className="!flex !justify-center !mb-4"
              >
                <p className="mb-2">Username</p>
                <Input
                  className="!rounded-[10px] !h-10 min-[1600px]:!w-[350px] !2xl:w-[300px] xl:!w-[300px] lg:!w-[200px] md:!w-[200px] !w-[200px]"
                  placeholder="Enter your username"
                  onChange={(val) => handleChange(val, "username")}
                />
              </Form.Item>
              <Form.Item
                name="password"
                className="!flex !justify-center !mb-4"
              >
                <p className="mb-2">Password</p>
                <Input.Password
                  className="!rounded-[10px] !h-10 min-[1600px]:!w-[350px] 2xl:w-[300px] xl:!w-[300px] lg:!w-[200px] md:!w-[200px] !w-[200px]"
                  placeholder="Enter your password"
                  onChange={(val) => handleChange(val, "password")}
                />
              </Form.Item>
            </>
          </div>

          <Form.Item className="!my-8">
            <div className="flex flex-col justify-center items-center">
              <Button
                htmlType="submit"
                type="primary"
                className={`${
                  formdata.username && formdata.password
                    ? "!bg-[#1F2937]"
                    : "!bg-[#F3F4F6] !border-[#F3F4F6]"
                } !rounded-[10px] hover:opacity-75 !h-10 min-[1600px]:!w-[350px] !2xl:w-[300px] xl:!w-[300px] lg:!w-[200px] md:!w-[200px] !w-[200px]`}
                disabled={!formdata.username || !formdata.password}
              >
                Sign In
              </Button>

              <div className="flex justify-center text-xs text-[#9CA3AF] font-[500] leading-[18px] mt-9 text-center">
                Copyright © PT Nusantara Batavia International
              </div>
            </div>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
