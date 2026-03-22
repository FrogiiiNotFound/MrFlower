import { useQuery } from "@tanstack/react-query";
import { userApi } from "../api/user";

export const useGetFavourites = () => {
    return useQuery({
        queryKey: ["favourites"],
        queryFn: () => userApi.getFavourites(),
    });
};
