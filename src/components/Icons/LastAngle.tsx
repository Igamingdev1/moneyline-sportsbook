export interface IIcon {
  width: number;
  height: number;
  className?: string;
  color?: string;
}

const LastAngle: React.FC<IIcon> = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={props.width} height={props.height}>
      <path fill="#444" d="M2 13h2l5-5-5-5H2l5 5z" />
      <path fill="#444" d="M7 13h2l5-5-5-5H7l5 5z" />
    </svg>
  );
};

export default LastAngle;
