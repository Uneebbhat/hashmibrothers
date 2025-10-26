import useFormHandler from "@/src/hooks/useFormHandler";

import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { SignupDataProps } from "../types/types";
import { HandleOnSubmit } from "@/src/types/FormTypes";

const useSignup = () => {
  const router = useRouter();
  const { loading, formData, setLoading, setFormData, handleOnChange } =
    useFormHandler<SignupDataProps>({
      fullName: "",
      email: "",
      password: "",
    });

  const handleOnSubmit = async (e: HandleOnSubmit) => {
    e.preventDefault();
    setLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log(formData);
      setFormData({
        fullName: "",
        email: "",
        password: "",
      });

      toast.success("Account created successfully");

      router.push("/");
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.log(error.message);
        toast.error(error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return { loading, formData, handleOnChange, handleOnSubmit };
};

export default useSignup;
