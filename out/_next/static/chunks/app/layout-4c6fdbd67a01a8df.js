(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{8274:function(e,t,s){Promise.resolve().then(s.bind(s,257))},257:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return F}});var a=s(7437),r=s(4811),n=s.n(r),o=s(2265),d=s(8298);function i(e){let{children:t,...s}=e;return(0,a.jsx)(d.f,{...s,children:t})}let l=0,c=new Map,u=e=>{if(c.has(e))return;let t=setTimeout(()=>{c.delete(e),x({type:"REMOVE_TOAST",toastId:e})},1e6);c.set(e,t)},f=(e,t)=>{switch(t.type){case"ADD_TOAST":return{...e,toasts:[t.toast,...e.toasts].slice(0,1)};case"UPDATE_TOAST":return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case"DISMISS_TOAST":{let{toastId:s}=t;return s?u(s):e.toasts.forEach(e=>{u(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===s||void 0===s?{...e,open:!1}:e)}}case"REMOVE_TOAST":if(void 0===t.toastId)return{...e,toasts:[]};return{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)}}},m=[],p={toasts:[]};function x(e){p=f(p,e),m.forEach(e=>{e(p)})}function h(e){let{...t}=e,s=(l=(l+1)%Number.MAX_SAFE_INTEGER).toString(),a=()=>x({type:"DISMISS_TOAST",toastId:s});return x({type:"ADD_TOAST",toast:{...t,id:s,open:!0,onOpenChange:e=>{e||a()}}}),{id:s,dismiss:a,update:e=>x({type:"UPDATE_TOAST",toast:{...e,id:s}})}}var g=s(653),v=s(1915),b=s(7712),y=s(3448);let N=v.zt,j=o.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,a.jsx)(v.l_,{ref:t,className:(0,y.cn)("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",s),...r})});j.displayName=v.l_.displayName;let w=(0,b.j)("group pointer-events-auto relative flex w-full items-center justify-between space-x-2 overflow-hidden rounded-md border p-4 pr-6 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",{variants:{variant:{default:"border bg-background text-foreground",destructive:"destructive group border-destructive bg-destructive text-destructive-foreground"}},defaultVariants:{variant:"default"}}),S=o.forwardRef((e,t)=>{let{className:s,variant:r,...n}=e;return(0,a.jsx)(v.fC,{ref:t,className:(0,y.cn)(w({variant:r}),s),...n})});S.displayName=v.fC.displayName,o.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,a.jsx)(v.aU,{ref:t,className:(0,y.cn)("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium transition-colors hover:bg-secondary focus:outline-none focus:ring-1 focus:ring-ring disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",s),...r})}).displayName=v.aU.displayName;let T=o.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,a.jsx)(v.x8,{ref:t,className:(0,y.cn)("absolute right-1 top-1 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-1 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",s),"toast-close":"",...r,children:(0,a.jsx)(g.Pxu,{className:"h-4 w-4"})})});T.displayName=v.x8.displayName;let _=o.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,a.jsx)(v.Dx,{ref:t,className:(0,y.cn)("text-sm font-semibold [&+div]:text-xs",s),...r})});_.displayName=v.Dx.displayName;let R=o.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,a.jsx)(v.dk,{ref:t,className:(0,y.cn)("text-sm opacity-90",s),...r})});function A(){let{toasts:e}=function(){let[e,t]=o.useState(p);return o.useEffect(()=>(m.push(t),()=>{let e=m.indexOf(t);e>-1&&m.splice(e,1)}),[e]),{...e,toast:h,dismiss:e=>x({type:"DISMISS_TOAST",toastId:e})}}();return(0,a.jsxs)(N,{children:[e.map(function(e){let{id:t,title:s,description:r,action:n,...o}=e;return(0,a.jsxs)(S,{...o,children:[(0,a.jsxs)("div",{className:"grid gap-1",children:[s&&(0,a.jsx)(_,{children:s}),r&&(0,a.jsx)(R,{children:r})]}),n,(0,a.jsx)(T,{})]},t)}),(0,a.jsx)(j,{})]})}R.displayName=v.dk.displayName;var O=s(7648),k=s(9376),E=s(6344),z=s(2381),C=s(85);let D=C.fC,I=C.xz;C.ZA,C.Uv,C.Tr,C.Ee,o.forwardRef((e,t)=>{let{className:s,inset:r,children:n,...o}=e;return(0,a.jsxs)(C.fF,{ref:t,className:(0,y.cn)("flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",r&&"pl-8",s),...o,children:[n,(0,a.jsx)(g.XCv,{className:"ml-auto h-4 w-4"})]})}).displayName=C.fF.displayName,o.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,a.jsx)(C.tu,{ref:t,className:(0,y.cn)("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",s),...r})}).displayName=C.tu.displayName;let M=o.forwardRef((e,t)=>{let{className:s,sideOffset:r=4,...n}=e;return(0,a.jsx)(C.Uv,{children:(0,a.jsx)(C.VY,{ref:t,sideOffset:r,className:(0,y.cn)("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md","data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",s),...n})})});M.displayName=C.VY.displayName;let U=o.forwardRef((e,t)=>{let{className:s,inset:r,...n}=e;return(0,a.jsx)(C.ck,{ref:t,className:(0,y.cn)("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",r&&"pl-8",s),...n})});U.displayName=C.ck.displayName,o.forwardRef((e,t)=>{let{className:s,children:r,checked:n,...o}=e;return(0,a.jsxs)(C.oC,{ref:t,className:(0,y.cn)("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",s),checked:n,...o,children:[(0,a.jsx)("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:(0,a.jsx)(C.wU,{children:(0,a.jsx)(g.nQG,{className:"h-4 w-4"})})}),r]})}).displayName=C.oC.displayName,o.forwardRef((e,t)=>{let{className:s,children:r,...n}=e;return(0,a.jsxs)(C.Rk,{ref:t,className:(0,y.cn)("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",s),...n,children:[(0,a.jsx)("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:(0,a.jsx)(C.wU,{children:(0,a.jsx)(g.jXb,{className:"h-4 w-4 fill-current"})})}),r]})}).displayName=C.Rk.displayName;let P=o.forwardRef((e,t)=>{let{className:s,inset:r,...n}=e;return(0,a.jsx)(C.__,{ref:t,className:(0,y.cn)("px-2 py-1.5 text-sm font-semibold",r&&"pl-8",s),...n})});P.displayName=C.__.displayName;let V=o.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,a.jsx)(C.Z0,{ref:t,className:(0,y.cn)("-mx-1 my-1 h-px bg-muted",s),...r})});function Z(){let e=(0,k.usePathname)();return(0,a.jsx)("nav",{className:"border-b bg-background",children:(0,a.jsx)("div",{className:"container mx-auto px-4 sm:px-6 lg:px-8",children:(0,a.jsxs)("div",{className:"flex h-16 items-center justify-between",children:[(0,a.jsxs)("div",{className:"flex items-center",children:[(0,a.jsx)(O.default,{href:"/",className:"text-xl font-bold",children:"Sopact Sense"}),(0,a.jsx)("div",{className:"ml-10 flex items-baseline space-x-4",children:[{name:"Projects",href:"/"}].map(t=>(0,a.jsx)(O.default,{href:t.href,className:(0,y.cn)("px-3 py-2 rounded-md text-sm font-medium",e===t.href?"bg-primary text-primary-foreground":"text-foreground hover:bg-accent hover:text-accent-foreground"),children:t.name},t.name))})]}),(0,a.jsx)("div",{className:"flex items-center",children:(0,a.jsxs)(D,{children:[(0,a.jsx)(I,{asChild:!0,children:(0,a.jsxs)(z.z,{variant:"ghost",size:"icon",children:[(0,a.jsx)(E.Z,{className:"h-6 w-6"}),(0,a.jsx)("span",{className:"sr-only",children:"Open user menu"})]})}),(0,a.jsxs)(M,{className:"w-56",align:"end",children:[(0,a.jsx)(P,{children:"My Account"}),(0,a.jsx)(V,{}),(0,a.jsx)(U,{children:"Profile"}),(0,a.jsx)(U,{children:"Settings"}),(0,a.jsx)(V,{}),(0,a.jsx)(U,{children:"Sign out"})]})]})})]})})})}function F(e){let{children:t}=e;return(0,a.jsx)("html",{lang:"en",suppressHydrationWarning:!0,children:(0,a.jsx)("body",{className:n().className,children:(0,a.jsxs)(i,{attribute:"class",defaultTheme:"light",enableSystem:!1,disableTransitionOnChange:!0,children:[(0,a.jsxs)("div",{className:"min-h-screen flex flex-col",children:[(0,a.jsx)(Z,{}),(0,a.jsx)("div",{className:"flex-1",children:t})]}),(0,a.jsx)(A,{})]})})})}V.displayName=C.Z0.displayName,s(2778)},2381:function(e,t,s){"use strict";s.d(t,{d:function(){return i},z:function(){return l}});var a=s(7437),r=s(2265),n=s(7053),o=s(7712),d=s(3448);let i=(0,o.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),l=r.forwardRef((e,t)=>{let{className:s,variant:r,size:o,asChild:l=!1,...c}=e,u=l?n.g7:"button";return(0,a.jsx)(u,{className:(0,d.cn)(i({variant:r,size:o,className:s})),ref:t,...c})});l.displayName="Button"},3448:function(e,t,s){"use strict";s.d(t,{cn:function(){return n}});var a=s(1994),r=s(3335);function n(){for(var e=arguments.length,t=Array(e),s=0;s<e;s++)t[s]=arguments[s];return(0,r.m6)((0,a.W)(t))}},2778:function(){}},function(e){e.O(0,[2,310,73,71,648,770,971,117,744],function(){return e(e.s=8274)}),_N_E=e.O()}]);