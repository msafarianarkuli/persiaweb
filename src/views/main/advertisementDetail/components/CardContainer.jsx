import { adDetail } from "@/utils/fakeData";
import DetailCard from "./DetailCard";

function CardContainer({ className, data }) {
  const adDetail = [
    { id: 1, title: `استان ${data?.province?.title}` },
    { id: 2, title: data?.gender },
    { id: 3, title: data?.work_experience },
    // { id: 2, title: data?.gender },
    {
      id: 4,
      title: `${data?.min_salary / 1000000} تا ${
        data?.max_salary / 1000000
      } میلیون تومان`,
    },
  ];
  return (
    <div className={`flex flex-wrap gap-2 justify-around ${className}`}>
      {adDetail.map((item) => (
        <DetailCard key={item.id} title={item.title} />
      ))}
    </div>
  );
}

export default CardContainer;
