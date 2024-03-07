"use strict";(self.webpackChunkcxx_graph_docs=self.webpackChunkcxx_graph_docs||[]).push([[33],{5540:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>c,metadata:()=>a,toc:()=>s});var o=n(4848),r=n(8453);const c={id:"benchmark-execution",title:"Benchmark Execution",tags:["benchmark execution","execution","testing","benchmark","googletest"]},i=void 0,a={id:"test-execution/benchmark-execution",title:"Benchmark Execution",description:"Benchmark requires CMake 3.9 and later, the GoogleTest library, and the Google Benchmark library.",source:"@site/docs/test-execution/benchmark-execution.md",sourceDirName:"test-execution",slug:"/test-execution/benchmark-execution",permalink:"/ / /test-execution/benchmark-execution",draft:!1,unlisted:!1,editUrl:"https://github.com/ZigRazor/CXXGraph/docs/test-execution/benchmark-execution.md",tags:[{label:"benchmark execution",permalink:"/ / /tags/benchmark-execution"},{label:"execution",permalink:"/ / /tags/execution"},{label:"testing",permalink:"/ / /tags/testing"},{label:"benchmark",permalink:"/ / /tags/benchmark"},{label:"googletest",permalink:"/ / /tags/googletest"}],version:"current",frontMatter:{id:"benchmark-execution",title:"Benchmark Execution",tags:["benchmark execution","execution","testing","benchmark","googletest"]},sidebar:"docSidebar",previous:{title:"Unit-Test Execution",permalink:"/ / /test-execution/unit-test-execution"}},l={},s=[{value:"Install Google Benchmark",id:"install-google-benchmark",level:3},{value:"How to compile Google Benchmark",id:"how-to-compile-google-benchmark",level:3},{value:"How to run Google Benchmark",id:"how-to-run-google-benchmark",level:3},{value:"Benchmark Results",id:"benchmark-results",level:3}];function h(e){const t={a:"a",code:"code",h3:"h3",hr:"hr",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:["Benchmark requires ",(0,o.jsx)(t.a,{href:"https://cmake.org/",children:"CMake"})," 3.9 and later, the ",(0,o.jsx)(t.a,{href:"https://github.com/google/googletest",children:"GoogleTest"})," library, and the ",(0,o.jsx)(t.a,{href:"https://github.com/google/benchmark",children:"Google Benchmark"})," library."]}),"\n",(0,o.jsx)(t.h3,{id:"install-google-benchmark",children:"Install Google Benchmark"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:'# Check out the library\n$ git clone https://github.com/google/benchmark.git\n# Google Benchmark requires GoogleTest as a dependency.\n# Add the source tree as a subdirectory.\n$ git clone https://github.com/google/googletest.git benchmark/googletest\n# Go to the library\'s root directory\n$ cd benchmark\n# Make a build directory to place the build output\n$ cmake -E make_directory "build"\n# Generate the build system files with CMake\n$ cmake -E chdir "build" cmake -DCMAKE_BUILD_TYPE=Release ../\n# If starting with CMake 3.13, you can use the following:\n# cmake -DCMAKE_BUILD_TYPE=Release -S . -B "build"\n# Build the library\n$ cmake --build "build" --config Release\n# Install the library\n$ sudo cmake --build "build" --config Release --target install\n'})}),"\n",(0,o.jsx)(t.hr,{}),"\n",(0,o.jsx)(t.h3,{id:"how-to-compile-google-benchmark",children:"How to compile Google Benchmark"}),"\n",(0,o.jsx)(t.p,{children:"From the base directory:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"mkdir -p build             # Create a directory to hold the build output\ncd build                   # Enter the build folder\ncmake -DBENCHMARK=ON ..    # Generate native build scripts for Google Benchmark\nmake                       # Compile\n"})}),"\n",(0,o.jsx)(t.hr,{}),"\n",(0,o.jsx)(t.h3,{id:"how-to-run-google-benchmark",children:"How to run Google Benchmark"}),"\n",(0,o.jsx)(t.p,{children:"After the build has compiled, run the \u201cbenchmark\u201d executable in the \u201cbuild\u201d directory with the following command:"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.code,{children:"./benchmark"})}),"\n",(0,o.jsx)(t.hr,{}),"\n",(0,o.jsx)(t.h3,{id:"benchmark-results",children:"Benchmark Results"}),"\n",(0,o.jsxs)(t.p,{children:["You can check the benchmark result using this ",(0,o.jsx)(t.a,{href:"https://zigrazor.github.io/CXXGraph/dev/bench/",children:"link"}),"."]})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>a});var o=n(6540);const r={},c=o.createContext(r);function i(e){const t=o.useContext(c);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(c.Provider,{value:t},e.children)}}}]);