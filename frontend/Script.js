// ================= REGISTER =================
function registerUser() {
    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    let user = {
        name,
        phone,
        username,
        password,
        riskScore: 0,
        riskLevel: "New"
    };

    localStorage.setItem(username, JSON.stringify(user));

    alert("Registered Successfully!");
}

// ================= LOGIN =================
function loginUser() {
    let username = document.getElementById("loginUsername").value;
    let password = document.getElementById("loginPassword").value;

    let storedUser = JSON.parse(localStorage.getItem(username));

    if (!storedUser || storedUser.password !== password) {
        alert("Username and Password not matched!");
        return;
    }

    localStorage.setItem("currentUser", username);
    window.location.href = "dashboard.html";
}

// ================= DASHBOARD LOAD =================
window.onload = function () {
    let currentUser = localStorage.getItem("currentUser");

    if (!currentUser) return;

    let user = JSON.parse(localStorage.getItem(currentUser));

    document.getElementById("riskScore").innerText = user.riskScore || 0;
    document.getElementById("riskLevel").innerText = user.riskLevel || "New";

    loadCharts();
};

// ================= NAVIGATION =================
function goToLoan() {
    window.location.href = "loan.html";
}

// ================= LOAN CALC =================
function calculateLoan() {
    let income = parseInt(document.getElementById("income").value) || 0;
    let expense = parseInt(document.getElementById("expense").value) || 0;
    let emi = parseInt(document.getElementById("existingEmi").value) || 0;

    let food = parseInt(document.getElementById("food").value) || 0;
    let rent = parseInt(document.getElementById("rent").value) || 0;
    let travel = parseInt(document.getElementById("travel").value) || 0;
    let others = parseInt(document.getElementById("others").value) || 0;

    let disposable = income - expense - emi;

    let score = 0;

    if (disposable > 50000) score = 80;
    else if (disposable > 20000) score = 60;
    else score = 40;

    let riskLevel = "";
    let color = "";

    if (score >= 75) {
        riskLevel = "Low Risk";
        color = "green";
    } else if (score >= 50) {
        riskLevel = "Medium Risk";
        color = "orange";
    } else {
        riskLevel = "High Risk";
        color = "red";
    }

    let loanAmount = disposable * 10;
    let emiEstimate = loanAmount / 12;

    document.getElementById("result").innerHTML = `
        <p>Risk Score: ${score}</p>
        <p style="color:${color}">Risk Level: ${riskLevel}</p>
        <p>Recommended Loan: ₹${loanAmount}</p>
        <p>Estimated EMI: ₹${emiEstimate}</p>
    `;

    // SAVE USER DATA
    let currentUser = localStorage.getItem("currentUser");
    let user = JSON.parse(localStorage.getItem(currentUser));

    user.riskScore = score;
    user.riskLevel = riskLevel;

    localStorage.setItem(currentUser, JSON.stringify(user));

    // SAVE FOR CHART
    localStorage.setItem("income", income);
    localStorage.setItem("expense", expense);
    localStorage.setItem("food", food);
    localStorage.setItem("rent", rent);
    localStorage.setItem("travel", travel);
    localStorage.setItem("others", others);
}

// ================= CHARTS =================
function loadCharts() {
    let income = parseInt(localStorage.getItem("income")) || 0;
    let expense = parseInt(localStorage.getItem("expense")) || 0;

    let food = parseInt(localStorage.getItem("food")) || 0;
    let rent = parseInt(localStorage.getItem("rent")) || 0;
    let travel = parseInt(localStorage.getItem("travel")) || 0;
    let others = parseInt(localStorage.getItem("others")) || 0;

    // BAR CHART
    new Chart(document.getElementById("barChart"), {
        type: "bar",
        data: {
            labels: ["Income", "Expense"],
            datasets: [{
                label: "Finance",
                data: [income, expense],
                backgroundColor: ["green", "red"]
            }]
        }
    });

    // PIE CHART
    new Chart(document.getElementById("pieChart"), {
        type: "pie",
        data: {
            labels: ["Food", "Rent", "Travel", "Others"],
            datasets: [{
                data: [food, rent, travel, others],
                backgroundColor: ["blue", "orange", "green", "purple"]
            }]
        }
    });
}
