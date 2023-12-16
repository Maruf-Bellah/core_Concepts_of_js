// Synchronous============================

// const processOrder = () => {
//   console.log(`processing order for customer 1`);

//   var currentTime = new Date().getTime();
//   while (currentTime + 3000 >= new Date().getTime());
//   console.log(`order processed for customer 1`);
// };

// console.log(`take order for customer 1`);
// processOrder();
// console.log(`completed order for customer 1`);

// Asynchronous============================

// const processOrder1 = () => {
//   console.log(`processing order for customer 1`);

//   setTimeout(() => {
//     console.log(`order processed for customer 1`);
//   }, 3000);
// };

// console.log(`take order for customer 1`);
// processOrder1();
// console.log(`completed order for customer 1`);


// CallBack function ==============================

// const takeOrder = (customer, CallBack) => {
//   console.log(`take order for ${customer}`);
//   CallBack(customer)
// };

// const processOrder = (customer, CallBack) => {
//   console.log(`processing order for ${customer}`);

//   setTimeout(() => {
//     console.log(`cooking completed`);
//     console.log(`order processed for ${customer}`);
//     CallBack(customer)
//   }, 3000);
// };

// const completeOrder = (customer) => {
//   console.log(`completed order for ${customer}`);
// };

// takeOrder('maruf bellah', (customer) => {
//   processOrder(customer, (customer) => {
//     completeOrder(customer)
//   })
  
// })

// Promise ====================================

const hasMeeting = true;

const meeting = new Promise((resolve, reject) => {
  if (!hasMeeting) {
    const meetingDetails = {
      name: "Maruf Bellah",
      location: "Google Meet",
      time: "10.00 PM",
    }
    resolve(meetingDetails)
  } else {
    reject(new Error("meeting already scheduled! "))
  }
});

meeting
  .then((res) => {
  console.log(res);
  })
  .catch((err) => {
    console.log(err.message);
  })