import { $mockApi } from "@/shared"

export const cardApi = {
    addItem: async () => {
        const {data} = await $mockApi.patch('users',  )
        return data
    }
}