export interface IIcon {
  width?: number;
  height?: number;
  className?: string;
}

const MenuIcon: React.FC<IIcon> = (props) => {
  return (
    <svg className={props.className} width={props.width} height={props.height} fill="none">
      <path
        fill="#000"
        d="M3 6a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1zm0 6a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1zm1 5a1 1 0 1 0 0 2h16a1 1 0 1 0 0-2H4z"
      />
    </svg>
  );
};

export default MenuIcon;
