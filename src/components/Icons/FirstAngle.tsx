export interface IIcon {
  width: number;
  height: number;
  className?: string;
  color?: string;
}

const FirstAngle: React.FC<IIcon> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width}
      height={props.height}
      className={props.className}
    >
      <path fill="#444" d="M14 3h-2L7 8l5 5h2L9 8z" />
      <path fill="#444" d="M9 3H7L2 8l5 5h2L4 8z" />
    </svg>
  );
};

export default FirstAngle;
