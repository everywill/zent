webpackJsonp([16],{788:function(s,a,n){"use strict";function t(s){return s&&s.__esModule?s:{default:s}}function l(s){return k.default.createElement(s.tag,(0,y.default)({},s.attributes,{dangerouslySetInnerHTML:{__html:s.html}}))}function e(s){return k.default.createElement(l,{tag:"section",html:s.html})}function c(s){return k.default.createElement(l,{tag:"style",html:s.style})}var p=n(1),o=t(p),r=n(2),i=t(r),d=n(5),u=t(d),h=n(4),m=t(h),f=n(3),g=t(f),j=n(12),y=t(j),N=n(0),k=t(N),E=n(177),v=function(){return k.default.createElement("div",null,k.default.createElement(E.Button,{onClick:function(){return E.Notify.success("成功通知")}},"成功通知"),k.default.createElement(E.Button,{onClick:function(){return E.Notify.error("错误通知")}},"错误通知"))}(),B=function(){function s(){E.Notify.success(k.default.createElement("div",null,k.default.createElement("span",{style:{color:"#f67"}},"颜色"),k.default.createElement("i",null,"斜体"),k.default.createElement("b",null,"粗体")))}return k.default.createElement(E.Button,{onClick:s},"自定义内容通知")}(),_=function(){return k.default.createElement("div",null,k.default.createElement(E.Button,{onClick:function(){return E.Notify.success("成功通知1s",1e3)}},"通知1s"))}(),C=function(){function s(){alert("Notify has over")}return k.default.createElement(E.Button,{onClick:function(){return E.Notify.success("通知结束回调函数",1e3,s)}},"自定义通知结束回调")}(),z=function(){return k.default.createElement("div",null,k.default.createElement(E.Button,{onClick:function(){return E.Notify.success("通知")}},"打开通知"),k.default.createElement(E.Button,{onClick:function(){return E.Notify.clear()}},"清除通知"))}(),w=function(s){function a(){var s,n,t,l;(0,i.default)(this,a);for(var e=arguments.length,c=Array(e),p=0;p<e;p++)c[p]=arguments[p];return n=t=(0,m.default)(this,(s=a.__proto__||(0,o.default)(a)).call.apply(s,[this].concat(c))),t.state={showCode:!0},t.toggle=function(){t.setState({showCode:!t.state.showCode})},l=n,(0,m.default)(t,l)}return(0,g.default)(a,s),(0,u.default)(a,[{key:"render",value:function(){var s=this.state.showCode,a=this.props,n=a.title,t=a.src,e=a.demo;return k.default.createElement("div",{className:"zandoc-react-demo"},k.default.createElement("div",{className:"zandoc-react-demo__preview"},e),k.default.createElement("div",{className:"zandoc-react-demo__bottom",onClick:this.toggle},k.default.createElement("i",{className:"zenticon zenticon-right zandoc-react-demo__toggle "+(s?"zandoc-react-demo__toggle-on":"zandoc-react-demo__toggle-off")}),k.default.createElement(l,{tag:"div",attributes:{className:"zandoc-react-demo__title"},html:n})),s&&k.default.createElement(l,{tag:"pre",html:t,attributes:{className:"zandoc-react-demo__code"}}))}}]),a}(N.Component);s.exports=function(s){function a(){return(0,i.default)(this,a),(0,m.default)(this,(a.__proto__||(0,o.default)(a)).apply(this,arguments))}return(0,g.default)(a,s),(0,u.default)(a,[{key:"render",value:function(){return k.default.createElement("div",{className:"zandoc-react-container "},k.default.createElement(c,{style:""}),k.default.createElement(e,{html:'<h2 id="notify -xiao-xi-tong-zhi"><a href="#notify%20-xiao-xi-tong-zhi">¶</a>Notify 消息通知</h2>\n<p>全局展示通知提醒信息。</p>\n<h3 id="shi-yong-zhi-nan"><a href="#shi-yong-zhi-nan">¶</a>使用指南</h3>\n<ul>\n<li>组件由 3 个函数构成, 使用临时创建的 DOM 节点来渲染组件。</li>\n<li>主要用于提示简要的文字信息。</li>\n<li><code>Notify.success</code> 和 <code>Notify.error</code> 方法会返回一个id，这个id可以作为 <code>Notify.clear(id)</code> 的入参，用于关闭指定notify。</li>\n</ul>\n<h3 id="dai-ma-yan-shi"><a href="#dai-ma-yan-shi">¶</a>代码演示</h3>'}),k.default.createElement(w,{title:"<p>基础用法</p>",src:'<span class="hljs-keyword">import</span> { Notify, Button } <span class="hljs-keyword">from</span> <span class="hljs-string">\'zent\'</span>;\n\nReactDOM.render(\n  <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">Button</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{()</span> =&gt;</span> Notify.success(\'成功通知\')}&gt;成功通知<span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">Button</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{()</span> =&gt;</span> Notify.error(\'错误通知\')}&gt;错误通知<span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>\n  , mountNode\n);',demo:v}),k.default.createElement(w,{title:"<p>自定义通知内容</p>",src:'<span class="hljs-keyword">import</span> { Notify, Button } <span class="hljs-keyword">from</span> <span class="hljs-string">\'zent\'</span>;\n\n<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">customContent</span>(<span class="hljs-params"></span>) </span>{\n  Notify.success(\n    <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">style</span>=<span class="hljs-string">{{</span> <span class="hljs-attr">color:</span> \'#<span class="hljs-attr">f67</span>\' }}&gt;</span>颜色<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">i</span>&gt;</span>斜体<span class="hljs-tag">&lt;/<span class="hljs-name">i</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b</span>&gt;</span>粗体<span class="hljs-tag">&lt;/<span class="hljs-name">b</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>\n  );\n}\n\nReactDOM.render(\n  <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">Button</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{customContent}</span>&gt;</span>自定义内容通知<span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span></span>\n  , mountNode\n);',demo:B}),k.default.createElement(w,{title:"<p>自定义通知显示时间</p>",src:'<span class="hljs-keyword">import</span> { Notify, Button } <span class="hljs-keyword">from</span> <span class="hljs-string">\'zent\'</span>;\n\nReactDOM.render(\n  <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">Button</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{()</span> =&gt;</span> Notify.success(\'成功通知1s\', 1000)}&gt;通知1s<span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>\n  , mountNode\n);',demo:_}),k.default.createElement(w,{title:"<p>自定义通知结束回调</p>",src:'<span class="hljs-keyword">import</span> { Notify, Button } <span class="hljs-keyword">from</span> <span class="hljs-string">\'zent\'</span>;\n\n<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">closeCallback</span>(<span class="hljs-params"></span>) </span>{\n  alert(<span class="hljs-string">\'Notify has over\'</span>);\n}\n\nReactDOM.render(\n  <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">Button</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{()</span> =&gt;</span> Notify.success(\'通知结束回调函数\', 1000, closeCallback)}&gt;自定义通知结束回调<span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span></span>\n  , mountNode\n);',demo:C}),k.default.createElement(w,{title:"<p>清除屏幕所有通知</p>",src:'<span class="hljs-keyword">import</span> { Notify, Button } <span class="hljs-keyword">from</span> <span class="hljs-string">\'zent\'</span>;\n\nReactDOM.render(\n  <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">Button</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{()</span> =&gt;</span> Notify.success(\'通知\')}&gt;打开通知<span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">Button</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{()</span> =&gt;</span> Notify.clear()}&gt;清除通知<span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>\n  , mountNode\n);',demo:z}),k.default.createElement(e,{html:'<h3 id="api"><a href="#api">¶</a>API</h3>\n<table class="table">\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>text</td>\n<td>notify通知文案</td>\n<td>any</td>\n<td><code>\'\'</code></td>\n</tr>\n<tr>\n<td>duration</td>\n<td>持续时间</td>\n<td>number</td>\n<td><code>3000</code></td>\n</tr>\n<tr>\n<td>callback</td>\n<td>自定义notify结束回调</td>\n<td>func</td>\n<td></td>\n</tr>\n</tbody>\n</table>'}))}}]),a}(N.Component)}});