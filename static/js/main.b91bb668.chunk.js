(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],[,,,,,,,,,,,function(e,t,n){e.exports=n(22)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(8),l=n.n(r),c=n(5),i=n(6),u=n(9),s=n(1),m=n(2),f=n(4),d=n(3),h=(n(16),n(17),function(e){var t=e.toDo,n=e.done;return o.a.createElement("div",{className:"app-header d-flex"},o.a.createElement("h1",null,"Todo List"),o.a.createElement("h2",null,t," more to do, ",n," done"))}),p=(n(18),function(e){Object(f.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={term:""},e.onSearchChange=function(t){var n=t.target.value;e.setState({term:n}),e.props.onSearchChange(n)},e}return Object(m.a)(n,[{key:"render",value:function(){return o.a.createElement("input",{type:"text",className:"form-control search-input",placeholder:"type to search",value:this.state.term,onChange:this.onSearchChange})}}]),n}(a.Component)),b=n(10),g=(n(19),function(e){Object(f.a)(n,e);var t=Object(d.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(m.a)(n,[{key:"render",value:function(){var e=this.props,t=e.label,n=e.onDeleted,a=e.onToggleImportant,r=e.onToggleDone,l=e.important,c="todo-list-item";return e.done&&(c+=" done"),l&&(c+=" important"),o.a.createElement("span",{className:c},o.a.createElement("span",{className:"todo-list-item-label",onClick:r},t),o.a.createElement("button",{type:"button",className:"btn btn-outline-success btn-sm float-right",onClick:a},o.a.createElement("i",{className:"fa fa-exclamation"})),o.a.createElement("button",{type:"button",className:"btn btn-outline-danger btn-sm float-right",onClick:n},o.a.createElement("i",{className:"fa fa-trash-o"})))}}]),n}(a.Component)),v=(n(20),function(e){var t=e.todos,n=e.onDeleted,a=e.onToggleImportant,r=e.onToggleDone,l=t.map((function(e){var t=e.id,l=Object(b.a)(e,["id"]);return o.a.createElement("li",{key:t,className:"list-group-item"},o.a.createElement(g,Object.assign({},l,{onDeleted:function(){return n(t)},onToggleImportant:function(){return a(t)},onToggleDone:function(){return r(t)}})))}));return o.a.createElement("ul",{className:"list-group todo-list"},l)}),y=function(e){Object(f.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={filter:""},e.buttons=[{name:"all",label:"All"},{name:"active",label:"Active"},{name:"done",label:"Done"}],e}return Object(m.a)(n,[{key:"render",value:function(){var e=this.props,t=e.filter,n=e.onFilterChange,a=this.buttons.map((function(e){var a=e.name,r=e.label,l=t===a?"btn-info":"btn-outline-secondary";return o.a.createElement("button",{type:"button",className:"btn ".concat(l),key:a,onClick:function(){return n(a)}},r)}));return o.a.createElement("div",{className:"btn-group"},a)}}]),n}(a.Component),E=(n(21),function(e){Object(f.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={label:""},e.onLabelChange=function(t){e.setState({label:t.target.value})},e.onSubmit=function(t){t.preventDefault(),e.props.onItemAdded(e.state.label),e.setState({label:""})},e}return Object(m.a)(n,[{key:"render",value:function(){return o.a.createElement("form",{className:"item-add-form d-flex",onSubmit:this.onSubmit},o.a.createElement("input",{type:"text",className:"form-control",onChange:this.onLabelChange,placeholder:"What needs to be done",value:this.state.label}),o.a.createElement("button",{className:"btn btn-outline-secondary"},"Add Item"))}}]),n}(a.Component)),O=function(e){Object(f.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).maxId=100,e.state={todoData:[e.createTodoItem("Drink Coffee"),e.createTodoItem("Make Awesome App"),e.createTodoItem("Have a lunch")],term:"",filter:"all"},e.deleteItem=function(t){e.setState((function(e){return{todoData:e.todoData.filter((function(e){return e.id!==t}))}}))},e.addItem=function(t){var n=e.createTodoItem(t);e.setState((function(e){var t=e.todoData;return{todoData:[].concat(Object(u.a)(t),[n])}}))},e.onToggleImportant=function(t){e.setState((function(n){var a=n.todoData;return{todoData:e.toggleProperty(a,t,"important")}}))},e.onToggleDone=function(t){e.setState((function(n){var a=n.todoData;return{todoData:e.toggleProperty(a,t,"done")}}))},e.onSearchChange=function(t){e.setState({term:t})},e.onFilterChange=function(t){e.setState({filter:t})},e}return Object(m.a)(n,[{key:"filter",value:function(e,t){switch(t){case"all":return e;case"active":return e.filter((function(e){return!e.done}));case"done":return e.filter((function(e){return e.done}));default:return e}}},{key:"toggleProperty",value:function(e,t,n){return e.map((function(e){return e.id===t?Object(i.a)(Object(i.a)({},e),{},Object(c.a)({},n,!e[n])):e}))}},{key:"search",value:function(e,t){return t.length?e.filter((function(e){return e.label.toLowerCase().indexOf(t.toLowerCase())>-1})):e}},{key:"createTodoItem",value:function(e){return{label:e,important:!1,done:!1,id:this.maxId++}}},{key:"render",value:function(){var e=this.state,t=e.todoData,n=e.term,a=e.filter,r=this.filter(this.search(t,n),a),l=t.filter((function(e){return e.done})).length,c=t.length-l;return o.a.createElement("div",{className:"todo-app"},o.a.createElement(h,{toDo:c,done:l}),o.a.createElement("div",{className:"top-panel d-flex"},o.a.createElement(p,{onSearchChange:this.onSearchChange}),o.a.createElement(y,{filter:a,onFilterChange:this.onFilterChange})),o.a.createElement(v,{todos:r,onDeleted:this.deleteItem,onToggleImportant:this.onToggleImportant,onToggleDone:this.onToggleDone}),o.a.createElement(E,{onItemAdded:this.addItem}))}}]),n}(a.Component);l.a.render(o.a.createElement(O,null),document.getElementById("root"))}],[[11,1,2]]]);
//# sourceMappingURL=main.b91bb668.chunk.js.map