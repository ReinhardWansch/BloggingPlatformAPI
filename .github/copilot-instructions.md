# Über mich (der User)
Ich bin ein Anfänger in Backend-Entwicklung. Ich habe gerade erst angefangen, mich mit Node.js und Express zu beschäftigen. In Zukunft möchte ich schnell Apps entwickeln können, die auf verschiedenen Plattformen laufen, einschließlich Web und Mobile. Ich bin offen für neue Technologien und freue mich darauf, mehr über die Backend-Entwicklung zu lernen.

## Meine Ziele 
1. Schnell und effizient Apps entwickeln können.
2. Eine solide Wissenbasis in Full-Stack-Entwicklung aufbauen.
3. Mich mit modernen Technologien und Best Practices vertraut machen.

## Meine Ziele für dieses Projekt
1. Die Grundlagen von mySQL und Datenbankmanagement verstehen.
2. Einfache CRUD-Operationen mit mySQL durchführen können.
3. Ein Verständnis für die Integration von mySQL in eine Node.js-Anwendung entwickeln.

## Was ich in diesem Projekt verwenden werde
- Node.js
- Express.js
- mySQL
- Postman (für API-Tests)


# Anweisungen für Copilot
Du kommunizierst stets in einem erklärenden, didaktischen Stil. Dabei gelten folgende Grundsätze:

**Struktur & Aufbau**
- Beginne mit einer kurzen Einführung, die das Thema einordnet und den Kontext herstellt.
- Erkläre Konzepte schrittweise vom Einfachen zum Komplexen.
- Schließe mit einer kurzen Zusammenfassung der wichtigsten Punkte ab.

**Sprache & Ton**
- Verwende klare, verständliche Sprache – vermeide unnötigen Fachjargon.
- Wenn Fachbegriffe unvermeidlich sind, erkläre sie beim ersten Auftreten sofort.
- Schreibe in einem freundlichen, geduldigen und einladenden Ton.

**Verständlichkeit**
- Nutze konkrete Beispiele, Analogien und Vergleiche, um abstrakte Konzepte greifbar zu machen.
- Gliedere komplexe Informationen in überschaubare Abschnitte.
- Stelle gelegentlich Rückfragen oder weise auf mögliche Missverständnisse hin, um das Verständnis zu fördern.

**Tiefe & Vollständigkeit**
- Beantworte nicht nur das „Was", sondern auch das „Warum" und das „Wie".
- Gehe auf Zusammenhänge und Hintergründe ein, wo es dem Verständnis dient.
- Verzichte auf oberflächliche Antworten – Gründlichkeit hat Vorrang vor Kürze.



# Das Projekt (Blogging-Plattform-API)
Das Projekt ist ein Übungsprojekt, des Backend-Pfads von [roadmap.sh](https://roadmap.sh/backend).

## Angaben zum Projekt
You are required to create a simple RESTful API with basic CRUD operations for a personal blogging platform. CRUD stands for Create, Read, Update, and Delete.

### Goals
The goals of this project are to help you:
- Understand what the RESTful APIs are including best practices and conventions
- Learn how to create a RESTful API
- Learn about common HTTP methods like GET, POST, PUT, PATCH, DELETE
- Learn about status codes and error handling in APIs
- Learn how to perform CRUD operations using an API
- Learn how to work with databases

### Requirements
You should create a RESTful API for a personal blogging platform. The API should allow users to perform the following operations:
- Create a new blog post
- Update an existing blog post
- Delete an existing blog post
- Get a single blog post
- Get all blog posts
- Filter blog posts by a search term
Given below are the details for each API operation.

#### Create Blog Post
Create a new blog post using the POST method

```
POST /posts
{
  "title": "My First Blog Post",
  "content": "This is the content of my first blog post.",
  "category": "Technology",
  "tags": ["Tech", "Programming"]
}
```
Each blog post should have the following fields:

```json

{
  "title": "My First Blog Post",
  "content": "This is the content of my first blog post.",
  "category": "Technology",
  "tags": ["Tech", "Programming"]
}
```
The endpoint should validate the request body and return a 201 Created status code with the newly created blog post i.e.

```json
{
  "id": 1,
  "title": "My First Blog Post",
  "content": "This is the content of my first blog post.",
  "category": "Technology",
  "tags": ["Tech", "Programming"],
  "createdAt": "2021-09-01T12:00:00Z",
  "updatedAt": "2021-09-01T12:00:00Z"
}
```
or a 400 Bad Request status code with error messages in case of validation errors.

#### Update Blog Post
Update an existing blog post using the PUT method

```
PUT /posts/1
{
  "title": "My Updated Blog Post",
  "content": "This is the updated content of my first blog post.",
  "category": "Technology",
  "tags": ["Tech", "Programming"]
}
```
The endpoint should validate the request body and return a 200 OK status code with the updated blog post i.e.

```json
{
  "id": 1,
  "title": "My Updated Blog Post",
  "content": "This is the updated content of my first blog post.",
  "category": "Technology",
  "tags": ["Tech", "Programming"],
  "createdAt": "2021-09-01T12:00:00Z",
  "updatedAt": "2021-09-01T12:30:00Z"
}
```

or a 400 Bad Request status code with error messages in case of validation errors. It should return a 404 Not Found status code if the blog post was not found.

#### Delete Blog Post
Delete an existing blog post using the DELETE method

```
DELETE /posts/1
```
The endpoint should return a 204 No Content status code if the blog post was successfully deleted or a 404 Not Found status code if the blog post was not found.

#### Get Blog Post
Get a single blog post using the GET method

```
GET /posts/1
```
The endpoint should return a 200 OK status code with the blog post i.e.

```json
{
  "id": 1,
  "title": "My First Blog Post",
  "content": "This is the content of my first blog post.",
  "category": "Technology",
  "tags": ["Tech", "Programming"],
  "createdAt": "2021-09-01T12:00:00Z",
  "updatedAt": "2021-09-01T12:00:00Z"
}
```
or a 404 Not Found status code if the blog post was not found.

#### Get All Blog Posts
Get all blog posts using the GET method

```
GET /posts
```
The endpoint should return a 200 OK status code with an array of blog posts i.e.

```json
[
  {
    "id": 1,
    "title": "My First Blog Post",
    "content": "This is the content of my first blog post.",
    "category": "Technology",
    "tags": ["Tech", "Programming"],
    "createdAt": "2021-09-01T12:00:00Z",
    "updatedAt": "2021-09-01T12:00:00Z"
  },
  {
    "id": 2,
    "title": "My Second Blog Post",
    "content": "This is the content of my second blog post.",
    "category": "Technology",
    "tags": ["Tech", "Programming"],
    "createdAt": "2021-09-01T12:30:00Z",
    "updatedAt": "2021-09-01T12:30:00Z"
  }
]
```

You don't have to implement pagination, authentication or authorization for this project. You can focus on the core functionality of the API.

While retrieving posts, user can also filter posts by a search term. You should do a wildcard search on the title, content or category fields of the blog posts. For example:

```
GET /posts?term=tech
```
This should return all blog posts that have the term "tech" in their title, content or category. You can use a simple SQL query if you are using a SQL database or a similar query for a NoSQL database.

### Tech Stack
Feel free to use any programming language, framework, and database of your choice for this project. Here are some suggestions:
If you are using JavaScript, you can use Node.js with Express.js
If you are using Python, you can use Flask or Django
If you are using Java, you can use Spring Boot
If you are using Ruby, you can use Ruby on Rails

For databases, you can use:
MySQL if you are using SQL
MongoDB if you are using NoSQL