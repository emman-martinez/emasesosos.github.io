(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{216:function(e,a,t){e.exports=t.p+"static/media/logo.ee7cd8ed.svg"},217:function(e,a,t){e.exports=t.p+"static/media/reduxLogo.8db50107.svg"},218:function(e,a,t){e.exports=t.p+"static/media/fbLogo.b451d150.svg"},220:function(e,a,t){e.exports=t(430)},225:function(e,a,t){},415:function(e,a,t){},429:function(e,a,t){},430:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),l=t(213),c=t.n(l),o=(t(225),t(3)),s=t(33),i=t(7),m=t(4),u=t(133),d=t(64),p=t.n(d),b=(t(407),t(409),t(46)),E={};p.a.initializeApp({apiKey:"AIzaSyAOccivJ6gGZZrMmUxb9_YbMDWq9Arem_s",authDomain:"bibliostore-774aa.firebaseapp.com",databaseURL:"https://bibliostore-774aa.firebaseio.com",projectId:"bibliostore-774aa",storageBucket:"bibliostore-774aa.appspot.com",messagingSenderId:"4431804865",appId:"1:4431804865:web:a7d2be54449e7d56"});var f=Object(i.c)(Object(m.reactReduxFirebase)(p.a,{userProfile:"users",useFirestoreForProfile:!0}),Object(u.reduxFirestore)(p.a))(i.d)(Object(i.b)({firebase:m.firebaseReducer,firestore:u.firestoreReducer,usuario:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"BUSCAR_USUARIO":return Object(b.a)({},e,{nombre:a.usuario.nombre,apellido:a.usuario.apellido,codigo:a.usuario.codigo,carrera:a.usuario.carrera});default:return e}}}),{},Object(i.c)(Object(m.reactReduxFirebase)(p.a))),v=t(9),h=t(11),N=t(12),g=t(14),y=t(13),j=t(15),O=(t(415),function(){return n.a.createElement("div",{className:"spinner"},n.a.createElement("div",{className:"bounce1"}),n.a.createElement("div",{className:"bounce2"}),n.a.createElement("div",{className:"bounce3"}))}),w=function(e){function a(){var e,t;Object(h.a)(this,a);for(var r=arguments.length,l=new Array(r),c=0;c<r;c++)l[c]=arguments[c];return(t=Object(g.a)(this,(e=Object(y.a)(a)).call.apply(e,[this].concat(l)))).tituloInput=n.a.createRef(),t.isbnInput=n.a.createRef(),t.editorialInput=n.a.createRef(),t.existenciaInput=n.a.createRef(),t.editarLibro=function(e){e.preventDefault();var a={titulo:t.tituloInput.current.value,ISBN:t.isbnInput.current.value,editorial:t.editorialInput.current.value,existencia:t.existenciaInput.current.value},r=t.props,n=r.libro,l=r.firestore,c=r.history;l.update({collection:"libros",doc:n.id},a).then(c.push("/"))},t}return Object(j.a)(a,e),Object(N.a)(a,[{key:"render",value:function(){var e=this.props.libro;return e?n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-12 mb-4"},n.a.createElement(o.b,{to:"/",className:"btn btn-secondary"},n.a.createElement("i",{className:"fas fa-arrow-circle-left"})," ","","Volver al Listado")),n.a.createElement("div",{className:"col-12"},n.a.createElement("h2",null,n.a.createElement("i",{className:"fas fa-book"})," ","","Editar Libro"),n.a.createElement("div",{className:"row justify-content-center"},n.a.createElement("div",{className:"col-md-8 mt-5"},n.a.createElement("form",{onSubmit:this.editarLibro},n.a.createElement("div",{className:"form-group"},n.a.createElement("label",null,"T\xedtulo: "),n.a.createElement("input",{type:"text",className:"form-control",name:"titulo",placeholder:"T\xedtulo o Nombre del Libro",required:!0,ref:this.tituloInput,defaultValue:e.titulo})),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",null,"Editorial: "),n.a.createElement("input",{type:"text",className:"form-control",name:"editorial",placeholder:"Editorial del Libro",required:!0,ref:this.editorialInput,defaultValue:e.editorial})),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",null,"ISBN: "),n.a.createElement("input",{type:"text",className:"form-control",name:"ISBN",placeholder:"ISBN",required:!0,ref:this.isbnInput,defaultValue:e.ISBN})),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",null,"Existencia: "),n.a.createElement("input",{type:"number",className:"form-control",name:"existencia",placeholder:"Existencia",required:!0,ref:this.existenciaInput,defaultValue:e.existencia})),n.a.createElement("input",{type:"submit",value:"Editar Libro",className:"btn btn-success"})))))):n.a.createElement(O,null)}}]),a}(r.Component),S=Object(i.c)(Object(m.firestoreConnect)(function(e){return[{collection:"libros",storeAs:"libro",doc:e.match.params.id}]}),Object(v.connect)(function(e,a){var t=e.firestore.ordered;return{libro:t.libro&&t.libro[0]}}))(w),x=Object(i.c)(Object(m.firestoreConnect)([{collection:"libros"}]),Object(v.connect)(function(e,a){return{libros:e.firestore.ordered.libros}}))(function(e){var a=e.libros;if(!a)return n.a.createElement(O,null);return n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-12 mb-4"},n.a.createElement(o.b,{to:"/libros/nuevo",className:"btn btn-success"},n.a.createElement("i",{className:"fas fa-plus"})," ","","Nuevo Libro")),n.a.createElement("div",{className:"col-md-8"},n.a.createElement("h2",null,n.a.createElement("i",{className:"fas fa-book"})," ","","Libros")),n.a.createElement("table",{className:"table table-striped mt-4"},n.a.createElement("thead",{className:"text-light bg-primary"},n.a.createElement("tr",null,n.a.createElement("th",null,"T\xedtulo"),n.a.createElement("th",null,"ISBN"),n.a.createElement("th",null,"Editorial"),n.a.createElement("th",null,"Existencia"),n.a.createElement("th",null,"Disponibles"),n.a.createElement("th",null,"Acciones"))),n.a.createElement("tbody",null,a.map(function(a){return n.a.createElement("tr",{key:a.id},n.a.createElement("td",null,a.titulo),n.a.createElement("td",null,a.ISBN),n.a.createElement("td",null,a.editorial),n.a.createElement("td",null,a.existencia),n.a.createElement("td",null,a.existencia-a.prestados.length),n.a.createElement("td",null,n.a.createElement(o.b,{to:"/libros/mostrar/".concat(a.id),className:"btn btn-success btn-block"},n.a.createElement("i",{className:"fas fa-angle-double-right"})," ","","M\xe1s Informaci\xf3n"),n.a.createElement("button",{type:"button",className:"btn btn-danger btn-block",onClick:function(){return t=a.id,console.log("Eliminando... ",t),void e.firestore.delete({collection:"libros",doc:t});var t}},n.a.createElement("i",{className:"fas fa-trash-alt"})," ","","Eliminar")))}))))}),C=function(e){function a(){var e,t;Object(h.a)(this,a);for(var r=arguments.length,n=new Array(r),l=0;l<r;l++)n[l]=arguments[l];return(t=Object(g.a)(this,(e=Object(y.a)(a)).call.apply(e,[this].concat(n)))).devolverLibro=function(e){var a=t.props.firestore,r=Object(b.a)({},t.props.libro),n=r.prestados.filter(function(a){return a.codigo!==e});r.prestados=n,a.update({collection:"libros",doc:r.id},r)},t}return Object(j.a)(a,e),Object(N.a)(a,[{key:"render",value:function(){var e,a=this,t=this.props.libro;return t?(e=t.existencia-t.prestados.length>0?n.a.createElement(o.b,{to:"/libros/prestamo/".concat(t.id),className:"btn btn-success my-3"},"Solicitar Pr\xe9stamo"):null,n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-6 mb-4"},n.a.createElement(o.b,{to:"/",className:"btn btn-secondary"},n.a.createElement("i",{className:"fas fa-arrow-circle-left"})," ","","Volver al Listado")),n.a.createElement("div",{className:"col-md-6 mb-4"},n.a.createElement(o.b,{to:"/libros/editar/".concat(t.id),className:"btn btn-primary float-right"},n.a.createElement("i",{className:"fas fa-pencil-alt"})," ","","Editar Libro")),n.a.createElement("hr",{className:"mx-5 w-100"}),n.a.createElement("div",{className:"col-12"},n.a.createElement("h2",{className:"mb-4"},t.titulo),n.a.createElement("p",null,n.a.createElement("span",{className:"font-weight-bold"},"ISBN:")," ","",t.ISBN),n.a.createElement("p",null,n.a.createElement("span",{className:"font-weight-bold"},"Editorial:")," ","",t.editorial),n.a.createElement("p",null,n.a.createElement("span",{className:"font-weight-bold"},"Existencia:")," ","",t.existencia),n.a.createElement("p",null,n.a.createElement("span",{className:"font-weight-bold"},"Disponibles:")," ","",t.existencia-t.prestados.length),e,n.a.createElement("h3",{className:"my-2"},"Personas que tienen el Libro Prestado"),t.prestados.map(function(e){return n.a.createElement("div",{key:e.codigo,className:"card my-2"},n.a.createElement("h4",{className:"card-header"},e.nombre," ",e.apellido),n.a.createElement("div",{className:"card-body"},n.a.createElement("p",null,n.a.createElement("span",{className:"font-weight-bold"},"C\xf3digo:")," ","",e.codigo),n.a.createElement("p",null,n.a.createElement("span",{className:"font-weight-bold"},"Carrera:")," ","",e.carrera),n.a.createElement("p",null,n.a.createElement("span",{className:"font-weight-bold"},"Fecha Solicitud:")," ","",e.fecha_solicitud)),n.a.createElement("div",{className:"card-footer"},n.a.createElement("button",{type:"button",className:"btn btn-success font-weight-bold",onClick:function(){return a.devolverLibro(e.codigo)}},"Realizar Devoluci\xf3n")))})))):n.a.createElement(O,null)}}]),a}(r.Component),I=Object(i.c)(Object(m.firestoreConnect)(function(e){return[{collection:"libros",storeAs:"libro",doc:e.match.params.id}]}),Object(v.connect)(function(e,a){var t=e.firestore.ordered;return{libro:t.libro&&t.libro[0]}}))(C),A=t(27),k=function(e){function a(){var e,t;Object(h.a)(this,a);for(var r=arguments.length,n=new Array(r),l=0;l<r;l++)n[l]=arguments[l];return(t=Object(g.a)(this,(e=Object(y.a)(a)).call.apply(e,[this].concat(n)))).state={titulo:"",ISBN:"",editorial:"",existencia:""},t.agregarLibro=function(e){e.preventDefault();var a=t.state;a.prestados=[];var r=t.props,n=r.firestore,l=r.history;n.add({collection:"libros"},a).then(function(){return l.push("/")})},t.leerDato=function(e){t.setState(Object(A.a)({},e.target.name,e.target.value))},t}return Object(j.a)(a,e),Object(N.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-12 mb-4"},n.a.createElement(o.b,{to:"/",className:"btn btn-secondary"},n.a.createElement("i",{className:"fas fa-arrow-circle-left"})," ","","Volver al Listado")),n.a.createElement("div",{className:"col-12"},n.a.createElement("h2",null,n.a.createElement("i",{className:"fas fa-book"})," ","","Nuevo Libro"),n.a.createElement("div",{className:"row justify-content-center"},n.a.createElement("div",{className:"col-md-8 mt-5"},n.a.createElement("form",{onSubmit:this.agregarLibro},n.a.createElement("div",{className:"form-group"},n.a.createElement("label",null,"T\xedtulo: "),n.a.createElement("input",{type:"text",className:"form-control",name:"titulo",placeholder:"T\xedtulo o Nombre del Libro",required:!0,value:this.state.titulo,onChange:this.leerDato})),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",null,"Editorial: "),n.a.createElement("input",{type:"text",className:"form-control",name:"editorial",placeholder:"Editorial del Libro",required:!0,value:this.state.editorial,onChange:this.leerDato})),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",null,"ISBN: "),n.a.createElement("input",{type:"text",className:"form-control",name:"ISBN",placeholder:"ISBN del Libro",required:!0,value:this.state.ISBN,onChange:this.leerDato})),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",null,"Existencia: "),n.a.createElement("input",{type:"number",min:"0",className:"form-control",name:"existencia",placeholder:"Cantidad en Existencia",required:!0,value:this.state.existencia,onChange:this.leerDato})),n.a.createElement("input",{type:"submit",value:"Agregar Libro",className:"btn btn-success"}))))))}}]),a}(r.Component),L=Object(m.firestoreConnect)()(k),R=t(219),D=function(e){var a=e.alumno;return n.a.createElement("div",{className:"card my-3"},n.a.createElement("h3",{className:"card-header bg-primary text-white"},"Datos del Solicitante"),n.a.createElement("div",{className:"card body"},n.a.createElement("p",{className:"font-weight-normal"}," Nombre: ","",n.a.createElement("span",{className:"font-weight-normal"},a.nombre)),n.a.createElement("p",{className:"font-weight-normal"}," C\xf3digo: ","",n.a.createElement("span",{className:"font-weight-normal"},a.codigo)),n.a.createElement("p",{className:"font-weight-normal"}," Carrera: ","",n.a.createElement("span",{className:"font-weight-normal"},a.carrera))))},B=function(e){function a(){var e,t;Object(h.a)(this,a);for(var r=arguments.length,n=new Array(r),l=0;l<r;l++)n[l]=arguments[l];return(t=Object(g.a)(this,(e=Object(y.a)(a)).call.apply(e,[this].concat(n)))).state={noResultados:!1,busqueda:""},t.buscarAlumno=function(e){e.preventDefault();var a=t.state.busqueda,r=t.props,n=r.firestore,l=r.buscarUsuario;n.collection("suscriptores").where("codigo","==",a).get().then(function(e){if(console.log(e),e.empty)l({}),t.setState({noResultados:!0});else{var a=e.docs[0];l(a.data()),t.setState({noResultados:!1})}})},t.solicitarPrestamo=function(){var e=t.props.usuario;e.fecha_solicitud=(new Date).toLocaleDateString();var a;a=[].concat(Object(R.a)(t.props.libro.prestados),[e]);var r=Object(b.a)({},t.props.libro);delete r.prestados,r.prestados=a;var n=t.props,l=n.firestore,c=n.history;l.update({collection:"libros",doc:r.id},r).then(c.push("/"))},t.leerDato=function(e){t.setState(Object(A.a)({},e.target.name,e.target.value))},t}return Object(j.a)(a,e),Object(N.a)(a,[{key:"render",value:function(){var e=this.props.libro;if(!e)return n.a.createElement(O,null);var a,t,r=this.props.usuario;r.nombre?(a=n.a.createElement(D,{alumno:r}),t=n.a.createElement("button",{type:"button",className:"btn btn-primary btn-block",onClick:this.solicitarPrestamo},"Solicitar Pr\xe9stamo")):(a=null,t=null);var l="";return l=this.state.noResultados?n.a.createElement("div",{className:"alert alert-danger text-center font-weight-bold"},"No hay resultados para ese c\xf3digo"):null,n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-12 mb-4"},n.a.createElement(o.b,{to:"/",className:"btn btn-secondary"},n.a.createElement("i",{className:"fas fa-arrow-circle-left"})," ","","Volver al Listado")),n.a.createElement("div",{className:"col-12"},n.a.createElement("h2",null,n.a.createElement("i",{className:"fas fa-book"})," ","","Solicitar Pr\xe9stamo: ",e.titulo),n.a.createElement("div",{className:"row justify-content-center mt-5"},n.a.createElement("div",{className:"col-md-8"},n.a.createElement("form",{onSubmit:this.buscarAlumno,className:"mb-4"},n.a.createElement("legend",{className:"color-primary text-center"},"Busca el Suscriptor por C\xf3digo"),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"text",name:"busqueda",className:"form-control",onChange:this.leerDato})),n.a.createElement("input",{value:"Buscar Alumno",type:"submit",className:"btn btn-success btn-block"})),a,t,l))))}}]),a}(r.Component),q=Object(i.c)(Object(m.firestoreConnect)(function(e){return[{collection:"libros",storeAs:"libro",doc:e.match.params.id}]}),Object(v.connect)(function(e,a){var t=e.firestore.ordered,r=e.usuario;return{libro:t.libro&&t.libro[0],usuario:r}},{buscarUsuario:function(e){return{type:"BUSCAR_USUARIO",usuario:e}}}))(B),P=Object(i.c)(Object(m.firestoreConnect)([{collection:"suscriptores"}]),Object(v.connect)(function(e,a){return{suscriptores:e.firestore.ordered.suscriptores}}))(function(e){if(!e.suscriptores)return n.a.createElement(O,null);return n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-12 mb-4"},n.a.createElement(o.b,{to:"/suscriptores/nuevo",className:"btn btn-primary"},n.a.createElement("i",{className:"fas fa-plus"})," ","","Nuevo Suscriptor")),n.a.createElement("div",{className:"col-md-8"},n.a.createElement("h2",null,n.a.createElement("i",{className:"fas fa-users"})," Suscriptores")),n.a.createElement("table",{className:"table table-striped mt-4"},n.a.createElement("thead",{className:"text-light bg-primary"},n.a.createElement("tr",null,n.a.createElement("th",null,"Nombre: "),n.a.createElement("th",null,"Carrera: "),n.a.createElement("th",null,"Acciones: "))),n.a.createElement("tbody",null,e.suscriptores.map(function(a){return n.a.createElement("tr",{key:a.id},n.a.createElement("td",null,a.nombre," ",a.apellido),n.a.createElement("td",null,a.carrera),n.a.createElement("td",null,n.a.createElement(o.b,{to:"/suscriptores/mostrar/".concat(a.id),className:"btn btn-success btn-block"},n.a.createElement("i",{className:"fas fa-angle-double-right"})," ","","M\xe1s Informaci\xf3n"),n.a.createElement("button",{type:"button",className:"btn btn-danger btn-block",onClick:function(){return t=a.id,console.log("Eliminando... ",t),void e.firestore.delete({collection:"suscriptores",doc:t});var t}},n.a.createElement("i",{className:"fas fa-trash-alt"})," ","","Eliminar")))}))))}),V=Object(i.c)(Object(m.firestoreConnect)(function(e){return[{collection:"suscriptores",storeAs:"suscriptor",doc:e.match.params.id}]}),Object(v.connect)(function(e,a){var t=e.firestore.ordered;return{suscriptor:t.suscriptor&&t.suscriptor[0]}}))(function(e){return e.suscriptor?n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-6 mb-4"},n.a.createElement(o.b,{to:"/suscriptores",className:"btn btn-secondary"},n.a.createElement("i",{className:"fas fa-arrow-circle-left"})," ","","Volver al Listado")),n.a.createElement("div",{className:"col-md-6"},n.a.createElement(o.b,{to:"/suscriptores/editar/".concat(e.suscriptor.id),className:"btn btn-primary float-right"},n.a.createElement("i",{className:"fas fa-pencil-alt"})," ","","Editar Suscriptor")),n.a.createElement("hr",{className:"mx-5 w-100"}),n.a.createElement("div",{className:"col-12"},n.a.createElement("h2",{className:"mb-4"},e.suscriptor.nombre," ",e.suscriptor.apellido),n.a.createElement("p",null,n.a.createElement("span",{className:"font-weight-bold"},"Carrera:")," ","",e.suscriptor.carrera),n.a.createElement("p",null,n.a.createElement("span",{className:"font-weight-bold"},"C\xf3digo:")," ","",e.suscriptor.codigo))):n.a.createElement(O,null)}),U=function(e){function a(){var e,t;Object(h.a)(this,a);for(var r=arguments.length,l=new Array(r),c=0;c<r;c++)l[c]=arguments[c];return(t=Object(g.a)(this,(e=Object(y.a)(a)).call.apply(e,[this].concat(l)))).nombreInput=n.a.createRef(),t.apellidoInput=n.a.createRef(),t.carreraInput=n.a.createRef(),t.codigoInput=n.a.createRef(),t.editarSuscriptor=function(e){e.preventDefault();var a={nombre:t.nombreInput.current.value,apellido:t.apellidoInput.current.value,carrera:t.carreraInput.current.value,codigo:t.codigoInput.current.value},r=t.props,n=r.suscriptor,l=r.firestore,c=r.history;l.update({collection:"suscriptores",doc:n.id},a).then(c.push("/suscriptores"))},t}return Object(j.a)(a,e),Object(N.a)(a,[{key:"render",value:function(){var e=this.props.suscriptor;return e?n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-12 mb-4"},n.a.createElement(o.b,{to:"/suscriptores",className:"btn btn-secondary"},n.a.createElement("i",{className:"fas fa-arrow-circle-left"})," ","","Volver al Listado")),n.a.createElement("div",{className:"col-12"},n.a.createElement("h2",null,n.a.createElement("i",{className:"fas fa-user"})," ","","Editar Suscriptor"),n.a.createElement("div",{className:"row justify-content-center"},n.a.createElement("div",{className:"col-md-8 mt-5"},n.a.createElement("form",{onSubmit:this.editarSuscriptor},n.a.createElement("div",{className:"form-group"},n.a.createElement("label",null,"Nombre: "),n.a.createElement("input",{type:"text",className:"form-control",name:"nombre",placeholder:"Nombre del Suscriptor",required:!0,ref:this.nombreInput,defaultValue:e.nombre})),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",null,"Apellido: "),n.a.createElement("input",{type:"text",className:"form-control",name:"apellido",placeholder:"Apellido del Suscriptor",required:!0,ref:this.apellidoInput,defaultValue:e.apellido})),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",null,"Carrera: "),n.a.createElement("input",{type:"text",className:"form-control",name:"carrera",placeholder:"Carrera del Suscriptor",required:!0,ref:this.carreraInput,defaultValue:e.carrera})),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",null,"C\xf3digo: "),n.a.createElement("input",{type:"text",className:"form-control",name:"codigo",placeholder:"C\xf3digo del Suscriptor",required:!0,ref:this.codigoInput,defaultValue:e.codigo})),n.a.createElement("input",{type:"submit",value:"Editar Suscriptor",className:"btn btn-success"})))))):n.a.createElement(O,null)}}]),a}(r.Component),F=Object(i.c)(Object(m.firestoreConnect)(function(e){return[{collection:"suscriptores",storeAs:"suscriptor",doc:e.match.params.id}]}),Object(v.connect)(function(e,a){var t=e.firestore.ordered;return{suscriptor:t.suscriptor&&t.suscriptor[0]}}))(U),T=function(e){function a(){var e,t;Object(h.a)(this,a);for(var r=arguments.length,n=new Array(r),l=0;l<r;l++)n[l]=arguments[l];return(t=Object(g.a)(this,(e=Object(y.a)(a)).call.apply(e,[this].concat(n)))).state={nombre:"",apellido:"",carrera:"",codigo:""},t.agregarSuscriptor=function(e){e.preventDefault();var a=t.state,r=t.props,n=r.firestore,l=r.history;n.add({collection:"suscriptores"},a).then(function(){return l.push("/suscriptores")})},t.leerDato=function(e){t.setState(Object(A.a)({},e.target.name,e.target.value))},t}return Object(j.a)(a,e),Object(N.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-12 mb-4"},n.a.createElement(o.b,{to:"/suscriptores",className:"btn btn-secondary"},n.a.createElement("i",{className:"fas fa-arrow-circle-left"})," ","","Volver al Listado")),n.a.createElement("div",{className:"col-12"},n.a.createElement("h2",null,n.a.createElement("i",{className:"fas fa-user-plus"})," ","","Nuevo Suscriptor"),n.a.createElement("div",{className:"row justify-content-center"},n.a.createElement("div",{className:"col-md-8 mt-5"},n.a.createElement("form",{onSubmit:this.agregarSuscriptor},n.a.createElement("div",{className:"form-group"},n.a.createElement("label",null,"Nombre: "),n.a.createElement("input",{type:"text",className:"form-control",name:"nombre",placeholder:"Nombre del Suscriptor",required:!0,onChange:this.leerDato,value:this.state.nombre})),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",null,"Apellido: "),n.a.createElement("input",{type:"text",className:"form-control",name:"apellido",placeholder:"Apellido del Suscriptor",required:!0,onChange:this.leerDato,value:this.state.apellido})),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",null,"Carrera: "),n.a.createElement("input",{type:"text",className:"form-control",name:"carrera",placeholder:"Carrera del Suscriptor",required:!0,onChange:this.leerDato,value:this.state.carrera})),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",null,"C\xf3digo: "),n.a.createElement("input",{type:"text",className:"form-control",name:"codigo",placeholder:"C\xf3digo del Suscriptor",required:!0,onChange:this.leerDato,value:this.state.codigo})),n.a.createElement("input",{type:"submit",value:"Agregar Suscriptor",className:"btn btn-success"}))))))}}]),a}(r.Component),_=Object(m.firestoreConnect)()(T),z=function(e){function a(){var e,t;Object(h.a)(this,a);for(var r=arguments.length,n=new Array(r),l=0;l<r;l++)n[l]=arguments[l];return(t=Object(g.a)(this,(e=Object(y.a)(a)).call.apply(e,[this].concat(n)))).state={email:"",password:""},t.iniciarSesion=function(e){e.preventDefault();var a=t.props.firebase,r=t.state,n=r.email,l=r.password;a.login({email:n,password:l}).then(function(e){return console.log("Iniciaste Sesi\xf3n")}).catch(function(e){return console.log("Hubo un error")})},t.leerDatos=function(e){t.setState(Object(A.a)({},e.target.name,e.target.value))},t}return Object(j.a)(a,e),Object(N.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"row justify-content-center"},n.a.createElement("div",{className:"col-md-5"},n.a.createElement("div",{className:"card mt-5"},n.a.createElement("div",{className:"card-body"},n.a.createElement("h2",{className:"text-center py-4"},n.a.createElement("i",{className:"fas fa-lock"})," ","","Iniciar Sesi\xf3n"),n.a.createElement("form",{onSubmit:this.iniciarSesion},n.a.createElement("div",{className:"form-group"},n.a.createElement("label",null,"Email:"),n.a.createElement("input",{type:"email",className:"form-control",name:"email",required:!0,value:this.state.email,onChange:this.leerDatos})),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",null,"Password:"),n.a.createElement("input",{type:"password",className:"form-control",name:"password",required:!0,value:this.state.password,onChange:this.leerDatos})),n.a.createElement("input",{type:"submit",className:"btn btn-success btn-block",value:"Iniciar Sesi\xf3n"}))))))}}]),a}(r.Component),J=Object(m.firebaseConnect)()(z),M=t(132),W=t.n(M),Q=t(137),Z=W()({}),G=Object(Q.connectedRouterRedirect)({wrapperDisplayName:"UserIsAuthenticated",AuthenticatingComponent:O,allowRedirectBack:!0,redirectPath:function(e,a){return Z.getRedirectQueryParam(a)||"/login"},authenticatingSelector:function(e){var a=e.firebase,t=a.auth,r=(a.profile,a.isInitializing);return!t.isLoaded||!0===r},authenticatedSelector:function(e){var a=e.firebase.auth;return a.isLoaded&&!a.isEmpty}}),H=Object(Q.connectedRouterRedirect)({wrapperDisplayName:"UserIsNotAuthenticated",AuthenticatingComponent:O,allowRedirectBack:!1,redirectPath:function(e,a){return Z.getRedirectQueryParam(a)||"/"},authenticatingSelector:function(e){var a=e.firebase,t=a.auth,r=a.isInitializing;return!t.isLoaded||!0===r},authenticatedSelector:function(e){var a=e.firebase.auth;return a.isLoaded&&a.isEmpty}}),K=function(e){function a(){var e,t;Object(h.a)(this,a);for(var r=arguments.length,n=new Array(r),l=0;l<r;l++)n[l]=arguments[l];return(t=Object(g.a)(this,(e=Object(y.a)(a)).call.apply(e,[this].concat(n)))).state={usuarioAutenticado:!1},t.cerrarSesion=function(){t.props.firebase.logout()},t}return Object(j.a)(a,e),Object(N.a)(a,[{key:"render",value:function(){var e=this.state.usuarioAutenticado,a=this.props.auth;return n.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary mb-5"},n.a.createElement("nav",{className:"navbar navbar-light"},n.a.createElement("span",{className:"navbar-brand mb-0 h1"},"Administrador de Biblioteca")),n.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarColor01","aria-controls":"navbarColor01","aria-expanded":"false","aria-label":"Toggle navigation"},n.a.createElement("span",{className:"navbar-toggler-icon"})),n.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarColor01"},e?n.a.createElement("ul",{className:"navbar-nav mr-auto"},n.a.createElement("li",{className:"nav-item"},n.a.createElement(o.b,{to:"/suscriptores",className:"nav-link"},"Suscriptores")),n.a.createElement("li",{className:"nav-item"},n.a.createElement(o.b,{to:"/",className:"nav-link"},"Libros"))):null,e?n.a.createElement("ul",{className:"navbar-nav ml-auto"},n.a.createElement("li",{className:"nav-item"},n.a.createElement("a",{href:"#!",className:"nav-link"},a.email)),n.a.createElement("li",{className:"nav-item"},n.a.createElement("button",{type:"button",className:"btn btn-danger",onClick:this.cerrarSesion},"Cerrar Sesi\xf3n"))):null))}}],[{key:"getDerivedStateFromProps",value:function(e,a){return e.auth.uid?{usuarioAutenticado:!0}:{usuarioAutenticado:!1}}}]),a}(r.Component),Y=Object(i.c)(Object(m.firebaseConnect)(),Object(v.connect)(function(e,a){return{auth:e.firebase.auth}}))(K),$=t(216),X=t.n($),ee=t(217),ae=t.n(ee),te=t(218),re=t.n(te),ne=function(){return n.a.createElement("div",{className:""},n.a.createElement("div",{className:"cajaPadre"},n.a.createElement("div",{className:"caja uno"},n.a.createElement("img",{src:X.a,className:"App-logo",alt:"logo"})),n.a.createElement("div",{className:"caja dos"},n.a.createElement("h1",{className:"tama\xf1o"},"ReactJS"))),n.a.createElement("div",{className:"cajaPadre"},n.a.createElement("div",{className:"caja uno"},n.a.createElement("h1",{className:"tama\xf1oR"},"Redux")),n.a.createElement("div",{className:"caja dos"},n.a.createElement("img",{src:ae.a,className:"App-logo2",alt:"reduxLogo"}))),n.a.createElement("div",{className:"cajaPadre"},n.a.createElement("div",{className:"caja uno"},n.a.createElement("img",{src:re.a,className:"",alt:"fireBaseLogo"}))))};t(429);var le=function(){return n.a.createElement(v.Provider,{store:f},n.a.createElement(o.a,null,n.a.createElement(Y,null),n.a.createElement("div",{className:"container"},n.a.createElement(s.c,null,n.a.createElement(s.a,{exact:!0,path:"/",component:G(x)}),n.a.createElement(s.a,{exact:!0,path:"/libros/mostrar/:id",component:G(I)}),n.a.createElement(s.a,{exact:!0,path:"/libros/nuevo",component:G(L)}),n.a.createElement(s.a,{exact:!0,path:"/libros/editar/:id",component:S}),n.a.createElement(s.a,{exact:!0,path:"/libros/prestamo/:id",component:G(q)}),n.a.createElement(s.a,{exact:!0,path:"/suscriptores",component:G(P)}),n.a.createElement(s.a,{exact:!0,path:"/suscriptores/nuevo",component:G(_)}),n.a.createElement(s.a,{exact:!0,path:"/suscriptores/mostrar/:id",component:G(V)}),n.a.createElement(s.a,{exact:!0,path:"/suscriptores/editar/:id",component:G(F)}),n.a.createElement(s.a,{exact:!0,path:"/login",component:H(J)}))),n.a.createElement(ne,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(le,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[220,1,2]]]);
//# sourceMappingURL=main.b6f73d96.chunk.js.map