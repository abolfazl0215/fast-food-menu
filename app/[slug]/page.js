import CocoApp from "../../components/CocoApp";

export default async function Page({ params }) {
  const { slug } = await params;

  return <CocoApp slug={slug} />;
}
