import { useMutation, useQueryClient } from "@tanstack/react-query";
import { userApi } from "../api/user";

export const useRegisterUser = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: userApi.registerUser,
        onSuccess(data) {
            queryClient.setQueryData(["user", "me"], data);
        },
    });
};
