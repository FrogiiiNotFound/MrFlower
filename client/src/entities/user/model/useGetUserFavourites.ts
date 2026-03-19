import { useQuery } from "@tanstack/react-query";
import { userApi } from "../api/user";

export const useGetUserFavourites = () => {
    return useQuery({
        queryKey: ["favourites"],
        queryFn: () => userApi.getFavourites(),
    });
};
