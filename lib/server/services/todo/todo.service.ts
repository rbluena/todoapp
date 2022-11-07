import Todo from './todo.model';

export const createTodo = async (data) => {
	return {};
};

export const getAllTodos = async (query) => {
	const todos = Todo.find({});

	return todos;
};
