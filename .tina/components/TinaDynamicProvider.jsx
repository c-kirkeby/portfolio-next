import { TinaEditProvider } from "tinacms/dist/edit-state";
import dynamic from "next/dynamic";
const TinaProvider = dynamic(() => import("./TinaProvider"), { ssr: false });

const DynamicTina = ({ children }) => {
  return (
    <>
      <TinaEditProvider editMode={<TinaProvider>{children}</TinaProvider>}>
        {children}
      </TinaEditProvider>
    </>
  );
};

export default DynamicTina;
