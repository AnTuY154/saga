import React, { useState, useEffect } from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';

import { Form, Input, Button, Checkbox } from 'antd';

import { debounce } from 'ts-debounce';
import { getUser, login } from './loginSlice';
import { useHistory } from 'react-router';

export function Login() {

    const dispatch = useAppDispatch();
    const user = useAppSelector(getUser);
    const history = useHistory();

    const onFinish = debounce((values: any) => {
        dispatch(login({
            data: values,
            redirect: redirect,
            showError: showError
        }));
    }, 1000);

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    // 
    const redirect = () => {
        history.push('/home')
    }

    const showError = (error: any) => {
        console.log(error);
    }


    return (
        <div>
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 8 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    // validate here
                    rules={[
                        {
                            validator: (rule: any, value: string, cb: (msg?: string) => void) => {
                                value.length < 3 ? cb("too short") : cb();
                            }
                        }
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 4, span: 16 }}>
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 4, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}
