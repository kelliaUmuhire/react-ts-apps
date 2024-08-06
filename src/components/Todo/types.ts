export type TodoType = {
    title: string;
    checked: boolean;
    updateTodo?: (title: string) => void;
    deleteTodo?: (title: string) => void;
}