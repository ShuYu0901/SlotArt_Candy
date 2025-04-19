System.register("chunks:///_virtual/LoadingManager.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var r,n,o,t,a,i,s,l,c,u,p,g,d,b;return{setters:[function(e){r=e.applyDecoratedDescriptor,n=e.inheritsLoose,o=e.initializerDefineProperty,t=e.assertThisInitialized},function(e){a=e.cclegacy,i=e._decorator,s=e.ProgressBar,l=e.Label,c=e.Node,u=e.tween,p=e.v3,g=e.assetManager,d=e.director,b=e.Component}],execute:function(){var f,y,h,L,v,B,m,M,N,w,z;a._RF.push({},"e4d09ssDnxN05rVAUbKncC0","LoadingManager",void 0);var D=i.ccclass,S=i.property;e("LoadingManager",(f=D("LoadingManager"),y=S(s),h=S(l),L=S(c),v=S(l),f((M=r((m=function(e){function r(){for(var r,n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return r=e.call.apply(e,[this].concat(a))||this,o(r,"progressBar",M,t(r)),o(r,"progressLabel",N,t(r)),o(r,"candyNode",w,t(r)),o(r,"statusLabel",z,t(r)),r}return n(r,e),r.prototype.start=function(){for(var e=this,r=0;r<this.candyNode.length;r++){var n=this.candyNode[r].position.x,o=this.candyNode[r].position.y,t=.25*r;u(this.candyNode[r]).delay(t).repeatForever(u().to(.2,{position:p(n,o+40)},{easing:"quadOut"}).to(.3,{position:p(n,o)},{easing:"bounceOut"}).delay(.7)).start()}g.loadBundle("main-bundle",(function(r,n){var o=r/n;e.progressBar&&(e.progressBar.progress=.3*o),e.progressLabel&&(e.progressLabel.string=Math.floor(30*o)+"%")}),(function(r,n){r?console.error("載入資源包失敗：",r):n.loadScene("mainScene",(function(r,n){var o=r/n;e.progressBar&&(e.progressBar.progress=.3+.7*o),e.progressLabel&&(e.progressLabel.string=Math.floor(100*(.3+.7*o))+"%"),o>=.99&&e.statusLabel}),(function(r,n){r?console.error("載入場景失敗：",r):e.scheduleOnce((function(){d.runScene(n)}),.5)}))}))},r}(b)).prototype,"progressBar",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),N=r(m.prototype,"progressLabel",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),w=r(m.prototype,"candyNode",[L],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),z=r(m.prototype,"statusLabel",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),B=m))||B));a._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./LoadingManager.ts"],(function(){return{setters:[null],execute:function(){}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});