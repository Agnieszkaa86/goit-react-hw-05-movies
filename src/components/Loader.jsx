import { Circles } from "react-loader-spinner";
import { SpinnerWrapper } from "./Loader.styled";

const Loader = () => {
  return (
    <SpinnerWrapper>
      <Circles
        height="100"
        width="100"
        color="#3f51b5"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </SpinnerWrapper>
  );
};

export default Loader;