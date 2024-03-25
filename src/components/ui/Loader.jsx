export default function Loader() {
  return (
    <svg
      width="100"
      height="100"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="30"
        y="30"
        width="20"
        height="20"
        fill="lightgray"
        transform-origin="50 50"
      >
        <animateTransform
          attributeName="transform"
          type="translate"
          dur="2s"
          values="0 0; 20 0; 20 20; 0 20; 0 0"
          repeatCount="indefinite"
        ></animateTransform>
      </rect>
      <rect
        x="50"
        y="50"
        width="20"
        height="20"
        fill="lightgray"
        transform-origin="50 50"
      >
        <animateTransform
          attributeName="transform"
          type="translate"
          dur="2s"
          values="0 0; -20 0; -20 -20; 0 -20; 0 0"
          repeatCount="indefinite"
        ></animateTransform>
      </rect>
    </svg>
  );
}
