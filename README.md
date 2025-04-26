Todo List with Pagination, Filtering, and Search
This is a React-based Todo List application featuring:

Add, toggle (complete/incomplete), and delete todos

Filter by All, Active, or Completed status

Search todos by label

Pagination support (10 items per page)

Latest added todos appear first (Last In, First Serve)

Features
✨ Add Todos — Add new tasks to your todo list.

✅ Toggle Todos — Mark tasks as complete or active.

🗑️ Delete Todos — Remove unwanted tasks from the list.

🔍 Search — Instantly filter todos by typing keywords.

🎯 Status Filters — View All, Active, or Completed tasks.

📄 Pagination — Navigate through your todos, 10 per page.

🚀 Sorted Latest First — Newly added todos appear at the top of page 1.

Tech Stack
React (Functional Components + Hooks)

Context API for state management (useTodos)

SCSS for component styling

Custom Components like Checkbox

How to Run Locally
Clone the repository

git clone https://github.com/Chintan-G1995/EasyTask.git
cd EasyTask

Install dependencies
npm install

Start the development server
npm run dev
Open http://localhost:5173 (or whichever port is shown) to view it in the browser.

Important Notes
Pagination is dynamic — if you delete a todo and there are fewer todos on the last page, the page adjusts automatically.

Search and filter operations reset the pagination to show results accordingly.

Latest Tasks First — Todos are sorted in descending order based on their id, with the newest shown first.

