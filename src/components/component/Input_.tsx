import { InputType } from '@/lib/types';

function Input_({
  placeholder,
  type = InputType.text,
}: {
  placeholder?: string;
  type: InputType;
}) {
  return (
    <input
      type={InputType[type]}
      placeholder={placeholder}
      minLength={type === InputType.password ? 8 : 0}
      maxLength={type === InputType.password ? 30 : 254}
      pattern={
        type === InputType.email
          ? '^[a-zA-Z0-9]+(.[a-zA-Z0-9]+){0,1}@[gG][mM][aA][iI][lL].[cC][oO][mM]$'
          : type === InputType.password
          ? '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[#$@!%&*?])[A-Za-z0-9#$@!%&*?]{8,}$'
          : ''
      }
      required
      title={
        type === InputType.email
          ? 'Enter valid gmail address'
          : type === InputType.password
          ? 'Enter valid password, i.e., at least 8 characters long,  include a combination of uppercase and lowercase letters, include at least one number and symbol'
          : undefined
      }
    />
  );
}

export default Input_;
