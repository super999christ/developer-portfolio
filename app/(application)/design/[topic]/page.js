import DesignView from "@/app/components/homepage/designs";

export default async function DesignPage({ params }) {
  const { topic } = params;
  return (
    <>
      <DesignView topic={topic} />
    </>
  )
};