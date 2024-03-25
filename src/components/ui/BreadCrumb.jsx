export default function BreadCrumb(props) {
  const page = props.page;
  return (
    <h2 className="py-5">
      Home / {page && <span className="bg-ac-sec">{page}</span>}
    </h2>
  );
}
