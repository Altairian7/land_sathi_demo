export default function LandDetails({
  params,
}: {
  params: { landid: string };
}) {
  return <h1> Details regading land {params.landid}</h1>;
}
