import{q as $,r as a,W as P,j as e,Y as _,a as z}from"./app-DWDy5UIg.js";import{A as Y}from"./AuthenticatedLayout-DjaJiAKQ.js";import"./ApplicationLogo-BzSwCSq7.js";import"./transition-BXGWCyG3.js";function B({auth:y}){const{users:n,flash:h}=$().props,[l,x]=a.useState(!1),[j,m]=a.useState(!1),[N,u]=a.useState(!1),[w,c]=a.useState(!!h.message),v=a.useRef(),k=a.useRef(),C=a.useRef(),{post:S,patch:f,delete:E,processing:g,reset:d,recentlySuccessful:b,errors:r,data:i,setData:o}=P({id:"",name:"",email:""}),A=s=>{s.preventDefault();const t=l?S:f,R=l?route("user.store"):route("user.update",i.id);t(R,{preserveScroll:!0,onSuccess:()=>{c(!0),x(!1),m(!1),d()},onError:U=>{console.log(U)}})},D=s=>{o({id:s.id,name:s.name,email:s.email}),m(!0)},p=()=>{d(),x(!1),m(!1),u(!1)},q=()=>{c(!1)},F=s=>{o({id:s.id,name:s.name,email:s.email}),u(!0)},I=s=>{E(route("user.destroy",s),{onSuccess:()=>{c(!0),u(!1)},onError:t=>{console.log(t)},onFinish:()=>d()})},M=s=>{f(route("user.status",s),{onSuccess:()=>{c(!0)},onError:t=>{console.log(t)},onFinish:()=>d()})};return a.useEffect(()=>{b&&console.log("Successfully!")},[b]),e.jsxs(Y,{user:y.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight text-center md:text-left",children:"Users"}),children:[e.jsx(_,{title:"Users"}),e.jsx("div",{className:"py-12",children:e.jsxs("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-3",children:[e.jsx("div",{className:"px-5",children:w&&e.jsxs("div",{className:"flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-2xl shadow-sm",role:"alert",children:[e.jsx("div",{className:"inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-emerald-500 bg-emerald-100 rounded-xl",children:e.jsx("i",{className:"fa-solid fa-check"})}),e.jsx("div",{className:"ms-3 text-sm font-normal",children:h.message}),e.jsx("button",{onClick:q,type:"button",className:"ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-xl focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8",children:e.jsx("i",{className:"fa-solid fa-xmark"})})]})}),e.jsx("header",{className:"px-5",children:e.jsxs("button",{type:"button",onClick:()=>x(!0),className:"inline-block text-white bg-sky-500 hover:bg-sky-600 transition-all ease-in-out font-medium rounded-xl text-sm px-5 py-2.5 space-x-2",children:[e.jsx("i",{className:"fa-solid fa-plus"}),e.jsx("span",{children:"New user"})]})}),e.jsxs("div",{className:"bg-white shadow-sm sm:rounded-3xl p-8",children:[e.jsx("div",{className:"relative overflow-x-auto",children:e.jsxs("table",{className:"w-full text-sm text-left rtl:text-right text-gray-500",children:[e.jsx("thead",{className:"text-xs text-gray-700 uppercase bg-gray-50",children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",className:"px-6 py-4 rounded-tl-xl",children:"No."}),e.jsx("th",{scope:"col",className:"px-6 py-4",children:"Name"}),e.jsx("th",{scope:"col",className:"px-6 py-4",children:"Email"}),e.jsx("th",{scope:"col",className:"px-6 py-4",children:"Role"}),e.jsx("th",{scope:"col",className:"px-6 py-4 rounded-tr-xl",children:"Action"})]})}),e.jsx("tbody",{children:n.data.length>0?n.data.map((s,t)=>e.jsxs("tr",{className:"bg-white border-b",children:[e.jsx("th",{scope:"row",className:"px-6 py-4 font-medium text-gray-900 whitespace-nowrap",children:(n.current_page-1)*n.per_page+t+1}),e.jsx("td",{className:"px-6 py-4",children:s.name}),e.jsx("td",{className:"px-6 py-4",children:s.email}),e.jsx("td",{className:"px-6 py-4",children:s.role}),e.jsxs("td",{className:"px-6 py-4 flex justify-start gap-1",children:[e.jsx("button",{onClick:()=>M(s.id),type:"button",className:`text-white bg-${s.status?"emerald":"red"}-500 hover:bg-${s.status?"emerald":"red"}-600 transition-all ease-in-out font-medium rounded-xl text-sm px-3 py-1.5 text-center`,children:s.status?e.jsx("i",{className:"fa-solid fa-toggle-on"}):e.jsx("i",{className:"fa-solid fa-toggle-off"})}),e.jsx("button",{onClick:()=>D(s),type:"button",className:"text-white bg-amber-500 hover:bg-amber-600 transition-all ease-in-out font-medium rounded-xl text-sm px-3 py-1.5 text-center",children:e.jsx("i",{className:"fa-solid fa-pen-to-square"})}),e.jsx("button",{disabled:g,onClick:()=>F(s),type:"button",className:"text-white bg-red-500 hover:bg-red-600 transition-all ease-in-out font-medium rounded-xl text-sm px-3 py-1.5 text-center",children:e.jsx("i",{className:"fa-solid fa-trash-can"})})]})]},s.id)):e.jsx("tr",{className:"bg-white border-b",children:e.jsx("td",{colSpan:"3",className:"px-6 py-4 text-center",children:"Data not found."})})})]})}),e.jsx("div",{className:"pt-8 pb-2",children:n.links.map((s,t)=>e.jsx(z,{href:s.url||"#",className:`mr-2 px-4 py-2 text-sm rounded-xl transition-all ease-in-out
                                        ${s.active?"bg-sky-500 hover:bg-sky-600 text-white":"bg-gray-200 hover:bg-gray-300 text-gray-700"}
                                        ${s.label.includes("Previous")?"rounded-xl text-sm":""}
                                        ${s.label.includes("Next")?"rounded-xl text-sm":""}`,dangerouslySetInnerHTML:{__html:s.label}},t))})]})]})}),(l||j)&&e.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-50",children:e.jsx("div",{className:"relative p-4 w-full max-w-md",children:e.jsxs("div",{className:"relative bg-white rounded-2xl",children:[e.jsxs("div",{className:"flex items-center justify-between px-6 py-4 md:p-5 border-b rounded-t",children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-900",children:l?"Create New user":"Edit user"}),e.jsx("button",{type:"button",onClick:p,className:"text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-xl transition-all ease-in-out text-sm w-8 h-8 ms-auto inline-flex justify-center items-center",children:e.jsx("i",{className:"fa-solid fa-xmark"})})]}),e.jsxs("form",{onSubmit:A,className:"px-6 py-4",children:[e.jsxs("div",{className:"grid gap-4 mb-4 grid-cols-2",children:[e.jsxs("div",{className:"col-span-2",children:[e.jsx("label",{htmlFor:"name",className:"block mb-2 text-sm font-medium text-gray-900",children:"Name"}),e.jsx("input",{type:"text",ref:v,value:i.name,onChange:s=>o("name",s.target.value),name:"name",id:"name",className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 px-3",placeholder:"User's name",required:!0}),r.name&&e.jsx("p",{className:"text-xs text-red-600 mt-2",children:r.name})]}),e.jsxs("div",{className:"col-span-2",children:[e.jsx("label",{htmlFor:"email",className:"block mb-2 text-sm font-medium text-gray-900",children:"Email"}),e.jsx("input",{type:"email",ref:k,value:i.email,onChange:s=>o("email",s.target.value),name:"email",id:"email",className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 px-3",placeholder:"Email",required:!0}),r.email&&e.jsx("p",{className:"text-xs text-red-600 mt-2",children:r.email})]}),l&&e.jsxs("div",{className:"col-span-2",children:[e.jsx("label",{htmlFor:"password",className:"block mb-2 text-sm font-medium text-gray-900",children:"Password"}),e.jsx("input",{type:"password",ref:C,value:i.password,onChange:s=>o("password",s.target.value),name:"password",id:"password",className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 px-3",placeholder:"Password",required:!0}),r.password&&e.jsx("p",{className:"text-xs text-red-600 mt-2",children:r.password})]})]}),e.jsxs("button",{disabled:g,type:"submit",className:"text-white inline-flex items-center bg-sky-500 hover:bg-sky-600 font-medium rounded-xl text-sm px-5 py-2.5 text-center space-x-1.5",children:[e.jsx("i",{className:"fa-solid fa-save"}),e.jsx("span",{children:l?"Add new user":"Update user"})]})]})]})})}),N&&e.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-50",children:e.jsx("div",{className:"relative p-4 w-full max-w-md max-h-full",children:e.jsxs("div",{className:"relative bg-white rounded-2xl shadow",children:[e.jsx("button",{onClick:p,type:"button",className:"absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 transition-all ease-in-out hover:text-gray-900 rounded-xl text-sm w-8 h-8 ms-auto inline-flex justify-center items-center",children:e.jsx("i",{className:"fa-solid fa-xmark"})}),e.jsxs("div",{className:"px-5 py-7 text-center",children:[e.jsx("i",{className:"fa-solid fa-circle-exclamation text-red-500 fa-3x"}),e.jsx("h3",{className:"my-5 text-lg font-normal text-gray-500",children:"Are you sure you want to delete this user?"}),e.jsx("button",{onClick:()=>I(i.id),type:"button",className:"text-white bg-red-600 hover:bg-red-800 transition-all ease-in-out font-medium rounded-xl text-sm inline-flex items-center px-5 py-2.5 text-center",children:"Yes, I'm sure"}),e.jsx("button",{onClick:p,type:"button",className:"py-2.5 px-5 ms-3 text-sm font-medium text-gray-900  transition-all ease-in-out bg-white rounded-xl border border-gray-200 hover:bg-gray-100 hover:text-sky-700 focus:z-10 focus:ring-4 focus:ring-gray-100",children:"No, cancel"})]})]})})})]})}export{B as default};