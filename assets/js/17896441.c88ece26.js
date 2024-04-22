"use strict";(self.webpackChunksoftware_architecture=self.webpackChunksoftware_architecture||[]).push([[401],{1379:(e,t,s)=>{s.r(t),s.d(t,{default:()=>pe});var a=s(6540),n=s(1003),i=s(9532),l=s(4848);const o=a.createContext(null);function r(e){let{children:t,content:s}=e;const n=function(e){return(0,a.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(s);return(0,l.jsx)(o.Provider,{value:n,children:t})}function c(){const e=(0,a.useContext)(o);if(null===e)throw new i.dV("DocProvider");return e}function d(){const{metadata:e,frontMatter:t,assets:s}=c();return(0,l.jsx)(n.be,{title:e.title,description:e.description,keywords:t.keywords,image:s.image??t.image})}var u=s(4164),h=s(4581),m=s(1312),b=s(8774);function p(e){const{permalink:t,title:s,subLabel:a,isNext:n}=e;return(0,l.jsxs)(b.A,{className:(0,u.A)("pagination-nav__link",n?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[a&&(0,l.jsx)("div",{className:"pagination-nav__sublabel",children:a}),(0,l.jsx)("div",{className:"pagination-nav__label",children:s})]})}function x(e){const{previous:t,next:s}=e;return(0,l.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,m.T)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"}),children:[t&&(0,l.jsx)(p,{...t,subLabel:(0,l.jsx)(m.A,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc",children:"Previous"})}),s&&(0,l.jsx)(p,{...s,subLabel:(0,l.jsx)(m.A,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc",children:"Next"}),isNext:!0})]})}function g(){const{metadata:e}=c();return(0,l.jsx)(x,{previous:e.previous,next:e.next})}var v=s(4586),j=s(4070),f=s(7559),A=s(5597),_=s(2252);const N={unreleased:function(e){let{siteTitle:t,versionMetadata:s}=e;return(0,l.jsx)(m.A,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:(0,l.jsx)("b",{children:s.label})},children:"This is unreleased documentation for {siteTitle} {versionLabel} version."})},unmaintained:function(e){let{siteTitle:t,versionMetadata:s}=e;return(0,l.jsx)(m.A,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:(0,l.jsx)("b",{children:s.label})},children:"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained."})}};function C(e){const t=N[e.versionMetadata.banner];return(0,l.jsx)(t,{...e})}function T(e){let{versionLabel:t,to:s,onClick:a}=e;return(0,l.jsx)(m.A,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:(0,l.jsx)("b",{children:(0,l.jsx)(b.A,{to:s,onClick:a,children:(0,l.jsx)(m.A,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label",children:"latest version"})})})},children:"For up-to-date documentation, see the {latestVersionLink} ({versionLabel})."})}function L(e){let{className:t,versionMetadata:s}=e;const{siteConfig:{title:a}}=(0,v.A)(),{pluginId:n}=(0,j.vT)({failfast:!0}),{savePreferredVersionName:i}=(0,A.g1)(n),{latestDocSuggestion:o,latestVersionSuggestion:r}=(0,j.HW)(n),c=o??(d=r).docs.find((e=>e.id===d.mainDocId));var d;return(0,l.jsxs)("div",{className:(0,u.A)(t,f.G.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert",children:[(0,l.jsx)("div",{children:(0,l.jsx)(C,{siteTitle:a,versionMetadata:s})}),(0,l.jsx)("div",{className:"margin-top--md",children:(0,l.jsx)(T,{versionLabel:r.label,to:c.path,onClick:()=>i(r.name)})})]})}function k(e){let{className:t}=e;const s=(0,_.r)();return s.banner?(0,l.jsx)(L,{className:t,versionMetadata:s}):null}function w(e){let{className:t}=e;const s=(0,_.r)();return s.badge?(0,l.jsx)("span",{className:(0,u.A)(t,f.G.docs.docVersionBadge,"badge badge--secondary"),children:(0,l.jsx)(m.A,{id:"theme.docs.versionBadge.label",values:{versionLabel:s.label},children:"Version: {versionLabel}"})}):null}const U={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};function y(e){let{permalink:t,label:s,count:a}=e;return(0,l.jsxs)(b.A,{href:t,className:(0,u.A)(U.tag,a?U.tagWithCount:U.tagRegular),children:[s,a&&(0,l.jsx)("span",{children:a})]})}const M={tags:"tags_jXut",tag:"tag_QGVx"};function B(e){let{tags:t}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("b",{children:(0,l.jsx)(m.A,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,l.jsx)("ul",{className:(0,u.A)(M.tags,"padding--none","margin-left--sm"),children:t.map((e=>{let{label:t,permalink:s}=e;return(0,l.jsx)("li",{className:M.tag,children:(0,l.jsx)(y,{label:t,permalink:s})},s)}))})]})}const I={iconEdit:"iconEdit_Z9Sw"};function V(e){let{className:t,...s}=e;return(0,l.jsx)("svg",{fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,u.A)(I.iconEdit,t),"aria-hidden":"true",...s,children:(0,l.jsx)("g",{children:(0,l.jsx)("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})})})}function E(e){let{editUrl:t}=e;return(0,l.jsxs)(b.A,{to:t,className:f.G.common.editThisPage,children:[(0,l.jsx)(V,{}),(0,l.jsx)(m.A,{id:"theme.common.editThisPage",description:"The link label to edit the current page",children:"Edit this page"})]})}function H(e){void 0===e&&(e={});const{i18n:{currentLocale:t}}=(0,v.A)(),s=function(){const{i18n:{currentLocale:e,localeConfigs:t}}=(0,v.A)();return t[e].calendar}();return new Intl.DateTimeFormat(t,{calendar:s,...e})}function G(e){let{lastUpdatedAt:t}=e;const s=new Date(t),a=H({day:"numeric",month:"short",year:"numeric",timeZone:"UTC"}).format(s);return(0,l.jsx)(m.A,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:(0,l.jsx)("b",{children:(0,l.jsx)("time",{dateTime:s.toISOString(),itemProp:"dateModified",children:a})})},children:" on {date}"})}function P(e){let{lastUpdatedBy:t}=e;return(0,l.jsx)(m.A,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:(0,l.jsx)("b",{children:t})},children:" by {user}"})}function D(e){let{lastUpdatedAt:t,lastUpdatedBy:s}=e;return(0,l.jsxs)("span",{className:f.G.common.lastUpdated,children:[(0,l.jsx)(m.A,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t?(0,l.jsx)(G,{lastUpdatedAt:t}):"",byUser:s?(0,l.jsx)(P,{lastUpdatedBy:s}):""},children:"Last updated{atDate}{byUser}"}),!1]})}const S={lastUpdated:"lastUpdated_JAkA"};function F(e){let{className:t,editUrl:s,lastUpdatedAt:a,lastUpdatedBy:n}=e;return(0,l.jsxs)("div",{className:(0,u.A)("row",t),children:[(0,l.jsx)("div",{className:"col",children:s&&(0,l.jsx)(E,{editUrl:s})}),(0,l.jsx)("div",{className:(0,u.A)("col",S.lastUpdated),children:(a||n)&&(0,l.jsx)(D,{lastUpdatedAt:a,lastUpdatedBy:n})})]})}function R(){const{metadata:e}=c(),{editUrl:t,lastUpdatedAt:s,lastUpdatedBy:a,tags:n}=e,i=n.length>0,o=!!(t||s||a);return i||o?(0,l.jsxs)("footer",{className:(0,u.A)(f.G.docs.docFooter,"docusaurus-mt-lg"),children:[i&&(0,l.jsx)("div",{className:(0,u.A)("row margin-top--sm",f.G.docs.docFooterTagsRow),children:(0,l.jsx)("div",{className:"col",children:(0,l.jsx)(B,{tags:n})})}),o&&(0,l.jsx)(F,{className:(0,u.A)("margin-top--sm",f.G.docs.docFooterEditMetaRow),editUrl:t,lastUpdatedAt:s,lastUpdatedBy:a})]}):null}var O=s(1422),z=s(5195);const W={tocCollapsibleButton:"tocCollapsibleButton_TO0P",tocCollapsibleButtonExpanded:"tocCollapsibleButtonExpanded_MG3E"};function Z(e){let{collapsed:t,...s}=e;return(0,l.jsx)("button",{type:"button",...s,className:(0,u.A)("clean-btn",W.tocCollapsibleButton,!t&&W.tocCollapsibleButtonExpanded,s.className),children:(0,l.jsx)(m.A,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component",children:"On this page"})})}const q={tocCollapsible:"tocCollapsible_ETCw",tocCollapsibleContent:"tocCollapsibleContent_vkbj",tocCollapsibleExpanded:"tocCollapsibleExpanded_sAul"};function J(e){let{toc:t,className:s,minHeadingLevel:a,maxHeadingLevel:n}=e;const{collapsed:i,toggleCollapsed:o}=(0,O.u)({initialState:!0});return(0,l.jsxs)("div",{className:(0,u.A)(q.tocCollapsible,!i&&q.tocCollapsibleExpanded,s),children:[(0,l.jsx)(Z,{collapsed:i,onClick:o}),(0,l.jsx)(O.N,{lazy:!0,className:q.tocCollapsibleContent,collapsed:i,children:(0,l.jsx)(z.A,{toc:t,minHeadingLevel:a,maxHeadingLevel:n})})]})}const Q={tocMobile:"tocMobile_ITEo"};function X(){const{toc:e,frontMatter:t}=c();return(0,l.jsx)(J,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,u.A)(f.G.docs.docTocMobile,Q.tocMobile)})}var Y=s(7763);function $(){const{toc:e,frontMatter:t}=c();return(0,l.jsx)(Y.A,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:f.G.docs.docTocDesktop})}var K=s(1107),ee=s(5533);function te(e){let{children:t}=e;const s=function(){const{metadata:e,frontMatter:t,contentTitle:s}=c();return t.hide_title||void 0!==s?null:e.title}();return(0,l.jsxs)("div",{className:(0,u.A)(f.G.docs.docMarkdown,"markdown"),children:[s&&(0,l.jsx)("header",{children:(0,l.jsx)(K.A,{as:"h1",children:s})}),(0,l.jsx)(ee.A,{children:t})]})}var se=s(1754),ae=s(9169),ne=s(6025);function ie(e){return(0,l.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,l.jsx)("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"})})}const le={breadcrumbHomeIcon:"breadcrumbHomeIcon_YNFT"};function oe(){const e=(0,ne.A)("/");return(0,l.jsx)("li",{className:"breadcrumbs__item",children:(0,l.jsx)(b.A,{"aria-label":(0,m.T)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e,children:(0,l.jsx)(ie,{className:le.breadcrumbHomeIcon})})})}const re={breadcrumbsContainer:"breadcrumbsContainer_Z_bl"};function ce(e){let{children:t,href:s,isLast:a}=e;const n="breadcrumbs__link";return a?(0,l.jsx)("span",{className:n,itemProp:"name",children:t}):s?(0,l.jsx)(b.A,{className:n,href:s,itemProp:"item",children:(0,l.jsx)("span",{itemProp:"name",children:t})}):(0,l.jsx)("span",{className:n,children:t})}function de(e){let{children:t,active:s,index:a,addMicrodata:n}=e;return(0,l.jsxs)("li",{...n&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},className:(0,u.A)("breadcrumbs__item",{"breadcrumbs__item--active":s}),children:[t,(0,l.jsx)("meta",{itemProp:"position",content:String(a+1)})]})}function ue(){const e=(0,se.OF)(),t=(0,ae.Dt)();return e?(0,l.jsx)("nav",{className:(0,u.A)(f.G.docs.docBreadcrumbs,re.breadcrumbsContainer),"aria-label":(0,m.T)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"}),children:(0,l.jsxs)("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList",children:[t&&(0,l.jsx)(oe,{}),e.map(((t,s)=>{const a=s===e.length-1,n="category"===t.type&&t.linkUnlisted?void 0:t.href;return(0,l.jsx)(de,{active:a,index:s,addMicrodata:!!n,children:(0,l.jsx)(ce,{href:n,isLast:a,children:t.label})},s)}))]})}):null}var he=s(996);const me={docItemContainer:"docItemContainer_Djhp",docItemCol:"docItemCol_VOVn"};function be(e){let{children:t}=e;const s=function(){const{frontMatter:e,toc:t}=c(),s=(0,h.l)(),a=e.hide_table_of_contents,n=!a&&t.length>0;return{hidden:a,mobile:n?(0,l.jsx)(X,{}):void 0,desktop:!n||"desktop"!==s&&"ssr"!==s?void 0:(0,l.jsx)($,{})}}(),{metadata:{unlisted:a}}=c();return(0,l.jsxs)("div",{className:"row",children:[(0,l.jsxs)("div",{className:(0,u.A)("col",!s.hidden&&me.docItemCol),children:[a&&(0,l.jsx)(he.A,{}),(0,l.jsx)(k,{}),(0,l.jsxs)("div",{className:me.docItemContainer,children:[(0,l.jsxs)("article",{children:[(0,l.jsx)(ue,{}),(0,l.jsx)(w,{}),s.mobile,(0,l.jsx)(te,{children:t}),(0,l.jsx)(R,{})]}),(0,l.jsx)(g,{})]})]}),s.desktop&&(0,l.jsx)("div",{className:"col col--3",children:s.desktop})]})}function pe(e){const t=`docs-doc-id-${e.content.metadata.id}`,s=e.content;return(0,l.jsx)(r,{content:e.content,children:(0,l.jsxs)(n.e3,{className:t,children:[(0,l.jsx)(d,{}),(0,l.jsx)(be,{children:(0,l.jsx)(s,{})})]})})}}}]);