import WelcomeLayout from "../layout/WelcomeLayout";
import InputForm from "../components/InputForm";
import PostLoginUser from "../services/PostLoginUser";

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
];

function LoginPage() {
    return (
      <WelcomeLayout title="로그인">
        <InputForm inputOptions={inputOptions} postInputValues={PostLoginUser} buttonText="로그인"/>
      </WelcomeLayout>
    );
}

export default LoginPage;