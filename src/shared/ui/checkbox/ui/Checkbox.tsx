import './checkbox.scss';

export const Checkbox = ({ text }: { text: string }) => {
  return (
    <label className="checkbox">
      <input type="checkbox" className="checkbox__input"/>
      <span className="checkbox__checkmark"></span>
      {text}
    </label>
  );
};
