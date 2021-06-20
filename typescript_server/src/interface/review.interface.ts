interface Review {
    id: number,
    title: string,
    post: string,
    password: string,
    isPublic: boolean,
    productId: number,
    userId: number
}

export default Review