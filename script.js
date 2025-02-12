$(document).ready(function() {
    let expenses = JSON.parse(localStorage.getItem('expenses')) || [];
    let monthlyBudget = parseFloat(localStorage.getItem('monthlyBudget')) || 0;
    let chart = null;

    // Initialize Chart
    function initializeChart() {
        const ctx = document.getElementById('expenseChart').getContext('2d');
        chart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: [],
                datasets: [{
                    data: [],
                    backgroundColor: [
                        '#FF6384',
                        '#36A2EB',
                        '#FFCE56',
                        '#4BC0C0',
                        '#9966FF',
                        '#FF9F40'
                    ]
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'bottom'
                    }
                }
            }
        });
    }

    // Initialize the page
    function init() {
        initializeChart();
        $('#monthlyBudget').val(monthlyBudget);
        updateExpenseList();
        updateSummary();
    }

    // Update Summary
    function updateSummary() {
        const total = expenses.reduce((sum, expense) => sum + parseFloat(expense.amount), 0);
        $('#totalExpenses').text('$' + total.toFixed(2));
        const remaining = monthlyBudget - total;
        $('#remainingBudget').text('$' + remaining.toFixed(2));
        
        // Update chart
        const categoryTotals = {};
        expenses.forEach(expense => {
            categoryTotals[expense.category] = (categoryTotals[expense.category] || 0) + parseFloat(expense.amount);
        });

        chart.data.labels = Object.keys(categoryTotals);
        chart.data.datasets[0].data = Object.values(categoryTotals);
        chart.update();

        // Save to localStorage
        localStorage.setItem('expenses', JSON.stringify(expenses));
    }

    // Add Expense
    $('#expenseForm').on('submit', function(e) {
        e.preventDefault();
        
        const expense = {
            description: $('#description').val(),
            amount: parseFloat($('#amount').val()),
            category: $('#category').val(),
            date: $('#date').val()
        };

        expenses.push(expense);
        updateExpenseList();
        updateSummary();
        this.reset();

        // Show success message
        showNotification('Expense added successfully!', 'success');
    });

    // Set Budget
    $('#setBudget').on('click', function() {
        monthlyBudget = parseFloat($('#monthlyBudget').val()) || 0;
        localStorage.setItem('monthlyBudget', monthlyBudget);
        updateSummary();
        showNotification('Budget updated successfully!', 'success');
    });

    // Update Expense List
    function updateExpenseList() {
        const $list = $('#expenseList');
        $list.empty();
        
        expenses.sort((a, b) => new Date(b.date) - new Date(a.date));
        
        expenses.forEach((expense, index) => {
            $list.append(`
                <tr>
                    <td>${expense.date}</td>
                    <td>${expense.description}</td>
                    <td>${expense.category}</td>
                    <td>$${expense.amount.toFixed(2)}</td>
                    <td>
                        <button class="btn btn-danger btn-sm delete-expense" data-index="${index}">
                            Delete
                        </button>
                    </td>
                </tr>
            `);
        });
    }

    // Delete Expense
    $(document).on('click', '.delete-expense', function() {
        const index = $(this).data('index');
        expenses.splice(index, 1);
        updateExpenseList();
        updateSummary();
        showNotification('Expense deleted successfully!', 'warning');
    });

    // Show notification
    function showNotification(message, type) {
        const notification = $(`
            <div class="alert alert-${type} alert-dismissible fade show position-fixed top-0 end-0 m-3" role="alert">
                ${message}
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        `);
        
        $('body').append(notification);
        setTimeout(() => {
            notification.alert('close');
        }, 3000);
    }

    // Initialize the page
    init();
}); 