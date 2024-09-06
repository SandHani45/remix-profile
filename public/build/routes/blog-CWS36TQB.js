import{a as h,e as x}from"/build/_shared/chunk-U7F42KCH.js";import{a as w}from"/build/_shared/chunk-4FAT6YWZ.js";import{a as L}from"/build/_shared/chunk-SWQLW4AV.js";import{e as u,h as f}from"/build/_shared/chunk-V4PK2UBV.js";import{a as y}from"/build/_shared/chunk-5ZHZVVWC.js";import{a as b}from"/build/_shared/chunk-VADYKVLB.js";import{b as l}from"/build/_shared/chunk-4HXKWYDW.js";import{c as r}from"/build/_shared/chunk-Q3IECNXJ.js";var N=r(b()),n=r(l()),m=s=>{let{className:i,date:o,heading:t="h3",slug:c,image:d,title:p}=s,D=t,T=new Date(o).toLocaleDateString("en-US",{day:"2-digit",month:"2-digit",timeZone:"UTC",weekday:void 0,year:"numeric"});return(0,n.jsxs)(u,{className:(0,N.default)("blog-preview relative flex flex-col",i),prefetch:"intent",to:`/blog/${c}`,children:[(0,n.jsx)("img",{alt:p,height:"auto",loading:"lazy",src:d,width:"auto"}),(0,n.jsx)(D,{className:"mt-4 mb-2 text-2xl",children:p}),(0,n.jsx)("div",{className:"font-font-monospace text-sm",children:T})]})};var v=r(l()),g=s=>{let{className:i,post:o}=s;return(0,v.jsx)(m,{className:i,content:o.content.html,date:o.date,featured:o.sticky,heading:"h2",image:o.imageTemp,slug:o.slug,title:o.title},o.slug)};var k=r(b()),a=r(l()),P=s=>{let{className:i}=s;return(0,a.jsx)("div",{className:(0,k.default)("flex flex-col gap-10",i),children:(0,a.jsxs)("div",{children:[(0,a.jsx)("h3",{className:"text-2xl",children:"Upcoming Posts"}),(0,a.jsxs)("ul",{className:"mt-8",children:[(0,a.jsx)("li",{className:"mb-2 rounded-md border bg-color-background-light p-2 text-sm",children:"Escape Hatches - brought up in Vercel conf"}),(0,a.jsx)("li",{className:"mb-2 rounded-md border bg-color-background-light p-2 text-sm",children:"We are all salesmen, quick prototypes, sandboxes"}),(0,a.jsx)("li",{className:"mb-2 rounded-md border bg-color-background-light p-2 text-sm",children:"Developer tooling - debuggers & loggers"}),(0,a.jsx)("li",{className:"mb-2 rounded-md border bg-color-background-light p-2 text-sm",children:"Lerna is back!"}),(0,a.jsx)("li",{className:"mb-2 rounded-md border bg-color-background-light p-2 text-sm",children:"You are not Google - moving quickly"}),(0,a.jsx)("li",{className:"mb-2 rounded-md border bg-color-background-light p-2 text-sm",children:"Reviewing pull requests - a simple framework"})]})]})})};var B=s=>{let i={data:[],featured:[]},o={data:[],featured:[]};return s.forEach(t=>{let c=t.tags.includes("DIY")?i:o;(t.sticky?c.featured:c.data).push(t)}),{diy:i,technical:o}};var F=r(L());var E=w`
  query {
    # Query enum values - https://graphcms.com/docs/api-reference/schema/enumerations
    __type(name: "Tags") {
      enumValues {
        name
      }
    }

    posts(orderBy: date_DESC) {
      content {
        html
      }
      date
      description
      id
      imageTemp
      intro
      slug
      tags
      sticky
      tags
      title
    }
  }
`;var e=r(l());var I=s=>[{title:`A developers ramblings | ${x}`},{name:"description",content:`A collection of ramblings by ${h}.`}];function U(){let{posts:s,tags:i}=f(),o=B(s);return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("section",{className:"bg-gradient-dark-- bg-color-background-dark text-color-background",children:(0,e.jsx)(y,{className:"mx-auto max-w-6xl py-20 md:py-40",copy:"Yes, another blog...",highlight:"Developer ramblings",tag:"h1"})}),(0,e.jsxs)("section",{className:"section-full m-auto flex max-w-6xl flex-col items-center justify-center gap-20 px-4 py-20",children:[(0,e.jsxs)("div",{className:"flex flex-col gap-20 md:flex-row",children:[(0,e.jsx)(g,{className:"basis-2/3",post:o.technical.featured[0]}),(0,e.jsx)(P,{className:"basis-1/3"})]}),(0,e.jsx)("div",{className:"grid w-full gap-10 md:grid-cols-2 lg:grid-cols-3",children:o.technical.data.map(t=>(0,e.jsx)(m,{content:t.content.html,date:t.date,heading:"h2",image:t.imageTemp,slug:t.slug,title:t.title},t.id))})]}),(0,e.jsxs)("section",{className:"section-full m-auto flex max-w-6xl flex-col items-center justify-center gap-20 px-4 py-20",children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("h2",{className:"mb-8 w-full text-left text-3xl",children:"Do it yourself"}),(0,e.jsx)("p",{children:`You see and hear the acronym "DIY" everywhere, and you probably already know what it stands for: "do it yourself." It's a pretty straightforward-sounding concept. Well, when I am not building things with code, I love to work with my hands around the house. It's also amazing to share the process and experience with my kids.`})]}),o.diy.featured.length>0&&(0,e.jsx)("div",{className:"flex flex-col gap-20 md:flex-row",children:(0,e.jsx)(g,{className:"basis-2/3",post:o.diy.featured[0]})}),(0,e.jsx)("div",{className:"grid w-full gap-10 md:grid-cols-2 lg:grid-cols-3",children:o.diy.data.map(t=>(0,e.jsx)(m,{content:t.content.html,date:t.date,heading:"h2",image:t.imageTemp,slug:t.slug,title:t.title},t.id))})]})]})}export{U as default,I as meta};
