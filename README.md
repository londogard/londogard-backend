# londogard-backend
The backend for londogard.com, to be run on a Raspberry Pi 3B.

## Setup
`mkdir texts && 

## Rest API

**`POST /smry`**   
Input: `{"text": string}`  
Output: `{"result": string}`

**`POST /billsplitter`**  
Input: `{"payments": [PostPayment]}` where `PostPayment` is `{"person": string, "amount": double}`  
Output: `[PersonPayment]` where `PersonPayment` is `{"payer": string, "owed": string, "amount": double}` 

### Libraries used:
Smile: http://haifengl.github.io/smile/  
KTOR: https://ktor.io/  
SQLDelight: https://github.com/cashapp/sqldelight  
Kotlinx: https://ktor.io/kotlinx/ (includes serialization and so on)  
Koin: https://insert-koin.io/  
