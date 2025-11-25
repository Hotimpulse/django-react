import Form from '@src/components/form/Form';

export default function Register() {
  return <Form route={'/api/user/register'} method={'register'}></Form>;
}
