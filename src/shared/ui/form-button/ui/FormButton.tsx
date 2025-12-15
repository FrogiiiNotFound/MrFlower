import './form-button.scss';

export const FormButton = ({ text }: { text: string }) => {
  return <button className="form-button">{text}</button>;
};
