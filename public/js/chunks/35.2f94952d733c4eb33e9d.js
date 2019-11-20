(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{"4VKG":function(e,t,a){var s=a("TzbK");"string"==typeof s&&(s=[[e.i,s,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(s,o);s.locals&&(e.exports=s.locals)},TzbK:function(e,t,a){var s=a("sEG9");(e.exports=a("I1BE")(!1)).push([e.i,"#faq-page .faq-jumbotron-content {\n  background-image: url("+s(a("zp6d"))+");\n  background-size: cover;\n}\n#faq-page .faq-bg {\n  background-color: #fff;\n}",""])},l4ca:function(e,t,a){"use strict";a.r(t);var s={data:function(){return{faqSearchQuery:"",faqFilter:1,categories:[{id:1,name:"All",color:"grey"},{id:2,name:"General",color:"primary"},{id:3,name:"Licenses",color:"success"},{id:4,name:"Company usage",color:"warning"},{id:5,name:"Trademark use",color:"danger"}],faqs:[{id:1,categoryId:2,question:"What does royalty free mean?",ans:"Royalty free means you just need to pay for rights to use the item once per end product. You don't need to pay additional or ongoing fees for each person who sees or uses it. Please note that there may be some limits placed on uses under the different license types available on the marketplaces, such as our Photo and Music Licenses."},{id:2,categoryId:2,question:"What do you mean by item and end product?",ans:"The item is what you purchase from Envato Market. The end product is what you build with that item. Example: The item is a business card template; the end product is the finalized business card. The item is a button graphic; the end product is an app using the button graphic in the app's interface."},{id:3,categoryId:2,question:"Am I allowed to modify the item that I purchased?",ans:"Yes. You can customize our items to fit the needs of your end product. Example: You could change the colors, text, and layout of a flyer template or convert an HTML template into a WordPress theme for a single client."},{id:4,categoryId:2,question:"What does non-exclusive mean?",ans:"Non-exclusive means that you are not the only person with access to the item. Others will also be licensing and using the same item."},{id:5,categoryId:3,question:"Is the Regular License the same thing as an editorial license?",ans:"No, our Regular License is for a free end product (whether or not the item is used in the end product in an editorial way). And our Extended License is for an end product that's sold (whether or not the item is used in the end product in an editorial way). If you want to use an item in an editorial way in your end product, choose the Regular License if your end product is distributed for free, and choose the Extended License if your end product is sold to the end customer."},{id:6,categoryId:3,question:"Which license do I need for an end product that is only accessible to paying users?",ans:"If the end users need to pay to see the end product, you need an Extended License. There can be more than one end user as long as there is only one end product. Example: A website that requires money before you can access the content."},{id:7,categoryId:3,question:"Which license do I need to use an item in a commercial?",ans:"You only need a Regular License where the end product is an advertisement, as the audience does not have to pay to view it. It doesn't matter if the advertisement is for things that are being sold. Example: An After Effects template used to produce a TV commercial would only need the Regular License"},{id:8,categoryId:3,question:"Can I re-distribute an item? What about under an Extended License?",ans:"No. You can't license items and then make them available to others \"as-is\" (that is, as a stand-alone item or as stock), regardless of which license you purchase. Example: You can't buy a business card template and distribute it as a template, source files and all."},{id:9,categoryId:4,question:"Can multiple people within my company have access to the item?",ans:"Yes. If you purchased a single-use license, access should only be given to people working on the single end product incorporating that item."},{id:10,categoryId:4,question:"Can I store the item on an intranet so everyone has access?",ans:"No, items must be stored in a location where only those who need them have access. If you purchased a single-use license, once the item has been used in a single end product, the only place you should store it is in the archive files for that end product."},{id:11,categoryId:5,question:"Does this apply to all items from Envato Market?",ans:"No. This only applies to items with real-world products and trademarks in the actual item. This is most likely in product mock-ups (graphics items), product promos (motion graphics project files) and 3D items. This does not apply to PhotoDune items, which are available for commercial use. This also does not apply to images of products and trademarks used illustratively in item previews, as they're not included in the item you download."},{id:12,categoryId:5,question:"What does 'editorial use' mean?",ans:"Editorial use means using an item only for news or journalistic purposes like in blogs, magazine and newspaper editorial applications."},{id:13,categoryId:5,question:"Is this item still 'royalty free'?",ans:"Yes. Royalty free means you pay for the item once for each end product, and you don't need to pay any additional or ongoing fees for each person who sees or uses it. This is separate to whether you need a clearance from the owner of rights in the real world product or trademark within an item."}],supporters:[{id:1,img:a("1954"),name:"Boyce Shene",profession:"Web Developer"},{id:2,img:a("+zr+"),name:"Margie Sevy",profession:"Web Designer"},{id:3,img:a("arT4"),name:"Cyndi Navas",profession:"Web Developer"},{id:4,img:a("q/h9"),name:"Chi Petrusky",profession:"Web Developer"},{id:5,img:a("Enxu"),name:"Shanel Dumag",profession:"Web Designer"}]}},computed:{filteredFaq:function(){var e=this;return this.faqs.filter((function(t){return 1==e.faqFilter?t.question.toLowerCase().includes(e.faqSearchQuery.toLowerCase())||t.ans.toLowerCase().includes(e.faqSearchQuery.toLowerCase()):2==e.faqFilter?2==t.categoryId&&(t.question.toLowerCase().includes(e.faqSearchQuery.toLowerCase())||t.ans.toLowerCase().includes(e.faqSearchQuery.toLowerCase())):3==e.faqFilter?3==t.categoryId&&(t.question.toLowerCase().includes(e.faqSearchQuery.toLowerCase())||t.ans.toLowerCase().includes(e.faqSearchQuery.toLowerCase())):4==e.faqFilter?4==t.categoryId&&(t.question.toLowerCase().includes(e.faqSearchQuery.toLowerCase())||t.ans.toLowerCase().includes(e.faqSearchQuery.toLowerCase())):5==e.faqFilter?5==t.categoryId&&(t.question.toLowerCase().includes(e.faqSearchQuery.toLowerCase())||t.ans.toLowerCase().includes(e.faqSearchQuery.toLowerCase())):void 0}))}},methods:{},components:{}},o=(a("yFwR"),a("KHd+")),n=Object(o.a)(s,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"faq-page"}},[a("div",{staticClass:"faq-jumbotron"},[a("div",{staticClass:"faq-jumbotron-content lg:p-32 md:p-24 sm:p-16 p-8 rounded-lg mb-base"},[a("h1",{staticClass:"mb-1 text-white"},[e._v("Have Any Questions?")]),e._v(" "),a("p",{staticClass:"text-white"},[e._v("Bonbon sesame snaps lemon drops marshmallow ice cream carrot cake croissant wafer.")]),e._v(" "),a("vs-input",{staticClass:"w-full mt-6",attrs:{placeholder:"Search","icon-pack":"feather",icon:"icon-search",size:"large","icon-no-border":""},model:{value:e.faqSearchQuery,callback:function(t){e.faqSearchQuery=t},expression:"faqSearchQuery"}})],1)]),e._v(" "),a("div",{staticClass:"vx-row"},[a("div",{staticClass:"vx-col w-full md:w-2/5 lg:w-1/4 rounded-lg"},[a("vx-card",[a("h4",[e._v("Table of Content")]),e._v(" "),a("ul",{staticClass:"faq-topics mt-4"},e._l(e.categories,(function(t){return a("li",{key:t.id,staticClass:"p-2 font-medium flex items-center",on:{click:function(a){e.faqFilter=t.id}}},[a("div",{staticClass:"h-3 w-3 rounded-full mr-2",class:"bg-"+t.color}),a("span",{staticClass:"cursor-pointer"},[e._v(e._s(t.name))])])})),0),e._v(" "),a("br"),a("br"),e._v(" "),a("h4",[e._v("Supporters")]),e._v(" "),a("ul",{staticClass:"faq-supporters mt-4"},e._l(e.supporters,(function(t){return a("li",{key:t.id,staticClass:"mt-4"},[a("div",{staticClass:"flex items-center"},[a("vs-avatar",{staticClass:"mr-3",attrs:{src:t.img,size:"35px"}}),e._v(" "),a("div",{staticClass:"leading-tight"},[a("p",{staticClass:"font-semibold"},[e._v(e._s(t.name))]),e._v(" "),a("small",[e._v(e._s(t.profession))])])],1)])})),0)])],1),e._v(" "),a("div",{staticClass:"vx-col w-full md:w-3/5 lg:w-3/4 mt-12 md:mt-0"},[a("vs-collapse",{staticClass:"p-0",attrs:{accordion:"",type:"margin"}},e._l(e.filteredFaq,(function(t,s){return a("vs-collapse-item",{key:t.id,staticClass:"faq-bg rounded-lg",class:{"mt-0":!s}},[a("div",{attrs:{slot:"header"},slot:"header"},[a("h5",[e._v(e._s(t.question))])]),e._v(" "),a("p",[e._v(e._s(t.ans))])])})),1)],1)])])}),[],!1,null,null,null);t.default=n.exports},yFwR:function(e,t,a){"use strict";var s=a("4VKG");a.n(s).a},zp6d:function(e,t){e.exports="/demo/vuexy-vuejs-laravel-admin-template/demo-4/images/faq.jpg?8e0b3142b57a84b707601af3410dff91"}}]);