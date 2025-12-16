# Angular Posts Assignment

This project is a simple Angular application built as part of a frontend assignment.  
It demonstrates fetching data from a public API, displaying it in a table, and adding new data using a form.

---

## 🚀 Features

- Fetch posts from a public REST API
- Display posts in a tabular format
- Add a new post using a form (Title & Body)
- Append newly added post to the table on success
- Basic error handling for failed API requests
- Built using Angular Standalone Components (no AppModule)

---

## 🛠️ Tech Stack

- Angular (Standalone Architecture)
- TypeScript
- HTML / CSS
- JSONPlaceholder API

---

## 🔗 Public API Used

- GET Posts:  
  `https://jsonplaceholder.typicode.com/posts`

- POST Post:  
  `https://jsonplaceholder.typicode.com/posts`

Documentation:  
https://jsonplaceholder.typicode.com/

---

## 📂 Project Structure

src/
├── app/
│ ├── services/
│ │ └── post.service.ts
│ ├── app.ts
│ ├── app.html
│ ├── app.css
│ ├── app.config.ts
│ └── app.routes.ts
├── main.ts
├── index.html



---

## ▶️ How to Run the Project Locally

### 1. Install dependencies
```bash
npm install

# 2. Start the development server
ng serve



###3. Open in browser
http://localhost:4200


# Build for Production
ng build