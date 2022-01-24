import { useEffect } from "react";
import { useRouter } from "next/router";
import { useEditState } from "tinacms/dist/edit-state";

const ExitAdmin = () => {
  const { setEdit } = useEditState();
  const router = useRouter();
  useEffect(() => {
    setEdit(false);
    router.back();
  }, []);
  return <div>Exiting edit mode..</div>;
};

export default ExitAdmin;
