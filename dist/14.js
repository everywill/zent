webpackJsonp([14],{791:function(n,t,e){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}function s(n){return P.default.createElement(n.tag,(0,l.default)({},n.attributes,{dangerouslySetInnerHTML:{__html:n.html}}))}function a(n){return P.default.createElement(s,{tag:"section",html:n.html})}function d(n){return P.default.createElement(s,{tag:"style",html:n.style})}var r=e(12),l=o(r),c=e(1),p=o(c),i=e(2),h=o(i),g=e(5),u=o(g),f=e(4),m=o(f),v=e(3),j=o(v),b=e(0),P=o(b),C=e(177),y=function(){return P.default.createElement(C.Popover,{className:"zent-doc-popover",position:C.Popover.Position.BottomLeft,display:"inline",cushion:5},P.default.createElement(C.Popover.Trigger.Click,null,P.default.createElement(C.Button,{type:"primary"},"点击打开")),P.default.createElement(C.Popover.Content,null,P.default.createElement("div",null,"Popover 弹层内容"),P.default.createElement("div",null,"可以添加任意内容")))}(),B=function(){var n=function(n){function t(){var n,e,o,s;(0,h.default)(this,t);for(var a=arguments.length,d=Array(a),r=0;r<a;r++)d[r]=arguments[r];return e=o=(0,m.default)(this,(n=t.__proto__||(0,p.default)(t)).call.apply(n,[this].concat(d))),o.state={visible:!1},s=e,(0,m.default)(o,s)}return(0,j.default)(t,n),(0,u.default)(t,[{key:"render",value:function(){var n=this;return P.default.createElement("div",{className:"zent-doc-popover-container"},P.default.createElement(C.Popover,{className:"zent-doc-popover",visible:this.state.visible,onVisibleChange:function(t){return n.setState({visible:t})},position:C.Popover.Position.BottomLeft,display:"inline",cushion:5},P.default.createElement(C.Popover.Trigger.Base,null,P.default.createElement(C.Button,{type:"primary",onClick:function(){return n.setState({visible:!0})}},"点击打开")),P.default.createElement(C.Popover.Content,null,P.default.createElement("div",null,"Popover 弹层内容"),P.default.createElement("div",null,"可以添加任意内容"))),P.default.createElement(C.Button,{onClick:function(){return n.setState({visible:!1})}},"关闭"))}}]),t}(b.Component);return P.default.createElement(n,null)}(),x=function(n){function t(){var n,e,o,s;(0,h.default)(this,t);for(var a=arguments.length,d=Array(a),r=0;r<a;r++)d[r]=arguments[r];return e=o=(0,m.default)(this,(n=t.__proto__||(0,p.default)(t)).call.apply(n,[this].concat(d))),o.state={showCode:!0},o.toggle=function(){o.setState({showCode:!o.state.showCode})},s=e,(0,m.default)(o,s)}return(0,j.default)(t,n),(0,u.default)(t,[{key:"render",value:function(){var n=this.state.showCode,t=this.props,e=t.title,o=t.src,a=t.demo;return P.default.createElement("div",{className:"zandoc-react-demo"},P.default.createElement("div",{className:"zandoc-react-demo__preview"},a),P.default.createElement("div",{className:"zandoc-react-demo__bottom",onClick:this.toggle},P.default.createElement("i",{className:"zenticon zenticon-right zandoc-react-demo__toggle "+(n?"zandoc-react-demo__toggle-on":"zandoc-react-demo__toggle-off")}),P.default.createElement(s,{tag:"div",attributes:{className:"zandoc-react-demo__title"},html:e})),n&&P.default.createElement(s,{tag:"pre",html:o,attributes:{className:"zandoc-react-demo__code"}}))}}]),t}(b.Component);n.exports=function(n){function t(){return(0,h.default)(this,t),(0,m.default)(this,(t.__proto__||(0,p.default)(t)).apply(this,arguments))}return(0,j.default)(t,n),(0,u.default)(t,[{key:"render",value:function(){return P.default.createElement("div",{className:"zandoc-react-container "},P.default.createElement(d,{style:".zent-doc-popover {\n\tborder: 1px solid #e5e5e5;\n\tpadding: 10px;\n\tborder-radius: 4px;\n\tbackground: #fff;\n\tfont-size: 14px;\n}\n\n.zent-doc-popover-container .zent-popover-wrapper {\n\tmargin-right: 10px;\n}"}),P.default.createElement(a,{html:'<h2 id="popover -dan-ceng"><a href="#popover%20-dan-ceng">¶</a>Popover 弹层</h2>\n<p>通用的触发式弹层组件, 可以自定义定位算法、触发方式以及弹层显示方式。</p>\n<p><strong>这个组件不提供样式</strong>。气泡提示组件请使用 <code>Pop</code>。</p>\n<h3 id="shi-yong-chang-jing"><a href="#shi-yong-chang-jing">¶</a>使用场景</h3>\n<p>如果 <code>Pop</code> 提供的功能无法满足你的需求，需要实现自定义的触发式弹层时可以使用 <code>Popover</code> 来简化开发。</p>\n<p><code>Popover</code> 封装了常用的逻辑：</p>\n<ul>\n<li>三种触发方式：鼠标点击，鼠标移入以及获取输入焦点</li>\n<li>12种定位 (4 x 3, 每个方位三种)</li>\n<li>以及一个基于 <code>Portal</code> 的弹层实现</li>\n</ul>\n<p>如果这些内置的逻辑无法满足你的需求，你还可以用自己的实现来替换它们，所有这些都很容易实现。</p>\n<h3 id="dai-ma-yan-shi"><a href="#dai-ma-yan-shi">¶</a>代码演示</h3>'}),P.default.createElement(x,{title:"<p>基本使用方式</p>",src:'<span class="hljs-keyword">import</span> { Popover, Button } <span class="hljs-keyword">from</span> <span class="hljs-string">\'zent\'</span>;\n\nReactDOM.render(\n  &lt;Popover \n    className="zent-doc-popover" \n    position={Popover.Position.BottomLeft} \n    display="inline"\n    cushion={5}&gt;\n    &lt;Popover.Trigger.Click&gt;\n      &lt;Button type="primary"&gt;点击打开&lt;/Button&gt;\n    &lt;/Popover.Trigger.Click&gt;\n    &lt;Popover.Content&gt;\n      &lt;div&gt;Popover 弹层内容&lt;/div&gt;\n      &lt;div&gt;可以添加任意内容&lt;/div&gt;\n    &lt;/Popover.Content&gt;\n  &lt;/Popover&gt;\n  , mountNode\n);',demo:y}),P.default.createElement(x,{title:"<p>外部控制打开／关闭</p>",src:'<span class="hljs-keyword">import</span> { Popover, Button } <span class="hljs-keyword">from</span> <span class="hljs-string">\'zent\'</span>;\n\n<span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">PopoverDemo</span> <span class="hljs-keyword">extends</span> <span class="hljs-title">Component</span> </span>{\n  state = {\n    <span class="hljs-attr">visible</span>: <span class="hljs-literal">false</span>\n  };\n\n  render() {\n    <span class="hljs-keyword">return</span> (\n      &lt;div className="zent-doc-popover-container"&gt;\n        &lt;Popover\n          className="zent-doc-popover"\n          visible={this.state.visible} \n          onVisibleChange={v =&gt; this.setState({ visible: v })}\n          position={Popover.Position.BottomLeft} \n          display="inline"\n          cushion={5}&gt;\n          &lt;Popover.Trigger.Base&gt;\n            &lt;Button type="primary" onClick={() =&gt; this.setState({ visible: true })}&gt;点击打开&lt;/Button&gt;\n          &lt;/Popover.Trigger.Base&gt;\n          &lt;Popover.Content&gt;\n            &lt;div&gt;Popover 弹层内容&lt;/div&gt;\n            &lt;div&gt;可以添加任意内容&lt;/div&gt;\n          &lt;/Popover.Content&gt;\n        &lt;/Popover&gt;\n\n        &lt;Button onClick={() =&gt; this.setState({ visible: false })}&gt;关闭&lt;/Button&gt;\n      &lt;/div&gt;\n    );\n  }\n}\n\nReactDOM.render(\n  &lt;PopoverDemo /&gt;\n  , mountNode\n);',demo:B}),P.default.createElement(a,{html:'<h3 id="api"><a href="#api">¶</a>API</h3>\n<table class="table">\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n<th>备选值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>position</td>\n<td>定位的方式, 参见 \n<code>Popover.Positon</code></td>\n<td>Positon</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>cushion</td>\n<td>可选, 定位的偏移量, 通常用来预留空间给小箭头等东西</td>\n<td>number</td>\n<td><code>0</code></td>\n<td></td>\n</tr>\n<tr>\n<td>display</td>\n<td>可选, 在文档流里的出现形式</td>\n<td>string</td>\n<td><code>\'block\'</code></td>\n<td>所有CSS中合法的 \n<code>display</code>\n 值</td>\n</tr>\n<tr>\n<td>onShow</td>\n<td>可选, 弹层显示后的回调函数</td>\n<td>func</td>\n<td><code>noop</code></td>\n<td></td>\n</tr>\n<tr>\n<td>onClose</td>\n<td>可选, 弹层关闭后的回调函数</td>\n<td>func</td>\n<td><code>noop</code></td>\n<td></td>\n</tr>\n<tr>\n<td>onBeforeShow</td>\n<td>可选, 弹层打开前的回调函数, 只有用户触发的打开操作才会调用, 外部设置 \n<code>visible</code>\n 不会调用</td>\n<td>func</td>\n<td><code>noop</code></td>\n<td></td>\n</tr>\n<tr>\n<td>onBeforeClose</td>\n<td>可选, 弹层关闭后的回调函数, 只有用户触发的关闭操作才会调用, 外部设置 \n<code>visible</code>\n 不会调用</td>\n<td>func</td>\n<td><code>noop</code></td>\n<td></td>\n</tr>\n<tr>\n<td>containerSelector</td>\n<td>可选, 弹层的父节点CSS selector</td>\n<td>string</td>\n<td><code>\'body\'</code></td>\n<td>所有合法的CSS selector</td>\n</tr>\n<tr>\n<td>visible</td>\n<td>可选, 手动控制弹层的显示隐藏, 必须和 \n<code>onVisibleChange</code>\n 一起使用</td>\n<td>bool</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>onVisibleChange</td>\n<td>可选, 手动控制时的回调函数, 必须和\n<code>visible</code>\n一起使用, 只有用户手动触发的打开／关闭操作才会调用</td>\n<td>func</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>className</td>\n<td>可选, 自定义额外类名</td>\n<td>string</td>\n<td><code>\'\'</code></td>\n<td></td>\n</tr>\n<tr>\n<td>wrapperClassName</td>\n<td>可选, trigger外层包裹div的类名</td>\n<td>string</td>\n<td><code>\'\'</code></td>\n<td></td>\n</tr>\n<tr>\n<td>prefix</td>\n<td>可选, 自定义前缀</td>\n<td>string</td>\n<td><code>\'zent\'</code></td>\n<td></td>\n</tr>\n</tbody>\n</table>\n<p><code>onBeforeShow</code> 和 <code>onBeforeClose</code> 可以返回一个 <code>Promise</code>，<code>Popover</code> 会在 <code>Promise</code> resolve 后关闭／打开。</p>\n<p>如果你不使用 <code>Promise</code>，<code>onBeforeShow</code> 和 <code>onBeforeClose</code> 也提供一个可选的参数 <code>callback</code>，如果有这个参数的话，你必须在 <code>onBeforeShow</code> 和 <code>onBeforeClose</code> 里面手动调用 <code>callback</code> 才会关闭／打开。</p>\n<p>每种 trigger 都有特有的 API 来控制组件行为, 自定义 trigger 可以按需指定 trigger 的参数.</p>\n<h4 id="trigger.click"><a href="#trigger.click">¶</a>Trigger.Click</h4>\n<table class="table">\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>autoClose</td>\n<td>可选, 是否点击‘外面’自动关闭弹层</td>\n<td>bool</td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>isOutside</td>\n<td>可选, 判断一个节点是否在‘外面’, 点击在外面会关闭弹层。默认trigger和弹层以外的节点都是‘外面’</td>\n<td>func: (node) => bool</td>\n<td><code>() => false</code></td>\n</tr>\n</tbody>\n</table>\n<h4 id="trigger.hover"><a href="#trigger.hover">¶</a>Trigger.Hover</h4>\n<table class="table">\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>showDelay</td>\n<td>可选, 打开弹层前的延迟（单位毫秒）, 如果在这段时间内鼠标移出弹层范围, 弹层不会打开</td>\n<td>number</td>\n<td><code>150</code></td>\n</tr>\n<tr>\n<td>hideDelay</td>\n<td>可选, 关闭弹层前的延迟（单位毫秒）, 如果在这段时间内鼠标重新移入弹层范围, 弹层不会关闭</td>\n<td>number</td>\n<td><code>150</code></td>\n</tr>\n<tr>\n<td>isOutside</td>\n<td>可选, 判断一个节点是否在‘外面’。默认trigger和弹层以外的节点都是‘外面’</td>\n<td>func: (node) => bool</td>\n<td></td>\n</tr>\n</tbody>\n</table>\n<h4 id="trigger.base"><a href="#trigger.base">¶</a>Trigger.Base</h4>\n<p>所有trigger的基类, 实现自定义 trigger 需继承这个类, 继承时一般需要重写 <code>getTriggerProps</code> 方法给 trigger 添加事件, 然后在事件\n处理函数控制弹层的开/闭.</p>\n<table class="table">\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>getTriggerNode</td>\n<td>获取trigger的DOM node</td>\n<td>func: () => node</td>\n</tr>\n<tr>\n<td>getContentNode</td>\n<td>获取弹层的DOM node</td>\n<td>func: () => node</td>\n</tr>\n<tr>\n<td>open</td>\n<td>打开弹层</td>\n<td>func</td>\n</tr>\n<tr>\n<td>close</td>\n<td>关闭弹层</td>\n<td>func</td>\n</tr>\n<tr>\n<td>contentVisible</td>\n<td>弹层当前是否打开</td>\n<td>bool</td>\n</tr>\n<tr>\n<td>onTriggerRefChange</td>\n<td>trigger的ref改变的时候需要调用的回掉函数, 只有在重写 render 函数的时候需要这个函数</td>\n<td>func:(instance)</td>\n</tr>\n</tbody>\n</table>\n<h3 id="position api"><a href="#position%20api">¶</a>Position API</h3>\n<p>Positon用于给弹层提供定位的, 内置12种基础定位, 可以添加自定义定位算法. Popover 上的 <code>cushion</code> 参数会影响定位, 通常用来提供一定量的偏移量。</p>\n<pre><code class="hljs text">                    TopLeft     TopCenter     TopRight\n\nLeftTop                                                             RightTop\n\n\nLeftCenter                                                          RightCenter\n\n\nLeftBottom                                                          RightBottom\n\n                BottomLeft     BottomCenter     BottomRight\n</code></pre>\n<p>除了这12种基础定位算法外，还提供了一个会自动根据屏幕剩余空间自动判断合适位置的定位算法: <code>AutoBottomLeft</code>，这个算法适用于下拉式组件。</p>\n<p>每个定位算法的对象上都有一个 <code>locate</code> 函数，通过这个函数可以实现定位算法的组合。</p>\n<pre><code class="hljs js">Popover.Position.create(<span class="hljs-function">(<span class="hljs-params">anchorBoundingBox, containerBoundingBox, contentDimension, options</span>) =></span> {\n  <span class="hljs-keyword">if</span> (someCondition) {\n    <span class="hljs-keyword">return</span> Popover.Position.BottomLeft.locate(anchorBoundingBox, containerBoundingBox, contentDimension, options);\n  }\n\n  <span class="hljs-keyword">return</span> Popover.Position.TopRight.locate(anchorBoundingBox, containerBoundingBox, contentDimension, options);\n});\n</code></pre>\n<h4 id="position.create"><a href="#position.create">¶</a>Position.create</h4>\n<p>通过这个工厂函数创建自定义的 position, 这个函数接受一个函数作为参数，示例：</p>\n<pre><code class="hljs js"><span class="hljs-comment">// a bounding box is an object with these fields: {top, left, right, bottom, width, height}</span>\n<span class="hljs-keyword">const</span> position = Popover.Position.create(<span class="hljs-function">(<span class="hljs-params">anchorBoundingBox, containerBoundingBox, contentDimension, options</span>) =></span> {\n  <span class="hljs-keyword">return</span> {\n    getCSSStyle() {\n      <span class="hljs-keyword">return</span> {\n        <span class="hljs-attr">position</span>: <span class="hljs-string">\'fixed\'</span>,\n        <span class="hljs-attr">left</span>: <span class="hljs-number">0</span>,\n        <span class="hljs-attr">top</span>: <span class="hljs-number">0</span>,\n        <span class="hljs-attr">opacity</span>: <span class="hljs-number">0</span>\n      };\n    },\n\n    <span class="hljs-attr">name</span>: <span class="hljs-string">\'position-example\'</span>\n  };\n});\n</code></pre>\n<p>anchor 是指 trigger，container 是指离弹层最近的有定位的父节点。</p>\n<p><code>anchorBoundingBox</code> 和 <code>containerBoundingBox</code> 是相对于 container 左上角的坐标。</p>\n<p><code>contentDimension</code> 是弹层的宽高.</p>\n<p><code>options</code> 包含了其它可能有用的参数:</p>\n<ul>\n<li><code>options.cushion</code> Props 上传进来的定位偏移量</li>\n<li><code>options.anchor</code> anchor 的 DOM 节点</li>\n<li><code>options.container</code> container 的 DOM 节点</li>\n<li><code>options.anchorBoundingBoxViewport</code> anchor 相对于 viewport 的坐标</li>\n<li><code>options.containerBoundingBoxViewport</code> container 相对于 viewport 的坐标</li>\n</ul>\n<h4 id="withpopover -gao-jie-zu-jian"><a href="#withpopover%20-gao-jie-zu-jian">¶</a>withPopover 高阶组件</h4>\n<p>这个高阶组件暴露了 <code>Popover</code> 内部的几个重要方法, 可能的使用场景: 在 <code>Content</code> 内部手动关闭弹层.</p>\n<table class="table">\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>getTriggerNode</td>\n<td>获取 trigger 的 DOM node</td>\n<td>func: () => node</td>\n</tr>\n<tr>\n<td>getContentNode</td>\n<td>获取弹层的 DOM node</td>\n<td>func: () => node</td>\n</tr>\n<tr>\n<td>open</td>\n<td>打开弹层</td>\n<td>func</td>\n</tr>\n<tr>\n<td>close</td>\n<td>关闭弹层</td>\n<td>func</td>\n</tr>\n</tbody>\n</table>\n<p>示例：</p>\n<pre><code class="hljs js"><span class="hljs-comment">// 点击close按钮可以关闭弹层</span>\n<span class="hljs-keyword">const</span> HoverContent = withPopover(<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">HoverContent</span>(<span class="hljs-params">{ popover }</span>) </span>{\n  <span class="hljs-keyword">return</span> (\n    <span class="xml"><span class="hljs-tag">&#x3C;<span class="hljs-name">div</span>></span>\n      <span class="hljs-tag">&#x3C;<span class="hljs-name">div</span>></span>popover content<span class="hljs-tag">&#x3C;/<span class="hljs-name">div</span>></span>\n      <span class="hljs-tag">&#x3C;<span class="hljs-name">button</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{popover.close}</span>></span>close<span class="hljs-tag">&#x3C;/<span class="hljs-name">button</span>></span>\n    <span class="hljs-tag">&#x3C;/<span class="hljs-name">div</span>></span></span>\n  );\n});\n\n<span class="xml"><span class="hljs-tag">&#x3C;<span class="hljs-name">Popover</span> <span class="hljs-attr">position</span>=<span class="hljs-string">{Popover.Position.RightTop}</span> <span class="hljs-attr">display</span>=<span class="hljs-string">"inline"</span>></span>\n  <span class="hljs-tag">&#x3C;<span class="hljs-name">Popover.Trigger.Hover</span> <span class="hljs-attr">showDelay</span>=<span class="hljs-string">{500}</span> <span class="hljs-attr">hideDelay</span>=<span class="hljs-string">{200}</span>></span>\n    <span class="hljs-tag">&#x3C;<span class="hljs-name">button</span> <span class="hljs-attr">style</span>=<span class="hljs-string">{{</span> <span class="hljs-attr">marginLeft:</span> <span class="hljs-attr">100</span> }}></span>hover on me<span class="hljs-tag">&#x3C;/<span class="hljs-name">button</span>></span>\n  <span class="hljs-tag">&#x3C;/<span class="hljs-name">Popover.Trigger.Hover</span>></span>\n  <span class="hljs-tag">&#x3C;<span class="hljs-name">PopoverContent</span>></span>\n    <span class="hljs-tag">&#x3C;<span class="hljs-name">HoverContent</span> /></span>\n  <span class="hljs-tag">&#x3C;/<span class="hljs-name">PopoverContent</span>></span>\n<span class="hljs-tag">&#x3C;/<span class="hljs-name">Popover</span>></span>\n</span></code></pre>'}))}}]),t}(b.Component)}});