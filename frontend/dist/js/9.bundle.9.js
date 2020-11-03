(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{188:function(e,t,n){const r=n(6),i=n(2),o=n(216),a=n(248),s=n(207),l=n(209),_=n(252);e.exports=r.View.extend({id:"nginx-stream",template:_,ui:{list_region:".list-region",add:".add-item",help:".help",dimmer:".dimmer"},regions:{list_region:"@ui.list_region"},events:{"click @ui.add":function(e){e.preventDefault(),i.Controller.showNginxStreamForm()},"click @ui.help":function(e){e.preventDefault(),i.Controller.showHelp(i.i18n("streams","help-title"),i.i18n("streams","help-content"))}},templateContext:{showAddButton:i.Cache.User.canManage("streams")},onRender:function(){let e=this;i.Api.Nginx.Streams.getAll(["owner"]).then(t=>{if(!e.isDestroyed())if(t&&t.length)e.showChildView("list_region",new a({collection:new o.Collection(t)}));else{let t=i.Cache.User.canManage("streams");e.showChildView("list_region",new l({title:i.i18n("streams","empty"),subtitle:i.i18n("all-hosts","empty-subtitle",{manage:t}),link:t?i.i18n("streams","add"):null,btn_color:"blue",permission:"streams",action:function(){i.Controller.showNginxStreamForm()}}))}}).catch(t=>{e.showChildView("list_region",new s({code:t.code,message:t.message,retry:function(){i.Controller.showNginxStream()}})),console.error(t)}).then(()=>{e.ui.dimmer.removeClass("active")})}})},207:function(e,t,n){const r=n(6),i=n(208);e.exports=r.View.extend({template:i,className:"alert alert-icon alert-warning m-5",ui:{retry:"a.retry"},events:{"click @ui.retry":function(e){e.preventDefault(),this.getOption("retry")()}},templateContext:function(){return{message:this.getOption("message"),code:this.getOption("code"),retry:"function"==typeof this.getOption("retry")}}})},208:function(module,exports,__webpack_require__){(function(_){module.exports=function(obj){obj||(obj={});var __t,__p="",__e=_.escape,__j=Array.prototype.join;function print(){__p+=__j.call(arguments,"")}with(obj)__p+='<i class="fe fe-alert-triangle mr-2" aria-hidden="true"></i>\r\n'+(null==(__t=code?"<strong>"+code+"</strong> &mdash; ":"")?"":__t)+"\r\n"+__e(message)+"\r\n\r\n",retry&&(__p+='\r\n    <br><br><a href="#" class="btn btn-sm btn-warning retry">'+__e(i18n("str","try-again"))+"</a>\r\n"),__p+="\r\n";return __p}}).call(this,__webpack_require__(3))},209:function(e,t,n){const r=n(6),i=n(210);e.exports=r.View.extend({className:"text-center m-7",template:i,options:{btn_color:"teal"},ui:{action:"a"},events:{"click @ui.action":function(e){e.preventDefault(),this.getOption("action")()}},templateContext:function(){return{title:this.getOption("title"),subtitle:this.getOption("subtitle"),link:this.getOption("link"),action:"function"==typeof this.getOption("action"),btn_color:this.getOption("btn_color")}}})},210:function(module,exports,__webpack_require__){(function(_){module.exports=function(obj){obj||(obj={});var __t,__p="",__e=_.escape,__j=Array.prototype.join;function print(){__p+=__j.call(arguments,"")}with(obj)title&&(__p+='\r\n    <h1 class="h2 mb-3">'+__e(title)+"</h1>\r\n"),subtitle&&(__p+='\r\n    <p class="h4 text-muted font-weight-normal mb-7">'+__e(subtitle)+"</p>\r\n"),link&&(__p+='\r\n    <a class="btn btn-'+__e(btn_color)+'" href="#">'+__e(link)+"</a>\r\n"),__p+="\r\n";return __p}}).call(this,__webpack_require__(3))},216:function(e,t,n){const r=n(5),i=r.Model.extend({idAttribute:"id",defaults:function(){return{id:void 0,created_on:null,modified_on:null,incoming_port:null,forward_ip:null,forwarding_port:null,tcp_forwarding:!0,udp_forwarding:!1,enabled:!0,meta:{},owner:null}}});e.exports={Model:i,Collection:r.Collection.extend({model:i})}},248:function(e,t,n){const r=n(6),i=n(2),o=n(249),a=n(251),s=r.CollectionView.extend({tagName:"tbody",childView:o});e.exports=r.View.extend({tagName:"table",className:"table table-hover table-outline table-vcenter card-table",template:a,regions:{body:{el:"tbody",replaceElement:!0}},templateContext:{canManage:i.Cache.User.canManage("streams")},onRender:function(){this.showChildView("body",new s({collection:this.collection}))}})},249:function(e,t,n){const r=n(6),i=n(2),o=n(250);e.exports=r.View.extend({template:o,tagName:"tr",ui:{able:"a.able",edit:"a.edit",delete:"a.delete"},events:{"click @ui.able":function(e){e.preventDefault();let t=this.model.get("id");i.Api.Nginx.Streams[this.model.get("enabled")?"disable":"enable"](t).then(()=>i.Api.Nginx.Streams.get(t).then(e=>{this.model.set(e)}))},"click @ui.edit":function(e){e.preventDefault(),i.Controller.showNginxStreamForm(this.model)},"click @ui.delete":function(e){e.preventDefault(),i.Controller.showNginxStreamDeleteConfirm(this.model)}},templateContext:{canManage:i.Cache.User.canManage("streams"),isOnline:function(){return void 0===this.meta.nginx_online?null:this.meta.nginx_online},getOfflineError:function(){return this.meta.nginx_err||""}},initialize:function(){this.listenTo(this.model,"change",this.render)}})},250:function(module,exports,__webpack_require__){(function(_){module.exports=function(obj){obj||(obj={});var __t,__p="",__e=_.escape,__j=Array.prototype.join;function print(){__p+=__j.call(arguments,"")}with(obj){__p+='<td class="text-center">\r\n    <div class="avatar d-block" style="background-image: url('+__e(owner.avatar||"/images/default-avatar.jpg")+')" title="Owned by '+__e(owner.name)+'">\r\n        <span class="avatar-status '+__e(owner.is_disabled?"bg-red":"bg-green")+'"></span>\r\n    </div>\r\n</td>\r\n<td>\r\n    <div class="text-monospace">\r\n        '+__e(incoming_port)+'\r\n    </div>\r\n    <div class="small text-muted">\r\n        '+__e(i18n("str","created-on",{date:formatDbDate(created_on,"Do MMMM YYYY")}))+'\r\n    </div>\r\n</td>\r\n<td>\r\n    <div class="text-monospace">'+__e(forward_ip)+":"+__e(forwarding_port)+"</div>\r\n</td>\r\n<td>\r\n    <div>\r\n        ",tcp_forwarding&&(__p+='\r\n            <span class="tag">'+__e(i18n("streams","tcp"))+"</span>\r\n        "),udp_forwarding&&(__p+='\r\n            <span class="tag">'+__e(i18n("streams","udp"))+"</span>\r\n        "),__p+="\r\n    </div>\r\n</td>\r\n<td>\r\n    ";var o=isOnline();enabled?__p+=!0===o?'\r\n        <span class="status-icon bg-success"></span> '+__e(i18n("str","online"))+"\r\n    ":!1===o?'\r\n        <span title="'+__e(getOfflineError())+'"><span class="status-icon bg-danger"></span> '+__e(i18n("str","offline"))+"</span>\r\n    ":'\r\n        <span class="status-icon bg-warning"></span> '+__e(i18n("str","unknown"))+"\r\n    ":__p+='\r\n        <span class="status-icon bg-warning"></span> '+__e(i18n("str","disabled"))+"\r\n    ",__p+="\r\n</td>\r\n",canManage&&(__p+='\r\n<td class="text-right">\r\n    <div class="item-action dropdown">\r\n        <a href="#" data-toggle="dropdown" class="icon"><i class="fe fe-more-vertical"></i></a>\r\n        <div class="dropdown-menu dropdown-menu-right">\r\n            <a href="#" class="edit dropdown-item"><i class="dropdown-icon fe fe-edit"></i> '+__e(i18n("str","edit"))+'</a>\r\n            <a href="#" class="able dropdown-item"><i class="dropdown-icon fe fe-power"></i> '+__e(i18n("str",enabled?"disable":"enable"))+'</a>\r\n            <div class="dropdown-divider"></div>\r\n            <a href="#" class="delete dropdown-item"><i class="dropdown-icon fe fe-trash-2"></i> '+__e(i18n("str","delete"))+"</a>\r\n        </div>\r\n    </div>\r\n</td>\r\n")}return __p}}).call(this,__webpack_require__(3))},251:function(module,exports,__webpack_require__){(function(_){module.exports=function(obj){obj||(obj={});var __t,__p="",__e=_.escape,__j=Array.prototype.join;function print(){__p+=__j.call(arguments,"")}with(obj)__p+='<thead>\r\n    <th width="30">&nbsp;</th>\r\n    <th>'+__e(i18n("streams","incoming-port"))+"</th>\r\n    <th>"+__e(i18n("str","destination"))+"</th>\r\n    <th>"+__e(i18n("streams","protocol"))+"</th>\r\n    <th>"+__e(i18n("str","status"))+"</th>\r\n    ",canManage&&(__p+="\r\n    <th>&nbsp;</th>\r\n    "),__p+="\r\n</thead>\r\n<tbody>\r\n    \x3c!-- items --\x3e\r\n</tbody>\r\n";return __p}}).call(this,__webpack_require__(3))},252:function(module,exports,__webpack_require__){(function(_){module.exports=function(obj){obj||(obj={});var __t,__p="",__e=_.escape,__j=Array.prototype.join;function print(){__p+=__j.call(arguments,"")}with(obj)__p+='<div class="card">\r\n    <div class="card-status bg-blue"></div>\r\n    <div class="card-header">\r\n        <h3 class="card-title">'+__e(i18n("streams","title"))+'</h3>\r\n        <div class="card-options">\r\n            <a href="#" class="btn btn-outline-secondary btn-sm ml-2 help"><i class="fe fe-help-circle"></i></a>\r\n            ',showAddButton&&(__p+='\r\n            <a href="#" class="btn btn-outline-blue btn-sm ml-2 add-item">'+__e(i18n("streams","add"))+"</a>\r\n            "),__p+='\r\n        </div>\r\n    </div>\r\n    <div class="card-body no-padding min-100">\r\n        <div class="dimmer active">\r\n            <div class="loader"></div>\r\n            <div class="dimmer-content list-region">\r\n                \x3c!-- List Region --\x3e\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n';return __p}}).call(this,__webpack_require__(3))}}]);