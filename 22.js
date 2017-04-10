webpackJsonp([22],{781:function(n,s,t){"use strict";function a(n){return n&&n.__esModule?n:{default:n}}function e(n){return y.default.createElement(n.tag,(0,c.default)({},n.attributes,{dangerouslySetInnerHTML:{__html:n.html}}))}function l(n){return y.default.createElement(e,{tag:"section",html:n.html})}function o(n){return y.default.createElement(e,{tag:"style",html:n.style})}var d=t(12),c=a(d),p=t(1),r=a(p),i=t(2),h=a(i),g=t(5),u=a(g),m=t(4),f=a(m),j=t(3),v=a(j),b=t(0),y=a(b),D=t(178),k=function(){var n=function(n){function s(){var n,t,a,e;(0,h.default)(this,s);for(var l=arguments.length,o=Array(l),d=0;d<l;d++)o[d]=arguments[d];return t=a=(0,f.default)(this,(n=s.__proto__||(0,r.default)(s)).call.apply(n,[this].concat(o))),a.state={visible:!1},a.triggerDialog=function(n){a.setState({visible:n})},e=t,(0,f.default)(a,e)}return(0,v.default)(s,n),(0,u.default)(s,[{key:"render",value:function(){var n=this,s=void 0;return this.state.visible&&(s=y.default.createElement(D.Dialog,{visible:this.state.visible,onClose:function(){return n.triggerDialog(!1)},title:"对话框"},y.default.createElement("p",null,"对话框内容"),y.default.createElement("p",null,"对话框其他内容"))),y.default.createElement("div",null,y.default.createElement("button",{className:"zent-btn zent-btn-primary",onClick:function(){return n.triggerDialog(!0)}},"显示"),s)}}]),s}(y.default.Component);return y.default.createElement(n,null)}(),_=function(){var n=D.Dialog.openDialog,s=function(){var s=n({title:"使用openDialog直接打开对话框",children:y.default.createElement("div",null,"Hello World"),footer:y.default.createElement(D.Button,{onClick:function(){return s()}},"关闭"),onClose:function(){console.log("outer dialog closed")}})};return y.default.createElement(D.Button,{onClick:s},"打开")}(),E=function(n){function s(){var n,t,a,e;(0,h.default)(this,s);for(var l=arguments.length,o=Array(l),d=0;d<l;d++)o[d]=arguments[d];return t=a=(0,f.default)(this,(n=s.__proto__||(0,r.default)(s)).call.apply(n,[this].concat(o))),a.state={showCode:!0},a.toggle=function(){a.setState({showCode:!a.state.showCode})},e=t,(0,f.default)(a,e)}return(0,v.default)(s,n),(0,u.default)(s,[{key:"render",value:function(){var n=this.state.showCode,s=this.props,t=s.title,a=s.src,l=s.demo;return y.default.createElement("div",{className:"zandoc-react-demo"},y.default.createElement("div",{className:"zandoc-react-demo__preview"},l),y.default.createElement("div",{className:"zandoc-react-demo__bottom",onClick:this.toggle},y.default.createElement("i",{className:"zenticon zenticon-right zandoc-react-demo__toggle "+(n?"zandoc-react-demo__toggle-on":"zandoc-react-demo__toggle-off")}),y.default.createElement(e,{tag:"div",attributes:{className:"zandoc-react-demo__title"},html:t})),n&&y.default.createElement(e,{tag:"pre",html:a,attributes:{className:"zandoc-react-demo__code"}}))}}]),s}(b.Component);n.exports=function(n){function s(){return(0,h.default)(this,s),(0,f.default)(this,(s.__proto__||(0,r.default)(s)).apply(this,arguments))}return(0,v.default)(s,n),(0,u.default)(s,[{key:"render",value:function(){return y.default.createElement("div",{className:"zandoc-react-container "},y.default.createElement(o,{style:""}),y.default.createElement(l,{html:'<h2 id="dialog -dui-hua-kuang"><a href="#dialog%20-dui-hua-kuang">¶</a>Dialog 对话框</h2>\n<p>对话框，通过打开一个浮层的方式，避免打扰用户的操作流程。</p>\n<h3 id="shi-yong-zhi-nan"><a href="#shi-yong-zhi-nan">¶</a>使用指南</h3>\n<ul>\n<li>\n<p>命令式, 直接调用 <code>openDialog</code> 函数, <strong>不支持 <code>context</code>。</strong></p>\n</li>\n<li>\n<p>组件式, 通过控制 <code>visible</code> 来显示／隐藏对话框, <strong>支持 <code>context</code>。</strong></p>\n</li>\n<li>\n<p>推荐使用命令式, 不需要在外部维护一个 <code>visible</code> 属性, 更加方便。</p>\n</li>\n</ul>\n<h3 id="dai-ma-yan-shi"><a href="#dai-ma-yan-shi">¶</a>代码演示</h3>'}),y.default.createElement(E,{title:"<p>基础用法</p>",src:'<span class="hljs-keyword">import</span> { Dialog } <span class="hljs-keyword">from</span> <span class="hljs-string">\'zent\'</span>;\n\n<span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">Example</span> <span class="hljs-keyword">extends</span> <span class="hljs-title">React</span>.<span class="hljs-title">Component</span> </span>{\n  state = { <span class="hljs-attr">visible</span>: <span class="hljs-literal">false</span> }\n\n  triggerDialog = <span class="hljs-function"><span class="hljs-params">visible</span> =&gt;</span> {\n    <span class="hljs-keyword">this</span>.setState({ visible });\n  };\n\n  render() {\n    <span class="hljs-keyword">let</span> dialog;\n    <span class="hljs-keyword">if</span> (<span class="hljs-keyword">this</span>.state.visible) {\n      dialog = (\n        <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">Dialog</span>\n          <span class="hljs-attr">visible</span>=<span class="hljs-string">{this.state.visible}</span>\n          <span class="hljs-attr">onClose</span>=<span class="hljs-string">{()</span> =&gt;</span> this.triggerDialog(false)}\n          title="对话框"\n        &gt;\n          <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>对话框内容<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n          <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>对话框其他内容<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n        <span class="hljs-tag">&lt;/<span class="hljs-name">Dialog</span>&gt;</span></span>);\n    }\n\n    <span class="hljs-keyword">return</span> (\n      <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">button</span>\n          <span class="hljs-attr">className</span>=<span class="hljs-string">"zent-btn zent-btn-primary"</span>\n          <span class="hljs-attr">onClick</span>=<span class="hljs-string">{()</span> =&gt;</span> this.triggerDialog(true)}\n        &gt;\n          显示\n        <span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n        {dialog}\n      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>\n    );\n  }\n}\n\nReactDOM.render(<span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">Example</span> /&gt;</span>, mountNode);</span>',demo:k}),y.default.createElement(E,{title:"<p>使用 openDialog 开启对话框</p>",src:'<span class="hljs-keyword">import</span> { Dialog, Button } <span class="hljs-keyword">from</span> <span class="hljs-string">\'zent\'</span>;\n\n<span class="hljs-keyword">const</span> { openDialog } = Dialog;\n\n<span class="hljs-keyword">const</span> open = <span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {\n  <span class="hljs-keyword">const</span> close = openDialog({\n    <span class="hljs-attr">title</span>: <span class="hljs-string">\'使用openDialog直接打开对话框\'</span>,\n    <span class="hljs-attr">children</span>: <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>Hello World<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>,\n    <span class="hljs-attr">footer</span>: <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">Button</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{()</span> =&gt;</span> close()}&gt;关闭<span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span></span>,\n    onClose() {\n      <span class="hljs-built_in">console</span>.log(<span class="hljs-string">\'outer dialog closed\'</span>);\n    }\n  });\n};\n\nReactDOM.render(<span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">Button</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{open}</span>&gt;</span>打开<span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span></span>, mountNode);',demo:_}),y.default.createElement(l,{html:'<h3 id="api"><a href="#api">¶</a>API</h3>\n<table class="table">\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>title</td>\n<td>自定义弹框标题</td>\n<td>node</td>\n<td><code>\'\'</code></td>\n</tr>\n<tr>\n<td>children</td>\n<td>弹框内容: \n<code>&#x3C;Dialog>xxxx&#x3C;/Dialog></code></td>\n<td>node</td>\n<td><code>null</code></td>\n</tr>\n<tr>\n<td>footer</td>\n<td>底部内容</td>\n<td>node</td>\n<td><code>null</code></td>\n</tr>\n<tr>\n<td>visible</td>\n<td>是否打开对话框</td>\n<td>bool</td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>closeBtn</td>\n<td>是否显示右上角关闭按钮</td>\n<td>bool</td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>onClose</td>\n<td>关闭操作回调函数</td>\n<td>func</td>\n<td><code>noop</code></td>\n</tr>\n<tr>\n<td>mask</td>\n<td>是否显示遮罩</td>\n<td>bool</td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>maskClosable</td>\n<td>点击遮罩是否可以关闭</td>\n<td>bool</td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>className</td>\n<td>自定义额外类名</td>\n<td>string</td>\n<td><code>\'\'</code></td>\n</tr>\n<tr>\n<td>prefix</td>\n<td>自定义前缀</td>\n<td>string</td>\n<td><code>\'zent\'</code></td>\n</tr>\n<tr>\n<td>style</td>\n<td>自定义样式</td>\n<td>object</td>\n<td><code>{}</code></td>\n</tr>\n</tbody>\n</table>\n<h4 id="opendialog"><a href="#opendialog">¶</a>openDialog</h4>\n<p><code>openDialog(options: object): function</code></p>\n<p><strong><code>options</code> 参数支持组件除 <code>visible</code> 以外的所有属性.</strong></p>\n<p>如果需要组件实例的引用, 可以传一个函数形式的 <code>ref</code> 给 <code>openDialog</code>, <strong>不支持字符串形式的 <code>ref</code>.</strong></p>\n<p>返回值是一个手动关闭 Dialog 的函数 <code>closeDialog()</code>, <code>closeDialog(false)</code> 将不会触发Dialog的 <code>onClose</code> 方法</p>\n<p>重复调用 <code>closeDialog</code> 等效于执行 <code>noop</code> 函数.</p>\n<h4 id="zhi-ding-dialog-kuan-du"><a href="#zhi-ding-dialog-kuan-du">¶</a>指定Dialog宽度</h4>\n<p>在 <code>style</code> 中可以指定弹出窗口的宽度, e.g. <code>style={{ width: \'600px\' }}</code>.</p>\n<p>默认情况下弹出窗口会自适应内容的宽度, 同时有最小宽度和最大宽度.</p>'}))}}]),s}(b.Component)}});