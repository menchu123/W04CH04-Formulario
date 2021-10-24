import { useContext } from "react";
import Context from "../Context/Context";

const Pagination = () => {
  const { next, back, page } = useContext(Context);
  return (
    <section className="navigation d-flex justify-content-between">
      {page > 0 ? (
        <button className="btn btn-primary mt-4" onClick={back}>
          Go back
        </button>
      ) : null}

      {page < 2 ? (
        <button className="btn btn-primary mt-4" onClick={next}>
          Next
        </button>
      ) : null}
    </section>
  );
};

export default Pagination;
