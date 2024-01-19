import Container from "./components/Container";
import LeftSide from "./components/LeftSide";
import RightSide from "./components/RightSide";

function Header() {
  return (
    <Container>
      <RightSide />
      <LeftSide />
    </Container>
  );
}

export default Header;
