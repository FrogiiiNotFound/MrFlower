import { useMutation } from "@tanstack/react-query";
import { userApi } from "../api/user";
import { useUser } from "./useUserStore";

export const useLoginUser = () => {
    const { setAccessToken } = useUser();
    const { setIsAuth } = useUser();
    
    return useMutation({
        mutationFn: userApi.loginUser,
        onSuccess: (data) => {
            setAccessToken(data.accessToken);
            setIsAuth();
        },
    });
};
