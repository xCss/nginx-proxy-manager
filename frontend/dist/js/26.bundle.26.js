(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{197:function(t,n,e){const s=e(6),o=e(2),a=e(274);t.exports=s.View.extend({template:a,className:"modal-dialog",ui:{form:"form",buttons:".modal-footer button",cancel:"button.cancel",save:"button.save"},events:{"click @ui.save":function(t){t.preventDefault(),o.Api.Nginx.AccessLists.delete(this.model.get("id")).then(()=>{o.Controller.showNginxAccess(),o.UI.closeModal()}).catch(t=>{alert(t.message),this.ui.buttons.prop("disabled",!1).removeClass("btn-disabled")})}}})},274:function(module,exports,__webpack_require__){(function(_){module.exports=function(obj){obj||(obj={});var __t,__p="",__e=_.escape,__j=Array.prototype.join;function print(){__p+=__j.call(arguments,"")}with(obj)__p+='<div class="modal-content">\r\n    <div class="modal-header">\r\n        <h5 class="modal-title">'+__e(i18n("access-lists","delete"))+'</h5>\r\n        <button type="button" class="close cancel" aria-label="Close" data-dismiss="modal">&nbsp;</button>\r\n    </div>\r\n    <div class="modal-body">\r\n        <form>\r\n            <div class="row">\r\n                <div class="col-sm-12 col-md-12">\r\n                    '+(null==(__t=i18n("access-lists","delete-confirm"))?"":__t)+"\r\n                    ",proxy_host_count&&(__p+="\r\n                        <br><br>\r\n                        "+__e(i18n("access-lists","delete-has-hosts",{count:proxy_host_count}))+"\r\n                    "),__p+='\r\n                </div>\r\n            </div>\r\n        </form>\r\n    </div>\r\n    <div class="modal-footer">\r\n        <button type="button" class="btn btn-secondary cancel" data-dismiss="modal">'+__e(i18n("str","cancel"))+'</button>\r\n        <button type="button" class="btn btn-danger save">'+__e(i18n("str","sure"))+"</button>\r\n    </div>\r\n</div>\r\n";return __p}}).call(this,__webpack_require__(3))}}]);