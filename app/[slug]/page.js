import CocoApp from "../../components/CocoApp";

export default function Page({ params }) {
  return <CocoApp slug={params.slug} />;
}
