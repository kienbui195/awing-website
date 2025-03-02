import axios from "axios";

export default async function Home() {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_BE_URL}/homepage?populate=deep,4`);
  const layout = res.data.data.attributes.layout;

  const listComp = await Promise.all(
    layout.map(async (item: any) => {
      const sectionName = item.__component.split(".")[1];

      try {
        const module = await import(`@/components/sections/${sectionName}`);
        const Component = module.default ?? null; // Lấy default export
        return Component ? <Component key={item.id} {...item} /> : null;
      } catch (error) {
        console.warn(`Component ${sectionName} không tồn tại!`);
        return null; // Trả về null nếu không có file component
      }
    })
  );

  return <div>{listComp.filter(Boolean)}</div>; // Lọc bỏ phần tử null
}
