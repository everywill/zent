webpackJsonp([24],{779:function(s,n,a){"use strict";function t(s){return s&&s.__esModule?s:{default:s}}function e(s){return C.default.createElement(s.tag,(0,p.default)({},s.attributes,{dangerouslySetInnerHTML:{__html:s.html}}))}function l(s){return C.default.createElement(e,{tag:"section",html:s.html})}function c(s){return C.default.createElement(e,{tag:"style",html:s.style})}var h=a(12),p=t(h),d=a(1),r=t(d),o=a(2),i=t(o),u=a(5),g=t(u),m=a(4),j=t(m),k=a(3),f=t(k),b=a(0),C=t(b),x=a(177),y=function(){var s=function(s){function n(){var s,a,t,e;(0,i.default)(this,n);for(var l=arguments.length,c=Array(l),h=0;h<l;h++)c[h]=arguments[h];return a=t=(0,j.default)(this,(s=n.__proto__||(0,r.default)(n)).call.apply(s,[this].concat(c))),t.state={checked:!0},t.handleChange=function(s){t.setState({checked:s.target.checked})},e=a,(0,j.default)(t,e)}return(0,f.default)(n,s),(0,g.default)(n,[{key:"render",value:function(){var s=this.state.checked;return C.default.createElement(x.Checkbox,{checked:s,onChange:this.handleChange},"Checkbox")}}]),n}(C.default.Component);return C.default.createElement(s,null)}(),v=function(){return C.default.createElement("div",null,C.default.createElement(x.Checkbox,{checked:!0,disabled:!0}),C.default.createElement(x.Checkbox,{disabled:!0}))}(),E=function(){var s=x.Checkbox.Group,n=function(n){function a(){var s,n,t,e;(0,i.default)(this,a);for(var l=arguments.length,c=Array(l),h=0;h<l;h++)c[h]=arguments[h];return n=t=(0,j.default)(this,(s=a.__proto__||(0,r.default)(a)).call.apply(s,[this].concat(c))),t.state={checkedList:[]},t.onChange=function(s){t.setState({checkedList:s})},e=n,(0,j.default)(t,e)}return(0,f.default)(a,n),(0,g.default)(a,[{key:"render",value:function(){var n=this.state.checkedList;return C.default.createElement("div",null,C.default.createElement(s,{value:n,onChange:this.onChange},C.default.createElement(x.Checkbox,{value:"Apple"},"苹果"),C.default.createElement(x.Checkbox,{value:"Pear"},"梨子"),C.default.createElement(x.Checkbox,{value:"Orange"},"橘子"),C.default.createElement(x.Checkbox,{value:"OrangeDisabled",disabled:!0},"烂橘子")))}}]),a}(C.default.Component);return C.default.createElement(n,null)}(),w=function(){var s=x.Checkbox.Group,n=["Item 1","Item 2","Item 3"],a=function(a){function t(){var s,a,e,l;(0,i.default)(this,t);for(var c=arguments.length,h=Array(c),p=0;p<c;p++)h[p]=arguments[p];return a=e=(0,j.default)(this,(s=t.__proto__||(0,r.default)(t)).call.apply(s,[this].concat(h))),e.state={checkedList:[]},e.handleCheckedAll=function(s){e.setState({checkedList:s.target.checked?n.slice():[]})},l=a,(0,j.default)(e,l)}return(0,f.default)(t,a),(0,g.default)(t,[{key:"handleChange",value:function(s){this.setState({checkedList:s})}},{key:"render",value:function(){var a=this.state.checkedList,t=!!a.length&&a.length===n.length,e=!!a.length&&a.length!==n.length;return C.default.createElement("div",null,C.default.createElement(x.Checkbox,{checked:t,indeterminate:e,onChange:this.handleCheckedAll},"全选"),C.default.createElement("hr",null),C.default.createElement(s,{value:a,onChange:this.handleChange.bind(this)},n.map(function(s){return C.default.createElement(x.Checkbox,{key:s,value:s},s)})))}}]),t}(b.Component);return C.default.createElement(a,null)}(),_=function(s){function n(){var s,a,t,e;(0,i.default)(this,n);for(var l=arguments.length,c=Array(l),h=0;h<l;h++)c[h]=arguments[h];return a=t=(0,j.default)(this,(s=n.__proto__||(0,r.default)(n)).call.apply(s,[this].concat(c))),t.state={showCode:!0},t.toggle=function(){t.setState({showCode:!t.state.showCode})},e=a,(0,j.default)(t,e)}return(0,f.default)(n,s),(0,g.default)(n,[{key:"render",value:function(){var s=this.state.showCode,n=this.props,a=n.title,t=n.src,l=n.demo;return C.default.createElement("div",{className:"zandoc-react-demo"},C.default.createElement("div",{className:"zandoc-react-demo__preview"},l),C.default.createElement("div",{className:"zandoc-react-demo__bottom",onClick:this.toggle},C.default.createElement("i",{className:"zenticon zenticon-right zandoc-react-demo__toggle "+(s?"zandoc-react-demo__toggle-on":"zandoc-react-demo__toggle-off")}),C.default.createElement(e,{tag:"div",attributes:{className:"zandoc-react-demo__title"},html:a})),s&&C.default.createElement(e,{tag:"pre",html:t,attributes:{className:"zandoc-react-demo__code"}}))}}]),n}(b.Component);s.exports=function(s){function n(){return(0,i.default)(this,n),(0,j.default)(this,(n.__proto__||(0,r.default)(n)).apply(this,arguments))}return(0,f.default)(n,s),(0,g.default)(n,[{key:"render",value:function(){return C.default.createElement("div",{className:"zandoc-react-container "},C.default.createElement(c,{style:".zent-checkbox-doc-p {\n\t\tfont-size: 12px;\n\t\tline-height: 2em;\n\t}"}),C.default.createElement(l,{html:'<h2 id="checkbox -duo-xuan"><a href="#checkbox%20-duo-xuan">¶</a>Checkbox 多选</h2>\n<h3 id="shi-yong-zhi-nan"><a href="#shi-yong-zhi-nan">¶</a>使用指南</h3>\n<ul>\n<li>\n<p>Checkbox 表现为一个<a href="">受控组件</a>, 需要设置 <code>onChange</code> 回调在组件外部处理其 <code>value</code> 属性的变化.</p>\n</li>\n<li>\n<p><code>value</code> 支持任意类型的值, 包括引用类型.</p>\n</li>\n</ul>\n<h3 id="dai-ma-yan-shi"><a href="#dai-ma-yan-shi">¶</a>代码演示</h3>'}),C.default.createElement(_,{title:"<p>基本用法</p>",src:'<span class="hljs-keyword">import</span> { Checkbox } <span class="hljs-keyword">from</span> <span class="hljs-string">\'zent\'</span>;\n\n<span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">App</span> <span class="hljs-keyword">extends</span> <span class="hljs-title">React</span>.<span class="hljs-title">Component</span> </span>{\n\n  state = {\n    <span class="hljs-attr">checked</span>: <span class="hljs-literal">true</span>\n  }\n\n  handleChange = <span class="hljs-function">(<span class="hljs-params">e</span>) =&gt;</span> {\n    <span class="hljs-keyword">this</span>.setState({\n      <span class="hljs-attr">checked</span>: e.target.checked\n    })\n  }\n\n  render() {\n    <span class="hljs-keyword">const</span> { checked } = <span class="hljs-keyword">this</span>.state\n    <span class="hljs-keyword">return</span> (\n      <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">Checkbox</span> <span class="hljs-attr">checked</span>=<span class="hljs-string">{checked}</span> <span class="hljs-attr">onChange</span>=<span class="hljs-string">{this.handleChange}</span>&gt;</span>Checkbox<span class="hljs-tag">&lt;/<span class="hljs-name">Checkbox</span>&gt;</span></span>\n    )\n  }\n}\n\nReactDOM.render(\n  <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">App</span> /&gt;</span>\n  , mountNode\n);</span>',demo:y}),C.default.createElement(_,{title:"<p>不可用</p>",src:'<span class="hljs-keyword">import</span> { Checkbox } <span class="hljs-keyword">from</span> <span class="hljs-string">\'zent\'</span>;\n\nReactDOM.render(\n  &lt;div&gt;\n    &lt;Checkbox checked disabled /&gt;\n    &lt;Checkbox disabled /&gt;\n  &lt;/div&gt;\n  , mountNode\n);',demo:v}),C.default.createElement(_,{title:"<p>Checkbox组</p>",src:'<span class="hljs-keyword">import</span> { Checkbox } <span class="hljs-keyword">from</span> <span class="hljs-string">\'zent\'</span>;\n<span class="hljs-keyword">const</span> CheckboxGroup = Checkbox.Group;\n\n<span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">App</span> <span class="hljs-keyword">extends</span> <span class="hljs-title">React</span>.<span class="hljs-title">Component</span> </span>{\n\n  state = {\n    <span class="hljs-attr">checkedList</span>: []\n  }\n\n  onChange = <span class="hljs-function">(<span class="hljs-params">checkedList</span>) =&gt;</span> {\n    <span class="hljs-keyword">this</span>.setState({ checkedList });\n  }\n\n  render() {\n    <span class="hljs-keyword">const</span> { checkedList } = <span class="hljs-keyword">this</span>.state;\n\n    <span class="hljs-keyword">return</span> (\n      <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">CheckboxGroup</span> <span class="hljs-attr">value</span>=<span class="hljs-string">{checkedList}</span> <span class="hljs-attr">onChange</span>=<span class="hljs-string">{this.onChange}</span>&gt;</span>\n          <span class="hljs-tag">&lt;<span class="hljs-name">Checkbox</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"Apple"</span>&gt;</span>苹果<span class="hljs-tag">&lt;/<span class="hljs-name">Checkbox</span>&gt;</span>\n          <span class="hljs-tag">&lt;<span class="hljs-name">Checkbox</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"Pear"</span>&gt;</span>梨子<span class="hljs-tag">&lt;/<span class="hljs-name">Checkbox</span>&gt;</span>\n          <span class="hljs-tag">&lt;<span class="hljs-name">Checkbox</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"Orange"</span>&gt;</span>橘子<span class="hljs-tag">&lt;/<span class="hljs-name">Checkbox</span>&gt;</span>\n          <span class="hljs-tag">&lt;<span class="hljs-name">Checkbox</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"OrangeDisabled"</span> <span class="hljs-attr">disabled</span>&gt;</span>烂橘子<span class="hljs-tag">&lt;/<span class="hljs-name">Checkbox</span>&gt;</span>\n        <span class="hljs-tag">&lt;/<span class="hljs-name">CheckboxGroup</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>\n    );\n  }\n}\n\nReactDOM.render(\n  <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">App</span> /&gt;</span>\n  , mountNode\n);</span>',demo:E}),C.default.createElement(_,{title:"<p>全选，在实现全选效果时，你可能会用到 indeterminate 属性。</p>",src:'<span class="hljs-keyword">import</span> { Checkbox } <span class="hljs-keyword">from</span> <span class="hljs-string">\'zent\'</span>\n\n<span class="hljs-keyword">const</span> CheckboxGroup = Checkbox.Group\n<span class="hljs-keyword">const</span> ITEMS = [<span class="hljs-string">\'Item 1\'</span>, <span class="hljs-string">\'Item 2\'</span>, <span class="hljs-string">\'Item 3\'</span>]\n\n<span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">App</span> <span class="hljs-keyword">extends</span> <span class="hljs-title">Component</span> </span>{\n\n  state = {\n    <span class="hljs-attr">checkedList</span>: []\n  }\n\n  handleCheckedAll = <span class="hljs-function">(<span class="hljs-params">e</span>) =&gt;</span> {\n    <span class="hljs-keyword">this</span>.setState({\n      <span class="hljs-attr">checkedList</span>: e.target.checked ? ITEMS.slice() : []\n    })\n  }\n\n  handleChange(checkedList) {\n    <span class="hljs-keyword">this</span>.setState({ checkedList })\n  }\n\n  render() {\n    <span class="hljs-keyword">const</span> { checkedList } = <span class="hljs-keyword">this</span>.state\n    <span class="hljs-keyword">const</span> checkedAll = !!checkedList.length &amp;&amp; (checkedList.length === ITEMS.length)\n    <span class="hljs-keyword">const</span> indeterminate = !!checkedList.length &amp;&amp; (checkedList.length !== ITEMS.length)\n\n    <span class="hljs-keyword">return</span> (\n      <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">Checkbox</span> \n          <span class="hljs-attr">checked</span>=<span class="hljs-string">{checkedAll}</span>\n          <span class="hljs-attr">indeterminate</span>=<span class="hljs-string">{indeterminate}</span>\n          <span class="hljs-attr">onChange</span>=<span class="hljs-string">{this.handleCheckedAll}</span>\n        &gt;</span>全选<span class="hljs-tag">&lt;/<span class="hljs-name">Checkbox</span>&gt;</span>\n\n        <span class="hljs-tag">&lt;<span class="hljs-name">hr</span> /&gt;</span>\n\n        <span class="hljs-tag">&lt;<span class="hljs-name">CheckboxGroup</span> \n          <span class="hljs-attr">value</span>=<span class="hljs-string">{checkedList}</span>\n          <span class="hljs-attr">onChange</span>=<span class="hljs-string">{this.handleChange.bind(this)}</span>\n        &gt;</span>\n          {ITEMS.map(item =&gt; {\n                        return <span class="hljs-tag">&lt;<span class="hljs-name">Checkbox</span> <span class="hljs-attr">key</span>=<span class="hljs-string">{item}</span> <span class="hljs-attr">value</span>=<span class="hljs-string">{item}</span>&gt;</span>{item}<span class="hljs-tag">&lt;/<span class="hljs-name">Checkbox</span>&gt;</span>\n                    })}\n        <span class="hljs-tag">&lt;/<span class="hljs-name">CheckboxGroup</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>\n    )\n  }\n}\n\nReactDOM.render(\n  <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">App</span> /&gt;</span>\n  , mountNode\n);</span>',demo:w}),C.default.createElement(l,{html:'<h3 id="checkbox api"><a href="#checkbox%20api">¶</a>Checkbox API</h3>\n<table class="table">\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>checked</td>\n<td>指定当前是否选中</td>\n<td>bool</td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>value</td>\n<td>组件对应的值，在\n<code>CheckboxGroup</code>\n中使用</td>\n<td>any</td>\n<td></td>\n</tr>\n<tr>\n<td>disabled</td>\n<td>使组件不可用</td>\n<td>bool</td>\n<td></td>\n</tr>\n<tr>\n<td>indeterminate</td>\n<td>展示部分选中的模式</td>\n<td>bool</td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>onChange</td>\n<td>变化时回调函数</td>\n<td>func(e:Event)</td>\n<td></td>\n</tr>\n<tr>\n<td>className</td>\n<td>自定义额外类名</td>\n<td>string</td>\n<td></td>\n</tr>\n<tr>\n<td>prefix</td>\n<td>自定义前缀</td>\n<td>string</td>\n<td><code>\'zent\'</code></td>\n</tr>\n</tbody>\n</table>\n<h3 id="checkbox group api"><a href="#checkbox%20group%20api">¶</a>Checkbox Group API</h3>\n<table class="table">\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>value</td>\n<td>必填，指定选中的选项</td>\n<td>array</td>\n<td><code>[]</code></td>\n</tr>\n<tr>\n<td>isValueEqual</td>\n<td>可选，判断value值是否相等</td>\n<td>func(a, b)</td>\n<td><code>() => a === b</code></td>\n</tr>\n<tr>\n<td>disabled</td>\n<td>使组件不可用</td>\n<td>bool</td>\n<td></td>\n</tr>\n<tr>\n<td>onChange</td>\n<td>变化时回调函数</td>\n<td>func(checkedValueList)</td>\n<td></td>\n</tr>\n<tr>\n<td>className</td>\n<td>自定义额外类名</td>\n<td>string</td>\n<td></td>\n</tr>\n<tr>\n<td>prefix</td>\n<td>自定义前缀</td>\n<td>string</td>\n<td><code>\'zent\'</code></td>\n</tr>\n</tbody>\n</table>'}))}}]),n}(b.Component)}});