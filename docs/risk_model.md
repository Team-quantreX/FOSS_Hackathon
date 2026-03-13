## Borrower Financial Inputs:-
1. Monthly Income
2. Monthly Expenses
3. Existing Loan EMI
4. Loan Amount Requested
5. Loan Tenure (months)
6. Credit Score (optional)
7. Alternative Payment Data (if no credit score)

# EMI Calculation:-
EMI = Loan Amount / Loan Tenure
Example:
Loan Amount = ₹60,000
Tenure = 12 months
EMI = 60,000 / 12
Therefore EMI = ₹5,000 per month

# Expense Ratio:-
Expense Ratio = Monthly Expenses / Monthly Income
Example:
Income = ₹40,000
Expenses = ₹16,000
Expense Ratio = 16,000 / 40,000
Therefore Expense Ratio = 0.4 (40%)

# Debt-to-Income Ratio:-
Debt Ratio = Existing EMI / Monthly Income
Example:
Existing EMI = ₹4,000
Income = ₹40,000
Therefore Debt Ratio = 0.1 (10%)

# EMI Affordability:-
EMI Affordability = New EMI / Monthly Income
Example:
New EMI = ₹5,000
Income = ₹40,000
Therefore Affordability = 0.125 (12.5%)

## Risk Scoring Model
The system calculates a borrower risk score based on financial stability.
Total Score = 100 points

# Income Score:-
Income > ₹50,000 → 30 points  
Income ₹25,000 – ₹50,000 → 20 points  
Income < ₹25,000 → 10 points  

# Expense Ratio Score:-
Expense Ratio < 40% → 25 points  
Expense Ratio 40% – 70% → 15 points  
Expense Ratio > 70% → 5 points  

# Debt-to-Income Score:-
Debt Ratio < 20% → 25 points  
Debt Ratio 20% – 40% → 15 points  
Debt Ratio > 40% → 5 points  

# EMI Affordability Score:-
EMI < 20% of income → 20 points  
EMI 20% – 35% → 10 points  
EMI > 35% → 5 points  

# Risk Category:-
75 – 100 → Low Risk  
50 – 74 → Medium Risk  
Below 50 → High Risk

## Alternative Credit Data:-
If the borrower does not have a credit score, the system evaluates financial reliability using alternative payment behavior.

# Alternative Indicators:-
1. Rent payment regularity
2. Electricity bill payments
3. Mobile or internet bill payments
4. Bank deposit consistency
Example Scoring:
Rent paid regularly → 20 points  
Utility bills paid on time → 20 points  
Mobile bills paid on time → 10 points  
Regular bank deposits → 20 points

Therefore Total Alternative Score = 70 points
