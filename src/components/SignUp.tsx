/* eslint-disable @typescript-eslint/no-unused-vars */
import { Controller, useForm } from "react-hook-form";
import { Form, Input, Button } from "antd";
import React, { useCallback } from "react";
import { Link } from "react-router-dom";
import { AuthSignUpInput } from "../redux/types";
import { userRegisterRequest } from "../redux/actions/userActions";
import { useDispatch } from "react-redux";

export const Register: React.FC = () => {
  type FormInputs = {
    name: string;
    email: string;
    username: string;
    password: string;
    confirm: string;
  };
  const dispatch = useDispatch();
  const {
    handleSubmit,
    control,
    reset,
    watch,
    formState: { errors },
  } = useForm<FormInputs>();

  const onSubmit = useCallback(
    (formValues: AuthSignUpInput) => {
      console.log(formValues);
      dispatch(userRegisterRequest(formValues));
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

  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 8 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 16 },
    },
  };
  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 16,
        offset: 8,
      },
    },
  };
  return (
    <div>
      <Form
        {...formItemLayout}
        name="register"
        onFinish={handleSubmit(onSubmit)}
      >
        <Form.Item
          name="name"
          label="Full Name"
          validateStatus={errors && errors["name"] ? "error" : ""}
          help={errors.name?.message}
        >
          <Controller
            name="name"
            control={control}
            rules={{
              required: "Required",
            }}
            render={({ field: { onChange, onBlur, value, ref } }) => (
              <Input placeholder="name" onChange={onChange} value={value} />
            )}
          />
        </Form.Item>
        <Form.Item
          name="email"
          label="E-mail"
          validateStatus={errors && errors["email"] ? "error" : ""}
          help={errors.email?.message}
        >
          <Controller
            name="email"
            control={control}
            rules={{
              required: "Required",
              pattern: {
                value:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: "Please enter a valid email",
              },
            }}
            render={({ field: { onChange, onBlur, value, ref } }) => (
              <Input
                type="email"
                placeholder="email"
                onChange={onChange}
                value={value}
              />
            )}
          />
        </Form.Item>
        <Form.Item
          name="username"
          label="Username"
          validateStatus={errors && errors["username"] ? "error" : ""}
          help={errors.username?.message}
        >
          <Controller
            name="username"
            control={control}
            rules={{ required: "Required" }}
            render={({ field: { onChange, onBlur, value, ref } }) => (
              <Input placeholder="Username" onChange={onChange} value={value} />
            )}
          />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          validateStatus={errors && errors["password"] ? "error" : ""}
          help={errors.password?.message}
        >
          <Controller
            name="password"
            control={control}
            rules={{
              required: "Required",
              minLength: {
                value: 8,
                message: "Password must have at least 8 characters",
              },
            }}
            render={({ field: { onChange, onBlur, value, ref } }) => (
              <Input.Password
                placeholder="Password"
                onChange={onChange}
                value={value}
              />
            )}
          />
        </Form.Item>
        <Form.Item
          name="confirm"
          label="Confirm Password"
          validateStatus={errors && errors["confirm"] ? "error" : ""}
          help={errors.confirm?.message}
        >
          <Controller
            name="confirm"
            control={control}
            rules={{
              required: "Required",
              validate: (value) =>
                value === watch("password") || "The passwords do not match",
            }}
            render={({ field: { onChange, onBlur, value, ref } }) => (
              <Input.Password
                placeholder="Confirm Password"
                onChange={onChange}
                value={value}
              />
            )}
          />
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            Register
          </Button>
          <br />
          <br />
          Already have and account? <Link to="/">Login</Link>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Register;
