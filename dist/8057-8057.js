"use strict";(self.webpackChunknextcloud=self.webpackChunknextcloud||[]).push([[8057],{49608:(t,e,n)=>{n.d(e,{A:()=>a});var o=n(71354),r=n.n(o),s=n(76314),m=n.n(s)()(r());m.push([t.id,"\n.comments-action[data-v-4e517c64] {\n\tpadding: 0;\n}\n","",{version:3,sources:["webpack://./apps/comments/src/views/ActivityCommentAction.vue"],names:[],mappings:";AAkDA;CACA,UAAA;AACA",sourcesContent:['\x3c!--\n  - SPDX-FileCopyrightText: 2023 Nextcloud GmbH and Nextcloud contributors\n  - SPDX-License-Identifier: AGPL-3.0-or-later\n--\x3e\n\n<template>\n\t<Comment v-bind="editorData"\n\t\t:auto-complete="autoComplete"\n\t\t:resource-type="resourceType"\n\t\t:editor="true"\n\t\t:user-data="userData"\n\t\t:resource-id="resourceId"\n\t\tclass="comments-action"\n\t\t@new="onNewComment" />\n</template>\n\n<script lang="ts">\nimport { defineComponent } from \'vue\'\nimport Comment from \'../components/Comment.vue\'\nimport CommentView from \'../mixins/CommentView.js\'\nimport logger from \'../logger\'\nimport { showError } from \'@nextcloud/dialogs\'\nimport { translate as t } from \'@nextcloud/l10n\'\n\nexport default defineComponent({\n\tcomponents: {\n\t\tComment,\n\t},\n\tmixins: [CommentView],\n\tprops: {\n\t\treloadCallback: {\n\t\t\ttype: Function,\n\t\t\trequired: true,\n\t\t},\n\t},\n\tmethods: {\n\t\tonNewComment() {\n\t\t\ttry {\n\t\t\t\t// just force reload\n\t\t\t\tthis.reloadCallback()\n\t\t\t} catch (e) {\n\t\t\t\tshowError(t(\'comments\', \'Could not reload comments\'))\n\t\t\t\tlogger.debug(e)\n\t\t\t}\n\t\t},\n\t},\n})\n<\/script>\n\n<style scoped>\n.comments-action {\n\tpadding: 0;\n}\n</style>\n'],sourceRoot:""}]);const a=m},98057:(t,e,n)=>{n.d(e,{default:()=>k});var o=n(85471),r=n(65463),s=n(70452),m=n(96689),a=n(85168),c=n(53334);const l=(0,o.pM)({components:{Comment:r.A},mixins:[s.A],props:{reloadCallback:{type:Function,required:!0}},methods:{onNewComment(){try{this.reloadCallback()}catch(t){(0,a.Qg)((0,c.Tl)("comments","Could not reload comments")),m.A.debug(t)}}}});var i=n(85072),u=n.n(i),d=n(97825),p=n.n(d),C=n(77659),A=n.n(C),f=n(55056),g=n.n(f),b=n(10540),h=n.n(b),w=n(41113),x=n.n(w),y=n(49608),v={};v.styleTagTransform=x(),v.setAttributes=g(),v.insert=A().bind(null,"head"),v.domAPI=p(),v.insertStyleElement=h(),u()(y.A,v),y.A&&y.A.locals&&y.A.locals;const k=(0,n(14486).A)(l,(function(){var t=this,e=t._self._c;return t._self._setupProxy,e("Comment",t._b({staticClass:"comments-action",attrs:{"auto-complete":t.autoComplete,"resource-type":t.resourceType,editor:!0,"user-data":t.userData,"resource-id":t.resourceId},on:{new:t.onNewComment}},"Comment",t.editorData,!1))}),[],!1,null,"4e517c64",null).exports}}]);
//# sourceMappingURL=8057-8057.js.map?v=2c8f7e35c56e047ba73f