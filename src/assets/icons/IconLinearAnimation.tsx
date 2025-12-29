export default function IconLinearAnimation(props: any) {
  return (
    <svg
      viewBox="0 0 18 18"
      width="1.25em"
      height="1.25em"
      fill="currentColor"
      color={props.color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        width="18"
        height="2"
        transform="translate(0 12)"
        fill="currentColor"
      />
      <rect
        width="1"
        height="12"
        transform="translate(4)"
        fill="currentColor"
      />
      <path d="M1 6L4.5 10L8 6H1Z" fill="currentColor" />{" "}
    </svg>
  );
}
