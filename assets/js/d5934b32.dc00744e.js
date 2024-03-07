"use strict";(self.webpackChunkcxx_graph_docs=self.webpackChunkcxx_graph_docs||[]).push([[927],{6338:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>r,toc:()=>a});var o=n(4848),i=n(8453);const l={id:"unit-test-execution",title:"Unit-Test Execution",tags:["benchmark execution","execution","testing","benchmark","googletest","install"]},s=void 0,r={id:"test-execution/unit-test-execution",title:"Unit-Test Execution",description:"The Unit-Test requires CMake 3.9 and later, and the GoogleTest library.",source:"@site/docs/test-execution/unit-test-execution.md",sourceDirName:"test-execution",slug:"/test-execution/unit-test-execution",permalink:"/ / /test-execution/unit-test-execution",draft:!1,unlisted:!1,editUrl:"https://github.com/ZigRazor/CXXGraph/docs/test-execution/unit-test-execution.md",tags:[{label:"benchmark execution",permalink:"/ / /tags/benchmark-execution"},{label:"execution",permalink:"/ / /tags/execution"},{label:"testing",permalink:"/ / /tags/testing"},{label:"benchmark",permalink:"/ / /tags/benchmark"},{label:"googletest",permalink:"/ / /tags/googletest"},{label:"install",permalink:"/ / /tags/install"}],version:"current",frontMatter:{id:"unit-test-execution",title:"Unit-Test Execution",tags:["benchmark execution","execution","testing","benchmark","googletest","install"]},sidebar:"docSidebar",previous:{title:"Algorithms Explanation",permalink:"/ / /component-explanation/regular-algorithm"},next:{title:"Benchmark Execution",permalink:"/ / /test-execution/benchmark-execution"}},c={},a=[{value:"Install Googletest",id:"install-googletest",level:3},{value:"How to compile Googletest",id:"how-to-compile-googletest",level:3},{value:"How to run Googletest",id:"how-to-run-googletest",level:3}];function u(e){const t={a:"a",code:"code",h3:"h3",hr:"hr",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:["The Unit-Test requires ",(0,o.jsx)(t.a,{href:"https://cmake.org/",children:"CMake"})," 3.9 and later, and the ",(0,o.jsx)(t.a,{href:"https://github.com/google/googletest",children:"GoogleTest"})," library."]}),"\n",(0,o.jsx)(t.h3,{id:"install-googletest",children:"Install Googletest"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"git clone https://github.com/google/googletest.git\ncd googletest        # Main directory of the cloned repository\nmkdir -p build       # Create a directory to hold the build output\ncd build\ncmake ..             # Generate native build scripts for GoogleTest\nmake                 # Compile\nsudo make install    # Install in /usr/local/ by default\n"})}),"\n",(0,o.jsx)(t.hr,{}),"\n",(0,o.jsx)(t.h3,{id:"how-to-compile-googletest",children:"How to compile Googletest"}),"\n",(0,o.jsx)(t.p,{children:"From the base directory:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"mkdir -p build       # Create a directory to hold the build output\ncd build             # Enter the build folder\ncmake -DTEST=ON ..   # Generate native build scripts for GoogleTest,\nmake                 # Compile\n\n"})}),"\n",(0,o.jsx)(t.hr,{}),"\n",(0,o.jsx)(t.h3,{id:"how-to-run-googletest",children:"How to run Googletest"}),"\n",(0,o.jsxs)(t.p,{children:["After the build has compiled, run the \u201ctest_exe\u201d executable in the \u201cbuild\u201d directory with the following command:\n",(0,o.jsx)(t.code,{children:"./test_exe"})]})]})}function d(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>r});var o=n(6540);const i={},l=o.createContext(i);function s(e){const t=o.useContext(l);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(l.Provider,{value:t},e.children)}}}]);