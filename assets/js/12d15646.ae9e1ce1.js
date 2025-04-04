"use strict";(self.webpackChunksoftware_architecture=self.webpackChunksoftware_architecture||[]).push([[24],{7086:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>o});var r=n(4848),i=n(8453);const s={sidebar_position:4},a="Architectural Patterns",c={id:"Software Architecture/architectural-patterns",title:"Architectural Patterns",description:"Architectural patterns are fundamental guidelines that shape the structure and behavior of software systems. This chapter explores various architectural patterns, each providing a framework for solving common design problems associated with building complex software systems. Understanding and implementing these patterns can greatly enhance the scalability, maintainability, and performance of software applications.",source:"@site/docs/Software Architecture/architectural-patterns.md",sourceDirName:"Software Architecture",slug:"/Software Architecture/architectural-patterns",permalink:"/Software-Architecture/docs/Software Architecture/architectural-patterns",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Software Architecture/architectural-patterns.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Stakeholder Management and Requirements Engineering",permalink:"/Software-Architecture/docs/Software Architecture/stakeholder-managmenet"},next:{title:"Design Principles",permalink:"/Software-Architecture/docs/Software Architecture/design-principles"}},l={},o=[{value:"Importance of Architectural Patterns",id:"importance-of-architectural-patterns",level:2},{value:"Common Architectural Patterns",id:"common-architectural-patterns",level:2},{value:"Layered Architecture",id:"layered-architecture",level:3},{value:"Client-Server Architecture",id:"client-server-architecture",level:3},{value:"Model-View-Controller (MVC)",id:"model-view-controller-mvc",level:3},{value:"Microservices Architecture",id:"microservices-architecture",level:3},{value:"Applying Architectural Patterns",id:"applying-architectural-patterns",level:2},{value:"Scenario-Based Selection",id:"scenario-based-selection",level:3},{value:"Integration Challenges",id:"integration-challenges",level:3},{value:"Future-Proofing",id:"future-proofing",level:3}];function d(e){const t={h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"architectural-patterns",children:"Architectural Patterns"}),"\n",(0,r.jsx)(t.p,{children:"Architectural patterns are fundamental guidelines that shape the structure and behavior of software systems. This chapter explores various architectural patterns, each providing a framework for solving common design problems associated with building complex software systems. Understanding and implementing these patterns can greatly enhance the scalability, maintainability, and performance of software applications."}),"\n",(0,r.jsx)(t.h2,{id:"importance-of-architectural-patterns",children:"Importance of Architectural Patterns"}),"\n",(0,r.jsx)(t.p,{children:"Architectural patterns provide a proven solution framework to recurring design problems. By applying these patterns, developers can avoid common pitfalls and accelerate the development process. These patterns help in promoting design consistency and enhancing system interoperability, which are crucial for large-scale and complex software development."}),"\n",(0,r.jsx)(t.h2,{id:"common-architectural-patterns",children:"Common Architectural Patterns"}),"\n",(0,r.jsx)(t.p,{children:"Architectural patterns provide reusable solutions to common design problems in software development. Understanding different architectural patterns is crucial for designing scalable, maintainable, and robust software systems. Below are some of the most commonly used architectural patterns:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Layered"}),"\n",(0,r.jsx)(t.li,{children:"Client-Server"}),"\n",(0,r.jsx)(t.li,{children:"Model-View-Controller"}),"\n",(0,r.jsx)(t.li,{children:"Microservices"}),"\n",(0,r.jsx)(t.li,{children:"Event-Driven"}),"\n",(0,r.jsx)(t.li,{children:"Service-Oriented"}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"These architectural patterns can be combined or adapted to suit the specific requirements and constraints of a software project. Understanding their strengths, weaknesses, and use cases is essential for making informed architectural decisions."}),"\n",(0,r.jsx)(t.h3,{id:"layered-architecture",children:"Layered Architecture"}),"\n",(0,r.jsx)(t.p,{children:"Layered architecture organizes the system into multiple layers, such as presentation, business logic, and data access."}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Benefits"}),(0,r.jsx)(t.th,{children:"Drawbacks"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"- Modularity: Separation of concerns into distinct layers promotes modularity."}),(0,r.jsx)(t.td,{children:"- Overhead: Introducing multiple layers can add complexity and overhead to the system."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"- Scalability: Components within each layer can be scaled independently."}),(0,r.jsx)(t.td,{children:"- Tight Coupling: Layers may become tightly coupled, making it difficult to change one layer without affecting others."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"- Flexibility: Changes to one layer can be made without affecting other layers."}),(0,r.jsx)(t.td,{children:"- Duplication of Logic: Similar functionality may exist in multiple layers, leading to code duplication."})]})]})]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Use Cases"}),":"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Enterprise applications"}),"\n",(0,r.jsx)(t.li,{children:"Web applications"}),"\n",(0,r.jsx)(t.li,{children:"Mobile applications"}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Examples"}),":"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Three-tier architecture: Presentation layer, business logic layer, and data access layer."}),"\n",(0,r.jsx)(t.li,{children:"OSI model: Application layer, presentation layer, session layer, transport layer, network layer, data link layer, and physical layer."}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"client-server-architecture",children:"Client-Server Architecture"}),"\n",(0,r.jsx)(t.p,{children:"In client-server architecture, the system is divided into two parts: client and server."}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Benefits"}),(0,r.jsx)(t.th,{children:"Drawbacks"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"- Scalability: Allows for horizontal scaling by adding more servers."}),(0,r.jsx)(t.td,{children:"- Single Point of Failure: Server downtime can affect all connected clients."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"- Centralized Data Management: Easier to manage and secure data on centralized servers."}),(0,r.jsx)(t.td,{children:"- Network Dependency: Performance can be impacted by network latency and reliability."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"- Separation of Concerns: Client and server responsibilities are clearly separated."}),(0,r.jsx)(t.td,{})]})]})]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Use Cases"}),":"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Web applications"}),"\n",(0,r.jsx)(t.li,{children:"Mobile applications"}),"\n",(0,r.jsx)(t.li,{children:"Networked systems"}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Examples"}),":"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Web browsers (clients) interacting with web servers (servers)"}),"\n",(0,r.jsx)(t.li,{children:"Mobile apps (clients) communicating with backend servers (servers)"}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"model-view-controller-mvc",children:"Model-View-Controller (MVC)"}),"\n",(0,r.jsx)(t.p,{children:"MVC separates the application into three interconnected components: Model (data and business logic), View (presentation layer), and Controller (user input handling)."}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Benefits"}),(0,r.jsx)(t.th,{children:"Drawbacks"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"- Separation of Concerns: Clearly separates different aspects of the application."}),(0,r.jsx)(t.td,{children:"- Complexity: Can lead to increased complexity in large applications."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"- Testability: Each component can be tested independently."}),(0,r.jsx)(t.td,{children:"- Learning Curve: Requires understanding of the MVC pattern and its conventions."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"- Reusability: Encourages reuse of components across different views."}),(0,r.jsx)(t.td,{})]})]})]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Use Cases"}),":"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Web applications"}),"\n",(0,r.jsx)(t.li,{children:"GUI-based applications"}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Examples"}),":"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Ruby on Rails framework"}),"\n",(0,r.jsx)(t.li,{children:"Django framework"}),"\n",(0,r.jsx)(t.li,{children:"AngularJS framework"}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"microservices-architecture",children:"Microservices Architecture"}),"\n",(0,r.jsx)(t.p,{children:"Microservices architecture decomposes an application into a collection of loosely coupled services, each running independently and communicating through lightweight mechanisms like HTTP or messaging."}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Benefits"}),(0,r.jsx)(t.th,{children:"Drawbacks"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"- Scalability: Each service can be scaled independently based on demand."}),(0,r.jsx)(t.td,{children:"- Distributed Complexity: Managing multiple services introduces operational complexity."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"- Flexibility: Enables polyglot development, allowing teams to use different technologies for different services."}),(0,r.jsx)(t.td,{children:"- Data Consistency: Ensuring consistency across distributed data can be challenging."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"- Resilience: Failure in one service does not necessarily affect other services."}),(0,r.jsx)(t.td,{children:"- Network Overhead: Increased network communication compared to monolithic architectures."})]})]})]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Use Cases"}),":"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Large, complex applications"}),"\n",(0,r.jsx)(t.li,{children:"Applications with evolving requirements"}),"\n",(0,r.jsx)(t.li,{children:"Cloud-native applications"}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Examples"}),":"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Netflix"}),"\n",(0,r.jsx)(t.li,{children:"Amazon"}),"\n",(0,r.jsx)(t.li,{children:"Uber"}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"applying-architectural-patterns",children:"Applying Architectural Patterns"}),"\n",(0,r.jsx)(t.h3,{id:"scenario-based-selection",children:"Scenario-Based Selection"}),"\n",(0,r.jsx)(t.p,{children:"Selecting the right pattern depends on the specific requirements and constraints of the project. This section will provide guidance on how to match project requirements with appropriate architectural patterns by analyzing typical scenarios and case studies."}),"\n",(0,r.jsx)(t.h3,{id:"integration-challenges",children:"Integration Challenges"}),"\n",(0,r.jsx)(t.p,{children:"Integrating architectural patterns into existing systems can present challenges, including compatibility with existing architecture and the overhead of transitioning to a new pattern. Strategies for overcoming these challenges will be discussed, ensuring a smooth integration process."}),"\n",(0,r.jsx)(t.h3,{id:"future-proofing",children:"Future-Proofing"}),"\n",(0,r.jsx)(t.p,{children:"As technologies and business needs evolve, so too must the software architectures that support them. This section will explore how to design systems with flexibility and adaptability in mind, using architectural patterns that support easy modification and extension."}),"\n",(0,r.jsx)(t.p,{children:"By understanding and applying the appropriate architectural patterns, software architects and developers can build systems that are not only robust and scalable but also aligned with business goals and technological advancements. This chapter aims to provide a solid foundation in architectural patterns, enhancing your ability to design and implement effective software architectures."}),"\n",(0,r.jsx)(t.p,{children:"Overview of common patterns"}),"\n",(0,r.jsx)(t.p,{children:"Case Studies\nComparisons"})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>c});var r=n(6540);const i={},s=r.createContext(i);function a(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);