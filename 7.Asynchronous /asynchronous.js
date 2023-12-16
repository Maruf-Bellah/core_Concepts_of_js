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

// const hasMeeting = false;

// const meeting = new Promise((resolve, reject) => {
//   if (!hasMeeting) {
//     const meetingDetails = {
//       name: "Maruf Bellah",
//       location: "Google Meet",
//       time: "10.00 PM",
//     }
//     resolve(meetingDetails)
//   } else {
//     reject(new Error("meeting already scheduled! "))
//   }
// });


// const addToCalender = (meetingDetails) => {
//   return new Promise((resolve, reject) => {
//     const calender = `${meetingDetails.name} has been scheduled on ${meetingDetails.location} at ${meetingDetails.time}`;
//     resolve(calender)
//   })
// }

// const addToCalender = (meetingDetails) => {

//     const calender = `${meetingDetails.name} has been scheduled on ${meetingDetails.location} at ${meetingDetails.time}`;
//     return Promise.resolve(calender);

// };


// meeting
//   .then(addToCalender)
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err.message);
//   });
// console.log('hello bro');
  

const promise1 = Promise.resolve(`Promise 1 resolved`);

const promise2 =  new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(`Promise 2 resolved`)
  });
});


// promise1.then((res) => console.log(res))
// promise2.then((res)=> console.log(res))

// Promise.all([promise1, promise2]).then((res) => {
//   console.log(res);
// }) // all e sob result dekhabe



// Promise.race([promise1, promise2]).then((res) => {
//   console.log(res);
// }); // race e jeta age ashbe takei dekhabe 




// async-await function=============================


function resolveAfter2Seconds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Maruf Bellah Resolve')
    }, 2000)
  });
}


async function asyncCall() {
  console.log('Calling the fucntion');
  const result = await resolveAfter2Seconds();
  console.log(result);
}

asyncCall()