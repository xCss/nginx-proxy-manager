(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{202:function(e,t,n){const i=n(6),s=n(2),r=n(283),a=n(284),o=n(288),_=n(207),c=n(209);e.exports=i.View.extend({id:"audit-log",template:o,ui:{list_region:".list-region",dimmer:".dimmer"},regions:{list_region:"@ui.list_region"},onRender:function(){let e=this;s.Api.AuditLog.getAll(["user"]).then(t=>{!e.isDestroyed()&&t&&t.length?e.showChildView("list_region",new a({collection:new r.Collection(t)})):e.showChildView("list_region",new c({title:s.i18n("audit-log","empty"),subtitle:s.i18n("audit-log","empty-subtitle")}))}).catch(t=>{e.showChildView("list_region",new _({code:t.code,message:t.message,retry:function(){s.Controller.showAuditLog()}})),console.error(t)}).then(()=>{e.ui.dimmer.removeClass("active")})}})},207:function(e,t,n){const i=n(6),s=n(208);e.exports=i.View.extend({template:s,className:"alert alert-icon alert-warning m-5",ui:{retry:"a.retry"},events:{"click @ui.retry":function(e){e.preventDefault(),this.getOption("retry")()}},templateContext:function(){return{message:this.getOption("message"),code:this.getOption("code"),retry:"function"==typeof this.getOption("retry")}}})},208:function(module,exports,__webpack_require__){(function(_){module.exports=function(obj){obj||(obj={});var __t,__p="",__e=_.escape,__j=Array.prototype.join;function print(){__p+=__j.call(arguments,"")}with(obj)__p+='<i class="fe fe-alert-triangle mr-2" aria-hidden="true"></i>\r\n'+(null==(__t=code?"<strong>"+code+"</strong> &mdash; ":"")?"":__t)+"\r\n"+__e(message)+"\r\n\r\n",retry&&(__p+='\r\n    <br><br><a href="#" class="btn btn-sm btn-warning retry">'+__e(i18n("str","try-again"))+"</a>\r\n"),__p+="\r\n";return __p}}).call(this,__webpack_require__(3))},209:function(e,t,n){const i=n(6),s=n(210);e.exports=i.View.extend({className:"text-center m-7",template:s,options:{btn_color:"teal"},ui:{action:"a"},events:{"click @ui.action":function(e){e.preventDefault(),this.getOption("action")()}},templateContext:function(){return{title:this.getOption("title"),subtitle:this.getOption("subtitle"),link:this.getOption("link"),action:"function"==typeof this.getOption("action"),btn_color:this.getOption("btn_color")}}})},210:function(module,exports,__webpack_require__){(function(_){module.exports=function(obj){obj||(obj={});var __t,__p="",__e=_.escape,__j=Array.prototype.join;function print(){__p+=__j.call(arguments,"")}with(obj)title&&(__p+='\r\n    <h1 class="h2 mb-3">'+__e(title)+"</h1>\r\n"),subtitle&&(__p+='\r\n    <p class="h4 text-muted font-weight-normal mb-7">'+__e(subtitle)+"</p>\r\n"),link&&(__p+='\r\n    <a class="btn btn-'+__e(btn_color)+'" href="#">'+__e(link)+"</a>\r\n"),__p+="\r\n";return __p}}).call(this,__webpack_require__(3))},283:function(e,t,n){const i=n(5),s=i.Model.extend({idAttribute:"id",defaults:function(){return{name:""}}});e.exports={Model:s,Collection:i.Collection.extend({model:s})}},284:function(e,t,n){const i=n(6),s=n(285),r=n(287),a=i.CollectionView.extend({tagName:"tbody",childView:s});e.exports=i.View.extend({tagName:"table",className:"table table-hover table-outline table-vcenter card-table",template:r,regions:{body:{el:"tbody",replaceElement:!0}},onRender:function(){this.showChildView("body",new a({collection:this.collection}))}})},285:function(e,t,n){const i=n(6),s=n(11),r=n(286);e.exports=i.View.extend({template:r,tagName:"tr",ui:{meta:"a.meta"},events:{"click @ui.meta":function(e){e.preventDefault(),s.showAuditMeta(this.model)}},templateContext:{more:function(){switch(this.object_type){case"redirection-host":case"stream":case"proxy-host":return this.meta.domain_names.join(", ")}return"#"+(this.object_id||"?")}}})},286:function(module,exports,__webpack_require__){(function(_){module.exports=function(obj){obj||(obj={});var __t,__p="",__e=_.escape,__j=Array.prototype.join;function print(){__p+=__j.call(arguments,"")}with(obj){__p+='<td class="text-center">\r\n    <div class="avatar d-block" style="background-image: url('+__e(user.avatar||"/images/default-avatar.jpg")+')">\r\n        <span class="avatar-status '+__e(user.is_disabled?"bg-red":"bg-green")+'"></span>\r\n    </div>\r\n</td>\r\n<td>\r\n    <div>\r\n        ',user.is_deleted?__p+='\r\n            <span class="mdi-format-strikethrough" title="Deleted">'+__e(user.name)+"</span>\r\n            ":__p+="\r\n            "+__e(user.name)+"\r\n            ",__p+="\r\n    </div>\r\n</td>\r\n<td>\r\n    <div>\r\n        ";var items=[];switch(object_type){case"proxy-host":__p+=' <span class="text-success"><i class="fe fe-zap"></i></span> ',items=meta.domain_names;break;case"redirection-host":__p+=' <span class="text-yellow"><i class="fe fe-shuffle"></i></span> ',items=meta.domain_names;break;case"stream":__p+=' <span class="text-blue"><i class="fe fe-radio"></i></span> ',items.push(meta.incoming_port);break;case"dead-host":__p+=' <span class="text-danger"><i class="fe fe-zap-off"></i></span> ',items=meta.domain_names;break;case"access-list":__p+=' <span class="text-teal"><i class="fe fe-lock"></i></span> ',items.push(meta.name);break;case"user":__p+=' <span class="text-teal"><i class="fe fe-user"></i></span> ',items.push(meta.name);break;case"certificate":__p+=' <span class="text-pink"><i class="fe fe-shield"></i></span> ',"letsencrypt"===meta.provider?items=meta.domain_names:items.push(meta.nice_name)}__p+="&nbsp;"+__e(i18n("audit-log",action,{name:i18n("audit-log",object_type)}))+"\r\n        &mdash;\r\n        ",items&&items.length?items.map((function(e){__p+='\r\n                <span class="tag">'+__e(e)+"</span>\r\n                "})):__p+="\r\n            #"+__e(object_id)+"\r\n            ",__p+='\r\n    </div>\r\n    <div class="small text-muted">\r\n        '+__e(formatDbDate(created_on,"Do MMMM YYYY, h:mm a"))+'\r\n    </div>\r\n</td>\r\n<td class="text-right">\r\n    <a href="#" class="meta btn btn-secondary btn-sm">'+__e(i18n("audit-log","view-meta"))+"</a>\r\n</td>\r\n"}return __p}}).call(this,__webpack_require__(3))},287:function(module,exports){module.exports=function(obj){obj||(obj={});var __t,__p="";with(obj)__p+='<thead>\r\n    <th width="30">&nbsp;</th>\r\n    <th>User</th>\r\n    <th>Event</th>\r\n    <th>&nbsp;</th>\r\n</thead>\r\n<tbody>\r\n    \x3c!-- items --\x3e\r\n</tbody>\r\n';return __p}},288:function(module,exports,__webpack_require__){(function(_){module.exports=function(obj){obj||(obj={});var __t,__p="",__e=_.escape;with(obj)__p+='<div class="card">\r\n    <div class="card-status bg-teal"></div>\r\n    <div class="card-header">\r\n        <h3 class="card-title">'+__e(i18n("audit-log","title"))+'</h3>\r\n    </div>\r\n    <div class="card-body no-padding min-100">\r\n        <div class="dimmer active">\r\n            <div class="loader"></div>\r\n            <div class="dimmer-content list-region">\r\n                \x3c!-- List Region --\x3e\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n</div>\r\n';return __p}}).call(this,__webpack_require__(3))}}]);