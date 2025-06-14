# 💸 Advanced Expense Tracker

A modern, responsive expense tracking application built with HTML, Tailwind CSS, Bootstrap, and jQuery. It features an intuitive interface with real-time updates, interactive charts, and a clean design, making it easy to manage your finances. Created and maintained by [Utkarsh Dubey](https://github.com/iuttkarshh0409).


## 📑 Table of Contents
- [About the Project](#about-the-project)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## 📖 About the Project
The **Advanced Expense Tracker** is a web-based application designed to help users track and manage their expenses efficiently. With a sleek interface powered by glassmorphism effects and animated backgrounds, it offers a seamless experience for recording expenses, setting budgets, and visualizing spending patterns. Whether you're managing daily expenses or planning a monthly budget, this tool provides a practical and visually appealing solution.

## 🚀 Features
- 💰 **Track Expenses**: Add expenses with detailed categorization (e.g., food, transportation, utilities).
- 📊 **Visual Expense Distribution**: Interactive doughnut chart to visualize spending by category using Chart.js.
- 💼 **Monthly Budget Management**: Set a monthly budget and track remaining funds in real-time.
- 🎨 **Modern UI**: Glassmorphism effects, animated backgrounds, and a responsive design.
- 📱 **Fully Responsive**: Works seamlessly on both desktop and mobile devices.
- ⚡ **Real-Time Updates**: Instantly updates totals, remaining budget, and charts as expenses are added or deleted.
- 🔔 **Interactive Notifications**: Alerts for actions like adding, deleting expenses, or updating the budget.
- 📅 **Date-Wise Tracking**: Record expenses with dates for better organization.
- 🗑️ **Easy Deletion**: Delete expenses directly from the recent expenses table.
- 💾 **Local Storage**: Persists expense data in the browser using the Local Storage API.

## 🛠️ Technologies Used
- 🌐 **HTML5**: Structure of the web application.
- 🎨 **CSS3**: Styling with Tailwind CSS, Bootstrap, and custom styles for animations and glassmorphism effects.
- ⚙️ **JavaScript**: Interactivity and logic using jQuery.
- 📈 **Chart.js**: For rendering the interactive expense distribution chart.
- 💾 **Local Storage API**: For persisting expense data in the browser.

## 🔧 Installation
Follow these steps to set up the Expense Tracker on your local machine:

### Prerequisites
- A modern web browser (e.g., Chrome, Firefox, Edge).
- A text editor (e.g., VS Code) for viewing or modifying the code.
- Basic understanding of HTML, CSS, and JavaScript.

### Steps
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/iuttkarshh0409/ExpenseTracker.git
   cd ExpenseTracker
   ```

2. **Open the Application**:
   - Since this is a web-based application with no server-side dependencies, you can simply open `index.html` in a web browser:
     - Double-click `index.html` to open it in your default browser, or
     - Right-click `index.html`, select "Open with," and choose your preferred browser.
   - Alternatively, if you have a local development server (e.g., VS Code’s Live Server extension), you can use it for a better development experience:
     ```bash
     # Example using VS Code Live Server
     code .
     # Then use the "Go Live" button in VS Code
     ```

3. **No Additional Dependencies**:
   - The project uses CDN links for Tailwind CSS, Bootstrap, jQuery, and Chart.js, so no additional installations are required.
   - Ensure you have an active internet connection to load these external resources.

## ▶️ Usage
Once the application is running in your browser, you can start tracking your expenses:

1. **Add an Expense**:
   - Fill out the "Add New Expense" form with the description, amount, category, and date.
   - Click the "Add Expense" button to record the expense.
   - A notification will confirm the expense has been added.

2. **Set a Monthly Budget**:
   - Enter your monthly budget in the "Budget Settings" section.
   - Click the "Set Budget" button to save it.
   - The remaining budget will update automatically as expenses are added or deleted.

3. **View Expenses**:
   - Check the "Recent Expenses" table to see a list of all expenses, sorted by date.
   - Use the "Delete" button to remove an expense if needed.

4. **Analyze Spending**:
   - The "Expense Distribution" chart shows a breakdown of your expenses by category.
   - The "Total Expenses" and "Remaining Budget" cards provide a quick summary of your spending.

**Example**:
- Add an expense: Description: "Lunch", Amount: $15, Category: "Food", Date: "2025-06-14".
- Set a budget: $500 for the month.
- View the chart: See how much you’ve spent on "Food" compared to other categories.

## 🗂️ Project Structure
```
ExpenseTracker/
│
├── 📜 index.html              # Main HTML file with the application structure
├── 🎨 styles.css              # Custom CSS for styling, animations, and glassmorphism effects
├── ⚙️ script.js               # JavaScript logic for interactivity, data management, and chart rendering
├── 🖼️ preview.png             # Preview image of the application
└── 📜 README.md               # Project documentation
```

## 🤝 Contributing
Contributions are welcome! If you’d like to add new features, improve the design, or fix issues, please follow these steps:

1. 🍴 Fork the repository.
2. 🌿 Create a new branch (`git checkout -b feature/your-feature`).
3. ✍️ Make your changes and commit them (`git commit -m "Add your feature"`).
4. 📤 Push to the branch (`git push origin feature/your-feature`).
5. 📜 Open a pull request with a clear description of your changes.

Please ensure your code is well-documented and follows best practices for HTML, CSS, and JavaScript (e.g., W3C standards for HTML/CSS, Airbnb JavaScript style guide).

## 📜 License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details. If no `LICENSE` file exists, consider adding one to clarify usage rights.

## 📬 Contact
For questions or suggestions, feel free to reach out:
- 🖥️ GitHub: [iuttkarshh0409](https://github.com/iuttkarshh0409)
- ✉️ Email: [dubeyutkarsh101@gmail.com] 

Thank you for exploring **Advanced Expense Tracker**! Happy tracking! 🎉