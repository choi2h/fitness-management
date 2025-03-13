import { Form, Input, Radio, Button, Modal, DatePicker } from 'antd';
import { useEffect, useState } from 'react';
import AddressModal from '../AddressModal';

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

const AddressInput = (onSearch, address) => {
  return (
      <div>
          <Input.Search
            allowClear
            enterButton="우편번호 찾기"
            onSearch={onSearch}
            value={address.zipCode}
          />
          <Input
            value={address.address}/>
      </div>
  );
}

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
  } else if(type === 'Date'){
    return <DatePicker/>
  } else {
    return null;
  }
}

function InputForm({inputOptions, postInputValues, buttonText}) {
    const [form] = Form.useForm();
    const [openSearchAddress, setOpenSearchAddress] = useState(false);
    const [address, setAddress] = useState(
      {
        zipCode : '',
        address: '',
        detail: ''
      }
    );
    
    useEffect(() => {
      form.setFieldsValue({...address});
      console.log('useEffect=> ', form.getFieldValue());
    }, [form, address]);

    const onFinish = async (input) => {
        console.log(form.getFieldValue());
        console.log('loginpage onfinish input : ', input);
        console.log(address);
        // await postInputValues({...input, userType: "ADMIN"});
    }

    const handleSearchAddress = () => {
      setOpenSearchAddress(!openSearchAddress);
    };

    const onSearch = () => {
      handleSearchAddress();
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
                  fiel
                >
                  {options.name == 'zipCode' ? AddressInput(onSearch, address) : getFieldInput(type, options)}
                </Item>
              )
            })
          }
          {
            openSearchAddress ? 
            (
              <Modal 
                title="우편번호 검색" 
                open={openSearchAddress}
                onCancel={() => handleSearchAddress()}
                footer={null}
              >
                <AddressModal
                  setOpen={handleSearchAddress}
                  setAddress={setAddress}
                />
              </Modal>
            ) : null
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