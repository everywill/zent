webpackJsonp([17],{787:function(s,a,n){"use strict";function t(s){return s&&s.__esModule?s:{default:s}}function l(s){return k.default.createElement(s.tag,(0,M.default)({},s.attributes,{dangerouslySetInnerHTML:{__html:s.html}}))}function e(s){return k.default.createElement(l,{tag:"section",html:s.html})}function p(s){return k.default.createElement(l,{tag:"style",html:s.style})}var c=n(1),h=t(c),d=n(2),r=t(d),u=n(5),m=t(u),j=n(4),g=t(j),o=n(3),i=t(o),f=n(12),M=t(f),y=n(0),k=t(y),I=n(177),b=function(){var s=I.Menu.MenuItem,a=function(s,a){console.log(s,a)},n=function(){return k.default.createElement(I.Menu,{onClick:a,className:"hello"},k.default.createElement(s,{key:"1-1",className:"food"},"食品分类"),k.default.createElement(s,{key:"1-2",disabled:!0},"服装分类"))};return k.default.createElement(n,null)}(),E=function(){var s=I.Menu.MenuItem,a=I.Menu.SubMenu,n=function(s,a){console.log(s,a)},t=function(){return k.default.createElement(I.Menu,{onClick:n,className:"hello"},k.default.createElement(s,{key:"1-1",className:"food"},"食品分类"),k.default.createElement(s,{key:"1-2",disabled:!0},"服装分类"),k.default.createElement(a,{title:"电器分类",overlayClassName:"sub"},k.default.createElement(s,{key:"2-1",className:"tv"},"电视机"),k.default.createElement(s,{key:"2-2",disabled:!0},"笔记本"),k.default.createElement(s,{key:"2-3"},"洗衣机")),k.default.createElement(a,{title:"美妆分类",disabled:!0},k.default.createElement(s,{key:"3-1"},"眼影"),k.default.createElement(s,{key:"3-2"},"洗面奶")))};return k.default.createElement(t,null)}(),_=function(){var s=I.Menu.MenuItem,a=I.Menu.SubMenu,n=function(s,a){console.log(s,a)};return k.default.createElement("div",{className:"zent-menu-simple-wrapper"},k.default.createElement(I.Menu,{className:"simple",onClick:n},k.default.createElement(s,null,"广东"),k.default.createElement(a,{title:"江苏"},k.default.createElement(s,null,"苏州"),k.default.createElement(s,null,"无锡"),k.default.createElement(s,null,"常州"),k.default.createElement(s,null,"镇江"),k.default.createElement(a,{title:"南京"},k.default.createElement(s,null,"江宁区"),k.default.createElement(s,null,"仙林区"))),k.default.createElement(s,null,"山东"),k.default.createElement(a,{title:"浙江"},k.default.createElement(a,{title:"杭州"},k.default.createElement(s,null,"西湖区"),k.default.createElement(s,null,"上城区")),k.default.createElement(s,null,"温州"),k.default.createElement(s,null,"绍兴"),k.default.createElement(s,null,"嘉兴"))))}(),w=function(s){function a(){var s,n,t,l;(0,r.default)(this,a);for(var e=arguments.length,p=Array(e),c=0;c<e;c++)p[c]=arguments[c];return n=t=(0,g.default)(this,(s=a.__proto__||(0,h.default)(a)).call.apply(s,[this].concat(p))),t.state={showCode:!0},t.toggle=function(){t.setState({showCode:!t.state.showCode})},l=n,(0,g.default)(t,l)}return(0,i.default)(a,s),(0,m.default)(a,[{key:"render",value:function(){var s=this.state.showCode,a=this.props,n=a.title,t=a.src,e=a.demo;return k.default.createElement("div",{className:"zandoc-react-demo"},k.default.createElement("div",{className:"zandoc-react-demo__preview"},e),k.default.createElement("div",{className:"zandoc-react-demo__bottom",onClick:this.toggle},k.default.createElement("i",{className:"zenticon zenticon-right zandoc-react-demo__toggle "+(s?"zandoc-react-demo__toggle-on":"zandoc-react-demo__toggle-off")}),k.default.createElement(l,{tag:"div",attributes:{className:"zandoc-react-demo__title"},html:n})),s&&k.default.createElement(l,{tag:"pre",html:t,attributes:{className:"zandoc-react-demo__code"}}))}}]),a}(y.Component);s.exports=function(s){function a(){return(0,r.default)(this,a),(0,g.default)(this,(a.__proto__||(0,h.default)(a)).apply(this,arguments))}return(0,i.default)(a,s),(0,m.default)(a,[{key:"render",value:function(){return k.default.createElement("div",{className:"zandoc-react-container "},k.default.createElement(p,{style:""}),k.default.createElement(e,{html:'<h2 id="menu -cai-dan"><a href="#menu%20-cai-dan">¶</a>Menu 菜单</h2>\n<p>菜单，为页面提供导航的菜单</p>\n<h3 id="dai-ma-yan-shi"><a href="#dai-ma-yan-shi">¶</a>代码演示</h3>'}),k.default.createElement(w,{title:"<p>基础用法</p>",src:'<span class="hljs-keyword">import</span> { Menu } <span class="hljs-keyword">from</span> <span class="hljs-string">\'zent\'</span>;\n<span class="hljs-keyword">const</span> { MenuItem } = Menu;\n\n<span class="hljs-keyword">const</span> onClick = <span class="hljs-function">(<span class="hljs-params">e, key</span>) =&gt;</span> {\n  <span class="hljs-built_in">console</span>.log(e, key);\n}\n\n<span class="hljs-keyword">const</span> Example = <span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {\n  <span class="hljs-keyword">return</span> (\n    <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">Menu</span>\n      <span class="hljs-attr">onClick</span>=<span class="hljs-string">{onClick}</span>\n      <span class="hljs-attr">className</span>=<span class="hljs-string">"hello"</span>\n    &gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">MenuItem</span> <span class="hljs-attr">key</span>=<span class="hljs-string">"1-1"</span> <span class="hljs-attr">className</span>=<span class="hljs-string">"food"</span>&gt;</span>食品分类<span class="hljs-tag">&lt;/<span class="hljs-name">MenuItem</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">MenuItem</span> <span class="hljs-attr">key</span>=<span class="hljs-string">"1-2"</span> <span class="hljs-attr">disabled</span>&gt;</span>服装分类<span class="hljs-tag">&lt;/<span class="hljs-name">MenuItem</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">Menu</span>&gt;</span></span>\n  )\n}\n\nReactDOM.render(<span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">Example</span> /&gt;</span>, mountNode);</span>',demo:b}),k.default.createElement(w,{title:"<p>二级菜单</p>",src:'<span class="hljs-keyword">import</span> { Menu } <span class="hljs-keyword">from</span> <span class="hljs-string">\'zent\'</span>;\n<span class="hljs-keyword">const</span> { MenuItem, SubMenu } = Menu;\n\n<span class="hljs-keyword">const</span> onClick = <span class="hljs-function">(<span class="hljs-params">e, key</span>) =&gt;</span> {\n  <span class="hljs-built_in">console</span>.log(e, key);\n}\n\n<span class="hljs-keyword">const</span> Example = <span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {\n  <span class="hljs-keyword">return</span> (\n    <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">Menu</span>\n      <span class="hljs-attr">onClick</span>=<span class="hljs-string">{onClick}</span>\n      <span class="hljs-attr">className</span>=<span class="hljs-string">"hello"</span>\n    &gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">MenuItem</span> <span class="hljs-attr">key</span>=<span class="hljs-string">"1-1"</span> <span class="hljs-attr">className</span>=<span class="hljs-string">"food"</span>&gt;</span>食品分类<span class="hljs-tag">&lt;/<span class="hljs-name">MenuItem</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">MenuItem</span> <span class="hljs-attr">key</span>=<span class="hljs-string">"1-2"</span> <span class="hljs-attr">disabled</span>&gt;</span>服装分类<span class="hljs-tag">&lt;/<span class="hljs-name">MenuItem</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">SubMenu</span> <span class="hljs-attr">title</span>=<span class="hljs-string">{</span>"电器分类"} <span class="hljs-attr">overlayClassName</span>=<span class="hljs-string">"sub"</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">MenuItem</span> <span class="hljs-attr">key</span>=<span class="hljs-string">"2-1"</span> <span class="hljs-attr">className</span>=<span class="hljs-string">"tv"</span>&gt;</span>电视机<span class="hljs-tag">&lt;/<span class="hljs-name">MenuItem</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">MenuItem</span> <span class="hljs-attr">key</span>=<span class="hljs-string">"2-2"</span> <span class="hljs-attr">disabled</span>&gt;</span>笔记本<span class="hljs-tag">&lt;/<span class="hljs-name">MenuItem</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">MenuItem</span> <span class="hljs-attr">key</span>=<span class="hljs-string">"2-3"</span>&gt;</span>洗衣机<span class="hljs-tag">&lt;/<span class="hljs-name">MenuItem</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">SubMenu</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">SubMenu</span> <span class="hljs-attr">title</span>=<span class="hljs-string">{</span>"美妆分类"} <span class="hljs-attr">disabled</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">MenuItem</span> <span class="hljs-attr">key</span>=<span class="hljs-string">"3-1"</span>&gt;</span>眼影<span class="hljs-tag">&lt;/<span class="hljs-name">MenuItem</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">MenuItem</span> <span class="hljs-attr">key</span>=<span class="hljs-string">"3-2"</span>&gt;</span>洗面奶<span class="hljs-tag">&lt;/<span class="hljs-name">MenuItem</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">SubMenu</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">Menu</span>&gt;</span></span>\n  )\n}\n\nReactDOM.render(<span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">Example</span> /&gt;</span>, mountNode);</span>',demo:E}),k.default.createElement(w,{title:"<p>多级嵌套</p>",src:'<span class="hljs-keyword">import</span> { Menu } <span class="hljs-keyword">from</span> <span class="hljs-string">\'zent\'</span>;\n\n<span class="hljs-keyword">const</span> { MenuItem, SubMenu } = Menu;\n<span class="hljs-keyword">const</span> clickHandler = <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">event, key</span>) </span>{\n  <span class="hljs-built_in">console</span>.log(event, key);\n};\n\nReactDOM.render(\n  <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">"zent-menu-simple-wrapper"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">Menu</span> <span class="hljs-attr">className</span>=<span class="hljs-string">"simple"</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{clickHandler}</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">MenuItem</span>&gt;</span>广东<span class="hljs-tag">&lt;/<span class="hljs-name">MenuItem</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">SubMenu</span> <span class="hljs-attr">title</span>=<span class="hljs-string">"江苏"</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">MenuItem</span>&gt;</span>苏州<span class="hljs-tag">&lt;/<span class="hljs-name">MenuItem</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">MenuItem</span>&gt;</span>无锡<span class="hljs-tag">&lt;/<span class="hljs-name">MenuItem</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">MenuItem</span>&gt;</span>常州<span class="hljs-tag">&lt;/<span class="hljs-name">MenuItem</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">MenuItem</span>&gt;</span>镇江<span class="hljs-tag">&lt;/<span class="hljs-name">MenuItem</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">SubMenu</span> <span class="hljs-attr">title</span>=<span class="hljs-string">"南京"</span>&gt;</span>\n          <span class="hljs-tag">&lt;<span class="hljs-name">MenuItem</span>&gt;</span>江宁区<span class="hljs-tag">&lt;/<span class="hljs-name">MenuItem</span>&gt;</span>\n          <span class="hljs-tag">&lt;<span class="hljs-name">MenuItem</span>&gt;</span>仙林区<span class="hljs-tag">&lt;/<span class="hljs-name">MenuItem</span>&gt;</span>\n        <span class="hljs-tag">&lt;/<span class="hljs-name">SubMenu</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">SubMenu</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">MenuItem</span>&gt;</span>山东<span class="hljs-tag">&lt;/<span class="hljs-name">MenuItem</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">SubMenu</span> <span class="hljs-attr">title</span>=<span class="hljs-string">"浙江"</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">SubMenu</span> <span class="hljs-attr">title</span>=<span class="hljs-string">"杭州"</span>&gt;</span>\n          <span class="hljs-tag">&lt;<span class="hljs-name">MenuItem</span>&gt;</span>西湖区<span class="hljs-tag">&lt;/<span class="hljs-name">MenuItem</span>&gt;</span>\n          <span class="hljs-tag">&lt;<span class="hljs-name">MenuItem</span>&gt;</span>上城区<span class="hljs-tag">&lt;/<span class="hljs-name">MenuItem</span>&gt;</span>\n        <span class="hljs-tag">&lt;/<span class="hljs-name">SubMenu</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">MenuItem</span>&gt;</span>温州<span class="hljs-tag">&lt;/<span class="hljs-name">MenuItem</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">MenuItem</span>&gt;</span>绍兴<span class="hljs-tag">&lt;/<span class="hljs-name">MenuItem</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">MenuItem</span>&gt;</span>嘉兴<span class="hljs-tag">&lt;/<span class="hljs-name">MenuItem</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">SubMenu</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">Menu</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>\n    , mountNode\n);',demo:_}),k.default.createElement(e,{html:'<h3 id="api"><a href="#api">¶</a>API</h3>\n<h4 id="menu"><a href="#menu">¶</a>Menu</h4>\n<table class="table">\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>onClick</td>\n<td>点击菜单节点回调</td>\n<td>func</td>\n<td></td>\n</tr>\n<tr>\n<td>className</td>\n<td>节点类名</td>\n<td>string</td>\n<td></td>\n</tr>\n<tr>\n<td>prefix</td>\n<td>自定义前缀</td>\n<td>string</td>\n<td>\'zent\'</td>\n</tr>\n</tbody>\n</table>\n<h4 id="menuitem"><a href="#menuitem">¶</a>MenuItem</h4>\n<table class="table">\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>key</td>\n<td>item 的唯一标志</td>\n<td>string</td>\n<td>内部生成的唯一ID</td>\n</tr>\n<tr>\n<td>disabled</td>\n<td>是否禁用当前菜单项</td>\n<td>bool</td>\n<td></td>\n</tr>\n<tr>\n<td>className</td>\n<td>节点自定义类名</td>\n<td>string</td>\n<td></td>\n</tr>\n<tr>\n<td>prefix</td>\n<td>节点自定义前缀</td>\n<td>string</td>\n<td>\'zent\'</td>\n</tr>\n</tbody>\n</table>\n<h4 id="submenu"><a href="#submenu">¶</a>SubMenu</h4>\n<table class="table">\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>title</td>\n<td>子菜单项显示值</td>\n<td>string</td>\n<td></td>\n</tr>\n<tr>\n<td>disabled</td>\n<td>是否禁用当前子菜单</td>\n<td>bool</td>\n<td></td>\n</tr>\n<tr>\n<td>overlayClassName</td>\n<td>弹出菜单的自定义类名</td>\n<td>string</td>\n<td></td>\n</tr>\n<tr>\n<td>className</td>\n<td>子菜单项自定义类名</td>\n<td>string</td>\n<td></td>\n</tr>\n<tr>\n<td>prefix</td>\n<td>子菜单项自定义前缀</td>\n<td>string</td>\n<td>\'zent\'</td>\n</tr>\n</tbody>\n</table>\n<h3 id="faq"><a href="#faq">¶</a>FAQ</h3>\n<ul>\n<li>\n<p>菜单组件使用统一代理的点击事件回调函数, 其参数为 event 和 key(实际上是节点的 index 属性值)。</p>\n</li>\n<li>\n<p>当 MenuItem 不设置 <code>key</code> 属性时的会按顺序和层级自动生成节点的唯一标识(从0开始)并保存在 <code>index</code> 属性上, 作为 <code>onClick</code> 函数的第二个参数。\n如果手动设置了 <code>key</code> 属性则会被复制到 <code>index</code> 属性, 覆盖自动生成的标识。建议在Menu不复杂的情况下手动为 MenuItem 设置格式合理的 <code>key</code> 属性。</p>\n<pre><code class="hljs">    &#x3C;<span class="hljs-keyword">Menu</span>>\n      &#x3C;<span class="hljs-keyword">MenuItem</span>>   -------- <span class="hljs-string">\'item_0\'</span>\n      &#x3C;SubMenu>\n        &#x3C;<span class="hljs-keyword">MenuItem</span>> -------- <span class="hljs-string">\'item_1_0\'</span>\n        &#x3C;<span class="hljs-keyword">MenuItem</span>> -------- <span class="hljs-string">\'item_1_1\'</span>\n      &#x3C;/SubMenu>\n      &#x3C;<span class="hljs-keyword">MenuItem</span>>   -------- <span class="hljs-string">\'item_2\'</span>\n    &#x3C;/<span class="hljs-keyword">Menu</span>>\n    ```\n</code></pre>\n</li>\n</ul>'}))}}]),a}(y.Component)}});