(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{184:function(n,t,e){const o=e(6),s=e(2),r=e(240);n.exports=o.View.extend({template:r,className:"modal-dialog",ui:{form:"form",buttons:".modal-footer button",cancel:"button.cancel",save:"button.save"},events:{"click @ui.save":function(n){n.preventDefault(),s.Api.Nginx.ProxyHosts.delete(this.model.get("id")).then(()=>{s.Controller.showNginxProxy(),s.UI.closeModal()}).catch(n=>{alert(n.message),this.ui.buttons.prop("disabled",!1).removeClass("btn-disabled")})}}})},240:function(module,exports,__webpack_require__){(function(_){module.exports=function(obj){obj||(obj={});var __t,__p="",__e=_.escape,__j=Array.prototype.join;function print(){__p+=__j.call(arguments,"")}with(obj)__p+='<div class="modal-content">\r\n    <div class="modal-header">\r\n        <h5 class="modal-title">'+__e(i18n("proxy-hosts","delete"))+'</h5>\r\n        <button type="button" class="close cancel" aria-label="Close" data-dismiss="modal">&nbsp;</button>\r\n    </div>\r\n    <div class="modal-body">\r\n        <form>\r\n            <div class="row">\r\n                <div class="col-sm-12 col-md-12">\r\n                    '+(null==(__t=i18n("proxy-hosts","delete-confirm",{domains:domain_names.join(", ")}))?"":__t)+"\r\n                    ",certificate_id&&(__p+="\r\n                        <br><br>\r\n                        "+__e(i18n("ssl","delete-ssl"))+"\r\n                    "),__p+='\r\n                </div>\r\n            </div>\r\n        </form>\r\n    </div>\r\n    <div class="modal-footer">\r\n        <button type="button" class="btn btn-secondary cancel" data-dismiss="modal">'+__e(i18n("str","cancel"))+'</button>\r\n        <button type="button" class="btn btn-danger save">'+__e(i18n("str","sure"))+"</button>\r\n    </div>\r\n</div>\r\n";return __p}}).call(this,__webpack_require__(3))}}]);