const BASE_API_URL = process.env.NEXT_PUBLIC_API_URL;

export const apiUrls = {
    students: {
        all: `${BASE_API_URL}/student/`,
        byId: (id: number) => `${BASE_API_URL}/student/${id}`,
    },
    recomm: {
        content: (userId:number) => `${BASE_API_URL}/recomm/content/${userId}`,
        activity: (userId: number, contentId: number) => `${BASE_API_URL}/recomm/activity/${userId}/${contentId}`,	
    }
};