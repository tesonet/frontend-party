export interface IProps {
  value: string;
  placeholder: string;
  type: string;
  onChange: (char: string, type: string) => void;
}
