const input1=document.querySelector(".input1");
const input2=document.querySelector(".input2");
const input3=document.querySelector(".input3");
const inputs=document.querySelector(".inputs");
const buttons=document.querySelector(".buttons");

const plus=document.querySelector(".plus");
const minus=document.querySelector(".minus");
const multip=document.querySelector(".multip");
const division=document.querySelector(".division");

plus.addEventListener("click",()=>{

 const n1=Number(input1.value);
 const n2=Number(input2.value);

 const result=n1+n2;
 input3.value=result;
 console.log(result);
 input1.value="";
 input2.value="";

});

minus.addEventListener("click",()=>{

    const n1=Number(input1.value);
    const n2=Number(input2.value);
   
    const result=n1-n2;
    input3.value=result;
    console.log(result)
    input1.value="";
    input2.value="";
   
   });

   multip.addEventListener("click",()=>{

    const n1=Number(input1.value);
    const n2=Number(input2.value);
   
    const result=n1*n2;
    input3.value=result;
    console.log(result)
    input1.value="";
    input2.value="";
   
   });

   division.addEventListener("click",()=>{

    const n1=Number(input1.value);
    const n2=Number(input2.value);
   
    const result=n1/n2;
    input3.value=result;
    console.log(result)
    input1.value="";
    input2.value="";
   
   });
