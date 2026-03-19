import { useMutation, useQueryClient } from "@tanstack/react-query";
import { userApi } from "../api/user";

export const useAddUserFavourites = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (item: any) => userApi.addFavourite(item),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["favourites"] });
        },
    });
};
