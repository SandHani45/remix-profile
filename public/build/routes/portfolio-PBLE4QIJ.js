import{a as d,e as f}from"/build/_shared/chunk-U7F42KCH.js";import{a as g}from"/build/_shared/chunk-4FAT6YWZ.js";import{a as u}from"/build/_shared/chunk-SWQLW4AV.js";import{e as c,h as p}from"/build/_shared/chunk-V4PK2UBV.js";import{a as l}from"/build/_shared/chunk-5ZHZVVWC.js";import"/build/_shared/chunk-VADYKVLB.js";import{b as n}from"/build/_shared/chunk-4HXKWYDW.js";import{c as i}from"/build/_shared/chunk-Q3IECNXJ.js";var r=i(n()),m=a=>{let{current:s=!1,data:e}=a,t=new Date(e.date),w=()=>(0,r.jsx)("div",{className:"w-full",children:(0,r.jsx)("img",{alt:"",className:"w-full border transition-all hover:rotate-3 hover:scale-110",height:"auto",src:e.images[0].url,width:"auto"})});return(0,r.jsxs)(c,{className:"work-preview text-color-copy",prefetch:"intent",to:`/portfolio/${e.slug}`,children:[(0,r.jsx)("h3",{className:"m-0 font-font-serif text-xl font-bold",children:e.title}),(0,r.jsxs)("div",{className:"mt-1 mb-6 flex items-baseline gap-2 font-medium text-color-copy-dark",children:[!s&&(0,r.jsx)("span",{children:new Date(t).getFullYear()}),!s&&(0,r.jsx)("span",{className:"font-light",children:"|"}),(0,r.jsx)("span",{children:e.company})]}),(0,r.jsx)("p",{children:e.overview})]})};var v=g`
  query {
    portfolios(orderBy: date_DESC) {
      company
      current
      date
      description
      images {
        url
      }
      overview
      slug
      thumbnailTemp
      title
    }
  }
`;var h=i(u());var o=i(n());var x=a=>[{title:`Featured Work | ${f}`},{name:"description",content:`A collection of ramblings by ${d}.`}];function y(){let a=p(),s=a.filter(t=>t.current),e=a.filter(t=>!t.current);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("section",{children:[(0,o.jsx)("div",{className:"bg-color-background-dark text-color-background",children:(0,o.jsx)(l,{className:"py-20 md:py-40",copy:"Right now...",highlight:"What I'm building",tag:"h1"})}),(0,o.jsx)("div",{className:"mx-auto md:max-w-6xl",children:(0,o.jsx)("div",{className:"my-20 grid grid-cols-1 gap-16 p-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3",children:s.map(t=>(0,o.jsx)(m,{current:!0,data:t},t.slug))})})]}),(0,o.jsxs)("section",{children:[(0,o.jsx)("div",{className:"text-color-background-dark",children:(0,o.jsx)(l,{className:"py-20 md:py-40",copy:"In the past...",highlight:"What I've built",tag:"h2"})}),(0,o.jsx)("div",{className:"mx-auto md:max-w-6xl",children:(0,o.jsx)("div",{className:"my-20 grid grid-cols-1 gap-16 p-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3",children:e.map(t=>(0,o.jsx)(m,{current:!1,data:t},t.slug))})})]})]})}export{y as default,x as meta};
