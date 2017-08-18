let result =
{
  "data": [
    {
    "DT_RowId": "599352b249baae3d64ce412e",
    "date": "2017/08/15",
    "amount": "400",
    "category": "Salary",
    "note": "blah"
    },
    {
    "DT_RowId": "59936a9e493c9a47375f7af8",
    "date": "2017/08/15",
    "amount": "-50",
    "category": "Food/Groceries",
    "note": ""
    },
    {
    "DT_RowId": "59936ab3493c9a47375f7af9",
    "date": "2017/08/15",
    "amount": "-30",
    "category": "Food/Groceries",
    "note": ""
    },
    {
    "DT_RowId": "59936abc493c9a47375f7afa",
    "date": "2017/08/15",
    "amount": "-40",
    "category": "Car",
    "note": ""
    },
    {
    "DT_RowId": "599470c49c3c255fb01cabcc",
    "date": "2017/09/01",
    "amount": "500",
    "category": "Interest",
    "note": ""
    },
    {
    "DT_RowId": "599470d79c3c255fb01cabcd",
    "date": "2017/09/02",
    "amount": "-50",
    "category": "Eating Out & Coffee",
    "note": ""
    },
    {
    "DT_RowId": "599470eb9c3c255fb01cabce",
    "date": "2017/09/08",
    "amount": "-20",
    "category": "Medical",
    "note": ""
    },
    {
    "DT_RowId": "599470eb9c3c255fb01cabce",
    "date": "2017/10/08",
    "amount": "100",
    "category": "Bonus",
    "note": ""
    },
    {
    "DT_RowId": "599470eb9c3c255fb01cabce",
    "date": "2017/10/08",
    "amount": "-20",
    "category": "Medical",
    "note": ""
    }
  ]
}

const data = result['data']

function getTotalByMonth(data) {

  // Sets the current month to the first month available
  let currentMonth = data[0]['date'].split('/', 2).join('/')
  let runningTotal = 0
  let monthlyTotal = []

  data.forEach(( element, index ) => {

    let month = element['date'].split('/', 2).join('/')
    let category = element['category']

    // If the element is not the last one in the array:
    if ( index != data.length-1 ) {

      // If the current element has the same month as the last element:
      if ( month == currentMonth ) {
        runningTotal += Number(element['amount'])

      // If the element has a new month from the last one:
      } else {
        let monthData = { date   : currentMonth,
                          amount : runningTotal }

        monthlyTotal.push(monthData)

        runningTotal = 0
        runningTotal += Number(element['amount'])

        currentMonth = month
      }

    // If the element is the last one in the array:
    } else {
      let monthData = { date   : currentMonth,
                        amount : runningTotal }

      monthlyTotal.push(monthData)
    }
  })

  return monthlyTotal

}
console.log(getTotalByMonth(data));