export default function IconShaded(props: any) {
  return (
    <svg
      viewBox="0 0 40 40"
      width="40"
      height="40"
      fill="currentColor"
      color={props.color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M13 25.75V15.25L20 20.5V31L13 25.75Z" fill="#DBDADA" />
      <path d="M20 20.5L27 15.25V25.75L20 31V20.5Z" fill="#ACAAAA" />
      <path d="M20 10L13 15.25L20 20.5L27 15.25L20 10Z" fill="white" />
    </svg>
  );
}
