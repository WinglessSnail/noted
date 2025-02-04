
const API_URL = process.env.NEXT_PUBLIC_API_URL + "/todo"

export const fetchTodos = async (API_URL) => {
    const res = await axios.get(API_URL)
    return res.data
} 

export const addTodo = async (title : string) => {
    const res = await axios.post(API_URL, {title})
    return res.data
}

export const updateTodo = async (id: string, completed: boolean) => {
    const res = await axios.patch(`${API_URL}/${id}`, {completed})
    return res.data
}
export const deleteTodo = async (id: string) => {
    await axios.delete(`${API_URL}/${id}`);
  };