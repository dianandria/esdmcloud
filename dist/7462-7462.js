"use strict";(self.webpackChunknextcloud=self.webpackChunknextcloud||[]).push([[7462],{10396:(e,n,o)=>{o.d(n,{A:()=>A});var i=o(85168),s=o(70395),a=o(80486),r=o(10767),d=o(65899),c=o(36564),m=o(96689),l=o(96763);const A={props:{id:{type:Number,default:null},message:{type:String,default:""},resourceId:{type:[String,Number],required:!0},resourceType:{type:String,default:"files"}},data:()=>({deleted:!1,editing:!1,loading:!1}),computed:{...(0,d.n2)(c.h)},methods:{onEdit(){this.editing=!0},onEditCancel(){this.editing=!1,this.updateLocalMessage(this.message)},async onEditComment(e){this.loading=!0;try{await(0,r.A)(this.resourceType,this.resourceId,this.id,e),m.A.debug("Comment edited",{resourceType:this.resourceType,resourceId:this.resourceId,id:this.id,message:e}),this.$emit("update:message",e),this.editing=!1}catch(e){(0,i.Qg)(t("comments","An error occurred while trying to edit the comment")),l.error(e)}finally{this.loading=!1}},onDeleteWithUndo(){this.$emit("delete"),this.deleted=!0,this.deletedCommentLimboStore.addId(this.id);const e=setTimeout(this.onDelete,i.Br);(0,i._h)(t("comments","Comment deleted"),(()=>{clearTimeout(e),this.deleted=!1,this.deletedCommentLimboStore.removeId(this.id)}))},async onDelete(){try{await(0,a.A)(this.resourceType,this.resourceId,this.id),m.A.debug("Comment deleted",{resourceType:this.resourceType,resourceId:this.resourceId,id:this.id}),this.$emit("delete",this.id)}catch(e){(0,i.Qg)(t("comments","An error occurred while trying to delete the comment")),l.error(e),this.deleted=!1,this.deletedCommentLimboStore.removeId(this.id)}},async onNewComment(e){this.loading=!0;try{const t=await(0,s.A)(this.resourceType,this.resourceId,e);m.A.debug("New comment posted",{resourceType:this.resourceType,resourceId:this.resourceId,newComment:t}),this.$emit("new",t),this.$emit("update:message",""),this.localMessage=""}catch(e){(0,i.Qg)(t("comments","An error occurred while trying to create the comment")),l.error(e)}finally{this.loading=!1}}}}},80486:(t,e,n)=>{n.d(e,{A:()=>i});var o=n(35550);async function i(t,e,n){const i=["",t,e,n].join("/");await o.A.deleteFile(i)}},10767:(t,e,n)=>{n.d(e,{A:()=>i});var o=n(35550);async function i(t,e,n,i){const s=["",t,e,n].join("/");return await o.A.customRequest(s,Object.assign({method:"PROPPATCH",data:`<?xml version="1.0"?>\n\t\t\t<d:propertyupdate\n\t\t\t\txmlns:d="DAV:"\n\t\t\t\txmlns:oc="http://owncloud.org/ns">\n\t\t\t<d:set>\n\t\t\t\t<d:prop>\n\t\t\t\t\t<oc:message>${i}</oc:message>\n\t\t\t\t</d:prop>\n\t\t\t</d:set>\n\t\t\t</d:propertyupdate>`}))}},70395:(t,e,n)=>{n.d(e,{A:()=>d});var o=n(21777),i=n(17003),s=n(51195),a=n(65043),r=n(35550);async function d(t,e,n){const d=["",t,e].join("/"),c=await a.Ay.post((0,i.e)()+d,{actorDisplayName:(0,o.HW)().displayName,actorId:(0,o.HW)().uid,actorType:"users",creationDateTime:(new Date).toUTCString(),message:n,objectType:t,verb:"comment"}),m=d+"/"+parseInt(c.headers["content-location"].split("/").pop()),l=await r.A.stat(m,{details:!0}),A=l.data.props;return A.actorDisplayName=(0,s.j)(A.actorDisplayName,2),A.message=(0,s.j)(A.message,2),l.data}},36564:(t,e,n)=>{n.d(e,{h:()=>o});const o=(0,n(65899).nY)("deletedCommentLimbo",{state:()=>({idsInLimbo:[]}),actions:{addId(t){this.idsInLimbo.push(t)},removeId(t){const e=this.idsInLimbo.indexOf(t);e>-1&&this.idsInLimbo.splice(e,1)},checkForId(t){this.idsInLimbo.includes(t)}}})},51195:(t,e,n)=>{function o(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;const n=new DOMParser;let o=t;for(let t=0;t<e;t++)o=n.parseFromString(o,"text/html").documentElement.textContent;return o}n.d(e,{j:()=>o})},70452:(t,e,n)=>{n.d(e,{A:()=>r});var o=n(65043),i=n(21777),s=n(32981),a=n(63814);const r=(0,n(85471).pM)({props:{resourceId:{type:Number,required:!0},resourceType:{type:String,default:"files"}},data:()=>({editorData:{actorDisplayName:(0,i.HW)().displayName,actorId:(0,i.HW)().uid,key:"editor"},userData:{}}),methods:{async autoComplete(t,e){const{data:n}=await o.Ay.get((0,a.KT)("core/autocomplete/get"),{params:{search:t,itemType:"files",itemId:this.resourceId,sorter:"commenters|share-recipients",limit:(0,s.C)("comments","maxAutoCompleteResults")}});return n.ocs.data.forEach((t=>{this.userData[t.id]=t})),e(Object.values(this.userData))},genMentionsData(t){return Object.values(t).flat().forEach((t=>{this.userData[t.mentionId]={icon:"icon-user",id:t.mentionId,label:t.mentionDisplayName,source:"users",primary:(0,i.HW)()?.uid===t.mentionId}})),this.userData}}})},29369:(t,e,n)=>{n.d(e,{A:()=>v});var o=n(21777),i=n(53334),s=n(89257),a=n(24764),r=n(80114),d=n(41944),c=n(18740),m=n(4604),l=n(84237),A=n(80701),p=n(9191),u=n(24325),h=n(11037),C=n(93919),g=n(10396),_=n(65899),f=n(36564);const v={name:"Comment",components:{IconArrowRight:p.A,IconClose:u.A,IconDelete:h.A,IconEdit:C.A,NcActionButton:s.A,NcActions:a.A,NcActionSeparator:r.A,NcAvatar:d.A,NcButton:c.A,NcDateTime:m.A,NcLoadingIcon:l.A,NcRichContenteditable:()=>Promise.all([n.e(4208),n.e(5528)]).then(n.bind(n,95528))},mixins:[A.Ay,g.A],inheritAttrs:!1,props:{actorDisplayName:{type:String,required:!0},actorId:{type:String,required:!0},creationDateTime:{type:String,default:null},editor:{type:Boolean,default:!1},autoComplete:{type:Function,required:!0},tag:{type:String,default:"div"}},data:()=>({expanded:!1,localMessage:"",submitted:!1}),computed:{...(0,_.n2)(f.h),isOwnComment(){return(0,o.HW)().uid===this.actorId},renderedContent(){return this.isEmptyMessage?"":this.renderContent(this.localMessage)},isEmptyMessage(){return!this.localMessage||""===this.localMessage.trim()},timestamp(){return Date.parse(this.creationDateTime)},isLimbo(){return this.deletedCommentLimboStore.checkForId(this.id)}},watch:{message(t){this.updateLocalMessage(t)}},beforeMount(){this.updateLocalMessage(this.message)},methods:{t:i.Tl,updateLocalMessage(t){this.localMessage=t.toString(),this.submitted=!1},onSubmit(){if(""!==this.localMessage.trim())return this.editor?(this.onNewComment(this.localMessage.trim()),void this.$nextTick((()=>{this.$refs.editor.$el.focus()}))):void this.onEditComment(this.localMessage.trim())},onExpand(){this.expanded=!0}}}},80067:(t,e,n)=>{n.d(e,{X:()=>o,Y:()=>i});var o=function(){var t=this,e=t._self._c;return e(t.tag,{directives:[{name:"show",rawName:"v-show",value:!t.deleted&&!t.isLimbo,expression:"!deleted && !isLimbo"}],tag:"component",staticClass:"comment",class:{"comment--loading":t.loading}},[e("div",{staticClass:"comment__side"},[e("NcAvatar",{staticClass:"comment__avatar",attrs:{"display-name":t.actorDisplayName,user:t.actorId,size:32}})],1),t._v(" "),e("div",{staticClass:"comment__body"},[e("div",{staticClass:"comment__header"},[e("span",{staticClass:"comment__author"},[t._v(t._s(t.actorDisplayName))]),t._v(" "),t.isOwnComment&&t.id&&!t.loading?e("NcActions",{staticClass:"comment__actions"},[t.editing?e("NcActionButton",{on:{click:t.onEditCancel},scopedSlots:t._u([{key:"icon",fn:function(){return[e("IconClose",{attrs:{size:20}})]},proxy:!0}],null,!1,2888946197)},[t._v("\n\t\t\t\t\t"+t._s(t.t("comments","Cancel edit"))+"\n\t\t\t\t")]):[e("NcActionButton",{attrs:{"close-after-click":""},on:{click:t.onEdit},scopedSlots:t._u([{key:"icon",fn:function(){return[e("IconEdit",{attrs:{size:20}})]},proxy:!0}],null,!1,649782975)},[t._v("\n\t\t\t\t\t\t"+t._s(t.t("comments","Edit comment"))+"\n\t\t\t\t\t")]),t._v(" "),e("NcActionSeparator"),t._v(" "),e("NcActionButton",{attrs:{"close-after-click":""},on:{click:t.onDeleteWithUndo},scopedSlots:t._u([{key:"icon",fn:function(){return[e("IconDelete",{attrs:{size:20}})]},proxy:!0}],null,!1,881161434)},[t._v("\n\t\t\t\t\t\t"+t._s(t.t("comments","Delete comment"))+"\n\t\t\t\t\t")])]],2):t._e(),t._v(" "),t.id&&t.loading?e("div",{staticClass:"comment_loading icon-loading-small"}):t.creationDateTime?e("NcDateTime",{staticClass:"comment__timestamp",attrs:{timestamp:t.timestamp,"ignore-seconds":!0}}):t._e()],1),t._v(" "),t.editor||t.editing?e("form",{staticClass:"comment__editor",on:{submit:function(t){t.preventDefault()}}},[e("div",{staticClass:"comment__editor-group"},[e("NcRichContenteditable",{ref:"editor",attrs:{"auto-complete":t.autoComplete,contenteditable:!t.loading,label:t.editor?t.t("comments","New comment"):t.t("comments","Edit comment"),placeholder:t.t("comments","Write a comment …"),value:t.localMessage,"user-data":t.userData,"aria-describedby":"tab-comments__editor-description"},on:{"update:value":t.updateLocalMessage,submit:t.onSubmit}}),t._v(" "),e("div",{staticClass:"comment__submit"},[e("NcButton",{attrs:{type:"tertiary-no-background","native-type":"submit","aria-label":t.t("comments","Post comment"),disabled:t.isEmptyMessage},on:{click:t.onSubmit},scopedSlots:t._u([{key:"icon",fn:function(){return[t.loading?e("NcLoadingIcon"):e("IconArrowRight",{attrs:{size:20}})]},proxy:!0}],null,!1,758946661)})],1)],1),t._v(" "),e("div",{staticClass:"comment__editor-description",attrs:{id:"tab-comments__editor-description"}},[t._v("\n\t\t\t\t"+t._s(t.t("comments","@ for mentions, : for emoji, / for smart picker"))+"\n\t\t\t")])]):e("div",{staticClass:"comment__message",class:{"comment__message--expanded":t.expanded},domProps:{innerHTML:t._s(t.renderedContent)},on:{click:t.onExpand}})])])},i=[]},93183:(t,e,n)=>{n.d(e,{A:()=>r});var o=n(71354),i=n.n(o),s=n(76314),a=n.n(s)()(i());a.push([t.id,".comment[data-v-6f6ef97e]{display:flex;gap:8px;padding:5px 10px}.comment__side[data-v-6f6ef97e]{display:flex;align-items:flex-start;padding-top:6px}.comment__body[data-v-6f6ef97e]{display:flex;flex-grow:1;flex-direction:column}.comment__header[data-v-6f6ef97e]{display:flex;align-items:center;min-height:44px}.comment__actions[data-v-6f6ef97e]{margin-left:10px !important}.comment__author[data-v-6f6ef97e]{overflow:hidden;white-space:nowrap;text-overflow:ellipsis;color:var(--color-text-maxcontrast)}.comment_loading[data-v-6f6ef97e],.comment__timestamp[data-v-6f6ef97e]{margin-left:auto;text-align:right;white-space:nowrap;color:var(--color-text-maxcontrast)}.comment__editor-group[data-v-6f6ef97e]{position:relative}.comment__editor-description[data-v-6f6ef97e]{color:var(--color-text-maxcontrast);padding-block:var(--default-grid-baseline)}.comment__submit[data-v-6f6ef97e]{position:absolute !important;bottom:5px;right:0}.comment__message[data-v-6f6ef97e]{white-space:pre-wrap;word-break:break-word;max-height:70px;overflow:hidden;margin-top:-6px}.comment__message--expanded[data-v-6f6ef97e]{max-height:none;overflow:visible}.rich-contenteditable__input[data-v-6f6ef97e]{min-height:44px;margin:0;padding:10px}","",{version:3,sources:["webpack://./apps/comments/src/components/Comment.vue"],names:[],mappings:"AAKA,0BACC,YAAA,CACA,OAAA,CACA,gBAAA,CAEA,gCACC,YAAA,CACA,sBAAA,CACA,eAAA,CAGD,gCACC,YAAA,CACA,WAAA,CACA,qBAAA,CAGD,kCACC,YAAA,CACA,kBAAA,CACA,eAAA,CAGD,mCACC,2BAAA,CAGD,kCACC,eAAA,CACA,kBAAA,CACA,sBAAA,CACA,mCAAA,CAGD,uEAEC,gBAAA,CACA,gBAAA,CACA,kBAAA,CACA,mCAAA,CAGD,wCACC,iBAAA,CAGD,8CACC,mCAAA,CACA,0CAAA,CAGD,kCACC,4BAAA,CACA,UAAA,CACA,OAAA,CAGD,mCACC,oBAAA,CACA,qBAAA,CACA,eAAA,CACA,eAAA,CACA,eAAA,CACA,6CACC,eAAA,CACA,gBAAA,CAKH,8CACC,eAAA,CACA,QAAA,CACA,YA3EiB",sourcesContent:['\n@use "sass:math";\n\n$comment-padding: 10px;\n\n.comment {\n\tdisplay: flex;\n\tgap: 8px;\n\tpadding: 5px $comment-padding;\n\n\t&__side {\n\t\tdisplay: flex;\n\t\talign-items: flex-start;\n\t\tpadding-top: 6px;\n\t}\n\n\t&__body {\n\t\tdisplay: flex;\n\t\tflex-grow: 1;\n\t\tflex-direction: column;\n\t}\n\n\t&__header {\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\tmin-height: 44px;\n\t}\n\n\t&__actions {\n\t\tmargin-left: $comment-padding !important;\n\t}\n\n\t&__author {\n\t\toverflow: hidden;\n\t\twhite-space: nowrap;\n\t\ttext-overflow: ellipsis;\n\t\tcolor: var(--color-text-maxcontrast);\n\t}\n\n\t&_loading,\n\t&__timestamp {\n\t\tmargin-left: auto;\n\t\ttext-align: right;\n\t\twhite-space: nowrap;\n\t\tcolor: var(--color-text-maxcontrast);\n\t}\n\n\t&__editor-group {\n\t\tposition: relative;\n\t}\n\n\t&__editor-description {\n\t\tcolor: var(--color-text-maxcontrast);\n\t\tpadding-block: var(--default-grid-baseline);\n\t}\n\n\t&__submit {\n\t\tposition: absolute !important;\n\t\tbottom: 5px;\n\t\tright: 0;\n\t}\n\n\t&__message {\n\t\twhite-space: pre-wrap;\n\t\tword-break: break-word;\n\t\tmax-height: 70px;\n\t\toverflow: hidden;\n\t\tmargin-top: -6px;\n\t\t&--expanded {\n\t\t\tmax-height: none;\n\t\t\toverflow: visible;\n\t\t}\n\t}\n}\n\n.rich-contenteditable__input {\n\tmin-height: 44px;\n\tmargin: 0;\n\tpadding: $comment-padding;\n}\n\n'],sourceRoot:""}]);const r=a},18016:(t,e,n)=>{var o=n(85072),i=n.n(o),s=n(97825),a=n.n(s),r=n(77659),d=n.n(r),c=n(55056),m=n.n(c),l=n(10540),A=n.n(l),p=n(41113),u=n.n(p),h=n(93183),C={};C.styleTagTransform=u(),C.setAttributes=m(),C.insert=d().bind(null,"head"),C.domAPI=a(),C.insertStyleElement=A(),i()(h.A,C),h.A&&h.A.locals&&h.A.locals},65463:(t,e,n)=>{n.d(e,{A:()=>s});var o=n(80067),i=n(54416);n(93161);const s=(0,n(14486).A)(i.A,o.X,o.Y,!1,null,"6f6ef97e",null).exports},54416:(t,e,n)=>{n.d(e,{A:()=>o});const o=n(29369).A},93161:(t,e,n)=>{n(18016)}}]);
//# sourceMappingURL=7462-7462.js.map?v=15bd5843b041df871a0b