"use strict";(self.webpackChunknextcloud=self.webpackChunknextcloud||[]).push([[3235],{52548:(e,t,i)=>{i.d(t,{A:()=>s});var a=i(71354),n=i.n(a),l=i(76314),r=i.n(l)()(n());r.push([e.id,".template-field-modal__content[data-v-27d5e38c]{padding:calc(var(--default-grid-baseline)*4)}.template-field-modal__content h3[data-v-27d5e38c]{text-align:center}.template-field-modal__buttons[data-v-27d5e38c]{display:flex;justify-content:flex-end;gap:var(--default-grid-baseline);margin:calc(var(--default-grid-baseline)*4);margin-top:0}","",{version:3,sources:["webpack://./apps/files/src/components/TemplateFiller.vue"],names:[],mappings:"AAGA,gDACC,4CAHc,CAKd,mDACC,iBAAA,CAIF,gDACC,YAAA,CACA,wBAAA,CACA,gCAAA,CACA,2CAdc,CAed,YAAA",sourcesContent:["\n$modal-margin: calc(var(--default-grid-baseline) * 4);\n\n.template-field-modal__content {\n\tpadding: $modal-margin;\n\n\th3 {\n\t\ttext-align: center;\n\t}\n}\n\n.template-field-modal__buttons {\n\tdisplay: flex;\n\tjustify-content: flex-end;\n\tgap: var(--default-grid-baseline);\n\tmargin: $modal-margin;\n\tmargin-top: 0;\n}\n"],sourceRoot:""}]);const s=r},6718:(e,t,i)=>{i.d(t,{A:()=>s});var a=i(71354),n=i.n(a),l=i(76314),r=i.n(l)()(n());r.push([e.id,".template-field__checkbox[data-v-0de18be4]{margin:20px 0}","",{version:3,sources:["webpack://./apps/files/src/components/TemplateFiller/TemplateCheckboxField.vue"],names:[],mappings:"AACA,2CACE,aAAA",sourcesContent:["\n.template-field__checkbox {\n  margin: 20px 0;\n}\n"],sourceRoot:""}]);const s=r},43337:(e,t,i)=>{i.d(t,{A:()=>s});var a=i(71354),n=i.n(a),l=i(76314),r=i.n(l)()(n());r.push([e.id,".template-field__text[data-v-2495971e]{margin:20px 0}.template-field__text label[data-v-2495971e]{font-weight:bold}","",{version:3,sources:["webpack://./apps/files/src/components/TemplateFiller/TemplateRichTextField.vue"],names:[],mappings:"AACA,uCACC,aAAA,CAEA,6CACC,gBAAA",sourcesContent:["\n.template-field__text {\n\tmargin: 20px 0;\n\n\tlabel {\n\t\tfont-weight: bold;\n\t}\n}\n"],sourceRoot:""}]);const s=r},48590:(e,t,i)=>{i.d(t,{A:()=>s});var a=i(71354),n=i.n(a),l=i(76314),r=i.n(l)()(n());r.push([e.id,".template-picker__item[data-v-1ef48b0a]{display:flex}.template-picker__label[data-v-1ef48b0a]{display:flex;align-items:center;flex:1 1;flex-direction:column}.template-picker__label[data-v-1ef48b0a],.template-picker__label *[data-v-1ef48b0a]{cursor:pointer;user-select:none}.template-picker__label[data-v-1ef48b0a]::before{display:none !important}.template-picker__preview[data-v-1ef48b0a]{display:block;overflow:hidden;flex:1 1;width:var(--width);min-height:var(--height);max-height:var(--height);padding:0;border:var(--border) solid var(--color-border);border-radius:var(--border-radius-large)}input:checked+label>.template-picker__preview[data-v-1ef48b0a]{border-color:var(--color-primary-element)}.template-picker__preview--failed[data-v-1ef48b0a]{display:flex}.template-picker__image[data-v-1ef48b0a]{max-width:100%;background-color:var(--color-main-background);object-fit:cover}.template-picker__preview--failed .template-picker__image[data-v-1ef48b0a]{width:calc(var(--margin)*8);margin:auto;background-color:rgba(0,0,0,0) !important;object-fit:initial}.template-picker__title[data-v-1ef48b0a]{overflow:hidden;max-width:calc(var(--width) + 4px);padding:var(--margin);white-space:nowrap;text-overflow:ellipsis}","",{version:3,sources:["webpack://./apps/files/src/components/TemplatePreview.vue"],names:[],mappings:"AAGC,wCACC,YAAA,CAGD,yCACC,YAAA,CAEA,kBAAA,CACA,QAAA,CACA,qBAAA,CAEA,oFACC,cAAA,CACA,gBAAA,CAGD,iDACC,uBAAA,CAIF,2CACC,aAAA,CACA,eAAA,CAEA,QAAA,CACA,kBAAA,CACA,wBAAA,CACA,wBAAA,CACA,SAAA,CACA,8CAAA,CACA,wCAAA,CAEA,+DACC,yCAAA,CAGD,mDAEC,YAAA,CAIF,yCACC,cAAA,CACA,6CAAA,CAEA,gBAAA,CAID,2EACC,2BAAA,CAEA,WAAA,CACA,yCAAA,CAEA,kBAAA,CAGD,yCACC,eAAA,CAEA,kCAAA,CACA,qBAAA,CACA,kBAAA,CACA,sBAAA",sourcesContent:["\n\n.template-picker {\n\t&__item {\n\t\tdisplay: flex;\n\t}\n\n\t&__label {\n\t\tdisplay: flex;\n\t\t// Align in the middle of the grid\n\t\talign-items: center;\n\t\tflex: 1 1;\n\t\tflex-direction: column;\n\n\t\t&, * {\n\t\t\tcursor: pointer;\n\t\t\tuser-select: none;\n\t\t}\n\n\t\t&::before {\n\t\t\tdisplay: none !important;\n\t\t}\n\t}\n\n\t&__preview {\n\t\tdisplay: block;\n\t\toverflow: hidden;\n\t\t// Stretch so all entries are the same width\n\t\tflex: 1 1;\n\t\twidth: var(--width);\n\t\tmin-height: var(--height);\n\t\tmax-height: var(--height);\n\t\tpadding: 0;\n\t\tborder: var(--border) solid var(--color-border);\n\t\tborder-radius: var(--border-radius-large);\n\n\t\tinput:checked + label > & {\n\t\t\tborder-color: var(--color-primary-element);\n\t\t}\n\n\t\t&--failed {\n\t\t\t// Make sure to properly center fallback icon\n\t\t\tdisplay: flex;\n\t\t}\n\t}\n\n\t&__image {\n\t\tmax-width: 100%;\n\t\tbackground-color: var(--color-main-background);\n\n\t\tobject-fit: cover;\n\t}\n\n\t// Failed preview, fallback to mime icon\n\t&__preview--failed &__image {\n\t\twidth: calc(var(--margin) * 8);\n\t\t// Center mime icon\n\t\tmargin: auto;\n\t\tbackground-color: transparent !important;\n\n\t\tobject-fit: initial;\n\t}\n\n\t&__title {\n\t\toverflow: hidden;\n\t\t// also count preview border\n\t\tmax-width: calc(var(--width) + 2*2px);\n\t\tpadding: var(--margin);\n\t\twhite-space: nowrap;\n\t\ttext-overflow: ellipsis;\n\t}\n}\n\n"],sourceRoot:""}]);const s=r},89985:(e,t,i)=>{i.d(t,{A:()=>s});var a=i(71354),n=i.n(a),l=i(76314),r=i.n(l)()(n());r.push([e.id,".templates-picker__form[data-v-ef629ca2]{padding:calc(var(--margin)*2);padding-bottom:0}.templates-picker__form h2[data-v-ef629ca2]{text-align:center;font-weight:bold;margin:var(--margin) 0 calc(var(--margin)*2)}.templates-picker__list[data-v-ef629ca2]{display:grid;grid-gap:calc(var(--margin)*2);grid-auto-columns:1fr;max-width:calc(var(--fullwidth)*6);grid-template-columns:repeat(auto-fit, var(--fullwidth));grid-auto-rows:1fr;justify-content:center}.templates-picker__buttons[data-v-ef629ca2]{display:flex;justify-content:end;padding:calc(var(--margin)*2) var(--margin);position:sticky;bottom:0;background-image:linear-gradient(0, var(--gradient-main-background))}.templates-picker__buttons button[data-v-ef629ca2],.templates-picker__buttons input[type=submit][data-v-ef629ca2]{height:44px}.templates-picker[data-v-ef629ca2] .modal-container{position:relative}.templates-picker__loading[data-v-ef629ca2]{position:absolute;top:0;left:0;justify-content:center;width:100%;height:100%;margin:0;background-color:var(--color-main-background-translucent)}","",{version:3,sources:["webpack://./apps/files/src/views/TemplatePicker.vue"],names:[],mappings:"AAEC,yCACC,6BAAA,CAEA,gBAAA,CAEA,4CACC,iBAAA,CACA,gBAAA,CACA,4CAAA,CAIF,yCACC,YAAA,CACA,8BAAA,CACA,qBAAA,CAEA,kCAAA,CACA,wDAAA,CAEA,kBAAA,CAEA,sBAAA,CAGD,4CACC,YAAA,CACA,mBAAA,CACA,2CAAA,CACA,eAAA,CACA,QAAA,CACA,oEAAA,CAEA,kHACC,WAAA,CAKF,oDACC,iBAAA,CAGD,4CACC,iBAAA,CACA,KAAA,CACA,MAAA,CACA,sBAAA,CACA,UAAA,CACA,WAAA,CACA,QAAA,CACA,yDAAA",sourcesContent:["\n.templates-picker {\n\t&__form {\n\t\tpadding: calc(var(--margin) * 2);\n\t\t// Will be handled by the buttons\n\t\tpadding-bottom: 0;\n\n\t\th2 {\n\t\t\ttext-align: center;\n\t\t\tfont-weight: bold;\n\t\t\tmargin: var(--margin) 0 calc(var(--margin) * 2);\n\t\t}\n\t}\n\n\t&__list {\n\t\tdisplay: grid;\n\t\tgrid-gap: calc(var(--margin) * 2);\n\t\tgrid-auto-columns: 1fr;\n\t\t// We want maximum 5 columns. Putting 6 as we don't count the grid gap. So it will always be lower than 6\n\t\tmax-width: calc(var(--fullwidth) * 6);\n\t\tgrid-template-columns: repeat(auto-fit, var(--fullwidth));\n\t\t// Make sure all rows are the same height\n\t\tgrid-auto-rows: 1fr;\n\t\t// Center the columns set\n\t\tjustify-content: center;\n\t}\n\n\t&__buttons {\n\t\tdisplay: flex;\n\t\tjustify-content: end;\n\t\tpadding: calc(var(--margin) * 2) var(--margin);\n\t\tposition: sticky;\n\t\tbottom: 0;\n\t\tbackground-image: linear-gradient(0, var(--gradient-main-background));\n\n\t\tbutton, input[type='submit'] {\n\t\t\theight: 44px;\n\t\t}\n\t}\n\n\t// Make sure we're relative for the loading emptycontent on top\n\t::v-deep .modal-container {\n\t\tposition: relative;\n\t}\n\n\t&__loading {\n\t\tposition: absolute;\n\t\ttop: 0;\n\t\tleft: 0;\n\t\tjustify-content: center;\n\t\twidth: 100%;\n\t\theight: 100%;\n\t\tmargin: 0;\n\t\tbackground-color: var(--color-main-background-translucent);\n\t}\n}\n\n"],sourceRoot:""}]);const s=r},95013:(e,t,i)=>{i.r(t),i.d(t,{default:()=>Y});var a=i(21777),n=i(85168),l=i(61338),r=i(35810),s=i(53334),o=i(63814),d=i(43627),c=i(85471),p=i(65043),A=i(34196),m=i(68567),h=i(71225);const u={name:"TemplatePreview",inheritAttrs:!1,props:{basename:{type:String,required:!0},checked:{type:Boolean,default:!1},fileid:{type:[String,Number],required:!0},filename:{type:String,required:!0},previewUrl:{type:String,default:null},hasPreview:{type:Boolean,default:!0},mime:{type:String,required:!0},ratio:{type:Number,default:null}},data:()=>({failedPreview:!1}),computed:{nameWithoutExt(){return this.basename.indexOf(".")>-1?this.basename.split(".").slice(0,-1).join("."):this.basename},id(){return`template-picker-${this.fileid}`},realPreviewUrl(){return this.failedPreview&&this.mimeIcon?this.mimeIcon:this.previewUrl?this.previewUrl:(0,a.HW)()?(0,o.Jv)(`/core/preview?fileId=${this.fileid}&x=256&y=256&a=1`):(0,o.Jv)(`/apps/files_sharing/publicpreview/${document.getElementById("sharingToken")&&document.getElementById("sharingToken").value}?fileId=${this.fileid}&file=${(0,h.O0)(this.filename)}&x=256&y=256&a=1`)},mimeIcon(){return OC.MimeType.getIconUrl(this.mime)}},methods:{onCheck(){this.$emit("check",this.fileid)},onFailure(){this.failedPreview=!0},focus(){this.$refs.input?.focus()}}};var f=i(85072),v=i.n(f),g=i(97825),C=i.n(g),b=i(77659),_=i.n(b),w=i(55056),y=i.n(w),k=i(10540),x=i.n(k),N=i(41113),T=i.n(N),P=i(48590),F={};F.styleTagTransform=T(),F.setAttributes=y(),F.insert=_().bind(null,"head"),F.domAPI=C(),F.insertStyleElement=x(),v()(P.A,F),P.A&&P.A.locals&&P.A.locals;var B=i(14486);const E=(0,B.A)(u,(function(){var e=this,t=e._self._c;return t("li",{staticClass:"template-picker__item"},[t("input",{ref:"input",staticClass:"radio",attrs:{id:e.id,type:"radio",name:"template-picker"},domProps:{checked:e.checked},on:{change:e.onCheck}}),e._v(" "),t("label",{staticClass:"template-picker__label",attrs:{for:e.id}},[t("div",{staticClass:"template-picker__preview",class:e.failedPreview?"template-picker__preview--failed":""},[t("img",{staticClass:"template-picker__image",attrs:{src:e.realPreviewUrl,alt:"",draggable:"false"},on:{error:e.onFailure}})]),e._v(" "),t("span",{staticClass:"template-picker__title"},[e._v("\n\t\t\t"+e._s(e.nameWithoutExt)+"\n\t\t")])])])}),[],!1,null,"1ef48b0a",null).exports;var I=i(76333);const S=(0,c.pM)({name:"TemplateRichTextField",components:{NcTextField:I.v},props:{field:{type:Object,default:()=>{}}},data:()=>({value:""}),computed:{fieldLabel(){const e=this.field.name??this.field.alias??"Unknown field";return e.charAt(0).toUpperCase()+e.slice(1)},fieldId(){return"text-field"+this.field.index}},methods:{input(){this.$emit("input",{index:this.field.index,property:"content",value:this.value})}}});var D=i(43337),$={};$.styleTagTransform=T(),$.setAttributes=y(),$.insert=_().bind(null,"head"),$.domAPI=C(),$.insertStyleElement=x(),v()(D.A,$),D.A&&D.A.locals&&D.A.locals;const L=(0,B.A)(S,(function(){var e=this,t=e._self._c;return e._self._setupProxy,t("div",{staticClass:"template-field__text"},[t("label",{attrs:{for:e.fieldId}},[e._v("\n\t\t"+e._s(e.fieldLabel)+"\n\t")]),e._v(" "),t("NcTextField",{attrs:{id:e.fieldId,type:"text",value:e.value,label:e.fieldLabel,"label-outside":!0,placeholder:e.field.content},on:{"update:value":function(t){e.value=t},input:e.input}})],1)}),[],!1,null,"2495971e",null).exports,j=(0,c.pM)({name:"TemplateCheckboxField",components:{NcCheckboxRadioSwitch:I.AO},props:{field:{type:Object,default:()=>{}}},data(){return{value:this.field.checked??!1}},computed:{fieldLabel(){const e=this.field.name??this.field.alias??"Unknown field";return e.charAt(0).toUpperCase()+e.slice(1)},fieldId(){return"checkbox-field"+this.field.index}},methods:{input(){this.$emit("input",{index:this.field.index,property:"checked",value:this.value})}}});var M=i(6718),R={};R.styleTagTransform=T(),R.setAttributes=y(),R.insert=_().bind(null,"head"),R.domAPI=C(),R.insertStyleElement=x(),v()(M.A,R),M.A&&M.A.locals&&M.A.locals;const U=(0,B.A)(j,(function(){var e=this,t=e._self._c;return e._self._setupProxy,t("div",{staticClass:"template-field__checkbox"},[t("NcCheckboxRadioSwitch",{attrs:{id:e.fieldId,checked:e.value,type:"switch"},on:{"update:checked":[function(t){e.value=t},e.input]}},[e._v("\n\t\t"+e._s(e.fieldLabel)+"\n\t")])],1)}),[],!1,null,"0de18be4",null).exports,G=(0,c.pM)({name:"TemplateFiller",components:{NcModal:I.FH,NcButton:I.x1,NcLoadingIcon:I.ne,TemplateRichTextField:L,TemplateCheckboxField:U},props:{fields:{type:Array,default:()=>[]},onSubmit:{type:Function,default:async()=>{}}},data:()=>({localFields:{},loading:!1}),methods:{t:s.Tl,trackInput(e){let{index:t,property:i,value:a}=e;this.localFields[t]||(this.localFields[t]={}),this.localFields[t][i]=a},getFieldComponent:e=>`Template${e.split("-").map((e=>e.charAt(0).toUpperCase()+e.slice(1))).join("")}Field`,async submit(){this.loading=!0,await this.onSubmit(this.localFields),this.$emit("close")}}});var W=i(52548),z={};z.styleTagTransform=T(),z.setAttributes=y(),z.insert=_().bind(null,"head"),z.domAPI=C(),z.insertStyleElement=x(),v()(W.A,z),W.A&&W.A.locals&&W.A.locals;const O=(0,B.A)(G,(function(){var e=this,t=e._self._c;return e._self._setupProxy,t("NcModal",[t("div",{staticClass:"template-field-modal__content"},[t("form",[t("h3",[e._v(e._s(e.t("files","Fill template fields")))]),e._v(" "),e._l(e.fields,(function(i){return t("div",{key:i.index},[t(e.getFieldComponent(i.type),{tag:"component",attrs:{field:i},on:{input:e.trackInput}})],1)}))],2)]),e._v(" "),t("div",{staticClass:"template-field-modal__buttons"},[e.loading?t("NcLoadingIcon",{attrs:{name:e.t("files","Submitting fields…")}}):e._e(),e._v(" "),t("NcButton",{attrs:{"aria-label":"Submit button",type:"primary"},on:{click:e.submit}},[e._v("\n\t\t\t"+e._s(e.t("files","Submit"))+"\n\t\t")])],1)])}),[],!1,null,"27d5e38c",null).exports;var X=i(9558);const q=(0,c.pM)({name:"TemplatePicker",components:{NcEmptyContent:A.A,NcModal:m.A,TemplatePreview:E},props:{parent:{type:Object,default:()=>null}},data:()=>({checked:-1,loading:!1,name:null,opened:!1,provider:null}),computed:{extension(){return(0,d.extname)(this.name??"")},nameWithoutExt(){return this.extension?this.name.slice(0,0-this.extension.length):this.name},emptyTemplate(){return{basename:(0,s.Tl)("files","Blank"),fileid:-1,filename:(0,s.Tl)("files","Blank"),hasPreview:!1,mime:this.provider?.mimetypes[0]||this.provider?.mimetypes}},selectedTemplate(){return this.provider?this.provider.templates.find((e=>e.fileid===this.checked)):null},style(){if(!this.provider)return{};const e=(this.provider.ratio?this.provider.ratio:1.77)>1?240:160;return{"--margin":"8px","--width":e+"px","--border":"2px","--fullwidth":e+16+4+"px","--height":this.provider.ratio?Math.round(e/this.provider.ratio)+"px":null}}},methods:{t:s.Tl,async open(e,t){this.checked=this.emptyTemplate.fileid,this.name=e,this.provider=t;const i=(await async function(){return(await p.Ay.get((0,o.KT)("apps/files/api/v1/templates"))).data.ocs.data}()).find((e=>e.app===t.app&&e.label===t.label));if(null===i)throw new Error("Failed to match provider in results");this.provider=i,0!==i.templates.length?(this.opened=!0,this.$nextTick((()=>{this.$refs.emptyTemplatePreview?.focus()}))):this.onSubmit()},close(){this.checked=this.emptyTemplate.fileid,this.loading=!1,this.name=null,this.opened=!1,this.provider=null},onCheck(e){this.checked=e},async createFile(e){const t=new URL(window.location.href).searchParams.get("dir")||"/";this.nameWithoutExt===this.name&&(X.A.warn("Fixed invalid filename",{name:this.name,extension:this.provider?.extension}),this.name=`${this.name}${this.provider?.extension??""}`);try{const i=await async function(e,t,i,a){return(await p.Ay.post((0,o.KT)("apps/files/api/v1/templates/create"),{filePath:e,templatePath:t,templateType:i,templateFields:a})).data.ocs.data}((0,d.normalize)(`${t}/${this.name}`),this.selectedTemplate?.filename??"",this.selectedTemplate?.templateType??"",e);X.A.debug("Created new file",i);const n=(0,a.HW)()?.uid||null,s=new r.ZH({id:i.fileid,source:(0,o.dC)((0,d.join)(`dav/files/${n}`,i.filename)),root:`/files/${n}`,mime:i.mime,mtime:new Date(1e3*i.lastmod),owner:n,size:i.size,permissions:i.permissions,attributes:{"mount-type":this.parent?.attributes?.["mount-type"],"owner-id":this.parent?.attributes?.["owner-id"],"owner-display-name":this.parent?.attributes?.["owner-display-name"],...i,"has-preview":i.hasPreview}});(0,l.Ic)("files:node:created",s),window.OCP.Files.Router.goToRoute(null,{view:"files",fileid:s.fileid},{dir:s.dirname,openfile:"true"}),this.close()}catch(e){X.A.error("Error while creating the new file from template",{error:e}),(0,n.Qg)((0,s.Tl)("files","Unable to create new file from template"))}finally{this.loading=!1}},async onSubmit(){this.selectedTemplate?.fields?.length>0?(0,n.Ss)(O,{fields:this.selectedTemplate.fields,onSubmit:this.createFile}):(this.loading=!0,await this.createFile())}}});var H=i(89985),Q={};Q.styleTagTransform=T(),Q.setAttributes=y(),Q.insert=_().bind(null,"head"),Q.domAPI=C(),Q.insertStyleElement=x(),v()(H.A,Q),H.A&&H.A.locals&&H.A.locals;const Y=(0,B.A)(q,(function(){var e=this,t=e._self._c;return e._self._setupProxy,e.opened?t("NcModal",{staticClass:"templates-picker",attrs:{"clear-view-delay":-1,size:"large"},on:{close:e.close}},[t("form",{staticClass:"templates-picker__form",style:e.style,on:{submit:function(t){return t.preventDefault(),t.stopPropagation(),e.onSubmit.apply(null,arguments)}}},[t("h2",[e._v(e._s(e.t("files","Pick a template for {name}",{name:e.nameWithoutExt})))]),e._v(" "),t("ul",{staticClass:"templates-picker__list"},[t("TemplatePreview",e._b({ref:"emptyTemplatePreview",attrs:{checked:e.checked===e.emptyTemplate.fileid},on:{check:e.onCheck}},"TemplatePreview",e.emptyTemplate,!1)),e._v(" "),e._l(e.provider.templates,(function(i){return t("TemplatePreview",e._b({key:i.fileid,attrs:{checked:e.checked===i.fileid,ratio:e.provider.ratio},on:{check:e.onCheck}},"TemplatePreview",i,!1))}))],2),e._v(" "),t("div",{staticClass:"templates-picker__buttons"},[t("input",{staticClass:"primary",attrs:{type:"submit","aria-label":e.t("files","Create a new file with the selected template")},domProps:{value:e.t("files","Create")}})])]),e._v(" "),e.loading?t("NcEmptyContent",{staticClass:"templates-picker__loading",attrs:{icon:"icon-loading"}},[e._v("\n\t\t"+e._s(e.t("files","Creating file"))+"\n\t")]):e._e()],1):e._e()}),[],!1,null,"ef629ca2",null).exports},27518:e=>{e.exports="data:image/svg+xml,%3c%21--%20-%20SPDX-FileCopyrightText:%202020%20Google%20Inc.%20-%20SPDX-License-Identifier:%20Apache-2.0%20--%3e%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20width=%2724%27%20height=%2724%27%20fill=%27%23222%27%3e%3cpath%20d=%27M15.4%2016.6L10.8%2012l4.6-4.6L14%206l-6%206%206%206%201.4-1.4z%27/%3e%3c/svg%3e"},27514:e=>{e.exports="data:image/svg+xml,%3c%21--%20-%20SPDX-FileCopyrightText:%202020%20Google%20Inc.%20-%20SPDX-License-Identifier:%20Apache-2.0%20--%3e%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20width=%2724%27%20height=%2724%27%20fill=%27%23222%27%3e%3cpath%20d=%27M18.4%207.4L17%206l-6%206%206%206%201.4-1.4-4.6-4.6%204.6-4.6m-6%200L11%206l-6%206%206%206%201.4-1.4L7.8%2012l4.6-4.6z%27/%3e%3c/svg%3e"},79722:e=>{e.exports="data:image/svg+xml,%3c%21--%20-%20SPDX-FileCopyrightText:%202020%20Google%20Inc.%20-%20SPDX-License-Identifier:%20Apache-2.0%20--%3e%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20width=%2724%27%20height=%2724%27%20fill=%27%23222%27%3e%3cpath%20d=%27M5.6%207.4L7%206l6%206-6%206-1.4-1.4%204.6-4.6-4.6-4.6m6%200L13%206l6%206-6%206-1.4-1.4%204.6-4.6-4.6-4.6z%27/%3e%3c/svg%3e"},86886:e=>{e.exports="data:image/svg+xml,%3c%21--%20-%20SPDX-FileCopyrightText:%202020%20Google%20Inc.%20-%20SPDX-License-Identifier:%20Apache-2.0%20--%3e%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20width=%2724%27%20height=%2724%27%20fill=%27%23222%27%3e%3cpath%20d=%27M8.6%2016.6l4.6-4.6-4.6-4.6L10%206l6%206-6%206-1.4-1.4z%27/%3e%3c/svg%3e"},76333:(e,t,i)=>{i.d(t,{AO:()=>L.N,Az:()=>s.N,B6:()=>p.N,EQ:()=>he.N,FH:()=>le.A,K1:()=>ee.N,Qz:()=>D.N,R1:()=>S.N,i$:()=>q.N,lT:()=>z.N,ne:()=>ne.A,v:()=>ue.N,x1:()=>$.A,yI:()=>K.A}),i(18911);var a=i(89257),n=i(94398),l=i(30567),r=i(1790),s=i(61893),o=i(73267),d=i(17452),c=i(93806),p=i(24997),A=i(80114),m=i(32831),h=i(98060),u=i(28907),f=i(47611),v=i(10363),g=i(72467),C=i(31474),b=i(20377),_=i(57074),w=i(80329),y=i(62720),k=i(7902),x=i(34379),N=i(57174),T=i(66687),P=i(69996),F=i(85948),B=i(35190),E=i(46503),I=i(18664),S=i(62081),D=i(75556),$=i(18740),L=i(22058),j=i(81886),M=i(63536),R=i(32061),U=i(21558),G=i(77622),W=i(38205),z=i(74723),O=i(46168),X=i(31126),q=i(51568),H=i(43041),Q=i(68296),Y=i(41781),K=i(34196),J=i(78298),Z=i(77312),V=i(26517),ee=i(96338),te=i(63407),ie=i(23570),ae=i(11524),ne=i(84237),le=i(68567),re=i(80910),se=i(53297),oe=i(17622),de=i(79742),ce=i(83157),pe=i(51681),Ae=i(82126),me=i(63431),he=(i(40708),i(37382),i(65043),i(21777),i(26710)),ue=i(44960),fe=(i(61338),i(94632)),ve=i(6332),ge=i(64084),Ce=i(88534),be=i(34816),_e=i(42740),we=i(50211),ye=i(86719),ke=i(49453),xe=i(23610),Ne=(i(23020),i(53429),i(94205),i(9050),i(63534),i(42892)),Te=i(65842),Pe=(i(18300),i(75105),i(92471),i(16406),i(2508));a.A,n.N,l.A,r.A,s.N,o.A,d.A,c.A,A.A,m.A,h.A,p.N,u.N,f.A,v.A,g.N,C.N,b.A,_.N,w.A,y.A,k.N,x.N,N.N,T.A,P.N,F.A,B.N,E.A,Ae.N,I.N,S.N,D.N,$.A,L.N,j.N,M.N,R.N,U.N,G.N,W.N,z.N,O.A,X.A,q.N,H.N,Q.A,Y.N,K.A,J.A,Z.N,V.N,ee.N,te.A,ie.N,ae.N,ne.A,pe.N,le.A,re.A,se.N,oe.N,de.N,ce.N,Ae.a,me.N,fe.N,he.N,ve.N,ge.N,Ce.N,be.N,_e.A,ue.N,we.N,ye.N,ke.N,xe.A,Symbol.toStringTag,Ne.u,Te.u,Pe.yw,Symbol.toStringTag}}]);
//# sourceMappingURL=3235-3235.js.map?v=62df9e6af427989f039f