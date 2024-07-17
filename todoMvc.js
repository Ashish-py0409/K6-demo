import http from 'k6/http';
import { check, group, sleep } from 'k6';
import { parseHTML } from 'k6/html';

export const options = {
    stages: [
        { duration: '10s', target: 1 }
    ],
};

export default function () {
    const BASE_URL = 'https://demo.playwright.dev/todomvc/#/';

    group('Open TodoMVC application', () => {
        const response = http.get(BASE_URL);
        check(response, { 'status was 200': (r) => r.status === 200 });
        const doc = parseHTML(response.body);
        check(doc, { 'page contains input field': (d) => d.find('input.new-todo').size() === 1 });
    });

    group('Add new todo item', () => {
        const addTodoResponse = http.post(
            BASE_URL,
            JSON.stringify({ title: 'New Todo', completed: false }),
            {
                headers: { 'Content-Type': 'application/json' },
            }
        );
        check(addTodoResponse, { 'status was 200': (r) => r.status === 200 });
    });

    group('Mark todo item as completed', () => {
        const todosResponse = http.get(BASE_URL);
        const doc = parseHTML(todosResponse.body);
        const todoItems = doc.find('ul.todo-list li');
        const firstTodoId = todoItems.first().attr('data-id');

        const toggleResponse = http.put(
            `${BASE_URL}/${firstTodoId}`,
            JSON.stringify({ completed: true }),
            {
                headers: { 'Content-Type': 'application/json' },
            }
        );
        check(toggleResponse, { 'status was 200': (r) => r.status === 200 });
    });

    group('Delete todo item', () => {
        const todosResponse = http.get(BASE_URL);
        const doc = parseHTML(todosResponse.body);
        const todoItems = doc.find('ul.todo-list li');
        const firstTodoId = todoItems.first().attr('data-id');

        const deleteResponse = http.del(`${BASE_URL}/${firstTodoId}`);
        check(deleteResponse, { 'status was 200': (r) => r.status === 200 });
    });

    sleep(1);
}