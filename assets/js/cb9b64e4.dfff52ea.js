"use strict";(self.webpackChunkwhitepaper=self.webpackChunkwhitepaper||[]).push([[196],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,h=d["".concat(p,".").concat(m)]||d[m]||c[m]||l;return n?a.createElement(h,o(o({ref:t},u),{},{components:n})):a.createElement(h,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},683:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return u},default:function(){return d}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),o=["components"],i={sidebar_position:4},p="Gameplay",s={unversionedId:"gameplay",id:"gameplay",isDocsHomePage:!1,title:"Gameplay",description:"At the core of the game, a battle is between at least 2 players (real players or bots) with each side having 3 nests: 2 side nests and a King's nest.",source:"@site/docs/gameplay.md",sourceDirName:".",slug:"/gameplay",permalink:"/gameplay",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Dinosaurs",permalink:"/dinosaurs"},next:{title:"Marketplace",permalink:"/marketplace"}},u=[{value:"PvE",id:"pve",children:[],level:2},{value:"PvP",id:"pvp",children:[],level:2},{value:"Tournaments",id:"tournaments",children:[],level:2}],c={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"gameplay"},"Gameplay"),(0,l.kt)("p",null,"At the core of the game, a battle is between at least 2 players (real players or bots) with each side having 3 nests: 2 side nests and a King's nest.\nThe goal of the game is to destroy more nests than your opponent when time runs out or getting an immediate win through destroying opponent's ",(0,l.kt)("inlineCode",{parentName:"p"},"King's nest"),"."),(0,l.kt)("p",null,"Play area will be divided into 2 sides on which each player can deploy their dinos on.\nThe deployed dinos will automatically move toward the nearest possible target to attack and move on to the next one once the previous one has been defeated.\nTo deploy a dino, players must use meat points (think mana) which replenish over time with the maximum cap of 10."),(0,l.kt)("h2",{id:"pve"},"PvE"),(0,l.kt)("p",null,"Players can go on expedition to find wild dino nests to attack.\nThere will be multiple wild nests that can be found on the map when players start an expedition.\nIf the player choose to attack a nest, a battle will begin with potential rewards as below"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Outcome"),(0,l.kt)("th",{parentName:"tr",align:null},"$FOSSIL"),(0,l.kt)("th",{parentName:"tr",align:null},"Artifact"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Win"),(0,l.kt)("td",{parentName:"tr",align:null},"dynamic value based on opponent's deck score and circulating tokens"),(0,l.kt)("td",{parentName:"tr",align:null},"1 random piece")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Loss"),(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"None")))),(0,l.kt)("p",null,"Battle rewards per win will be based on multiple factors:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Thresholding Mechanism, see ",(0,l.kt)("a",{parentName:"li",href:"./allocations_p2e#thresholding-mechanism"},"here")),(0,l.kt)("li",{parentName:"ul"},"Opponent's Deck score, the stronger the opponent is, the bigger rewards players get")),(0,l.kt)("h2",{id:"pvp"},"PvP"),(0,l.kt)("p",null,"If a player choose to have a PvP battle, they will be matched with another player who has a similar deck score.\nPlayer have to stake some $FOSSIL to play PvP mode, which will contribute towards the reward outcome of the battle.\nThe required stake amount will be determined automatically using a quadratic function of the player's deck score."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Outcome"),(0,l.kt)("th",{parentName:"tr",align:null},"$FOSSIL"),(0,l.kt)("th",{parentName:"tr",align:null},"Artifact"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Win"),(0,l.kt)("td",{parentName:"tr",align:null},"twice the staked amount"),(0,l.kt)("td",{parentName:"tr",align:null},"1 to 2 random piece")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Loss"),(0,l.kt)("td",{parentName:"tr",align:null},"-(staked amount)"),(0,l.kt)("td",{parentName:"tr",align:null},"None")))),(0,l.kt)("h2",{id:"tournaments"},"Tournaments"),(0,l.kt)("p",null,"There will be organised tournaments with prize pools from collected fees and possible sponsorships."))}d.isMDXComponent=!0}}]);