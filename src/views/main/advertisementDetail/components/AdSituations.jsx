function AdSituations({ data }) {
  return (
    <ul className='list-disc text-text-100 leading-10'>
      <li>{data?.advantages_display}</li>
      <li>سن {data?.age} سال</li>
      <li>تحصیلات: {data?.education}</li>
      <li>
        ساعت کاری از {data?.start_time} تا {data?.end_time}
      </li>
      <li>آدرس: {data?.job_location}</li>
    </ul>
  );
}

export default AdSituations;
