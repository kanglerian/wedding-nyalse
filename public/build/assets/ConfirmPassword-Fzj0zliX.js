import{W as d,j as s,Y as p}from"./app-DVOkZrBH.js";import{G as l}from"./GuestLayout-Ctks6MSq.js";import{T as c,I as u}from"./TextInput-8xNMeqrp.js";import{I as f}from"./InputLabel-CPnAwuvY.js";import{P as x}from"./PrimaryButton-D-rXOP1H.js";import"./ApplicationLogo-CbAmzDEr.js";function N(){const{data:a,setData:e,post:o,processing:t,errors:i,reset:m}=d({password:""}),n=r=>{r.preventDefault(),o(route("password.confirm"),{onFinish:()=>m("password")})};return s.jsxs(l,{children:[s.jsx(p,{title:"Confirm Password"}),s.jsx("div",{className:"mb-4 text-sm text-gray-600",children:"This is a secure area of the application. Please confirm your password before continuing."}),s.jsxs("form",{onSubmit:n,children:[s.jsxs("div",{className:"mt-4",children:[s.jsx(f,{htmlFor:"password",value:"Password"}),s.jsx(c,{id:"password",type:"password",name:"password",value:a.password,className:"mt-1 block w-full",isFocused:!0,onChange:r=>e("password",r.target.value)}),s.jsx(u,{message:i.password,className:"mt-2"})]}),s.jsx("div",{className:"flex items-center justify-end mt-4",children:s.jsx(x,{className:"ms-4",disabled:t,children:"Confirm"})})]})]})}export{N as default};
