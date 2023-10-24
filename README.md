# toro-backend
Aplicação simulando ambiente da toro investimentos

GET /accounts
return {
    "account": 1029320,
    "checkingAccountAmount": 234.00, // Saldo em conta corrente
    "positions": [
        {
            "symbol": "PETR4",
            "amount": 2,
            "currentPrice": 28.44,
        },
        {
            "symbol": "SANB11",
            "amount": 3,
            "currentPrice": 40.77
        },
    ],
    "consolidated": 413.19 // (234.00 + (28.44 * 2) + (40.77 * 3)
}

POST /accounts
{
    checkingAccountAmount: 0,
}

GET /actives
return [
        {
            "symbol": "PETR4",
            "currentPrice": 28.44,
        }
    ]

POST accounts/{accountId}/actives/{symbol}
data: 
        {
            "symbol": "PETR4",
            "amount": 3,
            "currentPrice": 28.44,
        }
    