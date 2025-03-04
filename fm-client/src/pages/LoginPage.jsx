import WelcomeLayout from "../layout/WelcomeLayout";
import LoginInput from "../components/LoginInput";

// stores 폴더로 분리
const options = [
  {
    label : 'id',
    name : 'loginId',
    rules : [
      {
        required: true,
      }
    ],
  },
  {
    label : 'password',
    name : 'password',
    rules : [
      {
        required: true,
      }
    ],
  }
];



function LoginPage() {
    return (
      <WelcomeLayout>
        <LoginInput options={options}/>
      </WelcomeLayout>
    );
}

export default LoginPage;