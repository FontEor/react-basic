import "./index.scss";
import { Card, Form, Input, Button } from "antd";
import { fetchLogin } from "@/store/modules/user";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { message } from "antd";
const Login = () => {
  const navigator = useNavigate();
  const dispatch = useDispatch();
  const onFinish = async (loginInfo) => {
    await dispatch(fetchLogin(loginInfo));
    navigator("/");
    message.success("登录成功");
  };
  return (
    <div className="login">
      <Card className="login-container">
        <h1 className="login-logo">登录</h1>
        <Form validateTrigger={["onBlur"]} onFinish={onFinish}>
          <Form.Item
            name="mobile"
            rules={[
              { required: true, message: "请输入手机号" },
              {
                pattern: /^1[3-9]\d{9}$/,
                message: "手机号码格式不对",
              },
            ]}
          >
            <Input size="large" placeholder="请输入手机号" />
          </Form.Item>
          {/*验证码 246810 */}
          <Form.Item
            name="code"
            rules={[{ required: true, message: "请输入验证码" }]}
          >
            <Input size="large" placeholder="请输入验证码" maxLength={6} />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" size="large" block>
              登录
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default Login;
