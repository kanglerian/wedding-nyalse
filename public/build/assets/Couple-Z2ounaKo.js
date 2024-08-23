import{r as n,W as $,j as e}from"./app-NLUG9n5B.js";function z({invitation:i,flash:m}){const[r,d]=n.useState(!1),[y,c]=n.useState(!1),[j,o]=n.useState(!1),[N,x]=n.useState(!!m.message),b={200:{icon:"fa-check",textClass:"text-emerald-500",bgClass:"bg-emerald-100"},201:{icon:"fa-check",textClass:"text-blue-500",bgClass:"bg-blue-100"},204:{icon:"fa-check",textClass:"text-blue-500",bgClass:"bg-blue-100"},23e3:{icon:"fa-times",textClass:"text-red-500",bgClass:"bg-red-100"},500:{icon:"fa-exclamation-triangle",textClass:"text-yellow-500",bgClass:"bg-yellow-100"},default:{icon:"fa-info",textClass:"text-gray-500",bgClass:"bg-gray-100"}},{icon:v,textClass:k,bgClass:w}=b[m.code]||b.default,{post:C,patch:_,processing:f,delete:S,reset:u,errors:t,data:s,setData:l}=$({id:"",invitation_id:i.invitation.id,fullname:"",father_name:"",mother_name:"",nickname:"",child:"",gender:null,privilage:""}),F=a=>{a.preventDefault();const g=r?C:_,q=r?route("couple.store"):route("couple.update",s.id);g(q,{preserveScroll:!0,onSuccess:p=>{x(!0),d(!1),c(!1),u()},onError:p=>{console.log(p)}})},A=a=>{l({id:a.id,invitation_id:a.invitation_id,fullname:a.fullname,father_name:a.father_name,mother_name:a.mother_name,nickname:a.nickname,child:a.child,gender:a.gender,privilage:a.privilage}),c(!0)},h=()=>{u(),d(!1),c(!1),o(!1)},M=()=>{x(!1)},D=a=>{l({id:a.id}),o(!0)},E=a=>{console.log(a),S(route("couple.destroy",a),{onSuccess:()=>{x(!0),o(!1)},onError:g=>{console.log(g)},onFinish:()=>u()})};return e.jsxs("main",{className:"w-full",children:[e.jsx("div",{className:"px-5",children:N&&e.jsxs("div",{className:"flex items-center w-full p-4 mb-4 text-gray-500 bg-white rounded-2xl shadow-sm",role:"alert",children:[e.jsx("div",{className:`inline-flex items-center justify-center flex-shrink-0 w-8 h-8 rounded-xl ${k} ${w}`,children:e.jsx("i",{className:`fa-solid ${v}`})}),e.jsx("div",{className:"ms-3 text-sm font-normal",children:m.message}),e.jsx("button",{onClick:M,type:"button",className:"ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-xl focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8",children:e.jsx("i",{className:"fa-solid fa-xmark"})})]})}),e.jsxs("div",{className:"p-6 bg-gray-50 text-medium shadow-sm text-gray-500 md:rounded-2xl w-full",children:[e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("h3",{className:"text-lg font-bold text-gray-900 mb-2",children:"Data Mempelai"}),e.jsx("button",{onClick:()=>d(!r),type:"button",className:"flex text-white bg-sky-500 hover:bg-sky-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm p-2",children:e.jsx("i",{className:"fa-solid fa-circle-plus"})})]}),e.jsx("hr",{className:"my-3.5"}),i.couple.length>0?e.jsx("section",{className:"space-y-3",children:i.couple.map(a=>e.jsxs("div",{className:"relative",children:[e.jsxs("div",{onClick:()=>A(a),className:`cursor-pointer relative transition-all ease-in-out px-5 py-4 rounded-2xl text-white ${a.gender?"bg-sky-500 hover:bg-sky-600":"bg-pink-500 hover:bg-pink-600"}`,children:[e.jsxs("h5",{className:"italic text-sm",children:["Mempelai ",a.gender?"laki-laki":"perempuan"]}),e.jsxs("h2",{className:"font-bold",children:[a.fullname," (",a.nickname,")"]}),e.jsxs("ul",{className:"text-sm list-disc ml-5",children:[e.jsxs("li",{children:["Nama Ayah: ",a.father_name]}),e.jsxs("li",{children:["Nama Ibu: ",a.mother_name]}),e.jsxs("li",{children:["Anak ke-: ",a.child]})]}),a.privilage&&e.jsxs("div",{className:"mt-3",children:[e.jsx("h5",{className:"text-sm font-medium",children:"Keluarga:"}),e.jsx("p",{className:"text-sm",children:a.privilage})]}),e.jsx("i",{className:`absolute right-10 top-1/2 transform -translate-y-1/2 fa-solid fa-3x ${a.gender=="1"?"fa-mars text-sky-400":"fa-venus text-pink-400"}`})]}),e.jsx("button",{disabled:f,onClick:()=>D(a),type:"button",className:"absolute bottom-3 right-5 px-5 py-2.5 border rounded-xl text-white hover:bg-white hover:text-red-600",children:e.jsx("i",{className:"fa-solid fa-trash-alt"})})]},a.id))}):e.jsx("p",{className:"text-center text-sm",children:"Belum ada data mempelai."})]}),(r||y)&&e.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-50",children:e.jsx("div",{className:"relative p-4 w-full max-w-md",children:e.jsxs("div",{className:"relative bg-white rounded-2xl",children:[e.jsxs("div",{className:"flex items-center justify-between px-6 py-4 md:p-5 border-b rounded-t",children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-900",children:r?"Tambah Data Mempelai":"Ubah Data Mempelai"}),e.jsx("button",{type:"button",onClick:h,className:"text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-xl transition-all ease-in-out text-sm w-8 h-8 ms-auto inline-flex justify-center items-center",children:e.jsx("i",{className:"fa-solid fa-xmark"})})]}),e.jsxs("form",{onSubmit:F,className:"px-6 py-4",children:[e.jsxs("div",{className:"grid gap-4 mb-4 grid-cols-2",children:[e.jsxs("div",{className:"col-span-2",children:[e.jsx("label",{htmlFor:"fullname",className:"block mb-2 text-sm font-medium text-gray-900",children:"Nama lengkap"}),e.jsx("input",{type:"text",value:s.fullname,onChange:a=>l("fullname",a.target.value),name:"fullname",id:"fullname",className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 px-3",placeholder:"Type your full name...",required:!0}),t.fullname&&e.jsx("p",{className:"text-xs text-red-600 mt-2",children:t.fullname})]}),e.jsxs("div",{className:"col-span-1",children:[e.jsx("label",{htmlFor:"father_name",className:"block mb-2 text-sm font-medium text-gray-900",children:"Nama Ayah"}),e.jsx("input",{type:"text",value:s.father_name,onChange:a=>l("father_name",a.target.value),name:"father_name",id:"father_name",className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 px-3",placeholder:"Father's name...",required:!0}),t.father_name&&e.jsx("p",{className:"text-xs text-red-600 mt-2",children:t.father_name})]}),e.jsxs("div",{className:"col-span-1",children:[e.jsx("label",{htmlFor:"mother_name",className:"block mb-2 text-sm font-medium text-gray-900",children:"Nama Ibu"}),e.jsx("input",{type:"text",value:s.mother_name,onChange:a=>l("mother_name",a.target.value),name:"mother_name",id:"mother_name",className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 px-3",placeholder:"Mother's name",required:!0}),t.mother_name&&e.jsx("p",{className:"text-xs text-red-600 mt-2",children:t.mother_name})]}),e.jsxs("div",{className:"col-span-1",children:[e.jsx("label",{htmlFor:"nickname",className:"block mb-2 text-sm font-medium text-gray-900",children:"Nama Panggilan"}),e.jsx("input",{type:"text",value:s.nickname,onChange:a=>l("nickname",a.target.value),name:"nickname",id:"nickname",className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 px-3",placeholder:"Your's nickname",required:!0}),t.nickname&&e.jsx("p",{className:"text-xs text-red-600 mt-2",children:t.nickname})]}),e.jsxs("div",{className:"col-span-1",children:[e.jsx("label",{htmlFor:"child",className:"block mb-2 text-sm font-medium text-gray-900",children:"Anak Ke-"}),e.jsx("input",{type:"number",value:s.child,onChange:a=>l("child",a.target.value),name:"child",id:"child",className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 px-3",placeholder:"Child",required:!0}),t.child&&e.jsx("p",{className:"text-xs text-red-600 mt-2",children:t.child})]}),e.jsxs("div",{className:"col-span-2",children:[e.jsx("label",{htmlFor:"child",className:"block mb-2 text-sm font-medium text-gray-900",children:"Jenis Kelamin"}),e.jsxs("div",{className:"w-full flex items-center gap-3",children:[e.jsxs("div",{className:"w-full flex items-center bg-gray-50 ps-4 border border-gray-300 rounded-xl",children:[e.jsx("input",{id:"gender-1",type:"radio",value:1,onChange:a=>l("gender",a.target.value),name:"gender",className:"w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500",checked:s.gender=="1"}),e.jsx("label",{htmlFor:"gender-1",className:"w-full py-3 ms-2 text-sm font-medium text-gray-900",children:"Laki-laki"})]}),e.jsxs("div",{className:"w-full flex items-center bg-gray-50 ps-4 border border-gray-300 rounded-xl",children:[e.jsx("input",{id:"gender-2",type:"radio",value:0,onChange:a=>l("gender",a.target.value),name:"gender",className:"w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500",checked:s.gender=="0"}),e.jsx("label",{htmlFor:"gender-2",className:"w-full py-3 ms-2 text-sm font-medium text-gray-900",children:"Perempuan"})]})]}),t.child&&e.jsx("p",{className:"text-xs text-red-600 mt-2",children:t.child})]}),e.jsxs("div",{className:"col-span-2",children:[e.jsx("label",{htmlFor:"privilage",className:"block mb-2 text-sm font-medium text-gray-900",children:"Turut mengundang"}),e.jsx("textarea",{className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 px-3",name:"privilage",id:"privilage",onChange:a=>l("privilage",a.target.value),value:s.privilage,placeholder:"Keluarga mempelai",required:!1,children:s.privilage}),t.privilage&&e.jsx("p",{className:"text-xs text-red-600 mt-2",children:t.privilage})]})]}),e.jsxs("button",{disabled:f,type:"submit",className:"text-white inline-flex items-center bg-sky-500 hover:bg-sky-600 font-medium rounded-xl text-sm px-5 py-2.5 text-center space-x-1.5",children:[e.jsx("i",{className:"fa-solid fa-save"}),e.jsx("span",{children:r?"Simpan":"Simpan perubahan"})]})]})]})})}),j&&e.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-50",children:e.jsx("div",{className:"relative p-4 w-full max-w-md max-h-full",children:e.jsxs("div",{className:"relative bg-white rounded-2xl shadow",children:[e.jsx("button",{onClick:h,type:"button",className:"absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 transition-all ease-in-out hover:text-gray-900 rounded-xl text-sm w-8 h-8 ms-auto inline-flex justify-center items-center",children:e.jsx("i",{className:"fa-solid fa-xmark"})}),e.jsxs("div",{className:"px-5 py-7 text-center",children:[e.jsx("i",{className:"fa-solid fa-circle-exclamation text-red-500 fa-3x"}),e.jsx("h3",{className:"my-5 text-lg font-normal text-gray-500",children:"Are you sure you want to delete this category?"}),e.jsx("button",{onClick:()=>E(s.id),type:"button",className:"text-white bg-red-600 hover:bg-red-800 transition-all ease-in-out font-medium rounded-xl text-sm inline-flex items-center px-5 py-2.5 text-center",children:"Yes, I'm sure"}),e.jsx("button",{onClick:h,type:"button",className:"py-2.5 px-5 ms-3 text-sm font-medium text-gray-900  transition-all ease-in-out bg-white rounded-xl border border-gray-200 hover:bg-gray-100 hover:text-sky-700 focus:z-10 focus:ring-4 focus:ring-gray-100",children:"No, cancel"})]})]})})})]})}export{z as default};