(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{204:function(e,t,n){const i=n(6),r=n(2),o=n(290),s=n(291),_=n(207),a=n(295);e.exports=i.View.extend({id:"settings",template:a,ui:{list_region:".list-region",add:".add-item",dimmer:".dimmer"},regions:{list_region:"@ui.list_region"},onRender:function(){let e=this;r.Api.Settings.getAll().then(t=>{!e.isDestroyed()&&t&&t.length&&e.showChildView("list_region",new s({collection:new o.Collection(t)}))}).catch(t=>{e.showChildView("list_region",new _({code:t.code,message:t.message,retry:function(){r.Controller.showSettings()}})),console.error(t)}).then(()=>{e.ui.dimmer.removeClass("active")})}})},207:function(e,t,n){const i=n(6),r=n(208);e.exports=i.View.extend({template:r,className:"alert alert-icon alert-warning m-5",ui:{retry:"a.retry"},events:{"click @ui.retry":function(e){e.preventDefault(),this.getOption("retry")()}},templateContext:function(){return{message:this.getOption("message"),code:this.getOption("code"),retry:"function"==typeof this.getOption("retry")}}})},208:function(module,exports,__webpack_require__){(function(_){module.exports=function(obj){obj||(obj={});var __t,__p="",__e=_.escape,__j=Array.prototype.join;function print(){__p+=__j.call(arguments,"")}with(obj)__p+='<i class="fe fe-alert-triangle mr-2" aria-hidden="true"></i>\r\n'+(null==(__t=code?"<strong>"+code+"</strong> &mdash; ":"")?"":__t)+"\r\n"+__e(message)+"\r\n\r\n",retry&&(__p+='\r\n    <br><br><a href="#" class="btn btn-sm btn-warning retry">'+__e(i18n("str","try-again"))+"</a>\r\n"),__p+="\r\n";return __p}}).call(this,__webpack_require__(3))},290:function(e,t,n){const i=n(5),r=i.Model.extend({idAttribute:"id",defaults:function(){return{id:void 0,name:"",description:"",value:null,meta:[]}}});e.exports={Model:r,Collection:i.Collection.extend({model:r})}},291:function(e,t,n){const i=n(6),r=n(292),o=n(294),s=i.CollectionView.extend({tagName:"tbody",childView:r});e.exports=i.View.extend({tagName:"table",className:"table table-hover table-outline table-vcenter card-table",template:o,regions:{body:{el:"tbody",replaceElement:!0}},onRender:function(){this.showChildView("body",new s({collection:this.collection}))}})},292:function(e,t,n){const i=n(6),r=n(2),o=n(293);e.exports=i.View.extend({template:o,tagName:"tr",ui:{edit:"a.edit"},events:{"click @ui.edit":function(e){e.preventDefault(),r.Controller.showSettingForm(this.model)}},initialize:function(){this.listenTo(this.model,"change",this.render)}})},293:function(module,exports,__webpack_require__){(function(_){module.exports=function(obj){obj||(obj={});var __t,__p="",__e=_.escape,__j=Array.prototype.join;function print(){__p+=__j.call(arguments,"")}with(obj)__p+="<td>\r\n    <div>"+__e(name)+'</div>\r\n    <div class="small text-muted">\r\n        '+__e(description)+"\r\n    </div>\r\n</td>\r\n<td>\r\n    <div>\r\n        ","default-site"===id&&(__p+="\r\n            "+__e(i18n("settings","default-site-"+value))+"\r\n        "),__p+='\r\n    </div>\r\n</td>\r\n<td class="text-right">\r\n    <div class="item-action dropdown">\r\n        <a href="#" data-toggle="dropdown" class="icon"><i class="fe fe-more-vertical"></i></a>\r\n        <div class="dropdown-menu dropdown-menu-right">\r\n            <a href="#" class="edit dropdown-item"><i class="dropdown-icon fe fe-edit"></i> '+__e(i18n("str","edit"))+"</a>\r\n        </div>\r\n    </div>\r\n</td>";return __p}}).call(this,__webpack_require__(3))},294:function(module,exports,__webpack_require__){(function(_){module.exports=function(obj){obj||(obj={});var __t,__p="",__e=_.escape;with(obj)__p+="<thead>\r\n    <th>"+__e(i18n("str","name"))+"</th>\r\n    <th>"+__e(i18n("str","value"))+"</th>\r\n    <th>&nbsp;</th>\r\n</thead>\r\n<tbody>\r\n    \x3c!-- items --\x3e\r\n</tbody>\r\n";return __p}}).call(this,__webpack_require__(3))},295:function(module,exports,__webpack_require__){(function(_){module.exports=function(obj){obj||(obj={});var __t,__p="",__e=_.escape;with(obj)__p+='<div class="card">\r\n    <div class="card-status bg-teal"></div>\r\n    <div class="card-header">\r\n        <h3 class="card-title">'+__e(i18n("settings","title"))+'</h3>\r\n    </div>\r\n    <div class="card-body no-padding min-100">\r\n        <div class="dimmer active">\r\n            <div class="loader"></div>\r\n            <div class="dimmer-content list-region">\r\n                \x3c!-- List Region --\x3e\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n';return __p}}).call(this,__webpack_require__(3))}}]);