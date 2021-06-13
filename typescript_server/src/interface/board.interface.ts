interface Board {
    id: number,
    title: string,
    writer: string, // User.name
    post: string,
    createDate: Date,
    updateDate: Date
}

export default Board;