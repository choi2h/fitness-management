import WelcomeLayout from '../layout/WelcomeLayout';
import InputForm from '../components/InputForm';
import PostJoinUser from '../services/postJoinUser';

// stores 폴더로 분리
const inputOptions = [
    {
      type : 'Text',
      options : {
        label : '아이디',
        name : 'loginId',
        rules : [
          {
            required: true,
          }
        ],
      }
    },
    {
      type : 'Text',
      options : {
        label : '비밀번호',
        name : 'password',
        rules : [
          {
            required: true,
          }
        ],
      }
    },
    {
      type : 'Text',
      options : {
        label : '이름',
        name : 'name',
        rules : [
          {
            required: true,
          }
        ]
      }
    },
    {
      type : 'Number',
      options : {
        label : '전화번호',
        name : 'phoneNumber',
        rules : [
          {
            required: true,
            maxLength: 16, 
          }
        ]
      }
    },
    {
      type : 'Select',
      options : {
        label : '성별',
        name : 'gender',
        selectedOption: [
            {
                value : 'mail',
                name : '남성'
            },
            {
                value : 'femail',
                name : '여성'
            }
        ],
        rules : [
          {
            required: true,
          }
        ]
      }
    },
    {
      type : 'Date',
      options : {
        label : '생년월일',
        name : 'birth',
        rules : [
          {
            required: true,
          }
        ]
      }
    },
    {
      type : 'Search',
      options : {
        label : '우편번호',
        name : 'zipCode',
        rules : [
          {
            required: true,
          }
        ]
      }
    },
    {
    type : 'Text',
    options : {
        label : '상세주소',
        name : 'detailAddress',
        rules : [
        {
            required: true,
        }
        ]
    }
    }
];

function JoinPage() {
    const initValue = {
        loginId: '',
        password: '',
        name: '',
        gender: '',
        phoneNumber: '',
        birth: '',
        zipCode: '',
        address: '',
        detailAddress: '',
    }

    return (
      <WelcomeLayout title="회원가입">
        <InputForm inputOptions={inputOptions} initValue={initValue} postInputValues={PostJoinUser} buttonText="회원가입"/>
      </WelcomeLayout>
    );
}

export default JoinPage;