(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{196:function(e,t,a){"use strict";a.r(t);var n=a(15),r=a.n(n),o=a(0),i=a.n(o),l=a(86),c=a(200),s=a(201),u=a(197),m=a(206),h=(a(223),function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={activeIndex:null},t.handleOnClick=function(e){return t.state.activeIndex!==e?t.setState({activeIndex:e}):t.setState({activeIndex:null})},t}return r()(t,e),t.prototype.render=function(){var e=this,t=this.props.items,a=this.state.activeIndex;return i.a.createElement("div",{className:"accordion",id:"texts-17-accordion"},t.map(function(t,n){return i.a.createElement(i.a.Fragment,null,i.a.createElement("h3",{key:n,className:"mb-0 pr-3 py-2 caret-"+(n===a?"up":"down")+" font-weight-semibold",onClick:function(){return e.handleOnClick(n)}},t.title),i.a.createElement("div",{className:"border-bottom"},i.a.createElement("div",{className:n===a?"collapse show":"collapse"},t.paragraphs.map(function(e,t){return i.a.createElement("p",{key:t},e)}))))}))},t}(i.a.Component)),p=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.location,a=(e.title,"Acceptable Use Policy"),n="To prevent excessive, bad or unlawful usage of our service we implemented a Acceptable Use Policy. So we can provide the service within the technical limitations and give all of our users the experience they signed up for.";return i.a.createElement(s.a,{location:t},i.a.createElement(c.Helmet,null,i.a.createElement("title",null,a," - Playpost"),i.a.createElement("meta",{name:"description",content:n}),i.a.createElement("meta",{property:"og:title",content:a}),i.a.createElement("meta",{property:"og:description",content:n}),i.a.createElement("meta",{name:"twitter:card",content:a}),i.a.createElement("meta",{name:"twitter:title",content:a}),i.a.createElement("meta",{name:"twitter:description",content:n}),i.a.createElement("meta",{name:"robots",content:"noindex,follow"})),i.a.createElement(u.a,{title:a,description:n}),i.a.createElement("div",{className:"container mb-4"},i.a.createElement("div",{className:"row justify-content-center"},i.a.createElement("div",{className:"col-12 col-lg-8"},i.a.createElement(m.a,{label:"Updated: 01-07-2019 14:19"}),i.a.createElement("h2",null,"Technical Limitations"),i.a.createElement("p",null,"Other than making sure our service runs for every user accordingly, there are also technical limitations. These limitations are an external factor and not something Playpost can control."),i.a.createElement("p",null,"It's currently not possible to convert 150.000 or more characters to speech, per minute. This comes down to approximately 150 minutes of audio per minute."),i.a.createElement("p",null,"Due to this, we have to enforce a system-wide limit to stay below that and/or throttle usage."),i.a.createElement(h,{items:[{title:"When does the Acceptable Use Policy come into play?",paragraphs:["That depends on the heavy use of the platform as a whole. If the overall usage is within the technical limitations, nothing happens. If our systems detect a spike in usage, or heavy usage on a longer longer period of time, we will enforce this Acceptable Use Policy."]},{title:"What happens when the Acceptable Use Policy is enforced?",paragraphs:["Usage will be throttled and/or the user exceeding the limits will be prevented to convert article's to audio for the next 48 hours.","When a violation of our Code of Conduct is detected, a user risks account deletion.","You will always receive a message when this happens and you always haven an option to appeal."]}]}),i.a.createElement("h2",{class:"mt-5"},"Code Of Conduct"),i.a.createElement("p",null,"You agree to use our Service in accordance with the following acceptable use and code of conduct guidelines. In particular, you agree that you:"),i.a.createElement("ol",{class:"custom-ordered-list"},i.a.createElement("li",null,"Will not upload, copy, distribute, share, or otherwise use content that is unlawful, obscene, defamatory, libelous, harmful, hateful, harassing, bullying, pornographic, threatening, racially or ethnically offensive or abusive, that would violate another person's rights (including their intellectual property rights), constitute or encourage a criminal offense, give rise to civil liability, or violate any local, state, provincial, national or international law or regulation, or that is otherwise inappropriate;"),i.a.createElement("li",null,"Will not disclose your password or transfer your account to any third party, or allow any third party to access your account;"),i.a.createElement("li",null,'Will not access the Service by any means other than through the interface provided by us for use in accessing the Service. This includes not using or launching any automated system including, without limitation, any spider, robot (or "bot"), scraper or offline reader that accesses the Service in a way that sends more request messages to our servers in a given time period than a human reasonably can produce in the same time period.'),i.a.createElement("li",null,"Will not interfere with or disrupt the Service or servers or networks connected thereto, make the Service available over a network (other than our network) where it could be used by others or disobey any requirements, procedures, policies or regulations of networks connected to the Service;"),i.a.createElement("li",null,"Will not use the Service to artificially generate traffic or page links to a website or for any other purpose not intended;"),i.a.createElement("li",null,"Will not use the Service in a way that has any unlawful or fraudulent purpose or effect;"),i.a.createElement("li",null,"Will not translate, reverse engineer, decompile, disassemble, modify or create derivative works based on the Service, in whole or in part;"),i.a.createElement("li",null,"Will not circumvent, disable, violate or otherwise interfere with any security related feature of the Service;"),i.a.createElement("li",null,"Will not rent, lease, sublicense, transfer, sell, trade, resell or exploit for any commercial purposes any portion of the Service (including, without limitation, your account information, use of the Service or access to the Service;"),i.a.createElement("li",null,"Will not use your account for your own commercial purposes by sublicensing any rights granted by the Terms or, in any way, sharing the benefit of your account with others. Your account is non-transferrable and may only be used by you;"),i.a.createElement("li",null,"Will not use the Service in any way that violates the Terms, or that aids, encourages, or purports to authorize anyone else to violate the terms of this policy;"),i.a.createElement("li",null,"Will not use the Service in any way that intentionally or unintentionally violates any applicable local, state, provincial, national or international law, rule or regulation;")),i.a.createElement("p",{className:"mt-5"},"This Acceptable Use Policy is part of our"," ",i.a.createElement(l.Link,{to:"/terms"},"Terms & Conditions"),". Playpost has the right to change these reasonable usage limits at any time.")))))},t}(i.a.Component);t.default=p},197:function(e,t,a){"use strict";var n=a(15),r=a.n(n),o=a(0),i=a.n(o),l=(a(86),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.description;return i.a.createElement("div",{className:"bg-tint mb-5"},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"py-5"},i.a.createElement("div",{className:"row justify-content-center text-center py-3"},i.a.createElement("div",{className:"col-12 col-md-8"},i.a.createElement("h1",{className:"display-4 text-white"},t),i.a.createElement("p",{className:"lead mb-0 text-white-80"},a))))))},t}(i.a.Component));t.a=l},206:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(e){var t=e.label,a=e.colorClass,n=void 0===a?"badge-primary":a;return r.a.createElement("span",{class:"badge badge-pill "+n+" mb-4 font-weight-semibold"},t)}},223:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(e){var t=e.title,a=e.content,n=e.colorClass,o=void 0===n?"bg-light":n;return r.a.createElement("div",{className:"card "+o+" mb-4"},r.a.createElement("div",{className:"card-header"},r.a.createElement("h3",{className:"font-weight-semibold mb-0"},t)),r.a.createElement("div",{className:"card-body"},r.a.createElement("p",{className:"card-text"},a)))}}}]);
//# sourceMappingURL=component---src-pages-acceptable-use-policy-js-08bfbce54ea2cb0b8656.js.map