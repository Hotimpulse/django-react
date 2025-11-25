import Form from '@src/components/form/Form';

export default function Login() {
  return <Form route={'/api/token'} method={'login'}></Form>;
}
