import './checkbox.scss';

export const Checkbox = ({ text, onChange }: { text: string; onChange: any }) => {
  return (
    <label className="checkbox" onChange={onChange}>
      <input type="checkbox" className="checkbox__input" />
      <span className="checkbox__checkmark"></span>
      {text}
    </label>
  );
};
