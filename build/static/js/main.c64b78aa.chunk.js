(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{104:function(e,t,n){e.exports=n(301)},109:function(e,t,n){},111:function(e,t,n){},269:function(e,t,n){},296:function(e,t){},299:function(e,t,n){},301:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(101),i=n.n(r),c=(n(109),n(14)),l=n(15),s=n(17),u=n(16),d=n(18),h=(n(111),n(102)),m=(n(269),function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).handleClick=function(){n.setState({displayColorPicker:!n.state.displayColorPicker})},n.handleClose=function(){n.setState({displayColorPicker:!1})},n.onColorChange=function(e){var t=e.hex;n.setState({color:t})},n.onColorPickerClose=function(){var e=n.props,t=e.rowIndex,o=e.columnIndex,a=n.state.color;n.props.io.emit("user changed color",{rowIndex:t,columnIndex:o,color:a})},n.state={color:e.color,displayColorPicker:!1},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{className:"GridItem",onClick:this.handleClick,style:{backgroundColor:this.state.color}},this.state.displayColorPicker?a.a.createElement("div",{className:"GridItemPopover"},a.a.createElement("div",{className:"GridItemCover",onClick:this.handleClose}),a.a.createElement(h.CompactPicker,{color:this.state.color,onChange:this.onColorChange,onChangeComplete:this.onColorPickerClose})):null)}}]),t}(a.a.Component)),C=n(103),f=n.n(C),p=(n(299),function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={drawing:null},n.socketIo=f()(),n.socketIo.on("initialize",function(e){n.setState({drawing:e})}),n.socketIo.on("new color",function(e){if(n.state.drawing){var t=Object.assign({},n.state.drawing);t[e.rowIndex][e.columnIndex]=e.color,n.setState({drawing:t})}}),n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){if(!this.state.drawing)return a.a.createElement("div",null,'"Loading..."');for(var e=[],t=0;t<this.state.drawing.length;t++){e[t]=[];for(var n=0;n<this.state.drawing[t].length;n++)e[t].push(a.a.createElement(m,{io:this.socketIo,color:this.state.drawing[t][n],rowIndex:t,columnIndex:n}))}return a.a.createElement("div",null,e.map(function(e){return a.a.createElement("div",{className:"GridRow"},e)}))}}]),t}(o.Component)),w=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{className:"App"},a.a.createElement("div",null,"Reddit Place Clone"),a.a.createElement("div",{className:"Subtext"},"Click on a tile to change its color"),a.a.createElement(p,null))}}]),t}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[104,2,1]]]);
//# sourceMappingURL=main.c64b78aa.chunk.js.map