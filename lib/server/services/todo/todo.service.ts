import Todo from './todo.model';

export const createTodo = async () => {
	return {};
};

export const getAllTodos = async () => {
	const todos = await Todo.find({});

	return todos;
};
