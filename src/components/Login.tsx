/* eslint-disable @typescript-eslint/no-unused-vars */
import { Controller, useForm } from "react-hook-form";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Form, Input, Button } from "antd";
import React, { useCallback } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginRequestSaga } from "../redux/sagas/loginSaga";
import { userLoginRequest } from "../redux/actions/userActions";
import { AuthSignInInput } from "../redux/types";

export const Login: React.FC = () => {
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<AuthSignInInput>();
  const dispatch = useDispatch();
  const onSubmit = useCallback(
    (formValues: AuthSignInInput) => {
      dispatch(userLoginRequest(formValues));
      // setTimeout(
      //   () =>
      //     reset({
      //       username: "",
      //       password: "",
      //     }),
      //   1000
      // );
    },
    [dispatch]
  );
  return (
    <div>
      <Form
        name="normal_login"
        className="login-form"
        onFinish={handleSubmit(onSubmit)}
      >
        <Form.Item
          name="username"
          validateStatus={errors && errors["username"] ? "error" : ""}
          help={errors.username?.message}
        >
          <Controller
            name="username"
            control={control}
            rules={{ required: "Required" }}
            render={({ field: { onChange, onBlur, value, ref } }) => (
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Username"
                onChange={onChange}
                value={value}
              />
            )}
          />
        </Form.Item>

        <Form.Item
          name="password"
          validateStatus={errors && errors["password"] ? "error" : ""}
          help={errors.password?.message}
        >
          <Controller
            name="password"
            control={control}
            rules={{ required: "Required" }}
            render={({ field: { onChange, onBlur, value, ref } }) => (
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
                onChange={onChange}
                value={value}
              />
            )}
          />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Log in
          </Button>
          Or <Link to="/register">register now!</Link>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
