import ActionContainer from "./ActionContainer";
import AdSituations from "./AdSituations";

function AdActions() {
  return (
    <div className='grid grid-cols-2 container mx-auto'>
      <AdSituations />
      <ActionContainer />
    </div>
  );
}

export default AdActions;
