import { Form, Input, Button } from "antd";

const formLayout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
    style: {
      maxWidth: 600,
    },
    initialValues: {
      remember: true,
    }
};

function LoginInput({options}) {
    const [form] = Form.useForm();

    const onFinish = (input) => {
        console.log('loginpage onfinish input : ', input);
      }
    
    return (
        <Form 
            {...formLayout}
            form={form}
            onFinish={onFinish}
        >
          {
            options.map((option, idx) => {
              return (
                <Form.Item 
                  key = {idx}
                  label= {option.label}
                  name= {option.name}
                  rules= {options.rules}
                >
                  <Input />
                </Form.Item>
              )
            })
          }
          <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
          </Form.Item>
        </Form>
    )
}

export default LoginInput;