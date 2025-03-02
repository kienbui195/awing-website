import axios from "axios";

export default async function Home() {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_BE_URL}/homepage?populate=deep,4`);
  const layout = res.data.data.attributes.layout;  

  // Import component động và chờ tất cả Promise hoàn thành
  const listComp = await Promise.all(
    layout.map(async (item: any) => {
      const sectionName = item.__component.split(".")[1];
      const module = await import(`@/components/sections/${sectionName}`);
      const Component = module.default; // Lấy default export
      return <Component key={item.id} {...item} />;
    })
  );

  return <div>{listComp}</div>;
}
