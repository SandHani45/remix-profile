import{a as d}from"/build/_shared/chunk-4FAT6YWZ.js";import{a as u}from"/build/_shared/chunk-SWQLW4AV.js";import{h as m}from"/build/_shared/chunk-V4PK2UBV.js";import{a as c}from"/build/_shared/chunk-5ZHZVVWC.js";import"/build/_shared/chunk-VADYKVLB.js";import{b as p}from"/build/_shared/chunk-4HXKWYDW.js";import{c as a}from"/build/_shared/chunk-Q3IECNXJ.js";var f=a(u());var g=d`
  query portfolios($slug: String!) {
    portfolios(where: { slug: $slug }) {
      company
      content {
        html
      }
      description
      id
      images {
        url
      }
      intro
      slug
      title
    }
  }
`;var o=a(p());var x=t=>{var e,i,l,s,n;let r=(e=t.data)!=null&&e.images[0]?(l=(i=t.data)==null?void 0:i.images[0])==null?void 0:l.url:!1;return[{description:(s=t.data)==null?void 0:s.description},{title:(n=t.data)==null?void 0:n.title}]};function y(){var e;let t=m(),r=t.images[0]?(e=t.images[0])==null?void 0:e.url:!1;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("div",{className:"m-auto max-w-3xl",children:(0,o.jsx)(c,{className:"py-20 md:py-40",copy:t.company,highlight:t.title,tag:"h1"})}),r&&(0,o.jsx)("img",{alt:t.title,className:"mb-20 mt-0 w-full border-b border-t border-color-border",height:"auto",loading:"eager",src:r,style:{aspectRatio:"2/1"},width:"100%"}),(0,o.jsx)("div",{className:"relative m-auto flex max-w-3xl flex-col",children:(0,o.jsx)("div",{className:"wysiwyg px-4",dangerouslySetInnerHTML:{__html:t.content.html}})}),(0,o.jsx)("div",{className:"relative m-auto mb-20 flex max-w-3xl flex-col",children:(0,o.jsx)("blockquote",{children:t.intro})})]})}export{y as default,x as meta};
