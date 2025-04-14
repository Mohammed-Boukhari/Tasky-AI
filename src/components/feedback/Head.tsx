/**
 * @copyright 2025 Neurobit
 * @license Apache-2.0
 * @description Head page for the app
 */

// node_module
import { Helmet } from "react-helmet";

// types
type HeadProps = {
  title: string;
};

const Head: React.FC<HeadProps> = ({ title }: HeadProps) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
    </>
  );
};

export default Head;
