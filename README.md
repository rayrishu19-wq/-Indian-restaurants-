# Premium Restaurant App - HTML/CSS/JS

A beautifully designed, responsive single-page web application for a fine dining restaurant, built using Vanilla HTML, CSS, and internal JavaScript. This project is meant to emphasize raw web platform technologies and strong aesthetic fundamentals.

## 🚀 Learning the Git Workflow

Since your goal is to learn the workflow and push this project to GitHub, follow these exact steps within this directory. This guide assumes you have a GitHub account and Git installed on your absolute environment.

### 1. Stage the files
"Staging" files tells Git that you want to include these current changes in your next commit.
Run this command in the terminal (inside `restaurant-app` folder):
```bash
git add .
```
*(The `.` means "all files" in the current directory).*

### 2. Commit the changes
A "commit" takes a snapshot of your staged files and saves it permanently in your local history.
```bash
git commit -m "Initial commit: Add premium restaurant landing page"
```

### 3. Create a GitHub Repository
1. Go to [github.com](https://github.com) and log in.
2. Click the `+` icon in the top right corner and select **New repository**.
3. Name it `restaurant-app`, leave it Public, and **do NOT check** "Add a README file" (we already made one!).
4. Click **Create repository**.

### 4. Link & Push
Link your local repository to the empty GitHub repository you just created, and push your code!
Copy the commands from your GitHub repo page (under "...or push an existing repository from the command line"), or run:
```bash
git remote add origin https://github.com/YOUR_USERNAME/restaurant-app.git
git branch -M main
git push -u origin main
```
*(Don't forget to replace `YOUR_USERNAME` with your actual GitHub username!)*

---

## 🎨 Features
- **Responsive Layout:** Works beautifully on mobile, tablet, and desktop screens.
- **Glassmorphism:** A modern UI trend used in the reservation form and navbar.
- **Dark Theme:** High contrast, elegant dark mode for a premium "midnight dining" feel.
- **Vanilla JS:** Smooth scrolling, responsive navigation burger menu, and fake reservation processing all built without heavy dependencies.

## 🏃‍♀️ How to run locally
No compilation step `npm install` is needed! Just open the `index.html` file in your favorite web browser or right-click `index.html` and use a VS Code extension like "Live Server".
