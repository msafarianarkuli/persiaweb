import { adDetail } from "@/utils/fakeData";
import DetailCard from "./DetailCard";

function CardContainer({ className }) {
  return (
    <div className={`flex flex-wrap gap-2 justify-around ${className}`}>
      {adDetail.map((item) => (
        <DetailCard key={item.id} title={item.title} />
      ))}
    </div>
  );
}

export default CardContainer;
