import { Form, Input, Radio, Button, Modal, DatePicker } from 'antd';
import { useEffect, useState } from 'react';
import AddressModal from '../AddressModal';

const { Item } = Form;

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

const AddressInput = (onSearch, inputValue) => {
  return (
    <div>
      <Input.Search
        allowClear
        enterButton="우편번호 찾기"
        onSearch={onSearch}
        value={inputValue.zipCode}
      />
      <Input
        value={inputValue.address}
      />
    </div>
  );
}

const radioInput = (options) => {
  return (
    <Radio.Group>
      {
        options.selectedOption.map((option, idx) => {
          return (
            <Radio.Button
              key={idx}
              value={option.value}
            >
              {option.name}
            </Radio.Button>
          );
        })
      }
    </Radio.Group>
  );
}

const onlyNumberInput = (form) => {
  return <Input
    onChange={(e) => {
      const value = e.target.value.replace(/[^0-9]/g, "");
      form.setFieldsValue({ phoneNumber: value });
    }}
  />;
}

const getAddressModal = (openSearchAddress, onSearch, setInputValue) => {
  return (
    <Modal
      title="우편번호 검색"
      open={openSearchAddress}
      onCancel={() => onSearch()}
      footer={null}
    >
      <AddressModal
        setOpen={onSearch}
        setAddress={setInputValue}
      />
    </Modal>
  );
}

function InputForm({ inputOptions, postInputValues, initValue, buttonText }) {
  const [form] = Form.useForm();
  const [openSearchAddress, setOpenSearchAddress] = useState(false);
  const [inputValue, setInputValue] = useState(initValue);

  useEffect(() => {
    form.setFieldsValue({ ...inputValue });
    console.log('useEffect=> ', form.getFieldValue());
  }, [form, inputValue]);

  const onFinish = async (input) => {
    console.log('loginpage onfinish input : ', input);
    // await postInputValues({...input, userType: "ADMIN"});
  }

  const onSearch = () => {
    setOpenSearchAddress(!openSearchAddress);
  }

  const getFieldInput = (type, options) => {
    if (type === 'Text') {
      if (options.name === 'password') return <Input.Password />
      return <Input />;
    } else if (type === 'Select') {
      return radioInput(options);
    } else if (type === 'Date') {
      return <DatePicker />
    } else if (type === 'Number') {
      return onlyNumberInput(form);
    } else {
      return null;
    }
  }

  return (
    <Form
      {...formLayout}
      id='form'
      form={form}
      onFinish={onFinish}
      style={{ width: '100%' }}
    >
      {
        inputOptions.map(({ type, options }, idx) => {
          return (
            <Item
              key={idx}
              label={options.label}
              name={options.name}
              rules={options.rules}
            >
              {
                options.name == 'zipCode' ?
                  AddressInput(onSearch, inputValue) :
                  getFieldInput(type, options)
              }
            </Item>
          )
        })
      }
      {
        openSearchAddress ?
          getAddressModal(openSearchAddress, onSearch, setInputValue) : null
      }
      <Item
        wrapperCol={{
          offset: 7,
          span: 12,
        }}
      >
        <Button form='form' type="primary" htmlType="submit" block>
          {buttonText}
        </Button>
      </Item>
    </Form>
  )
}

export default InputForm;