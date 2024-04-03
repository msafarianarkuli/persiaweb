import { adDetail } from "@/utils/fakeData";
import DetailCard from "./DetailCard";
import { gender, work_experience } from "@/utils/constants";

function CardContainer({ className, data }) {
  const adDetail = [
    { id: 1, title: `استان ${data?.province?.title}` },
    { id: 2, title: gender?.find((g) => g.value === data?.gender)?.label },
    {
      id: 3,
      title:
        "میزان سابقه: " +
        work_experience?.find((w) => w.value === data?.work_experience)?.label,
    },
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
