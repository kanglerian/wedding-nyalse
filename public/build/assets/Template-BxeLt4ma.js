import{q as P,r as a,W as L,j as e,Y,a as H}from"./app-CAxytxOJ.js";import{A as U}from"./AuthenticatedLayout-DmmM_tSE.js";import"./ApplicationLogo-Ct17TDkC.js";import"./transition-CsJqcVS_.js";function K({auth:v}){const{templates:c,authors:g,categories:b,flash:x}=P().props,[r,m]=a.useState(!1),[w,u]=a.useState(!1),[C,h]=a.useState(!1),[k,i]=a.useState(!!x.message);a.useRef(),a.useRef(),a.useRef(),a.useRef();const f={200:{icon:"fa-check",textClass:"text-emerald-500",bgClass:"bg-emerald-100"},201:{icon:"fa-check",textClass:"text-blue-500",bgClass:"bg-blue-100"},204:{icon:"fa-check",textClass:"text-blue-500",bgClass:"bg-blue-100"},23e3:{icon:"fa-times",textClass:"text-red-500",bgClass:"bg-red-100"},500:{icon:"fa-exclamation-triangle",textClass:"text-yellow-500",bgClass:"bg-yellow-100"},default:{icon:"fa-info",textClass:"text-gray-500",bgClass:"bg-gray-100"}},{icon:S,textClass:A,bgClass:E}=f[x.code]||f.default,{post:D,patch:y,delete:T,processing:j,reset:d,recentlySuccessful:N,errors:l,data:o,setData:n}=L({id:"",author:"",category:"",name:"",price:""}),$=t=>{t.preventDefault();const s=r?D:y,z=r?route("template.store"):route("template.update",o.id);s(z,{preserveScroll:!0,onSuccess:()=>{i(!0),m(!1),u(!1),d()},onError:I=>{console.log(I)}})},R=t=>{n({id:t.id,author:t.user_id,category:t.category_id,name:t.name,price:t.price}),u(!0)},p=()=>{d(),m(!1),u(!1),h(!1)},q=()=>{i(!1)},F=t=>{n({id:t.id}),h(!0)},M=t=>{T(route("template.destroy",t),{onSuccess:()=>{i(!0),h(!1)},onError:s=>{console.log(s)},onFinish:()=>d()})},_=t=>{y(route("template.status",t),{onSuccess:()=>{i(!0)},onError:s=>{console.log(s)},onFinish:()=>d()})};return a.useEffect(()=>{N&&console.log("Successfully!")},[N]),e.jsxs(U,{user:v.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight text-center md:text-left",children:"Template"}),children:[e.jsx(Y,{title:"Template"}),e.jsx("div",{className:"py-12",children:e.jsxs("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-3",children:[e.jsx("div",{className:"px-5",children:k&&e.jsxs("div",{className:"flex items-center w-full p-4 mb-4 text-gray-500 bg-white rounded-2xl shadow-sm",role:"alert",children:[e.jsx("div",{className:`inline-flex items-center justify-center flex-shrink-0 w-8 h-8 rounded-xl ${A} ${E}`,children:e.jsx("i",{className:`fa-solid ${S}`})}),e.jsx("div",{className:"ms-3 text-sm font-normal",children:x.message}),e.jsx("button",{onClick:q,type:"button",className:"ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-xl focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8",children:e.jsx("i",{className:"fa-solid fa-xmark"})})]})}),e.jsx("header",{className:"px-5",children:e.jsxs("button",{type:"button",onClick:()=>m(!0),className:"inline-block text-white bg-sky-500 hover:bg-sky-600 transition-all ease-in-out font-medium rounded-xl text-sm px-5 py-2.5 space-x-2",children:[e.jsx("i",{className:"fa-solid fa-plus"}),e.jsx("span",{children:"New Template"})]})}),e.jsxs("div",{className:"bg-white shadow-sm sm:rounded-3xl p-8",children:[e.jsx("div",{className:"relative overflow-x-auto",children:e.jsxs("table",{className:"w-full text-sm text-left rtl:text-right text-gray-500",children:[e.jsx("thead",{className:"text-xs text-gray-700 uppercase bg-gray-50",children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",className:"px-6 py-4 rounded-tl-xl",children:"No."}),e.jsx("th",{scope:"col",className:"px-6 py-4",children:"Code"}),e.jsx("th",{scope:"col",className:"px-6 py-4",children:"Name"}),e.jsx("th",{scope:"col",className:"px-6 py-4",children:"Price"}),e.jsx("th",{scope:"col",className:"px-6 py-4",children:"Author"}),e.jsx("th",{scope:"col",className:"px-6 py-4",children:"Category"}),e.jsx("th",{scope:"col",className:"px-6 py-4 rounded-tr-xl",children:"Action"})]})}),e.jsx("tbody",{children:c.data.length>0?c.data.map((t,s)=>e.jsxs("tr",{className:"bg-white border-b",children:[e.jsx("th",{scope:"row",className:"px-6 py-4 font-medium text-gray-900 whitespace-nowrap",children:(c.current_page-1)*c.per_page+s+1}),e.jsx("td",{className:"px-6 py-4",children:t.code}),e.jsx("td",{className:"px-6 py-4",children:t.name}),e.jsxs("td",{className:"px-6 py-4",children:["Rp",t.price.toLocaleString("id-ID")]}),e.jsx("td",{className:"px-6 py-4",children:t.author.name}),e.jsx("td",{className:"px-6 py-4",children:t.category.name}),e.jsxs("td",{className:"px-6 py-4 flex justify-start gap-1",children:[e.jsx("button",{onClick:()=>_(t.id),type:"button",className:`text-white bg-${t.status?"emerald":"red"}-500 hover:bg-${t.status?"emerald":"red"}-600 transition-all ease-in-out font-medium rounded-xl text-sm px-3 py-1.5 text-center`,children:t.status?e.jsx("i",{className:"fa-solid fa-toggle-on"}):e.jsx("i",{className:"fa-solid fa-toggle-off"})}),e.jsx("button",{onClick:()=>R(t),type:"button",className:"text-white bg-amber-500 hover:bg-amber-600 transition-all ease-in-out font-medium rounded-xl text-sm px-3 py-1.5 text-center",children:e.jsx("i",{className:"fa-solid fa-pen-to-square"})}),e.jsx("button",{disabled:j,onClick:()=>F(t),type:"button",className:"text-white bg-red-500 hover:bg-red-600 transition-all ease-in-out font-medium rounded-xl text-sm px-3 py-1.5 text-center",children:e.jsx("i",{className:"fa-solid fa-trash-can"})})]})]},t.id)):e.jsx("tr",{className:"bg-white border-b",children:e.jsx("td",{colSpan:"7",className:"px-6 py-4 text-center",children:"Data not found."})})})]})}),e.jsx("div",{className:"pt-8 pb-2",children:c.links.map((t,s)=>e.jsx(H,{href:t.url||"#",className:`mr-2 px-4 py-2 text-sm rounded-xl transition-all ease-in-out
                                        ${t.active?"bg-sky-500 hover:bg-sky-600 text-white":"bg-gray-200 hover:bg-gray-300 text-gray-700"}
                                        ${t.label.includes("Previous")?"rounded-xl text-sm":""}
                                        ${t.label.includes("Next")?"rounded-xl text-sm":""}`,dangerouslySetInnerHTML:{__html:t.label}},s))})]})]})}),(r||w)&&e.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-50",children:e.jsx("div",{className:"relative p-4 w-full max-w-md",children:e.jsxs("div",{className:"relative bg-white rounded-2xl",children:[e.jsxs("div",{className:"flex items-center justify-between px-6 py-4 md:p-5 border-b rounded-t",children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-900",children:r?"Create New Template":"Edit Template"}),e.jsx("button",{type:"button",onClick:p,className:"text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-xl transition-all ease-in-out text-sm w-8 h-8 ms-auto inline-flex justify-center items-center",children:e.jsx("i",{className:"fa-solid fa-xmark"})})]}),e.jsxs("form",{onSubmit:$,className:"px-6 py-4",children:[e.jsxs("div",{className:"grid gap-4 mb-4 grid-cols-2",children:[r&&e.jsxs("div",{className:"col-span-1",children:[e.jsx("label",{htmlFor:"author",className:"block mb-2 text-sm font-medium text-gray-900",children:"Authors"}),e.jsxs("select",{id:"author",name:"author",className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 px-3",value:o.author,onChange:t=>n("author",t.target.value),required:!0,children:[e.jsx("option",{children:"Choose an author"}),g.length>0?g.map((t,s)=>e.jsx("option",{value:t.id,children:t.name},s)):e.jsx("option",{value:"1",children:"Administrator"})]}),l.author&&e.jsx("p",{className:"text-xs text-red-600 mt-2",children:l.author})]}),r&&e.jsxs("div",{className:"col-span-1",children:[e.jsx("label",{htmlFor:"category",className:"block mb-2 text-sm font-medium text-gray-900",children:"Category"}),e.jsxs("select",{id:"category",name:"category",className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 px-3",value:o.category,onChange:t=>n("category",t.target.value),required:!0,children:[e.jsx("option",{children:"Choose a category"}),b.length>0&&b.map((t,s)=>e.jsx("option",{value:t.id,children:t.name},s))]}),l.category&&e.jsx("p",{className:"text-xs text-red-600 mt-2",children:l.category})]}),e.jsxs("div",{className:"col-span-2",children:[e.jsx("label",{htmlFor:"name",className:"block mb-2 text-sm font-medium text-gray-900",children:"Name of template"}),e.jsx("input",{type:"text",value:o.name,onChange:t=>n("name",t.target.value),name:"name",id:"name",className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 px-3",placeholder:"Template's name",required:!0}),l.name&&e.jsx("p",{className:"text-xs text-red-600 mt-2",children:l.name})]}),e.jsxs("div",{className:"col-span-2",children:[e.jsx("label",{htmlFor:"price",className:"block mb-2 text-sm font-medium text-gray-900",children:"Price"}),e.jsx("input",{type:"number",value:o.price,onChange:t=>n("price",t.target.value),name:"price",id:"price",className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 px-3",placeholder:"Rp0",required:!0}),l.price&&e.jsx("p",{className:"text-xs text-red-600 mt-2",children:l.price})]})]}),e.jsxs("button",{disabled:j,type:"submit",className:"text-white inline-flex items-center bg-sky-500 hover:bg-sky-600 font-medium rounded-xl text-sm px-5 py-2.5 text-center space-x-1.5",children:[e.jsx("i",{className:"fa-solid fa-save"}),e.jsx("span",{children:r?"Add new template":"Update template"})]})]})]})})}),C&&e.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-50",children:e.jsx("div",{className:"relative p-4 w-full max-w-md max-h-full",children:e.jsxs("div",{className:"relative bg-white rounded-2xl shadow",children:[e.jsx("button",{onClick:p,type:"button",className:"absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 transition-all ease-in-out hover:text-gray-900 rounded-xl text-sm w-8 h-8 ms-auto inline-flex justify-center items-center",children:e.jsx("i",{className:"fa-solid fa-xmark"})}),e.jsxs("div",{className:"px-5 py-7 text-center",children:[e.jsx("i",{className:"fa-solid fa-circle-exclamation text-red-500 fa-3x"}),e.jsx("h3",{className:"my-5 text-lg font-normal text-gray-500",children:"Are you sure you want to delete this template?"}),e.jsx("button",{onClick:()=>M(o.id),type:"button",className:"text-white bg-red-600 hover:bg-red-800 transition-all ease-in-out font-medium rounded-xl text-sm inline-flex items-center px-5 py-2.5 text-center",children:"Yes, I'm sure"}),e.jsx("button",{onClick:p,type:"button",className:"py-2.5 px-5 ms-3 text-sm font-medium text-gray-900  transition-all ease-in-out bg-white rounded-xl border border-gray-200 hover:bg-gray-100 hover:text-sky-700 focus:z-10 focus:ring-4 focus:ring-gray-100",children:"No, cancel"})]})]})})})]})}export{K as default};
