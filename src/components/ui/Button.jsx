export default function Button(props) {
  const { icon, children } = props;
  const type = props.type ? props.type : "primary";

  return (
    <button
      {...props}
      className={`${
        type === "primary" ? "bg-ac" : "bg-ac-sec"
      } h-10 px-7 rounded-sm hover:opacity-80 flex items-center gap-1 disabled:opacity-50`}
    >
      {icon}
      {children}
    </button>
  );
}
