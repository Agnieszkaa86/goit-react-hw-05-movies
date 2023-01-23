import { TailSpin } from 'react-loader-spinner';
import { SpinnerWrapper } from './Loader.styled';

const Loader = () => {
  return (
    <SpinnerWrapper>
      <TailSpin
  height="80"
  width="80"
  color="#4fa94d"
  ariaLabel="tail-spin-loading"
  radius="1"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
/>
    </SpinnerWrapper>
  );
};

export default Loader;
