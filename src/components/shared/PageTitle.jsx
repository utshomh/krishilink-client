import { useEffect } from "react";

import { makeTitle } from "../../lib/utils/seo";

const PageTitle = ({ title }) => {
  useEffect(() => {
    document.title = makeTitle(title);
  }, [title]);

  return <></>;
};

export default PageTitle;
