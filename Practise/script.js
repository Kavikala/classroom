/* let originalPrice = 100; 
let discountPercentage=20;
const calculatePrice= (price, percentage)=> originalPrice - (originalPrice * (discountPercentage/100));
totalPrice= calculatePrice(originalPrice, discountPercentage);
console.log(`The item originally cost is ${originalPrice} but with a discount ${discountPercentage}% it now cost ${totalPrice}`);
 */

/* const student = {
    name: "kavi",
    age: 17,
    skills: ["cs","maths"],
    address: {city: "soman", pincode:641668}
};

const{name, address:{city}}= student;
const [first, second]= student.skills;
console.log(`Hi, I am ${name} from ${city} and good at ${first} and ${second}`)
 */


/* const user={ name: 'kavi', project: {pcompleted: 5, onGoing: 5}};
const status = (employee)=> { const result= employee?.project?.completed || 0;
    return result>10?"Senior":"Junior"
};
console.log(status(user));
 */

/* const employees = [{name: "Kavi", isActive: true },{ name: "Shalom", isActive: false },{ name: "Syed", isActive: true }];
const activeList= employees.filter(user=> user.isActive).map(user=>user.name);
console.log(activeList); */

/* const tasks=[project1={name:'solvay', cost:121000}, project2={name:"kone",cost:980000}];
const totalCost=tasks.reduce((acc ,cur)=>acc + cur.cost,0);
console.log(totalCost); */

/* function startLoading(){
    console.log("Loading Started");
    const timer= setInterval(()=>{console.log("Still Loading")},1000);


setTimeout(() => {console.log("Data fetched successfully") 
    clearInterval(timer);
    
}, 3000);


}
startLoading(); */


/* function checkApproval(){
    let approval = true;
    return new Promise((resolve,reject)=>{
        if(approval){
            resolve("Project is approved for the Coimbatore DC!");
        }
        else{
            reject("Project request denied.");
       }
    });
}

 async function processProject(){
    try{
      const status= await checkApproval();
      console.log(status)
    }
    catch(error){
        console.log("Error: " +error)

    }

}
processProject(); */

/* function head(){
    let count =0;
 return {
    increment:function(){
        let a= ++count;
        console.log(a);
    },
    getCount:function(){
        return count;
    }
 }
}

let counting =head();
counting.increment();
console.log(counting.getCount());
 */

/* const project = {
    name: "ServiceNow Migration",
    team: ["Kavi", "Syed"],
    printDetails: function() { 
        debugger;// <--- THIS is the Parent Scope
        

        this.team.forEach((member) => { // <--- Arrow Function
            // It looks "up" to printDetails to find what 'this' means
            console.log(`${member} is working on ${this.name}`);
        });
    }
};


project.printDetails(); */


/* function a(){
    var a=7;
    function b(){
        console.log(a);
    }
        a=100;
    return b;
}
var c=a();
c(); */


/* function f(){
    let b=20;
    console.log(b);
}


f();
console.log(b); */

/* function x() {
  for (var i = 1; i <= 5; i++) {
    setTimeout(function() {
      console.log(i);
    }, i * 1000);
  }
}
x();
 */
/* for (var i = 1; i <= 5; i++) {
  function close(x) {
    setTimeout(function() {
      console.log(x);
    }, x * 1000);
  }
  close(i); // Passing 'i' creates a new local copy 'x' for every call
}
 */

 /* const incidents = [
    { incidentId: "INC001", severity: "Critical", isActive: true, owner: "Kaviya" },
    { incidentId: "INC002", severity: "Low", isActive: true, owner: "Syed" },
    { incidentId: "INC003", severity: "Critical", isActive: false, owner: "Shalom" },
    { incidentId: "INC004", severity: "Critical", isActive: true, owner: null },
    { incidentId: "INC005", severity: "Critical", isActive: true }
];

const incDetails=incidents.filter(incident=> incident.severity==='Critical'&& incident.isActive===true)
.map(incident=>incident.incidentId + " - " + incident.owner).toString();
console.log(incDetails);
 */
/* const incidents = [
    { incidentId: "INC001", severity: "Critical", isActive: true, owner: "Kaviya" },
    { incidentId: "INC002", severity: "Low", isActive: true, owner: "Syed" },
    { incidentId: "INC003", severity: "Critical", isActive: false, owner: "Shalom" },
    { incidentId: "INC004", severity: "Critical", isActive: true, owner: null },
    { incidentId: "INC005", severity: "Critical", isActive: true }
];
const incDetails = incidents
    .filter(inc => inc.severity === 'Critical' && inc.isActive)
    .map(inc => `${inc.incidentId} - Assigned to: ${inc.owner ?? "Unassigned"}`);

console.log(incDetails); */

/* const userProfile = {
    name: "Kaviya",
    age: 26,
    city: "Coimbatore",
    role: "Developer",
    lastLogin: "2026-04-18",
    email: "kaviya@infosys.com"
}; */

/* const{name, email,...rest}=userProfile;

const updatedProfile={...name,...email,...rest,role="Senior Developer",isCertified=true}
console.log(updatedProfile); */

// 1. Extracting with 'Rest'
/* const { name, email, ...preferences } = userProfile;

// 2. Updating with 'Spread' (Immutability)
const updatedProfile = { 
    ...userProfile, 
    role: "Senior Developer", 
    isCertified: true 
};

console.log(name, email);
console.log(preferences);
console.log(updatedProfile); */

/* 
let isServerUp =true;

function fetchEmployeData(){
    return new Promise((resolve,reject)=>{
        setTimeout((()=> {if(isServerUp){
            resolve({ id: 1, name: "Kaviya"});
        }
        else{
            reject("Server Error")
        }}),2000);
        })
    }

    async function test(){
    try{
        const result = await fetchEmployeData();
    console.log(result);
    }
    catch(err){
        console.log("Error occured : "+ err)
    }
}

    test(); */

/*      function createIdGenerator(){
        let lastId=0;
         function newID(){
            lastId++;
            return lastId;
         }
        return newID;
     }

    let result= createIdGenerator();
    console.log(result());
    console.log(result());
    console.log(result()); */

    






    
    











