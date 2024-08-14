import { Watch } from "react-loader-spinner";
import { LoaderContainer } from "./Loader.styled";

export const Loader = () => {
  return (
    <LoaderContainer>
      <Watch
        visible={true}
        height="80"
        width="80"
        radius="48"
        color="rgb(203, 207, 99)"
        ariaLabel="watch-loading"
      />
    </LoaderContainer>
  );
};
