import { Form, Input, Radio, Button } from "antd";

const {Item} = Form;

const formLayout = {
    labelCol: {
      span: 7,
    },
    wrapperCol: {
      span: 12,
    },
    style: {
      maxWidth: 600,
    },
    initialValues: {
      remember: true,
    }
};

const getFieldInput = (type, options) => {
  if (type === 'Text') {
    return <Input />;
  } else if (type === 'Select') {
    return (
      <Radio.Group value={formLayout}>
        {
          options.selectedOption.map((option, idx) => {
              return <Radio.Button key={idx} value={option.value}>{option.name}</Radio.Button>;
          })
        }
      </Radio.Group>
    );
  } else {
    return null;
  }
}

function InputForm({inputOptions, postInputValues, buttonText}) {
    const [form] = Form.useForm();

    const onFinish = async (input) => {
        console.log(form.getFieldValue());
        console.log('loginpage onfinish input : ', input);
        // await postInputValues({...input, userType: "ADMIN"});
      }
    
    return (
        <Form 
            {...formLayout}
            id='loginForm'
            form={form}
            onFinish={onFinish}
            style={{width: '100%'}}
        >
          {
            inputOptions.map(({type, options}, idx) => {
              return (
                <Item 
                  key = {idx}
                  label= {options.label}
                  name= {options.name}
                  rules= {options.rules}
                >
                  {getFieldInput(type, options)}
                </Item>
              )
            })
          }
          <Item  
            wrapperCol={{
            offset: 7,
            span: 12,
            }}
          >
            <Button form='loginForm' type="primary" htmlType="submit" block>
              {buttonText}
            </Button>
          </Item>
        </Form>
    )
}

export default InputForm;