(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{194:function(t,n,e){const o=e(6),s=e(263);t.exports=o.View.extend({template:s,className:"modal-dialog wide",templateContext:function(){let t=this.getOption("content").split("\n");return{title:this.getOption("title"),content:"<p>"+t.join("</p><p>")+"</p>"}}})},263:function(module,exports,__webpack_require__){(function(_){module.exports=function(obj){obj||(obj={});var __t,__p="",__e=_.escape;with(obj)__p+='<div class="modal-content">\r\n    <div class="modal-header">\r\n        <h5 class="modal-title">'+__e(title)+'</h5>\r\n        <button type="button" class="close cancel" aria-label="Close" data-dismiss="modal">&nbsp;</button>\r\n    </div>\r\n    <div class="modal-body">\r\n        '+(null==(__t=content)?"":__t)+'\r\n    </div>\r\n    <div class="modal-footer">\r\n        <button type="button" class="btn btn-secondary cancel" data-dismiss="modal">'+__e(i18n("str","close"))+"</button>\r\n    </div>\r\n</div>\r\n";return __p}}).call(this,__webpack_require__(3))}}]);