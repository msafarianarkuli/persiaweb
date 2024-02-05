import Container from "./components/Container";
import LeftSide from "./components/LeftSide";
import RightSide from "./components/RightSide";

function Header() {
  return (
    <div className='fixed top-0 z-30 w-full shadow-[0px_0px_9px_-7px_rgba(0,0,0,0.5)]'>
      <Container>
        <RightSide />
        <LeftSide />
      </Container>
    </div>
  );
}

export default Header;
